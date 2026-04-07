document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body");
  const searchBox = document.getElementById("searchBox");

  if (!tableBody) return;

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

  function renderTable(data) {
    tableBody.innerHTML = "";

    const today = new Date();

    data.forEach(p => {
      const endDate = new Date(p.reg_end);
      const daysLeft = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));

      const row = document.createElement("tr");

      // Urgency highlight
      if (daysLeft <= 7 && daysLeft >= 0) {
        row.style.backgroundColor = "#2a1a1a";
      }

      row.innerHTML = `
        <td>${p.name}</td>
        <td>${p.university}</td>
        <td>${p.country}</td>
        <td>${p.reg_start}</td>
        <td>${p.reg_end}</td>
        <td>${p.prog_start} → ${p.prog_end}</td>
        <td>${p.reco}</td>
        <td>${daysLeft >= 0 ? daysLeft + " days" : "Closed"}</td>
        <td><a href="${p.link}" target="_blank">View</a></td>
      `;

      tableBody.appendChild(row);
    });
  }

  renderTable(projects);

  // Filter
  searchBox.addEventListener("input", () => {
    const value = searchBox.value.toLowerCase();

    const filtered = projects.filter(p =>
      p.name.toLowerCase().includes(value) ||
      p.university.toLowerCase().includes(value) ||
      p.country.toLowerCase().includes(value)
    );

    renderTable(filtered);
  });
});
