const button = document.querySelectorAll(".button");
let input = document.querySelector("#input");
let equal = document.querySelector(".equalBtn");
let clear = document.querySelector(".clearBtn");

button.forEach(function(button) {
    button.addEventListener('click', (e) => {
        let value = e.target.dataset.num;
        input.value += value;
    })

    
    equal.addEventListener('click', (e) => {
        if(input.value === ''){
            input.value = '';
        } else {
            let answer = eval(input.value);
            input.value = answer;
        }
    })

    clear.addEventListener('click', (e) => {
        input.value = '';
    })
    

});

