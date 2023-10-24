// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  },
  {
    name: 'Mat',
    employeeNumber: '2211',
    annualSalary: '100000',
    reviewRating: 2
  }
];

console.log('array of employee data:',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

for (person of employees) {

  let employeeBonus = calculateIndividualEmployeeBonus(person);
  console.log(employeeBonus);
  // console.log(person);

}

// This function will calculate 1 employee's bonus!
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let updatedEmployeeInformation = {};
  
  let name = employee.name;
  updatedEmployeeInformation['name'] = name;

  let bonusPercentage = totalBonusPrecentage(employee)
  updatedEmployeeInformation['bonusPercentage'] = bonusPercentage

  let totalBonus = employee.annualSalary * bonusPercentage;
  totalBonus = Math.round(totalBonus);
  updatedEmployeeInformation[`totalBonus`] = totalBonus;

  let actualSalary = employee.annualSalary/1;


  let totalCompensation = totalBonus+actualSalary
  updatedEmployeeInformation["totalCompensation"] = totalCompensation;

  // console.log(updatedEmployeeInformation);  
  // return new object with bonus results

  return updatedEmployeeInformation;

}

function totalBonusPrecentage (employee) {

  let bonus = 0
  if (employee.reviewRating <= 2) {
    console.log("Fuck you", employee.name);
  }
  else if (employee.reviewRating === 3 ) {
    bonus = .04;
  }
  else if (employee.reviewRating === 4 ) {  
    bonus = .06;
  }
  else if (employee.reviewRating === 5 ) {
    bonus = .10;
  }

  if (employee.annualSalary > 65000) {
    bonus -= .01;
  }

  if (employee.employeeNumber <= 9999 && employee.employeeNumber >= 1000) {
    bonus += .05;
  }

  if (bonus > .13) {
    bonus = .13;
    console.log("Thank you for working hard", employee.name);
  }
  else if (bonus < 0) {
    bonus = 0;
    console.log("Fuck you in particular", employee.name);
  }

  // console.log(bonus, employee.name);
  return bonus
}




/*

The first thing we do is we look through each person in our employees list. 
Once we are looing at our employee, and begin to calculate their bonus.

We then set aside a list to collect our information in, and first place our employee's name inside.

After this, we look at our employee's ratings to properly caclulate their bonus'

Many factors go into this decision, such as their review rating, how long they have been at the company, and how much they are making.
Just to ensure our employees are being paid properly.

We then save their bonus precentage which was calculated from those factors and added it to our list.

We then calculated their total bonus using the money they earned multiplied by the percentage and added it to our list.

Then we added their bonus to their current salary to determine how much they are paid. Which we added to our list.

Then once had collected this list we saved it, and moved to the next employee doing the same for them



*/

