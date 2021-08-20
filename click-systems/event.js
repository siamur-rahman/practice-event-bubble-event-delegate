//CLICK SYSTEM-2 
function makegray() {
   document.body.style.backgroundColor = 'gray';
}


//CLICK SYSTEM-3
const greenButton = document.getElementById('green-button');
// console.log(greenButton);
greenButton.onclick = makeGreen; // EKHANE CALL KORA ZABE NA
function makeGreen() {
   document.body.style.backgroundColor = 'green';
}



// JS E NITE HOBE..sys-4............Anonymas function 
const blueButton = document.getElementById('blue-button');

blueButton.onclick = function makeBlue() {
   document.body.style.backgroundColor = 'blue';
};



// JS E NITE HOBE..sys-5............ 
const goldenRodButton = document.getElementById('goldenRod-button');

goldenRodButton.addEventListener('click', makeGoldenRod)

function makeGoldenRod() {
   document.body.style.backgroundColor = 'goldenRod';
}


// JS E NITE HOBE..sys-6............ 
const hotPinkButton = document.getElementById('hotpink-button');

hotPinkButton.addEventListener('click', function makeHotPink() {
   document.body.style.backgroundColor = 'hotPink';
});



// JS E NITE HOBE..sys-7............ 
document.getElementById('lightBlue-button').addEventListener('click', function () {
   document.body.style.backgroundColor = 'lightBlue';
});
