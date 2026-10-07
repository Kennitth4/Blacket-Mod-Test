const container = document.querySelector('.styles__infoContainer___2uI-S-camelCase');
const marketcontainer = document.querySelector('.styles__header___153FZ-camelCase');
if (container) {
    container.innerHTML += "<input type=color id='test'>" + "<input type=color id='test2'>";
}
if (marketcontainer) {
    container.innerHTML += "<button onclick='openPackthing()'>Pack Opener</button>

const savedColor = localStorage.getItem("background");
if (savedColor) {
    const profile = document.querySelector('.arts__profileBody___eNPbH-camelCase');
    if (profile) profile.style.backgroundColor = savedColor;

    const chat = document.querySelector('.styles__chatContainer___iA8ZU-camelCase');
    if (chat) chat.style.backgroundColor = savedColor;

    const blooks = document.querySelector('.styles__blooksBackground___3oQ7Y-camelCase');
    if (blooks) blooks.style.backgroundColor = savedColor;

    const input1 = document.getElementById('test');
    if (input1) input1.value = savedColor;
}

const testInput = document.getElementById('test');
if (testInput) {
    testInput.addEventListener('input', (event) => {
        const colr = testInput.value;
        const profile = document.querySelector('.arts__profileBody___eNPbH-camelCase');
        if (profile) profile.style.background = colr;

        const chat = document.querySelector('.styles__chatContainer___iA8ZU-camelCase');
        if (chat) chat.style.background = colr;

        localStorage.setItem("background", colr);
    });
}

function openPackthing() {
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
}

const savedColor2 = localStorage.getItem("textcol");
if (savedColor2) {
    const chatMsg = document.querySelector('.styles__chatMessage___2Z1ZU-camelCase');
    if (chatMsg) chatMsg.style.color = savedColor2;

    const pageText = document.querySelector('.styles__pageText___1eo7q-camelCase');
    if (pageText) pageText.style.color = savedColor2;

    const input2 = document.getElementById('test2');
    if (input2) input2.value = savedColor2;
}

const test2Input = document.getElementById('test2');
if (test2Input) {
    test2Input.addEventListener('input', (event) => {
        const clor = test2Input.value;
        document.querySelectorAll('.styles__leftRow___4jCaB-camelCase, .styles__leftRow___4jCaB-camelCase *').forEach(el => {
            el.style.setProperty('color', `${clor}`, 'important');
        });
        localStorage.setItem("textcol", clor);
    });
}
