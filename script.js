let string = "";
let buttons = document.querySelectorAll('.button')
let display = document.querySelector('.blank-space')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = string.replace('x', '*').replace('÷', '/')
            if (string.includes('/0')) {
                string = ""
                display.textContent = "Can't Divide by 0"
            } else {
                string = eval(string)
                display.textContent = string
            }
        }
        else if (e.target.innerHTML == "AC") {
            string = ""
            display.textContent = "0"
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            display.textContent = string
        }
    })
});
