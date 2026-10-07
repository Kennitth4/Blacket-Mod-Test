// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2026-10-07
// @description  try to take over the world!
// @author       You
// @match        https://blacket.org/*/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blacket.org
// @grant        none
// ==/UserScript==

(function() {
    const infoContainer = document.querySelector('.styles__infoContainer___2uI-S-camelCase');
    if (infoContainer) infoContainer.innerHTML += "<input type=color id='test'>" + "<input type=color id='test2'>" + "<input type=text id='test3' placeholder='Image URL'>";

    const marketContainer = document.querySelector('.styles__header___153FZ-camelCase');
    if (marketContainer) marketContainer.innerHTML += "<button onclick='OpenPackThing();'>OpenPack</button>";

    var stats = document.querySelector(
  '.styles__statsContainer___QnrRB-camelCase'
);

if (!stats) {
  console.error('Stats container not found');
} else {
  var input = document.getElementById('test4');

  if (!input) {
    input = document.createElement('input');
    input.id = 'test4';
    input.type = 'text';
    input.placeholder = 'Search usernames';
    stats.appendChild(input);
  }

  input.oninput = function () {
    var query = input.value.trim().toLowerCase();
    var cards = document.querySelectorAll(
      '.styles__friendsFriend___rj42a-camelCase'
    );

    cards.forEach(function (card) {
      var username = card.querySelector(
        '.styles__friendsUsername___904Ca-camelCase'
      );
      var name = username ? username.textContent.trim().toLowerCase() : '';

      if (query !== '' && name.indexOf(query) === -1) {
        card.style.setProperty('display', 'none', 'important');
      } else {
        card.style.removeProperty('display');
      }
    });
  };

  input.oninput();
}


    window.OpenPackThing = function() {
        let extra_delay = 0;
        let max_delay = Object.values(blacket.rarities)
          .map(r => r.wait)
          .reduce((a, b) => Math.max(a, b)) + extra_delay;

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

        const title = document.createElement("div");
        title.style.fontSize = "22px";
        title.style.textAlign = "center";
        title.textContent = "PACK OPENER";
        panel.appendChild(title);

        const stats = document.createElement("div");
        stats.style.margin = "10px 0";
        stats.style.fontSize = "15px";
        stats.className = "rainbowText";
        panel.appendChild(stats);

        const results = document.createElement("div");
        panel.appendChild(results);

        const pSBC=(p,c0)=>{let r,g,b,i=parseInt,m=Math.round;let d=i(c0.slice(1),16);r=d>>16;g=d>>8&255;b=d&255;return"#"+(4294967296+m((1-p)*r+p*255)*16777216+m((1-p)*g+p*255)*65536+m((1-p)*b+p*255)*256).toString(16).slice(1)};

        const openPack = pack => new Promise((res,rej)=>{
          blacket.requests.post("/worker3/open",{pack},d=>{
            if(d.error) rej();
            res(d.blook);
          });
        });

        const main = async (pack, amount) => {
          const pulled = {};
          const price = blacket.packs[pack].price;
          let opened = 0;
          let spent = 0;
          let bestRarity = null;

          stats.innerHTML = `Opening: ${pack}`;

          while (opened < amount) {
            try {
              const blook = await openPack(pack);
              const rarity = blacket.blooks[blook].rarity;
              const rData = blacket.rarities[rarity];

              blacket.user.tokens -= price;
              spent += price;
              opened++;

              pulled[blook] = (pulled[blook] || 0) + 1;
              if (!bestRarity || rData.exp > blacket.rarities[bestRarity].exp)
                bestRarity = rarity;

              stats.innerHTML = `
              Packs Opened: ${opened} / ${amount}<br>
              Tokens Spent: ${spent.toLocaleString()}<br>
              Tokens Left: ${blacket.user.tokens.toLocaleString()}<br>
              Last Pull: ${blook} (${rarity})
              `;

              results.innerHTML = "";
              for (const b in pulled) {
                const col = blacket.rarities[blacket.blooks[b].rarity].color;
                const div = document.createElement("div");
                div.style.margin = "6px 0";
                div.style.fontSize = "17px";
                div.style.background = `linear-gradient(45deg, ${col}, ${pSBC(.5,col)})`;
                div.style.webkitBackgroundClip = "text";
                div.style.webkitTextFillColor = "transparent";
                div.textContent = `${b} x${pulled[b]}`;
                results.appendChild(div);
              }
              await new Promise(r => setTimeout(r, rData.wait + extra_delay));
            } catch {
              await new Promise(r => setTimeout(r, max_delay));
            }
          }

          const end = document.createElement("div");
          end.style.marginTop = "12px";

          const summary = document.createElement("div");
          summary.className = "rainbowText";
          summary.innerHTML =
`<div style="font-size:18px;font-weight:bold;text-align:center;">OPENING COMPLETE</div>
Packs Opened: ${opened}<br>
Tokens Spent: ${spent.toLocaleString()}<br>
Tokens Left: ${blacket.user.tokens.toLocaleString()}<br>
Best Pull: ${bestRarity}`;
          end.appendChild(summary);

          const thanks = document.createElement("div");
          thanks.className = "bwFlash";
          thanks.style.marginTop = "8px";
          thanks.style.fontSize = "16px";
          thanks.style.textAlign = "center";
          thanks.innerHTML = "Thanks For Using My Opener!<br>-PrimeAndrew";
          end.appendChild(thanks);
          panel.appendChild(end);
        };

        let packs = Object.keys(blacket.packs);
        let pack;
        do {
          pack = prompt("Enter pack name");
          if (pack === null) break;
        } while (!packs.map(p=>p.toLowerCase()).includes(pack.toLowerCase()));

        if (pack) pack = packs.find(p=>p.toLowerCase()===pack.toLowerCase());

        let amount;
        let max = Math.floor(blacket.user.tokens / blacket.packs[pack].price);
        do {
          amount = parseInt(prompt(`Enter packs (Max ${max})`));
          if (amount === null) break;
        } while (!amount || amount < 1 || amount > max);

        if (pack && amount) main(pack, amount);
    };

    const applyBackgrounds = (bgCol, bgImg) => {
        const profileBody = document.querySelector('.arts__profileBody___eNPbH-camelCase');
        const chatContainer = document.querySelector('.styles__chatContainer___iA8ZU-camelCase');
        const tradeBackground = document.querySelector('.styles__blooksBackground___3oQ7Y-camelCase');

        const targets = [profileBody, chatContainer, tradeBackground];

        targets.forEach(target => {
            if (!target) return;

            if (bgCol) {
                target.style.backgroundColor = bgCol;
            }
            if (bgImg) {
                target.style.backgroundImage = `url("${bgImg}")`;
                target.style.backgroundSize = "cover";
                target.style.backgroundRepeat = "no-repeat";
                target.style.backgroundPosition = "center";
            }
        });
    };

    const savedColor = localStorage.getItem("background");
    const savedImage = localStorage.getItem("backgroundimg");
    applyBackgrounds(savedColor, savedImage);

    const test = document.getElementById('test');
    if (test) {
        if (savedColor) test.value = savedColor;
        test.addEventListener('input', (e) => {
            localStorage.setItem("background", e.target.value);
            applyBackgrounds(e.target.value, savedImage);
        });
    }

    const test3 = document.getElementById('test3');
    if (test3) {
        if (savedImage) test3.value = savedImage;
        test3.addEventListener('input', (e) => {
            localStorage.setItem("backgroundimg", e.target.value);
            applyBackgrounds(savedColor, e.target.value);
        });
    }

    const applyTextColor = (clor) => {
        document.querySelectorAll('.styles__chatMessage___2Z1ZU-camelCase, .styles__chatMessage___2Z1ZU-camelCase *, .styles__pageText___1eo7q-camelCase, .styles__pageText___1eo7q-camelCase *, .styles__leftRow___4jCaB-camelCase, .styles__leftRow___4jCaB-camelCase *').forEach(el => {
            el.style.setProperty('color', clor, 'important');
        });
    };

    const savedColor2 = localStorage.getItem("textcol");
    if (savedColor2) applyTextColor(savedColor2);

    const test2 = document.getElementById('test2');
    if (test2) {
        if (savedColor2) test2.value = savedColor2;
        test2.addEventListener('input', (e) => {
            const clor = e.target.value;
            applyTextColor(clor);
            localStorage.setItem("textcol", clor);
        });
    }

    const observer = new MutationObserver(() => {
        const curText = localStorage.getItem("textcol");
        if (curText) applyTextColor(curText);

        const curBg = localStorage.getItem("background");
        const curImg = localStorage.getItem("backgroundimg");
        applyBackgrounds(curBg, curImg);
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
