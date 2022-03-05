// External
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router";
import { AxiosError } from "axios";

// Hooks
import { useToastr } from "mococa-toastr";

// APIs
import { AuthAPI } from "api/Auth";

// Helpers
import { deleteAllCookies, getCookie } from "helpers/cookies";
import { errorHandler, toastrError } from "helpers/errors";

// Types
import { User } from "../../_types/User";

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
  const location = useLocation();

  const errorHandle = useCallback(
    (error: AxiosError) => {
      toastrError(error, toastr.error);
      navigate("/auth");
      return;
    },
    [navigate, toastr.error]
  );

  // Effects
  useEffect(() => {
    const clearUser = (error: AxiosError) => {
      setUser(null);
      deleteAllCookies();
      errorHandle(error);
    };

    const cookie = getCookie("jwt");
    if (!cookie) {
      if (location.pathname !== "/auth") navigate("/auth");
      return;
    }

    const effect = async () => {
      try {
        if (!user) await AuthAPI.getMe().then(setUser);
        else {
          if (location.pathname === "/auth") navigate("/");
        }
      } catch (error) {
        clearUser(error as AxiosError);
      }
    };
    effect();
  }, [errorHandle, navigate, location, user]);

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
