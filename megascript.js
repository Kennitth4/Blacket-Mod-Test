document.querySelector('.styles__infoContainer___2uI-S-camelCase').innerHTML += "<input type=color id='test'>" + "<input type=color id='test2'>"
const savedColor = localStorage.getItem("background");
if (savedColor) {
    document.querySelector('.arts__profileBody___eNPbH-camelCase').style.backgroundColor = savedColor;
    document.querySelector('.styles__chatContainer___iA8ZU-camelCase').style.backgroundColor = savedColor;
    test.value = savedColor;
}
document.getElementById('test').addEventListener('input', (event) => {
const colr = test.value
document.querySelector('.arts__profileBody___eNPbH-camelCase').style.background = colr
document.querySelector('.styles__chatContainer___iA8ZU-camelCase').style.background = colr
	localStorage.setItem("background", colr)
}); const savedColor2 = localStorage.getItem("textcol");
if (savedColor2) {
    document.querySelector('.styles__chatMessage___2Z1ZU-camelCase').style.color = savedColor2;
    document.querySelector('.styles__pageText___1eo7q-camelCase').style.color = savedColor2;
    test2.value = savedColor2;
}
document.getElementById('test2').addEventListener('input', (event) => {
const clor = test2.value
document.querySelectorAll('.styles__leftRow___4jCaB-camelCase, .styles__leftRow___4jCaB-camelCase *').forEach(el => {
  el.style.setProperty('color', `${clor}`, 'important');
})
	localStorage.setItem("textcol", clor)
}); 
