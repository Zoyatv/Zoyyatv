// java script is adding the dark and light mode feature ,voice effect on hover and good night,moring stuff etc..
// Adjust the viewport meta tag for responsive sizing
function adjustViewport() 
{
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) 
        {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(meta);
    } 
    else
     {
        viewportMeta.content = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
    }
}

// Call the function to ensure proper sizing
adjustViewport();

// Other JS code remains unchanged

// Dynamic Greeting Based on Time with Animation
window.onload = () => {
    const hours = new Date().getHours();
    let greeting;
    if (hours >= 0 && hours < 5) {
        greeting = "Good Night, Cuties!";
    } else if (hours >= 5 && hours < 8) {
        greeting = "Good Morning, Cuties!";
    } else if (hours >= 8 && hours < 12) {
        greeting = "Good Morning, Cuties!";
    } else if (hours >= 12 && hours < 15) {
        greeting = "Good Afternoon, Cuties!";
    } else if (hours >= 15 && hours < 17) {
        greeting = "Good Afternoon, Cuties!";
    } else if (hours >= 17 && hours < 20) {
        greeting = "Good Evening, Cuties!";
    } else {
        greeting = "Good Night, Cuties!";
    }

    const greetingElement = document.createElement("p");
    greetingElement.textContent = greeting;
    greetingElement.style.fontSize = "3em";
    greetingElement.style.color = "#ff69b4";
    greetingElement.style.marginTop = "20px";
    greetingElement.style.textAlign = "center";
    greetingElement.style.opacity = "0";
    greetingElement.style.transition = "opacity 1s ease-in-out";
    document.body.prepend(greetingElement);

    // Fade-in animation for greeting
    setTimeout(() => {
        greetingElement.style.opacity = "1";
    }, 500);
};

// Floating Emojis with Smooth Animation
document.querySelectorAll(".emoji").forEach((emoji) => {
    const randomFloat = () => Math.random() * 100;
    const randomRotate = () => Math.random() * 360;

    const animateEmoji = () => {
        emoji.style.left = `${randomFloat()}%`;
        emoji.style.top = `${randomFloat()}%`;
        emoji.style.transform = `rotate(${randomRotate()}deg)`;
        emoji.style.transition = "left 2s, top 2s, transform 2s ease-in-out";
    };
    setInterval(animateEmoji, 4000);
});

// Scroll-to-Top Button with Hover Effect
const scrollToTopButton = document.createElement("button");
scrollToTopButton.textContent = "↑";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.padding = "12px 20px";
scrollToTopButton.style.borderRadius = "50%";
scrollToTopButton.style.backgroundColor = "#ff69b4";
scrollToTopButton.style.color = "#fff";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.fontSize = "2em";
scrollToTopButton.style.cursor = "pointer";
scrollToTopButton.style.display = "none";
scrollToTopButton.style.boxShadow = "0 8px 16px rgba(255, 105, 180, 0.8)";
scrollToTopButton.style.transition = "background-color 0.3s, transform 0.3s";

// Hover effect for the button
scrollToTopButton.onmouseenter = () => {
    scrollToTopButton.style.backgroundColor = "#ff1493";
    scrollToTopButton.style.transform = "scale(1.1)";
};
scrollToTopButton.onmouseleave = () => {
    scrollToTopButton.style.backgroundColor = "#ff69b4";
    scrollToTopButton.style.transform = "scale(1)";
};

scrollToTopButton.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
document.body.append(scrollToTopButton);

// Show the Scroll-to-Top Button When Scrolling
window.addEventListener("scroll", () => {
    scrollToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
});

// Hover Sound Effect for Buttons with Custom Sound
const hoverSound = new Audio("hover.mp3"); // Replace with your sound file URL
const clickSound = new Audio("click.mp3"); // Add click sound for buttons

document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("mouseover", () => hoverSound.play());
    button.addEventListener("click", () => clickSound.play());
});

// Light/Dark Mode Toggle with Transition
const modeToggleButton = document.createElement("button");
modeToggleButton.textContent = "🌙";
modeToggleButton.style.position = "fixed";
modeToggleButton.style.top = "20px";
modeToggleButton.style.right = "20px";
modeToggleButton.style.padding = "12px";
modeToggleButton.style.borderRadius = "50%";
modeToggleButton.style.backgroundColor = "#ff69b4";
modeToggleButton.style.color = "#fff";
modeToggleButton.style.border = "none";
modeToggleButton.style.cursor = "pointer";
modeToggleButton.style.fontSize = "2em";
modeToggleButton.style.transition = "transform 0.3s ease";

// Smooth mode toggle animation
modeToggleButton.onclick = () => {
    document.body.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    document.body.classList.toggle("dark-mode");
    
    // Smoother icon rotation
    modeToggleButton.style.transition = "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    modeToggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    modeToggleButton.style.transform = "rotate(360deg)";
    
    // Reset transform after animation
    setTimeout(() => {
        modeToggleButton.style.transition = "none";
        modeToggleButton.style.transform = "rotate(0deg)";
    }, 600);
};
document.body.append(modeToggleButton);

// Dark Mode Styling with Smooth Transitions
const darkModeStyle = document.createElement("style");
darkModeStyle.innerHTML = `
    body, body * {
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .dark-mode {
        background: linear-gradient(135deg, #2c2c54, #1e272e);
        color: #dcdde1;
    }
    .dark-mode .button {
        background: linear-gradient(90deg, #2c3e50, #4ca1af);
    }
    .dark-mode .description {
        color: #ff69b4;
        text-shadow: 3px 3px 6px rgba(219, 39, 119, 0.4);
    }
    .dark-mode footer a {
        color: #4ca1af;
    }
    .dark-mode .profile-pic {
        border-color: #2c2c54;
        animation: glowDark 3s ease-in-out infinite !important;
    }
    .dark-mode .sparkle-text {
        color: #ff69b4;
        text-shadow: 2px 2px 4px rgba(219, 39, 119, 0.4);
    }

    /* Dark Mode Glow Animation with Deep Pink */
    @keyframes glowDark {
        0%, 100% {
            box-shadow: 
                0 0 20px rgba(190, 24, 93, 0.6),
                0 0 40px rgba(190, 24, 93, 0.4),
                0 0 60px rgba(190, 24, 93, 0.2),
                inset 0 0 30px rgba(190, 24, 93, 0.2);
        }
        50% {
            box-shadow: 
                0 0 30px rgba(190, 24, 93, 0.8),
                0 0 60px rgba(190, 24, 93, 0.6),
                0 0 90px rgba(190, 24, 93, 0.4),
                inset 0 0 50px rgba(190, 24, 93, 0.3);
        }
    }

    /* Footer Dark Mode Styles */
    body.dark-mode .kawaii-footer {
        background: linear-gradient(to right, #2c2c54, #1e272e, #2c2c54) !important;
        border-top: 5px solid #483d8b !important;
        color: #dcdde1 !important;
    }

    body.dark-mode .kawaii-footer::before {
        background-image: 
            radial-gradient(#483d8b 20%, transparent 20%),
            radial-gradient(#483d8b 20%, transparent 20%) !important;
        opacity: 0.15 !important;
    }

    body.dark-mode .footer-message {
        color: #ff69b4 !important;
        text-shadow: 0 0 5px rgba(255, 105, 180, 0.5) !important;
    }

    body.dark-mode .sparkle-link {
        color: #ff69b4 !important;
        background: linear-gradient(45deg, #2c2c54, #1e272e) !important;
        box-shadow: 0 2px 5px rgba(255, 105, 180, 0.3) !important;
    }

    body.dark-mode .sparkle-link:hover {
        color: #ff1493 !important;
        background: linear-gradient(45deg, #1e272e, #2c2c54) !important;
        box-shadow: 
            0 4px 8px rgba(255, 105, 180, 0.5),
            0 0 15px rgba(255, 105, 180, 0.3) !important;
        text-shadow: 0 0 8px rgba(255, 105, 180, 0.7) !important;
    }

    body.dark-mode .footer-decorations {
        color: #ff69b4 !important;
    }

    body.dark-mode .floating-emoji {
        filter: drop-shadow(0 0 3px rgba(255, 105, 180, 0.5)) !important;
    }

    body.dark-mode .beating-heart {
        filter: drop-shadow(0 0 5px rgba(255, 105, 180, 0.7)) !important;
    }

    @keyframes darkBeatHeart {
        0%, 100% { 
            transform: scale(1);
            filter: drop-shadow(0 0 5px rgba(255, 105, 180, 0.7));
        }
        50% { 
            transform: scale(1.2);
            filter: drop-shadow(0 0 8px rgba(255, 105, 180, 0.9));
        }
    }
`;

document.head.append(darkModeStyle);

// Enhanced Star Animation
document.querySelectorAll('.button').forEach(button => {
    const stars = button.querySelectorAll('.star');
    
    // Randomize initial positions
    stars.forEach(star => {
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
    });

    // Add hover effect with smooth transition
    button.addEventListener('mouseenter', () => {
        stars.forEach((star, index) => {
            setTimeout(() => {
                star.style.opacity = '1';
                star.style.transform = 'scale(1) rotate(0deg)';
            }, index * 100);
        });
    });

    // Smooth exit animation
    button.addEventListener('mouseleave', () => {
        stars.forEach((star, index) => {
            setTimeout(() => {
                star.style.opacity = '0';
                star.style.transform = 'scale(0.5) rotate(360deg)';
            }, index * 50);
        });
    });
});

// Kawaii Profile Effects
document.addEventListener('DOMContentLoaded', () => {
    const profileContainer = document.querySelector('.profile-container');
    const profilePic = document.querySelector('.profile-pic');
    const sparklesContainer = document.querySelector('.sparkles-container');

    // Add dynamic sparkles on hover
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-dynamic';
        sparkle.innerHTML = ['✦', '✧', '⋆', '✨'][Math.floor(Math.random() * 4)];
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        sparkle.style.fontSize = `${Math.random() * 10 + 10}px`;
        sparklesContainer.appendChild(sparkle);

        // Remove sparkle after animation
        setTimeout(() => sparkle.remove(), 1500);
    }

    // Kawaii hover sound effect
    const kawaiiBell = new Audio('path/to/kawaii-bell.mp3'); // Add your cute sound
    kawaiiBell.volume = 0.3;

    // Add interactive effects
    profileContainer.addEventListener('mousemove', (e) => {
        const rect = profileContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create sparkle at mouse position
        if (Math.random() > 0.8) {
            createSparkle();
        }

        // Tilt effect
        const tiltX = (y / rect.height - 0.5) * 10;
        const tiltY = (x / rect.width - 0.5) * -10;
        profilePic.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    profileContainer.addEventListener('mouseenter', () => {
        kawaiiBell.currentTime = 0;
        kawaiiBell.play();
        // Start continuous sparkle creation
        profileContainer.dataset.sparkling = 'true';
    });

    profileContainer.addEventListener('mouseleave', () => {
        profilePic.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        profileContainer.dataset.sparkling = 'false';
    });

    // Add floating hearts animation
    function createFloatingHeart() {
        if (profileContainer.dataset.sparkling !== 'true') return;
        
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '💖';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        profileContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => heart.remove(), 4000);
    }

    setInterval(createFloatingHeart, 300);
});
    

// Theme Management
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Set dark theme as default
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️'; // sun emoji for light mode option
    localStorage.setItem('theme', 'dark');

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Update button text and save preference
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
});

