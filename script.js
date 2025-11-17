
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
  const boxes = document.querySelectorAll(".Education-Experiance-box");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -30px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  boxes.forEach(box => {
    appearOnScroll.observe(box);
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


