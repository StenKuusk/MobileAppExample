import { createContext, useContext, useState } from 'react';

type AuthContextType = {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isSignedIn: false,
  signIn: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        signIn: () => setIsSignedIn(true),
        signOut: () => setIsSignedIn(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext); 