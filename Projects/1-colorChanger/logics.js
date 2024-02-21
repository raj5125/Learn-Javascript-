// first select all buttons, body and return them in a variable 
// then traverse through buttons and add eventlistner as here event is clicking colors leads to change in the color of background color
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor=e.target.id
    }
  })
})
