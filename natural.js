 // Toggle logic configuration mapping for mobile navbar dropdown layouts
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








// TARGET LOCAL ROUTING FUNCTION FOR CARD INSIDE CONTAINER BLOCKS
function displayLocalMessage(text, buttonElement) {
  // 1. Automatically close any open text boxes on other cards first
  document.querySelectorAll('.card-message').forEach(box => {
    box.style.display = "none";
  });

  // 2. Find the content wrapper inside the targeted card
  const cardContent = buttonElement.closest('.card-content');
  const messageBox = cardContent.querySelector('.card-message');
  const messageContent = cardContent.querySelector('.message-content');
  
  // 3. Inject content text and seamlessly extend the card downward
  messageContent.innerText = text;
  messageBox.style.display = "block";
  
  // Dynamically re-adjust the container heights if nested under expanded read-more blocks
  const nestedWrapper = cardContent.closest('.read-more-content');
  if (nestedWrapper) {
    nestedWrapper.style.maxHeight = nestedWrapper.scrollHeight + "px";
  }

  // Smoothly guides view pane focus near layout structure safely
  cardContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Function to close/hide target container blocks dynamically under card levels
function closeLocalMessage(closeButton) {
  const messageBox = closeButton.closest('.card-message');
  messageBox.style.display = "none";
}
 // Preparedness Guide Function with Element tracking assignment rules
function showPreparedness(type, element) {
  let msg = "";
  if (type === "Flood") {
    msg = "🌊 Flood Preparedness Guide:\n\n" +
      "• Store clean drinking water (at least 1 gallon per person per day)\n" +
      "• Keep emergency non-perishable food supplies for at least 3 days\n" +
      "• Prepare flashlights, extra batteries, and a hand-crank radio\n" +
      "• Know local evacuation routes and find the nearest high-ground shelters\n" +
      "• Move valuables, documents, and electrical appliances to higher floors\n" +
      "• Install check valves in plumbing to prevent floodwater backups";
  }
  else if (type === "Earthquake") {
    msg = "🛑 Earthquake Preparedness Guide:\n\n" +
      "• Secure heavy furniture, bookshelves, and water heaters to wall studs\n" +
      "• Prepare a comprehensive go-bag (first aid, water, medication, flashlight)\n" +
      "• Practice 'Drop, Cover, and Hold On' drills regularly with family\n" +
      "• Keep first aid supplies ready and check expiration dates annually\n" +
      "• Identify safe spots in each room (under sturdy tables or against interior walls)\n" +
      "• Learn how to manually shut off your home's gas, water, and electricity";
  }
  else if (type === "Storm") {
    msg = "⚡️ Storm Preparedness Guide:\n\n" +
      "• Charge mobile devices and power banks completely before the storm hits\n" +
      "• Store emergency supplies, including a first-aid kit and manual can opener\n" +
      "• Stay updated with official weather alerts via radio or emergency apps\n" +
      "• Secure doors, windows, and bring outdoor furniture inside\n" +
      "• Trim dead or overgrown tree branches near your roof or power lines\n" +
      "• Keep emergency cash on hand, as ATMs may lose power";
  }
  else if (type === "Tsunami") {
 msg = "🌊 Tsunami Preparedness Guide:\n\n" +
      "• Learn to recognize tsunami warning signs: ground shaking, rapid ocean recession\n" +
      "• Map out emergency routes to elevated spaces at least 100 feet above sea level\n" +
      "• Keep your emergency go-bag accessible near the main exit door\n" +
      "• Formulate a family communication plan with an out-of-town emergency contact\n" +
      "• Strictly adhere to local coastal siren tests and dynamic weather alerts";
  }
  else if (type === "Volcanic Eruption") {
    msg = "🌋 Volcanic Eruption Preparedness Guide:\n\n" +
      "• Stock up on dynamic protective goggles and heavy-duty dust masks (N95)\n" +
      "• Clear vulnerable roofs of ash accumulation to avoid sudden structure collapse\n" +
      "• Map shelter pathways outside immediate structural exclusion danger zones\n" +
      "• Store multi-day plastic wraps to protect vulnerable house appliances from ash\n" +
      "• Seal doors, windows, and structural ventilation points completely";
  }
  else if (type === "Wildfire") {
    msg = "🌲 Wildfire Preparedness Guide:\n\n" +
      "• Create a 30-foot defensible zone around your home by clearing dry brush\n" +
      "• Install fire-resistant roofing materials and window covers if possible\n" +
      "• Establish a family evacuation plan with multiple destination routes\n" +
      "• Keep structural water hoses connected and readily accessible\n" +
      "• Keep a clear digital or physical inventory of all home assets";
  }
  else if (type === "Fire") {
    msg = "🔥 Fire Preparedness Guide:\n\n" +
      "• Install smoke alarms on every level of your home and test them monthly\n" +
      "• Keep fire extinguishers in key areas (like the kitchen) and know how to use them\n" +
      "• Create and practice an escape plan with two designated ways out of every room\n" +
      "• Avoid overloading electrical sockets and replace frayed cords immediately\n" +
      "• Clear dry leaves, brush, and flammable materials away from your home's exterior\n" +
      "• Teach children how to 'Stop, Drop, and Roll' if their clothes catch fire";
  }
  else if (type === "Pollution") {
    msg = "😷 Pollution Preparedness Guide:\n\n" +
 "• Wear high-quality protective masks (N95 or equivalent) on poor air quality days\n" +
      "• Reduce plastic waste and transition to eco-friendly, reusable products\n" +
      "• Monitor local Air Quality Index (AQI) levels before planning outdoor activities\n" +
      "• Invest in indoor plants and HEPA air purifiers for high-traffic rooms\n" +
      "• Minimize the use of wood stoves, open burning, and chemical-heavy cleaners\n" +
      "• Ensure proper ventilation in your home to prevent indoor pollutant buildup";
  }
  else if (type === "War") {
    msg = "🛡 War Preparedness Guide:\n\n" +
      "• Locate and map out local public emergency shelters or reinforced basements\n" +
      "• Store long-term food, water, and vital prescription medical supplies\n" +
      "• Keep a physical list of emergency contacts and trusted family meeting spots\n" +
      "• Follow official civil defense instructions and secure copies of identification documents\n" +
      "• Prepare a battery-powered or solar emergency radio to receive news blackout updates\n" +
      "• Put together an emergency cash reserve in small, usable denominations";
  }
  else if (type === "Nuclear Accident") {
    msg = "☢️ Nuclear Accident Preparedness Guide:\n\n" +
      "• Identify the safest interior rooms or basement spaces in your building\n" +
      "• Maintain a supply of sealed, non-perishable food and bottled water\n" +
      "• Keep a reliable battery-operated radio ready for emergency broadcasts\n" +
      "• Understand the core defense principles: Distance, Shielding, and Time\n" +
      "• Prepare plastic sheets and duct tape to seal air vents if requested";
  }
  else if (type === "Oil Spill") {
    msg = "🛢 Oil Spill Preparedness Guide:\n\n" +
      "• Keep local wildlife rescue numbers and environmental agency contacts handy\n" +
 "• Stock protective gear (rubber gloves, boots, masks) if you live in coastal zones\n" +
      "• Pre-map alternative water sources if your community relies on local surface water\n" +
      "• Set up alert tracking with local harbor or maritime safety authorities\n" +
      "• Stay informed on coastal exclusion boundaries designated for public safety";
  }
  else if (type === "Cyberattack") {
    msg = "💻 Cyberattack Preparedness Guide:\n\n" +
      "• Regularly back up critical digital files to secure, offline hard drives\n" +
      "• Use complex passwords paired with mandatory Multi-Factor Authentication (MFA)\n" +
      "• Install reliable security software and keep operating systems fully updated\n" +
      "• Keep copies of vital financial documentation and emergency cash access paths\n" +
      "• Learn to identify phishing emails, unverified links, and malicious attachments";
  }

  displayLocalMessage(msg, element);
}
 // Safety Tips Function with Element tracking assignment rules
function showTips(type, element) {
  let msg = "";
  if (type === "Flood") {
    msg = "⚠️ Flood Safety Tips:\n\n" +
      "• Move to higher ground immediately; do not wait for instructions to evacuate\n" +
      "• Avoid flood water completely—never walk, swim, or drive through moving water\n" +
      "• Keep emergency supplies and a fully charged phone with you at all times\n" +
      "• Avoid downed power lines and muddy water which can carry an electrical current\n" +
      "• If caught in a vehicle that is stalling in rising water, abandon it and move to safety";
  }
  else if (type === "Earthquake") {
    msg = "⚠️ Earthquake Safety Tips:\n\n" +
      "• Drop, Cover, and Hold On beneath a sturdy table or desk during shaking\n" +
      "• Stay far away from windows, glass panels, mirrors, and outer structural walls\n" +
      "• If outdoors, move safely into the open away from buildings, streetlights, and utility wires\n" +
      "• If driving, pull over safely to a clear area, stop, and stay inside the vehicle\n" +
      "• Expect aftershocks; do not enter damaged buildings until authorities declare them safe";
  }
  else if (type === "Storm") {
    msg = "⚠️ Storm Safety Tips:\n\n" +
      "• Stay indoors and stay away from windows, glass doors, and skylights\n" +
      "• Avoid using electrical devices and corded phones to protect against lightning surges\n" +
      "• Continually follow live weather updates and stay sheltered until warnings expire\n" +
      "• Avoid taking baths or showers during severe electrical storms due to plumbing conduction\n" +
      "• If caught outdoors, seek immediate shelter in a sturdy building or hard-topped vehicle";
  }
  else if (type === "Tsunami") {
    msg = "⚠️ Tsunami Safety Tips:\n\n" +
      "• Evacuate immediately inland or to upper floors if you feel a coastal earthquake\n" +
      "• Never go down to the beach to look at or watch a receding tsunami wave\n" +
      "• Stay at your elevated safety location until local authorities declare an official all-clear\n" +
      "• Avoid standard coastal river channels, as they can pull tsunami waves far inland\n" +
      "• Rely on official text updates rather than unverified community rumors";
  }
  else if (type === "Volcanic Eruption") {
    msg = "⚠️ Volcanic Eruption Safety Tips:\n\n" +
      "• Stay inside your shelter to keep completely safe from flying debris and hot gases\n" +
      "• Wear protective goggles, long sleeves, and long pants if you must walk outside\n" +
      "• Keep your car engine turned off; ash can easily clog engines and stall vehicles\n" +
      "• Avoid low-lying land areas and river valleys prone to fast-moving mudflows (lahars)\n" +
      "• Keep your home air conditioning switched off and close all indoor ventilation dampers";
  }
  else if (type === "Wildfire") {
    msg = "⚠️ Wildfire Safety Tips:\n\n" +
      "• Evacuate instantly when ordered; do not wait until structural fire is visible\n" +
      "• Keep your windows and doors fully locked up to limit smoke damage before leaving\n" +
 "• Turn on interior/exterior house lights so your home is visible to rescue crews in thick smoke\n" +
      "• Drive slowly with headlights turned on high to navigate smoky air safely\n" +
      "• Avoid low visibility areas and dynamically check wind shifts while fleeing";
  }
 
  displayLocalMessage(msg, element);
}