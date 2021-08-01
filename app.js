const billAmount = document.querySelector("#bill-amount");
const cashGiven  = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = ["2000","500","100","20","10","5","1"];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    errorMessage.style.display = "none";   
    if(billAmount.value > 0){
            if(cashGiven.value >= billAmount.value){
                var amountToBeReturned = cashGiven.value - billAmount.value;
                
                calculateChange(amountToBeReturned);
            }else{
                errorMessage.style.display = "block";
                errorMessage.innerText = "Give more cash or be prepared to wash the dishes."
            }
        }else{
           errorMessage.style.display = "block";
           errorMessage.innerText = "The bill amount should be greater than 0."
        }
});

function calculateChange(amountToBeReturned){
   for(var i=0;i<availableNotes.length;i++){
       var numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
       amountToBeReturned = amountToBeReturned % availableNotes[i];
       noOfNotes[i].innerText = numberOfNotes; 
   }
}
