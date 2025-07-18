// Extracts the pairings from the pairings.html file, and repackages them into the fancier pairings.html
function extractPairingsAndPopulatePage() {
    fetch("pairings-data/index.html")
        .then((response) => response.text())
        .then((html) => {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const tablesContainer = document.getElementById("pairings-tables-containter");
                tablesContainer.innerHTML = "";

                // extract each division's tables
                const rawTables = doc.querySelectorAll("table");


                const parsedTables = rawTables.length > 0 ?
                    Array.from(rawTables).map(pairingsTableToJSON).filter(table => table.length > 0)
                    : [];

                // now, find the division names
                // These are in h3 tags, and contain 'Division' in the text
                const divisionHeaders = Array.from(doc.querySelectorAll("h3"))
                    .map(h3 => h3.innerText).filter((text) =>
                        text.toLowerCase().includes("division")
                    );

                // combine the tables and division names into a single array
                const divisions = [];
                for (let i = 0; i < Math.max(divisionHeaders.length, parsedTables.length); i++) {
                    const divisionName = divisionHeaders[i] || `Division ${i + 1}`;
                    const table = parsedTables[i] || [];
                    divisions.push({ name: divisionName, pairings: table });
                }
            } catch (error) {
                console.error("Error unpacking pairings:", error);
                document.getElementById("root").innerHTML = html;
            }
        })
        .catch((error) => {
            console.error("Error fetching pairings:", error);
        });
}

function pairingsTableToJSON(table) {
    const headers = Array.from(table.querySelectorAll("th")).map((th) => th.innerText.trim());
    const rows = Array.from(table.querySelectorAll("tr")).slice(1); // Skip header row

    return rows.map((row) => {
        const cells = Array.from(row.querySelectorAll("td"));
        const obj = {};
        cells.forEach((cell, index) => {
            const rawText = cell.innerText.trim();
            // the player's row is of the format: 
            // Deb Banerji (2/0/1 (7))
            // which represents:
            // name (wins/losses/ties (points))
            // use a regex to extract the win, loss, draw, and points values if they're present:
            let recordData = null;
            const match = rawText.match(/^(.*?)(?:\s*\((\d+)\/(\d+)\/(\d+)\s*\((\d+)\)\))?$/);
            if (match) {
                value = match[1].trim();
                recordData = {};
                if (match[2] !== undefined) recordData["wins"] = parseInt(match[2], 10);
                if (match[3] !== undefined) recordData["losses"] = parseInt(match[3], 10);
                if (match[4] !== undefined) recordData["ties"] = parseInt(match[4], 10);
                if (match[5] !== undefined) recordData["points"] = parseInt(match[5], 10);
            } else {
                value = rawText; // fallback to just the raw text
            }

            obj[headers[index]] = value;
            obj["record"] = recordData;
        });
        return obj;
    });
}

// on page load, extract the pairings
window.addEventListener("load", extractPairingsAndPopulatePage);