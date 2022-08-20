document.getElementById("calc").addEventListener("click", function () {
   calculate();
});

function calculate() {
   const income = parseFloat(document.getElementById("income").value);
   const food = parseFloat(document.getElementById("food").value);
   const rent = parseFloat(document.getElementById("rent").value);
   const clothes = parseFloat(document.getElementById("clothes").value);
   const totalExpense = food + rent + clothes;
   const balance = income - totalExpense;
   if (income > 0 && food > 0 && rent > 0 && clothes > 0) {
      document.getElementById("total-expense").innerText = totalExpense;
      document.getElementById("balance").innerText = balance;
   } else {
      alert("Income, Food, Rent and Clothes values must to be more than 0");
   }
   return balance;
}

document.getElementById("save").addEventListener("click", function () {
   const saveInp = parseFloat(document.getElementById("save-inp").value);
   const balance = calculate();
   const savingAmount = balance * (saveInp / 100);
   document.getElementById("remaining").innerText = balance - savingAmount;
   console.log(balance);
   if (saveInp>=0&&balance>=0) {
      document.getElementById("saving-amount").innerText = savingAmount;
   } else {
      document.getElementById("remaining").innerText = balance;
   }
});
