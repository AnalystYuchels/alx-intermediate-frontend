interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Ada',
  lastName: 'Obi',
  age: 20,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'Chinedu',
  lastName: 'Okafor',
  age: 22,
  location: 'Abuja',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
