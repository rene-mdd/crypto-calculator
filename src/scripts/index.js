var selected = document.getElementById("cryptoCurrencies");
var btc = selected.options[selected.selectedIndex].text;
var selected2 = document.getElementById("currency");
var usd = selected2.options[selected2.selectedIndex].text;
var change = "";
var form = document.querySelector("form");
var total = 0;

form.addEventListener("submit", function() {
  change = document.getElementById("amount").value;

  fetch(`https://api.cryptonator.com/api/full/${btc}-${usd}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      total = Number(change) * Number(data.ticker.price);
      document.getElementById("result").value = Math.floor(total).toFixed(2);
    })
    .catch(e => {
      console.log(e + "error");
    });
});
