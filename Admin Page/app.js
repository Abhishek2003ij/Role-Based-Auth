// Initialize data arrays for events, athletes, and reminders
let events = [];
let athletes = [];
let reminders = [];
let leaderboard = [];

// Update upcoming events and athlete stats
function updateDashboard() {
  document.getElementById('event-count').textContent = events.length;
  document.getElementById('athlete-count').textContent = athletes.length;
}

// Event Management Logic
function openEventModal() {
  document.getElementById('event-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('event-modal').style.display = 'none';
  document.getElementById('athlete-modal').style.display = 'none';
  document.getElementById('reminder-modal').style.display = 'none';
}

function saveEvent() {
  const name = document.getElementById('event-name').value;
  const date = document.getElementById('event-date').value;
  events.push({ name, date });
  renderEvents();
  updateDashboard();
  closeModal();
}

function renderEvents() {
  const eventList = document.getElementById('event-list');
  eventList.innerHTML = '';
  events.forEach(event => {
    const eventItem = document.createElement('div');
    eventItem.className = 'event-item';
    eventItem.innerHTML = `
      <h3>${event.name}</h3>
      <p>${event.date}</p>
      <button onclick="editEvent('${event.name}')">Edit</button>
    `;
    eventList.appendChild(eventItem);
  });
}

// Athlete Management Logic
function openAthleteModal() {
  document.getElementById('athlete-modal').style.display = 'flex';
}

function saveAthlete() {
  const name = document.getElementById('athlete-name').value;
  const sport = document.getElementById('athlete-sport').value;
  const performance = document.getElementById('athlete-performance').value;
  athletes.push({ name, sport, performance });
  renderAthletes();
  updateDashboard();
  closeModal();
}

function renderAthletes() {
  const athleteList = document.getElementById('athlete-list');
  athleteList.innerHTML = '';
  athletes.forEach(athlete => {
    const athleteItem = document.createElement('div');
    athleteItem.className = 'athlete-item';
    athleteItem.innerHTML = `
      <h3>${athlete.name}</h3>
      <p>Sport: ${athlete.sport}</p>
      <p>Performance: ${athlete.performance}</p>
    `;
    athleteList.appendChild(athleteItem);
  });
}

// Event Reminders Logic
function openReminderModal() {
  document.getElementById('reminder-modal').style.display = 'flex';
}

function saveReminder() {
  const event = document.getElementById('reminder-event').value;
  const time = document.getElementById('reminder-time').value;
  reminders.push({ event, time });
  renderReminders();
  closeModal();
}

function renderReminders() {
  const reminderList = document.getElementById('reminder-list');
  reminderList.innerHTML = '';
  reminders.forEach(reminder => {
    const reminderItem = document.createElement('div');
    reminderItem.className = 'reminder-item';
    reminderItem.innerHTML = `
      <p>Reminder for ${reminder.event} at ${reminder.time}</p>
    `;
    reminderList.appendChild(reminderItem);
  });
}

// Real-Time Leaderboard
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
    const leaderboardItem = document.createElement('li');
    leaderboardItem.textContent = `${athlete.name} - ${athlete.performance} points`;
    leaderboardList.appendChild(leaderboardItem);
  });
}

// Performance Graph (using Chart.js)
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
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  }
});
