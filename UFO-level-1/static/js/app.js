// from data.js
var tableData = data;
// console.log(tableData)

// YOUR CODE HERE!

// Define/select tbody, button, input tags
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");
var dateElement = d3.select("#datetime");
  
// Execute when the form is first loaded
document.onload = runEnter(0);

// Event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Run event function
function runEnter(value) {
    console.log(value);
    // Prevent the page from refreshing
    if (value!=0)
        {d3.event.preventDefault();}

    // Get the value property of the date element
    var date = dateElement.property("value");
    console.log(date);
    // Clear the table body
    tbody.html('');

    // Filter datetime if date input is within the record
    var matchDate = tableData.filter(record => record.datetime == (date===''?record.datetime:date))

    // Loop through the record and populate the table with the results
    matchDate.forEach((ufoData) => 
        { 
            var row = tbody.append("tr");
            Object.entries(ufoData).forEach(([key,value]) =>
                {
                    row.append("td").text(value);
                });
        });
};