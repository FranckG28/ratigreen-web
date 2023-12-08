import { cookies } from "next/headers";
import { JWT_access_token_cookie } from "../constants";
import { PublicUser } from "../models/public-user";

export const useUser = async () => {
  const token = cookies().get(JWT_access_token_cookie)?.value;

  if (!token) {
    return null;
  }

  const res = await fetch(`${process.env.API_URL}users/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  if (data.statusCode === 401) {
    return null;
  }

  return data as PublicUser;
};
