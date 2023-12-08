import { PublicUser } from "../models/public-user";
import { useJwtToken } from "./useJwtToken";

export const useUser = async () => {
  const token = useJwtToken();

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
