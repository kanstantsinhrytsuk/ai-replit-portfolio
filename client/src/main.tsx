import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import fonts for MUI
// These would normally be loaded via the HTML template but we're importing them here
const interLink = document.createElement('link');
interLink.rel = 'stylesheet';
interLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
document.head.appendChild(interLink);

const poppinsLink = document.createElement('link');
poppinsLink.rel = 'stylesheet';
poppinsLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
document.head.appendChild(poppinsLink);

const robotoLink = document.createElement('link');
robotoLink.rel = 'stylesheet';
robotoLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap';
document.head.appendChild(robotoLink);

createRoot(document.getElementById("root")!).render(<App />);
