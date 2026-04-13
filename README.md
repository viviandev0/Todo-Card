# HNG Stage 0: Testable Todo Item Card

A high-fidelity, interactive Todo Item Card built with vanilla web technologies. This project focuses on semantic HTML, real-time data updates, and accessibility, specifically designed to meet automated testing requirements for the HNG Stage 0 frontend task.

#  Links
- **Live Demo:** 
- **Repository:** https://github.com/viviandev0/Todo-Card

##  Tech Stack
- **HTML5:** Semantic structure using `<article>`, `<time>`, and `<header>`.
- **CSS3:** Custom styling with hover interactions, transitions, and a dark-themed "startup" aesthetic.
- **JavaScript (ES6+):** Pure vanilla JS for real-time time-remaining calculations and DOM manipulation.

##  Key Decisions & Trade-offs
- **Vanilla JS over Frameworks:** Chose a zero-dependency approach to ensure lightning-fast load times and to demonstrate core DOM manipulation skills.
- **Dynamic Time Formatting:** Implemented a logic-based countdown that updates every 30 seconds to ensure the "Due in" or "Overdue by" status is always accurate to the current time.
- **Testability:** Strictly mapped `data-testid` attributes to all key elements (title, description, priority, etc.) to ensure 100% compatibility with automated evaluation suites.
- **Accessibility:** Used the `<time>` element with a `datetime` attribute as the single source of truth for date logic, ensuring screen readers and scripts both interpret the data correctly.

##  Running Locally
1. Clone the repository.
2. Open `index.html` in your browser.
3. To test the "Overdue" state, change the `datetime` attribute in `index.html` to a past date.
