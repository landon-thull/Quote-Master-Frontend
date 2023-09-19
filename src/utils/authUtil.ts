import jwtDecode from "jwt-decode";
import storage from "@/utils/storage.ts";

const authUtil = {
  isTokenExpired: (): boolean => {
    let token = storage.getToken();
    if (token == undefined) {
      return true;
    }

    let decodedToken: any = jwtDecode(token.slice(6));
    let currentDate = new Date();
    console.log(decodedToken);

    return !(decodedToken && decodedToken.exp * 1000 > currentDate.getTime());
  }
}

export default authUtil;