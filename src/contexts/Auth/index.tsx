import { AuthAPI } from "api/Auth";
import { AxiosError } from "axios";
import { deleteAllCookies, getCookie } from "helpers/cookies";
import { errorHandler } from "helpers/errors";
import { useToastr } from "mococa-toastr";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Navigate, useNavigate } from "react-router";

import { User } from "../../@types/User";

interface Context {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
export const AuthContext = createContext({} as Context);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const cookie = getCookie("jwt");
  const toastr = useToastr();
  const navigate = useNavigate();

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

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("");
  return ctx;
};
