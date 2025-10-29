function unitConverter(){
   const p = document.getElementById("secret")
   const selectOption = document.getElementById("unit").value
   const inputValue = document.getElementById("userinput").value
  
   let result;

   let value = parseFloat(inputValue);

   if(isNaN(value)){
    p.innerHTML = "Please Enter a valid Number"
    return;
   }

   if(selectOption === "miles to kilometers") {
    result = value * 1.60934;
    p.innerHTML = `${value} miles = ${result.toFixed(2)} kilometers`


   }  else if (selectOption === "kilometers to miles") {
    result = value * 0.621371; // km → miles
    p.innerHTML = `${value} kilometers = ${result.toFixed(2)} miles`;
  }
   
}