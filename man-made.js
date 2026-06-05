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
 
   if (type === "Fire") {
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