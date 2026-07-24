const privacySpanish = {
  'Back to main site': 'Volver al sitio principal',
  'Privacy notice': 'Aviso de privacidad',
  'Your information stays focused on your service request.': 'Tu información se mantiene enfocada en tu solicitud de servicio.',
  'Last updated July 21, 2026': 'Última actualización: 21 de julio de 2026',
  'At a glance': 'En resumen',
  'Simple, service-only communication.': 'Comunicación sencilla, solo sobre tu servicio.',
  'Your details are used to respond to your request.': 'Tus datos se usan para responder a tu solicitud.',
  'No advertising trackers or analytics cookies.': 'No usamos rastreadores publicitarios ni cookies de análisis.',
  'You can ask us to correct or delete submitted information.': 'Puedes pedirnos que corrijamos o eliminemos la información enviada.',
  'In this notice': 'En este aviso',
  'Information we collect': 'Información que recopilamos',
  'How we use it': 'Cómo la utilizamos',
  'Form delivery': 'Envío del formulario',
  'Language preference': 'Preferencia de idioma',
  'Retention and choices': 'Conservación y opciones',
  'Contact': 'Contacto',
  'Privacy question?': '¿Pregunta sobre privacidad?',
  'When you submit the appointment form, we may collect your name, phone number, email address, vehicle information, requested date, and the details you provide about your vehicle.': 'Cuando envías el formulario de cita, podemos recopilar tu nombre, número de teléfono, correo electrónico, información del vehículo, fecha solicitada y los detalles que proporciones sobre tu vehículo.',
  'Hybrid 310 uses this information to respond to your request, discuss your vehicle, and arrange service. Submitting the form does not confirm an appointment.': 'Hybrid 310 utiliza esta información para responder a tu solicitud, hablar sobre tu vehículo y coordinar el servicio. Enviar el formulario no confirma una cita.',
  'Form delivery and third parties': 'Envío del formulario y terceros',
  'The website uses Netlify Forms to process and store appointment requests for Hybrid 310. Google Maps is opened only when you choose a map or review link. This site does not currently use advertising trackers or analytics cookies.': 'El sitio utiliza Netlify Forms para procesar y almacenar las solicitudes de cita de Hybrid 310. Google Maps solo se abre cuando eliges un enlace de mapa o reseñas. Actualmente, este sitio no utiliza rastreadores publicitarios ni cookies de análisis.',
  'The site may save your English or Spanish preference in your browser’s local storage. It is not sent to Hybrid 310.': 'El sitio puede guardar tu preferencia de inglés o español en el almacenamiento local de tu navegador. Esta preferencia no se envía a Hybrid 310.',
  'Appointment messages may be retained as business correspondence for as long as reasonably needed. To ask about, correct, or request deletion of information you submitted, contact': 'Los mensajes de citas pueden conservarse como correspondencia comercial durante el tiempo razonablemente necesario. Para consultar, corregir o solicitar la eliminación de la información enviada, escribe a',
  'or call': 'o llama al',
  'Back to Hybrid 310': 'Volver a Hybrid 310'
};

const privacyOriginalText = new Map();
const privacyWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (privacyWalker.nextNode()) {
  const node = privacyWalker.currentNode;
  const text = node.nodeValue.trim();
  if (text) privacyOriginalText.set(node, text);
}

let privacyLanguage = 'en';
function setPrivacyLanguage(language) {
  privacyLanguage = language === 'es' ? 'es' : 'en';
  document.documentElement.lang = privacyLanguage;
  privacyOriginalText.forEach((english, node) => {
    const translated = privacyLanguage === 'es' && privacySpanish[english] ? privacySpanish[english] : english;
    node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), translated);
  });
  document.querySelectorAll('.legal-lang span').forEach(span => {
    span.classList.toggle('active', span.textContent.trim().toLowerCase() === privacyLanguage);
  });
  document.querySelector('.legal-lang').setAttribute('aria-label', privacyLanguage === 'es' ? 'Cambiar idioma' : 'Switch language');
  document.title = privacyLanguage === 'es' ? 'Aviso de privacidad | Hybrid 310' : 'Privacy Notice | Hybrid 310';
  try { localStorage.setItem('hybrid310-language', privacyLanguage); } catch {}
}

document.querySelector('.legal-lang').addEventListener('click', () => {
  setPrivacyLanguage(privacyLanguage === 'en' ? 'es' : 'en');
});

try {
  setPrivacyLanguage(localStorage.getItem('hybrid310-language') || 'en');
} catch {
  setPrivacyLanguage('en');
}
