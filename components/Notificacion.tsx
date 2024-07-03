"use client";

// FunciÃ³n para manejar las notificaciones
export function FunciNoti(): boolean {
  if (!("Notification" in window)) {
    alert("Este navegador no soporta notificaciones.");
    return false;
  } else if (Notification.permission === "granted") {
    return true;
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        return true;
      }
    });
  }
  return false;
}

// Componente que contiene el botÃ³n
const NotificationButton: React.FC = () => {
  const handleClick = () => {
    if (FunciNoti()) {
      new Notification("Tu cita esta agendada");
    }
  };

  return <button onClick={handleClick}>Enviar NotificaciÃ³n</button>;
};

export default NotificationButton;
