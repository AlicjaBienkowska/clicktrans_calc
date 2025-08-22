document.getElementById("buttonCalculate").addEventListener("click", calculate);


clear_values()
calculate();


//**********************************************//

function calculate() {
  // Comment : Get page content
  const weightText = document.getElementsByClassName("weight")[0].innerText;
  const amountText = document.getElementsByClassName("amount")[0].innerText;
  const distanceText = document.getElementsByClassName("distance")[0]
    .children[1].innerText;

  if (weightText && amountText && distanceText) {
    // const weightText = "ok. 1030 kg";
    // const amountText = "2";
    // const distanceText = "635 km";

    // Comment : Convert weight to value
    // Comment : Remove letters and spaces
    let weightValue = convert_to_number(weightText);
    let amountValue = convert_to_number(amountText);
    let distanceValue = convert_to_number(distanceText);

    // Comment : Check cost
    let costPerKmEUR = 0.4;
    let costPerKmEURInput = document.getElementById("costInput").value;
    let costPerKmEURInputValue = costPerKmEURInput
      ? Number(costPerKmEURInput)
      : 0;
    if (costPerKmEURInputValue) {
      costPerKmEUR = costPerKmEURInputValue;
    } else {
      document.getElementById("costInput").value = costPerKmEUR;
    }

    // Comment : Check number of places on truck
    let singlePlaceLimit = 1400;
    let singlePlaceLimitInput = document.getElementById("weightInput").value;
    let singlePlaceLimitInputValue = singlePlaceLimitInput
      ? Number(singlePlaceLimitInput)
      : 0;
    if (singlePlaceLimitInputValue) {
      singlePlaceLimit = singlePlaceLimitInputValue;
    } else {
      document.getElementById("weightInput").value = singlePlaceLimit;
    }

    let numberOfPlaces = weightValue / singlePlaceLimit;
    numberOfPlaces = Math.ceil(numberOfPlaces);

    // Comment : Check price
    let pricePerKmEUR = 0.8;
    let pricePerKmEURInput = document.getElementById("rateInput").value;
    let pricePerKmEURInputValue = pricePerKmEURInput
      ? Number(pricePerKmEURInput)
      : 0;
    if (pricePerKmEURInputValue) {
      pricePerKmEUR = pricePerKmEURInputValue;
    } else {
      document.getElementById("rateInput").value = pricePerKmEUR;
    }

    const shippingPrice =
      Math.round((numberOfPlaces * pricePerKmEUR * distanceValue) / 10) * 10;
    const shippingCost = Math.round(
      numberOfPlaces * costPerKmEUR * distanceValue
    );
    const shippingPriceMin =
      Math.round((numberOfPlaces * pricePerKmEUR * distanceValue * 0.8) / 10) *
      10;
    const shippingPriceMax =
      Math.round((numberOfPlaces * pricePerKmEUR * distanceValue * 1.2) / 10) *
      10;

    const diffPrice = shippingPrice - shippingCost;
    const diffPriceMin = shippingPriceMin - shippingCost;
    const diffPriceMax = shippingPriceMax - shippingCost;

    // Commenet : Set value in input fields
    document.getElementById("inputShipCostCalc").value = shippingCost;
    document.getElementById("inputShipPriceCalc").value = shippingPrice;
    document.getElementById("inputShipPriceMin").value = shippingPriceMin;
    document.getElementById("inputShipPriceMax").value = shippingPriceMax;
    document.getElementById("inputDiffShipPriceCalc").value = diffPrice;
    document.getElementById("inputDiffShipPriceMin").value = diffPriceMin;
    document.getElementById("inputDiffShipPriceMax").value = diffPriceMax;

    document.getElementById(
      "textInfoWeight"
    ).innerText = `Weight: ${weightValue.toLocaleString()}`;
    document.getElementById(
      "textInfoAmount"
    ).innerText = `Amount: ${amountValue.toLocaleString()}`;
    document.getElementById(
      "textInfoDistance"
    ).innerText = `Distance: ${distanceValue.toLocaleString()}`;
  }
}

function clear_values() {
  document.getElementById("inputShipCostCalc").value = "";
  document.getElementById("inputShipPriceCalc").value = "";
  document.getElementById("inputShipPriceMin").value = "";
  document.getElementById("inputShipPriceMax").value = "";
  document.getElementById("inputDiffShipPriceCalc").value = "";
  document.getElementById("inputDiffShipPriceMin").value = "";
  document.getElementById("inputDiffShipPriceMax").value = "";

  document.getElementById("textInfoWeight").innerText = "";
  document.getElementById("textInfoAmount").innerText = "";
  document.getElementById("textInfoDistance").innerText = "";
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
