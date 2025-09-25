document.addEventListener("mousedown", function(e) {
    const tag = e.target.tagName.toLowerCase();

    if (tag !== "input" && tag !== "textarea" && !e.target.isContentEditable) {
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





const reviews = [
    {
        text: "Very responsive and efficient",
        author: "Doug T.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Called the day after I posted inquiry, performed the task the day after that. Extremely courteous and picked up after themselves.",
        author: "Thomas E.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Great, timely, electrical outlet install to kitchen island. Plan to use him again!",
        author: "Robert E.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Excellent! Stayed in contact from day 1, showed up on time on appointment day! Fast, courteous, professional! Highly recommend, would hire him again in a minute!",
        author: "Paula A.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "A+ all the way! Arrived as promised, finished as promised. Can&#39;t ask for anything better than that.",
        author: "Lauren W.",
        rating: 4.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Quick quote, quick work.",
        author: "Ken W.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Came when they said. Did the work promptly. Courteous and professional. Will have them do more work.",
        author: "Matt D.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Jesse was very helpful and they cleaned up after themselves. I am very happy with the outcome. I use them again for sure.",
        author: "Freda L.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Nice guy very personable",
        author: "Andre B.",
        rating: 4.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "They arrived on time, completed the work accurately and were a pleasure to work with. I will use them again for sure.",
        author: "Cheryl C.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Was a great experience all around. Jease responded quickly with his availability. He came out and looked at the work to be done and I received a quote that night. He treated my house as if it was his own. He is also very neat and tidy. Jesse s quality of work is outstanding. He added an extra panel to existing box for future expansion. Jesse can do a basic outlet installed to a new construction house being completely wired. I highly recommend him for any electrical needs. A+++",
        author: "David K.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Jesse was outstanding. On time, professional, did a number of new projects in our new home and even a few new ones we came upon during his visit. He complted everything on time and his work was excellent. He was courteous and got the job done. We are very happy with his work. I will use him again!",
        author: "David C.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "On time, Very reasonably $. Fixed electrical issue with my garage and generator. I would hire again! Jon in Kittery, ME",
        author: "Jon T.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "I would hire Jesse again and I would also recommend him. He arrived early went right to job at hand and that is what I look for in a person that I hire to do a job. Thank you again Jesse",
        author: "Cathy F.",
        rating: 4.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Jesse was very courteous, timely and efficient. He was agreeable to my 'add-on' electrical requests and completed everything very fast. THIS GUY IS GREAT!!!!!",
        author: "Judy P.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Jesse was flat-out AWESOME, and in every regard. He saved me OCEANS of money...and a ton of time and trouble. He agreed to come really early on a Saturday to accommodate my schedule ~ I sleep days and work nights ~ in order to look at my current ceiling fan and provide a quote for removing it and installing a new one: My fan was stuck in \"On\" mode, you see, because the pull chain had ridden up inside!! Jesse took about 3 seconds to show me ~ I am NOT the handiest guy in the world!! ~ that you can actually unscrew the bottom of the fan and get the chain back!! Instead of sucking my bank account dry by playing dumb and seeing how much money he could negotiate for the removal and installation ~ in addition to which of course I'd be purchasing the new fan ~ he took care of the customer in about 3 seconds and saved me tons of time and money!!! I CANNOT offer him enough praise. Thank you, Jesse!!",
        author: "Christopher B.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "I was very impressed with Jesse Wright. He called me immediately after I put my request in to home advisor. He was able to fix my problem the next day, a Sunday and charged his normal fee which I thought very reasonable. I will definitely call him again with any electrical issues.",
        author: "Nancy C.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Jesse to the rescue! I had called 3 other electricians but because the job was small, no one had the courtesy to return my call. Jessie texted me and we set up a time to have a thermostat upgraded. He arrived on time and got right to work - unfortunately, the programmable thermostat I purchased was the wrong one! Jesse drove to Home Depot, found the right one, came back and installed it quickly. He offered to program it for me (that I could do). He has a great customer service ethic, going out of his way to make sure the job is done correctly. Highly recommend him - no job is too small!",
        author: "Peggy M.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Jesse is awesome clean tidy early efficient!",
        author: "Alix L.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Jesse Wright Electrical and Solar is a top notch company. Jesse is professional, and knowledgeable. He arrived on time, and does what he says he going to do. He does very thorough work, and completes job on schedule.",
        author: "Glen W.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "I shopped around and Jesse was was the most reasonable. My project was time sensitive and he got right on my project in timely manner.",
        author: "Terry L.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    },
    {
        text: "Jesse was on time, accurate, and more than fairly priced. He removed, inspected, and reassembled a ceiling fan, did the same for the fixture's controller, replaced a bath exhaust fan, cleaned the bath fan ductwork, replaced the exhaust damper, and replaced an outdoor security light. He was thorough, efficient, and cleaned up after his work. I highly recommend him for any household electrical work.",
        author: "Rick C.",
        rating: 5.0,
        source: "https://www.homeadvisor.com/rated.JesseWrightElectrical.34552904.html#reviews"
    }
];



function displayReviews() {
    const container = document.getElementById("reviews-container");
    container.innerHTML = "";

    reviews.forEach(review => {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review");

        // Optional stars
        const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

        reviewCard.innerHTML = `
        <p class="review-text">"${review.text}"</p>
        <p class="review-name">- ${review.author}</p>
        <p class="review-rating">${stars}</p>
        `;

        container.appendChild(reviewCard);
    });
}

document.addEventListener("DOMContentLoaded", displayReviews);