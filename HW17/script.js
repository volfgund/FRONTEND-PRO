class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(human) {
    this.residents.push(human);
  }
}

class Building {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log("The maximum apartments in the building has been reached.");
    }
  }
}

const person1 = new Human("Henry", "male");
const person2 = new Human("Julia", "female");
const person3 = new Human("Martin", "male");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);

const building = new Building(3);

building.addApartment(apartment1);
building.addApartment(apartment2);
building.addApartment(apartment3);

console.log(building);