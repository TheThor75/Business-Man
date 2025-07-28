// Données pour les sections
const articles = [
  {
    id: 1,
    title: "Stratégie Marketing",
    description:
      "Découvrez comment développer une stratégie marketing efficace pour votre entreprise.",
  },
  {
    id: 2,
    title: "Gestion de Projet",
    description:
      "Les meilleures pratiques pour mener vos projets à terme dans les délais et le budget.",
  },
  {
    id: 3,
    title: "Leadership",
    description:
      "Devenez un leader inspirant pour votre équipe avec ces techniques éprouvées.",
  },
  {
    id: 4,
    title: "Finance d'Entreprise",
    description:
      "Maîtrisez les fondamentaux de la finance pour prendre des décisions éclairées.",
  },
  {
    id: 5,
    title: "Digitalisation",
    description:
      "Transformez votre entreprise avec les dernières technologies digitales.",
  },
  {
    id: 6,
    title: "Ressources Humaines",
    description:
      "Attirez et retenez les meilleurs talents pour votre organisation.",
  },
  {
    id: 7,
    title: "Productivité",
    description:
      "Boostez votre productivité avec ces méthodes simples et efficaces.",
  },
  {
    id: 8,
    title: "Innovation",
    description: "Créez une culture d'innovation au sein de votre entreprise.",
  },
];

const produits = [
  {
    id: 1,
    title: "Business Suite Pro",
    description: "La suite logicielle complète pour gérer votre entreprise.",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Visualisez toutes vos données métier en temps réel.",
  },
  {
    id: 3,
    title: "CRM Entreprise",
    description: "Gérez vos relations clients efficacement.",
  },
  {
    id: 4,
    title: "Formation en Ligne",
    description: "Accédez à notre catalogue de formations professionnelles.",
  },
  {
    id: 5,
    title: "Template Business",
    description: "Modèles professionnels pour vos présentations et documents.",
  },
  {
    id: 6,
    title: "Coaching VIP",
    description: "Accompagnement personnalisé par nos experts.",
  },
  {
    id: 7,
    title: "Audit Organisationnel",
    description: "Analyse complète de votre structure d'entreprise.",
  },
  {
    id: 8,
    title: "Solution Cloud",
    description: "Stockez et sécurisez vos données professionnelles.",
  },
];

const divers = [
  {
    id: 1,
    title: "Podcast Business",
    description: "Écoutez nos interviews d'experts et entrepreneurs.",
  },
  {
    id: 2,
    title: "Webinaires",
    description: "Participez à nos événements en ligne gratuits.",
  },
  {
    id: 3,
    title: "Livres Blancs",
    description: "Téléchargez nos études sectorielles approfondies.",
  },
  {
    id: 4,
    title: "Outils Gratuits",
    description: "Boostez votre productivité avec nos outils.",
  },
  {
    id: 5,
    title: "Communauté",
    description: "Rejoignez notre réseau de professionnels.",
  },
  {
    id: 6,
    title: "Événements",
    description: "Participez à nos conférences et rencontres.",
  },
  {
    id: 7,
    title: "Blog",
    description: "Découvrez nos articles et conseils pratiques.",
  },
  { id: 8, title: "FAQ", description: "Trouvez les réponses à vos questions." },
];

// Configuration des sections (pour index.html)
const sections = {
  article: {
    desktopGrid: document.querySelector("#article .desktop-grid"),
    carousel: document.getElementById("articleCarousel"),
    indicators: document.getElementById("articleIndicators"),
    items: articles,
    currentIndex: 0,
  },
  produit: {
    desktopGrid: document.querySelector("#produit .desktop-grid"),
    carousel: document.getElementById("produitCarousel"),
    indicators: document.getElementById("produitIndicators"),
    items: produits,
    currentIndex: 0,
  },
  divers: {
    desktopGrid: document.querySelector("#divers .desktop-grid"),
    carousel: document.getElementById("diversCarousel"),
    indicators: document.getElementById("diversIndicators"),
    items: divers,
    currentIndex: 0,
  },
};

// Traductions pour les langues (identiques pour index.html + contact.html)
const translations = {
  fr: {
    articles: "Articles",
    products: "Produits",
    misc: "Divers",
    "hero-title": "Solutions Professionnelles pour Votre Business",
    "hero-text":
      "Découvrez notre gamme exclusive de produits et services conçus pour optimiser votre productivité et booster votre croissance.",
    "discover-btn": "Nous contacter",
    home: "Accueil",
    about: "À propos",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
    contact: "Contact",
    "contact-info": "Informations de contact",
    "contact-form-title": "Envoyez-nous un message",
    "contact-name": "Nom complet",
    "contact-email": "Adresse email",
    "contact-subject": "Sujet",
    "contact-message": "Message",
    "contact-submit": "Envoyer",
    "newsletter-title": "Inscrivez-vous à notre newsletter",
    "email-placeholder": "Votre email",
    "subscribe-btn": "S'inscrire",
    copyright: "©️ 2025 Busness-Man. Tous droits réservés.",
  },
  en: {
    articles: "Articles",
    products: "Products",
    misc: "Miscellaneous",
    "hero-title": "Professional Solutions for Your Business",
    "hero-text":
      "Discover our exclusive range of products and services designed to optimize your productivity and boost your growth.",
    "discover-btn": "Contact us",
    home: "Home",
    about: "About",
    legal: "Legal Notice",
    privacy: "Privacy Policy",
    contact: "Contact",
    "contact-info": "Contact Information",
    "contact-form-title": "Send us a message",
    "contact-name": "Full Name",
    "contact-email": "Email Address",
    "contact-subject": "Subject",
    "contact-message": "Message",
    "contact-submit": "Send",
    "newsletter-title": "Subscribe to our newsletter",
    "email-placeholder": "Your email",
    "subscribe-btn": "Subscribe",
    copyright: "©️ 2025 Busness-Man. All rights reserved.",
  },
  zh: {
    articles: "文章",
    products: "产品",
    misc: "其他",
    "hero-title": "为您的业务提供专业解决方案",
    "hero-text":
      "探索我们专为优化您的生产力和促进增长而设计的独家产品和服务系列。",
    "discover-btn": "联系我们",
    home: "首页",
    about: "关于我们",
    legal: "法律声明",
    privacy: "隐私政策",
    contact: "联系我们",
    "contact-info": "联系信息",
    "contact-form-title": "发送消息",
    "contact-name": "姓名",
    "contact-email": "电子邮件",
    "contact-subject": "主题",
    "contact-message": "消息",
    "contact-submit": "发送",
    "newsletter-title": "订阅我们的通讯",
    "email-placeholder": "您的电子邮件",
    "subscribe-btn": "订阅",
    copyright: "©️ 2025 Busness-Man. 保留所有权利。",
  },
};

// Fonction pour changer la langue
function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      if (element.tagName === "INPUT") {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  const curDesktop = document.getElementById("current-lang-desktop");
  const curMobile = document.getElementById("current-lang");
  if (curDesktop) {
    curDesktop.textContent =
      lang === "fr" ? "FR" : lang === "en" ? "EN" : "中文";
  }
  if (curMobile) {
    curMobile.textContent =
      lang === "fr" ? "FR" : lang === "en" ? "EN" : "中文";
  }

  document.querySelectorAll(".language-dropdown").forEach((dropdown) => {
    dropdown.classList.remove("active");
  });

  localStorage.setItem("preferredLanguage", lang);
}

// Fonction pour générer les grilles desktop (index.html)
function generateDesktopGrids() {
  for (const sectionType in sections) {
    const section = sections[sectionType];
    const items = section.items;
    const container = section.desktopGrid;

    container.innerHTML = "";

    const row1 = document.createElement("div");
    row1.className = "grid-row";

    const row2 = document.createElement("div");
    row2.className = "grid-row";

    for (let i = 0; i < 8; i++) {
      if (i < 4) {
        row1.appendChild(createGridItem(items[i]));
      } else {
        row2.appendChild(createGridItem(items[i]));
      }
    }

    container.appendChild(row1);
    container.appendChild(row2);
  }
}

// Fonction pour créer un élément de grille (index.html)
function createGridItem(item) {
  const gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  gridItem.innerHTML = `
        <img src="https://picsum.photos/400/200?business=${item.id}" alt="${item.title}" class="grid-img">
        <div class="item-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="#" class="btn">Acheter</a>
        </div>
    `;
  return gridItem;
}

// Fonction pour générer les carrousels mobile (index.html)
function generateCarousels() {
  for (const sectionType in sections) {
    const section = sections[sectionType];
    const items = section.items;
    const carousel = section.carousel;
    const indicators = section.indicators;

    carousel.innerHTML = "";
    items.forEach((item) => {
      const carouselItem = document.createElement("div");
      carouselItem.className = "carousel-item";
      carouselItem.innerHTML = `
                <img src="https://picsum.photos/400/200?business=${item.id}" alt="${item.title}" class="carousel-img">
                <div class="carousel-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <a href="#" class="btn">Acheter</a>
                </div>
            `;
      carousel.appendChild(carouselItem);
    });

    indicators.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
      const indicator = document.createElement("div");
      indicator.className = "indicator";
      if (i === 0) indicator.classList.add("active");
      indicator.dataset.index = i;
      indicator.addEventListener("click", () => {
        goToSlide(sectionType, i);
      });
      indicators.appendChild(indicator);
    }

    section.currentIndex = 0;
    updateCarouselPosition(sectionType);
  }
}

// Fonction pour mettre à jour la position du carrousel (index.html)
function updateCarouselPosition(sectionType) {
  const section = sections[sectionType];
  const offset = -section.currentIndex * 100;
  section.carousel.style.transform = `translateX(${offset}%)`;

  const indicators = section.indicators.querySelectorAll(".indicator");
  indicators.forEach((indicator, index) => {
    if (index === section.currentIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Fonction pour aller à une diapositive spécifique (index.html)
function goToSlide(sectionType, slideIndex) {
  const section = sections[sectionType];
  section.currentIndex = slideIndex;
  updateCarouselPosition(sectionType);
}

// Fonction pour déplacer le carrousel (index.html)
function moveCarousel(sectionType, direction) {
  const section = sections[sectionType];
  const totalItems = section.items.length;

  let newIndex = section.currentIndex + direction;
  if (newIndex < 0) newIndex = totalItems - 1;
  if (newIndex >= totalItems) newIndex = 0;

  section.currentIndex = newIndex;
  updateCarouselPosition(sectionType);
}

// Gestion du menu hamburger (index.html + contact.html)
function setupMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const closeMenu = document.getElementById("closeMenu");

  if (hamburger && navMenu && closeMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });

    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

// Fonction pour envoyer le formulaire de contact (contact.html)
function setupContactForm() {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validation reCAPTCHA (front-end)
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      formMessage.textContent = "Veuillez compléter le reCAPTCHA";
      formMessage.className = "form-message error";
      formMessage.style.display = "block";
      return;
    }

    // Afficher le loader sur le bouton
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';

    // Récupérer les données du formulaire
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      "g-recaptcha-response": recaptchaResponse,
    };

    // Envoyer les données au serveur Formspree
    fetch("https://formspree.io/f/xoqgvjrv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.ok) {
          formMessage.textContent = "Message envoyé avec succès !";
          formMessage.className = "form-message success";
          contactForm.reset();
          grecaptcha.reset(); // Réinitialise le reCAPTCHA
        } else {
          formMessage.textContent = "Erreur lors de l'envoi du message";
          formMessage.className = "form-message error";
        }
        formMessage.style.display = "block";

        // Réinitialiser le bouton après traitement
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Envoyer";

        // Cacher le message après 5 secondes
        setTimeout(() => {
          formMessage.style.display = "none";
        }, 5000);
      })
      .catch((error) => {
        formMessage.textContent = "Erreur réseau : " + error.message;
        formMessage.className = "form-message error";
        formMessage.style.display = "block";

        submitBtn.disabled = false;
        submitBtn.innerHTML = "Envoyer";

        setTimeout(() => {
          formMessage.style.display = "none";
        }, 5000);
      });
  });
}

// Initialiser le site (index.html + contact.html)
document.addEventListener("DOMContentLoaded", () => {
  // Si on est sur index.html (avec les sections), alors on génère grilles & carrousels
  if (document.querySelector("#article")) {
    generateDesktopGrids();
    generateCarousels();

    // Ajout des événements pour les flèches de carrousel
    document.querySelectorAll(".carousel-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const carouselType = this.getAttribute("data-carousel");
        const direction = this.classList.contains("prev-btn") ? -1 : 1;
        moveCarousel(carouselType, direction);
      });
    });
  }

  setupMenu();
  setupContactForm();

  // Gestion du formulaire de newsletter (index.html + contact.html)
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector(".newsletter-input").value;
      alert(`Merci pour votre inscription avec l'email : ${email}`);
      this.reset();
    });
  }

  // Gestion du sélecteur de langue
  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      this.nextElementSibling.classList.toggle("active");
    });
  });

  document.querySelectorAll(".language-option").forEach((option) => {
    option.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      changeLanguage(lang);
    });
  });

  // Fermer les dropdowns en cliquant ailleurs
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".language-btn, .language-btn *")) {
      document.querySelectorAll(".language-dropdown").forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  });

  // Vérifier la langue préférée
  const preferredLanguage = localStorage.getItem("preferredLanguage") || "fr";
  changeLanguage(preferredLanguage);

  // Gérer le redimensionnement (pour re-générer la grille si on revient à desktop)
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 990 && document.querySelector("#article")) {
      generateDesktopGrids();
    } else if (window.innerWidth < 990 && document.querySelector("#article")) {
      generateCarousels();
    }
  });
});
