import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, updatePassword, updateEmail } from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  const changePassword = async (newPassword) => {
    if (auth.currentUser) {
      await updatePassword(auth.currentUser, newPassword);
    } else {
      throw new Error("No user signed in");
    }
  };

  const changeEmail = async (newEmail) => {
    if (auth.currentUser) {
      await updateEmail(auth.currentUser, newEmail);
    } else {
      throw new Error("No user signed in");
    }
  };

  return (
    <UserContext.Provider value={{ user, logout, changePassword, changeEmail, loading }}>
      {children}
    </UserContext.Provider>
  );
}
