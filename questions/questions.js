/* 
Loop through each button. 
If any button is clicked, toggle .show-text class to the parent article element
When one button is clicked and is not same as the button being looped at that moment, remove .show-text class from the parent article element
*/

const btns=document.querySelectorAll('.question-btn');

btns.forEach((btn) =>{
    btn.addEventListener('click',() => {
        btn.parentElement.parentElement.classList.toggle('show-text');
//Close other question sections
        btns.forEach((i) => {
            if (i != btn){
                i.parentElement.parentElement.classList.remove('show-text');
            }
        });
    })
});