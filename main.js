// var button = document.getElementById('main-button').addEventListener('click',buttonClick);

// function buttonClick(e){
//     // console.log('button clicked')
//     // document.getElementById('header-title').textContent = 'just changed';
//     // document.getElementById('main-container').style.backgroundColor = 'red';
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output =document.getElementById('output');
//     // output.innerHTML = '<h3>'+e.target.id+'</h3>';
//     // console.log(e.type);
//     // console.log(e.clientX);
//     // console.log(e.clientY);


//     // console.log(e.offsetY);
//     // console.log(e.offsetX);


//     console.log(e.altKey);
//     // console.log(e.shiftKey);
//     // console.log(e.ctrlKey);

// } 

// var button = document.getElementById('main-button');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mouseup',runEvent);
// button.addEventListener('mousedown',runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);
// }
// Using Array function
// var cutton = document.getElementById('main-button');
// cutton.addEventListener('dblclick', (e)=>{
//     console.log('EVENT TYPE: '+e.type);
// });

// // mousee enter and mouseleave 
// var box = document.getElementById('box'); 
// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);
// }

// var box = document.getElementById('box') ;
// box.addEventListener('mousemove',runEvent);
// function runEvent(e){

// document.body.style.background="rgb("+e.offsetX+", "+e.offsetY+",40)";
// box.style.background="rgb("+e.offsetX+", "+e.offsetY+",40)";
// } 
 var itemInput = document.querySelector('input[type="text"]');
 var form = document.querySelector('form');
// // itemInput.addEventListener('keydown', runEvent);
// // itemInput.addEventListener('keyup', runEvent);
// // itemInput.addEventListener('keypress', runEvent);

// // itemInput.addEventListener('focus', runEvent);
// // itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('cut', runEvent);
// function runEvent(e) {
//     console.log('EVENT TYPE: ' + e.type);
//     // console.log(e.target.value);
//     // document.getElementById('output').innerHTML='<h4>'+e.target.value+'</h4>';

// }

var select = document.querySelector('select',runEvent);
// select.addEventListener('change',runEvent);
// select.addEventListener('input',runEvent);

form.addEventListener('submit',runEvent)
 function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE: ' + e.type);
    // console.log(e.target.value);
 }