// Sample data for the training schedule
const trainingSchedule = [
    { day: "Monday", time: "9:00 AM - 11:00 AM", place: "Gymnasium", coach: "Coach A", hours: 2 },
    { day: "Tuesday", time: "10:00 AM - 12:00 PM", place: "Track Field", coach: "Coach B", hours: 2 },
    { day: "Wednesday", time: "9:00 AM - 11:00 AM", place: "Swimming Pool", coach: "Coach C", hours: 2 },
    { day: "Thursday", time: "1:00 PM - 3:00 PM", place: "Gymnasium", coach: "Coach A", hours: 2 },
    { day: "Friday", time: "11:00 AM - 1:00 PM", place: "Track Field", coach: "Coach B", hours: 2 },
    { day: "Saturday", time: "8:00 AM - 10:00 AM", place: "Football Ground", coach: "Coach D", hours: 2 },
    { day: "Sunday", time: "Rest Day", place: "", coach: "", hours: 0 },
  ];
  
  // Function to render the training schedule
  function renderTrainingSchedule() {
    const scheduleTable = document.getElementById("schedule-table").getElementsByTagName("tbody")[0];
    trainingSchedule.forEach(session => {
      const row = document.createElement("tr");
      
      // Add cells for each schedule detail
      const dayCell = document.createElement("td");
      dayCell.textContent = session.day;
      row.appendChild(dayCell);
      
      const timeCell = document.createElement("td");
      timeCell.textContent = session.time;
      row.appendChild(timeCell);
      
      const placeCell = document.createElement("td");
      placeCell.textContent = session.place || "N/A";
      row.appendChild(placeCell);
      
      const coachCell = document.createElement("td");
      coachCell.textContent = session.coach || "N/A";
      row.appendChild(coachCell);
      
      const hoursCell = document.createElement("td");
      hoursCell.textContent = session.hours;
      row.appendChild(hoursCell);
  
      scheduleTable.appendChild(row);
    });
  }
  
  // Run the function to render the schedule on page load
  document.addEventListener("DOMContentLoaded", renderTrainingSchedule);
  