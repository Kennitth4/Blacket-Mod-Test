const container = document.querySelector('.styles__infoContainer___2uI-S-camelCase');
const marketcontainer = document.querySelector('.styles__header___153FZ-camelCase');
if (container) {
    container.innerHTML += "<input type=color id='test'>" + "<input type=color id='test2'>";
}
if (marketcontainer) {
    container.innerHTML += "<button onclick='let extra_delay = 0;

// === max delay ===
let max_delay = Object.values(blacket.rarities)
  .map(r => r.wait)
  .reduce((a, b) => Math.max(a, b)) + extra_delay;

// === styles ===
if (!document.getElementById("opener-style")) {
  const style = document.createElement("style");
  style.id = "opener-style";
  style.innerHTML = `
  @keyframes bwFlash {
    0%,100% { color:#000; background:#fff; }
    50% { color:#fff; background:#000; }
  }
  @keyframes rainbow {
    0% { background-position:0% 50%; }
    50% { background-position:100% 50%; }
    100% { background-position:0% 50%; }
  }
  .bwFlash {
    font-size:22px;
    font-weight:bold;
    font-family: Titan One, sans-serif;
    text-align:center;
    white-space:pre-line;
    animation:bwFlash .5s infinite;
    padding:6px 10px;
    border-radius:10px;
  }
  .rainbowText {
    font-weight: bold;
    font-family: Titan One, sans-serif;
    background: linear-gradient(270deg, red, orange, yellow, green, blue, indigo, violet);
    background-size: 1400% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow 6s linear infinite;
  }
  `;
  document.head.appendChild(style);
}

// === panel ===
const panel = document.createElement("div");
Object.assign(panel.style, {
  position: "fixed",
  top: "20px",
  right: "20px",
  width: "340px",
  maxHeight: "80vh",
  overflowY: "auto",
  background: "#111",
  color: "#fff",
  padding: "15px",
  borderRadius: "20px",
  fontFamily: "Titan One, sans-serif",
  boxShadow: "0 0 20px rgba(0,0,0,.5)",
  cursor: "move",
  resize: "both"
});
document.body.appendChild(panel);

// === draggable ===
let dragging = false, ox, oy;
panel.addEventListener("mousedown", e => {
  dragging = true;
  ox = e.clientX - panel.offsetLeft;
  oy = e.clientY - panel.offsetTop;
});
document.addEventListener("mousemove", e => {
  if (!dragging) return;
  panel.style.left = e.clientX - ox + "px";
  panel.style.top = e.clientY - oy + "px";
  panel.style.right = "auto";
});
document.addEventListener("mouseup", () => dragging = false);

// === UI elements ===
const title = document.createElement("div");
title.style.fontSize = "22px";
title.style.textAlign = "center";
title.textContent = "PACK OPENER";
panel.appendChild(title);
