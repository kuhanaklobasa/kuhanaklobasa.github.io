function copyDiscord() {
  const btn = document.getElementById('discord-btn');
  const orig = btn.textContent;

  navigator.clipboard.writeText('@ogreoverlord');
  btn.textContent = 'Copied to clipboard';
  btn.style.borderColor = '#c8f04e';
  btn.style.color = '#c8f04e';

  setTimeout(() => {
    btn.textContent = orig;
    btn.style.borderColor = '';
    btn.style.color = '';
  }, 1500);
}

function toggleReview5() {
  const more = document.getElementById('review5-more');
  const toggle = document.getElementById('review5-toggle');
  const isOpen = more.style.display === 'inline';

  more.style.display = isOpen ? 'none' : 'inline';
  toggle.textContent = isOpen ? 'Read more' : 'Read less';
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  let current = '';

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === '#' + current ? '#e6e1d5' : '';
  });
});
