// Main JavaScript file for the portfolio
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initial Page Load (Loader)
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);

    // 2. Render Projects
    const renderProjects = () => {
        const projectsGrid = document.querySelector('.projects-grid');
        projectsGrid.innerHTML = ''; // Clear hardcoded content
        
        PORTFOLIO_DATA.projects.forEach(project => {
            const techSpans = project.techStack.map(tech => `<span>${tech}</span>`).join('');
            
            const projectHTML = `
                <div class="project-card">
                    <div class="project-image-placeholder">
                        <i class="${project.imageIcon} fa-3x"></i>
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <div class="tech-stack">
                            ${techSpans}
                        </div>
                        <p>${project.description}</p>
                        <a href="${project.link}" class="project-link" target="_blank">View Details <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
            projectsGrid.insertAdjacentHTML('beforeend', projectHTML);
        });
    };

    // 3. Render Experience & Education
    const renderExperience = () => {
        const timeline = document.querySelector('.timeline');
        timeline.innerHTML = ''; // Clear hardcoded content
        
        PORTFOLIO_DATA.experience.forEach(item => {
            const expHTML = `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content box-glass">
                        <span class="date">${item.period}</span>
                        <h3>${item.title}</h3>
                        <p class="institution">${item.institution}</p>
                        <p class="gpa">${item.description}</p>
                    </div>
                </div>
            `;
            timeline.insertAdjacentHTML('beforeend', expHTML);
        });
    };

    // 4. Render Skills
    const renderSkills = () => {
        const skillsGrid = document.querySelector('.skills-grid');
        skillsGrid.innerHTML = ''; // Clear hardcoded content
        
        PORTFOLIO_DATA.skills.forEach(skill => {
            const skillHTML = `
                <div class="skill-item box-glass">
                    <i class="${skill.icon}"></i>
                    <span>${skill.name}</span>
                </div>
            `;
            skillsGrid.insertAdjacentHTML('beforeend', skillHTML);
        });
    };

    // 5. Render Contact Details
    const renderContact = () => {
        const contactDetailsContainer = document.querySelector('.contact-details');
        const socialLinksContainer = document.querySelector('.social-links');
        
        contactDetailsContainer.innerHTML = `
            <a href="mailto:${PORTFOLIO_DATA.contact.email}" class="contact-item">
                <div class="icon-circle"><i class="fas fa-envelope"></i></div>
                <span>${PORTFOLIO_DATA.contact.email}</span>
            </a>
            <a href="tel:${PORTFOLIO_DATA.contact.phone.replace(/\s+/g, '')}" class="contact-item">
                <div class="icon-circle"><i class="fas fa-phone"></i></div>
                <span>${PORTFOLIO_DATA.contact.phone}</span>
            </a>
        `;
        
        socialLinksContainer.innerHTML = `
            <a href="${PORTFOLIO_DATA.contact.linkedin}" target="_blank" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            <!-- Keep GitHub icon but only active if link exists -->
            <a href="${PORTFOLIO_DATA.contact.github}" target="_blank" class="social-icon" ${PORTFOLIO_DATA.contact.github === '#' ? 'style="display:none;"' : ''}><i class="fab fa-github"></i></a>
        `;
    };

    // Initialize all renders
    renderProjects();
    renderExperience();
    renderSkills();
    renderContact();
    
    // 6. Typing Effect for Hero Subtitle
    const typingTextElement = document.querySelector('.typing-text');
    const textToType = typingTextElement.textContent;
    typingTextElement.textContent = ''; // clear initial content
    let charIndex = 0;
    
    const type = () => {
        if (charIndex < textToType.length) {
            typingTextElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(type, 80); // Speed of typing
        }
    };
    
    // Start typing after loader finishes (1.2s delay)
    setTimeout(type, 1200);

    // 7. Scroll Animations for Sections & Elements
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // We keep observing in case user scrolls back up, or uncomment to animate only once:
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Apply observer to section titles, project cards, timeline items, and skills
    const elementsToAnimate = document.querySelectorAll('.section-title, .project-card, .timeline-item, .skill-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('section-animate');
        sectionObserver.observe(el);
    });

    // 8. Highlight Navbar on Scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 9. Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('nav-active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('nav-active');
        });
    });

    console.log('Portfolio initialized with dynamic data and animations!');
});
