
// setTimeout ,setInterval


// function delay() {
//     setTimeout(() => {
//         console.log("radhe");
//     }, 3000); // Executes after 3 seconds
// }


let count=1;
let counting=()=>{
    setInterval(()=>{
        console.log(count)
        document.querySelector("h1").innerText=count
        count++;
    },3000)
}