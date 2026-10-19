// Mobile menu toggle
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav ul');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
}

// Footer year
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();
