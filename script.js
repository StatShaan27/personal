document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();

  const liveContainer = document.getElementById("live-list");
  const otherContainer = document.getElementById("other-list");

  // Only define ONCE
  const projects = [
    {
      name: "ISI Summer Internship",
    university: "Indian Statistical Institute",
    country: "India",
    reg_start: "2026-03-01",
    reg_end: "2026-04-15",
    prog_start: "2026-06-01",
    prog_end: "2026-07-31",
    reco: 2,
    link: "#"
    },
    {
      name: "IIT Madras Winter Project",
      start: "2026-10-01",
      end: "2026-11-10",
      link: "#"
    }
  ];

  // Only run if page has these sections
  if (liveContainer && otherContainer) {
    projects.forEach(project => {
      const startDate = new Date(project.start);
      const endDate = new Date(project.end);

      const link = document.createElement("a");
      link.href = project.link;
      link.textContent = project.name;
      link.className = "opp-link";

      if (today >= startDate && today <= endDate) {
        liveContainer.innerHTML = "";
        liveContainer.appendChild(link);
      } else {
        otherContainer.appendChild(link);
      }
    });
  }
});
