const btn = document.getElementById('btn');
const out = document.getElementById('countOfMoney');
out.innerHTML = 0;
let money = 0;

btn.addEventListener('click', addMoney);

function addMoney() {
    money = money + 500;
    out.innerHTML = money;
}