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