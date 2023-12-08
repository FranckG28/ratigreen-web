import { redirect } from "next/navigation";
import { PublicUser } from "../models/public-user";
import { cookies } from "next/headers";
import { JWT_access_token_cookie } from "../constants";

const getUserWithToken = async (token: string): Promise<PublicUser | null> => {
  try {
    const res = await fetch(`${process.env.API_URL}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (data.error) {
      return null;
    }

    return data.user;
  } catch (error) {
    console.log("Error while verifying token : ", error);
    return null;
  }
};

export const useAuth = async () => {
  // const cookieList = cookies();
  // const token = cookieList.get(JWT_access_token_cookie);
  // if (!token) {
  //   console.log("No token found");
  //   return null;
  // }
  // console.log("token found", token);
  // const user = await getUserWithToken(token);
  // if (!user) {
  //   redirect("/auth/login");
  // }
  // return user;
};
