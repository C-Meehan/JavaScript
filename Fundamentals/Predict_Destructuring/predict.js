const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
//Prediction
//Tesla
//Mercedes

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
console.log(otherName);
//Prediction
//console.log(name) will throw an error because 'name' no longer exists
//Elon

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
//Prediction
//console.log(password) will throw an error because it was overwritten by hashedPassword
//correct console.log(password) = '12345'
//console.log(hashedPassword) won't work because there is no password in person
//correct = undefined

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
//Prediction
//5
//2
//both console.log are using == which is asking a boolean if the variable are equal, not converting one to another
//first console.log = false, second = true

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//Prediction
//'value'
//[1,5,1,8,3,3]
//1
//[1,5,1,8,3,3]...correct answer is 5 as they are looking for the second value in the secondKey

