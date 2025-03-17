const service = [
    { name: "Panaflex Build Up Acrylic Stainless", category: "Singages" },
    { name: "GI Sheet", category: "Signages" },
    { name: "Pylon Signage", category: "Singages" },
    { name: "Directional Signages", category: "Signages" }
];

const searchBar = document.getElementById("search-bar");
const searchResults = document.getElementById("search-results");

searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredServices = services.filter(service => {
        return (
            service.name.toLowerCase().includes(searchTerm) ||
            service.category.toLowerCase().includes(searchTerm)
        );
    });
    searchResults.innerHTML = "";
    if (filteredServices.length > 0) {
        filteredServices.forEach(service => {
            const serviceElement = document.createElement("div");
            serviceElement.innerHTML = `
            <h3>${service.name}</h3>
            <p>Category: ${service.category}</p>
            `;
            searchResults.appendChild(serviceElement);
        });
    } else {
        searchResults.innerHTML = "<p>No services found.</p>";
    }
});

/* Link between Pages */

/* Expand images - See more button */

const expandButton = document.getElementById('expandButton');
const imagePlaceholder = document.getElementById('imagePlaceholder');

expandButton.addEventListener('click', () => {
    imagePlaceholder.classList.toggle('expanded');

});

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";

    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

document.getElementById("back-to-top").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    });
});