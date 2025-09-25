document.addEventListener("mousedown", function(e) {
    const tag = e.target.tagName.toLowerCase();

    if (tag !== "input" && tag !== "textarea" && tag !== "a" && !e.target.isContentEditable) {
        e.preventDefault();
    }
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



