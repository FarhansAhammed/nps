import { createClient } from '@supabase/supabase-js'

// Supabase Configuration
const SUPABASE_URL = 'https://yyjhynajujbmdhndaceg.supabase.co'
const SUPABASE_KEY = 'sb_publishable_3fanHy-uvbdQk3sJDNcgwA_foWvxvJB'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// Gallery Assets
const GALLERY_IMAGES = [
    '/gallery/WhatsApp Image 2026-04-13 at 6.00.59 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.00.59 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.00 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.01 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.01 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.04 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.05 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.05 PM (2).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.05 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.06 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.06 PM (2).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.06 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.07 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.07 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.08 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.08 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.09 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.09 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.10 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.10 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.11 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.11 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.13 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.14 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.14 PM (2).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.14 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.15 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.15 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.16 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.16 PM (2).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.16 PM (3).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.16 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.17 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.17 PM (2).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.17 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.18 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.01.18 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.02.25 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.02.25 PM (2).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.02.25 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.02.26 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.02.26 PM (2).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.02.26 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.03.38 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.05.47 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.06.56 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.07.53 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.07.53 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.07.54 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.07.54 PM (2).jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.07.54 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.07.55 PM.jpeg',
    '/gallery/WhatsApp Image 2026-04-13 at 6.09.26 PM.jpeg'
];

// Navbar Scroll Effect & Scroll Progress Indicator
const navbar = document.querySelector('.navbar');
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    // Navbar state
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // School Name Transition
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleRect = heroTitle.getBoundingClientRect();
        if (titleRect.top < 0) {
            navbar.classList.add('header-scrolled');
            heroTitle.style.opacity = '0';
            heroTitle.style.pointerEvents = 'none';
        } else {
            navbar.classList.remove('header-scrolled');
            heroTitle.style.opacity = '1';
            heroTitle.style.pointerEvents = 'auto';
        }
    }

    // Scroll Progress
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / height) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = scrolled + '%';
    }

    // Back to Top Visibility
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// Back to Top Click
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
        
        // Optional: Close other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});


// Mobile Menu Toggle logic
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}


// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// Smooth Scroll for Button Clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = 'Sending...';
        btn.disabled = true;

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        try {
            const { error } = await supabase
                .from('contact_messages')
                .insert([
                    { name, email, subject, message }
                ]);

            if (error) throw error;

            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
        } finally {
            btn.textContent = originalText;
            btn.disabled = false;
        }
    });
}

// 3D Carousel Implementation
const init3DCarousel = () => {
    const carousel = document.getElementById('carousel3d');
    if (!carousel) return;

    const images = GALLERY_IMAGES.slice(0, 12); // Limit to 12 images for performance and clarity

    const itemCount = images.length;
    const angleStep = 360 / itemCount;
    const radius = 200; // Smaller radius for compact display

    images.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-3d-item';
        
        const rotation = index * angleStep;
        item.style.transform = `rotateY(${rotation}deg) translateZ(${radius}px)`;
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gallery Image ${index + 1}`;
        img.loading = 'lazy';
        
        item.appendChild(img);
        carousel.appendChild(item);
    });

    let currentIndex = 0;
    const items = carousel.querySelectorAll('.carousel-3d-item');
    
    // Initial active state
    if (items.length > 0) items[0].classList.add('active');

    const rotate = () => {
        items[currentIndex % itemCount].classList.remove('active');
        currentIndex++;
        const activeItem = items[currentIndex % itemCount];
        activeItem.classList.add('active');
        
        const currentRotation = -currentIndex * angleStep;
        carousel.style.transform = `rotateY(${currentRotation}deg)`;
    };

    // Auto-rotate every 3 seconds
    let interval = setInterval(rotate, 3000);

    // Pause on hover
    const container = document.querySelector('.carousel-3d-container');
    if (container) {
        container.style.cursor = 'pointer';
        container.addEventListener('mouseenter', () => clearInterval(interval));
        container.addEventListener('mouseleave', () => {
            interval = setInterval(rotate, 3000);
        });
        
        // Link to gallery section
        container.addEventListener('click', () => {
            const gallerySection = document.getElementById('gallery');
            if (gallerySection) {
                window.scrollTo({
                    top: gallerySection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
};

// Gallery Slideshow Implementation
const initGallerySlideshow = () => {
    const slideshow = document.getElementById('gallerySlideshow');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    
    if (!slideshow) return;

    const images = GALLERY_IMAGES;

    // Clear existing slides and populate with all images
    slideshow.innerHTML = '';
    images.forEach(src => {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide';
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Gallery Slide';
        img.loading = 'lazy';
        slide.appendChild(img);
        slideshow.appendChild(slide);
    });

    let currentSlide = 0;
    const totalSlides = images.length;

    const showSlide = (index) => {
        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;
        
        slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

    // Auto-advance every 5 seconds
    let slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);

    // Pause on hover
    const container = document.querySelector('.gallery-slideshow-container');
    if (container) {
        container.addEventListener('mouseenter', () => clearInterval(slideInterval));
        container.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    init3DCarousel();
    initGallerySlideshow();
});
