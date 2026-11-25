document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("catalogo-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  
  // Elementos del Modal
  const modal = document.getElementById("modal-sistema");
  const modalCerrar = document.getElementById("modal-cerrar");
  const modalTabs = document.getElementById("modal-tabs");
  const modalImagen = document.getElementById("modal-imagen");
  const modalModuloDesc = document.getElementById("modal-modulo-desc");

  // Elementos del Lightbox (Zoom pantalla completa)
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxStage = document.getElementById("lightbox-stage");
  const lightboxToggleZoom = document.getElementById("lightbox-toggle-zoom");
  const lightboxZoomText = document.getElementById("lightbox-zoom-text");
  const lightboxClose = document.getElementById("lightbox-close");

  let sistemaActualModal = null;
  let moduloActualModal = null;

  const WHATSAPP_SVG = `
    <svg class="wa-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
    </svg>
  `;

  const ZOOM_ICON_SVG = `
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
    </svg>
  `;

  function crearLinkWhatsApp(mensaje) {
    return `https://wa.me/${CONFIG_NEGOCIO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
  }

  // Configurar botones generales de WhatsApp
  const msgGeneral = `Hola, vi la web de ${CONFIG_NEGOCIO.nombreMarca} y me gustaría información sobre sus sistemas POS.`;
  document.getElementById("nav-whatsapp").href = crearLinkWhatsApp(msgGeneral);
  document.getElementById("hero-whatsapp").href = crearLinkWhatsApp(msgGeneral);
  document.getElementById("float-whatsapp").href = crearLinkWhatsApp(msgGeneral);

  // =========================================================
  // 0. VISOR LIGHTBOX (ZOOM PANTALLA COMPLETA)
  // =========================================================
  function abrirLightbox(src, titulo) {
    if (!lightbox || !lightboxImg) return;
    lightboxStage.classList.remove("is-zoomed");
    lightboxZoomText.textContent = "Acercar";
    lightboxTitle.textContent = titulo || "Vista previa";
    lightboxImg.src = src;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function alternarZoomLightbox() {
    const zoomed = lightboxStage.classList.toggle("is-zoomed");
    lightboxZoomText.textContent = zoomed ? "Ajustar" : "Acercar";
  }

  function cerrarLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightboxStage.classList.remove("is-zoomed");
    // Mantener bloqueo de scroll si el modal de sistema sigue abierto
    if (!modal.classList.contains("open")) {
      document.body.style.overflow = "";
    }
  }

  if (lightbox) {
    lightboxToggleZoom.addEventListener("click", alternarZoomLightbox);
    lightboxImg.addEventListener("click", alternarZoomLightbox);
    lightboxClose.addEventListener("click", cerrarLightbox);
    lightboxStage.addEventListener("click", (e) => {
      if (e.target === lightboxStage) cerrarLightbox();
    });
  }

  // =========================================================
  // 1. CARRUSEL DINÁMICO EN HERO (CON SWIPE TÁCTIL Y FLECHAS)
  // =========================================================
  function iniciarCarruselHero() {
    const carousel = document.getElementById("hero-carousel");
    const stage = document.getElementById("hero-slider-stage");
    const imgCurrent = document.getElementById("hero-img-current");
    const imgNext = document.getElementById("hero-img-next");
    const urlLabel = document.getElementById("hero-browser-url");
    const slideLabel = document.getElementById("hero-slide-label");
    const dotsContainer = document.getElementById("hero-slider-dots");
    const btnPrev = document.getElementById("hero-prev");
    const btnNext = document.getElementById("hero-next");

    if (!carousel || !imgCurrent || !imgNext) return;

    const slides = [
      {
        imagen: "img/portada-pos.jpg",
        titulo: "Panel Principal GoAvanza POS",
        url: "goavanza.pe/sistema-pos"
      },
      ...SISTEMAS_POS.map(s => ({
        imagen: s.imagenPrincipal,
        titulo: s.nombre,
        url: `goavanza.pe/${s.id}`
      }))
    ];

    let indiceActual = 0;
    let intervaloHero = null;
    let enTransicion = false;

    slides.forEach(slide => {
      const pre = new Image();
      pre.src = slide.imagen;
    });

    dotsContainer.innerHTML = "";
    slides.forEach((slide, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `hero-dot ${idx === 0 ? "active" : ""}`;
      dot.setAttribute("aria-label", `Ver ${slide.titulo}`);
      dot.addEventListener("click", () => {
        if (idx !== indiceActual) {
          cambiarSlide(idx);
          iniciarAutoplay();
        }
      });
      dotsContainer.appendChild(dot);
    });

    function actualizarDots(nuevoIndice) {
      dotsContainer.querySelectorAll(".hero-dot").forEach((d, i) => {
        d.classList.toggle("active", i === nuevoIndice);
      });
    }

    function cambiarSlide(nuevoIndice) {
      if (enTransicion) return;
      enTransicion = true;

      const total = slides.length;
      const indiceNormalizado = (nuevoIndice + total) % total;
      const slide = slides[indiceNormalizado];
      const fallbackSrc = `https://placehold.co/650x420/0B192C/ffffff?text=${encodeURIComponent(slide.titulo)}`;

      imgNext.onerror = () => {
        imgNext.onerror = null;
        imgNext.src = fallbackSrc;
      };
      imgNext.src = slide.imagen;

      requestAnimationFrame(() => {
        imgNext.classList.add("active");
        urlLabel.textContent = slide.url;
        slideLabel.textContent = slide.titulo;
        actualizarDots(indiceNormalizado);
      });

      setTimeout(() => {
        imgCurrent.src = imgNext.src;
        imgCurrent.alt = slide.titulo;
        imgNext.classList.remove("active");
        indiceActual = indiceNormalizado;
        enTransicion = false;
      }, 620);
    }

    function irAnterior() {
      cambiarSlide(indiceActual - 1);
      iniciarAutoplay();
    }

    function irSiguiente() {
      cambiarSlide(indiceActual + 1);
      iniciarAutoplay();
    }

    if (btnPrev) btnPrev.addEventListener("click", irAnterior);
    if (btnNext) btnNext.addEventListener("click", irSiguiente);

    // Gestos táctiles (Swipe izquierda / derecha en celulares)
    let touchStartX = 0;
    let touchStartY = 0;

    if (stage) {
      stage.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
        detenerAutoplay();
      }, { passive: true });

      stage.addEventListener("touchend", (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;

        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) irSiguiente();
          else irAnterior();
        } else {
          iniciarAutoplay();
        }
      }, { passive: true });
    }

    function iniciarAutoplay() {
      detenerAutoplay();
      intervaloHero = setInterval(() => {
        cambiarSlide(indiceActual + 1);
      }, 4500);
    }

    function detenerAutoplay() {
      if (intervaloHero) clearInterval(intervaloHero);
    }

    carousel.addEventListener("mouseenter", detenerAutoplay);
    carousel.addEventListener("mouseleave", iniciarAutoplay);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) detenerAutoplay();
      else iniciarAutoplay();
    });

    iniciarAutoplay();
  }

  // =========================================================
  // 2. ACORDEÓN FLUIDO EN PREGUNTAS FRECUENTES
  // =========================================================
  function iniciarAcordeonFAQ() {
    const items = document.querySelectorAll(".faq-item");

    items.forEach(details => {
      const summary = details.querySelector("summary");
      if (!summary) return;

      if (details.hasAttribute("open")) {
        details.classList.add("is-open");
      }

      summary.addEventListener("click", (e) => {
        e.preventDefault();
        const estaAbierto = details.classList.contains("is-open");

        if (estaAbierto) {
          details.classList.remove("is-open");
          setTimeout(() => {
            if (!details.classList.contains("is-open")) {
              details.removeAttribute("open");
            }
          }, 360);
        } else {
          details.setAttribute("open", "");
          requestAnimationFrame(() => {
            details.classList.add("is-open");
          });
        }
      });
    });
  }

  // =========================================================
  // 3. CATÁLOGO Y MODAL INTERACTIVO (CON ZOOM)
  // =========================================================
  function renderizarCatalogo(categoriaFiltro = "todos") {
    grid.innerHTML = "";

    const filtrados = categoriaFiltro === "todos"
      ? SISTEMAS_POS
      : SISTEMAS_POS.filter(s => s.categoria === categoriaFiltro);

    filtrados.forEach((sistema, index) => {
      const msgSistema = `Hola, me interesa el *${sistema.nombre}* que vi en tu web. Quisiera conocer el precio y ver un video de cómo funciona.`;
      
      const card = document.createElement("article");
      card.className = "pos-card";
      card.style.animationDelay = `${index * 0.06}s`;

card.innerHTML = `
        <div class="pos-card-thumb img-skeleton" data-id="${sistema.id}" title="Ver módulos de ${sistema.nombre}">
          <img src="${sistema.imagenPrincipal}" 
               alt="${sistema.nombre}" 
               class="pos-card-img"
               loading="lazy"
               decoding="async"
               onload="this.parentElement.classList.add('loaded')"
               onerror="this.src='https://placehold.co/600x360/e2e8f0/0B192C?text=${encodeURIComponent(sistema.nombre)}'; this.parentElement.classList.add('loaded');">
        </div>
        <div class="pos-card-body">
          <span class="badge">${sistema.etiquetaCategoria}</span>
          <h3>${sistema.nombre}</h3>
          <p class="pos-card-desc">${sistema.descripcionCorta}</p>
          <ul class="pos-benefits">
            ${sistema.beneficios.map(b => `<li>${b}</li>`).join("")}
          </ul>
          <div class="pos-card-actions">
            <button class="btn btn-outline btn-ver-detalle" data-id="${sistema.id}">
              Ver cómo funciona
            </button>
            <a href="${crearLinkWhatsApp(msgSistema)}" target="_blank" rel="noopener" class="btn btn-whatsapp">
              ${WHATSAPP_SVG}
              Consultar
            </a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderizarCatalogo(btn.dataset.categoria);
    });
  });

  function precargarImagenesModulos(modulos) {
    modulos.forEach(mod => {
      const imgPreload = new Image();
      imgPreload.src = mod.imagen;
    });
  }

grid.addEventListener("click", (e) => {
    const trigger = e.target.closest(".btn-ver-detalle, .pos-card-thumb");
    if (!trigger) return;

    const sistema = SISTEMAS_POS.find(s => s.id === trigger.dataset.id);
    if (!sistema) return;

    sistemaActualModal = sistema;

    document.getElementById("modal-categoria").textContent = sistema.etiquetaCategoria;
    document.getElementById("modal-titulo").textContent = sistema.nombre;
    document.getElementById("modal-descripcion").textContent = sistema.descripcionCorta;
    document.getElementById("modal-precio").textContent = sistema.precioTexto;

    const msgModal = `Hola, estuve revisando los módulos del *${sistema.nombre}* en tu web y me gustaría cotizarlo.`;
    document.getElementById("modal-whatsapp").href = crearLinkWhatsApp(msgModal);

    precargarImagenesModulos(sistema.modulos);

    modalTabs.innerHTML = "";
    sistema.modulos.forEach((mod, index) => {
      const tab = document.createElement("button");
      tab.className = `tab-btn ${index === 0 ? "active" : ""}`;
      tab.textContent = mod.titulo;
      
      tab.addEventListener("click", () => {
        if (tab.classList.contains("active")) return;
        document.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        actualizarVisorModulo(mod, sistema.nombre, true);
      });

      modalTabs.appendChild(tab);
    });

    if (sistema.modulos.length > 0) {
      actualizarVisorModulo(sistema.modulos[0], sistema.nombre, false);
    }

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  // Clic en la imagen dentro del modal -> Abrir Zoom Lightbox
  const modalZoomTrigger = document.getElementById("modal-img-zoom-trigger");
  if (modalZoomTrigger) {
    modalZoomTrigger.addEventListener("click", () => {
      if (!modalImagen.src) return;
      const titulo = sistemaActualModal && moduloActualModal
        ? `${sistemaActualModal.nombre} — ${moduloActualModal.titulo}`
        : "Vista detallada del módulo";
      abrirLightbox(modalImagen.src, titulo);
    });
  }

  function actualizarVisorModulo(modulo, nombreSistema, animar = true) {
    moduloActualModal = modulo;
    const wrap = modalImagen.parentElement;
    wrap.classList.remove("loaded");

    if (animar) modalImagen.classList.add("swapping");

    setTimeout(() => {
      modalImagen.onload = () => {
        wrap.classList.add("loaded");
        modalImagen.classList.remove("swapping");
      };
      modalImagen.onerror = () => {
        modalImagen.src = `https://placehold.co/750x380/0B192C/ffffff?text=${encodeURIComponent(nombreSistema + " - " + modulo.titulo)}`;
        wrap.classList.add("loaded");
        modalImagen.classList.remove("swapping");
      };
      modalImagen.src = modulo.imagen;
      modalModuloDesc.textContent = modulo.descripcion;
    }, animar ? 120 : 0);
  }

  function cerrarModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  modalCerrar.addEventListener("click", cerrarModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) cerrarModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (lightbox && lightbox.classList.contains("open")) {
        cerrarLightbox();
      } else if (modal.classList.contains("open")) {
        cerrarModal();
      }
    }
  });

  // Mini Asistente Recomendador -> WhatsApp
  document.getElementById("btn-enviar-asesor").addEventListener("click", () => {
    const rubro = document.getElementById("adv-rubro").value;
    const cajas = document.getElementById("adv-cajas").value;
    const prioridad = document.getElementById("adv-prioridad").value;

    const mensaje = `Hola, usé el asesor de ${CONFIG_NEGOCIO.nombreMarca}:\n• *Negocio:* ${rubro}\n• *Equipos:* ${cajas}\n• *Prioridad:* ${prioridad}\n¿Qué sistema POS me recomiendas y cuál es su precio?`;
    window.open(crearLinkWhatsApp(mensaje), "_blank");
  });

  // Animación suave de aparición al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Inicializar componentes
  iniciarCarruselHero();
  iniciarAcordeonFAQ();
  renderizarCatalogo();
});