'use strict';

var cars = [];
addOneCarPerDay(cars, 10);

// Ok
function getNewCar(){
  var newCar = {
    city: "Toronto",
    passengers: 0,
    gas: 100,
  }
  return newCar
}

// Ok
function addCar(cars, newCar) {
  cars.push(newCar);
console.log("Adding new car to fleet. Fleet size is now " + cars.length + ".");
}


// pickUpPassenger(cars)
function pickUpPassenger(car){
  car.passengers +=1;
  car.gas -= 10;
return "Picked up passenger. Car now has " + car.passengers + " passengers."
}


// getDestination(cars)
function getDestination(car){
  if (car.city === "Toronto") {
    return "Mississauga"
  } else if (car.city === "Mississauga") {
    return "London"
  } else if (car.city === "London") {
    return "Toronto"
  }
}


// fillUpGas(cars)
function fillUpGas(car){
  var oldGas = car.gas; 
  car.gas = 100;
  return "Filled up to " + getGasDisplay(car.gas) + " on gas from " + getGasDisplay(oldGas) + "."
}

function getGasDisplay(gas_amount){
  return gas_amount + "%";
}


// dropOffPassengers(cars)
function dropOffPassengers(car){
  var previousPassengers = car.passengers;
  car.passengers = 0;
  return "Dropped off " + previousPassengers + " passengers."
}


// drive(cars, cityDistance)
function drive(car, cityDistance){
  if (car.gas < cityDistance){
    fillUpGas(car);
  }

  car.city = getDestination(car);
  car.gas -= cityDistance;
  return "Drove to " + car.city + ". Remaining gas: " + getGasDisplay(car.gas)
}


// act(cars)
function act(car){
  var distanceBetweenCities = 50;
  if (car.gas < 20){
    return fillUpGas(car);
  } else if (car.passengers < 3){
      return pickUpPassenger(car);
  } else
      if (car.gas < distanceBetweenCities){
        return fillUpGas(car);
      }
      var droveTo = drive(car, distanceBetweenCities);
      var passengersDropped = dropOffPassengers(car);
      return droveTo + ". " + passengersDropped;
}


function commandFleet(cars){
  cars.forEach((car, index) => {
    var action = act(car);
    console.log ("Car " + `${index + 1}` + ": " + action)
  });
  console.log("---");
}


function addOneCarPerDay(cars, numDays){
  for (var numDays = 1; numDays <= 10; numDays ++){
    var newCar = getNewCar();
    addCar(cars, newCar);
    commandFleet(cars);
  }
}
