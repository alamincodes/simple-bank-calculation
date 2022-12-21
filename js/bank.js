document.getElementById("deposit-btn").addEventListener("click", function () {
  //  *********** deposit field *************//
  const depositInput = document.getElementById("deposit-input");
  //   new deposit
  const newDepositValue = parseFloat(depositInput.value);
  const totalDeposit = document.getElementById("deposit");
  //   previous + new amount
  const previousDepositAmount = parseFloat(totalDeposit.innerText);
  //   console.log(previousDepositAmount);
  const newTotalDeposit = parseFloat(previousDepositAmount + newDepositValue);
  totalDeposit.innerText = newTotalDeposit;

  //   update balance
  const totalBalance = document.getElementById("balance");

  const previousBalance = parseFloat(totalBalance.innerText);

  const newBalance = parseFloat(previousBalance + newDepositValue);
  totalBalance.innerText = newBalance;

  //   clear input field
  depositInput.value = "";
});
//  *************** withdraw *****************//
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const newWithdrawAmount = parseFloat(withdrawInput.value);
  const withdrawAmount = document.getElementById("withdraw");
  const previousWithdrawAmount = parseFloat(withdrawAmount.innerText);
  const totalWithdraw = parseFloat(previousWithdrawAmount + newWithdrawAmount);
  withdrawAmount.innerText = totalWithdraw;
  // update balance
  const totalBalance = document.getElementById("balance");
  const previousBalanceAmount = parseFloat(totalBalance.innerText);
  const totalWithdrawAmount =  parseFloat( previousBalanceAmount - newWithdrawAmount);
  totalBalance.innerText = totalWithdrawAmount; 
  // clear input
  withdrawInput.value = "";
});
