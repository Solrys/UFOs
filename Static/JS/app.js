// import the data from js
const = tableData = data;

// Reference the HTML table using d3
var tbody = d3.select(tbody)


function buildTable(data) {
    tbody.html("");
  }

  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });

  function handleClick() {
      let date = d3.select("#datetime").property(#value);
      let filteredData = tableData;
      // if-statement syntax
      if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);

        // Build table using filtered data
        buildTable(filteredData);
}
      };
      // Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>
<script src="static/js/data.js"></script>
<script src="static/js/app.js"></script>

