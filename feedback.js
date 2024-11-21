// Open the Coach Feedback Modal
const coachFeedbackBtn = document.getElementById("coach-feedback-btn");
const coachFeedbackModal = document.getElementById("coach-feedback-modal");
const closeCoachModal = document.getElementById("close-coach-modal");

// Open the Event Feedback Modal
const eventFeedbackBtn = document.getElementById("event-feedback-btn");
const eventFeedbackModal = document.getElementById("event-feedback-modal");
const closeEventModal = document.getElementById("close-event-modal");

// Submit feedback for Coach
const submitCoachFeedback = document.getElementById("submit-coach-feedback");
const coachFeedbackText = document.getElementById("coach-feedback");

// Submit feedback for Event
const submitEventFeedback = document.getElementById("submit-event-feedback");
const eventFeedbackText = document.getElementById("event-feedback");

// Open the Coach Feedback Modal
coachFeedbackBtn.addEventListener("click", () => {
  coachFeedbackModal.style.display = "flex";
});

// Close the Coach Feedback Modal
closeCoachModal.addEventListener("click", () => {
  coachFeedbackModal.style.display = "none";
});

// Open the Event Feedback Modal
eventFeedbackBtn.addEventListener("click", () => {
  eventFeedbackModal.style.display = "flex";
});

// Close the Event Feedback Modal
closeEventModal.addEventListener("click", () => {
  eventFeedbackModal.style.display = "none";
});

// Submit the Coach Feedback
submitCoachFeedback.addEventListener("click", () => {
  const feedback = coachFeedbackText.value.trim();
  if (feedback) {
    console.log("Coach Feedback Submitted: " + feedback);
    alert("Feedback for Coach submitted successfully!");
    coachFeedbackText.value = ""; // Clear the feedback text area
    coachFeedbackModal.style.display = "none"; // Close the modal
  } else {
    alert("Please write your feedback.");
  }
});

// Submit the Event Feedback
submitEventFeedback.addEventListener("click", () => {
  const feedback = eventFeedbackText.value.trim();
  if (feedback) {
    console.log("Event Feedback Submitted: " + feedback);
    alert("Feedback for Event submitted successfully!");
    eventFeedbackText.value = ""; // Clear the feedback text area
    eventFeedbackModal.style.display = "none"; // Close the modal
  } else {
    alert("Please write your feedback.");
  }
});
