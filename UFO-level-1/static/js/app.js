// from data.js
var tableData = data;

// YOUR CODE HERE!
// define/select table body
var tbody = d3.select("tbody");

// define/select table body
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Select the input element and get the raw HTML node
var dateElement = d3.select("#datetime");

// Execute when the form is first loaded
document.onload = runEnter(1);

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Event handler function for the form and the button
function runEnter(value) {
    console.log(value);
    // Prevent the page from refreshing 
    if (value!=1) {   
            console.log(value + ' inside')
            d3.event.preventDefault()
        };

    // Get the value property of the date element
    var dateValue = dateElement.property("value");

    console.log(dateValue);

        // Clear the table body
        tbody.html('');
        // Filter datetime only if date input is entered
        // Use the form input to filter the data by date
        var matchedDateData = tableData.filter(record => record.datetime == (dateValue===''?record.datetime:dateValue))
    
        // Loop through each matching record and populate the table row and cell
        matchedDateData.forEach((ufoData) => 
            { 
                var row = tbody.append("tr");
                Object.entries(ufoData).forEach(([key,value]) =>
                    {
                        row.append("td").text(value);
                    });
            });
    };