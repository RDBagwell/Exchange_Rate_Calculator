const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

async function caclulate() {
    const currentcy_one = currencyOne.value;
    const currentcy_two = currencyTwo.value;
    const apiURL = `https://api.exchangerate-api.com/v4/latest/${currentcy_one}`;

    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        const ex_rate = amountOne.value * data.rates[currentcy_two];
        rate.textContent = `${amountOne.value} ${currentcy_one} = ${ex_rate} ${currentcy_two}`;
        amountTwo.value = ex_rate.toFixed(2);
    } catch (error) {
        console.log(error);
    }
}

currencyOne.addEventListener('change', caclulate);
currencyTwo.addEventListener('change', caclulate);
amountOne.addEventListener('input', caclulate);
amountTwo.addEventListener('input', caclulate);

swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    caclulate();
  });

caclulate()