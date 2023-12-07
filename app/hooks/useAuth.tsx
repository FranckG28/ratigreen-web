export const useAuth = async () => {
  const cookies = require("next/headers").cookies;
  const cookieList = cookies();
  //   const { value: token } = cookieList.get("token") ?? { value: null };
  //   const verifiedToken = await verifyJwtToken(token);

  //   return verifiedToken;
};
