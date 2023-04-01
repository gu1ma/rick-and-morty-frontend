import { api } from "@/lib/axios";

export const getCharactersApi = (page: number = 1) => api.get(`character?page=${page}`)