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
