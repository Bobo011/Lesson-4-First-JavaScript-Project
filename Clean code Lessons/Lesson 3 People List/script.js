
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.getElementsByClassName('admitted');
const refused = document.getElementsByClassName('refused');



admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}

// This adds the array elements to both constants from the beggining till the end, minus the last two
// spaces.
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';

console.log(refused.textContent);
console.log(admitted.textContent);