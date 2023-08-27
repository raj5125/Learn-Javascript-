// make a object
const tinderUser = {}

tinderUser.id = "123bjd"
tinderUser.name = "Karen"
tinderUser.isLoggedIn = false

console.log(tinderUser);
// nested objects made here
const regularUser = {
    email : "raj@google.com",
    fullname:{
        userfullname : {
            firstname: "raj",
            lastname : "anand"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //here two elements of objects made not all come in one
const obj3 = Object.assign({}, obj1, obj2, obj4) //assign is used to copy all objects in one obj and {}denotes target and rest is source
console.log(obj3);

const obj5 = {...obj1, ...obj2}
console.log(obj5)

// array ka objects or objects inside array
const users = [
    {
        id : 1,
        email : "r@gmail.com"
    },
    {
        id : 1,
        email : "r@gmail.com"
    },
    {
        id : 1,
        email : "r@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  //keys used for printing keys of objects
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // key value pairs

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //it checks this property available or not in the object

const course = {
    coursename : "js in hindi",
    price : "99",
    courseInstructor: "raj"
}

console.log(course.courseInstructor)

//destructure used for short naming  {}curly braces used here in syntax
const {courseInstructor: Instructor} =course

// console.log(courseInstructor);
console.log(Instructor);


/* json is used without name  */
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]