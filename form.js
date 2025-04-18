let err = () => {
    let Name = document.querySelector("#name").value;
    let FName = document.querySelector("#FName").value;
    let MName = document.querySelector("#MName").value;
    let PNum = document.querySelector("#PNum").value;
    let PaNum = document.querySelector("#PaNum").value;
    let E_M = document.querySelector("#E_M").value;
    let D_O_B = document.querySelector("#D_O_B").value;
    let Add = document.querySelector("#Add").value;

    if (Name === "") {
        document.querySelector("#errname").innerText = "Enter your name";
        return false;
    }
    if (FName === "") {
        document.querySelector("#errFname").innerText = "Enter your Father's name";
        return false;
    }
    if (MName === "") {
        document.querySelector("#errMname").innerText = "Enter your Mother's name";
        return false;
    }
    if (E_M === "") {
        document.querySelector("#erremail").innerText = "Enter your email";
        return false;
    }
    if (PNum === "") {
        document.querySelector("#errnumber").innerText = "Enter your number";
        return false;
    }
    if (PaNum === "") {
        document.querySelector("#errPnumber").innerText = "Enter your parent's number";
        return false;
    }

    // If all validations pass
    return true;
};