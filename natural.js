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

  displayLocalMessage(msg, element);
}
 