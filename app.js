let events = [
  { name: "Soccer Championship", date: "2024-12-01T15:00" },
  { name: "Basketball Tournament", date: "2024-11-25T18:00" },
  { name: "Tennis Open", date: "2024-11-30T10:00" },
  { name: "Marathon", date: "2024-12-05T07:00" },
  { name: "Swimming Gala", date: "2024-11-22T14:00" }
]; // Stores all events
let reminders = []; // Stores event reminders
let leaderboard = [
  { name: "John Doe", sport: "Soccer", performance: 95 },
  { name: "Jane Smith", sport: "Basketball", performance: 89 },
  { name: "Mike Lee", sport: "Tennis", performance: 92 },
  { name: "Emily Davis", sport: "Soccer", performance: 87 },
  { name: "Chris Walker", sport: "Basketball", performance: 91 }
];

// Update event count on the dashboard
function updateDashboard() {
  document.getElementById('event-count').textContent = events.length;
}

// Render Events with Images in the Upcoming Events Section
function renderEvents() {
  const eventList = document.getElementById('event-list');
  eventList.innerHTML = '';
  events.forEach(event => {
    const eventItem = document.createElement('div');
    eventItem.className = 'event-item';
    eventItem.innerHTML = `
      
      <h3>${event.name}</h3>
      <p>${new Date(event.date).toLocaleString()}</p>
    `;
    eventList.appendChild(eventItem);
  });
}



// Function to add a new event (example placeholder for your logic)


// Save a Reminder and Automatically Add to Upcoming Events
// function saveReminder() {
//   const eventName = document.getElementById('reminder-event').value;
//   const eventTime = document.getElementById('reminder-time').value;

//   if (eventName && eventTime) {
//     // Create a new event object for the reminder
//     const newEvent = { name: eventName, date: eventTime };
    
//     // Add reminder to the reminders array
//     reminders.push(newEvent);

//     // Add the event to the main events array for Upcoming Events section
//     events.push(newEvent);
//     function updateEventCount() {
//       const eventCountElement = document.getElementById('event-count');
//       eventCountElement.textContent = `Event Count: ${events.length}`;
//   }
  
//   // For dynamically updating event list:
//   function updateEventList() {
//       const eventListElement = document.getElementById('event-list');
//       eventListElement.innerHTML = ''; // Clear previous events
  
//       events.forEach(event => {
//           const eventItem = document.createElement('div');
//           eventItem.className = 'event-item';
//           eventItem.textContent = `${event.name} - ${event.date}`;
//           eventListElement.appendChild(eventItem);
//       });
//   }
  
//   // Ensure these functions run to update the page
//   updateEventCount();
//   updateEventList();
//     // Render the updated sections
//     renderReminders();
//     renderEvents(); // Automatically update the Upcoming Events section
//     updateDashboard(); // Update the dashboard count
//     updateEventCount();

//   } else {
//     alert("Please fill out both fields for the event name and time.");
//   }
// }
function updateEventCount() {
  const eventCountElement = document.getElementById('event-count');
  eventCountElement.textContent = `Event Count: ${events.length}`;
}

function updateEventList() {
  const eventListElement = document.getElementById('event-list');
  eventListElement.innerHTML = ''; // Clear previous events
  events.forEach(event => {
      const eventItem = document.createElement('div');
      eventItem.className = 'event-item';
      eventItem.innerHTML = `<h3>${event.name}</h3><p>${new Date(event.date).toLocaleString()}</p>`;
      eventListElement.appendChild(eventItem);
  });
}

function saveReminder() {
  const eventName = document.getElementById('reminder-event').value;
  const eventTime = document.getElementById('reminder-time').value;
  if (eventName && eventTime) {
      const newEvent = { name: eventName, date: eventTime };
      reminders.push(newEvent);
      events.push(newEvent);
      updateEventCount();
      updateEventList();
  } else {
      alert("Please fill out both fields for the event name and time.");
  }
}


// Render Event Reminders in the Reminders Section
function renderReminders() {
  const reminderList = document.getElementById('reminder-list');
  reminderList.innerHTML = '';
  reminders.forEach(reminder => {
    const reminderItem = document.createElement('div');
    reminderItem.className = 'reminder-item';
    reminderItem.innerHTML = `<p>Reminder for ${reminder.name} at ${new Date(reminder.date).toLocaleString()}</p>`;
    reminderList.appendChild(reminderItem);
  });
}

// Open Reminder Modal
function openReminderModal() {
  document.getElementById('reminder-modal').style.display = 'flex';
}

// Close Modal
function closeModal() {
  document.getElementById('reminder-modal').style.display = 'none';
}

// Real-Time Leaderboard Rendering
function filterLeaderboard() {
  const sportFilter = document.getElementById('filter-sport').value;
  const filteredLeaderboard = leaderboard.filter(athlete => 
    sportFilter === 'all' || athlete.sport === sportFilter
  );
  renderLeaderboard(filteredLeaderboard);
}

function renderLeaderboard(filteredLeaderboard) {
  const leaderboardList = document.getElementById('leaderboard-list');
  leaderboardList.innerHTML = '';
  filteredLeaderboard.forEach(athlete => {
    const item = document.createElement('li');
    item.textContent = `${athlete.name} (${athlete.sport}): ${athlete.performance} points`;
    leaderboardList.appendChild(item);
  });
}
// Sample coaches list, in real application you can fetch from an API
const coaches = [
  { id: 1, name: "Coach John" },
  { id: 2, name: "Coach Sarah" },
  { id: 3, name: "Coach Mike" },
];

// Function to populate the coaches dropdown dynamically
function loadCoaches() {
  const coachSelect = document.getElementById('coach-select');
  
  coaches.forEach(coach => {
      const option = document.createElement('option');
      option.value = coach.id;
      option.textContent = coach.name;
      coachSelect.appendChild(option);
  });
}

// Call the loadCoaches function to populate dropdown on page load
document.addEventListener('DOMContentLoaded', loadCoaches);

// Function to handle the submission of the assistance request
function submitAssistanceRequest() {
  const athleteName = document.getElementById('athlete-name-assistance').value.trim();
  const coachSelect = document.getElementById('coach-select');
  const coachId = coachSelect.value;
  const assistanceDetails = document.getElementById('assistance-details').value.trim();

  // Validation
  if (!athleteName || !coachId || !assistanceDetails) {
      alert('All fields are required!');
      return;
  }
  function previewImage() {
    const fileInput = document.getElementById('athlete-image');
    const file = fileInput.files[0]; // Get the selected file
    const previewImg = document.getElementById('athlete-image-preview');
    
    if (file) {
      const reader = new FileReader();
      
      reader.onload = function (e) {
        previewImg.src = e.target.result; // Set the image preview to the file's data URL
      };
      
      reader.readAsDataURL(file); // Convert the file to a data URL and trigger the onload event
    } else {
      previewImg.src = ''; // Clear the preview if no file is selected
    }
  }
  
  function saveAthleteDetails() {
    const name = document.getElementById('athlete-name').value;
    const age = document.getElementById('athlete-age').value;
    const height = document.getElementById('athlete-height').value;
    const sport = document.getElementById('athlete-sport').value;
    const achievements = document.getElementById('athlete-achievements').value;
    const address = document.getElementById('athlete-address').value;
    const phone = document.getElementById('athlete-phone').value;
  
    if (!name || !age || !height || !sport || !achievements || !address || !phone) {
        alert('Please fill out all fields.');
        return;
    }
  
    document.getElementById('athlete-success-message').textContent = 'Athlete details saved successfully!';
  }
  
  // Simulate submitting the request to the server
  
  setTimeout(() => {
      // Display a success message
      const messageDiv = document.getElementById('assistance-message');
      messageDiv.textContent = `Your request for assistance with ${coachSelect.selectedOptions[0].textContent} has been submitted successfully!`;
      messageDiv.style.color = 'green';

      // Clear the form after submission
      document.getElementById('athlete-name-assistance').value = '';
      document.getElementById('coach-select').value = '';
      document.getElementById('assistance-details').value = '';
  }, 1000); // Simulate a network delay
}


// Performance Graph Initialization
const performanceGraph = document.getElementById('performanceGraph').getContext('2d');
const performanceChart = new Chart(performanceGraph, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Performance Score',
      data: [75, 80, 85, 90, 92],
      borderColor: '#3498db',
      fill: false
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    }
  }
});

// Initial Rendering
// renderLeaderboard(leaderboard);
// renderReminders();
// renderEvents();
document.addEventListener('DOMContentLoaded', () => {
  renderLeaderboard(leaderboard);
  renderReminders();
  renderEvents();
});

