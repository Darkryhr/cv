let sidebar = document.querySelector('.sidebar');
let closeBtn = document.querySelector('#btn');
let themeBtn = document.querySelector('#theme');

closeBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains('open')) {
    closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right'); //replacing the iocns class
  } else {
    closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu'); //replacing the iocns class
  }
}

document.querySelector('.nav-list').addEventListener('click', (e) => {
  e.preventDefault();
  // Matching
  if (e.target.parentElement.classList.contains('nav-link')) {
    const id = e.target.parentElement.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const allSections = document.querySelectorAll('.home-section');

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('hidden');

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('hidden');
});

let theme = false;
themeBtn.addEventListener('click', (e) => {
  if (theme) {
    e.target.classList.replace('bxs-moon', 'bxs-sun');
    document.querySelector('body').classList.replace('light', 'dark');
    theme = !theme;
  } else {
    e.target.classList.replace('bxs-sun', 'bxs-moon');
    document.querySelector('body').classList.replace('dark', 'light');
    theme = !theme;
  }
});
