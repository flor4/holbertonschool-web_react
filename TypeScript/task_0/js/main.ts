// Init student interface
interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

// Create student 1
const student1: Student = {
  firstName: "Yaki",
  lastName: "Soja",
  age: 2,
  location: "Mesgenoux"
}


// Create student 2
const student2: Student = {
  firstName: "Soba",
  lastName: "Wasabi",
  age: 2,
  location: "Moncanap"
}

// Store students in a list
const studentsList: Student[] = [student1, student2];

// Define columns
const columns: { key: keyof Student; label: string }[] = [
  {key: "firstName", label: "First name"},
  {key: "location", label: "Location"},
];

// Create table with header
const table: HTMLTableElement = document.createElement("table");
const header: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = header.insertRow();

// Add header cells
columns.forEach(({label}) => {
  const th: HTMLTableCellElement = document.createElement("th");
  th.textContent = label;
  th.className = "header-cell";
  headerRow.appendChild(th);
})

// Populate table with data
const tbody = table.createTBody();

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow();

  columns.forEach(({key}) => {
    const cell = row.insertCell();
    cell.textContent = String(student[key]);
  });
});

document.body.appendChild(table);
