let btn_yes = document.getElementById("btn_yes");

btn_yes.addEventListener('click', () => {
    document.getElementById("sadpuppy").style.display = 'none'
       document.getElementById("title").style.display = 'none'
 document.getElementById("happypuppy").style.display = 'block'
document.getElementById("title2").style.display = 'block'
})

const button = document.getElementById('btn_no');

button.addEventListener('mouseover', () => {
  const noBtnRect = button.getBoundingClientRect();

  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  let randomX = Math.floor(Math.random() * maxX );
  let randomY = Math.floor(Math.random() * maxY) ;

  // Reverse direction if it goes out of bounds
  if (randomX + noBtnRect.width > maxX || randomX < 0) {
    randomX = maxX - randomX;
  }

  if (randomY + noBtnRect.height > maxY || randomY < 0) {
    randomY = maxY - randomY;
  }

  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
  button.style.position = 'absolute';
});

    btn_yes.addEventListener('click' , () =>{
      const audio = document.getElementById('background-music');
        audio.play().catch(error => {
            console.log('Autoplay was prevented:', error);
        });
    });
    


