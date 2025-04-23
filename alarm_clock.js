let alarmTime = null;
let alarmTimeout = null;

// Function to set the alarm
document.getElementById("set-alarm").addEventListener("click", () => {
    const alarmInput = document.getElementById("alarm-time").value;

    if (!alarmInput) {
        alert("Please select a valid time for the alarm.");
        return;
    }

    alarmTime = alarmInput;
    document.getElementById("alarm-message").innerText = `Alarm set for ${alarmTime}`;
    checkAlarm();
});

// Function to check the alarm
function checkAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }

    alarmTimeout = setInterval(() => {
        const currentTime = new Date();
        const currentHours = String(currentTime.getHours()).padStart(2, "0");
        const currentMinutes = String(currentTime.getMinutes()).padStart(2, "0");
        const formattedTime = `${currentHours}:${currentMinutes}`;

        if (formattedTime === alarmTime) {
            alert("Wake up! It's time!");
            document.getElementById("alarm-message").innerText = "";

            // Play the alarm sound
            const alarmSound = new Audio("https://youtu.be/MXvl-072sPY?si=mH8MtZoHiDwWzHkI"); 
            alarmSound.play();

            clearInterval(alarmTimeout);
        }
    }, 1000);
}