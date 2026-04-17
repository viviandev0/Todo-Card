// State Management
let todoData = {
  title: "Finish Project Stage 1",
  description: "Extend the Stage 0 Todo Card into a stateful component with edit modes and status transitions.",
  priority: "medium",
  status: "pending",
  dueDate: "2026-04-16T18:00:00"
};

// Selectors
const card = document.getElementById("test-todo-card");
const viewMode = document.getElementById("todo-view-mode");
const editForm = document.getElementById("edit-form");
const timeRemainingEl = document.getElementById("time-remaining");
const overdueIndicator = document.getElementById("overdue-indicator");
const completeToggle = document.getElementById("complete-toggle");

// Initialize
function init() {
  render();
  setInterval(updateTimeLogic, 30000); // Update every 30s
  updateTimeLogic();
}

function render() {
  // Sync Display
  document.getElementById("todo-title-display").textContent = todoData.title;
  document.getElementById("todo-desc-display").textContent = todoData.description;
  document.getElementById("test-todo-priority").textContent = todoData.priority.charAt(0).toUpperCase() + todoData.priority.slice(1);
  document.getElementById("status-display").textContent = todoData.status.replace("-", " ").toUpperCase();
  document.getElementById("due-date").textContent = `Due: ${new Date(todoData.dueDate).toLocaleString()}`;
  
  // Sync Attributes
  card.setAttribute("data-priority", todoData.priority);
  card.setAttribute("data-status", todoData.status);
  completeToggle.checked = (todoData.status === "done");

  // Expand/Collapse check
  const expandBtn = document.getElementById("expand-toggle");
  if (todoData.description.length < 50) {
    expandBtn.classList.add("hidden");
  } else {
    expandBtn.classList.remove("hidden");
  }
}

// Time Logic
function updateTimeLogic() {
  if (todoData.status === "done") {
    timeRemainingEl.textContent = "Completed";
    overdueIndicator.classList.add("hidden");
    return;
  }

  const now = new Date();
  const due = new Date(todoData.dueDate);
  const diff = due - now;

  if (diff <= 0) {
    const overdueMs = Math.abs(diff);
    const hours = Math.floor(overdueMs / (1000 * 60 * 60));
    timeRemainingEl.textContent = `Overdue by ${hours} hour(s)`;
    overdueIndicator.classList.remove("hidden");
  } else {
    overdueIndicator.classList.add("hidden");
    const mins = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) timeRemainingEl.textContent = `Due in ${days} day(s)`;
    else if (hours > 0) timeRemainingEl.textContent = `Due in ${hours} hour(s)`;
    else timeRemainingEl.textContent = `Due in ${mins} minute(s)`;
  }
}

// Event Listeners
document.getElementById("edit-btn").addEventListener("click", () => {
  viewMode.classList.add("hidden");
  editForm.classList.remove("hidden");
  
  // Pre-fill form
  document.getElementById("edit-title").value = todoData.title;
  document.getElementById("edit-desc").value = todoData.description;
  document.getElementById("edit-priority").value = todoData.priority;
  document.getElementById("status-control").value = todoData.status;
  document.getElementById("edit-due-date").value = todoData.dueDate.substring(0, 16);
});

document.getElementById("cancel-btn").addEventListener("click", () => {
  editForm.classList.add("hidden");
  viewMode.classList.remove("hidden");
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  todoData.title = document.getElementById("edit-title").value;
  todoData.description = document.getElementById("edit-desc").value;
  todoData.priority = document.getElementById("edit-priority").value;
  todoData.status = document.getElementById("status-control").value;
  todoData.dueDate = document.getElementById("edit-due-date").value;

  render();
  updateTimeLogic();
  editForm.classList.add("hidden");
  viewMode.classList.remove("hidden");
});

completeToggle.addEventListener("change", (e) => {
  todoData.status = e.target.checked ? "done" : "pending";
  render();
  updateTimeLogic();
});

document.getElementById("expand-toggle").addEventListener("click", (e) => {
  const section = document.getElementById("collapsible-section");
  const isCollapsed = section.classList.toggle("collapsed");
  e.target.textContent = isCollapsed ? "Read More" : "Read Less";
});

init();
