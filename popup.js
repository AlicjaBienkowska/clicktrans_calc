// Comment : Get page content 
// const weightText = document.getElementsByClassName("weight")[0].innerText;
// const amountText = document.getElementsByClassName("amount")[0].innerText;
// const distanceText = document.getElementsByClassName("distance")[0].children[1].innerText;

const weightText = "ok. 1030 kg";
const amountText = "2";
const distanceText = "635 km";

// Comment : Convert weight to value
// Comment : Remove letters and spaces
let weightValue = weightText.replace(/\D/g,'');
weightValue = weightValue.replace(/\s/g, '');
weightValue = Number(weightValue);

let amountValue = amountText.replace(/\D/g,'');
amountValue = amountValue.replace(/\s/g, '');
amountValue = Number(amountValue);

let distanceValue = distanceText.replace(/\D/g,'');
distanceValue = distanceValue.replace(/\s/g, '');
distanceValue = Number(distanceValue);

// Comment : Calculate number of places on transport truck for calculation
const singlePlaceLimit = 1400;
let numberOfPlaces = weightValue / singlePlaceLimit;
numberOfPlaces = Math.ceil(numberOfPlaces);

// Comment : Calculate price
const pricePerKmEUR = 0.8;
const shippingPrice = Math.round(numberOfPlaces * pricePerKmEUR * distanceValue);

console.log("Simulated Price");
console.log(shippingPrice)

