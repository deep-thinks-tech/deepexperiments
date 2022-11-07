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
          "I get the job done. ",
      }
]

let currentPerson = 0;
let img = document.getElementById('img_id') ;
let author = document.getElementById('author');
let job = document.getElementById('job') 
let about = document.getElementById('aboutme');

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



