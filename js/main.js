// Updated Data Arrays - Extended gallery with categories
const servicesData = [
  {
    icon: 'fas fa-brush',
    title: 'Styling & Treatments',
    description: 'Cuts, silk press, color, textured haircare — tailored to your unique look.'
  },
  {
    icon: 'fas fa-air-freshener',
    title: 'Extensions & Wigs',
    description: 'Luxury 100% human hair, ethically sourced and custom-blended for you.'
  },
  {
    icon: 'fas fa-ring',
    title: 'Bridal Styling',
    description: 'Bespoke glam for weddings and events — in-studio or worldwide.'
  },
  {
    icon: 'fas fa-globe',
    title: 'Global Care',
    description: 'Virtual consultations and expert guidance — wherever you are.'
  }
];



// why choose us array
const whyChooseUsData = [
  {
    title: 'Inclusive Expertise',
    description: 'Our stylists are trained across all hair types — from Type 1 straight to Type 4 coily — because beauty is never one-size-fits-all.'
  },
  {
    title: 'Elegant, Effortless Results',
    description: 'We combine creativity and technique to deliver styles that feel as good as they look — polished, wearable, and enduring.'
  },
  {
    title: 'Trusted Worldwide',
    description: 'With clients from Lagos to London, New York to Nairobi, our reputation is built on consistency, quality, and care.'
  },
  {
    title: 'Your Crown. Your Culture. Our Craft.',
    description: 'At AliceHairs, we honor the art of hair in all its forms. We believe beauty has no borders — and your styling experience should reflect that.'
  }
];




// Extended gallery data with categories
const galleryData = [
    // Model Images
    {
        id: 1,
        src: 'https://i.pinimg.com/736x/9d/b0/ad/9db0ad3b5369da4c9943ca4430a1150b.jpg',
        alt: "A woman sitting in a tub with a pink shirt on",
        category: 'clients'
    },
    {
        id: 2,
        src: 'https://i.pinimg.com/736x/f3/4c/11/f34c11a3e6b1a60e9f735463ebd3c041.jpg',
        alt: 'A woman with glasses sitting on a chair',
        category: 'clients'
    },
    {
        id: 3,
        src: 'https://i.pinimg.com/736x/06/a2/81/06a2817d1dca47663ceb87399449dd36.jpg',
        alt: "A woman with long twists in her hair",
        category: 'clients'
    },
    {
        id: 4,
        src: 'https://i.pinimg.com/736x/16/d9/8c/16d98cca5b18efa6e4db71595984626a.jpg',
        alt: 'A woman in a pink top with a braid in her hair',
        category: 'clients'
    },
    {
        id: 5,
        src: 'https://i.pinimg.com/736x/35/60/80/356080097025689c4c93df8535fbd270.jpg',
        alt: "A woman with pink braids holding a cell phone.",
        category: 'clients'
    },
    {
        id: 6,
        src: 'https://i.pinimg.com/736x/a2/c6/ea/a2c6ea6116d62b2b2bcf6fad56fce278.jpg',
        alt: 'A little girl with long braids standing on a street',
        category: 'clients'
    },
    {
        id: 7,
        src: 'https://i.pinimg.com/736x/bf/d5/d6/bfd5d68707600c4894b2a3f530439bed.jpg',
        alt: 'A woman with long braids is posing for a picture',
        category: 'clients'
    },
    {
        id: 8,
        src: 'https://i.pinimg.com/736x/3e/4c/80/3e4c8090a8298abc9aa0b85ac3ba30b0.jpg',
        alt: 'a little girl sitting in a chair with a butterfly shirt on',
        category: 'clients'
    },
    {
        id: 11,
        src: 'https://i.pinimg.com/736x/4f/c2/92/4fc29258a05b9e891a9f259e784d06ed.jpg',
        alt: 'a woman sitting in front of a poster',
        category: 'clients'
    },
    {
        id: 13,
        src: 'https://i.pinimg.com/736x/24/53/f4/2453f4fe978a522c0701cc9e5a6cbb40.jpg',
        alt: 'a woman sitting in a tub with her hair in a pony tail',
        category: 'clients'
    },
    {
        id: 14,
        src: 'https://i.pinimg.com/736x/c2/84/7b/c2847b92e22a3d19ec464bf94cc5250a.jpg',
        alt: 'a woman wearing glasses looking down at her cell phone',
        category: 'clients'
    },
    
    // Product Images
    {
        id: 9,
        src: 'https://i.pinimg.com/736x/42/23/30/422330affe2ea6062b12ed4717b8689a.jpg',
        alt: 'A shade of burgundy Alice super jumbo braid hair extension',
        category: 'product'
    },
    {
        id: 10,
        src: 'https://i.pinimg.com/736x/46/66/18/4666181d37b7aab7fc73fedb26b4b3b4.jpg',
        alt: 'A pile of alice super jumbo braid hair extension products sitting on top of a cardboard box',
        category: 'product'
    },
    {
        id: 12,
        src: 'https://i.pinimg.com/736x/29/71/13/2971133a92454694c70b1c38ed4a5f58.jpg',
        alt: 'A shade of red Alice super jumbo braid hair extension',
        category: 'product'
    },
    {
        id: 15,
        src: 'https://i.pinimg.com/736x/ae/67/46/ae6746632e8a82e10627d5180a7d0171.jpg',
        alt: 'a bunch of white alice jumbo braids are in a box',
        category: 'product'
    },
    {
        id: 16,
        src: 'https://i.pinimg.com/736x/f6/46/50/f64650cee6284b038ae4bcc761dffc5b.jpg',
        alt: ' a bunch of white hair sitting on top of a cardboard box',
        category: 'product'
    },
    {
        id: 17,
        src: 'https://i.pinimg.com/736x/fc/cb/fe/fccbfe7340d8291ed8601adf1c109f88.jpg',
        alt: 'two packets of medium brown alice jumbo hair extension inside a brown carton',
        category: 'product'
    },
    {
        id: 18,
        src: 'https://i.pinimg.com/736x/96/dd/d9/96ddd9bdc04ad9c99ffcb5b2fbec6df0.jpg',
        alt: 'two packets of purple alice jumbo hair extension sitting on top of a cardboard box',
        category: 'product'
    },
    {
        id: 19,
        src: 'https://i.pinimg.com/736x/ea/95/2e/ea952e49f37d72cc27771e73534514fc.jpg',
        alt: 'Purple Alice super jumbo braiding hair extensions',
        category: 'product'
    }
    // {
    //     id: 20,
    //     src: './assets/images/alice-model.webp',
    //     alt: 'ALice hair brand model posing for photo',
    //     category: 'model'
    // }
];

// Gallery pagination variables
let currentGalleryPage = 0;
let activeCategory = 'all';
const imagesPerPage = 8;
let displayedImages = [];
let filteredData = [];

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const servicesGrid = document.getElementById('services-grid');
const chooseusGrid = document.getElementById('chooseus-grid');
const galleryGrid = document.getElementById('gallery-grid');
const contactForm = document.getElementById('contact-form');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
    renderChooseUS();
    initializeGallery();
    setupEventListeners();
    setupScrollEffects();
    setupIntersectionObserver();
});

// Render Services (unchanged)
function renderServices() {
    const servicesHTML = servicesData.map(service => `
        <div class="service-card" data-aos="fade-up">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
    
    servicesGrid.innerHTML = servicesHTML;
}


// Render Services (unchanged)
function renderChooseUS() {
    const servicesHTML = whyChooseUsData.map(service => `
        <div class="service-card" data-aos="fade-up">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
    
    chooseusGrid.innerHTML = servicesHTML;
}

// Initialize Gallery with categories and pagination
function initializeGallery() {
    displayedImages = [];
    currentGalleryPage = 0;
    filterByCategory('all');
}

// Filter gallery by category
function filterByCategory(category) {
    activeCategory = category;
    currentGalleryPage = 0;
    displayedImages = [];
    
    if (category === 'all') {
        filteredData = [...galleryData];
    } else {
        filteredData = galleryData.filter(item => item.category === category);
    }
    
    loadMoreImages();
    updateCategoryTabs();
}

// Update active category tab
function updateCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.category === activeCategory) {
            tab.classList.add('active');
        }
    });
}

// Load more images function
function loadMoreImages() {
    const startIndex = currentGalleryPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const newImages = filteredData.slice(startIndex, endIndex);
    
    if (newImages.length > 0) {
        displayedImages = [...displayedImages, ...newImages];
        renderGallery();
        currentGalleryPage++;
    }
}

// Get category counts for tab labels
function getCategoryCounts() {
    const counts = {
        all: galleryData.length,
        // model: galleryData.filter(item => item.category === 'model').length,
        product: galleryData.filter(item => item.category === 'product').length,
        clients: galleryData.filter(item => item.category === 'clients').length
    };
    return counts;
}

// Render Gallery with category tabs and View More button
function renderGallery() {
    const counts = getCategoryCounts();
    
    // Category tabs HTML
    const tabsHTML = `
        <div class="gallery-tabs">
            <button class="category-tab ${activeCategory === 'all' ? 'active' : ''}" data-category="all">
                All <span class="tab-count">(${counts.all})</span>
            </button>
            <button class="category-tab ${activeCategory === 'clients' ? 'active' : ''}" data-category="clients">
                Clients <span class="tab-count">(${counts.clients})</span>
            </button>
            <button class="category-tab ${activeCategory === 'product' ? 'active' : ''}" data-category="product">
                 Products <span class="tab-count">(${counts.product})</span>
            </button>
        </div>
    `;
    
    // Gallery items HTML
    const galleryHTML = displayedImages.map((item, index) => `
        <div class="gallery-item" data-aos="fade-up" data-aos-delay="${(index % imagesPerPage) * 100}" data-category="${item.category}">
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
                <div class="gallery-category">${item.category}</div>
            </div>
        </div>
    `).join('');
    
    // Check if there are more images to load
    const hasMoreImages = displayedImages.length < filteredData.length;
    const remainingImages = filteredData.length - displayedImages.length;
    
    const viewMoreButton = hasMoreImages ? `
        <div class="view-more-container">
            <button class="view-more-btn" id="view-more-btn">
                <span>Load More ${activeCategory === 'all' ? '' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1) + 's'} (${remainingImages} remaining)</span>
                <i class="fas fa-chevron-down"></i>
            </button>
        </div>
    ` : '';
    
    galleryGrid.innerHTML = tabsHTML + '<div class="gallery-items-grid">' + galleryHTML + '</div>' + viewMoreButton;
    
    // Add event listeners to category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            filterByCategory(category);
        });
    });
    
    // Add event listener to the View More button
    if (hasMoreImages) {
        const viewMoreBtn = document.getElementById('view-more-btn');
        viewMoreBtn.addEventListener('click', handleViewMore);
    }
    
    // Re-observe new gallery items for animations
    observeGalleryItems();
}

// Handle View More button click
function handleViewMore() {
    const viewMoreBtn = document.getElementById('view-more-btn');
    
    // Show loading state
    viewMoreBtn.innerHTML = `
        <span><i class="fas fa-spinner fa-spin"></i> Loading...</span>
    `;
    viewMoreBtn.disabled = true;
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        loadMoreImages();
        
        // Scroll to the newly loaded images
        const newImages = document.querySelectorAll('.gallery-item');
        const targetImage = newImages[displayedImages.length - imagesPerPage];
        if (targetImage) {
            targetImage.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }, 500);
}

// Observe gallery items for animations
function observeGalleryItems() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe only the newly added gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    const startObserving = Math.max(0, galleryItems.length - imagesPerPage);
    
    for (let i = startObserving; i < galleryItems.length; i++) {
        const item = galleryItems[i];
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        galleryObserver.observe(item);
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Navigation smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');
            scrollToSection(targetId);
            
            // Close mobile menu
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Update active link
            updateActiveLink(link);
        });
    });

    // Contact form submission
    contactForm.addEventListener('submit', handleFormSubmission);

    // Gallery item clicks (lightbox effect)
    document.addEventListener('click', (e) => {
        if (e.target.closest('.gallery-item')) {
            const img = e.target.closest('.gallery-item').querySelector('img');
            openLightbox(img.src, img.alt);
        }
    });
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Update active navigation link
function updateActiveLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Scroll effects
function setupScrollEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar background on scroll
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        
        // Parallax effect for hero image
        const heroImage = document.querySelector('.hero-img');
        if (heroImage) {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                entry.target.style.opacity = '1';
                entry.target.transform = 'translateY(0)';
                
                // Update active nav link based on visible section
                updateActiveNavigation(entry.target.id);
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        observer.observe(section);
    });

    // Observe service cards with stagger effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150);
                }
            });
        }, observerOptions);
        
        cardObserver.observe(card);
    });
}

// Update active navigation based on scroll position
function updateActiveNavigation(activeSectionId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === activeSectionId) {
            link.classList.add('active');
        }
    });
}

// Handle form submission
function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Lightbox functionality
function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${src}" alt="${alt}">
            <div class="lightbox-caption">${alt}</div>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Animate in
    requestAnimationFrame(() => {
        lightbox.style.opacity = '1';
        lightbox.querySelector('.lightbox-content').style.transform = 'scale(1)';
    });
    
    // Close handlers
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard handler
    document.addEventListener('keydown', handleLightboxKeydown);
    
    function closeLightbox() {
        lightbox.style.opacity = '0';
        lightbox.querySelector('.lightbox-content').style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleLightboxKeydown);
        }, 300);
    }
    
    function handleLightboxKeydown(e) {
        if (e.key === 'Escape') closeLightbox();
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    });
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}