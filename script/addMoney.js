document.getElementById("add-money-btn").addEventListener("click", function () {
  console.log("add money function added");
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select A Bank") {
    alert("Please select a bank");
    return;
  }
  const accountNumber = getValueFromInput("add-money-number");
  if (accountNumber.length !== 11) {
    alert("Invalid Account Number");
    return;
  }

  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);
  console.log(newBalance);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(
      `Add Money Successfully from ${bankAccount} 
      at the time ${new Date()}`,
    );

    setBalance(newBalance);
  } else {
    alert("Invalid or Empty Pin");
    return;
  }

  console.log(bankAccount);

  // save with 4 step :
  //1. receive the place id
  const historyContainer = document.getElementById("history-container");
  // 2. create div
  const newHistory = document.createElement("div");
  // 3. innerHTML
  newHistory.innerHTML = `
  <div class="transaction-card p-5 bg-base-200">
  Add Money Successfully from  ${bankAccount} Ltd, Account No: is  ${accountNumber} 
        at the time ${new Date()}
  </div>
  `;
  // 4. add append
  historyContainer.append(newHistory);
});
