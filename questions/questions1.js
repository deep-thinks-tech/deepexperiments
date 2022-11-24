/* 
Loop Through each question
If the button of a particular question is clicked, toggle .show-text class to the question
If the question where the button was clicked is not same as the question being looped at that moment, remove .show-text class from the question
*/

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
   const btn = question.querySelector('.question-btn');
   btn.addEventListener('click',() => {
    question.classList.toggle('show-text');
     //Loop through the questions to hide answers in those sections where questions are not clicked
   questions.forEach((q) => {
    if (q != question){
        q.classList.remove('show-text');
    }
   });
   });
});