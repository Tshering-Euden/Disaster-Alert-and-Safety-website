
// const menuBtn = document.getElementById("menuBtn");
// const navMenu = document.getElementById("navMenu");

// // Open / Close menu
// menuBtn.addEventListener("click", function(e){

//     e.stopPropagation();

//     if(navMenu.classList.contains("active")){
//         navMenu.classList.remove("active");
//     }else{
//         navMenu.classList.add("active");
//     }

// });

// // Close menu when cursor/click is outside
// document.addEventListener("click", function(e){

//     if(
//         !navMenu.contains(e.target) &&
//         !menuBtn.contains(e.target)
//     ){
//         navMenu.classList.remove("active");
//     }

// });






const alertBtn = document.getElementById("alertBtn");

alertBtn.addEventListener("click", () => {
    // .trim() removes accidental empty spaces typed by users
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const sound = document.getElementById("audio");

    if (email === "" && phone === "") {
        alert("Please enter either an Email address or a Phone Number!");
    } else if (phone !== "" && !/^\d{8}$/.test(phone)) {
        alert("Phone number should be exactly 8 digits!")
    }else {
    alert("Disaster alert settings activated successfully!");
    if (sound) {
        sound.currentTime = 0;   // start from the beginning
        sound.play();

        // Stop the sound after 5 seconds
        setTimeout(() => {
            sound.pause();
            sound.currentTime = 0; // reset back to start
        }, 10000); // 5000 milliseconds = 5 seconds
    }
}
});

// Mobile Navbar Toggle (With safety check to prevent null errors)
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}