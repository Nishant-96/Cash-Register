var billAmount = document.querySelector("#bill-amount");
var cashGiven  = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var errorMessage = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = ["2000","500","100","20","10","5","1"];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    errorMessage.style.display = "none";    //hides the error the message

    
    if(billAmount.value > 0){
            if(Number(cashGiven.value) >= Number(billAmount.value)){
                var amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
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
// proccessing logic
function calculateChange(amountToBeReturned){
   for(var i=0;i<availableNotes.length;i++){
       var numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
       amountToBeReturned = amountToBeReturned % availableNotes[i];
       noOfNotes[i].innerText = numberOfNotes; 
   }
}
