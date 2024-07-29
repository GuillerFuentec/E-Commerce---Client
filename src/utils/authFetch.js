import { Token } from "@/api";

export async function authFetch(url, params) {
  const tokenCtrl = new Token();
  const token = tokenCtrl.getToken();

  const logout = ( ) => {
    tokenCtrl.removeToken();
    window.location.replace("/");
  }

  if (!token) {
    logout()
  } else {
    if (tokenCtrl.hasExpired(token)) {
      logout()
    } else {
      const paramTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        return await fetch(url, paramTemp);
      } catch (error) {
        return error;
      }
    }
  }
}
