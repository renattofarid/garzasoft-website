import { api } from "@/lib/api";
import { ClientResource } from "./clients.interface";

export async function getClients(): Promise<ClientResource[]> {
  const { data } = await api.get<ClientResource[]>(
    "/client?product=Mr. Soft&limit=5"
  );
  return data;
}
