// External
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';

// Interfaces
type Route = { to: string; from: string };

interface Context {
  value: Route[];
  from: string;
  pop(): void;
}

export const RouteContext = createContext({} as Context);

export const RouteProvider: React.FC = ({ children }) => {
  const location = useLocation();

  // States
  const [routes, setRoute] = useState<Route[]>([]);

  useEffect(() => {
    setRoute((previosRoutes) => [
      ...previosRoutes,
      {
        to: `${location.pathname}${location.search}`,
        from: previosRoutes?.at(-1)?.to || '/',
      },
    ]);
  }, [location]);

  // Memos
  const value = useMemo(
    () => ({
      value: routes,
      from: routes.at(-1)?.from || '/',
      pop() {
        setRoute((prevRoutes) => prevRoutes.slice(0, -2));
      },
    }),
    [routes]
  );

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

// Hooks
export const useRoute = () => {
  const ctx = useContext(RouteContext);
  if (!ctx) throw new Error('');
  return ctx;
};
