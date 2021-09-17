function calcularInteresSimple(debt, years, interest) {
    const interestPerc = interest / 100;
    let newDebt = debt;
    for(let i = 1; i <= years ; i++){
        newDebt += (debt * interestPerc);
    }
    return newDebt;
}

function calcularInteresSimple2(debt, years, interest) {
    const interestPerc = interest / 100;
    let newDebt = debt * (1 + interestPerc * years);
    return newDebt;
}

function calcularInteresCompuesto(debt, years, interest) {
    const interestPerc = interest / 100;
    let newDebt = debt;
    for(let i = 1; i <= years ; i++){
        newDebt += (newDebt * interestPerc);
    }
    return newDebt;
}

function calcularInteresCompuesto2(debt, years, interest) {
    const interestPerc = interest / 100;
    let newDebt = debt * Math.pow((1 + interestPerc), years);
    return newDebt.toFixed(2);
}

function comprobar(debt, years, interest) {
    return (debt !== '' && years !== '' && interest !== '');
}

function efectuarCalculo(debt, years, interest, type) {
    
    let resultado;
    switch(type) {
        case '1':
            resultado = calcularInteresSimple2(debt, years, interest);
            break;
        case '2':
            resultado = calcularInteresCompuesto2(debt, years, interest);
            break;
    }
    return resultado;
    

}