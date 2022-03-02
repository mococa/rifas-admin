// External
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Navigate, useNavigate } from "react-router";
import { AxiosError } from "axios";

// Hooks
import { useToastr } from "mococa-toastr";

// APIs
import { AuthAPI } from "api/Auth";

// Helpers
import { deleteAllCookies, getCookie } from "helpers/cookies";
import { errorHandler } from "helpers/errors";

// Types
import { User } from "../../@types/User";

// Interfaces
interface Context {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext({} as Context);

export const AuthProvider: React.FC = ({ children }) => {
  // States
  const [user, setUser] = useState<User | null>(null);

  // Hooks
  const toastr = useToastr();
  const navigate = useNavigate();

  const cookie = getCookie("jwt");

  // Effects
  useEffect(() => {
    const effect = async () => {
      // try {
      //   if (!cookie) return;
      //   const fetchedUser = await AuthAPI.getMe();
      //   setUser(fetchedUser);
      // } catch (error) {
      //   toastr.error(errorHandler(error as AxiosError));
      //   setUser(null);
      //   deleteAllCookies();
      //   navigate("/auth");
      // }
    };
    effect();
  }, [cookie]);

  // Memos
  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hooks
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("");
  return ctx;
};
