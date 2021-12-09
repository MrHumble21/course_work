const num_1 = document.getElementById('num-1')
const num_2 = document.getElementById('num-2')

const user_input = document.getElementById('user-input')
const book = document.getElementById('book-toggle')
const submit = document.getElementById('submit_btn')

let random_number_one = Math.floor(Math.random() * 100);
let random_number_two = Math.floor(Math.random() * 100);
num_1.innerHTML = random_number_one.toString();
num_2.innerHTML = random_number_two.toString();

submit.addEventListener('click', (event) => {


     let result = random_number_one + random_number_two;
     if(parseInt(user_input.value) === result){
         document.getElementById('val-wrapper').style.display ='none'

         book.classList.add('visible');
         console.log(typeof user_input.value)
     }else if ( parseInt(user_input.value) !== result){
         document.getElementById('false-answer').innerHTML = " false answer!!! <br/> please enter a valid answer"
     }



    console.log(typeof random_number_one.toString())
})










//nav btn handling


const nav_btn = document.getElementById('nav-toggler-btn')


nav_btn.addEventListener('click', ()=>{
    document.getElementById('nav-items').classList.toggle('enabled');
})









confirm("<h1>This website was created to fulfill Web Technology module's requirements and does not represent an actual company or service</h1>")