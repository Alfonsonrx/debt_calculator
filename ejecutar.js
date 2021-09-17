const debt = document.getElementById("inputDebt");
const years = document.getElementById("inputYears");
const interest = document.getElementById("inputInterest");
const resParaph = document.getElementById("results");
const type = document.getElementById("comboDebt");
let typeVal = type.value;

function run() {
    typeVal = document.getElementById("comboDebt").value;
}

function calcular() {
    const debtVal = parseInt(debt.value);
    const yearsVal = parseInt(years.value);
    const interestVal = parseInt(interest.value);
    
    if(comprobar(debt.value, years.value, interest.value)) {
        let result = efectuarCalculo(debtVal, yearsVal, interestVal , typeVal);
        resParaph.innerText = "Your final debt that start in "+debtVal+" with "+interestVal+"% interest per year in "+yearsVal+" years is "+result;
    } else {
        alert("Alguna de las casillas se encuentra vacia")
    }
}