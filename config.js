/* =========================================================
   EDITA ESTE ARCHIVO con tus datos y precios reales.
   Todo lo que cambies aquí se actualiza solo en la página.
   ========================================================= */
const CONFIG = {
  nombre: "Emmanuel Moreno Halberstadt",
  nombreCorto: "Emmanuel Moreno",     // Se muestra en el logo
  whatsapp: "543513703119",           // Con código de país, solo números. Vacío = los botones usan el email
  email: "emmanuel.moreno.halberstadt.dev@gmail.com",
  portafolio: "https://emmanuelmorenohalberstadtdev.github.io/portfolio/",
  linkedin: "https://www.linkedin.com/in/emmanuel-moreno-halberstadt-8605b2193/",
  github: "https://github.com/emmanuelMorenohalberstadtDev",

  servicios: [
    {
      id: "pagina-web",
      icono: "🌐",
      meta: "Quiero que me encuentren en internet",
      nombre: "Página web para tu negocio",
      descripcion:
        "Una página clara y bonita donde tus clientes ven qué ofreces, dónde estás y cómo contactarte. Como tu local, pero abierto las 24 horas.",
      incluye: [
        "Diseño a tu medida, se ve bien en celular",
        "Botón directo a tu WhatsApp",
        "Mapa, horarios y redes sociales",
        "Aparece en Google",
      ],
      idealPara: "Profesionales, locales, restaurantes, emprendimientos",
      precio: "$3.000",               // Mantenimiento mensual, en pesos
      entrega: "1 semana",
      demo: "demos/pagina-web.html",
      demoTitulo: "Ejemplo: página de una cafetería",
    },
    {
      id: "tienda",
      icono: "🛍️",
      meta: "Quiero vender por internet",
      nombre: "Tienda online",
      descripcion:
        "Tus productos en una vitrina digital. El cliente elige, agrega al carrito y te paga, aunque tú estés durmiendo.",
      incluye: [
        "Catálogo con fotos y precios",
        "Carrito de compras y pagos online",
        "Aviso automático de cada pedido",
        "Tú mismo cargas y editas productos",
      ],
      idealPara: "Tiendas de ropa, artesanías, comida, productos propios",
      precio: "$7.000",               // Mantenimiento mensual, en pesos
      entrega: "2 a 3 semanas",
      demo: "demos/tienda.html",
      demoTitulo: "Ejemplo: tienda de plantas",
      destacado: true,
    },
    {
      id: "reservas",
      icono: "📅",
      meta: "Quiero recibir reservas sin atender el teléfono",
      nombre: "Sistema de turnos y reservas",
      descripcion:
        "Tus clientes eligen día y hora desde el celular y tú recibes la agenda ordenada. Se acabaron los mensajes de ida y vuelta.",
      incluye: [
        "Agenda online disponible 24/7",
        "Recordatorios automáticos al cliente",
        "Tú defines horarios y servicios",
        "Panel para ver y gestionar turnos",
      ],
      idealPara: "Barberías, consultorios, estudios, canchas, salones",
      precio: "$6.000",               // Mantenimiento mensual, en pesos
      entrega: "2 a 3 semanas",
      demo: "demos/reservas.html",
      demoTitulo: "Ejemplo: reservas de una barbería",
    },
    {
      id: "sistema",
      icono: "⚙️",
      meta: "Quiero ordenar mi negocio",
      nombre: "Sistema a medida",
      descripcion:
        "Un programa hecho para tu forma de trabajar: ventas, stock, clientes y reportes en un solo lugar, en vez de cuadernos y planillas sueltas.",
      incluye: [
        "Control de ventas, stock y clientes",
        "Reportes claros para tomar decisiones",
        "Usuarios para ti y tu equipo",
        "Funciona desde cualquier computadora o celular",
      ],
      idealPara: "Comercios, distribuidoras, talleres, empresas en crecimiento",
      precio: "$12.000",              // Mantenimiento mensual, en pesos
      entrega: "Según el proyecto",
      demo: "demos/sistema.html",
      demoTitulo: "Ejemplo: panel de ventas y stock",
    },
  ],
};
