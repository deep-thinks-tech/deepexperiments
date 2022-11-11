//get the button details
const prevbtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
const randbtn = document.querySelector('.random-btn');

const personArray = [
    {
        id: 1,
        name: "teddy smith",
        job: "web developer",
        img:
          "https://robohash.org/robo0",
        text:
          "I am web developer looking to work on something interesting and fun. I have 100s of years of experience. I graduated top in the class and have references from FAANG.",
      },
      {
        id: 2,
        name: "anna bear",
        job: "web designer",
        img:
          "https://robohash.org/robo1",
        text:
          "Je suis Anna. Je parle francais et anglais. Je dois aller au travail. Au revoir. Vous m'appelle si vous avez travail pour moi.",
      },
      {
        id: 3,
        name: "peter park",
        job: "intern",
        img:
          "https://robohash.org/robo2",
        text:
          "Peter Park here. I have super powers that will make you work load go puff. Hire me to find out more!",
      },
      {
        id: 4,
        name: "bill barker",
        job: "the boss",
        img:
          "https://robohash.org/robo3",
        text:
          "I get the job done. Call me or text me for gaining insights into how to be a boss!",
      }
]

let currentPerson = 0;
let img = document.getElementById('person-img') ;
let author = document.getElementById('author');
let job = document.getElementById('job') 
let about = document.getElementById('info');

//Initialize function
const loadPerson = (personId) => {
    let person = personArray[personId];
    img.src   = person.img;
    author.textContent  = person.name;
    job.textContent = person.job;
    about.textContent = person.text;
};
//Initial Load of page
window.addEventListener('DOMContentLoaded',loadPerson(0));

//Change User profiles on click on Previous Button
const prevbtnclick = prevbtn.addEventListener('click', () => {
  currentPerson--;
  //Looping logic - if the index value goes below 0, then start from the last index
  currentPerson = currentPerson < 0 ? personArray.length - 1 : currentPerson;
  loadPerson(currentPerson);
}); 

//Change User profiles on click on Next Button
const nxtbtnclick = nextbtn.addEventListener('click', () => {
  currentPerson++;
  //Looping logic - if the index value becomes equal to array length, then start from the first index
  currentPerson = currentPerson === personArray.length ? 0 : currentPerson;
  loadPerson(currentPerson);
});

//Randomize User profiles on click on Surprise Me button
const randbtnclick = randbtn.addEventListener('click',() =>{
  currentPerson = Math.floor(Math.random() * personArray.length);
  console.log(currentPerson);
  loadPerson(currentPerson);
});


