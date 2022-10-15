import React from "react";
import Navigation from "./Navigation";
import { AuthProvider } from "./api/Authcontext";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
