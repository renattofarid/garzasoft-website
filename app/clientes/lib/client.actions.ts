import { AxiosRequestConfig } from "axios";
import { Client } from "./client.interface";
import { api } from "@/lib/api";

interface ClientFilters {
  type?: string;
  department?: string;
}

export async function getClients(filters: ClientFilters): Promise<Client[]> {
  const config: AxiosRequestConfig = {
    params: {
      product: "Mr. Soft",
      ...filters,
    },
  };
  const { data } = await api.get<Client[]>("/client", config);
  return data;
}
