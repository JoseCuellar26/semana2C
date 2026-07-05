"use client";

import React, { useState } from "react";

// 1. Definición de la interfaz estricta para las credenciales
interface Credenciales {
  usuario: string;
  password: string;
}

export default function LoginPage() {
  // 2. Estado para manejar los campos del formulario con el tipado de la interfaz
  const [form, setForm] = useState<Credenciales>({
    usuario: "",
    password: "",
  });

  // Estados para el manejo de la respuesta del login
  const [mensaje, setMensaje] = useState<string>("");
  const [esExitoso, setEsExitoso] = useState<boolean | null>(null);

  // 3. Credenciales Hardcoded para la validación
  const CREDENCIALES_VALIDAS: Credenciales = {
    usuario: "admin",
    password: "123",
  };

  // Manejador de los cambios en los inputs de forma tipada
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 4. Validación de las credenciales
    if (form.usuario === CREDENCIALES_VALIDAS.usuario && form.password === CREDENCIALES_VALIDAS.password) {
      setMensaje(`¡Bienvenido de nuevo, ${form.usuario}! 👋`);
      setEsExitoso(true);
    } else {
      setMensaje("Usuario o contraseña incorrectos. Inténtalo de nuevo. ❌");
      setEsExitoso(false);
    }
  };

  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "2rem", maxWidth: "400px", margin: "3rem auto", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", fontFamily: "sans-serif" }}>
      <h2 style={{ fontSize: "1.4rem", color: "#003f7f", marginBottom: "1.5rem", textAlign: "center" }}>Iniciar Sesión</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {/* Campo de Usuario */}
        <div>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#4a5568" }}>
            Usuario:
          </label>
          <input
            type="text"
            name="usuario"
            value={form.usuario}
            onChange={handleChange}
            placeholder="Ej: admin"
            required
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", boxSizing: "border-box" }}
          />
        </div>

        {/* Campo de Contraseña */}
        <div>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#4a5568" }}>
            Contraseña:
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Introduce tu contraseña"
            required
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", boxSizing: "border-box" }}
          />
        </div>

        {/* Botón de Envío */}
        <button
          type="submit"
          style={{ background: "#003f7f", color: "#fff", border: "none", padding: "12px", borderRadius: "6px", cursor: "pointer", fontWeight: "600", fontSize: "1rem", marginTop: "0.5rem" }}
        >
          Ingresar
        </button>
      </form>

      {/* 5. Mensaje de Feedback Dinámico */}
      {mensaje && (
        <div style={{ marginTop: "1.5rem", padding: "1rem", borderRadius: "8px", textAlign: "center", fontWeight: "500", fontSize: "0.95rem", border: "1px solid", backgroundColor: esExitoso ? "#f0fdf4" : "#fef2f2", borderColor: esExitoso ? "#bbf7d0" : "#fecaca", color: esExitoso ? "#166534" : "#991b1b" }}>
          {mensaje}
        </div>
      )}
    </div>
  );
}