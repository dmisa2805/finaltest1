//SPIN SECTION
const spinBtn = document.getElementById('spin-button');
const spinItems = document.querySelectorAll('.spin-item');
const spinImg = ['/bau.png','/ca.png', '/cua.png', '/ga.png', '/huou.png', '/tom.png']

let finalResult = [];

spinItems.forEach((item,index) => {
const spinDefault = spinImg[Math.floor(Math.random()*spinImg.length)];
item.innerHTML=`<img src="${spinDefault}"/>`
})

spinBtn.addEventListener('click', () => {
    spinBtn.disabled = true;
    selectBtn.disabled = true;
    selectItem.forEach((item) => {
        item.disabled = true;
    })
    let spinCount = 100;
    finalResult = [];
    spinItems.forEach((item, index) => {
        let currentCount = 0;
        const spinInterval = setInterval(() => {
            const spinRandom = spinImg[Math.floor(Math.random()*spinImg.length)]
            item.innerHTML = `<img src="${spinRandom}"/>`
            currentCount++;
            if (currentCount >= spinCount) {
                clearInterval(spinInterval)
                const finalImg = spinRandom;
                item.innerHTML = `<img src="${finalImg}"/>`
                finalResult.push(finalImg);
            }
        }, 10)
    })
    setTimeout(() => {
        spinBtn.disabled = false;
        selectBtn.disabled = false;
        selectItem.forEach((item) => {
            item.disabled = false;
        })
        }, 1000)
})

//SELECT SECTION
const selectBtn = document.getElementById('select-button');
const selectNumber = document.querySelectorAll('.select-item-number');
const selectItem = document.querySelectorAll('.select-item');
const number = [0,1,2,3];

function defaultNumber() {
selectNumber.forEach((item) => {
    const numberDefault = number[0];
    item.innerText=numberDefault;
})
}
let clickCount = 0;
defaultNumber();

selectItem.forEach((item) => {
    item.addEventListener('click', () => {
        const numberItem = item.querySelector('.select-item-number');
        let currentClick = Number(numberItem.innerText);
        let clickCountMax = 3;
        if (clickCount < clickCountMax) {
            if (currentClick < clickCountMax) {
                numberItem.innerText= currentClick + 1;
                clickCount++;
            }
            else {
                alert('Tổng điểm cược tất cả các hình tối đa là 3');
            }
        }
        else {
            alert('Tổng điểm cược tất cả các hình tối đa là 3');
        }

    })
})

selectBtn.addEventListener('click', () => {
    clickCount = 0;
    return defaultNumber();
})

//SO SÁNH

