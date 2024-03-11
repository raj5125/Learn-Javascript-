function multiplyby5(num) {
    return num*5;
}
// prototype works as object and use all functionalities that's why fucntion also used as object
multiplyby5.power = 2
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}
// this means jis like jiska price , jis ko print krna hai as it is used to differentiate
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);;
}

// new is used then after only code works as new make a new object everytime that is needed to differentiate
const tea = new createUser("tea", 10) 
const coffee = new createUser("coffee", 200)

tea.increment()
tea.printMe()