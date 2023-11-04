
const countValue = document.querySelector("[countmidvalue]");

function increment(){
    
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};


function decrement(){
        let value = parseInt(countValue.innerText);
        value = value - 1;
        countValue.innerText = value;
};