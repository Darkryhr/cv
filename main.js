let sidebar = document.querySelector('.sidebar');
let closeBtn = document.querySelector('#btn');

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
