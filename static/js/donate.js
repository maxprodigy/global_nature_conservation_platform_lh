function changeAmount(event){
    const clickedBtn=event.target.id;

    const amountBtn=document.querySelectorAll('.button-amount');
    amountBtn.forEach(btn=>{
        if(btn.id===clickedBtn){
            btn.classList.toggle('active-button-1');
        }
        else btn.classList.remove('active-button-1')
    })
}

function removeAmount(){
    const amountBtn=document.querySelectorAll('.button-amount');
    amountBtn.forEach(btn=>{
        btn.classList.remove('active-button-1')
    })
}

function changeType(event){
    const clickedBtn=event.target.id;

    const amountBtn=document.querySelectorAll('.button-1');
    amountBtn.forEach(btn=>{
        if(btn.id===clickedBtn){
            btn.classList.toggle('active-button-1');
        }
        else btn.classList.remove('active-button-1')
    })
}

function changePayment(event){
    const clickedBtn=event.target.id;

    const amountBtn=document.querySelectorAll('.payment-type');
    amountBtn.forEach(btn=>{
        if(btn.id===clickedBtn){
            btn.classList.toggle('active-button-1');
        }
        else btn.classList.remove('active-button-1')
    })
}
