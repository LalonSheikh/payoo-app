document.getElementById("cashout-btn").addEventListener("click", function () {
  // get the cashout number & validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length !== 11) {
    alert("Invalid Agent Number");
    return;
  }
  // console.log(cashoutNumber);
  // get the amount
  const cashoutAmount = getValueFromInput("cashout-amount");
  // get the current balance
  // const balanceElement = document.getElementById("balance");
  // const balance = balanceElement.innerText;
  // console.log(balance);
  let balance1 = getBalance("balance");
  // calculate balance
  const newBalance = balance1 - Number(cashoutAmount);
  console.log("newBalance", newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  const pin = getValueFromInput("cashout-pin");
  if (pin === "1234") {
    alert("Cash Out Successful");
    // document.getElementById("balance").innerText = newBalance;
    setBalance(newBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
  // save with 4 step :
  //1. receive the place id
  const historyContainer = document.getElementById("history-container");
  // 2. create div
  const newHistory = document.createElement("div");
  // 3. innerHTML
  newHistory.innerHTML = `
  <div class="transaction-card p-5 bg-base-200">
  Cashout Successfully from  ${cashoutAmount} Taka, Account No: is  ${cashoutNumber} 
        at the time ${new Date()}
  </div>
  `;
  // 4. add append
  historyContainer.append(newHistory);
});

// // console.log(alert("cashout js"));
// document.getElementById("cashout-btn").addEventListener("click", function () {
//   const cashOutNumberInput = document.getElementById("cashout-number");
//   const cashOutNumber = cashOutNumberInput.value;
//   console.log(cashOutNumber);
//   if (cashOutNumber.length !== 11) {
//     alert("Invalid Agent Number");
//     return;
//   }

//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);
//   //   get the current balance
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);

//   //   newbalance count
//   const newBalance = Number(balance) - Number(cashoutAmount);
//   if (newBalance < 0) {
//     alert("Invalid Balance");
//     return;
//   }
//   //   console.log(newBalance);
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value;
//   if (pin == "1234") {
//     alert("Cashout Successful");
//     balanceElement.innerText = newBalance;
//   } else {
//     alert("Invalid Pin");
//     return;
//   }
//   console.log("new Balance:", newBalance);
// });
