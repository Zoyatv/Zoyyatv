// Dynamic Greeting Based on Time with Animation
window.onload = () => {
    const hours = new Date().getHours();
    let greeting;
    if (hours < 12) {
        greeting = "Good Morning, Cuties!";
    } else if (hours < 18) {
        greeting = "Good Afternoon, Cuties!";
    } else {
        greeting = "Good Evening, Cuties!";
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
    document.body.classList.toggle("dark-mode");
    modeToggleButton.textContent =
        document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    modeToggleButton.style.transform = "rotate(180deg)";
    setTimeout(() => modeToggleButton.style.transform = "rotate(0deg)", 300);
};
document.body.append(modeToggleButton);

// Dark Mode Styling with Smooth Transitions
const darkModeStyle = document.createElement("style");
darkModeStyle.innerHTML = `
    .dark-mode {
        background: linear-gradient(135deg, #2c2c54, #1e272e);
        color: #dcdde1;
        transition: background 0.3s ease, color 0.3s ease;
    }
    .dark-mode .button {
        background: linear-gradient(90deg, #2c3e50, #4ca1af);
    }
    .dark-mode .description {
        color: #dcdde1;
    }
    .dark-mode footer a {
        color: #4ca1af;
    }
`;
document.head.append(darkModeStyle);

// Sparkly Background Effect (Optional)
const sparkles = () => {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    document.body.append(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
};

setInterval(sparkles, 1000);
function adjustViewport() {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0';
        document.head.appendChild(meta);
    } else {
        viewportMeta.content = 'width=device-width, initial-scale=1.0';
    }
}

adjustViewport();
