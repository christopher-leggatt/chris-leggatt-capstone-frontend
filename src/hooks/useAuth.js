import { useSelector } from "react-redux";
import { selectCurrentToken } from "../state/authSlice";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isAdmin = false;
  let isMember = false;
  let isGuest = false;
  let status = "default";

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const { userId, role } = decoded.userInfo;

      isAdmin = role.includes("admin");
      isMember = role.includes("member");
      isGuest = role.includes("guest");

      if (isAdmin) status = "admin";
      if (isMember) status = "member";
      if (isGuest) status = "guest";

      return { userId, role, status, isAdmin, isMember, isGuest };
    } catch (err) {
      console.error("Invalid token", err);
    }
  }
};

export default useAuth;
