const currentDate = document.querySelector('#CurrentDate')
const today = new Date().toDateString()
currentDate.textContent = today

const ossz = document.querySelector('#ossz')
const childSelect = document.querySelector('#gyerekek')
const adultSelect = document.querySelector('#felnottek')

ossz.textContent = 'Összesen: 0 HUF'

let adultAmount = 0;
let childAmount = 0;

adultSelect.addEventListener('change', e => {
    adultAmount = e.target.value;
    let text;

    if (adultAmount != 2) {
        text = calcAmount(adultAmount, childAmount);
    } else {
        text = calcDisc(childAmount);
    }

    ossz.textContent = `Összesen: ${text} HUF`
})

childSelect.addEventListener('change', e => {
    childAmount = e.target.value; 
    let text;
    if (adultAmount != 2) {
        text = calcAmount(adultAmount, childAmount);
    } else {
        text = calcDisc(childAmount);
    }
    
    ossz.textContent = `Összesen: ${text} HUF`
})

function calcAmount(adultAmount, childAmount) {
    let total = 0

    const calcAdult = amount => {
        if (amount == 0) return 0
        return 1500 + (amount - 1) * 1300
    }

    const calcChild = amount => {
        if (amount == 0) return 0

        return 1000 + (amount - 1) * 900
    }

    total += calcAdult(adultAmount)
    total += calcChild(childAmount)

    return total
}

function calcDisc(childAmount) {
    if(childAmount == 0) return 2700;
    return 3500 + (childAmount - 1) * 800;
}