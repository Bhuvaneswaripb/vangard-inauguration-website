const events = [
    {
        name: "Valorant Showmatch",
        category: "Competitive",
        icon: "🎯",
        description: "Watch an exciting Valorant showdown between skilled players."
    },

    {
        name: "BGMI Blitz Tournament",
        category: "Competitive",
        icon: "🔫",
        description: "Fast-paced BGMI battles with players competing for the top spot."
    },

    {
        name: "FIFA Open LAN",
        category: "Competitive",
        icon: "⚽",
        description: "Challenge your friends in an exciting FIFA tournament."
    },

    {
        name: "Console Gaming Lounge",
        category: "Interactive",
        icon: "🎮",
        description: "Relax, play and enjoy a variety of console games."
    },

    {
        name: "VR Experience Zone",
        category: "Interactive",
        icon: "🥽",
        description: "Experience immersive virtual worlds using VR."
    },

    {
        name: "Community Fun Games",
        category: "Interactive",
        icon: "🎲",
        description: "Fun games designed to bring everyone together."
    },

    {
        name: "Keynote by Guest YouTuber",
        category: "Special Highlights",
        icon: "🎤",
        description: "Listen to a gaming creator talk about gaming and digital culture."
    },

    {
        name: "Official Logo Launch",
        category: "Special Highlights",
        icon: "🚀",
        description: "Witness the official launch of the Vanguard identity."
    },

    {
        name: "Ribbon Cutting & Core Team Introduction",
        category: "Special Highlights",
        icon: "✂️",
        description: "Meet the core team and celebrate the beginning of Vanguard."
    }
];


const container = document.getElementById("event-container");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".filter");

let selectedCategory = "All";


function displayEvents() {

    container.innerHTML = "";

    const searchText = search.value.toLowerCase();

    const filteredEvents = events.filter(function (event) {

        const matchesCategory =
            selectedCategory === "All" ||
            event.category === selectedCategory;

        const matchesSearch =
            event.name.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });


    filteredEvents.forEach(function (event) {

        const card = document.createElement("div");

        card.classList.add("event-card");

        card.innerHTML = `
            <div class="event-icon">
                ${event.icon}
            </div>

            <h3>${event.name}</h3>

            <p>${event.description}</p>

            <small>${event.category}</small>
        `;

        container.appendChild(card);
    });
}


/* Category buttons */

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        buttons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        displayEvents();
    });

});


/* Search */

search.addEventListener("input", function () {

    displayEvents();

});


/* Display events when page loads */

displayEvents();
// FAQ functionality

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {

    const question = item.querySelector("h3");
    const answer = item.querySelector("p");

    question.addEventListener("click", function () {

        answer.classList.toggle("show");

    });

});