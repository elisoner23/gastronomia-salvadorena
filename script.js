/* ============================================================
   SABORES SV — Gastronomía de El Salvador
   script.js | Lógica de interactividad y validación
   ============================================================ */

/* ---------- AÑO DINÁMICO ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- NAVBAR — EFECTO SCROLL ---------- */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ---------- MENÚ HAMBURGUESA ---------- */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay    = document.getElementById('overlay');

function openMenu() {
  hamburger.classList.add('open');
  mobileMenu.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Abrir / cerrar con clic
hamburger.addEventListener('click', () => {
  hamburger.classList.contains('open') ? closeMenu() : openMenu();
});

// Accesibilidad — teclado
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  }
});

// Cerrar al hacer clic en overlay
overlay.addEventListener('click', closeMenu);

// Cerrar al hacer clic en un enlace del menú móvil
document.querySelectorAll('.mobile-link').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

/* ---------- VALIDACIÓN DEL FORMULARIO ---------- */
const form        = document.getElementById('contactForm');
const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const TEL_REGEX   = /^\d{4}-?\d{4}$/;

/**
 * Muestra el mensaje de error de un campo y lo marca con clase .error
 * @param {string} fieldId - id del input / select / textarea
 * @param {string} errorId - id del span de mensaje de error
 */
function showError(fieldId, errorId) {
  const field = document.getElementById(fieldId);
  const err   = document.getElementById(errorId);
  field.classList.add('error');
  err.classList.add('visible');
}

/**
 * Limpia el mensaje de error de un campo
 * @param {string} fieldId
 * @param {string} errorId
 */
function clearError(fieldId, errorId) {
  const field = document.getElementById(fieldId);
  const err   = document.getElementById(errorId);
  field.classList.remove('error');
  err.classList.remove('visible');
}

// Mapa de campos y sus mensajes de error
const fields = [
  { id: 'nombre',   err: 'err-nombre'   },
  { id: 'apellido', err: 'err-apellido' },
  { id: 'email',    err: 'err-email'    },
  { id: 'telefono', err: 'err-telefono' },
  { id: 'servicio', err: 'err-servicio' },
  { id: 'mensaje',  err: 'err-mensaje'  },
];

// Limpiar errores en tiempo real mientras el usuario corrige
fields.forEach(({ id, err }) => {
  const el = document.getElementById(id);
  el.addEventListener('input',  () => clearError(id, err));
  el.addEventListener('change', () => clearError(id, err));
});

// Validación al enviar el formulario
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  // Capturar valores
  const nombre   = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const email    = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const servicio = document.getElementById('servicio').value;
  const mensaje  = document.getElementById('mensaje').value.trim();
  const successMsg = document.getElementById('successMsg');

  // Ocultar mensaje de éxito anterior
  successMsg.classList.remove('visible');

  // --- Validar nombre ---
  if (nombre.length < 2) {
    showError('nombre', 'err-nombre');
    valid = false;
  } else {
    clearError('nombre', 'err-nombre');
  }

  // --- Validar apellido ---
  if (apellido.length < 2) {
    showError('apellido', 'err-apellido');
    valid = false;
  } else {
    clearError('apellido', 'err-apellido');
  }

  // --- Validar email con regex ---
  if (!EMAIL_REGEX.test(email)) {
    showError('email', 'err-email');
    valid = false;
  } else {
    clearError('email', 'err-email');
  }

  // --- Validar teléfono (formato salvadoreño: ####-####) ---
  if (!TEL_REGEX.test(telefono)) {
    showError('telefono', 'err-telefono');
    valid = false;
  } else {
    clearError('telefono', 'err-telefono');
  }

  // --- Validar select de servicio ---
  if (!servicio) {
    showError('servicio', 'err-servicio');
    valid = false;
  } else {
    clearError('servicio', 'err-servicio');
  }

  // --- Validar mensaje (mínimo 20 caracteres) ---
  if (mensaje.length < 20) {
    showError('mensaje', 'err-mensaje');
    valid = false;
  } else {
    clearError('mensaje', 'err-mensaje');
  }

  // --- Si todo es válido, limpiar y mostrar éxito ---
  if (valid) {
    form.reset();
    successMsg.classList.add('visible');
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});
