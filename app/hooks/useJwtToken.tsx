import { cookies } from "next/headers";
import { JWT_access_token_cookie } from "../constants";

export const useJwtToken = () => {
  const token = cookies().get(JWT_access_token_cookie)?.value;

  if (!token) {
    return null;
  }

  return token;
};
