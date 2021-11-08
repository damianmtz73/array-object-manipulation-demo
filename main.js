//plain old JavaScript object or (POJO)

let user = {
    id: 1232,
    username: "Josue Sanchez",
    email: "luffy234@gmail.com",
    phone: "1-800-966-4321",
    birthDate: "1970-08-14",
    isActive: true,
    eyeColor: null, 
    pet: [
        "Hamster",
        "Donkey",
        "Marmoset"
    ],
    "sayHi": function sayhi (name){
        console.log(`Hello there, ${name}`)
    },
}


let petsArray = [
    "parakeet",
    "Bulldog",
    "chihuahua",

]

let ericMeyer = {
    name: "Eric A. Meyer",
    careerStartDate = "1993",
    expertSubjects = ["HTMl", "CSS", "Web Standards"],
    books: [
        "Design For Real Life",
        "Casading Style Sheets: The Definitive Guide",
        "Smashing CSS",
        "Eric Meyer on CSS and More Eric Meyer on CSS",
        "CSS2.0 Programmer's Reference",
        "CSS Web Site Design", 
    ], 
}

let kyleSimpson = {
    name: "Kyle Simpson (a.ka. Getify)",
    careerStartDate: null,
    expertSubjects: ["Javascript", "CSS", "HTML", "React.js", "Node.js"],
    books: [
        "You don't know JS yet", "You Don't Know Closures"], 
}