const projects = [
  { title: "Pokephone",   desc: "Pokephone is a Command-Line Interface digital phone store coded in Java. A final project for the 'Computer Programming 1' course.", img: "assets/images/hem1.png" },
  { title: "Untitled Project 2",   desc: "More to be added!",   img: "assets/images/hem1.png" },
  { title: "Untitled Project 3", desc: "More to be added!",   img: "assets/images/hem1.png" }
];

let current = 0;
const card  = document.getElementById("project-card");
const img   = document.getElementById("project-img");
const title = document.getElementById("project-title");
const desc  = document.getElementById("project-desc");

function show(i) {
  img.src = projects[i].img;
  title.textContent = projects[i].title;
  desc.textContent = projects[i].desc;
}

document.getElementById("next-btn").addEventListener("click", () => {
  card.classList.add("out");                 
  setTimeout(() => {
    current = (current + 1) % projects.length;
    show(current);                          
    card.classList.remove("out");
    card.classList.add("in");               
    void card.offsetWidth;                   
    card.classList.remove("in");             
  }, 400);                                   
});

show(current);

/* ---------- HIGHLIGHT ACTIVE NAV LINK WHILE SCROLLING ---------- */
const links = document.querySelectorAll("nav a[href^='#']");

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l =>
        l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id)
      );
    }
  });
}, { root: document.querySelector("main"), threshold: 0.5 });

document.querySelectorAll("main section").forEach(s => observer.observe(s));