const submit=document.querySelector('.button-4');
submit.addEventListener('click',()=>{
    
    const name=document.querySelector('.name').value;
    if(name===''){
        alert('Please Enter Your Name');
    }
    
    const message=document.querySelector('textarea').value;
    if(message===''){
        alert('Please Enter a Message');
    }
    
    const email=document.querySelector('.email').value;
    const mailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailFormat)){
        alert('Enter a valid email address');
    }
})