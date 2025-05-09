import React from "react";
import ImpactForm from "./components/ImpactForm";

export default function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">EEDSM Impact Calculator</h1>
      <ImpactForm />
    </div>
  );
}
