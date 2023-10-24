const Freelancers = [
  { name: "Joe", price: 30, occupation: "Worker" },
  { name: "John", price: 50, occupation: "Programmer" },
  { name: "Kevin", price: 70, occupation: "Tutor" },
];
renderPage();
// need to add a random freelancer to the freelancer arrray
// and render every 4 seconds
// RDFL = randomFreelancer
setInterval(() => {
  pushrdfl();
  renderPage();
}, 4000);
// pushRDFL will create a new RDFL object and push it onto the end
function pushrdfl() {
  const rdfl = makeRandomFreelancer();
  Freelancers.push(rdfl);
}
// the averageStartingPrice avergaes all prices from the Freelancer arrary and returns a number
//AVSP = averageStartingPrice
function avsp() {
  let total = 0;
  for (let i = 0; i < Freelancers.length; i++) {
    total += Freelancers[i].price;
  }
  return (total / Freelancers.length).toFixed(2);
}
// RDSP = renderStartingPrice
function rdsp() {
  const priceSpan = document.querySelector("#average-starting-price");
  if (priceSpan != null) {
    priceSpan.innerText = avsp();
  }
}
function rdflt() {
  const titleRow = titlesTableRow();
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";
  tableBody.appendChild(titleRow);
  for (let i = 0; i < Freelancers.length; i++) {
    const freelancerRow = freelancerTableRow(Freelancers[i]);
    tableBody.appendChild(freelancerRow);
  }
}
function titlesTableRow() {
    const titleRow = document.createElement("tr");
    const nameCol = document.createElement("td");
    nameCol.innerText = "Name";
    titleRow.appendChild(nameCol);
    const occupationCol = document.createElement("td");
    occupationCol.innerText = "Occupation";
    titleRow.appendChild(occupationCol);
    const startingPriceCol = document.createElement("td");
    startingPriceCol.innerText = "Starting Price";
    titleRow.appendChild(startingPriceCol);
    return titleRow;
  }
  function freelancerTableRow(freelancer) {
    const freelancerRow = document.createElement("tr");
    const nameCol = document.createElement("td");
    nameCol.innerText = freelancer.name;
    freelancerRow.appendChild(nameCol);
    const occupationCol = document.createElement("td");
    occupationCol.innerText = freelancer.occupation;
    freelancerRow.appendChild(occupationCol);
    const startingPriceCol = document.createElement("td");
    startingPriceCol.innerText = freelancer.price;
    freelancerRow.appendChild(startingPriceCol);
    return freelancerRow;
  }
  function renderPage() {
    rdsp();
    rdflt();
  }
  const freelancerNames = ["Abby", "Bob", "Calvin", "David", "Eddie", "Frank", "Gen",];
  const freelancerOccupations = [
    "Gardener",
    "Programmer",
    "Writer",
    "Teacher",
    "Actor",
    "Dog Walker",
    "Gamer Coach",
    "Plummer",
    "Singer",
  ];
  function makeRandomFreelancer() {
    const name = freelancerNames[randomIndex(freelancerNames)];
    const occupation = freelancerOccupations[randomIndex(freelancerOccupations)];
    const price = Math.floor(Math.random() * 100);
    return {
      name,
      occupation,
      price,
    };
  }
  function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }