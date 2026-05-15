import type { CSSProperties } from "react";
import styles from "./page.module.css";

const quickFacts = [
  { value: "3+", label: "live client projects across web, mobile, and business automation" },
  { value: "2", label: "Django API-backed products with admin, staff, and client workflows" },
  { value: "4", label: "deployed web properties including apps and company portfolio sites" },
];

const featuredProjects = [
  {
    type: "Django / Android / Service Operations",
    title: "GI Service Billing",
    summary:
      "A complete service-management web and Android app for handling admin, technician, client, vendor, and billing workflows from one API-backed system.",
    highlights: [
      "Admin, technician, and client-side views with feedback, follow-up, billing, inventory, team management, and reports",
      "Automated WhatsApp messaging for operational updates and customer communication",
      "Vendor management with complete technician and vendor job history logs",
    ],
    stack: ["Django", "REST API", "Android App", "WhatsApp Automation", "Reports"],
    accent: "#c9643f",
    links: [{ label: "Live app", href: "https://status.botgitech.com" }],
  },
  {
    type: "Django / Client Portal / Notifications",
    title: "Pure H2O Service App",
    summary:
      "A purifier service platform that helps a water purifier company manage customer products, spare-part schedules, reminders, and replacement follow-ups.",
    highlights: [
      "Admin can create products and spares once, then assign them to the right customer profiles",
      "Customer and admin notifications trigger when spare parts reach their replacement period",
      "WhatsApp and app notifications help customers replace spares on time and support repeat sales",
    ],
    stack: ["Django", "REST API", "Client App", "Notifications", "WhatsApp Alerts"],
    accent: "#1c7b74",
    links: [
      { label: "Service app", href: "https://app.pureh20.in" },
      { label: "Company site", href: "https://pureh20.in" },
    ],
  },
  {
    type: "Company Portfolio / Brand Website",
    title: "Pure H2O Portfolio Website",
    summary:
      "A company portfolio website for Pure H2O, created to present the water purifier brand, services, and product credibility online.",
    highlights: [
      "Public-facing website for a small water purifier company",
      "Clean structure for brand information, services, products, and customer trust",
      "Built as a supporting web presence connected to the company behind the service app",
    ],
    stack: ["Responsive UI", "Company Website", "Portfolio Website", "Pure H2O"],
    accent: "#4776b4",
    links: [{ label: "Live site", href: "https://pureh20.in" }],
  },
  {
    type: "Angular / Company Portfolio",
    title: "KE Group International",
    summary:
      "A corporate portfolio website for a private limited company, built to present the business clearly and give the company a polished public presence.",
    highlights: [
      "Responsive company website built with Angular",
      "Clear public-facing structure for company information and credibility",
      "Delivered as a lightweight, professional portfolio for online discovery",
    ],
    stack: ["Angular", "TypeScript", "Responsive UI", "Portfolio Website"],
    accent: "#b98a2f",
    links: [{ label: "Live site", href: "https://kegroupintl.com" }],
  },
];

const capabilities = [
  {
    title: "Django business systems",
    description:
      "I build admin panels, client portals, APIs, auth flows, and data models for real operational workflows.",
  },
  {
    title: "API-driven web and mobile",
    description:
      "I connect web apps and Android apps through structured APIs so teams can manage work from the right screen.",
  },
  {
    title: "Automation and reporting",
    description:
      "I design follow-ups, WhatsApp messaging, notifications, billing, inventory, and reports around business needs.",
  },
];

const stackGroups = [
  {
    title: "Core stack",
    items: ["Python", "Django", "Django REST Framework", "REST APIs", "SQL"],
  },
  {
    title: "Front end and mobile",
    items: ["HTML", "CSS", "JavaScript", "Angular", "Android Apps"],
  },
  {
    title: "Business features",
    items: ["WhatsApp Automation", "Notifications", "Billing", "Inventory", "Reports"],
  },
];

const milestones = [
  {
    phase: "Current chapter",
    title: "Shipping client systems",
    text: "My strongest lane is building Django products that support day-to-day business operations.",
  },
  {
    phase: "Growth mode",
    title: "Thinking API first",
    text: "API-first development helps me connect admin panels, client portals, notifications, and Android apps.",
  },
  {
    phase: "Product mindset",
    title: "Automation that earns its place",
    text: "I like features that reduce manual work: reminders, reports, history logs, and communication flows.",
  },
];

const contactPoints = [
  {
    label: "Email",
    value: "anasrawuthar@gmail.com",
    href: "mailto:anasrawuthar@gmail.com",
  },
  {
    label: "Location",
    value: "India",
  },
  {
    label: "Open to",
    value: "Freelance work, internships, and ambitious product teams",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.siteHeader}>
        <div className={styles.navShell}>
          <a className={styles.brand} href="#top">
            Muhammad Anas
          </a>
          <nav className={styles.navLinks} aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className={`${styles.section} ${styles.heroSection}`} id="top">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Python Django developer</p>
            <h1 className={styles.headline}>
              Building products that feel <span>clear</span>, <span>fast</span>, and ready to grow.
            </h1>
            <p className={styles.lead}>
              I am Muhammad Anas, a developer focused on Django business systems, API-backed web and Android apps,
              and practical automation for service teams. I care about clean data flow, reliable admin workflows,
              and interfaces that help real users finish work faster.
            </p>
            <div className={styles.actionRow}>
              <a className={styles.primaryButton} href="#contact">
                Start a conversation
              </a>
              <a className={styles.secondaryButton} href="#work">
                Explore selected work
              </a>
            </div>

            <ul className={styles.metricList}>
              {quickFacts.map((fact) => (
                <li className={styles.metricCard} key={fact.label}>
                  <span className={styles.metricValue}>{fact.value}</span>
                  <span className={styles.metricLabel}>{fact.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.heroPanelTop}>
              <div>
                <p className={styles.panelLabel}>Current focus</p>
                <h2 className={styles.panelTitle}>Reliable web apps with a sharper visual edge.</h2>
              </div>
              <div className={styles.monogram}>MA</div>
            </div>

            <div className={styles.panelGrid}>
              <article className={styles.panelCard}>
                <h3 className={styles.panelCardTitle}>What I build</h3>
                <p className={styles.panelCardText}>
                  Full-stack Django products, API-driven systems, admin panels, client portals, and mobile app backends.
                </p>
              </article>
              <article className={styles.panelCard}>
                <h3 className={styles.panelCardTitle}>How I work</h3>
                <p className={styles.panelCardText}>
                  Clear database structure first, then smooth workflows, useful dashboards, and reliable deployment.
                </p>
              </article>
              <article className={styles.panelCard}>
                <h3 className={styles.panelCardTitle}>Automation lane</h3>
                <p className={styles.panelCardText}>
                  WhatsApp alerts, app notifications, follow-ups, billing, inventory, and report generation.
                </p>
              </article>
              <article className={styles.panelCard}>
                <h3 className={styles.panelCardTitle}>Delivery focus</h3>
                <p className={styles.panelCardText}>
                  Live client projects that solve operational problems instead of staying as demo screens.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="work">
        <div className={styles.sectionIntro}>
          <div className={styles.sectionCopy}>
            <p className={styles.sectionEyebrow}>Selected work</p>
            <h2 className={styles.sectionTitle}>Projects shaped around real use, not just screenshots.</h2>
          </div>
          <p className={styles.sectionText}>
            These are live client projects I built for real businesses, focused on service operations,
            customer follow-up, automation, and company credibility.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project) => (
            <article
              className={styles.projectCard}
              key={project.title}
              style={{ "--card-accent": project.accent } as CSSProperties}
            >
              <p className={styles.projectType}>{project.type}</p>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectSummary}>{project.summary}</p>

              <ul className={styles.detailList}>
                {project.highlights.map((item) => (
                  <li className={styles.detailItem} key={item}>
                    {item}
                  </li>
                ))}
              </ul>

              <div className={styles.stackRow}>
                {project.stack.map((item) => (
                  <span className={styles.stackChip} key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className={styles.projectLinks} aria-label={`${project.title} links`}>
                {project.links.map((link) => (
                  <a
                    className={styles.projectLink}
                    href={link.href}
                    key={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="services">
        <div className={styles.dualGrid}>
          <div>
            <div className={styles.sectionCopy}>
              <p className={styles.sectionEyebrow}>How I help</p>
              <h2 className={styles.sectionTitle}>Technical depth with an eye for the product experience.</h2>
            </div>

            <div className={styles.capabilityGrid}>
              {capabilities.map((item) => (
                <article className={styles.capabilityCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className={styles.stackBoard}>
            <p className={styles.panelLabel}>Toolkit</p>
            <h2 className={styles.stackTitle}>A stack built around clarity, speed, and room to evolve.</h2>

            {stackGroups.map((group) => (
              <div className={styles.stackGroup} key={group.title}>
                <h3 className={styles.stackGroupTitle}>{group.title}</h3>
                <div className={styles.stackCloud}>
                  {group.items.map((item) => (
                    <span className={styles.stackPill} key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.storyGrid}>
          <article className={styles.storyCard}>
            <div className={styles.sectionCopy}>
              <p className={styles.sectionEyebrow}>About me</p>
              <h2 className={styles.sectionTitle}>I like software that solves the real job beautifully.</h2>
            </div>

            <div className={styles.storyCopy}>
              <p>
                My main strength is building with Python and Django, especially when a product needs structure,
                maintainability, and backend logic that can grow with confidence.
              </p>
              <p>
                The projects I build usually sit close to business operations: technician work, customer follow-up,
                spare-part reminders, billing, inventory, reports, and communication automation.
              </p>
              <p>
                That mix of engineering discipline and practical product thinking is what I want this portfolio to
                communicate: dependable systems, clear interfaces, and features that make everyday work easier.
              </p>
            </div>
          </article>

          <div className={styles.timeline}>
            {milestones.map((item) => (
              <article className={styles.timelineItem} key={item.title}>
                <p className={styles.timelinePhase}>{item.phase}</p>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="contact">
        <div className={styles.contactShell}>
          <div className={styles.sectionCopy}>
            <p className={styles.panelLabel}>Contact</p>
            <h2 className={styles.contactTitle}>If you have an idea worth building, I would love to hear about it.</h2>
          </div>

          <p className={styles.contactText}>
            I am interested in freelance work, internships, and collaborative product teams that care about both
            solid engineering and the final user experience.
          </p>

          <div className={styles.contactGrid}>
            {contactPoints.map((item) => (
              <article className={styles.contactCard} key={item.label}>
                <span className={styles.contactLabel}>{item.label}</span>
                <div className={styles.contactValue}>
                  {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                </div>
              </article>
            ))}
          </div>

          <div className={styles.contactActions}>
            <a className={styles.contactPrimaryButton} href="mailto:anasrawuthar@gmail.com">
              Email me
            </a>
            <a className={styles.contactSecondaryButton} href="#top">
              Back to top
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerNote}>Muhammad Anas portfolio built with Next.js 16 and a fresh single-page design.</p>
        <a className={styles.footerLink} href="#top">
          Return to start
        </a>
      </footer>
    </main>
  );
}
