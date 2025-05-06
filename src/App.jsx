import React, { useEffect } from "react";
import AppRoutes from "./Routes/AppRoutes";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
