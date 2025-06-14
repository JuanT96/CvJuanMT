
  // Menú responsive
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Cerrar menú al hacer clic fuera
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
    navLinks.classList.remove("show");
  }
});

// Ocultar/mostrar navbar al hacer scroll
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px"; // ocultar
  } else {
    navbar.style.top = "0"; // mostrar
  }
  lastScrollTop = scrollTop;
});

  const videos = {
    video1: {
      url: "https://www.youtube.com/embed/8cH0CHbQ01E",
      description: "Videojuego de plataforma en 2D desarrollado en Stencyl. En Doctor Hacker deberás adentrarte en tu ordenador y destruir los malwares que te rodean."
    },
    video2: {
      url: "https://www.youtube.com/embed/lg7JTVZQMkE",
      description: "Museum, es un Museo virtual desarrollado en unity donde podrás conocer un poco sobre la humanidad desde la luna y acompañados de algunos amiguitos espaciales."
    },
      video3: {
      url: "https://www.youtube.com/embed/-59Eo6OdDOw",
      description: "The Gem es un cortometraje desarrollado en Blender y Unity donde su protagonista se adentra en un planeta inhóspito por su tan deseada Gema."
    },
      video4: {
      url: "https://www.youtube.com/embed/FKub0hxTXRg",
      description: "OVNI es un videojuego de preguntas y respuestas sobre ovnis donde podras poner a prueba tus conocimientos sobre aliens."
    },
      video5: {
      url: "https://www.youtube.com/embed/P_sUocvJ7Bk",
      description: "VACUN, es un videojuego de terror desarrollado en Unity, se encuentra en su fase Alfa, en VACUN deberas encontrar todos las particulas de virus antes de que sea demaciado tarde."
    }
  };

  function openModal(id) {
    const modal = document.getElementById("modal");
    const container = document.getElementById("video-container");
    const description = document.getElementById("video-description");

    container.innerHTML = `<iframe src="${videos[id].url}" frameborder="0" allowfullscreen></iframe>`;
    description.textContent = videos[id].description;

    modal.style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("video-container").innerHTML = "";
  }

