import {axios} from "@/lib/axios.ts";
import {GetCurrentUserResponse} from "@/features/users/types";

export const getCurrentUser = (): Promise<GetCurrentUserResponse> => {
  return axios.get("users/current");
}