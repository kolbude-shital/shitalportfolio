/* CUSTOM CURSOR */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

/* BUTTON CLICK ANIMATION */
document.querySelector(".magic-btn").addEventListener("click", () => {
    cursor.style.transform = "scale(2)";
    setTimeout(() => {
        cursor.style.transform = "scale(1)";
    }, 200);
});

/* DARK / LIGHT TOGGLE */
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* SCROLL REVEAL EFFECT */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.classList.add("active");
        }
    });
});




