function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit OTP
}

const otp = generateOTP();
console.log("Your OTP is:", otp);