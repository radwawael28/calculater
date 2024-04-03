(function(){
let screen = document.querySelector('#value')
let buttons = document.querySelectorAll('.btn')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.btn-equal')
console.log(equal)
buttons.forEach(function(button){
  button.addEventListener('click' ,function(e){
    let value = e.target.dataset.num;
    screen.value += value;
  })
});

equal.addEventListener('click', function(e){
  if (screen.value === ''){
    screen.value = "";
  }else{
    console.log(screen.value)
    let answer = eval(screen.value);
    screen.value = answer;

  }
})
clear.addEventListener('click' , function(e){
  screen.value = "";
})
})();



