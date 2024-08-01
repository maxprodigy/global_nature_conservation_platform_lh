const div1= document.getElementById('images-1');
const div2= document.getElementById('images-2');
const div3= document.getElementById('images-3');

const img1 = document.querySelector('#images-1 img')
const img2 = document.querySelector('#images-2 img')
const img3 = document.querySelector('#images-3 img')


const box1= document.getElementById('about-box-1')
const box2= document.getElementById('about-box-2')
const box3= document.getElementById('about-box-3')

div1.addEventListener('click',()=>{
    img1.setAttribute('src',"/static/images/aim-1-colored.png")
    img2.setAttribute('src',"/static/images/aim-2.png");
    img3.setAttribute('src',"/static/images/aim-3.png")

    box2.style.display = 'none';
    box3.style.display = 'none';
    box1.style.display = 'block';
})


div2.addEventListener('click',()=>{
    img1.setAttribute('src', "/static/images/aim-1.png")
    img2.setAttribute('src', "/static/images/aim-2-colored.png");
    img3.setAttribute('src', "/static/images/aim-3.png")

    box2.style.display = 'block';
    box3.style.display = 'none';
    box1.style.display = 'none';
})


div3.addEventListener('click',()=>{
    img1.setAttribute('src', "/static/images/aim-1.png")
    img2.setAttribute('src', "/static/images/aim-2.png");
    img3.setAttribute('src', "/static/images/aim-3-colored.png")

    box2.style.display = 'none';
    box3.style.display = 'block';
    box1.style.display = 'none';
})

document.getElementById('images-1').click();



