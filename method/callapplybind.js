const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "boy"
  }
  
  // This will return "John Doe":
 console.log(person.fullName.call(person2)); 
  
  

 const person4 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person3 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person4.fullName.apply(person3)); 




  const person5 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person5.fullName.bind(member);
  
  console.log(fullName);