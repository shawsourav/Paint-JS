import { initCanvas } from "./src/listener";

if (document.readyState === "loading") {  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", initCanvas);
} else {  // `DOMContentLoaded` has already fired
  initCanvas();
}