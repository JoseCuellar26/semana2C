"use client";

import React, { useState } from 'react';

export default function ContadorPage() {
  // Inicializamos y tipamos explícitamente el estado como <number>
  const [count, setCount] = useState<number>(0);

  const incrementar = (): void => {
    setCount(count + 1);
  };

  const decrementar = (): void => {
    // Validación estricta: solo resta si el valor actual es mayor a 0
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "2rem", maxWidth: "350px", margin: "3rem auto", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", fontFamily: "sans-serif", textAlign: 'center' }}>
      <h2 style={{ fontSize: "1.4rem", color: "#003f7f", marginBottom: "1.5rem" }}>
        Contador: <span style={{ color: "#fdb913" }}>{count}</span>
      </h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        {/* Botón Decrementar */}
        <button 
          onClick={decrementar} 
          disabled={count === 0} // Deshabilitado visualmente si llega a 0
          style={{ 
            background: count === 0 ? '#cbd5e1' : '#003f7f', 
            color: '#fff', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: '6px', 
            cursor: count === 0 ? 'not-allowed' : 'pointer',
            fontWeight: '600'
          }}
        >
          Decrementar
        </button>

        {/* Botón Incrementar */}
        <button 
          onClick={incrementar}
          style={{ 
            background: '#003f7f', 
            color: '#fff', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Incrementar
        </button>
      </div>
    </div>
  );
}




/* import Image from "next/image";
import styles from "./page.module.css";

interface Jugador {
  id: number;
  nombre: string;
  altura: string;
  peso: string;
  foto: string;
}

interface Equipo {
  id: number;
  nombre: string;
  plantilla: Jugador[];
}

interface EquiposProps {
  equipos: Equipo[];
}

const Equipos = ({ equipos }: EquiposProps) => (
  <div className={styles.container__list}>
    <h2>Equipos de Fútbol</h2>
    {equipos.map((equipo: Equipo) => (
      <div key={equipo.id}>
        <h3>{equipo.nombre}</h3>
        <ul>
          {equipo.plantilla.map((j: Jugador) => (
            <li key={j.id} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {}
              <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, background: '#e2e8f0' }}>
                <Image
                  src={j.foto}
                  alt={j.nombre}
                  fill
                  sizes="40px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <strong>{j.nombre}</strong>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#a0aec0' }}>
                  {j.altura}m · {j.peso}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

// Base de datos corregida sin errores de sintaxis
const equiposData: Equipo[] = [
  {
    id: 1,
    nombre: "Real Madrid",
    plantilla: [
      { id: 1, nombre: "Vinicius Jr.", altura: "1.76", peso: "73Kg", foto: "https://tse3.mm.bing.net/th/id/OIP.BOK6G6rvlv1k-bVXs1h-AQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: 2, nombre: "Jude Bellingham", altura: "1.86", peso: "75Kg", foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=150&auto=format&fit=crop" },
      { id: 3, nombre: "Kylian Mbappé", altura: "1.78", peso: "73Kg", foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" },
      { id: 4, nombre: "Federico Valverde", altura: "1.82", peso: "78Kg", foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop" },
    ]
  },
  {
    id: 2,
    nombre: "Barcelona",
    plantilla: [
      { id: 1, nombre: "Lamine Yamal", altura: "1.80", peso: "67Kg", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
      { id: 2, nombre: "Robert Lewandowski", altura: "1.85", peso: "81Kg", foto: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=150&auto=format&fit=crop" },
      { id: 3, nombre: "Gavi", altura: "1.73", peso: "68Kg", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
      { id: 4, nombre: "Pedri", altura: "1.74", peso: "60Kg", foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop" },
    ]
  },
  {
    id: 3,
    nombre: "Manchester City",
    plantilla: [
      { id: 1, nombre: "Erling Haaland", altura: "1.94", peso: "88Kg", foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop" },
      { id: 2, nombre: "Kevin De Bruyne", altura: "1.81", peso: "70Kg", foto: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop" },
      { id: 3, nombre: "Phil Foden", altura: "1.71", peso: "70Kg", foto: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?q=80&w=150&auto=format&fit=crop" },
      { id: 4, nombre: "Rodri", altura: "1.91", peso: "82Kg", foto: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=150&auto=format&fit=crop" },
    ]
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Mi Aplicación de Fútbol</h1>
      <Equipos equipos={equiposData} />
    </main>
  );
}*/