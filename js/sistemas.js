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
    imagenPrincipal: "img/polleria-dashboard.jpg",
    beneficios: [
      "Pedidos ágiles en mesa, para llevar, delivery y carta digital QR",
      "Pantalla de cocina en vivo y recetas con descuento automático de insumos",
      "Facturación electrónica SUNAT (Nubefact), CRM 360° y asistente con IA"
    ],
    modulos: [
      {
        titulo: "1. Dashboard en Tiempo Real",
        descripcion: "Monitorea al instante las ventas del día, pedidos activos, ticket promedio, mesas ocupadas, ventas y gastos del mes, utilidad aproximada y el estado de apertura de caja.",
        imagen: "img/polleria-dashboard.jpg"
      },
      {
        titulo: "2. Punto de Venta",
        descripcion: "Selecciona cuartos, medios pollos, combos y guarniciones con búsqueda rápida (F2) para salón, llevar o delivery. Acepta pagos mixtos (efectivo, Yape/Plin, tarjeta) y emite boleta, factura o ticket.",
        imagen: "img/polleria-pos.jpg"
      },
      {
        titulo: "3. Distribución de Mesas",
        descripcion: "Controla mesas libres, ocupadas o reservadas por zonas (Salón y Terraza) en vivo, mueve o divide cuentas entre comensales y envía comandas directo a cocina.",
        imagen: "img/polleria-mesas.jpg"
      },
      {
        titulo: "4. Reservaciones",
        descripcion: "Registra y confirma reservas directamente desde el sistema sin cruces de horario, y comparte un enlace público para que tus clientes reserven mesa desde su propio celular o computadora.",
        imagen: "img/polleria-reservas.png"
      }
    ]
  },
  {
    id: "pos-minimarket",
    nombre: "Tienda POS",
    categoria: "comercio",
    etiquetaCategoria: "Minimarkets y Tiendas",
    precioTexto: "Pago único accesible",
    descripcionCorta: "Punto de venta de más de 25 módulos para bodegas y minimarkets con interfaz en modo claro y oscuro: cobro con código de barras, CRM de clientes, almacén con kardex, app móvil (PWA) y Chat con IA.",
    imagenPrincipal: "img/systienda-dashboard.jpg",
    beneficios: [
      "Interfaz moderna en modo claro y oscuro, lista para PC y app móvil (PWA)",
      "Cobro ultrarrápido con lector de barras, Yape/Plin, créditos y precios por volumen",
      "CRM de clientes con puntos, almacén con kardex y Chat con IA gratuito (Gemini)"
    ],
    modulos: [
      {
        titulo: "1. Dashboard en Tiempo Real",
        descripcion: "Supervisa al instante las ventas del día, transacciones, utilidad bruta, avance de tu meta diaria, efectivo en caja y gráficos por categoría, con interfaz adaptable en modo claro y oscuro.",
        imagen: "img/systienda-dashboard-modulo.jpg"
      },
      {
        titulo: "2. Punto de Venta (F2)",
        descripcion: "Escanea códigos de barras o busca con Ctrl+K, deja ventas en espera, aplica precios mayoristas por cantidad, acepta pagos mixtos (efectivo, Yape/Plin, tarjeta o crédito) y emite tickets térmicos (58/80 mm), boletas o facturas.",
        imagen: "img/systienda-pos.jpg"
      },
      {
        titulo: "3. CRM, Créditos y Fidelización",
        descripcion: "Administra tu cartera de clientes con historial de compras, controla ventas al crédito con pagos a cuenta y fideliza a tus compradores frecuentes con puntos y promociones.",
        imagen: "img/systienda-crm.jpg"
      },
      {
        titulo: "4. Chat de IA y Reportes",
        descripcion: "Consulta tus ventas, productos más rentables, inventario o proveedores mediante el Chat IA flotante o el asistente en lenguaje natural para obtener tablas y gráficos al instante (modo claro y oscuro).",
        imagen: "img/systienda-ia.jpg"
      }
    ]
  },
  {
    id: "pos-restaurante",
    nombre: "Restaurante POS",
    categoria: "comida",
    etiquetaCategoria: "Restaurantes y Cafeterías",
    precioTexto: "Pago único accesible",
    descripcionCorta: "Sistema integral para restaurantes y cafeterías con plano de mesas, punto de venta táctil, tablero de cocina en tiempo real, recetas con control de costos, CRM con eventos Kanban e IA.",
    imagenPrincipal: "img/saborpos-dashboard.jpg",
    beneficios: [
      "Plano de mesas, división de cuentas y tablero de cocina en vivo",
      "Recetas con consumo automático de insumos, costos y márgenes",
      "CRM 360°, tablero Kanban para eventos, reservas, delivery e IA"
    ],
    modulos: [
      {
        titulo: "1. Dashboard en Tiempo Real",
        descripcion: "Visualiza indicadores clave (KPIs), ventas por hora, platos más vendidos y gráficos de rendimiento diario para controlar la operación de tu restaurante al instante.",
        imagen: "img/saborpos-dashboard-modulo.jpg"
      },
      {
        titulo: "2. Plano de Mesas",
        descripcion: "Supervisa en vivo el estado de cada mesa en salón, toma comandas rápidas, divide cuentas entre comensales y gestiona reservas sin cruces de horario.",
        imagen: "img/saborpos-mesas.jpg"
      },
      {
        titulo: "3. Punto de Venta",
        descripcion: "Cobra pedidos de salón, para llevar y delivery de forma táctil y veloz, imprime tickets y realiza la apertura, arqueo y cierre de caja diario.",
        imagen: "img/saborpos-pos.jpg"
      },
      {
        titulo: "4. Tablero de Cocina",
        descripcion: "Recibe y organiza las comandas en pantalla en tiempo real según su estado de preparación para agilizar los tiempos de entrega y evitar errores en horas pico.",
        imagen: "img/saborpos-cocina.jpg"
      },
      {
        titulo: "5. Recetas e Insumos",
        descripcion: "Asocia insumos a cada plato para descontar stock automáticamente con cada venta, recibir alertas de reposición y calcular el costo y margen real de tu carta.",
        imagen: "img/saborpos-recetas.jpg"
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
    imagenPrincipal: "img/barberia-dashboard.jpg",
    beneficios: [
      "Agenda de citas por barbero y enlace de reserva en línea 24/7",
      "Liquidación automática de comisiones por barbero y control de caja",
      "Cobro mixto de cortes y productos, CRM 360° y puntos de fidelización"
    ],
    modulos: [
      {
        titulo: "1. Dashboard en Tiempo Real",
        descripcion: "Visualiza ventas del día, citas programadas y pendientes, utilidad del mes, métodos de pago, servicios más solicitados, demanda de citas por hora y alertas de stock.",
        imagen: "img/barberia-dashboard-modulo.jpg"
      },
      {
        titulo: "2. Punto de Venta",
        descripcion: "Cobra servicios y productos capilares en segundos con descuentos, propinas, cupones, 5 métodos de pago (efectivo, tarjeta, Yape, Plin y transferencia), ticket imprimible y apertura/cierre de caja.",
        imagen: "img/barberia-pos.jpg"
      },
      {
        titulo: "3. Agenda de Citas",
        descripcion: "Organiza el calendario por barbero con estados de atención (pendiente, confirmada, en proceso, completada), reservas desde el local, WhatsApp o enlace público en línea 24/7 y cobro directo desde la cita.",
        imagen: "img/barberia-agenda.jpg"
      },
      {
        titulo: "4. Gestión de Barberos",
        descripcion: "Registra a cada especialista de tu equipo con su especialidad, color identificador en la agenda y porcentaje de comisión para calcular automáticamente sus liquidaciones.",
        imagen: "img/barberia-barberos.jpg"
      }
    ]
  }
];