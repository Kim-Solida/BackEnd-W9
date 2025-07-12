import { jwtDecode } from "jwt-decode";

export function isAuthenticated() {
  const token = localStorage.getItem("token");

  if (!token || typeof token !== "string") {
    return null;
  }

  try {
    const decoded = jwtDecode(token);

    // Optional: check expiration
    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      logout(); // remove expired token
      return null;
    }

    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}

export function setToken(token) {
    // implement your logic to set the token
    localStorage.setItem("token", token);

}

export function logout() {
    // implement your logic to remove the token
    localStorage.removeItem("token");
}