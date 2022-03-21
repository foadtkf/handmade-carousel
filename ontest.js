const images=[
    'img1.png',
    'img2.png',
    'img3.png',
    'img4.png',
    'img5.png'
]
let index=0;
const image=document.getElementById('image')
setInterval(()=>{
    if(index>=images.length)
    index=0;
image.setAttribute('src',images[index])
index++;
},500)