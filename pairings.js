// Extracts the pairings from the pairings.html file, and repackages them into the fancier pairings.html
function extractPairingsAndPopulatePage() {
    fetch("pairings-data/index.html")
        .then((response) => response.text())
        .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const tablesContainer = document.getElementById("pairings-tables-containter");
            tablesContainer.innerHTML = "";

            // extract each division's tables

            const rawTables = doc.querySelectorAll("table");

            if (rawTables.length > 0) {
                rawTables.forEach((rawTable) => {
                    const tableJSON = tableToJSON(rawTable);
                    if (tableJSON != null) {
                        console.log({ tableJSON }); // TODO: Unpack
                    }
                });
            } else {
                root.innerHTML = "<p>No pairings found.</p>";
            }
        })
        .catch((error) => {
            console.error("Error fetching pairings:", error);

            // something went wrong, redirect to the raw pairings page
            // window.location.replace("./pairings-data/index.html");
        });
}

function tableToJSON(table) {
    const headers = Array.from(table.querySelectorAll("th")).map((th) => th.innerText.trim());
    const rows = Array.from(table.querySelectorAll("tr")).slice(1); // Skip header row

    return rows.map((row) => {
        const cells = Array.from(row.querySelectorAll("td"));
        const obj = {};
        cells.forEach((cell, index) => {

            obj[headers[index]] = cell.innerText.trim();
        });
        return obj;
    });
}

// on page load, extract the pairings
window.addEventListener("load", extractPairingsAndPopulatePage);