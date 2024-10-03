//select all the classes and store them in the respective variables 
const modal=document.querySelector('.hidden');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal');
//to get the text content of the buttons.
const openModal=function(){
    console.log('button clicked');
    modal.classList.remove('hidden'); //don't use dot here for class
    overlay.classList.remove('hidden');
}
const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i=0 ; i<btnsOpenModal.length;i++)
    btnsOpenModal[i].addEventListener('click' , openModal);
    
    btnCloseModal.addEventListener('click' , closeModal);
    //without clicking on the cross sign if we click anywhere the modal window should close.
    overlay.addEventListener('click' , closeModal);

    //now respondind to the keyboard events.
    document.addEventListener('keydown' , function(e){ //e=event
        if(e.key==='Escape' && !modal.classList.contains('hidden')){
            closeModal();
        }
    });
        
