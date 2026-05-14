let stateList = document.getElementById('lamborghini-list');

stateList.onchange = function() {
    let selected = this.value
 document.getElementById("info-abbreviation").textContent = lambo-Data[selected].abbr;
document.getElementById("info-speed").textContent = lambo-Data[selected].speed;
document.getElementById("info-year").textContent = lamboData[selected].year;
document.getElementById("info-funfact").textContent = lamboData[selected].funFact;


}