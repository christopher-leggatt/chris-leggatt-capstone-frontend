import { useSelector } from "react-redux";
import { selectCurrentToken } from "../state/authSlice";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isAdmin = false;
  let isMember = false;
  let status = "default";

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const { username, role } = decoded.userInfo;

      isAdmin = role.includes("admin");
      isMember = role.includes("member");

      if (isAdmin) status = "admin";
      if (isMember) status = "member";

      return { username, role, status, isAdmin, isMember };
    } catch (err) {
      console.error("Invalid token", err);
    }
  }
};

export default useAuth;
