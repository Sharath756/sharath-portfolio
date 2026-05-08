
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const navElements = document.getElementById('nav-elements');

  
  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    navElements.classList.toggle('active');
  });

  const navLinks = navElements.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navElements.classList.remove('active');
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (window.innerWidth <= 768 && 
        !navElements.contains(event.target) && 
        !menuBtn.contains(event.target)) {
      navElements.classList.remove('active');
    }
  });
});

function toggleAbout() {
  const shortText = document.getElementById('short-about');
  const fullText = document.getElementById('full-about');
  const btn = document.querySelector('.about-button');

  if (fullText.style.display === "none") {
    fullText.style.display = "block";
    btn.innerText = "see less";
  } else {
    fullText.style.display = "none";
    btn.innerText = "see more";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const revealTargets = document.querySelectorAll(
    ".home-section, .about-section, .skill-section, .service-section, .contacts, .Education-Experiance-box, .skill-box, .project-box, .contact-card, .home-container i, .home-container h1, .home-container span, .home-container .resume-btn, .social-media img, .about-section h1, .about p, .about-button, .skill-section h1, .service-section h1, .project-box h2, .project-box p, .form-container h3, .form-container input, .form-container textarea, .form-container button"
  );

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "-20% 0px -10% 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.1) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, appearOptions);

  revealTargets.forEach(item => {
    appearOnScroll.observe(item);
  });
});

  const image = document.querySelector('.Main-img');

  image.addEventListener('mousemove', (e) => {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * 15;
    const rotateY = -(x / rect.width) * 15;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });

