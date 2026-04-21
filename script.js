// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const checkbox = item.querySelector('.faq-checkbox');
        const label = item.querySelector('label');
        
        label.addEventListener('click', function(e) {
            e.preventDefault();
            checkbox.checked = !checkbox.checked;
            
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-checkbox').checked = false;
                }
            });
        });
    });

    // Form submission handling
    const contactForms = document.querySelectorAll('form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('input');
            let allFilled = true;
            
            inputs.forEach(input => {
                if (input.type !== 'submit' && !input.value.trim()) {
                    allFilled = false;
                    input.style.borderColor = '#ff6b6b';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (allFilled) {
                alert('Obrigado pelo contato! Em breve entraremos em contato com você.');
                form.reset();
                inputs.forEach(input => {
                    input.style.borderColor = '#ddd';
                });
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.beneficio, .depoimento, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Video placeholder click handling
document.querySelectorAll('.video-placeholder, .video-placeholder-large').forEach(video => {
    video.addEventListener('click', function() {
        alert('Aqui você pode adicionar um vídeo real usando um player como YouTube, Vimeo, etc.');
    });
});
