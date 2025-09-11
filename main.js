const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("mainHeader");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Chart initialization
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("solutionChart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Prevención",
        "Detección",
        "Respuesta",
        "Innovación",
        "Sostenibilidad",
      ],
      datasets: [
        {
          label: "Efectividad de Nuestra Solución",
          data: [95, 90, 85, 92, 88],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: "white",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
        x: {
          ticks: {
            color: "white",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
    },
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Statistics counter animation
function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    obj.innerHTML = id === "stat4" ? value + "%" : value;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Start counter animation when statistics section is in view
const statisticsSection = document.getElementById("statistics");
let statsAnimated = false;

window.addEventListener("scroll", () => {
  const statisticsPos = statisticsSection.getBoundingClientRect();
  if (
    statisticsPos.top < window.innerHeight &&
    statisticsPos.bottom >= 0 &&
    !statsAnimated
  ) {
    animateValue("stat1", 0, 42, 2000);
    animateValue("stat2", 0, 28, 2000);
    animateValue("stat3", 0, 1500, 2000);
    animateValue("stat4", 0, 95, 2000);
    statsAnimated = true;
  }
});

// Cambiar entre pestañas
function showTab(tabName) {
  // Ocultar todas las pestañas
  document.querySelectorAll(".qr-panel__tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Mostrar la pestaña seleccionada
  document
    .getElementById("tab" + tabName.charAt(0).toUpperCase() + tabName.slice(1))
    .classList.add("active");

  // Actualizar pestañas activas
  document.querySelectorAll(".qr-panel__tab").forEach((tab) => {
    tab.classList.remove("active");
    if (tab.getAttribute("data-tab") === tabName) {
      tab.classList.add("active");
    }
  });
}

// Crear partículas para el fondo
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Tamaño y posición aleatoria
    const size = Math.random() * 10 + 2;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;

    // Animación con delay aleatorio
    particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
    particle.style.animationDelay = `-${Math.random() * 20}s`;

    particlesContainer.appendChild(particle);
  }
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Comprobar al cargar la página

  // Configurar botón QR
  document.getElementById("qrButton").addEventListener("click", toggleQRPanel);
  document
    .getElementById("qrPanelClose")
    .addEventListener("click", toggleQRPanel);

  // Configurar pestañas
  document.querySelectorAll(".qr-panel__tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      showTab(tab.getAttribute("data-tab"));
    });
  });

  // Verificar si la biblioteca QR está cargada
  if (typeof qrcode === "undefined") {
    showNotification("Error: No se cargó la biblioteca QR", true);
  }
});

// Efecto de aparición al hacer scroll
function checkScroll() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - elementHeight / 3) {
      element.classList.add("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("teamSlider");
  const slides = document.querySelectorAll(".team-slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsContainer = document.getElementById("carouselDots");

  let currentSlide = 0;
  const slideCount = slides.length;

  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.setAttribute("data-index", i);
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");

  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth + 40;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  prevBtn.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateCarousel();
  });

  nextBtn.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      currentSlide = parseInt(this.getAttribute("data-index"));
      updateCarousel();
    });
  });

  updateCarousel();

  // Ajustar en redimensionamiento
  window.addEventListener("resize", updateCarousel);
});
