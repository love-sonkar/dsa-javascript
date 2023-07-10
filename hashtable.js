// object creation

let obj = {
  name: "love sonkar",
  email: "love@gmail.com",
  number: "5422332423",
  getnumber() {
    return this.number;
  }, // we can also store functions in objects
};

// update somthing
obj.email = "boss@gmail";

// for deleting somthing in object we can simply use delete keyword
delete obj.name;

// we can map object using for in loop
// in this loop we console log object's key in for value we can use object name and square bracket like this obj[x]
for (x in obj) {
  console.log(x); // this is for key
  console.log(obj[x]); // this is for key value
}

// some objects function

console.log(Object.keys(obj)); // this will return object in array form
console.log(Object.values(obj)); // this will give us object's value in array form

console.log(obj.getnumber());
console.log(obj);
