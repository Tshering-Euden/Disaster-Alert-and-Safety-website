 
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
 
 
 // Toggle logic configuration mapping for mobile navbar dropdown layouts
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if(menuBtn) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}



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

  if (type === "Fire") {
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
  else if (type === "Fire") {
    msg = "⚠️ Fire Safety Tips:\n\n" +
      "• Stay low to the ground beneath the smoke layer while crawling toward an exit\n" +
      "• Use stairs only—never take an elevator during a structure fire\n" +
      "• Call emergency services as soon as you reach a completely safe location\n" +
      "• Feel doors with the back of your hand before opening; if hot, find an alternate route\n" +
      "• Once you are out of the building, stay out. Never go back inside for any reason";
  }
  else if (type === "Pollution") {
    msg = "⚠️ Pollution Safety Tips:\n\n" +
 "• Wear masks properly when commuting through smog or hazardous chemical haze\n" +
      "• Avoid heavily congested roads, industrial areas, and outdoor exercise during peak pollution hours\n" +
      "• Support clean environment initiatives and choose public transport or carpooling when possible\n" +
      "• Keep windows closed on high-pollution days and run your air conditioning on 'recirculate'\n" +
      "• Wash your hands, face, and clothes immediately after spending extended time outdoors";
  }
  else if (type === "War") {
    msg = "⚠️ War Safety Tips:\n\n" +
      "• Stay deep inside safe shelters or designated safe zones away from exterior walls and windows\n" +
      "• Rigorously follow official instructions, curfews, and sirens broadcasted by authorities\n" +
      "• Keep emergency survival gear, water rations, and personal documentation next to you\n" +
      "• Keep communication lines clear; use text messages instead of voice calls to save network bandwidth\n" +
      "• Remain calm, avoid spreading unverified rumors, and rely entirely on verified emergency frequencies";
  }
  else if (type === "Nuclear Accident") {
    msg = "⚠️ Nuclear Accident Safety Tips:\n\n" +
      "• Go inside the nearest sturdy building immediately and stay inside (Shelter in Place)\n" +
      "• Close all structural exterior windows, outer entry doors, and fireplace dampers\n" +
      "• Shower thoroughly or wipe your body down with a clean, damp cloth if exposed outside\n" +
      "• Put packaged clothes worn outdoors into sealed bags away from living spaces\n" +
      "• Consume only sealed food and bottled liquids stored inside protected environments";
  }
  else if (type === "Oil Spill") {
    msg = "⚠️ Oil Spill Safety Tips:\n\n" +
      "• Avoid all direct skin contact or recreational swimming in contaminated ocean waters\n" +
      "• Do not consume seafood caught near affected areas until officially declared safe\n" +
      "• Report oiled wildlife immediately to certified rescuers instead of handling them yourself\n" +
      "• Keep pets far away from contaminated shoreline areas and toxic fumes\n" +
      "• Obey beach closures and water restriction zones strictly";
  }
  else if (type === "Cyberattack") {
    msg = "⚠️ Cyberattack Safety Tips:\n\n" +
      "• Disconnect infected devices from Wi-Fi networks immediately to stop data spread\n" +
      "• Change critical banking passwords instantly using an uncompromised backup device\n" +
      "• Monitor credit card statements closely for any unexpected unauthorized activity\n" +
      "• Alert your corporate or institutional IT desk if workspace profiles behave strangely\n" +
      "• Do not trust pop-up warnings demanding sudden software installation to clean systems";
  }

  displayLocalMessage(msg, element);
}