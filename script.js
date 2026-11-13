(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Enlace de contacto: WhatsApp si hay número, si no email
  const contactUrl = (msg) => {
    const num = (CONFIG.whatsapp || "").replace(/\D/g, "");
    return num
      ? `https://wa.me/${num}?text=${encodeURIComponent(msg)}`
      : `mailto:${CONFIG.email}?subject=${encodeURIComponent("Consulta desde tu página")}&body=${encodeURIComponent(msg)}`;
  };
  const setContact = (a, msg) => {
    a.href = contactUrl(msg);
    if (CONFIG.whatsapp) { a.target = "_blank"; a.rel = "noopener"; }
  };

  // Tarjetas de servicios y selector del hero
  const services = $("#services");
  const picker = $("#picker-list");

  CONFIG.servicios.forEach((s) => {
    picker.insertAdjacentHTML(
      "beforeend",
      `<a class="picker__item" href="#${s.id}"><span>${s.icono}</span><span>${s.meta}</span><span>→</span></a>`
    );

    services.insertAdjacentHTML(
      "beforeend",
      `<article class="card reveal ${s.destacado ? "is-featured" : ""}" id="${s.id}">
        ${s.destacado ? '<span class="card__badge">El más pedido</span>' : ""}
        <div class="card__icon" aria-hidden="true">${s.icono}</div>
        <p class="card__goal">“${s.meta}”</p>
        <h3>${s.nombre}</h3>
        <p class="card__desc">${s.descripcion}</p>
        <ul>${s.incluye.map((i) => `<li>${i}</li>`).join("")}</ul>
        <p class="card__ideal"><b>Ideal para:</b> ${s.idealPara}</p>
        <div class="card__price card__meta">
          <div class="price"><small>Mantenimiento mensual desde</small><strong>${s.precio}<span>/mes</span></strong></div>
          <div class="time">Entrega estimada<b>${s.entrega}</b></div>
        </div>
        <div class="card__actions">
          <button type="button" class="btn btn--ghost" data-demo="${s.id}">▶ Probar demo</button>
          <a class="btn btn--accent" data-contacto="Hola, me interesa: ${s.nombre}. Te cuento sobre mi negocio:">Lo quiero</a>
        </div>
      </article>`
    );
  });

  // Datos generales
  $$("[data-nombre]").forEach((el) => (el.textContent = CONFIG.nombre));
  $$("[data-contacto]").forEach((a) => setContact(a, a.dataset.contacto));
  $$("[data-nombre-corto]").forEach((el) => (el.textContent = CONFIG.nombreCorto || CONFIG.nombre));
  ["portafolio", "linkedin", "github"].forEach((k) =>
    $$("[data-" + k + "]").forEach((a) => { a.href = CONFIG[k]; a.target = "_blank"; a.rel = "noopener"; }));
  $$("[data-email]").forEach((a) => { a.href = `mailto:${CONFIG.email}`; a.textContent = CONFIG.email; });
  $("#year").textContent = new Date().getFullYear();

  // Resaltar la tarjeta elegida desde el selector
  picker.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    const card = $(link.getAttribute("href"));
    card.classList.remove("is-target");
    void card.offsetWidth;
    card.classList.add("is-target", "is-in");
  });

  // Modal de demo
  const modal = $("#demo");
  const frame = $("#demo-frame");

  const setView = (view) => {
    modal.classList.toggle("is-mobile", view === "mobile");
    $$("[data-view]", modal).forEach((b) => b.classList.toggle("is-on", b.dataset.view === view));
  };

  services.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-demo]");
    if (!btn) return;
    const s = CONFIG.servicios.find((x) => x.id === btn.dataset.demo);
    $("#demo-title").textContent = s.demoTitulo;
    setContact($("#demo-cta"), `Hola, probé la demo de "${s.nombre}" y quiero algo así para mi negocio.`);
    frame.src = s.demo;
    setView("desktop");
    modal.showModal();
  });

  modal.addEventListener("click", (e) => {
    const view = e.target.closest("[data-view]");
    if (view) return setView(view.dataset.view);
    if (e.target === modal || e.target.closest(".demo__close")) modal.close();
  });
  modal.addEventListener("close", () => (frame.src = "about:blank"));

  // Animación de aparición
  const targets = $$(".reveal, .steps li, .faq__list details, .note, .about > *");
  targets.forEach((el) => el.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      }),
      { threshold: 0.12 }
    );
    targets.forEach((el) => io.observe(el));
  } else {
    targets.forEach((el) => el.classList.add("is-in"));
  }
})();
