document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.getElementById("navbar");
    const sections = document.querySelectorAll("main section");
    const navLinks = [
        { name: "Home", id: "home" },
        { name: "About Us", id: "about" },
        { name: "Products", id: "products" },
        { name: "Blog", id: "blog" },
        { name: "Contact Us", id: "contact" }
    ];
    
    let navList = document.createElement("ul");
    navLinks.forEach(link => {
        let listItem = document.createElement("li");
        let anchor = document.createElement("a");
        anchor.href = "#";
        anchor.textContent = link.name;
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            sections.forEach(sec => sec.style.display = "none");
            document.getElementById(link.id).style.display = "block";
        });
        listItem.appendChild(anchor);
        navList.appendChild(listItem);
    });
    navBar.appendChild(navList);
});