const selectYear = document.getElementById("year");
const currentYear = new Date().getFullYear();
const startYear = 1900;

// Loop para adicionar os anos
for (let year = currentYear; year >= startYear; year--) {
  let optionYear = document.createElement("option");
  optionYear.value = year;
  optionYear.textContent = year;
  selectYear.appendChild(optionYear);
}

const selectMonth = document.getElementById("month");
const currentMonth = 12; 
const startMonth = 1;

// Loop para adicionar os meses
for (let month = startMonth; month <= currentMonth; month++) {
  let optionMonth = document.createElement("option");
  optionMonth.value = month;
  optionMonth.textContent = month;
  selectMonth.appendChild(optionMonth);
}

