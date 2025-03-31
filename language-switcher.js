// Check if translations are already defined to avoid redeclaration
if (typeof window.portfolioTranslations === "undefined") {
    // Language translations
    window.portfolioTranslations = {
      en: {
        // Navigation
        "nav-home": "Home",
        "nav-about": "About me",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
  
        // Hero section
        "hero-title": "Hello, I'm <span>Gabriela Zabaleta</span>",
        "hero-subtitle": "Student and Junior Programmer",
        "hero-btn-work": "See my work",
        "hero-btn-contact": "Contact me",
  
        // About section
        "about-title": "About me",
        "about-subtitle": "Student & Programmer",
        "about-p1":
          "Hi! I'm Gabriela Zabaleta, a person who is passionate about software development. Currently, I'm exploring the world of data science, with the intention of growing and improving my skills.",
        "about-p2":
          "I am excited about solving problems through technology and continuously expanding my knowledge in various tools and programming languages. I believe in the power of innovation to make a significant impact.",
        "about-detail1": "Software Engineering Student",
        "about-detail2": "Aspiring Backend Developer",
  
        // Skills section
        "skills-title": "My Skills",
        "skills-cat1": "Programming Languages",
        "skills-cat2": "Web Development",
        "skills-cat3": "Tools & Technologies",
  
        // Projects section
        "projects-title": "My Projects",
        "projects-intro":
          "Here are some of the projects I've been working on. As I'm starting my programming journey, I continue to add new projects to my portfolio.",
        "project1-title": "Personal Portfolio",
        "project1-desc": "A personal portfolio built with HTML, CSS, and JavaScript.",
        "project2-title": "Python Calculator",
        "project2-desc": "A simple calculator built with Python and Tkinter.",
        "project3-title": "Future Projects",
        "project3-desc": "More projects coming soon!",
        "project4-title": "Weather App",
        "project4-desc": "A weather application that shows current conditions and forecasts.",
        "project5-title": "Task Manager",
        "project5-desc": "A simple task management application to organize your daily activities.",
        "project6-title": "E-commerce Store",
        "project6-desc": "An online store with product listings and shopping cart functionality.",
        "coming-soon": "Coming Soon",
        "live-demo": "Live Demo",
        "source-code": "Source Code",
  
        // Contact section
        "contact-title": "Contact Me",
        "contact-subtitle": "Contact Information",
        "contact-p": "Feel free to contact me for collaborations, questions, or just to say hello!",
        "contact-form-title": "Send me an email",
        "contact-name": "Name",
        "contact-email": "Email",
        "contact-subject": "Subject",
        "contact-message": "Message",
        "contact-send": "Send Email",
  
        // Footer
        "footer-copyright": "© 2025 Gabriela Zabaleta. All Rights Reserved.",
  
        // Language switcher
        "language-spanish": "Spanish",
        "language-english": "English",
        "language-current": "English",
      },
      es: {
        // Navigation
        "nav-home": "Inicio",
        "nav-about": "Sobre mi",
        "nav-skills": "Habilidades",
        "nav-projects": "Projectos",
        "nav-contact": "Contacto",
  
        // Hero section
        "hero-title": "Hola, soy <span>Gabriela Zabaleta</span>",
        "hero-subtitle": "Estudiante y Programadora junior",
        "hero-btn-work": "Mira mi trabajo",
        "hero-btn-contact": "Contactame",
  
        // About section
        "about-title": "Sobre mi",
        "about-subtitle": "Estudiante & Programadora",
        "about-p1":
          "¡Hola! Soy Gabriela Zabaleta, una persona apasionada por el desarrollo de software. Actualmente, estoy explorando el mundo de la ciencia de datos, con ganas de crecer y mejorar mis habilidades.",
        "about-p2":
          "Me entusiasma resolver problemas a través de la tecnología y expandir continuamente mi conocimiento en diversas herramientas y lenguajes de programación. Creo en el poder de la innovación para generar un impacto significativo.",
        "about-detail1": "Estudiante de Ingenieria de software",
        "about-detail2": "Aspirante a programador Backend",
  
        // Skills section
        "skills-title": "Mis habilidades",
        "skills-cat1": "Lenguajes de programación",
        "skills-cat2": "desarrollo Web",
        "skills-cat3": "herramientas & tecnologías",
  
        // Projects section
        "projects-title": "Mis Projectos",
        "projects-intro":
          "Aquí están algunos de los proyectos en los que he estado trabajando. Como estoy comenzando mi camino en la programación, sigo agregando nuevos proyectos a mi portafolio.",
        "project1-title": "Portafolio personal",
        "project1-desc": "Un portafolio personal construido con HTML, CSS y JavaScript.",
        "project2-title": "Calculadora Phyton",
        "project2-desc": "Una calculadora simple construida con Python y Tkinter.",
        "project3-title": "Projectos futuros",
        "project3-desc": "Mas proyectos en el futuro!",
        "project4-title": "Aplicación del Clima",
        "project4-desc": "Una aplicación meteorológica que muestra las condiciones actuales y pronósticos.",
        "project5-title": "Gestor de Tareas",
        "project5-desc": "Una aplicación simple de gestión de tareas para organizar tus actividades diarias.",
        "project6-title": "Tienda en Línea",
        "project6-desc": "Una tienda online con listados de productos y funcionalidad de carrito de compras.",
        "coming-soon": "Mas Proximamente",
        "live-demo": "Live Demo",
        "source-code": "Source Code",
  
        // Contact section
        "contact-title": "Contactame",
        "contact-subtitle": "Informacion de contacto",
        "contact-p": "No dudes en contactarme para colaborar, hacer preguntas o simplemente saludar!",
        "contact-form-title": "Enviame un correo",
        "contact-name": "Nombre",
        "contact-email": "Email",
        "contact-subject": "Asunto",
        "contact-message": "Mensaje",
        "contact-send": "Enviar correo",
  
        // Footer
        "footer-copyright": "© 2025 Gabriela Zabaleta. All Rights Reserved.",
  
        // Language switcher
        "language-spanish": "Español",
        "language-english": "Inglés",
        "language-current": "Español",
      },
    }
  }
  
  // Current language (default: Spanish)
  let currentLang = "es"
  
  // Function to update all text content based on selected language
  function updateLanguage(lang) {
    currentLang = lang
    const elements = document.querySelectorAll("[data-i18n]")
  
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n")
  
      if (key && window.portfolioTranslations[lang][key]) {
        // Handle HTML content (for elements with spans)
        if (window.portfolioTranslations[lang][key].includes("<span>")) {
          element.innerHTML = window.portfolioTranslations[lang][key]
        } else {
          element.textContent = window.portfolioTranslations[lang][key]
        }
      }
    })
  
    // Update active class on language options
    document.querySelectorAll(".language-option").forEach((option) => {
      if (option.getAttribute("data-lang") === lang) {
        option.classList.add("active")
      } else {
        option.classList.remove("active")
      }
    })
  
    // Save language preference
    localStorage.setItem("preferredLanguage", lang)
  }
  
  // Initialize language switcher only if not already initialized
  if (typeof window.languageSwitcherInitialized === "undefined") {
    window.languageSwitcherInitialized = true
  
    // Wait for DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", () => {
      // Translations object
      const translations = {
        en: {
          // Navigation
          "nav-home": "Home",
          "nav-about": "About me",
          "nav-skills": "Skills",
          "nav-projects": "Projects",
          "nav-contact": "Contact",
  
          // Hero section
          "hero-title": "Hello, I'm <span>Gabriela Zabaleta</span>",
          "hero-subtitle": "Student and Junior Programmer",
          "hero-btn-work": "See my work",
          "hero-btn-contact": "Contact me",
  
          // About section
          "about-title": "About me",
          "about-subtitle": "Student & Programmer",
          "about-p1":
            "Hello! I'm Gabriela Zabaleta, a person passionate about software development. Currently, I'm exploring the world of data science, eager to grow and improve my skills.",
          "about-p2":
            "I'm excited about solving problems through technology and continuously expanding my knowledge in various programming tools and languages. I believe in the power of innovation to make a significant impact.",
          "about-detail1": "Software Engineering Student",
          "about-detail2": "Aspiring Backend Developer",
  
          // Skills section
          "skills-title": "My Skills",
          "skills-cat1": "Programming Languages",
          "skills-cat2": "Web Development",
          "skills-cat3": "Tools & Technologies",
  
          // Projects section
          "projects-title": "My Projects",
          "projects-intro":
            "Here are some of the projects I've been working on. As I'm starting my programming journey, I continue to add new projects to my portfolio.",
          "project1-title": "Personal Portfolio",
          "project1-desc": "A personal portfolio built with HTML, CSS, and JavaScript.",
          "project2-title": "Python Calculator",
          "project2-desc": "A simple calculator built with Python and Tkinter.",
          "project3-title": "Future Projects",
          "project3-desc": "More projects coming soon!",
          "project4-title": "Weather App",
          "project4-desc": "A weather application that shows current conditions and forecasts.",
          "project5-title": "Task Manager",
          "project5-desc": "A simple task management application to organize your daily activities.",
          "project6-title": "E-commerce Store",
          "project6-desc": "An online store with product listings and shopping cart functionality.",
          "coming-soon": "Coming Soon",
          "live-demo": "Live Demo",
          "source-code": "Source Code",
  
          // Contact section
          "contact-title": "Contact Me",
          "contact-subtitle": "Contact Information",
          "contact-p": "Feel free to contact me for collaborations, questions, or just to say hello!",
          "contact-form-title": "Send me an email",
          "contact-name": "Name",
          "contact-email": "Email",
          "contact-subject": "Subject",
          "contact-message": "Message",
          "contact-send": "Send Email",
  
          // Footer
          "footer-copyright": "© 2025 Gabriela Zabaleta. All Rights Reserved.",
  
          // Language switcher
          "language-spanish": "Spanish",
          "language-english": "English",
        },
        es: {
          // Navigation
          "nav-home": "Inicio",
          "nav-about": "Sobre mi",
          "nav-skills": "Habilidades",
          "nav-projects": "Projectos",
          "nav-contact": "Contacto",
  
          // Hero section
          "hero-title": "Hola, soy <span>Gabriela Zabaleta</span>",
          "hero-subtitle": "Estudiante y Programadora junior",
          "hero-btn-work": "Mira mi trabajo",
          "hero-btn-contact": "Contactame",
  
          // About section
          "about-title": "Sobre mi",
          "about-subtitle": "Estudiante & Programadora",
          "about-p1":
            "¡Hola! Soy Gabriela Zabaleta, una persona apasionada por el desarrollo de software. Actualmente, estoy explorando el mundo de la ciencia de datos, con ganas de crecer y mejorar mis habilidades.",
          "about-p2":
            "Me entusiasma resolver problemas a través de la tecnología y expandir continuamente mi conocimiento en diversas herramientas y lenguajes de programación. Creo en el poder de la innovación para generar un impacto significativo.",
          "about-detail1": "Estudiante de Ingenieria de software",
          "about-detail2": "Aspirante a programador Backend",
  
          // Skills section
          "skills-title": "Mis habilidades",
          "skills-cat1": "Lenguajes de programación",
          "skills-cat2": "desarrollo Web",
          "skills-cat3": "herramientas & tecnologías",
  
          // Projects section
          "projects-title": "Mis Projectos",
          "projects-intro":
            "Aquí están algunos de los proyectos en los que he estado trabajando. Como estoy comenzando mi camino en la programación, sigo agregando nuevos proyectos a mi portafolio.",
          "project1-title": "Portafolio personal",
          "project1-desc": "Un portafolio personal construido con HTML, CSS y JavaScript.",
          "project2-title": "Calculadora Phyton",
          "project2-desc": "Una calculadora simple construida con Python y Tkinter.",
          "project3-title": "Projectos futuros",
          "project3-desc": "Mas proyectos en el futuro!",
          "project4-title": "Aplicación del Clima",
          "project4-desc": "Una aplicación meteorológica que muestra las condiciones actuales y pronósticos.",
          "project5-title": "Gestor de Tareas",
          "project5-desc": "Una aplicación simple de gestión de tareas para organizar tus actividades diarias.",
          "project6-title": "Tienda en Línea",
          "project6-desc": "Una tienda online con listados de productos y funcionalidad de carrito de compras.",
          "coming-soon": "Mas Proximamente",
          "live-demo": "Live Demo",
          "source-code": "Source Code",
  
          // Contact section
          "contact-title": "Contactame",
          "contact-subtitle": "Informacion de contacto",
          "contact-p": "No dudes en contactarme para colaborar, hacer preguntas o simplemente saludar!",
          "contact-form-title": "Enviame un correo",
          "contact-name": "Nombre",
          "contact-email": "Email",
          "contact-subject": "Asunto",
          "contact-message": "Mensaje",
          "contact-send": "Enviar correo",
  
          // Footer
          "footer-copyright": "© 2025 Gabriela Zabaleta. All Rights Reserved.",
  
          // Language switcher
          "language-spanish": "Español",
          "language-english": "Inglés",
        },
      }
  
      // Get language buttons
      const esButton = document.getElementById("lang-es")
      const enButton = document.getElementById("lang-en")
  
      // Function to change language
      function changeLanguage(lang) {
        // Update active class on buttons
        if (lang === "es") {
          esButton.classList.add("active")
          enButton.classList.remove("active")
        } else {
          enButton.classList.add("active")
          esButton.classList.remove("active")
        }
  
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll("[data-i18n]")
        elements.forEach((element) => {
          const key = element.getAttribute("data-i18n")
          if (translations[lang][key]) {
            if (translations[lang][key].includes("<span>")) {
              element.innerHTML = translations[lang][key]
            } else {
              element.textContent = translations[lang][key]
            }
          }
        })
  
        // Save language preference
        localStorage.setItem("preferredLanguage", lang)
      }
  
      // Add click event listeners to language buttons
      esButton.addEventListener("click", () => {
        changeLanguage("es")
      })
  
      enButton.addEventListener("click", () => {
        changeLanguage("en")
      })
  
      // Check for saved language preference
      const savedLang = localStorage.getItem("preferredLanguage")
      if (savedLang) {
        changeLanguage(savedLang)
      }
    })
  }
  
s  