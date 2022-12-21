// *get new value
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  //   new deposit
  const newDepositValue = parseFloat(inputField.value);
  inputField.value = "";
  return newDepositValue;
}
// *update filed
function updateField(totalFieldId, amount) {
  const totalInput = document.getElementById(totalFieldId);
  //   previous + new amount
  const previousAmount = parseFloat(totalInput.innerText);
  //   console.log(previousDepositAmount);
  const newTotal = previousAmount + amount;
  totalInput.innerText = newTotal;
}
// *update balance
function updateBalance(fieldId, newAmount, isAdd) {
  const totalBalance = document.getElementById(fieldId);

  const previousBalance = parseFloat(totalBalance.innerText);

  if (isAdd == true) {
    const newBalance = parseFloat(previousBalance + newAmount);
    totalBalance.innerText = newBalance;
  } else {
    const newBalance = parseFloat(previousBalance - newAmount);
    totalBalance.innerText = newBalance;
  }
}
document.getElementById("deposit-btn").addEventListener("click", function () {
  //  *********** deposit *************//

  //   new deposit
  const newDepositValue = getInputValue("deposit-input");

  updateField("deposit", newDepositValue);

  //  update balance
  updateBalance("balance", newDepositValue, true);
});
//  *************** withdraw *****************//
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputValue("withdraw-input");

  updateField("withdraw", newWithdrawAmount);
  // update balance
  updateBalance("balance", newWithdrawAmount, false);
});
