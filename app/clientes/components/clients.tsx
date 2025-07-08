"use client";

import { cn } from "@/lib/utils";
import { ListFilter, Loader2, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useClients from "../hooks/useClients";
import { ClientModal } from "./modalClient";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function ClientsPage() {
  const {
    filteredClients,
    types,
    selectedDepartment,
    selectedType,
    searchTerm,
    selectedClient,
    isModalOpen,
    loading,
    isSearching,
    setSelectedDepartment,
    setSelectedType,
    setSearchTerm,
    setSelectedClient,
    setIsModalOpen,
    getDepartmentsByType,
  } = useClients();

  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const handleClientClick = (client: any) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  // Get departments based on selected type
  const availableDepartments = getDepartmentsByType(selectedType);

  return (
    <main className="flex flex-col w-full md:p-6 items-center">
      {/* Main Content Section */}
      <section className="container max-w-6xl w-full px-4 md:px-6 pb-20">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Side: Search and Categories */}
          <div className="w-full md:w-64 flex flex-col gap-4">
            {/* Search and filter row */}
            <div className="relative w-full flex items-center">
              {/* Search input */}
              <div className="relative flex-grow">
                <Input
                  type="text"
                  className="w-full rounded-full border border-gray-200 py-2 pl-10 pr-4 text-sm bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar cliente..."
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Search className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Filter Button */}
              <Button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="ml-2 w-12 h-8 flex items-center justify-center rounded-full bg-brand-darkGreen text-white hover:bg-brand-darkGreen/90 transition-colors"
                aria-label="Filtros"
              >
                <ListFilter className="w-5 h-5" />
              </Button>
            </div>

            {/* Filter Panel */}
            {isFilterOpen && (
              <div className="relative">
                <div className="absolute z-20 top-0 right-0 md:right-auto w-full md:w-64 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <h3 className="text-base font-medium text-gray-800">
                      Filtros
                    </h3>
                    <Button
                      variant="ghost"
                      onClick={() => setIsFilterOpen(false)}
                      className="w-6 h-6 flex items-center justify-center rounded-full text-main"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Categories section */}
                  <div className="p-4 border-b border-gray-100">
                    <h4 className="text-xs font-medium text-gray-500 mb-2">
                      Categorías
                    </h4>
                    <div className="flex flex-col gap-2 max-h-40 overflow-y-auto pr-2">
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedType === null}
                          onChange={() => setSelectedType(null)}
                          className="text-main"
                        />
                        Todos
                      </label>
                      {types.map((type, index) => (
                        <Label
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <input
                            type="radio"
                            name="category"
                            checked={selectedType === type}
                            onChange={() => setSelectedType(type)}
                            className="text-main"
                          />
                          {type}
                        </Label>
                      ))}
                    </div>
                  </div>

                  {/* Department section */}
                  <div className="p-4">
                    <h4 className="text-xs font-medium text-gray-500 mb-2">
                      Departamento
                    </h4>
                    <Select
                      value={selectedDepartment || ""}
                      onValueChange={(value) =>
                        setSelectedDepartment(value === "" ? null : value)
                      }
                    >
                      <SelectTrigger className="w-full rounded-md border border-gray-200">
                        <SelectValue placeholder="Todos los departamentos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">
                          Todos los departamentos
                        </SelectItem>
                        {availableDepartments.map((department, index) => (
                          <SelectItem key={index} value={department}>
                            {department}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Category list - Desktop (vertical) */}
            <div className="hidden md:block bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-700 mb-3">
                Escoge la categoría:
              </h3>
              <div className="flex flex-col gap-1.5">
                {types.map((type, index) => (
                  <Button
                    key={index}
                    variant={selectedType === type ? "default" : "ghost"}
                    onClick={() => setSelectedType(type)}
                    className={cn(
                      "text-sm py-1.5 px-3 rounded-md text-left transition-colors uppercase",
                      selectedType === type
                        ? "bg-brand-darkGreen hover:bg-brand-darkGreen/90 text-white"
                        : ""
                    )}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            {/* Category list - Mobile (horizontal scroll) */}
            <div className="md:hidden bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-700 mb-3">
                Escoge la categoría:
              </h3>
              <div className="flex flex-wrap gap-x-2 gap-y-0.5">
                {types.map((type, index) => (
                  <Button
                    key={index}
                    variant={selectedType === type ? "default" : "ghost"}
                    onClick={() => setSelectedType(type)}
                    className={cn(
                      "text-sm py-1.5 px-3 rounded-md text-center transition-colors"
                    )}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Client grid - Main content area */}
          <div className="w-full md:flex-1 rounded-xl p-4 md:p-6 shadow-sm bg-white mt-4 md:mt-0">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-main" />
              </div>
            ) : filteredClients.length === 0 ? (
              <div className="flex justify-center items-center font-light h-64 text-gray-500">
                <p>No se encontraron clientes</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                {filteredClients.map((client, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2"
                    onClick={() => handleClientClick(client)}
                  >
                    <div className="w-full aspect-square rounded-xl overflow-hidden border border-gray-200 hover:border-main transition-all duration-300 cursor-pointer bg-white flex items-center justify-center p-2 relative">
                      <img
                        alt={client.nombre || "Cliente"}
                        className="max-w-full max-h-full object-contain"
                        src={client.logo || "/placeholder.svg"}
                      />

                      {/* Mostrar etiqueta de categoría solo en modo búsqueda */}
                      {isSearching && client.type && (
                        <Badge
                          className="absolute top-2 right-2 hover: text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSearchTerm("");
                            setSelectedType(client.type || null);
                          }}
                        >
                          {client.type}
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-center text-gray-600 line-clamp-1">
                      {client.nombre}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Client modal */}
      <ClientModal
        client={selectedClient}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}

export default ClientsPage;
