// ********** Objects **********
// An object is a collection of data or funtions in a format of properties and methods. Each property have a value and they are in property:value format, and methods are like functions which carry out certain tasks.

// 1) Creating Object with Object Literal
/*
let objectName = {
    property1 : value1,
    property2 : value2,
    .
    .
    .,
    propertyN : valueN
}
*/
//     Q1: Create an object named city with properties name, population, and country. Initialize it with your favorite city’s details.
let city = {
    name: "Dehradun",
    population: 10000,
    country: "India",
    // ANS Q6 - Creating a method getDescription()
    getDescription: function(){
        return this.name+" "+this.country;
    },
    getFullInfo(){
        return this.name+" "+this.country;
    }
};

//     Q2: Define an object vehicle with properties type, brand, and year. Initialize it with values for a specific vehicle.
let vehicle = {
    type : "Sedan",
    brand: "Honda",
    year: 2021,
    // ANS Q7 - Creating a method getAge()
    getAge(){
        return 2024 - this.year;
    },
    getVehicleInfo(){
        return this.type+this.brand+this.year+this.color;
    }
}

//     Q3: Write an object bookstore with properties location, owner, and stock (stock should be an array of book titles).
let bookstore = {
    location: "Dakra",
    owner: "Gupta",
    stock: ["Ncert","Schan","Arhiant"],
    // ANS Q8 - Creating a method addBook(newBook)
    addBook: function(newBook){
        this.stock.push(newBook);
    }
}

//     Q4: Create an object game with properties title, genre, and platform. Initialize it with details about a video game.
let game = {
    title: "call of duty 2",
    genre: "shooting",
    platform: "steam",
    // ANS Q9 - Creating a method changePlatform(newPlatform)
    changePlatfor(newPlatform){
        this.platform = newPlatform;
    }
}

//     Q5: Define an object recipe with properties dishName, ingredients (array of ingredients), and cookingTime.
let recipe = {
    dishName: "Chole Bhature",
    ingredients: ["Chole","Maida","Masale","Curd"],
    cookingTime: 23,
    // ANS Q10 - Creating a method isQuickRecipe(time).
    isQuickRecipe(){
        return this.cookingTime<30?true:false;
    },
    getRecipeDetails(){
        return `${this.dishName} -> ${this.ingredients}`
    }
}

// 2) Object Members as Functions
// Function can be used as member of object.
/*
methodName : function(){
    // function statement
}
    OR

methodName(){
    // function statement
}
*/
//     Q6: Add a method getDescription to the city object from Q1 that returns a string with the city’s name and country.
// ANS -> See the Q1 object I added a new method getDescription().

//     Q7: In the vehicle object from Q2, add a method getAge that calculates and returns the age of the vehicle based on the current year.
// ANS -> See the Q2 object I added a new method getAge().

//     Q8: Define a method addBook in the bookstore object from Q3 that takes a book title and adds it to the stock array.
// ANS -> See the Q3 object I added new method addBook(newBook).

//     Q9: Create a method changePlatform in the game object from Q4 that updates the platform property.
// ANS -> See the Q4 object I added new method changePlatform(newPlatform).

//     Q10: Add a method isQuickRecipe to the recipe object from Q5 that returns true if cookingTime is less than 30 minutes.
// ANS -> See the Q5 object I adde new method isQuickRecipe().

// 3) Dot Notation
// Dot notation is used to access properties and methods of object. The name of the object comes first and then (.) dot then the name of the property or method you want to access.

//     Q11: Access the name property of the city object from Q1 using dot notation.
console.log(city.name);

//     Q12: Update the brand property of the vehicle object from Q2 to 'Toyota' using dot notation.
console.log(vehicle.brand)
vehicle.brand = "Toyota";
console.log(vehicle.brand);

//     Q13: Call the getDescription method of the city object from Q1 using dot notation.
console.log(city.getDescription());

//     Q14: Retrieve the first book title from the stock array in the bookstore object from Q3 using dot notation.
console.log(bookstore.stock[0]);

//     Q15: Access the platform property of the game object from Q4 using dot notation.
console.log(game.platform);

// 4) Object as Object Property
// We can create another object inside an object. To access the properties or methods inside the object in object we need to creat a chain to access them.
//     Q16: Create an object profile with a property address which is another object containing street, city, and zipcode.
let profile = {
    name: "Nishant",
    address:{
        street: "Cantt",
        city: "Dehradun",
        zipcode: 23334
    },
    // Q18 ANS to add property which is object name eventDetails.
    eventDetails:{
        eventName: "Carnival",
        date: "31-08-2024"
    }
}

//     Q17: Define an object team with a property players which is an array of objects, each representing a player with name and position.
let team = {
    players:[
        {
            name:"ray",
            postition:"mid"
        },
        {
            name:"sid",
            position:"center"
        }
    ]
}

//     Q18: Add a property eventDetails to the profile object from Q16, which is an object with eventName and date.
// ANS -> Added property evenDetails with eventName and date.

//     Q19: Create an object menu with a property categories which is an object containing appetizers, mainCourses, and desserts.
let menu = {
    categories:{
        appetizers: "pasta",
        maincourse: "indian platter",
        desserts: "cake"
    }
}
//     Q20: Define an object school with a property classes which is an object with math, science, and art as properties, each holding an array of student names.
let school = {
    classes:{
        math: ['ray','sid'],
        science: ['mike','sid'],
        art: ['dave','kr$na']
    }
}

// 5) Bracket Notation
// A bracket notation provides an alternative to access properties of an object. Insted of using dot notation user objectName["property"].
//     Q21: Use bracket notation to access the population property of the city object from Q1.
console.log(city["population"]);

//     Q22: Update the year property of the vehicle object from Q2 to 2023 using bracket notation.
vehicle['year'] = 2022;
console.log(vehicle['year']);

//     Q23: Add a new property website to the bookstore object from Q3 using bracket notation.
bookstore['website'] = 'bookstore.com';
console.log(bookstore['website']);
console.log(bookstore);

//     Q24: Use bracket notation to call the changePlatform method of the game object from Q4.
game['changePlatfor']("XBox");
console.log(game['platform']);

//     Q25: Retrieve the ingredients property from the recipe object from Q5 using bracket notation.
console.log(recipe['ingredients']);

// 6) Setting Object Members
// With Dot Notation

//     Q26: Set the country property of the city object from Q1 to 'USA' using dot notation.
city.country = 'USA';

//     Q27: Update the stock array in the bookstore object from Q3 to include a new book title using dot notation.
bookstore.addBook("MCA Entrance");
console.log(bookstore);

//     Q28: Add a new property status to the game object from Q4 and set it to 'available' using dot notation.
game.status = 'available';
console.log(game);

//     Q29: Change the cookingTime property of the recipe object from Q5 to 45 using dot notation.
recipe.cookingTime = 32;
console.log(recipe.cookingTime);
console.log(recipe);

//     Q30: Set a new property rating to the vehicle object from Q2 using dot notation.
vehicle.rating = 5;
console.log(vehicle);

// With Bracket Notation

//     Q31: Use bracket notation to set the genre property of the game object from Q4 to 'RPG'.
game['genre'] = 'RPG';

//     Q32: Update the address property of the profile object from Q16 with new values using bracket notation.
profile['address']['street'] = 'Mussorie';
console.log(profile);

//     Q33: Add a discount property to the bookstore object from Q3 using bracket notation.
bookstore['discount'] = 0.05;
console.log(bookstore);

//     Q34: Change the name property of the profile object from Q16 using bracket notation.
profile['name'] = 'sid';

//     Q35: Use bracket notation to update the players array in the team object from Q17.
team['players'][0]['name'] = 'mike';

// 7) Create New Members
// We can create new memebrs after creating the object. Creating new member is smoothly done by square bracket notation.
// objectName[newMemberName] = newMemberValue;
//     Q36: Add a new property language to the city object from Q1 and set it to a string value.
city['language'] = 'Hindi';
console.log(city);

//     Q37: Create a new property color in the vehicle object from Q2 and set it to 'red'.
vehicle['color'] = 'mouse brown';

//     Q38: Add a property contactNumber to the profile object from Q16 and set it to a string.
profile['contactNumber'] = '99956533';

//     Q39: Add a new method getMenuCategories to the menu object from Q19 that returns all the categories.
let newMnameQ39 = 'getMenuCategories';
// let newMvalue = function(){
//     return ['aprtizers','maincourse','desserts'];
// }
menu[newMnameQ39] = function(){
    let categories = [];
    for(key in menu['categories']){
        categories.push(key);
    }
    return categories;
}
console.log(menu);
console.log(menu.getMenuCategories());

//     Q40: Create a new property principal in the school object from Q20 and set it to a string.
school['principal'] = 'sc biala';

// 8) this Keyword
// Ṭhe this keyword reffers to the current object.
//     Q41: In the city object from Q1, create a method getFullInfo that uses this to return both name and country.
// ANS -> Created a new method getFullInfo() in Q1 object.

//     Q42: In the vehicle object from Q2, create a method getVehicleInfo that uses this to return the brand and year.
// ANS -> Created a new method getVehicleInfo() in Q2 object.

//     Q43: Use this in the changePlatform method of the game object from Q4 to update the platform based on a given value.
// ANS -> Already did that.

//     Q44: In the recipe object from Q5, define a method getRecipeDetails that uses this to return the dishName and ingredients.
// ANS -> > Created a new method getRecipeDetails();

//     Q45: Explain how this works inside methods of objects compared to functions defined outside the object.
// This keyword inside a method of Objects -> Inside a method if we try to call any property which name identical to any other object then the code will get confused and won't work, but if we give this keyword before the proeprty name, then the code will understand that we are calling the preperty in the current object that is being executed.
// This keyword in a function -> In a function this key word is used for the context of the data for which the function is called.

// 9) Creating Object Using Constructor
// Using constructor to create object is a great method, it helps us to create instances for new data which has the same properties.

//     Q46: Write a constructor function Animal that initializes species and habitat. Create an instance of Animal.
function Animal(species, habitat){
    this.species = species;
    this.habitat = habitat;
}
let Dog = new Animal("Mamal","Anywhere");

//     Q47: Define a constructor function MusicAlbum with properties artist, albumTitle, and releaseYear. Instantiate a MusicAlbum object.
function MusicAlbum(artist, albumTitle, releaseYear){
    this.artist = artist;
    this.albumTitle = albumTitle;
    this.releaseYear = releaseYear;
}
let krsna = new MusicAlbum('KR$NA','Time Will Tell','March 4, 2023');

//     Q48: Create a constructor function Device that includes properties brand, model, and year. Instantiate a Device object.
function Device(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}
let redmi = new Device('Redmi','9 Activ','2019');

//     Q49: Define a constructor function Subscription with properties subscriberName, planType, and a method getPlanDetails that returns the plan type.
function Subscription(subName, planType){
    this.subscriberName = subName;
    this.planType = planType;
    this.getPlanDetails = function (){
        return this.planType;
    }
}

//     Q50: Create a constructor function Event with properties eventName, eventDate, and location. Instantiate an Event object.
function Event(name, date, location){
    this.eventName = name;
    this.eventDate = date;
    this.location = location;
}
const carnival = new Event('Winter Fest','Dec 16, 2024','England');
console.log(carnival);

// Bonus Questions
// Q51: How can you use the in operator to check if the recipe object from Q5 has an ingredients property?
// To check if the given property is present in the object we can use in operator like ('popertyName' in objectName)
console.log('ingredients' in recipe);

// Q52: Retrieve and print all property names of the city object from Q1 using Object.keys().
for(key in city){
    console.log(key);
}

// Q53: Use Object.values() to get an array of all values of the vehicle object from Q2.
console.log(Object.values(vehicle));

// Q54: Use Object.entries() to get an array of key-value pairs for the bookstore object from Q3.
console.log(Object.entries(bookstore));

// Q55: Explain how Object.assign() can be used to merge two objects: one representing userProfile and another representing settings.
let userProfile = {
    name:"userX"
}
let settings = {
    type: "settingX"
}

console.log(Object.assign({},userProfile, settings));

// Q56: Define a getter method fullName in a Person object that returns the firstName and lastName combined.
let Person = {
    firstName: "Mike",
    lastName: "Ross",
    getter(){
        console.log(this.firstName+" "+this.lastName);
    }
}
Person.getter();