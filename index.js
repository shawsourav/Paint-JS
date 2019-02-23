import { initCanvas } from "./src/listener";
import './src/styles/style.css';

if (document.readyState === "loading") {  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", initCanvas);
} else {  // `DOMContentLoaded` has already fired
  initCanvas();
}