import { useEffect, useState } from "react";

function MouseGlow() {
  const [position, setPosition] = useState({
    x: -200,
    y: -200,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 bg-purple-500 transition-all duration-150"
        style={{
          left: position.x - 250,
          top: position.y - 250,
        }}
      />
    </div>
  );
}

export default MouseGlow;