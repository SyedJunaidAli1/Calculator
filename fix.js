Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = string.replace('x', '*').replace('÷', '/');
            
            if (string.includes('/0')) {
                display.textContent = "Division by zero";
                string = ""; 
            }
        } else if (e.target.innerHTML == "AC") {
            string = "";
            display.textContent = "0";
        } else {
            string += e.target.innerHTML;
            display.textContent = string;
        }
    });
});