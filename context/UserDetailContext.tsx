import { createContext, useContext } from "react";

type UserType = {
  id: string;
  name: string;
  email: string;
  picture?: string;
};

type UserDetailContextType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};

export const UserDetailContext = createContext<
  UserDetailContextType | undefined
>(undefined);

export const useUser = () => {
  const context = useContext(UserDetailContext);
  if (!context) {
    throw new Error("useUser must be used within a UserDetailContext.Provider");
  }
  return context;
};
