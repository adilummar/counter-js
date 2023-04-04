const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset")
const counterValue = document.getElementById("value")
let baseValue = 0

increaseBtn.addEventListener("click",()=>{
    baseValue += 1
    counterValue.textContent = baseValue
    setColor() 
});

resetBtn.addEventListener('click',()=>{
    baseValue = 0;
    counterValue.textContent = baseValue
    setColor()
})

decreaseBtn.addEventListener('click',()=>{
    baseValue -= 1;
    counterValue.textContent = baseValue
    setColor()
})

function setColor(){
    if(baseValue < 0){
        counterValue.style.color = "red";
    }else if(baseValue === 0){
        counterValue.style.color = "black";
    }else {
        counterValue.style.color = "green";
    }
}
