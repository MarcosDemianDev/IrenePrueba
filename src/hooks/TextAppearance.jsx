import { useEffect } from "react";

const useTextAppearanceEffect = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1, // Activar cuando el 10% del elemento esté visible
      }
    );

    const targets = document.querySelectorAll(".txt-effect");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
};

export default useTextAppearanceEffect;
