/** RJ JS - Rio de Janeiro - Vibrant-iconic with hot pink and gold */
const STATE_CONFIG = {
  stateCode: 'rj',
  capital: 'Rio de Janeiro',
  formspreeUrl: 'https://formspree.io/f/xrjqbddb',
  colors: { primary: '#ff1493', secondary: '#dc143c', accent: '#ffd700' },
  animations: {"enabled": true, "header": {"type": "cariocaSlide", "duration": "0.5s", "easing": "cubic-bezier(0.68, -0.55, 0.265, 1.55)", "delay": "0s"}, "sections": {"type": "iconicReveal", "duration": "0.8s", "easing": "ease-out", "stagger": "0.1s"}, "hero": {"type": "beachParallax", "speed": 0.8, "direction": "horizontal"}, "cards": {"type": "sambaFlip", "rhythm": true, "bounce": true}, "images": {"type": "postCardReveal", "glamour": true, "duration": "0.7s"}},
  interactions: {"hover": "samba-bounce", "scroll": "beach-glide", "transitions": "carioca-snap", "click": "firework-burst"},
  premiumEffects: ["copacabana-gradient", "samba-rhythm", "sunset-glow", "wave-motion"]
};

const SECTIONS = ["rj-index-section--map", "rj-index-section-frequently-asked-questions-about-living-in-", "rj-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
