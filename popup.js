document.getElementById("buttonCalculate").addEventListener("click", calculate);

function calculate() {
  // Comment : Get page content
  // const weightText = document.getElementsByClassName("weight")[0].innerText;
  // const amountText = document.getElementsByClassName("amount")[0].innerText;
  // const distanceText = document.getElementsByClassName("distance")[0].children[1].innerText;

  const weightText = "ok. 1030 kg";
  const amountText = "2";
  const distanceText = "635 km";

  // Comment : Convert weight to value
  // Comment : Remove letters and spaces
  let weightValue = convert_to_number(weightText);
  let amountValue = convert_to_number(amountText);
  let distanceValue = convert_to_number(distanceText);

  // Comment : Calculate number of places on transport truck for calculation
  const singlePlaceLimit = 1400;

  // Comment : Check if user gave weight
  let singlePlaceLimitInput = document.getElementById("weightInput").value;
  let singlePlaceLimitInputValue = singlePlaceLimitInput
    ? Number(singlePlaceLimitInput)
    : 0;
  if (singlePlaceLimitInputValue) {
    singlePlaceLimit = singlePlaceLimitInputValue;
  }

  let numberOfPlaces = weightValue / singlePlaceLimit;
  numberOfPlaces = Math.ceil(numberOfPlaces);

  // Comment : Calculate price
  const pricePerKmEUR = 0.8;

  // Comment : Check if user gave price
  let pricePerKmEURInput = document.getElementById("rateInput").value;
  let pricePerKmEURInputValue = pricePerKmEURInput
    ? Number(pricePerKmEURInput)
    : 0;
  if (pricePerKmEURInputValue) {
    pricePerKmEUR = pricePerKmEURInputValue;
  }

  const shippingPrice = Math.round(
    numberOfPlaces * pricePerKmEUR * distanceValue
  );

  console.log("Simulated Price");
  console.log(shippingPrice);

  // Commenet : Set value in input fields
 document.getElementById("inputShipPriceMin").setValue = "Test";
document.getElementById("inputShipPriceCalc").setValue = "Test";
document.getElementById("inputShipPriceMax").setValue = "Test";

}

function convert_to_number(initText) {
  let convertedNum = 0;

  let preparedText = initText.replace(/\D/g, "");
  preparedText = preparedText.replace(/\s/g, "");

  if (preparedText.length > 0) {
    preparedText = Number(preparedText);
  }

  if (preparedText) {
    convertedNum = preparedText;
  }

  return convertedNum;
}
