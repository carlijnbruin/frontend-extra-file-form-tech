class Single{                                               // class, waarin constructor zit, kan bv ook teacher zijn, of een auto bv.
  constructor(firstname, age, gender){                      // constructor, kan bv de aantal deuren of kleur zijn, hoeveel personen erin kunnen, etc.
    this.firstName = firstname;                             // this method verwijst naar het object die je aanmaakt bij de constructor
    this.age = age;
    this.gender = gender;
  }

  olderThan30(){                                            // functie in een class die extra info over het object geeft, zoals age.
    if (this.age > 30){                                     // deze if/else statement wordt gebruikt in de functie showpicture().
      return true;
    }
      return false;
  }

  isMan(){
    if (this.gender == "man"){
      return true;
    }
      return false;
  }
}




function showPicture(olderThan30, isMan){
  let img = document.getElementById('image');                 // waar de image in komt te staan
  if (olderThan30 && isMan){                                  // if else statement welke image te zien moet komen voor de juiste single
    img.src = 'images/old-woman.jpg';
    //laat deze foto zien van oude vrouw
  } else if (olderThan30 == false && isMan) {
    img.src = 'images/young-woman.jpg';
    //laat foto zien van jonge vrouw
  } else if (olderThan30 && isMan == false) {
    img.src = 'images/old-man.jpg';
    //laat foto zien van van oude man
  } else {
    img.src = 'images/young-man.jpg';
    //laat foto zien van jonge man
  }
}

function clickButton(){
  const firstName = document.getElementById("firstname").value; // waarde die in firstname wordt gegeven
  const age = document.getElementById("age").value;             // waarde die in age wordt gegeven
  const gender = document.getElementById("gender").value;       // waarde die in gender wordt gegeven
  single1 = new Single(firstName, age, gender);                 // nieuwe object aanmaken, van het type (class) Single
  showPicture(single1.olderThan30(), single1.isMan());          // higher order function - in functie andere functie aanroepen.
  console.log(single1.firstName);
}
