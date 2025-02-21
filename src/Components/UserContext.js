import { createContext, useState } from "react";

// Create the UserContext
export const UserContext = createContext();

// UserContextProvider component
export function UserContextProvider(props) {
  // State to hold the user login status
  const [user, setUser] = useState(false);

  return (
    // Provide the context value to children components
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
