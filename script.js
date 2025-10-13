// Redirect buttons
function redirect(page) {
    window.location.href = page;
  }
  
  // Navbar hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Fade-in on scroll
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.3 };
  
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  
  faders.forEach(fader => appearOnScroll.observe(fader));

const redirectToCommittees = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  let isRedirecting = false;

  window.addEventListener('scroll', () => {
    if (window.scrollY > hero.offsetHeight && !isRedirecting) {
      isRedirecting = true;
      // Add fade-out class for smooth transition
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = 'comms/committees.html';
      }, 500); // match fade-out duration
    }
  });
};
function copyNumber(button) {
  const number = button.previousElementSibling.textContent;
  navigator.clipboard.writeText(number).then(() => {
    
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}
redirectToCommittees();
  
