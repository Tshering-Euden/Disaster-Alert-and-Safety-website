// const menuBtn = document.getElementById("menuBtn");
// const navMenu = document.getElementById("navMenu");

// // Open / Close menu
// menuBtn.addEventListener("click", function(e){

//     e.stopPropagation();
//     navMenu.classList.toggle("active");

// });

// // Close menu when clicking outside
// document.addEventListener("click", function(e){

//     if(
//         !navMenu.contains(e.target) &&
//         !menuBtn.contains(e.target)
//     ){
//         navMenu.classList.remove("active");

//         document.querySelectorAll(".dropdown").forEach(dropdown=>{
//             dropdown.classList.remove("open");
//         });
//     }

// });

// // Mobile dropdowns
// document.querySelectorAll(".dropdown").forEach(dropdown => {

//     const link = dropdown.querySelector("a");
//     const submenu = dropdown.querySelector(".dropdown-content");

//     if (!submenu) return;

//     link.addEventListener("click", function(e){

//         if(window.innerWidth <= 900){

//             // If dropdown is not open, open it
//             if(!dropdown.classList.contains("open")){

//                 e.preventDefault();

//                 document.querySelectorAll(".dropdown").forEach(item=>{
//                     if(item !== dropdown){
//                         item.classList.remove("open");
//                     }
//                 });

//                 dropdown.classList.add("open");
//             }

//             // If already open, allow normal navigation
//         }

//     });

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

// Open / Close menu
menuBtn.addEventListener("click", function(e){

    e.stopPropagation();
    navMenu.classList.toggle("active");

});

// Close menu when clicking outside
document.addEventListener("click", function(e){

    if(
        !navMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ){
        navMenu.classList.remove("active");

        document.querySelectorAll(".dropdown").forEach(dropdown=>{
            dropdown.classList.remove("open");
        });
    }

});




// Mobile dropdowns
document.querySelectorAll(".dropdown").forEach(dropdown => {

    const link = dropdown.querySelector("a");
    const submenu = dropdown.querySelector(".dropdown-content");

    if (!submenu) return;

    link.addEventListener("click", function(e){

        if(window.innerWidth <= 900){

            // If dropdown is not open, open it
            if(!dropdown.classList.contains("open")){

                e.preventDefault();

                document.querySelectorAll(".dropdown").forEach(item=>{
                    if(item !== dropdown){
                        item.classList.remove("open");
                    }
                });

                dropdown.classList.add("open");
            }

            // If already open, allow normal navigation
        }

    });

});