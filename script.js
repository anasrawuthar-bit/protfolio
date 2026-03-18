/* =========================================
   Portfolio JS — Muhammad Anas
   Animations, Typing, Particles, Modals
   ========================================= */

// ===== Typing Animation =====
const typedStrings = [
  'Building web apps with Django 🐍',
  'Learning Flutter & Electron 🚀',
  'Competitive Gamer 🎮',
  'Full-Stack Developer 💻',
  'Open Source Enthusiast ⚡',
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
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
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
    title: 'E-Commerce Platform',
    tags: ['Python', 'Django', 'PostgreSQL', 'Stripe', 'HTML/CSS'],
    body: `
      <p>A comprehensive e-commerce platform built from scratch using Django, featuring a complete shopping experience from product browsing to checkout.</p>
      <h4>✨ Key Features</h4>
      <ul>
        <li>User authentication and profile management</li>
        <li>Product catalog with search, filters, and categories</li>
        <li>Shopping cart with real-time updates</li>
        <li>Secure payment integration with Stripe</li>
        <li>Admin dashboard for order and inventory management</li>
        <li>Email notifications for order confirmations</li>
      </ul>
      <h4>🛠️ Technical Details</h4>
      <p>Built with Django 4.x, PostgreSQL for the database, Django REST Framework for API endpoints, and custom template engine for the frontend. Deployed on a Linux VPS with Nginx and Gunicorn.</p>
    `,
    links: { demo: '#', github: '#' }
  },
  2: {
    title: 'Task Manager App',
    tags: ['Django', 'REST API', 'Django Channels', 'WebSocket', 'Redis'],
    body: `
      <p>A real-time collaborative task management application supporting team workflows with live updates powered by Django Channels and WebSockets.</p>
      <h4>✨ Key Features</h4>
      <ul>
        <li>Real-time task updates via WebSocket connections</li>
        <li>Team collaboration with role-based permissions</li>
        <li>Kanban board with drag-and-drop interface</li>
        <li>Automated email and push notifications</li>
        <li>Task assignment, deadlines, and priority levels</li>
        <li>Activity log and audit trail</li>
      </ul>
      <h4>🛠️ Technical Details</h4>
      <p>Utilizes Django Channels for WebSocket support, Redis as the channel layer backend, and Django REST Framework for the API. Frontend built with vanilla JavaScript and CSS Grid for the Kanban board.</p>
    `,
    links: { demo: '#', github: '#' }
  },
  3: {
    title: 'Mobile Inventory App',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    body: `
      <p>A cross-platform mobile application for businesses to manage their inventory on the go, with barcode scanning and cloud sync.</p>
      <h4>✨ Key Features</h4>
      <ul>
        <li>Barcode and QR code scanning for quick item lookup</li>
        <li>Real-time inventory sync with Firebase</li>
        <li>Stock alerts and low inventory notifications</li>
        <li>Offline mode with automatic sync when connected</li>
        <li>Reports and analytics dashboard</li>
        <li>Multi-user support with role management</li>
      </ul>
      <h4>🛠️ Technical Details</h4>
      <p>Built with Flutter and Dart, using Firebase Firestore for real-time data, Firebase Auth for authentication, and integrated with a Django REST API backend for business logic.</p>
    `,
    links: { github: '#' }
  },
  4: {
    title: 'Desktop Notes App',
    tags: ['Electron', 'Node.js', 'SQLite', 'Markdown'],
    body: `
      <p>A beautiful, minimal desktop note-taking app built with Electron, featuring markdown support and local-first data storage for privacy.</p>
      <h4>✨ Key Features</h4>
      <ul>
        <li>Full Markdown editing with live preview</li>
        <li>Organize notes with folders and tags</li>
        <li>Full-text search across all notes</li>
        <li>Dark and light theme support</li>
        <li>Local SQLite storage — no cloud required</li>
        <li>Export notes as PDF or HTML</li>
      </ul>
      <h4>🛠️ Technical Details</h4>
      <p>Built with Electron and Node.js, using SQLite for persistent local storage, a custom Markdown parser, and CSS custom properties for theming. Cross-platform support for Windows, macOS, and Linux.</p>
    `,
    links: { github: '#' }
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
    actionsHTML += `<a href="${project.links.demo}" class="btn btn-primary" target="_blank">🌐 Live Demo</a>`;
  }
  if (project.links.github) {
    actionsHTML += `<a href="${project.links.github}" class="btn btn-secondary" target="_blank">⌨️ GitHub</a>`;
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
