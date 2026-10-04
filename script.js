document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body");
  const searchBox = document.getElementById("searchBox");
  const headers = document.querySelectorAll("#opp-table th");

  if (!tableBody) return;


  // ============================================================
  // AFTER 3RD YEAR PROGRAMS
  // ============================================================

  const projects3 = [
    {
      name: "IMPRS-BAC PhD Program",
      university: "Max Planck Institute for Molecular Genetics",
      country: "Germany",
      reg_start: "2026-10-01",
      reg_end: "2027-01-07",
      prog_start: "2027-04-01",
      prog_end: "2030-11-01",
      reco: 2,
      link: "https://www.imprs-bac.mpg.de/"
    },

    {
      name: "NUS Amgen Scholars Program",
      university: "National University of Singapore",
      country: "Singapore",
      reg_start: "2026-11-01",
      reg_end: "2027-02-01",
      prog_start: "2027-06-02",
      prog_end: "2027-08-06",
      reco: 2,
      link: "https://www.dbs.nus.edu.sg/outreach/amgen-scholars-program/"
    },

    {
      name: "Rockefeller SURF (Summer Undergraduate Research Fellowship)",
      university: "Rockefeller University",
      country: "United States",
      reg_start: "2026-12-01",
      reg_end: "2027-02-01",
      prog_start: "2027-06-01",
      prog_end: "2027-08-07",
      reco: 2,
      link: "https://www.rockefeller.edu/surf/"
    },

    {
      name: "TIGP Summer Internship (Academia Sinica)",
      university: "Academia Sinica",
      country: "Taiwan",
      reg_start: "2026-12-15",
      reg_end: "2027-01-15",
      prog_start: "2027-05-01",
      prog_end: "2027-08-31",
      reco: 2,
      link: "https://tigp.sinica.edu.tw/"
    },

    {
      name: "HKU CDS Research Internship Programme",
      university: "University of Hong Kong",
      country: "Hong Kong",
      reg_start: "2027-01-01",
      reg_end: "2027-05-31",
      prog_start: "2027-07-19",
      prog_end: "2027-08-31",
      reco: 0,
      link: "https://www.cds.hku.hk/rintern/index.html"
    },

    {
      name: "FuSEP Summer Research Program",
      university: "University of Science and Technology of China (USTC)",
      country: "China",
      reg_start: "2027-01-01",
      reg_end: "2027-03-22",
      prog_start: "2027-06-22",
      prog_end: "2027-07-30",
      reco: 1,
      link: "https://fusep.ustc.edu.cn/fusep/"
    },

    {
      name: "ISTA Scientific Internship (Year-Round)",
      university: "Institute of Science and Technology Austria",
      country: "Austria",
      reg_start: "2027-01-01",
      reg_end: "2027-12-31",
      prog_start: "Flexible",
      prog_end: "Flexible",
      reco: 0,
      link: "https://phd.ista.ac.at/scientific-internships/"
    },

    {
      name: "Warwick SRE (Summer Research Experience)",
      university: "University of Warwick",
      country: "United Kingdom",
      reg_start: "2027-01-01",
      reg_end: "2027-03-22",
      prog_start: "2027-07-13",
      prog_end: "2027-09-04",
      reco: 0,
      link: "https://warwick.ac.uk/"
    },

    {
      name: "GIST Global Intern Program (GIP)",
      university: "Gwangju Institute of Science and Technology",
      country: "South Korea",
      reg_start: "2027-02-02",
      reg_end: "2027-02-27",
      prog_start: "2027-06-01",
      prog_end: "2027-07-31",
      reco: 1,
      link: "https://ipa.gist.ac.kr/ipa/html/sub03/030101.html"
    },

    {
      name: "ETH Zurich Summer Research Fellowship",
      university: "ETH Zurich",
      country: "Switzerland",
      reg_start: "2026-11-01",
      reg_end: "2026-12-16",
      prog_start: "2027-07-01",
      prog_end: "2027-08-31",
      reco: 0,
      link: "https://inf.ethz.ch/studies/summer-research-fellowship.html"
    }
  ];


  // ============================================================
  // AFTER 2ND YEAR PROGRAMS
  // ============================================================

  const projects2 = [
    {
  name: "ICTS - S. N. Bhatt Memorial Excellence Fellowship Program",
  university: "International Centre for Theoretical Sciences (ICTS-TIFR)",
  country: "India",
  reg_start: "2026-11-01",
  reg_end: "2026-12-20",
  prog_start: "2027-05-15",
  prog_end: "2027-07-15",
  reco: 2,
  link: "https://www.icts.res.in/academic/summer-research-program"
    },

    {
  name: "JNCASR Summer Research Fellowship Programme (SRFP)",
  university: "Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR)",
  country: "India",
  reg_start: "2026-12-22",
  reg_end: "2027-01-31",
  prog_start: "2027-05-01",
  prog_end: "2027-06-30",
  reco: 1,
  link: "https://www.jncasr.ac.in/academic/fandeprogrammes/srfp"
},

    {
  name: "Science Academies Summer Research Fellowship Programme",
  university: "Indian Academy of Sciences / Indian National Science Academy / The National Academy of Sciences, India",
  country: "India",
  reg_start: "2026-10-01",
  reg_end: "2027-01-31",
  prog_start: "Flexible",
  prog_end: "Flexible",
  reco: 1,
  link: "https://webjapps.ias.ac.in/fellowship2027/index.html"
},


    {
  name: "SURGE 2026",
  university: "Indian Institute of Technology Kanpur",
  country: "India",
  reg_start: "2027-02-02",
  reg_end: "2027-02-22",
  prog_start: "2027-05-11",
  prog_end: "2027-07-10",
  reco: 2,
  link: "https://surge.iitk.ac.in/"
    },



    {
  name: "IMSc Summer Research Programme",
  university: "Institute of Mathematical Sciences (IMSc), Chennai",
  country: "India",
  reg_start: "2026-11-01",
  reg_end: "2027-02-01",
  prog_start: "2027-05-01",
  prog_end: "2027-07-31",
  reco: 2,
  link: "https://www.imsc.res.in/summer_research_programme"
},

    {
  name: "External Summer Research / Project with Prof. Manjunath Krishnapur",
  university: "Indian Institute of Science (IISc), Bengaluru",
  country: "India",
  reg_start: "2026-11-01",
  reg_end: "2026-12-31",
  prog_start: "2027-05-01",
  prog_end: "2027-07-31",
  reco: 0,
  link: "https://math.iisc.ac.in/~manju/"
},


    {
  name: "IIIT-Delhi Summer Internship",
  university: "Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)",
  country: "India",
  reg_start: "2027-02-18",
  reg_end: "2027-03-15",
  prog_start: "2027-05-11",
  prog_end: "2027-07-07",
  reco: 0,
  link: "https://iiitd.ac.in/placement/summer-internships"
},


    {
  name: "TIFR-CAM Summer Student Research Programme (SSRP)",
  university: "TIFR Centre for Applicable Mathematics (TIFR-CAM)",
  country: "India",
  reg_start: "2026-11-01",
  reg_end: "2027-03-29",
  prog_start: "2027-05-15",
  prog_end: "2027-07-31",
  reco: 1,
  link: "https://career.tifrbng.res.in/ssrp"
}
    
    // Add your actual 2nd-year programs here
  ];

// ============================================================
// SELECT DATASET BASED ON PAGE
// ============================================================

const opportunityLevel = document.body.dataset.opportunityLevel;

let projects;

if (opportunityLevel === "2") {
  projects = projects2;
} else if (opportunityLevel === "3") {
  projects = projects3;
} else {
  projects = projects3;
}
  


  // ============================================================
  // TABLE STATE
  // ============================================================

  let currentData = [...projects];

  let sortState = {
    column: null,
    asc: true
  };


  // ============================================================
  // DAYS LEFT
  // ============================================================

  function getDaysLeft(dateStr) {
    const today = new Date();
    const endDate = new Date(dateStr);

    return Math.ceil(
      (endDate - today) / (1000 * 60 * 60 * 24)
    );
  }


  // ============================================================
  // RENDER TABLE
  // ============================================================

  function renderTable(data) {

    tableBody.innerHTML = "";

    data.forEach(p => {

      const daysLeft = getDaysLeft(p.reg_end);

      const row = document.createElement("tr");


      // Highlight deadlines within 7 days

      if (daysLeft <= 7 && daysLeft >= 0) {

        row.style.backgroundColor = "#2a1a1a";
        row.style.borderLeft = "3px solid #ff4d4d";

      }


      row.innerHTML = `
        <td>${p.name}</td>

        <td>${p.university}</td>

        <td>${p.country}</td>

        <td>${p.reg_start}</td>

        <td>${p.reg_end}</td>

        <td>${p.prog_start} → ${p.prog_end}</td>

        <td>${p.reco}</td>

        <td>
          ${daysLeft >= 0 ? daysLeft + " days" : "Closed"}
        </td>

        <td>
          <a href="${p.link}" target="_blank">
            View
          </a>
        </td>
      `;


      tableBody.appendChild(row);

    });

  }


  // ============================================================
  // SEARCH / FILTER
  // ============================================================

  if (searchBox) {

    searchBox.addEventListener("input", () => {

      const value = searchBox.value.toLowerCase().trim();


      currentData = projects.filter(p =>

        p.name.toLowerCase().includes(value) ||

        p.university.toLowerCase().includes(value) ||

        p.country.toLowerCase().includes(value)

      );


      renderTable(currentData);

    });

  }


  // ============================================================
  // SORTING
  // ============================================================

  headers.forEach((th, index) => {

    // Do not sort the Link column

    if (index === 8) return;


    th.addEventListener("click", () => {

      // Remove previous sorting indicators

      headers.forEach(h =>
        h.classList.remove(
          "sorted-asc",
          "sorted-desc"
        )
      );


      // Toggle sorting direction

      if (sortState.column === index) {

        sortState.asc = !sortState.asc;

      } else {

        sortState.column = index;
        sortState.asc = true;

      }


      // Add sorting indicator

      th.classList.add(
        sortState.asc
          ? "sorted-asc"
          : "sorted-desc"
      );


      // Sort data

      currentData.sort((a, b) => {

        let valA;
        let valB;


        switch (index) {

          // Name

          case 0:
            valA = a.name.toLowerCase();
            valB = b.name.toLowerCase();
            break;


          // University

          case 1:
            valA = a.university.toLowerCase();
            valB = b.university.toLowerCase();
            break;


          // Country

          case 2:
            valA = a.country.toLowerCase();
            valB = b.country.toLowerCase();
            break;


          // Registration Start

          case 3:
            valA = new Date(a.reg_start);
            valB = new Date(b.reg_start);
            break;


          // Registration End

          case 4:
            valA = new Date(a.reg_end);
            valB = new Date(b.reg_end);
            break;


          // Program Start

          case 5:

            // Handle "Flexible"

            if (a.prog_start === "Flexible") {
              valA = Infinity;
            } else {
              valA = new Date(a.prog_start);
            }

            if (b.prog_start === "Flexible") {
              valB = Infinity;
            } else {
              valB = new Date(b.prog_start);
            }

            break;


          // Recommendation

          case 6:
            valA = a.reco;
            valB = b.reco;
            break;


          // Days Left

          case 7:
            valA = getDaysLeft(a.reg_end);
            valB = getDaysLeft(b.reg_end);
            break;

        }


        if (valA < valB) {
          return sortState.asc ? -1 : 1;
        }


        if (valA > valB) {
          return sortState.asc ? 1 : -1;
        }


        return 0;

      });


      renderTable(currentData);

    });

  });


  // ============================================================
  // INITIAL AUTO SORT
  // ============================================================

  currentData.sort(
    (a, b) =>
      getDaysLeft(a.reg_end) -
      getDaysLeft(b.reg_end)
  );


  // ============================================================
  // INITIAL RENDER
  // ============================================================

  renderTable(currentData);

});
