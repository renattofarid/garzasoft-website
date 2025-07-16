"use client";

import { useEffect } from "react";
import { create } from "zustand";
import { getClients } from "../lib/client.actions";
import type { Client } from "../lib/client.interface";

interface ClientsStore {
  clients: Client[];
  filteredClients: Client[];
  departments: string[];
  departmentsByType: Record<string, string[]>;
  types: string[];
  selectedDepartment: string | null;
  selectedType: string | null;
  searchTerm: string;
  selectedClient: Client | null;
  isModalOpen: boolean;
  loading: boolean;
  isSearching: boolean;
  loadClients: () => void;
  setSelectedDepartment: (department: string | null) => void;
  setSelectedType: (type: string | null) => void;
  setSearchTerm: (search: string) => void;
  setSelectedClient: (client: Client | null) => void;
  setIsModalOpen: (isOpen: boolean) => void;
  filterClients: () => void;
  getDepartmentsByType: (type: string | null) => string[];
}

export const useClientsStore = create<ClientsStore>((set, get) => ({
  clients: [],
  filteredClients: [],
  departments: [],
  departmentsByType: {},
  types: [],
  selectedDepartment: null,
  selectedType: null,
  searchTerm: "",
  selectedClient: null,
  isModalOpen: false,
  loading: true,
  isSearching: false,

  loadClients: async () => {
    set({ loading: true });
    try {
      // Cargar todos los clientes sin filtros inicialmente
      const clients = await getClients({});
      console.log("Clientes cargados:", clients);

      // Extraer tipos únicos
      // Contar clientes por tipo
      const typeCounts: Record<string, number> = {};
      clients.forEach((client) => {
        if (client.type) {
          typeCounts[client.type] = (typeCounts[client.type] || 0) + 1;
        }
      });

      // Ordenar los tipos por cantidad de clientes (descendente)
      const types = Object.entries(typeCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([type]) => type);

      console.log("Tipos ordenados por cantidad de clientes:", types);

      // Extraer departamentos únicos de todos los clientes
      const allDepartments: string[] = [];
      clients.forEach((client) => {
        client.departments.forEach((dept) => {
          if (!allDepartments.includes(dept.name)) {
            allDepartments.push(dept.name);
          }
        });
      });
      console.log("Departamentos extraídos:", allDepartments);

      // Crear un mapa de departamentos por tipo
      const departmentsByType: Record<string, string[]> = {};

      // Agregar todos los departamentos para la opción "Todos"
      departmentsByType["all"] = allDepartments;

      // Agrupar departamentos por tipo
      types.forEach((type) => {
        const depsForType = new Set<string>();
        clients
          .filter((client) => client.type === type)
          .forEach((client) => {
            client.departments.forEach((dept) => {
              depsForType.add(dept.name);
            });
          });
        departmentsByType[type] = Array.from(depsForType);
      });

      // Seleccionar automáticamente el primer tipo si hay tipos disponibles
      const firstType = types.length > 0 ? types[0] : null;

      // Filtrar los clientes basados en el primer tipo
      const initialFilteredClients = firstType
        ? clients.filter((client) => client.type === firstType)
        : clients;

      set({
        clients,
        filteredClients: initialFilteredClients,
        departments: allDepartments,
        departmentsByType,
        types,
        selectedType: firstType, // Seleccionar automáticamente el primer tipo
        loading: false,
      });
    } catch (error) {
      console.error("Error loading clients:", error);
      set({ loading: false });
    }
  },

  setSelectedDepartment: (department) => {
    set({ selectedDepartment: department });
    get().filterClients();
  },

  setSelectedType: (type) => {
    set({
      selectedType: type,
      // Reset department selection when type changes
      selectedDepartment: null,
    });
    get().filterClients();
  },

  setSearchTerm: (search) => {
    set({ searchTerm: search });
    get().filterClients();
  },

  setSelectedClient: (client) => set({ selectedClient: client }),

  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),

  getDepartmentsByType: (type) => {
    const { departmentsByType } = get();
    return type
      ? departmentsByType[type] || []
      : departmentsByType["all"] || [];
  },

  filterClients: () => {
    const { clients, selectedDepartment, selectedType, searchTerm } = get();

    // Comenzar con todos los clientes
    let filtered = [...clients];

    // Aplicar filtro por término de búsqueda (búsqueda global)
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (client) =>
          client.nombre?.toLowerCase().includes(search) ||
          client.type?.toLowerCase().includes(search) ||
          client.departments.some((dept) =>
            dept.name.toLowerCase().includes(search)
          ) ||
          client.addresses.some((addr) =>
            addr.address.toLowerCase().includes(search)
          )
      );

      // Si hay resultados de búsqueda
      if (filtered.length > 0) {
        // Verificar si todos los resultados pertenecen a la misma categoría
        const resultTypes = [
          ...new Set(filtered.map((client) => client.type).filter(Boolean)),
        ];

        if (resultTypes.length === 1) {
          // Si todos los resultados son de la misma categoría, seleccionarla automáticamente
          set({
            selectedType: resultTypes[0],
            selectedDepartment: null,
            filteredClients: filtered,
            isSearching: true,
          });
        } else {
          // Si hay múltiples categorías en los resultados, deseleccionar la categoría actual
          set({
            selectedType: null,
            selectedDepartment: null,
            filteredClients: filtered,
            isSearching: true,
          });
        }
        return;
      }
    }

    // Si no hay término de búsqueda o no se encontraron resultados
    set({ isSearching: false });

    // Aplicar filtro por tipo si está seleccionado
    if (selectedType) {
      filtered = filtered.filter((client) => client.type === selectedType);
    }

    // Aplicar filtro por departamento si está seleccionado
    if (selectedDepartment && selectedDepartment !== "all") {
      filtered = filtered.filter((client) =>
        client.departments.some((dept) => dept.name === selectedDepartment)
      );
    }

    set({ filteredClients: filtered });
  },
}));

export default function useClients() {
  const {
    clients,
    filteredClients,
    departments,
    types,
    selectedDepartment,
    selectedType,
    searchTerm,
    selectedClient,
    isModalOpen,
    loading,
    isSearching,
    loadClients,
    setSelectedDepartment,
    setSelectedType,
    setSearchTerm,
    setSelectedClient,
    setIsModalOpen,
    getDepartmentsByType,
  } = useClientsStore();

  useEffect(() => {
    // Cargar todos los clientes al montar el componente
    loadClients();
  }, []);

  return {
    clients,
    filteredClients,
    departments,
    types,
    selectedDepartment,
    selectedType,
    searchTerm,
    selectedClient,
    isModalOpen,
    loading,
    isSearching,
    loadClients,
    setSelectedDepartment,
    setSelectedType,
    setSearchTerm,
    setSelectedClient,
    setIsModalOpen,
    getDepartmentsByType,
  };
}
