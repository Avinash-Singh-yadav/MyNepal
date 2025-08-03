// Content data for modals
const contentData = {
    // Culture content
    'dashain': {
        title: 'Dashain Festival',
        description: "Nepal's biggest and most important festival celebrating the victory of good over evil.",
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Dashain is Nepal's biggest and most important festival, celebrating the victory of good over evil. This 15-day festival brings families together and showcases the rich cultural traditions that have been passed down through generations. During Dashain, families gather to receive blessings from elders, fly colorful kites, and enjoy traditional feasts. The festival culminates with Vijaya Dashami, when people receive tika (red mark) and jamara (yellow barley shoots) as blessings. Streets come alive with celebrations, and the entire country participates in this joyous occasion that reinforces family bonds and cultural identity."
    },
    'traditional-arts': {
        title: 'Traditional Arts & Crafts',
        description: 'Exquisite wood carvings, metalwork, and architectural marvels of ancient craftsmen.',
        image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Nepal's traditional arts represent centuries of skilled craftsmanship, from intricate wood carvings to detailed metalwork. These art forms are deeply rooted in religious and cultural practices. Newari artisans are particularly renowned for their architectural marvels, creating temples and palaces with elaborate woodwork and stone sculptures. The traditional crafts include pottery making in Bhaktapur, carpet weaving in the Kathmandu valley, and the famous Khukuri knives that are both functional tools and artistic expressions. These crafts continue to inspire modern artists and architects worldwide."
    },
    'traditional-dance': {
        title: 'Traditional Dance & Music',
        description: 'Graceful movements telling stories of gods, heroes, and ancient legends.',
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Traditional Nepali dances are more than entertainment - they are storytelling mediums that preserve ancient legends, religious stories, and cultural values through graceful movements and colorful costumes. From the dramatic mask dances of the mountains to the elegant classical dances of the Kathmandu Valley, each region has its unique dance traditions. Popular forms include the Lakhe dance during Indra Jatra, the Charya dance of Buddhist monasteries, and the folk dances of different ethnic communities that reflect the diversity of Nepal's cultural heritage."
    },
    'ethnic-diversity': {
        title: 'Ethnic Diversity',
        description: 'Over 125 ethnic groups contributing to Nepal\'s rich cultural tapestry.',
        image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Nepal is home to over 125 ethnic groups, each with distinct languages, customs, and traditions. Major ethnic groups include the Chhetri, Brahmin, Magar, Tharu, Tamang, Newar, and Rai communities. The Sherpa people of the Himalayas are world-renowned for their mountaineering skills, while the Tharu people of the Terai have unique stilt house architecture and vibrant cultural practices. This ethnic diversity creates a rich tapestry of festivals, cuisines, art forms, and social customs that make Nepal one of the most culturally diverse countries in the world."
    },
    // Religion content
    'buddhism': {
        title: 'Buddhism - Birthplace of Buddha',
        description: 'Ancient monasteries and meditation practices in the birthplace of Buddha.',
        image: 'https://images.unsplash.com/photo-1544967889-d686eeb18fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Nepal holds a special place in Buddhism as the birthplace of Lord Buddha in Lumbini. The country is home to numerous ancient monasteries, stupas, and meditation centers that have been preserving Buddhist teachings for over 2,500 years. From the majestic Boudhanath Stupa in Kathmandu to the peaceful monasteries of Mustang, Nepal offers pilgrims and visitors a chance to experience authentic Buddhist culture and spirituality. The Tibetan Buddhist influence is particularly strong, with many refugees establishing vibrant communities that maintain traditional practices."
    },
    'hinduism': {
        title: 'Hinduism - Sacred Traditions',
        description: 'Sacred temples and ancient traditions in the world\'s former Hindu kingdom.',
        image: 'https://images.unsplash.com/photo-1582694093663-d7d4c8b2b7d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Nepal was the world's only official Hindu kingdom until 2008 and remains deeply rooted in Hindu traditions. The country is home to some of the most sacred Hindu temples, including Pashupatinath in Kathmandu and Muktinath in Mustang. Hindu festivals, rituals, and traditions are woven into the daily life of most Nepalis, creating a living heritage that visitors can witness throughout the country. The Ganga Aarti ceremonies, temple festivals, and religious processions showcase the deep spiritual connection that defines Nepali culture."
    },
    'spiritual-practices': {
        title: 'Living Spiritual Practices',
        description: 'Prayer wheels, mantras, and meditation in daily Nepali life.',
        image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Spiritual practices are deeply embedded in Nepali culture, transcending religious boundaries. From spinning prayer wheels and chanting mantras to daily meditation and ritual offerings, spirituality is a living part of everyday life in Nepal. Visitors can participate in morning prayers at temples, learn meditation techniques from Buddhist monks, and experience the profound sense of peace that comes from Nepal's spiritual traditions. The coexistence of Hindu and Buddhist practices creates a unique spiritual atmosphere found nowhere else in the world."
    }
};

// DOM elements
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.querySelector('.modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const modalContent = document.getElementById('modal-full-content');
const modalClose = document.getElementById('modal-close');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Initialize Lucide icons
lucide.createIcons();

// Navigation toggle for mobile
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Modal functionality
function openModal(contentKey) {
    const data = contentData[contentKey];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalContent.innerHTML = `<p>${data.content}</p>`;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for content cards
document.querySelectorAll('.content-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalKey = card.getAttribute('data-modal');
        openModal(modalKey);
    });
});

// Close modal events
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Image lazy loading
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        }
    });
});

images.forEach(img => {
    if (img.dataset.src) {
        imageObserver.observe(img);
    }
});

// Add animation classes when elements come into view
const animateElements = document.querySelectorAll('.content-card, .contact-item, .footer-section');
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animationObserver.observe(element);
});

// Add sections for regions, heritage, tourism, and history
function addSection(sectionId, title, description, items) {
    const section = document.createElement('section');
    section.id = sectionId;
    section.className = sectionId === 'regions' || sectionId === 'tourism' ? 'section' : 'section section-alt';
    
    section.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">${title}</h2>
                <p class="section-description">${description}</p>
            </div>
            <div class="content-grid">
                ${items.map(item => `
                    <div class="content-card" data-modal="${item.id}">
                        <div class="card-image">
                            <img src="${item.image}" alt="${item.title}">
                        </div>
                        <div class="card-content">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                            <button class="card-btn">
                                Learn More
                                <i data-lucide="arrow-right"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Insert before contact section
    const contactSection = document.getElementById('contact');
    contactSection.parentNode.insertBefore(section, contactSection);
}

// Add content data for additional sections
Object.assign(contentData, {
    'himalayas': {
        title: 'The Himalayas - Roof of the World',
        description: 'Home to Mount Everest and eight of the world\'s highest peaks.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "The Himalayan region of Nepal is home to eight of the world's fourteen highest peaks, including Mount Everest (8,848m). This region offers breathtaking landscapes, unique Sherpa culture, and some of the world's most challenging and rewarding trekking experiences. From the Everest Base Camp trek to the remote valleys of Dolpo, the Himalayas provide adventure seekers with unforgettable experiences amidst stunning natural beauty. The region is also home to rare wildlife like the snow leopard and unique alpine vegetation that has adapted to extreme altitudes."
    },
    'hill-region': {
        title: 'Hill Region - Cultural Heart',
        description: 'Terraced fields, ancient cities, and the cultural heart of Nepal.',
        image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "The Hill Region is the cultural and political heart of Nepal, home to the capital Kathmandu and other historic cities like Pokhara and Gorkha. This region features terraced hillsides that create stunning agricultural landscapes, traditional villages where ancient customs are preserved, and a rich cultural heritage spanning millennia. The moderate climate and diverse landscapes make it ideal for cultural tours, moderate trekking, and experiencing traditional Nepali life in its most authentic form."
    },
    'terai-region': {
        title: 'Terai Region - Wildlife Paradise',
        description: 'Fertile plains, wildlife sanctuaries, and diverse ethnic communities.',
        image: 'https://images.unsplash.com/photo-1564594985645-4b6d6ac5dfb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "The Terai region, Nepal's southern lowlands, is a biodiversity hotspot featuring lush forests, grasslands, and some of Asia's best wildlife viewing opportunities. Home to Chitwan and Bardia National Parks, this region offers incredible wildlife experiences including Bengal tigers, one-horned rhinoceros, and hundreds of bird species. The Terai is also culturally rich, with diverse ethnic communities including the Tharu people maintaining their unique traditions."
    },
    // Heritage content
    'kathmandu-durbar': {
        title: 'Kathmandu Durbar Square',
        description: 'Ancient royal palace complex with stunning architecture.',
        image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Kathmandu Durbar Square is a UNESCO World Heritage Site that showcases the best of Nepalese art and architecture. This ancient royal palace complex features intricately carved wooden temples, pagodas, and courtyards that date back to the 12th century. The square houses the old royal palace of the former Kathmandu Kingdom and includes temples dedicated to Hindu deities. Despite damage from the 2015 earthquake, ongoing restoration efforts continue to preserve this magnificent example of traditional Nepali craftsmanship."
    },
    'boudhanath-stupa': {
        title: 'Boudhanath Stupa',
        description: 'One of the largest Buddhist stupas in the world.',
        image: 'https://images.unsplash.com/photo-1565022788688-ac3fb3b34b85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Boudhanath Stupa is one of the largest Buddhist stupas in the world and a focal point for Tibetan Buddhism in Nepal. This magnificent white dome, topped with a square tower bearing the eyes of Buddha, has been a pilgrimage site for centuries. The stupa is surrounded by monasteries and is a center for the Tibetan refugee community, making it a living heritage site where ancient traditions continue to thrive."
    },
    'sagarmatha-park': {
        title: 'Sagarmatha National Park',
        description: 'Home to Mount Everest and unique Himalayan ecosystem.',
        image: 'https://images.unsplash.com/photo-1544966821-ac76014d8b29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Sagarmatha National Park, home to Mount Everest, is a UNESCO World Heritage Site that protects the unique ecosystem of the high Himalayas. The park encompasses dramatic mountains, glaciers, and valleys, while preserving the culture of the Sherpa people. It's a testament to the coexistence of natural wonder and human heritage, offering visitors a chance to experience both the world's highest peak and the remarkable culture that has thrived in its shadow."
    },
    'lumbini': {
        title: 'Lumbini - Birthplace of Buddha',
        description: 'Sacred pilgrimage site where Buddha was born.',
        image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Lumbini, located in the Terai region, is the birthplace of Siddhartha Gautama, who later became Buddha. This UNESCO World Heritage Site is one of the most important Buddhist pilgrimage destinations in the world. The sacred garden contains the exact spot where Buddha was born, marked by the Ashokan pillar erected by Emperor Ashoka in 249 BC. The site features ancient ruins, monasteries built by different Buddhist nations, and the sacred Bodhi tree."
    },
    // Tourism content
    'trekking': {
        title: 'World-Class Trekking',
        description: 'Epic mountain trails and stunning vistas.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800',
        content: "Nepal offers some of the world's best trekking experiences, from the famous Everest Base Camp and Annapurna Circuit treks to lesser-known but equally stunning routes like Manaslu and Upper Mustang. Trekking in Nepal combines breathtaking mountain scenery with cultural immersion, as routes pass through traditional villages where you can experience authentic mountain hospitality. Each trek offers unique experiences - from rhododendron forests in spring to clear mountain views in autumn."
    },
    'mountaineering': {
        title: 'Mountaineering Paradise',
        description: 'Challenge yourself on the world\'s highest peaks.',
        image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Nepal is the premier mountaineering destination in the world, home to 8 of the 14 peaks over 8,000 meters. Mount Everest, the world's highest peak, attracts climbers from around the globe, but Nepal also offers numerous other challenging peaks like Annapurna, Manaslu, and Cho Oyu. The country provides excellent mountaineering infrastructure with experienced Sherpa guides, high-quality equipment rental, and comprehensive support services."
    },
    'wildlife-safari': {
        title: 'Wildlife Safari Adventures',
        description: 'Encounter tigers, rhinos, and exotic wildlife.',
        image: 'https://images.unsplash.com/photo-1564594985645-4b6d6ac5dfb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Nepal's national parks offer some of Asia's best wildlife viewing opportunities. Chitwan National Park is famous for its Bengal tigers, one-horned rhinoceros, and diverse bird species. Bardia National Park provides a more remote wilderness experience with excellent tiger sightings and elephant encounters. Safari activities include jungle walks, canoe trips, elephant safaris, and jeep drives."
    },
    'adventure-sports': {
        title: 'Extreme Adventure Sports',
        description: 'Paragliding, white water rafting, and bungee jumping.',
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Nepal offers thrilling adventure sports beyond trekking and mountaineering. Pokhara is famous for paragliding with stunning views of the Annapurna range and Phewa Lake. The country's rivers provide world-class white water rafting experiences, from gentle family floats to extreme technical rapids. Nepal is also home to one of the world's highest bungee jumps at Bhote Koshi."
    },
    // History content
    'ancient-kingdoms': {
        title: 'Ancient Kingdoms',
        description: 'The rise of powerful kingdoms in the Kathmandu Valley.',
        image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Nepal's history spans over millennia, with the Kathmandu Valley being inhabited since the Neolithic period. The Kirat dynasty ruled the valley from around 800 BC, followed by the Licchavi period (400-750 AD) which saw the introduction of Hinduism and Buddhism. The medieval period witnessed the rise of the Malla kingdoms, which created the magnificent art and architecture that defines Nepal today."
    },
    'unification': {
        title: 'Unification of Nepal',
        description: 'Prithvi Narayan Shah\'s campaign to unite the kingdoms.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "The modern nation of Nepal was created through the military campaigns of Prithvi Narayan Shah of Gorkha in the 18th century. Starting in 1743, he systematically conquered the small kingdoms of the region, including the three Malla kingdoms of the Kathmandu Valley. His vision was to create a unified Nepal as a 'true land of Hindus' between the British colonial territories and Chinese Tibet."
    },
    'modern-nepal': {
        title: 'Modern Democratic Nepal',
        description: 'Transition from monarchy to federal democratic republic.',
        image: 'https://images.unsplash.com/photo-1554818343-3b27c6d14d39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        content: "Nepal's transition to democracy began with the 1990 People's Movement that ended the Panchayat system and restored multiparty democracy. The country faced a decade-long civil war (1996-2006) before achieving peace through the Comprehensive Peace Agreement. In 2008, Nepal officially became a federal democratic republic, ending centuries of monarchy. The new constitution adopted in 2015 established Nepal as a secular, federal state."
    }
});

// Initialize the website after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Re-initialize Lucide icons for all content
    lucide.createIcons();
    
    // Add event listeners for all content cards
    document.querySelectorAll('.content-card').forEach(card => {
        if (!card.hasAttribute('data-listener-added')) {
            card.addEventListener('click', () => {
                const modalKey = card.getAttribute('data-modal');
                openModal(modalKey);
            });
            card.setAttribute('data-listener-added', 'true');
        }
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll event
window.addEventListener('scroll', debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
}, 10));