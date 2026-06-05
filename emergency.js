

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

// Initialize AOS
AOS.init({
    duration: 1200,   // Animation speed
    once: true,       // Animate only once
    offset: 100,      // Trigger 100px before element enters view
    easing: 'ease-in-out'
});

























// document.addEventListener('DOMContentLoaded', () => {

//     // Select all call buttons
//     const targetCallBadges =
//         document.querySelectorAll('.call-number');

//     targetCallBadges.forEach(badgeElement => {

//         badgeElement.addEventListener('click', (actionEvent) => {

//             // Get service name
//             const correspondingAgency =
//                 actionEvent.target.getAttribute('data-service');

//             // Get phone number
//             const targetPhoneNumber =
//                 actionEvent.target.innerText;

//             // Alert message
//             alert(`🚨 SECURE LINE INITIATED 🚨
// Connecting seamlessly to: ${correspondingAgency}
// Dialing: ${targetPhoneNumber}`);

//             // Console message
//             console.log(
//                 `System Log: Outbound simulated relay connected for: ${correspondingAgency}`
//             );

//         });

//     });

// });