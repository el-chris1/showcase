// let stateList = document.getElementById('lamborghini-list');

// stateList.onchange = function() {
//     let selected = this.value
//  document.getElementById("info-abbreviation").textContent = lambo-Data[selected].abbr;
// document.getElementById("info-speed").textContent = lambo-Data[selected].speed;
// document.getElementById("info-year").textContent = lamboData[selected].year;
// document.getElementById("info-funfact").textContent = lamboData[selected].funFact;


// }

const card = document.getElementById('card');


for (each in lamboData) {

}

card.innerHTML = `<div id="card" class="card">
    <img class="card-img-top" src="holder.js/100x180/" alt="Title" />
    <div class="card-body">
        <h4 class="card-title">${lamboData[each].name}</h4>
        <p class="card-text">${lamboData[each].funFact}</p>
        <p class="card-text">Top Speed: ${lamboData[each].speed}</p>
        <p class="card-text">Year: ${lamboData[each].year}</p>
    </div>
</div>`