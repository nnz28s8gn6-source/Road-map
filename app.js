(function () {
  var PLAN = [
    { y: 1, cal: "2026/27", focus: "Foundations and habits",
      courses: "Common courses (math, logic, English): maximize grades",
      build: "CS50x or at least CS50 Python. HTML, CSS and JavaScript basics. A few small projects on GitHub.",
      exp: "Create GitHub and LinkedIn accounts. Apply for the GitHub Student Developer Pack. Commit weekly.",
      mile: "Few small projects on GitHub; CS50 half or fully done" },
    { y: 2, cal: "2027/28", focus: "Core programming skills",
      courses: "Programming fundamentals, object-oriented programming, data structures, discrete math, databases",
      build: "Portfolio site and a database-backed app with login, both deployed. Learn Git and basic Linux. Easy LeetCode problems 3 times a week.",
      exp: "First open-source contribution (a documentation fix).",
      mile: "3+ public projects, one deployed; CGPA 3.5 or higher" },
    { y: 3, cal: "2028/29", focus: "Choose a stack and gain real-world experience",
      courses: "Algorithms, operating systems, computer networks, web programming",
      build: "Full app for a real local business, with a testimonial. Payment API in test mode. Go deep on SQL, REST APIs and Docker in your chosen stack.",
      exp: "First internship or client work. Regular open-source contributions. Apply to Google Summer of Code if ready (window likely around March).",
      mile: "One year of experience outside class plus a client testimonial" },
    { y: 4, cal: "2029/30", focus: "Specialize and land a serious internship",
      courses: "Software architecture, testing, security, cloud",
      build: "A project with real users. Specialization: cybersecurity, cloud and DevOps, data and AI, or mobile.",
      exp: "Serious internship at a target company. Apply to Google Summer of Code or Outreachy. Medium-level interview practice.",
      mile: "Internship completed and a project with real users" },
    { y: 5, cal: "2030/31", focus: "Launch",
      courses: "Final-year project and exit exam courses (software engineering fundamentals, project management, security)",
      build: "Final-year product project, for example a fintech or telecom tool with an Amharic interface.",
      exp: "Start exit exam review early. Apply to trainee programs and remote roles the day windows open. Keep scanned documents ready.",
      mile: "Offers in hand, or applications sent the day windows open" }
  ];

  var TASKS = [
    [1, "Start CS50x, or at least CS50 Python (free to audit; free certificate for scoring 70%+ on every problem set and the final project)", "Learning"],
    [1, "Learn Python plus HTML, CSS and JavaScript basics (freeCodeCamp or The Odin Project)", "Learning"],
    [1, "Create a GitHub account and commit weekly", "Portfolio"],
    [1, "Apply for the GitHub Student Developer Pack (school email or dated student ID)", "Portfolio"],
    [1, "Create a LinkedIn profile", "Portfolio"],
    [1, "Publish a first small project on GitHub", "Project"],
    [1, "Keep common-course grades high (aim for CGPA 3.5 or higher)", "Grades"],
    [1, "Practice English writing: write README files and short project notes", "Skills"],
    [2, "Ace programming fundamentals, object-oriented programming, data structures, discrete math and databases", "Courses"],
    [2, "Learn Git and basic Linux", "Learning"],
    [2, "Solve easy LeetCode problems 3 times a week", "Interview prep"],
    [2, "Build and deploy a portfolio site", "Project"],
    [2, "Build and deploy a database-backed app with login", "Project"],
    [2, "Make a first open-source contribution (a documentation fix)", "Open source"],
    [2, "Keep CGPA at 3.5 or higher", "Grades"],
    [3, "Ace algorithms, operating systems, computer networks and web programming", "Courses"],
    [3, "Choose your main stack (for example Java with Spring Boot plus React, or Python plus React)", "Learning"],
    [3, "Go deep on SQL, REST APIs and Docker", "Learning"],
    [3, "Build a full app for a real local business and get a testimonial", "Project"],
    [3, "Integrate a payment API in test mode", "Project"],
    [3, "Contribute regularly to one open-source project", "Open source"],
    [3, "Do a first internship or client work", "Experience"],
    [3, "Apply to Google Summer of Code if ready (confirm dates on the official site)", "Open source"],
    [4, "Ace software architecture, testing, security and cloud courses", "Courses"],
    [4, "Choose a specialization: cybersecurity, cloud and DevOps, data and AI, or mobile", "Learning"],
    [4, "Complete a serious internship at a target company (telecom, bank or fintech)", "Experience"],
    [4, "Apply to Google Summer of Code or Outreachy (confirm dates and eligibility)", "Open source"],
    [4, "Practice medium-level interview problems", "Interview prep"],
    [4, "Ship a project with real users", "Project"],
    [5, "Build the final-year project as a real product with real users", "Project"],
    [5, "Start exit exam review early (core software engineering courses)", "Exam"],
    [5, "Keep scanned documents ready: CV, application letter, temporary diploma, student copy, exit exam confirmation, grade 8, 10 and 12 certificates", "Applications"],
    [5, "Apply to trainee programs the day their windows open (often about 5 working days)", "Applications"],
    [5, "Apply to remote roles and graduate programs", "Applications"],
    [5, "Graduate on time with a CGPA of 3.5 or higher", "Grades"]
  ];

  var SOURCES = [
    ["Ahadu Bank IT Trainee", "https://etcareers.com/jobs/ahadu-bank-s-c-it-trainee-vacancy-2026-5-positions-fresh-graduates-addis-ababa-f27b55ea"],
    ["Wegagen Bank Graduate Trainee", "https://etcareers.com/jobs/wegagen-bank-s-c-fresh-graduate-vacancy-2026-65b525bb"],
    ["Tsehay Bank IT Trainee", "https://etcareers.com/jobs/tsehay-bank-job-vacancy-2026-it-trainee-senior-hr-business-partner-0f74b0b2"],
    ["Addis International Bank IT Trainee", "https://etcareers.com/jobs/addis-international-bank-fresh-graduate-vacancy-2026-fcd1d50d"],
    ["Safaricom Ethiopia, 3 positions", "https://etcareers.com/jobs/safaricom-ethiopia-job-vacancy-2026-3-positions-in-addis-ababa-7c59ce8b"],
    ["Scopic Junior Web Developer", "https://www.getonbrd.com/jobs/programming/remote-junior-web-developer-scopic-remote"],
    ["Google Summer of Code FAQ", "https://developers.google.com/open-source/gsoc/faq"],
    ["GSoC 2027 timeline estimate", "https://leapscholar.com/blog/?p=82099"],
    ["Outreachy", "https://outreachy.org/"],
    ["GitHub Student Developer Pack", "https://help.github.com/articles/applying-for-a-student-developer-pack"],
    ["CS50 certificate details", "https://www.autoapplymax.com/blog/best-free-software-engineering-certifications-2026"]
  ];

  var STATUS = ["To do", "Doing", "Done"];
  var KEY = "se-roadmap-v1";
  var state = { s: TASKS.map(function () { return 0; }), tab: "plan", year: 0 };

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return;
      var d = JSON.parse(raw);
      if (d && Array.isArray(d.s) && d.s.length === TASKS.length) state.s = d.s.map(function (n) { return n === 1 || n === 2 ? n : 0; });
      if (d && (d.tab === "plan" || d.tab === "tasks" || d.tab === "notes")) state.tab = d.tab;
      if (d && d.year >= 1 && d.year <= 5) state.year = d.year;
    } catch (e) {}
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify({ s: state.s, tab: state.tab, year: state.year })); } catch (e) {}
  }

  var now = new Date();
  var currentYear = Math.min(5, Math.max(1, now.getFullYear() - 2026 + (now.getMonth() >= 8 ? 1 : 0)));

  function counts(year) {
    var total = 0, done = 0;
    TASKS.forEach(function (t, i) {
      if (!year || t[0] === year) { total++; if (state.s[i] === 2) done++; }
    });
    return { total: total, done: done };
  }

  function renderHeader() {
    var c = counts(0);
    var pct = Math.round(100 * c.done / c.total);
    document.getElementById("overallText").textContent = c.done + " of " + c.total + " done";
    document.getElementById("overallFill").style.width = pct + "%";
    document.getElementById("overallBar").setAttribute("aria-valuenow", String(pct));
  }

  function renderPlan() {
    var y = state.year || currentYear;
    var p = PLAN[y - 1];
    var c = counts(y);
    var chips = PLAN.map(function (q) {
      return '<button type="button" class="chip" data-year="' + q.y + '" aria-pressed="' + (q.y === y) + '"><b>Year ' + q.y + '</b><span>' + q.cal + '</span></button>';
    }).join("");
    var pct = Math.round(100 * c.done / c.total);
    return '<div class="years" role="group" aria-label="Choose a year">' + chips + '</div>' +
      '<article class="card">' +
        '<div><div class="eyebrow">Year ' + p.y + ' · ' + p.cal + '</div>' +
        '<h2>' + p.focus + (p.y === currentYear ? '<span class="now">Now</span>' : '') + '</h2></div>' +
        '<dl>' +
          '<div class="field"><dt>Courses to ace</dt><dd>' + p.courses + '</dd></div>' +
          '<div class="field"><dt>Build</dt><dd>' + p.build + '</dd></div>' +
          '<div class="field"><dt>Experience and programs</dt><dd>' + p.exp + '</dd></div>' +
          '<div class="field milestone"><dt>Milestone by end of year</dt><dd>' + p.mile + '</dd></div>' +
        '</dl>' +
        '<div class="yprog"><span>' + c.done + ' of ' + c.total + ' tasks done this year</span>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
        '<button type="button" class="primary" data-goto="' + y + '">See Year ' + y + ' tasks</button>' +
      '</article>';
  }

  function renderTasks() {
    var out = '<p class="hint">Tap a task to move it from To do, to Doing, to Done, and back.</p>';
    for (var y = 1; y <= 5; y++) {
      var c = counts(y);
      out += '<section class="group" id="year-' + y + '"><div class="group-head"><h2>Year ' + y + ' · ' + PLAN[y - 1].cal + '</h2><span>' + c.done + '/' + c.total + '</span></div>';
      TASKS.forEach(function (t, i) {
        if (t[0] !== y) return;
        var s = state.s[i];
        out += '<button type="button" class="task" data-i="' + i + '" data-s="' + s + '" aria-label="' + t[1].replace(/"/g, "&quot;") + ': ' + STATUS[s] + '">' +
          '<span class="dot" aria-hidden="true"></span>' +
          '<span class="txt"><span>' + t[1] + '</span><span class="meta"><span>' + t[2] + '</span><span class="st">' + STATUS[s] + '</span></span></span></button>';
      });
      out += '</section>';
    }
    return out;
  }

  function renderNotes() {
    var links = SOURCES.map(function (s) { return '<li><a href="' + s[1] + '" target="_blank" rel="noopener">' + s[0] + '</a></li>'; }).join("");
    return '<div class="notes">' +
      '<section class="card install"><h2>Put it on your home screen</h2><ol>' +
        '<li><b>iPhone, in Safari:</b> tap Share, then Add to Home Screen.</li>' +
        '<li><b>Android, in Chrome:</b> tap the menu (three dots), then Add to Home screen or Install app.</li>' +
      '</ol><p class="hint">Your checkmarks are saved in the browser on that device. If the home screen icon opens with empty progress, mark your tasks again there.</p></section>' +
      '<section><h2>Key points</h2><ul>' +
        '<li>Graduate on time with a high CGPA. Recent Ethiopian bank IT trainee programs set minimum CGPAs between 2.5 and 3.5, one also required an exit exam score of 80 or higher, and several accepted only the latest graduating classes.</li>' +
        '<li>Build experience outside class before you graduate. Safaricom Ethiopia asked for at least 1 year of coding outside university for its fintech software engineer role; Scopic’s junior remote role also asked for 1 year or more.</li>' +
        '<li>Pick one stack and go deep. Listings mention Java with Spring Boot, .NET Core, Python, React and Flutter or Kotlin, plus SQL, Docker and cloud.</li>' +
        '<li>Write documentation and project notes in English from Year 1. Remote employers and open-source mentors judge your written English directly.</li>' +
      '</ul></section>' +
      '<section><h2>Assumptions</h2><ul>' +
        '<li>Calendar years are approximate. Year 1 is the freshman year (2026/27) in a 5-year program taught in English.</li>' +
        '<li>Google Summer of Code applications are expected around March each year (a third-party estimate; confirm on the official site). It accepts students and beginners with under 2 years of open-source experience.</li>' +
        '<li>Outreachy dates and eligibility change each round. Check outreachy.org first.</li>' +
        '<li>Employer requirements come from vacancy listings seen in October 2026 and change often. Re-check before you apply.</li>' +
      '</ul></section>' +
      '<section><h2>Sources</h2><ul>' + links + '</ul></section>' +
    '</div>';
  }

  function render() {
    var v = document.getElementById("view");
    v.innerHTML = state.tab === "plan" ? renderPlan() : state.tab === "tasks" ? renderTasks() : renderNotes();
    document.querySelectorAll("nav button").forEach(function (b) {
      if (b.dataset.tab === state.tab) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
    });
    renderHeader();
  }

  document.querySelector("nav").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-tab]");
    if (!b) return;
    state.tab = b.dataset.tab; save(); render(); window.scrollTo(0, 0);
  });

  document.getElementById("view").addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (chip) { state.year = +chip.dataset.year; save(); render(); return; }
    var go = e.target.closest("[data-goto]");
    if (go) {
      var y = go.dataset.goto;
      state.tab = "tasks"; save(); render();
      var el = document.getElementById("year-" + y);
      if (el) el.scrollIntoView();
      return;
    }
    var t = e.target.closest(".task");
    if (t) {
      var i = +t.dataset.i;
      state.s[i] = (state.s[i] + 1) % 3;
      save();
      var top = window.scrollY;
      render();
      window.scrollTo(0, top);
      var again = document.querySelector('.task[data-i="' + i + '"]');
      if (again) again.focus({ preventScroll: true });
    }
  });

  load();
  render();
})();