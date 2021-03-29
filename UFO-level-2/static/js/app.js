// from data.js
var ufodata = data;
// console.log(tableData)

// YOUR CODE HERE!

// Define/select tbody, button
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Loop through ufo data 
ufodata.forEach((ufosighting) => {

    // Append the 'tr' rows 
    var row = tbody.append("tr");
    // Get the key and value, and for each key and value pair, 
    Object.entries(ufosighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
  });

// Event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Run event function
function runEnter(){
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the elements
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape")

    // Get the value property of the elements
    var date = dateElement.property("value");
    var city = cityElement.property("value");
    var state = stateElement.property("value");
    var country = countryElement.property("value");
    var shape = shapeElement.property("value");

    // Clear the table body
    tbody.html('');

    // Filter data if date input is within the record
    var matchData = ufodata.filter(ufosighting => ufosighting.datetime == (inputValue===''?ufosighting.datetime:inputValue))
    .filter(ufosighting => ufosighting.city == (inputCityValue===''?ufosighting.city:inputCityValue))
    .filter(ufosighting => ufosighting.state == (inputStateValue===''?ufosighting.state:inputStateValue))
    .filter(ufosighting => ufosighting.country == (inputCountryValue===''?ufosighting.country:inputCountryValue))
    .filter(ufosighting => ufosighting.shape == (inputShapeValue===''?ufosighting.shape:inputShapeValue));
    console.log(matchDate)

    // Assign variable to tbody to edit section
    ufo_table = d3.select("tbody");

    // remove everything in tbody section
    ufo_table.html("");

    // Loop through the record and populate the table with the results
    matchData.forEach((f_ufosighting) => 
        { 
            var row = tbody.append("tr");
            Object.entries(f_ufosighting).forEach(([key, value]) => {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
                });
        });
};