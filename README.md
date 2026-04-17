# Stage 1A: Advanced Todo Card (Interactive & Stateful)

## 🔗 Project Links
* **Live Demo:** https://viviandev0.github.io/Advanced-Todo-Card/
* **GitHub Repository:** https://github.com/viviandev0/Advanced-Todo-Card
## Overview
This project is an evolution of the Stage 0 Todo Card. It has been transformed from a static UI component into a dynamic, state-managed application component. It features full CRUD-like editing capabilities, real-time time tracking, and synchronized status logic.

## Key Changes from Stage 0
* **Stateful Architecture:** The component now relies on a centralized `todoData` object to manage title, description, priority, status, and due dates.
* **Interactive Edit Mode:** Added a dedicated edit form (`test-todo-edit-form`) that allows users to modify all task properties.
* **Dynamic Time Tracking:** Implemented a JavaScript interval that updates the "Time Remaining" every 30 seconds and identifies "Overdue" tasks.
* **Advanced Logic Sync:** The completion checkbox and the status dropdown are bi-directionally linked; updating one automatically reflects in the other.

## Design Decisions
* **Priority Visuals:** Used a `border-left` accent and a colored dot indicator (`test-todo-priority-indicator`) that dynamically switches colors: Red (High), Amber (Medium), and Green (Low).
* **Collapsible Sections:** To maintain a clean UI, the description is collapsed by default if it exceeds 50 characters, using a "Read More" toggle.
* **Visual States:** * **Done:** Features muted opacity and a strike-through title.
    * **In-Progress:** Uses a distinct blue background for the status fill.
    * **Overdue:** Triggers a red "OVERDUE" badge and highlights the time text.

## Accessibility Notes
* **Semantic Structure:** Utilized `<main>`, `<section>`, and `<article>` to provide a clear document outline.
* **Aria Roles:** The card title is linked to the section via `aria-labelledby`.
* **Input Handling:** All form controls use standard HTML elements (`select`, `input`, `textarea`) to ensure native keyboard focus and screen reader support.
* **Focus Management:** The application is designed to return focus to the Edit button when a user cancels or saves the edit form (though full focus trapping is a future enhancement).

## Known Limitations
* **Persistence:** Data is currently volatile; changes will reset upon page refresh as LocalStorage integration is not included in this stage.
* **Input Validation:** While the form accepts data, it does not currently prevent empty titles or past dates.
