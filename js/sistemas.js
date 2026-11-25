// Configura aquí tu número de WhatsApp con código de país (sin el símbolo +)
const CONFIG_NEGOCIO = {
  whatsapp: "51960712178",
  nombreMarca: "GoAvanza"
};

// Catálogo de sistemas actualizado según las guías oficiales de GoAvanza
const SISTEMAS_POS = [
  {
    id: "pos-polleria",
    nombre: "Pollería POS",
    categoria: "comida",
    etiquetaCategoria: "Pollerías y Brasas",
    precioTexto: "Pago único accesible",
    descripcionCorta: "Sistema web de 26 módulos para pollerías: pedidos en salón, llevar y delivery, pantalla de cocina, recetas con control de insumos, carta QR, facturación SUNAT e IA.",
    imagenPrincipal: "img/polleria-dashboard.png",
    beneficios: [
      "Pedidos ágiles en mesa, para llevar, delivery y carta digital QR",
      "Pantalla de cocina en vivo y recetas con descuento automático de insumos",
      "Facturación electrónica SUNAT (Nubefact), CRM 360° y asistente con IA"
    ],
    modulos: [
      {
        titulo: "1. Punto de Venta y Combos",
        descripcion: "Selecciona cuartos, medios pollos, combos y guarniciones con búsqueda rápida (F2). Acepta pagos mixtos (efectivo, Yape/Plin, tarjeta) y emite boleta, factura o ticket.",
        imagen: "img/polleria-pos.png"
      },
      {
        titulo: "2. Plano de Mesas y Cocina",
        descripcion: "Controla mesas libres, ocupadas o reservadas por zonas en vivo, divide cuentas y envía comandas directo a la pantalla de cocina con tiempos de preparación.",
        imagen: "img/polleria-mesas.png"
      },
      {
        titulo: "3. Reservaciones y Delivery",
        descripcion: "Agenda reservas sin cruces de horario con enlace público para clientes y gestiona pedidos delivery con asignación de repartidores.",
        imagen: "img/polleria-reservas.png"
      },
      {
        titulo: "4. Recetas, CRM y Asistente IA",
        descripcion: "Calcula el costo y margen de cada plato descontando insumos automáticamente, fideliza clientes con puntos y consulta tus ventas en español con IA.",
        imagen: "img/polleria-ia.png"
      }
    ]
  },
  {
    id: "pos-minimarket",
    nombre: "Tienda POS",
    categoria: "comercio",
    etiquetaCategoria: "Minimarkets y Tiendas",
    precioTexto: "Pago único accesible",
    descripcionCorta: "Punto de venta de más de 25 módulos para bodegas y minimarkets: cobro ultrarrápido con código de barras, almacén con kardex, app móvil (PWA) y asistente con IA.",
    imagenPrincipal: "img/systienda-dashboard.png",
    beneficios: [
      "Venta rápida con lector de barras, Yape/Plin y precios por volumen",
      "Almacén con kardex, multi-sucursal, stock mínimo y vencimientos",
      "Funciona sin internet en red local, app móvil (PWA) e IA integrada"
    ],
    modulos: [
      {
        titulo: "1. Dashboard en Tiempo Real",
        descripcion: "Supervisa al instante las ventas del día, transacciones, utilidad bruta, avance de tu meta diaria, efectivo en caja y evolución por categorías.",
        imagen: "img/systienda-dashboard.png"
      },
      {
        titulo: "2. Punto de Venta (F2)",
        descripcion: "Escanea códigos de barras o busca con Ctrl+K, deja ventas en espera, aplica precios mayoristas por cantidad y emite tickets térmicos (58/80 mm), boletas o facturas.",
        imagen: "img/systienda-pos.png"
      },
      {
        titulo: "3. Almacén, Compras y Caja",
        descripcion: "Controla entradas y salidas con kardex, recibe alertas de stock bajo o productos por vencer, registra compras a proveedores y realiza arqueos de caja por turno.",
        imagen: "img/systienda-almacen.png"
      },
      {
        titulo: "4. Asistente IA y App Móvil",
        descripcion: "Pregunta en lenguaje natural por tus productos más rentables para obtener tablas y gráficos al instante, o opera tu tienda desde el celular como app (PWA).",
        imagen: "img/systienda-ia.png"
      }
    ]
  },
  {
    id: "pos-restaurante",
    nombre: "Restaurante POS",
    categoria: "comida",
    etiquetaCategoria: "Restaurantes y Cafeterías",
    precioTexto: "Pago único accesible",
    descripcionCorta: "Sistema integral para restaurantes y cafeterías con plano de mesas, tablero de cocina en tiempo real, recetas con control de costos, CRM con eventos Kanban e IA.",
    imagenPrincipal: "img/saborpos-dashboard.png",
    beneficios: [
      "Plano de mesas, división de cuentas y tablero de cocina en vivo",
      "Recetas con consumo automático de insumos, costos y márgenes",
      "CRM 360°, tablero Kanban para eventos, reservas, delivery e IA"
    ],
    modulos: [
      {
        titulo: "1. POS y Plano de Mesas",
        descripcion: "Organiza la atención en salón, para llevar y delivery; divide cuentas entre comensales, imprime tickets y realiza el cierre y arqueo diario de caja.",
        imagen: "img/saborpos-mesas.png"
      },
      {
        titulo: "2. Tablero de Cocina en Vivo",
        descripcion: "Envía las comandas directamente a cocina organizadas por estado de preparación para evitar demoras y errores en horas de alta demanda.",
        imagen: "img/saborpos-cocina.png"
      },
      {
        titulo: "3. Recetas, Insumos y Costos",
        descripcion: "Asocia insumos a cada plato para descontar stock automáticamente en cada venta, recibir alertas de reposición y conocer la utilidad real de tu carta.",
        imagen: "img/saborpos-recetas.png"
      },
      {
        titulo: "4. CRM, Eventos y Asistente IA",
        descripcion: "Gestiona reservas de mesas, organiza banquetes o eventos en un tablero Kanban, envía campañas por WhatsApp y consulta reportes con el Asistente IA.",
        imagen: "img/saborpos-crm.png"
      }
    ]
  },
  {
    id: "pos-barberia",
    nombre: "Barbería POS",
    categoria: "servicios",
    etiquetaCategoria: "Barberías y Salones",
    precioTexto: "Pago único accesible",
    descripcionCorta: "Sistema de 21 módulos diseñado para barberías y salones: agenda de citas por barbero, reservas en línea 24/7, cobro de servicios y productos, comisiones y CRM 360°.",
    imagenPrincipal: "img/barberia-dashboard.png",
    beneficios: [
      "Agenda de citas por barbero y enlace de reserva en línea 24/7",
      "Liquidación automática de comisiones por barbero y control de caja",
      "Cobro mixto de cortes y productos, CRM 360° y puntos de fidelización"
    ],
    modulos: [
      {
        titulo: "1. Dashboard y Métricas",
        descripcion: "Visualiza ventas del día, citas pendientes, utilidad del mes, métodos de pago, servicios más solicitados y horas de mayor demanda en tu local.",
        imagen: "img/barberia-dashboard.png"
      },
      {
        titulo: "2. Agenda de Citas por Barbero",
        descripcion: "Controla horarios por especialista, estados de atención (pendiente, confirmada, en proceso, completada), reservas desde web o WhatsApp y cobro directo desde la cita.",
        imagen: "img/barberia-agenda.png"
      },
      {
        titulo: "3. Punto de Venta y Comisiones",
        descripcion: "Cobra servicios y productos capilares en un mismo ticket con 5 métodos de pago, propinas, cupones y cálculo automático de comisión para cada barbero.",
        imagen: "img/barberia-pos.png"
      },
      {
        titulo: "4. CRM 360° y Fidelización",
        descripcion: "Revisa el historial y frecuencia de cada cliente con segmentación automática (VIP, frecuente, en riesgo), acumula puntos por visita y canjea recompensas.",
        imagen: "img/barberia-crm.png"
      }
    ]
  }
];