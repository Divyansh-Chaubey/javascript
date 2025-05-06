function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

const otp = generateOTP();
console.log("Your OTP is:", otp);
// hello