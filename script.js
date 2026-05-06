// Smooth Scroll for Nav Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active Link Tracking
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// 3D Tilt Effect for About Card
const aboutCard = document.querySelector('.about-card-3d');
if (aboutCard) {
    aboutCard.addEventListener('mousemove', (e) => {
        const rect = aboutCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        aboutCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    aboutCard.addEventListener('mouseleave', () => {
        aboutCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(-15deg) scale(1)`;
    });
}

// Parallax effect for Hero Background Text
window.addEventListener('mousemove', (e) => {
    const bgText = document.querySelector('.hero-bg-text');
    if (bgText) {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        bgText.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.project-card, .about-content, .section-title, .tech-icons i');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.classList.add('reveal-init');
    revealObserver.observe(el);
});

// Tech Icons Hover Effect (Staggered opacity change)
const techIcons = document.querySelectorAll('.tech-icons i');
techIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        techIcons.forEach(other => {
            if (other !== icon) other.style.opacity = '0.3';
        });
    });
    icon.addEventListener('mouseleave', () => {
        techIcons.forEach(other => other.style.opacity = '0.6');
    });
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.nav-mobile-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinksContainer.classList.contains('active')) {
            icon.classList.replace('bx-menu', 'bx-x');
        } else {
            icon.classList.replace('bx-x', 'bx-menu');
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            mobileToggle.querySelector('i').classList.replace('bx-x', 'bx-menu');
        });
    });
}

