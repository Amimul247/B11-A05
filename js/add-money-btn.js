document.getElementById("add-money-btn").addEventListener("click",function(event){
  event.preventDefault();
  const amount = document.getElementById("input-amount").value; 
  const convertedAmoount = parseFloat(amount);
  const pin = document.getElementById("pin").value;
  const convertedPin = parseInt(pin);
  const mainBalance = document.getElementById("main-balance").innerText;
  const convertedMainBalance = parseFloat(mainBalance);


  if(convertedPin===79255){
    alert()
  }
  else{
    console.log("guru pin thik kore koro suru")
  }
})