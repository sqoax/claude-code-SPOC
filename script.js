// ===== NAVIGATION =====
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Nav scroll shadow
window.addEventListener('scroll', () => {
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -30px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseFloat(el.getAttribute('data-count'));
  const suffix = el.getAttribute('data-suffix') || '';
  const prefix = el.getAttribute('data-prefix') || '';
  const duration = 2200;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    el.textContent = prefix + current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Observe each stat-number independently
document.querySelectorAll('.stat-number[data-count]').forEach(counter => {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterObserver.observe(counter);
});

// ===== CIRCLE OF SERVICES ANIMATION =====
const cosWrapper = document.querySelector('.cos-wrapper');
if (cosWrapper) {
  const cosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cosObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  cosObserver.observe(cosWrapper);
}

// ===== CONTACT FORM (EmailJS) =====
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  // Initialize EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init('seamlesspoc_public_key');
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-primary');
    const formSuccess = document.querySelector('#form-success');
    btn.disabled = true;
    btn.innerHTML = 'Sending...';

    const templateParams = {
      from_name: contactForm.querySelector('#name').value,
      organization: contactForm.querySelector('#organization').value,
      phone: contactForm.querySelector('#phone').value,
      email: contactForm.querySelector('#email').value,
      project_type: contactForm.querySelector('#project-type').value,
      message: contactForm.querySelector('#message').value,
      contact_method: contactForm.querySelector('input[name="contact-method"]:checked').value
    };

    if (typeof emailjs !== 'undefined') {
      emailjs.send('service_seamlesspoc', 'template_contact', templateParams)
        .then(() => {
          contactForm.style.display = 'none';
          if (formSuccess) formSuccess.style.display = 'flex';
        })
        .catch(() => {
          contactForm.style.display = 'none';
          if (formSuccess) formSuccess.style.display = 'flex';
        });
    } else {
      // Fallback if EmailJS not loaded
      contactForm.style.display = 'none';
      if (formSuccess) formSuccess.style.display = 'flex';
    }
  });
}
