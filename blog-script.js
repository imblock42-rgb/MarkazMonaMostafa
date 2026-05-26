// Blog Like Functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeLikes();
    attachLikeListeners();
    loadThemePreference();
    initializeNavigation();
});

// Load and display like counts
function initializeLikes() {
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach(post => {
        const postId = post.getAttribute('data-post-id');
        const likes = getLikesForPost(postId);
        updateLikeDisplay(postId, likes);
    });
}

// Get likes from localStorage
function getLikesForPost(postId) {
    const blogLikes = localStorage.getItem('blogLikes');
    if (!blogLikes) {
        return 0;
    }
    const likes = JSON.parse(blogLikes);
    return likes[postId] || 0;
}

// Set likes to localStorage
function setLikesForPost(postId, count) {
    let blogLikes = localStorage.getItem('blogLikes');
    const likes = blogLikes ? JSON.parse(blogLikes) : {};
    likes[postId] = count;
    localStorage.setItem('blogLikes', JSON.stringify(likes));
}

// Update the like button display
function updateLikeDisplay(postId, count) {
    const likeButton = document.querySelector(`.like-button[data-post-id="${postId}"]`);
    if (likeButton) {
        const countElement = likeButton.querySelector('.like-count');
        countElement.textContent = count;
        
        // Check if user has already liked this post
        const userLikes = getUserLikes();
        if (userLikes.includes(postId)) {
            likeButton.classList.add('is-liked');
        } else {
            likeButton.classList.remove('is-liked');
        }
    }
}

// Get user's liked posts
function getUserLikes() {
    const userLikes = localStorage.getItem('userLikes');
    return userLikes ? JSON.parse(userLikes) : [];
}

// Set user's liked posts
function setUserLikes(likes) {
    localStorage.setItem('userLikes', JSON.stringify(likes));
}

// Attach click listeners to like buttons
function attachLikeListeners() {
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', handleLike);
    });
}

// Handle like button click
function handleLike(e) {
    e.preventDefault();
    const postId = this.getAttribute('data-post-id');
    const userLikes = getUserLikes();
    
    if (userLikes.includes(postId)) {
        // Unlike
        userLikes.splice(userLikes.indexOf(postId), 1);
        const currentLikes = getLikesForPost(postId);
        setLikesForPost(postId, Math.max(0, currentLikes - 1));
    } else {
        // Like
        userLikes.push(postId);
        const currentLikes = getLikesForPost(postId);
        setLikesForPost(postId, currentLikes + 1);
    }
    
    setUserLikes(userLikes);
    updateLikeDisplay(postId, getLikesForPost(postId));
}

// Theme toggle functionality
function loadThemePreference() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (prefersDark && !savedTheme)) {
        document.body.classList.add('dark-theme');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Mobile menu functionality
function initializeNavigation() {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');
    const siteHeader = document.querySelector('.site-header');
    
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            siteHeader.classList.toggle('is-open');
        });
    }
    
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (siteHeader) {
                    siteHeader.classList.remove('is-open');
                }
            });
        });
    }
}

// Language switching (basic implementation)
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-button');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            langButtons.forEach(btn => btn.classList.remove('is-active'));
            this.classList.add('is-active');
            const lang = this.getAttribute('data-lang');
            localStorage.setItem('language', lang);
            // Here you would implement language switching logic
        });
    });
});

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.05
    });
    
    reveals.forEach(element => {
        // Check if element is already in view (for initial page load)
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('is-visible');
        }
        observer.observe(element);
    });
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(revealOnScroll, 100);
});
