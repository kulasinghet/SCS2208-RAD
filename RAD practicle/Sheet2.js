//Question 9
let person = {
    firstName:"kasun",
    lastName: "senerath",
    age: 23,
    eyeColor:"black",

    Function: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person.Function());


//Question 10
let greeting = (time) => {
    if (time<10.00) { console.log("Good Morning") }
    else if (time<20.00) { console.log("Good Day") }
    else { console.log("Good Evening") }
}


//Question 11
let fruit = (fruit) => {
    switch (fruit) {
        case "banana" : 
            alert("Yellow")
            break;
        case "pineapple" : 
            alert("Orange")
            break;
        case "apple" : 
            alert("Green")
            break;
    } 
}


//Question 12
for (let i= 0; i<10; i++) {
    console.log(`${i} round`);
}


//Question 13
let secondLoop = (i) => {
    if (i<10) {
        while (i >= 0) {
            console.log(`${i} round`);
            i--;
        }
    }
}

secondLoop(5);


//Question 14




//Question 15
colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"];
let i=0;
let oChecker = (i) => {
    switch (i) {
        case 1: return "st"
        case 2: return "nd"
        case 3: return "rd"
        default: return "th";
    }
}
while (i < colors.length) {
    console.log(`${i+1}${oChecker(i+1)} choice is ${colors[i]}`);
    i++;
}


//Question 16
let merge_array = (array1, array2) => {

    let result = array1;

    let duplicateCheck = (value) => {
        for (let i =0; i < array1.length; i++ ) {
            if (value === array1[i]) {
                return true;
            }
        }
        return false;
    }

    for (let i = array1.length; i < (array1.length + array2.length); i++) {
        if (!duplicateCheck(array2[i-array1.length])) {
            result.push(array2[i-array1.length])
        }
    }

    return result;
}

var array1 = [1, 2, 3, 5, 6];
var array2 = [2, 30, 1, 40];
console.log(merge_array(array1, array2));



