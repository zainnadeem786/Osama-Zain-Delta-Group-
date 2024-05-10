function verifyOTP() {
    var enteredOTP = document.getElementById("otp").value;
    // Here you would typically send the entered OTP to your backend for verification
    // For the sake of simplicity, let's assume the correct OTP is "123456"
    var correctOTP = "123456";
    if (enteredOTP === correctOTP) {
      alert("OTP verified successfully!");
      // You can redirect the user to another page or perform any other action upon successful verification
    } else {
      document.getElementById("otp-error").style.display = "block";
    }
  }