document.addEventListener("mousedown", function(e) {
    const tag = e.target.tagName.toLowerCase();

    if (tag !== "input" && tag !== "textarea" && !e.target.isContentEditable && !e.target.closest('.swiper-slide img')) {
        e.preventDefault();
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
});

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const slides = Array.from(document.querySelectorAll('.swiper-slide img'));

let currentIndex = 0;

// Open modal
slides.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

  // Close modal
function closeModal() {
    modal.style.display = 'none';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
});

  // Navigation functions
function showNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    modalImg.src = slides[currentIndex].src;
}

function showPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    modalImg.src = slides[currentIndex].src;
}

modalNext.addEventListener('click', showNext);
modalPrev.addEventListener('click', showPrev);

  // Keyboard navigation
document.addEventListener('keydown', e => {
    if (modal.style.display !== 'flex') return;
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'Escape') closeModal();
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