import jwtDecode, {JwtPayload} from "jwt-decode";
import storage from "@/utils/storage.ts";

const authUtil = {
  isTokenExpired: (): boolean => {
    const token = storage.getToken();
    if (token == undefined) {
      return true;
    }

    const decodedToken: JwtPayload = jwtDecode(token.slice(6));
    const currentDate = new Date();

    return !(decodedToken.exp && decodedToken.exp * 1000 > currentDate.getTime());
  },
  getUserEmail: (): string => {
    const token = storage.getToken();
    if (token == undefined) {
      return "";
    }

    const decodedToken: JwtPayload = jwtDecode(token.slice(6));
    const userEmail = decodedToken.sub;

    if (userEmail) {
      return userEmail;
    }

    return "";
  }
}

export default authUtil;