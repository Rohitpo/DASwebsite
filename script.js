// Language translations
const translations = {
    en: {
        home: "Home",
        gallery: "Gallery",
        shop: "Shop",
        about: "About",
        contact: "Contact",
        reviews: "Reviews",
        howitsmade: "How it's made"
    },
    ta: {
        home: "முகப்பு",
        gallery: "தொகுப்பு",
        shop: "கடை",
        about: "எங்களை பற்றி",
        contact: "தொடர்பு",
        reviews: "விமர்சனங்கள்",
        howitsmade: "எப்படி செய்யப்படுகிறது"
    },
    te: {
        home: "హోమ్",
        gallery: "గ్యాలరీ",
        shop: "షాప్",
        about: "మా గురించి",
        contact: "సంప్రదించండి",
        reviews: "సమీక్షలు",
        howitsmade: "ఎలా తయారు చేస్తారు"
    },
    hi: {
        home: "होम",
        gallery: "गैलरी",
        shop: "दुकान",
        about: "हमारे बारे में",
        contact: "संपर्क करें",
        reviews: "समीक्षाएं",
        howitsmade: "कैसे बनाया जाता है"
    }
};

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Language switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update nav links if they exist
            document.querySelectorAll('.nav-links a').forEach(link => {
                const text = link.innerText.trim();
                const key = Object.keys(translations.en).find(k => translations.en[k] === text);
                if (key && translations[lang][key]) {
                    link.innerText = translations[lang][key];
                }
            });
            
            // Save language preference
            localStorage.setItem('preferredLang', lang);
        });
    });
    
    // Load saved language
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        const btn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
        if (btn) btn.click();
    }
    
    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            const navActions = document.querySelector('.nav-actions');
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
                if (navActions) navActions.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.width = '100%';
                if (navActions) {
                    navActions.style.display = 'flex';
                    navActions.style.width = '100%';
                }
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== "#" && href !== "") {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
