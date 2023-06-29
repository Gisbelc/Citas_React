const tecnologias = ["HTML", "JVASCRIPT", "REACT", "JAVA"];

//const newArray = tecnologias.filter(function (params) {
//return params !== "REACT";
//});

const newArray = tecnologias.filter(function (params) {
  return params === "REACT";
});

//Delete the first element in array
//newArray.pop();

//Delete the firts element in array
//newArray.shift();
console.log(newArray);

//function myFunction() {
//console.log("hola");
//}

const greet = () => {
  console.log("hola");
};
