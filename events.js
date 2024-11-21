// Sample events
const events = [
    { id: 1, name: "Basketball Tournament", date: "2024-12-10", location: "Stadium A" },
    { id: 2, name: "Soccer League", date: "2024-12-15", location: "Stadium B" },
    { id: 3, name: "Tennis Championship", date: "2024-12-20", location: "Court 1" }
  ];
  
  // Elements
  const eventList = document.getElementById("event-list");
  const registrationModal = document.getElementById("registration-modal");
  const closeModal = document.getElementById("close-modal");
  const registrationForm = document.getElementById("registration-form");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const ageInput = document.getElementById("age");
  
  // Display events on page load
  window.onload = function() {
    events.forEach(event => {
      const eventItem = document.createElement("div");
      eventItem.className = "event-item";
      eventItem.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <button class="register-btn" data-event-id="${event.id}">Register</button>
      `;
      eventList.appendChild(eventItem);
    });
  };
  
  // Open registration modal on event button click
  eventList.addEventListener("click", function(e) {
    if (e.target.classList.contains("register-btn")) {
      const eventId = e.target.getAttribute("data-event-id");
      const event = events.find(e => e.id == eventId);
      if (event) {
        // Pre-populate the form with event info if needed (e.g., displaying event name in modal)
        registrationModal.style.display = "flex";
      }
    }
  });
  
  // Close modal
  closeModal.addEventListener("click", function() {
    registrationModal.style.display = "none";
  });
  
  // Handle form submission
  registrationForm.addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const age = ageInput.value.trim();
  
    if (email && phone && age) {
      alert(`Successfully registered for the event! \nEmail: ${email} \nPhone: ${phone} \nAge: ${age}`);
      registrationModal.style.display = "none";
      // Clear the form fields
      emailInput.value = "";
      phoneInput.value = "";
      ageInput.value = "";
    } else {
      alert("Please fill out all fields.");
    }
  });
  