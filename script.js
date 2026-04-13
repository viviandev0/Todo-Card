const dueDateEl = document.getElementById("due-date");
const timeRemainingEl = document.getElementById("time-remaining");

function updateTimeRemaining() {
  const dueDate = new Date(dueDateEl.getAttribute("datetime"));
  const now = new Date();

  const diff = dueDate - now;

  if (diff <= 0) {
    const overdue = Math.abs(diff);
    const hours = Math.floor(overdue / (1000 * 60 * 60));
    timeRemainingEl.textContent = `Overdue by ${hours} hour(s)`;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  if (days > 0) {
    timeRemainingEl.textContent = `Due in ${days} day(s)`;
  } else {
    timeRemainingEl.textContent = `Due in ${hours} hour(s)`;
  }
}

// update immediately
updateTimeRemaining();

// update every 30 seconds
setInterval(updateTimeRemaining, 30000);