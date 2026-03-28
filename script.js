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
    university: "IIT Madras",
    country: "India",
    reg_start: "2026-10-01",
    reg_end: "2026-11-10",
    prog_start: "2026-12-01",
    prog_end: "2027-01-15",
    reco: 1,
    link: "#"
  }
];

  // Only run if page has these sections
  if (liveContainer && otherContainer) {
    projects.forEach(project => {
  const startDate = new Date(project.reg_start);
  const endDate = new Date(project.reg_end);

  const card = document.createElement("div");
  card.className = "opp-card";

  card.innerHTML = `
    <div class="opp-title">${project.name}</div>
    <div class="opp-meta">${project.university}, ${project.country}</div>
    <div class="opp-meta"><strong>Registration:</strong> ${project.reg_start} → ${project.reg_end}</div>
    <div class="opp-meta"><strong>Program:</strong> ${project.prog_start} → ${project.prog_end}</div>
    <div class="opp-meta"><strong>Recommendations:</strong> ${project.reco}</div>
    <a href="${project.link}" class="opp-link" target="_blank">View Details</a>
  `;

  if (today >= startDate && today <= endDate) {
    liveContainer.innerHTML = "";
    liveContainer.appendChild(card);
  } else {
    otherContainer.appendChild(card);
  }
});
  }
});
