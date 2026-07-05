"use client";

import React, { useState } from "react";

// Definición estricta del tipo
type ConversionType = "CtoF" | "FtoC";

// Cambiamos a export default para que Next.js reconozca la página correctamente
export default function ConversorTemperaturaPage() {
  const [conversion, setConversion] = useState<ConversionType>("CtoF");
  const [temperatura, setTemperatura] = useState<number>(0);

  const calcularResultado = (): number => {
    if (conversion === "CtoF") {
      return (temperatura * 9) / 5 + 32;
    } else {
      return ((temperatura - 32) * 5) / 9;
    }
  };

  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.5rem", maxWidth: "400px", margin: "2rem auto", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", fontFamily: "sans-serif" }}>
      <h2 style={{ fontSize: "1.2rem", color: "#003f7f", marginBottom: "1rem" }}>Conversor de Temperatura</h2>

      {/* Control de Entrada */}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#4a5568" }}>
          Ingresa la temperatura:
        </label>
        <input
          type="number"
          value={temperatura}
          onChange={(e) => setTemperatura(Number(e.target.value))}
          style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", boxSizing: "border-box" }}
        />
      </div>

      {/* Selector */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#4a5568" }}>
          Selecciona el tipo de conversión:
        </label>
        <select
          value={conversion}
          onChange={(e) => setConversion(e.target.value as ConversionType)}
          style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", background: "#fff" }}
        >
          <option value="CtoF">Celsius a Fahrenheit (°C ➔ °F)</option>
          <option value="FtoC">Fahrenheit a Celsius (°F ➔ °C)</option>
        </select>
      </div>

      {/* Resultado */}
      <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "8px", textAlign: "center", border: "1px solid #edf2f7" }}>
        <span style={{ fontSize: "0.9rem", color: "#718096", display: "block", marginBottom: "0.25rem" }}>
          Resultado:
        </span>
        <strong style={{ fontSize: "1.4rem", color: "#1a2332" }}>
          {calcularResultado().toFixed(2)}{" "}
          {conversion === "CtoF" ? "°F" : "°C"}
        </strong>
      </div>
    </div>
  );
}