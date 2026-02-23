// console.log(alert("Payoo Pay"), "payoo pay");
document.getElementById("login-btn").addEventListener("click", function () {
  console.log("Login Button Clicked");
  const contactNumber = document.getElementById("input-number");
  const contactNumberValue = contactNumber.value;
  console.log(contactNumberValue);
  const contactPin = document.getElementById("input-pin");
  const contactPinValue = contactPin.value;
  console.log(contactPinValue);

  if (contactNumberValue == "01728502644" && contactPinValue == "1234") {
    alert("login Successful");
    // window.location.assign("/home.html");
    window.location.assign("home.html");
    // window.location.replace("/home.html");
  } else {
    alert("login Failed");
    return;
  }
});
