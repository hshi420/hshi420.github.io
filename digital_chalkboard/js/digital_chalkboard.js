
function showAlert(){
    const firstName = prompt('Enter your first name:');
    const lastName = prompt('Enter your last name:');
    const message = `Hello ${firstName} ${lastName}!`;
    alert(message);
};

function evalNumber(){
    var inputValue = prompt("Enter any five-digit number wihout commas");
    if(isNaN(inputValue)){
        alert(inputValue + " is not a number.");
    }
    else if(inputValue.toString().length !== 5){
        alert(inputValue + " is not five-digit.")
    }
    else if(inputValue%2 == 0){
        alert(inputValue + " is an even number.");
    }
    else{
        alert(inputValue + " is an odd number.");
    }
};

/*

window.onload = function(){
    
    const buttonShow = document.getElementById('show');
    buttonShow.removeAttribute('onclick');
    buttonShow.addEventListener('click', showAlert);
    
    const buttonEval = document.getElementById('eval');
    buttonEval.removeAttribute('onclick');
    buttonEval.addEventListener('click', evalNumber);
}
*/

function handleClick(event){
    event.target.id == 'show' ? showAlert() : evalNumber();
}

window.onload =  function(){
    const buttons = this.document.querySelectorAll('button');

    buttons.forEach(function(button){
        button.removeAttribute('onclick');
        button.addEventListener('click', handleClick);
    })
}



















