// let sqft = 0;
// let FMV = 0;
// let profit = 0;
// let MAO = 0;
// let rehabCost = 0;


// let rehabType = "";
// let fullRehab = 125 * sqft;
// let pullReplace = 70 * sqft; 
// let faceLift = 25 * sqft; 

// function setFMV(){ 
//   FMV = document.getElementById("fairmarketvalue").value;
//   console.log("FMV: " + FMV);
// }

// function setSQFT(){ 
//     sqft = document.getElementById("sqft").value;
//     console.log("SQFT: " + sqft);
//   }

// function setRehabType(){ 
//     rehabType = document.querySelector('input[name="rehabType"]:checked').value;
//     console.log("Rehab Type: " + rehabType);
// }


// function setProfit(){ 
//     profit = document.getElementById("desiredProfit").value;
//     console.log("Desired Profit: " + profit);
//   }

// const submitBtns = document.querySelectorAll('.submit-btn');

// submitBtns.forEach(function(submitBtn) {
//   submitBtn.addEventListener('click', function() {
//     submitBtn.innerText = 'Submitted';
//     submitBtn.disabled = true;
//   });
// });

// function calcRehab(){ 
//     rehabCost = sqft * rehabType;
//     console.log(rehabCost);
// }

// function calcMAO() { 
//     MAO = FMV - rehabCost - profit; 
//     console.log("MAO: " + MAO);
// }
let sqft = 0;
let FMV = 0;
let profit = 0;
let MAO = 0;
let rehabCost = 0;

const rehabTypeValues = {
  fullRehab: 125,
  pullReplace: 70,
  faceLift: 25
};

let rehabType = "";

function setFMV() {
  FMV = document.getElementById("fairmarketvalue").value;
  console.log("FMV: " + FMV);
}

function setSQFT() {
  sqft = document.getElementById("sqft").value;
  console.log("SQFT: " + sqft);
}

function setRehabType() {
  rehabType = document.querySelector('input[name="rehabType"]:checked').value;
  console.log("Rehab Type: " + rehabType);
}

function setProfit() {
  profit = document.getElementById("desiredProfit").value;
  console.log("Desired Profit: " + profit);
}

function calcRehab() {
  rehabCost = sqft * rehabTypeValues[rehabType];
  console.log(rehabTypeValues[rehabType])
  console.log(rehabCost);
}

function calcMAO() {
  MAO = FMV - rehabCost - profit;
  console.log("MAO: " + MAO);
  document.getElementById("MAO").innerText = "Maximum Available Offer: " + MAO; 
}

const submitBtns = document.querySelectorAll('.submit-btn');

submitBtns.forEach(function(submitBtn) {
  submitBtn.addEventListener('click', function() {
    submitBtn.innerText = 'Submitted';
    submitBtn.disabled = true;
  });
});
