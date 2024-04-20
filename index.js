document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.querySelector("form");
    const heading = document.getElementById("hello");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const color = document.getElementById("name").value;
        heading.style.color = color;
        document.getElementById("name").value = "";
    });

});    
