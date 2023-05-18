import {Client} from "@/types";
import React, {useMemo, useState} from "react";

export interface AuthProps {}

export interface ClientContext {
  user: Client | null;
  token: string | null;
  setToken: (token: string) => void;
  login: (auth: Client) => void;
  logout: () => void;
  cart: string[];
  setCart: (cart: string[]) => void;
}

export const AuthContext = React.createContext<ClientContext>({} as ClientContext);

export const AuthProvider: React.FC<AuthProps> = ({children}: React.PropsWithChildren<{}>) => {
  const [user, setUser] = useState<Client | null>(null);
  const [token, setToken] = useState<string>("")
  const [cart, setCart] = useState<string[]>([] as string[])
  const login = (user: Client) => {
    setUser(user);
  }
  const logout = () => setUser(null);


  const authCtx = useMemo<ClientContext>(():ClientContext => ({
    user,
    token,
    setToken,
    login,
    logout,
    cart,
    setCart
  }), [user,token,cart]);

  return <AuthContext.Provider value={authCtx}>
        {children}
    </AuthContext.Provider>

}

export const useAuth = () => React.useContext(AuthContext);