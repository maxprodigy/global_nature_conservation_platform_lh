
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    // const all= document.querySelector('.nav-container');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        console.log('abiral');
    });
