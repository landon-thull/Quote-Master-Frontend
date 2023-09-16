import {axios} from "@/lib/axios";

import {LoginRequest, LoginResponse} from "../types";

export const loginWithEmailAndPassword = (data: LoginRequest): Promise<LoginResponse> => {
  return axios.post("/login", data);
}