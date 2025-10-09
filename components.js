const pages = {
  home: {
    title: "Ali-Nur - Portfolio",
    menuLinks: [
      { text: "Portfolio", href: "#portfolio" },
      { text: "Contact", href: "#contact" },
    ],
    content: `
      <div class="page active" id="home">
        <div class="hero">
          <h1 class="hero-title">
            <span class="gray">Working with</span>
            <span class="white">Purpose</span><span class="gray">,</span><br />
            <span class="gray">Just build</span>
            <span class="white">Things</span><span class="gray">.</span>
          </h1>
          <div class="scroll-icon"></div>
        </div>

        <div class="about-section">
          <h2 class="section-title">About Me</h2>
          <p class="about-text">
            Hi, I am Ali-Nur! I'm a developer with 1 years of web
            development experience with the past 1 years spent honing my
            skills in backend development on Java Spring, recently
            started working with Golang
          </p>
          <p class="about-text">
            Pride myself on producing high-quality websites, and I'm
            comfortable working solo or as part of a team.
          </p>
        </div>

        <div class="profile-block">
          <div class="profile-photo"></div>
          <div></div>
        </div>

        <div class="featured-section">
          <h3 class="projects-title">Featured Projects</h3>
          <p class="about-text">
            I craft backend part that showcase my passion and expertise
            in design and development.
          </p>
          <div class="projects-grid">
            <div class="project-card" style="background-image: url('assets/ukuk.jpg'); background-position: right; background-size: 700px 300px;"></div>
            <div class="project-card" style="background-image: url('assets/mvp.png'); background-position: center; background-size: 700px 300px;"></div>
          </div>
        </div>

        <div class="cta-section">
          <h2 class="cta-title">Let's<br />Work Together -</h2>
          <div class="cta-buttons">
            <a href="mailto:alinur.sagynbaev1@gmail.com" class="btn btn-email">
              <span>✉</span> alinur.sagynbaev1@gmail.com
            </a>
            <a href="https://t.me/alinur31" class="btn btn-telegram">
              <span>↑</span> Chat with me
            </a>
          </div>
        </div>
      </div>
    `,
  },
  portfolio: {
    title: "Ali-Nur - Portfolio",
    menuLinks: [
      { text: "Home", href: "#home" },
      { text: "Contact", href: "#contact" },
    ],
    content: `
      <div class="page active" id="portfolio">
        <div class="portfolio-hero">
          <h1>Showcasing my talent<br />and passion</h1>
          <div class="scroll-icon" style="margin: 40px auto"></div>
        </div>

        <div style="max-width: 1200px; margin: 0 auto">
          <h2 style="font-size: 32px; margin: 20px 0 60px">
            Discover my skills and creativity in<br />action, with just one click.
          </h2>

          <div class="portfolio-grid">
            <div class="portfolio-item">
              <div class="project-info">
                <div class="project-tag">App page</div>
                <div class="project-meta">
                  <span>Backend part</span>
                  <a href="https://app.mvp.kg/" class="view-project">View Project →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cta-section">
          <h2 class="cta-title">Let's<br />Work Together -</h2>
          <div class="cta-buttons">
            <a href="mailto:alinur.sagynbaev1@gmail.com" class="btn btn-email">
              <span>✉</span> alinur.sagynbaev1@gmail.com
            </a>
            <a href="https://t.me/alinur31" class="btn btn-telegram">
              <span>↑</span> Chat with me
            </a>
          </div>
        </div>
      </div>
    `,
  },
  contact: {
    title: "Ali-Nur - Contact",
    menuLinks: [
      { text: "Home", href: "#home" },
      { text: "Portfolio", href: "#portfolio" },
    ],
    content: `
      <div class="page active" id="contact">
        <div class="portfolio-hero">
          <h1>Let's Connect</h1>
          <p class="portfolio-description">
            Get in touch for opportunities or just to say hi! 👋
          </p>
        </div>

        <div class="about-section" style="text-align: center">
          <div class="contact-block">
            <h3 style="font-size: 24px; margin-bottom: 20px">Email</h3>
            <a href="mailto:alinur.sagynbaev1@gmail.com" class="link-accent">
              alinur.sagynbaev1@gmail.com
            </a>
          </div>

          <div class="contact-block">
            <h3 style="font-size: 24px; margin-bottom: 20px">WhatsApp</h3>
            <a href="tel:+996703303168" class="link-accent">+996 (703) 30-31-68</a>
          </div>

          <div class="contact-block">
            <h3 style="font-size: 24px; margin-bottom: 20px">Social Media</h3>
            <div class="social-icons" style="justify-content: center; margin-top: 30px">
              <div class="footer-social">
                <a href="https://www.linkedin.com/in/ali-nur-sagynbaev-490a83277/">in</a>
                <a href="https://www.instagram.com/whos.alinur/">ig</a>
                <a href="https://t.me/alinur31">tg</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
};

function loadComponents() {
  const body = document.body;

  const headerTemplate = document.getElementById("header-template");
  if (headerTemplate) {
    body.insertBefore(headerTemplate.content.cloneNode(true), body.firstChild);
  }

  const menuTemplate = document.getElementById("menu-template");
  if (menuTemplate) {
    const headerEl = document.querySelector(".header");
    if (headerEl) {
      headerEl.after(menuTemplate.content.cloneNode(true));
    }
  }
}

function loadPage(pageName) {
  const page = pages[pageName];
  if (!page) return;

  document.title = page.title;

  const pageContent = document.getElementById("page-content");
  if (pageContent) {
    pageContent.innerHTML = page.content;

    const footerTemplate = document.getElementById("footer-template");
    if (footerTemplate) {
      const pageDiv = pageContent.querySelector(".page");
      if (pageDiv) {
        pageDiv.appendChild(footerTemplate.content.cloneNode(true));
      }
    }
  }

  const menuLinks = document.getElementById("menu-links");
  if (menuLinks && page.menuLinks) {
    menuLinks.innerHTML = page.menuLinks
      .map(
        (link) => `<a class="menu-link" href="${link.href}">${link.text}</a>`,
      )
      .join("");
  }
}

function handleRoute() {
  const hash = window.location.hash.slice(1) || "home";
  loadPage(hash);

  closeMenu();
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponents();
  handleRoute();

  window.addEventListener("hashchange", handleRoute);
});
