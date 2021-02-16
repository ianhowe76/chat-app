import React from "react";

interface IUserContext {
  username: string;
  setUsername: (string) => void;
}
export const UserContext = React.createContext<IUserContext>({
  username: "",
  setUsername: () => null,
});

export const UserContextProvider: React.FC = ({ children }) => {
  const [username, setUsername] = React.useState<string>("");

  return (
    <UserContext.Provider
      value={{
        setUsername,
        username,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
