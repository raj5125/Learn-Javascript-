function setUsername(username) {
    this.username=username
    console.log("called");
}

function createUser(username, email, password) {
    setUsername.call(this,username)
    // this.username=username
    this.email= email
    this.password = password
}

const check =  new createUser("anand", "anand1512@gmail.com", "123456anand")
console.log(check);