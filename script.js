let stateList = document.getElementById('lamborghini-list');

stateList.onchange = function() {
    let selected = this.value
 document.getElementById("info-abbreviation").textContent = stateData[selected].abbr;
document.getElementById("info-speed").textContent = stateData[selected].speed;
document.getElementById("info-year").textContent = stateData[selected].year;
document.getElementById("info-fun-fact").textContent = stateData[selected].funFact;


}