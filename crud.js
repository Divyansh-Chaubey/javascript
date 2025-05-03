let fetchData = async () => {
    let url = "http://localhost:3000/Car_rental";
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    const displayStudents = (data) => {
        const tableBody = document.querySelector("#studentTable tbody");
        tableBody.innerHTML = ""; // Clear existing rows if any

        data.forEach(item => {
            const row = document.createElement("tr");

            Object.values(item).forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    };

    displayStudents(data); // Pass the fetched data  
};

fetchData();