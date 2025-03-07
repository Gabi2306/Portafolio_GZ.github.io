document.addEventListener("DOMContentLoaded", () => {
  // menu de movil
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })

  // navegacion de secciones
  const navItems = document.querySelectorAll(".nav-item")
  const sectionBtns = document.querySelectorAll(".section-btn")
  const sections = document.querySelectorAll(".section")

  // mostrar seccion
  function showSection(sectionId) {
    // ocultar todas las secciones
    sections.forEach(section => {
      section.classList.remove("active")
    })
    
    // mostrar seccion seleccionada
    document.getElementById(sectionId).classList.add("active")
    
    // actualizar nav items
    navItems.forEach(item => {
      if (item.getAttribute("data-section") === sectionId) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })
    
    // cerrar menu de movil si esta abierto
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
    
    // scroll hasta arriba
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // añadir click a los items del nav
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      const sectionId = item.getAttribute("data-section")
      showSection(sectionId)
    })
  })

  // Añadir click a los botones de seccion
  sectionBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const sectionId = btn.getAttribute("data-section")
      showSection(sectionId)
    })
  })

  // formulario de contacto
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // tomar valores del formulario
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // crear link de email
      const mailtoLink = `mailto:zabaletahortag@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
      
      // abrir email del cilente
      window.location.href = mailtoLink

      // mostrar mensaje de exito
      alert("Opening your email client to send the message. Thank you for reaching out!")

      // resetear formulario
      contactForm.reset()
    })
  }

  // animacion de scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".skill-card, .project-card, .about-image")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // establecer propiedades iniciales de los elementos
  document.querySelectorAll(".skill-card, .project-card, .about-image").forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // correr animacion al hacer scroll
  window.addEventListener("scroll", animateOnScroll)

  // correr animacion al cargar la pagina
  animateOnScroll()
})