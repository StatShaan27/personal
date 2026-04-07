document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body");
  const searchBox = document.getElementById("searchBox");
  const headers = document.querySelectorAll("#opp-table th");

  if (!tableBody) return;

  let projects = [
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

  let currentData = [...projects];
  let sortDirection = {};

  function getDaysLeft(dateStr) {
    const today = new Date();
    const endDate = new Date(dateStr);
    return Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
  }

  function renderTable(data) {
    tableBody.innerHTML = "";

    data.forEach(p => {
      const daysLeft = getDaysLeft(p.reg_end);

      const row = document.createElement("tr");

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

  // 🔍 FILTER
  searchBox.addEventListener("input", () => {
    const value = searchBox.value.toLowerCase();

    currentData = projects.filter(p =>
      p.name.toLowerCase().includes(value) ||
      p.university.toLowerCase().includes(value) ||
      p.country.toLowerCase().includes(value)
    );

    renderTable(currentData);
  });

  // 🔽 SORTING
  const keys = [
    "name",
    "university",
    "country",
    "reg_start",
    "reg_end",
    "prog_start",
    "reco",
    "daysLeft"
  ];

  headers.forEach((th, index) => {
    if (index === 8) return; // Skip link column

    th.addEventListener("click", () => {
      const key = keys[index];
      sortDirection[key] = !sortDirection[key];

      currentData.sort((a, b) => {
        let valA, valB;

        if (key === "daysLeft") {
          valA = getDaysLeft(a.reg_end);
          valB = getDaysLeft(b.reg_end);
        } else if (key.includes("date") || key.includes("reg") || key.includes("prog")) {
          valA = new Date(a[key]);
          valB = new Date(b[key]);
        } else {
          valA = a[key];
          valB = b[key];
        }

        if (valA < valB) return sortDirection[key] ? -1 : 1;
        if (valA > valB) return sortDirection[key] ? 1 : -1;
        return 0;
      });

      renderTable(currentData);
    });
  });

  // Initial render
  renderTable(projects);
});
