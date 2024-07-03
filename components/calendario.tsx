"use client";
import { useEffect } from "react";

const Calendario = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/designar-mx/30min"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
};

export default Calendario;
