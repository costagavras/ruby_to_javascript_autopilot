// apples = 14
// puts apples
//
// puts "I have #{apples} apples."

var apples = 14;
console.log(apples);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant' => "The world's largest land mammal.",
//   'school' => 'A place of learning.',
//   'ice cream' => 'A delicious milk-based dessert.',
// }

var materials = ['wood', 'metal', 'stone'];
var words = {
  elephant: "The world's largest land mammal.",
  school: "A place of learning.",
  iceCream: "A delicious milk-based dessert.",
}
console.log(materials);
console.log(words);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// num = 16
// if num > 10
//   puts "#{num} is greater than 10."
// elsif num == 10
//   puts "#{num} is exactly 10."
// else
//   puts "#{num} must be less than 10."
// end

var num = 10
if (num > 10) {
  console.log(`${num}` + " is greater than 10.");
} else if (num === 10) {
  console.log(`${num}` + " is exactly 10.");
} else {
  console.log(num + " must be less than 10.");
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// 10.times do
//   puts "Doing the same thing over and over."
// end

for (var index = 1; index <= 10; index ++) {
  console.log(index + ". Doing the same thing over and over.")
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// base = 5
// 20.times do |num|
//   puts num + base
// end

var base = 5
var num = 1
while (num <= 20) {
  console.log(num + ". " + base)
  num ++
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// total = 0
// 100.times do |num|
//   total += num
// end
// puts total

var total = 0
for (var i = 1; i <= 100; i ++){
  total += i
}
console.log(total + " is the result of the loop.")
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


// (3..15).each do |height|
//   if height > 9
//     puts "You can get on the rollercoaster!"
//   else
//     puts "You are too short to ride this rollercoaster."
//   end
// end

for (var height = 3; height <=15; height ++){
  (height > 9) ? console.log('You can get on the rollercoaster!') : console.log('You are too short to ride this rollercoaster.');
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// containers = ['purse', 'wallet', 'backback']
// containers.each do |container|
//   puts container
// end

var containers = ['purse', 'wallet', 'backback']
containers.forEach(item => console.log(item));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//OR
containers.forEach((item, index) => {
  console.log(item) //value
  console.log(index) //index
})
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// def hello_world
//   puts "Hello world!"
// end
//
// hello_world

function helloWorld() {
  console.log('Hello world!');
}

helloWorld()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// def add(first_num, second_num)
//   first_num + second_num
// end
//
// amount = add(5, 7)
// puts amount

function add(first_num, second_num){
  var amount = first_num + second_num;
  return amount
}

var total = add(5, 7);
console.log(total);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
