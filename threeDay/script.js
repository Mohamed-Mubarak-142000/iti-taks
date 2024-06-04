var Data = [
  {
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    age: "33",
    startDate: "11/28/2008",
  },
  {
    name: "Angelica Ramos",
    position: "Chief  Executive Officer (CEO)",
    office: "London",
    age: "47",
    startDate: "10/9/2009",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: "66",
    startDate: "1/12/2009",
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    age: "41",
    startDate: "10/13/2012",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    age: "28",
    startDate: "6/7/2011",
  },
  {
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    age: "61",
    startDate: "12/2/2012",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    age: "38",
    startDate: "5/3/2011",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "Pre-Sales Support",
    age: "21",
    startDate: "12/12/2011",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    age: "46",
    startDate: "12/6/2011",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: "22",
    startDate: "3/29/2012",
  },
];

/****Selection */
var table = document.getElementsByTagName("table")[0];
var input = document.getElementsByTagName("input")[0];
/***Function render Data in Table */
function renderData(data) {
  resetTable();
  data.map((item) => {
    table.innerHTML += `<tr><td>${item.name}</td><td>${item.position}</td><td>${item.office}</td><td>${item.age}</td><td>${item.startDate}</td></tr>`;
  });
}
renderData(Data);
/**function to reset Table */
function resetTable() {
  table.innerHTML = `<tr>
    <th><input type="button" value="Name" onclick = "toggleSort()" /></th>
    <th>Position</th>
    <th>Office</th>
    <th>Age</th>
    <th>start Date</th>
  </tr>`;
}
/** descending Sort By Name */
function sortDataDescending(data) {
  var sortedData = data.sort((a, b) => {
    return b.name.localeCompare(a.name); // Compare names in descending order
  });
  resetTable();
  renderData(sortedData);
}

/**ascending sort */
function sortDataAscending(data) {
  var sortedData = data.sort((a, b) => {
    return a.name.localeCompare(b.name); // Compare names in ascending order
  });
  resetTable(); // Reset the table before rendering sorted data
  renderData(sortedData); // Render the sorted data
}

// sortDataAscending(Data);
var ascending = false;

function toggleSort() {
  console.log("aa");
  if (ascending) {
    sortDataAscending(Data);
    ascending = false;
  } else {
    sortDataDescending(Data);
    ascending = true;
  }
}
//Search of element
function search(event) {
  console.log(event);
  var filteredData = Data.filter((item) =>
    item.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
  // if(filteredData)
  console.log("bbbb", filteredData.length);
  if (filteredData.length) {
    renderData(filteredData);
  } else {
    renderData([]);
    var newTr = document.createElement("tr");
    var newTd = document.createElement("td");
    newTd.setAttribute("colspan", 5);
    newTd.setAttribute("align", "center");
    newTd.style.backgroundColor = "#d64d4d";
    newTd.style.fontWeight = "bold";
    newTd.textContent = "sorry , Not Found Data.!";
    newTr.appendChild(newTd);
    table.appendChild(newTr);
  }
}
input.addEventListener("input", search);
