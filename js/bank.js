// *get amount
function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const newInputValue = parseFloat(input.value);
  input.value = "";
  return newInputValue;
}
// *update field
function updateField(fieldId, newAmount) {
  const amountField = document.getElementById(fieldId);
  const previousAmount = parseFloat(amountField.innerText);
  const totalDeposit = previousAmount + newAmount;
  amountField.innerText = totalDeposit;
}
// *update balance
function updateBalance(fieldId, prevAmount, isAdd) {
  const balanceField = document.getElementById(fieldId);
  const previousBalance = parseFloat(balanceField.innerText);
  if (isAdd == true) {
    const totalBalance = previousBalance + prevAmount;
    balanceField.innerText = totalBalance;
  } else {
    const totalBalance = previousBalance - prevAmount;
    balanceField.innerText = totalBalance;
  }
}
document.getElementById("deposit-btn").addEventListener("click", function () {
  // ******** deposit ******* //
  // get deposit
  const newDepositValue = getInputValue("deposit-input");
  // previous deposit
  if (newDepositValue > 0) {
    updateField("deposit", newDepositValue);

    //  update balance
    updateBalance("balance", newDepositValue, true);
  }
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  // ****** withdraw ******* //
  // get withdraw
  const newWithdrawValue = getInputValue("withdraw-input");
  // previous withdraw
  const currentBalance = document.getElementById("balance");
  const currentBalanceValue = parseFloat(currentBalance.innerText);
  if (newWithdrawValue > 0 && newWithdrawValue < currentBalanceValue) {
    updateField("withdraw", newWithdrawValue);

    // update balance
    updateBalance("balance", newWithdrawValue, false);
  }
  if(newWithdrawValue > currentBalanceValue){
    const error = document.getElementById('error-message');
    error.innerText = "Your account dose not enough money!!"
  }
});
