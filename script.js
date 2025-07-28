document.addEventListener("DOMContentLoaded", () => {
  // Future: Dark/light toggle, background particles, etc.
});
tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  background: { color: "#0f0f0f" },
  particles: {
    number: { value: 60 },
    size: { value: 2 },
    move: { enable: true, speed: 0.7 },
    links: { enable: true, distance: 150, color: "#6effe0", opacity: 0.4 },
    color: { value: "#6effe0" },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 }
    }
  }
});
