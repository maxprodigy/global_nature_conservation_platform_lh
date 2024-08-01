function currentSlide(event,index){
  const slideshow=document.querySelector('.slideshow-container');
  const text=document.querySelector('.text');
  if(index===1){
    slideshow.style.backgroundImage='url(images/slider-image-1.jpg)';
    text.textContent='Protecting Endangered Species'
  }
  else if(index===2){
    slideshow.style.backgroundImage='url(images/slider-image-2.jpg)';
    text.textContent='Conserving Natural Habitats'
  }
  else if(index===3){
    slideshow.style.backgroundImage='url(images/slider-image-3.jpg)';
    text.textContent='Keeping Ocean Clean'
  }
  else if(index===4){
    slideshow.style.backgroundImage='url(images/slider-image-4.jpg)';
    text.textContent='Preserving Wildlife Habitats'
  }


  // CHANGE TRIANGLE
  const clicked=event.target.id;
  const dots=document.querySelectorAll('.dot');
  dots.forEach(btn=>{
    if(btn.id===clicked){
      btn.classList.add('active')
    }
    else btn.classList.remove('active')
  })
}