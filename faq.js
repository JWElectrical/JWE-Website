document.addEventListener("mousedown", function(e) {
    const tag = e.target.tagName.toLowerCase();

    if (tag !== "input" && tag !== "textarea" && !e.target.isContentEditable) {
        e.preventDefault();
    }
});


const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;

        header.classList.toggle("active");
        content.classList.toggle("open");

        if (content.classList.contains("open")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});

document.getElementById("quote-btn").addEventListener("click", function() {
    window.location.href = "contact.html";
});

const menuBtn = document.getElementById("menu-icon");
const mobileNav = document.getElementById("mobile-nav");

menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        mobileNav.classList.remove("active");
    }
});