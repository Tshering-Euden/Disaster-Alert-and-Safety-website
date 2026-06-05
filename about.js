
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Open / Close menu
menuBtn.addEventListener("click", function(e){

    e.stopPropagation();

    if(navMenu.classList.contains("active")){
        navMenu.classList.remove("active");
    }else{
        navMenu.classList.add("active");
    }

});

// Close menu when cursor/click is outside
document.addEventListener("click", function(e){

    if(
        !navMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ){
        navMenu.classList.remove("active");
    }

});






console.log("Disaster Mission & Vision Page Loaded Successfully!");

const cards = document.querySelectorAll(".flip-card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        console.log("Card Flipped");
    });
});