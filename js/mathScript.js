
 /*
    Script - Math for Tip Calculation
    Author - Santhi Bhavanam
*/
function calculateTip(total,percnt) {
  var tip;
  var retValue;
  if(total<0)
  {
    document.getElementById("displayTip").innerHTML = "Total can not be negative !";
  }
    else if(percnt<0)
  {
    document.getElementById("displayTip").innerHTML = "Tip percentage can not be negative !";
  }

  else
  {
    tip = (total*percnt)/100;
    retValue = "Tip : ".concat(tip);
    document.getElementById("displayTip").innerHTML = retValue;
  }
}