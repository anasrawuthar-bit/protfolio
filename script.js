/* =========================================
   Portfolio JS — Muhammad Anas
   Animations, Typing, Particles, Modals
   ========================================= */

// ===== Typing Animation =====
const typedStrings = [
  'Building Django web apps',
  'Creating REST APIs for Android apps',
  'Admin, client, and technician dashboards',
  'WhatsApp automation and notifications',
  'Angular portfolio websites',
];

let stringIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');
const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER = 1800;

function typeEffect() {
  const current = typedStrings[stringIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? DELETING_SPEED : TYPING_SPEED;

  if (!isDeleting && charIndex === current.length) {
    delay = PAUSE_AFTER;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    stringIndex = (stringIndex + 1) % typedStrings.length;
    delay = 400;
  }

  setTimeout(typeEffect, delay);
}

typeEffect();

// ===== Navbar Scroll =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = scrollY;
});

// ===== Active Nav Link =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveLink() {
  const scrollY = window.scrollY + 150;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink);

// ===== Mobile Menu =====
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinksEl.classList.toggle('open');
});

navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinksEl.classList.remove('open');
  });
});

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ===== Skill Bar Animation =====
const skillBars = document.querySelectorAll('.skill-bar-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.getAttribute('data-width');
      entry.target.style.width = width + '%';
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== Project Filter =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const categories = (card.getAttribute('data-category') || '').split(/\s+/);
      if (filter === 'all' || categories.includes(filter)) {
        card.style.display = '';
        card.style.animation = 'fadeInUp 0.5s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ===== Project Modal System =====
const projectsData = {
  1: {
    title: 'GI Service Billing',
    tags: ['Django', 'REST API', 'Android App', 'WhatsApp Automation', 'Billing'],
    body: `
      <p>A complete Django-based service billing platform built for GI SERVICE BILLING, covering web dashboards and Android app workflows through API support.</p>
      <h4>Key Features</h4>
      <ul>
        <li>Admin, technician, and client-side views</li>
        <li>Feedback, follow-up, billing, and inventory modules</li>
        <li>Team management and vendor management</li>
        <li>Automated WhatsApp messaging workflows</li>
        <li>Complete reports for service operations</li>
        <li>Technician and vendor job history logs</li>
      </ul>
      <h4>Technical Scope</h4>
      <p>Built with Django and API endpoints for web and Android app usage, with role-based workflows and deployment at status.botgitech.com.</p>
    `,
    links: { demo: 'https://status.botgitech.com' }
  },
  2: {
    title: 'Pure H2O Service App',
    tags: ['Django', 'REST API', 'Client Portal', 'Notifications', 'WhatsApp'],
    body: `
      <p>A Django web and app backend for a water purifier company, built to manage customer product assignments and periodic spare replacement reminders.</p>
      <h4>Key Features</h4>
      <ul>
        <li>Admin and client-side website views</li>
        <li>API support for app workflows</li>
        <li>Product and spare parts creation</li>
        <li>Client-wise product and spare assignment</li>
        <li>Expiry-based app and WhatsApp notifications</li>
        <li>Client profile and service reminder management</li>
      </ul>
      <h4>Business Impact</h4>
      <p>The system helps customers replace purifier spares on time while giving the company a structured way to increase service and spare sales.</p>
    `,
    links: { demo: 'https://app.pureh20.in' }
  },
  3: {
    title: 'Pure H2O Portfolio Website',
    tags: ['Portfolio Website', 'Responsive UI', 'Company Website'],
    body: `
      <p>A company portfolio website created for Pure H2O to present the water purifier brand, services, and product credibility online.</p>
      <h4>Key Features</h4>
      <ul>
        <li>Responsive company portfolio layout</li>
        <li>Service and product-focused presentation</li>
        <li>Brand trust and customer-facing content sections</li>
        <li>Mobile-friendly browsing experience</li>
      </ul>
      <h4>Project Goal</h4>
      <p>Built to give the company a clean public-facing presence that supports brand discovery and customer confidence.</p>
    `,
    links: { demo: 'https://pureh20.in' }
  },
  4: {
    title: 'KE Group International Website',
    tags: ['Angular', 'Portfolio Website', 'Responsive UI'],
    body: `
      <p>An Angular portfolio website built for KE Group International, a private limited company, with a clean and professional brand presentation.</p>
      <h4>Key Features</h4>
      <ul>
        <li>Angular-based portfolio website</li>
        <li>Responsive page structure</li>
        <li>Company-focused content presentation</li>
        <li>Professional UI for public visitors</li>
      </ul>
      <h4>Technical Scope</h4>
      <p>Implemented with Angular for a structured frontend and deployed at kegroupintl.com.</p>
    `,
    links: { demo: 'https://kegroupintl.com' }
  }
};

function openModal(id) {
  const project = projectsData[id];
  if (!project) return;

  document.getElementById('modalTitle').textContent = project.title;

  const tagsContainer = document.getElementById('modalTags');
  tagsContainer.innerHTML = project.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  document.getElementById('modalBody').innerHTML = project.body;

  const actionsContainer = document.getElementById('modalActions');
  let actionsHTML = '';
  if (project.links.demo) {
    actionsHTML += `<a href="${project.links.demo}" class="btn btn-primary" target="_blank" rel="noopener">Live Website</a>`;
  }
  if (project.links.github) {
    actionsHTML += `<a href="${project.links.github}" class="btn btn-secondary" target="_blank" rel="noopener">GitHub</a>`;
  }
  actionsContainer.innerHTML = actionsHTML;

  document.getElementById('projectModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('projectModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== Contact Form Handler =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  const originalText = btn.innerHTML;
  btn.innerHTML = '✅ Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #22c55e, #06b6d4)';
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = '';
    e.target.reset();
  }, 2500);
}

// ===== Particle Background Canvas =====
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const PARTICLE_COUNT = 60;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.4 + 0.1;
    this.color = Math.random() > 0.5
      ? `rgba(168, 85, 247, ${this.opacity})`
      : `rgba(6, 182, 212, ${this.opacity})`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 150) {
        const opacity = (1 - distance / 150) * 0.15;
        ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  connectParticles();
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// ===== Fade-In-Up Keyframe (for filter animation) =====
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

// ===== Smooth scroll for nav links (fallback) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
