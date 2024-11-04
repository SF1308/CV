import { createGlobalStyle } from 'styled-components'

export const theme = {
    color: {
      primary: "#1e90ff", // Color principal para elementos destacados
      secondary: "#f0f0f0", // Color secundario para fondos claros
      background: "#ffffff", // Color del fondo principal
      text: "#333333", // Color principal del texto
      accent: "#ff6347", // Color de acento para destacar elementos
      border: "#dddddd", // Color para bordes y separadores
    },
    fonts: {
      primary: "'Roboto', sans-serif", // Fuente principal
      secondary: "'Open Sans', sans-serif", // Fuente secundaria para variaciones
    },
    fontSize: {
      small: "0.875rem", // Tamaño de fuente pequeño
      normal: "1rem", // Tamaño de fuente estándar
      large: "1.25rem", // Tamaño de fuente grande
      xlarge: "2rem", // Tamaño de fuente muy grande (títulos)
    },
    spacing: {
      xsmall: "0.5rem", // Espaciado extra pequeño
      small: "1rem", // Espaciado pequeño
      medium: "1.5rem", // Espaciado medio
      large: "2rem", // Espaciado grande
      xlarge: "3rem", // Espaciado extra grande
    },
    breakpoint: {
      mobile: "576px", // Punto de ruptura para dispositivos móviles
      tablet: "768px", // Punto de ruptura para tabletas
      desktop: "992px", // Punto de ruptura para escritorios
      largeDesktop: "1200px", // Punto de ruptura para escritorios grandes
    },
    shadow: {
      card: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra suave para tarjetas
      header: "0 2px 4px rgba(0, 0, 0, 0.1)", // Sombra ligera para encabezados
    },
    radii: {
      small: "4px", // Bordes redondeados pequeños
      medium: "8px", // Bordes redondeados medianos
      large: "16px", // Bordes redondeados grandes
    },
    transition: {
      fast: "0.2s ease-in-out", // Transición rápida
      normal: "0.3s ease-in-out", // Transición estándar
      slow: "0.5s ease-in-out", // Transición lenta
    },
  };

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.primary};
    color: ${theme.color.text};
    background-color: ${theme.color.background};
  }
`

export type Theme = typeof theme
