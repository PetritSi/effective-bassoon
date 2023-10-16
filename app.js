const value = document.querySelector("#value");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const increase = document.querySelector("#increase");

let count = 0;
increase.addEventListener("click", function(){
    value.textContent = ++count;
    if(count > 0){
        value.style.color = "green";
    }
    if(count === 0){
        value.style.color = "black";
    }
});

reset.addEventListener("click", function(){
    value.textContent = 0;
        value.style.color = "black";
    count = 0;

    
})

decrease.addEventListener("click", function(){
    value.textContent = --count;
    if(count < 0){
        value.style.color = "red";
    }
    if(count === 0){
        value.style.color = "black";
    }
})




