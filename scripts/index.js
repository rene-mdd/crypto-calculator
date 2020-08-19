var selected = document.getElementById('cryptoCurrencies')
var localCurrency = selected.options[selected.selectedIndex].value
var selected2 = document.getElementById('currency')
var change = ''
var form = document.querySelector('form')
var total = 0
var body = document.querySelector('body')
var bitcoin = document.getElementById("btc");

body.onload = function () {
  
  fetch(`https://api.cryptonator.com/api/full/btc-eur`).then(response => {
    return response.json()
  }).then(data => {
    document.getElementById("btc").innerHTML = data.ticker.price.slice(0, 8).toString();
  })

  fetch(`https://api.cryptonator.com/api/full/xrp-eur`).then(response => {
    return response.json()
  }).then(data => {
    document.getElementById("ripple").innerHTML = data.ticker.price.slice(0, 8).toString();
  })

  fetch(`https://api.cryptonator.com/api/full/eos-eur`).then(response => {
    return response.json()
  }).then(data => {
    document.getElementById("eos").innerHTML = data.ticker.price.slice(0, 8).toString();
  })

  fetch(`https://api.cryptonator.com/api/full/ltc-eur`).then(response => {
    return response.json()
  }).then(data => {
    document.getElementById("ltc").innerHTML = data.ticker.price.slice(0, 8).toString();
  })

  fetch(`https://api.cryptonator.com/api/full/eth-eur`).then(response => {
    return response.json()
  }).then(data => {
    document.getElementById("eth").innerHTML = data.ticker.price.slice(0, 8).toString();
  })
}

form.addEventListener('click', function (e) {
  change = document.getElementById('amount').value
  console.log(selected2.options[selected2.selectedIndex].value)
  console.log(selected.options[selected.selectedIndex].value)
  e.preventDefault();
  fetch(
    `https://api.cryptonator.com/api/full/${selected.options[selected.selectedIndex].value}-${
      selected2.options[selected2.selectedIndex].value
    }`
  )
    .then(response => {
      return response.json()
    })
    .then(data => {
      total = Number(change) * Number(data.ticker.price)
      console.log(total)
      document.getElementById('result').value = total.toString().slice(0, 7);
    })
    .catch(e => {
      console.log(e + 'error')
    })
})
