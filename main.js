let btn_yes = document.getElementById("btn_yes");

btn_yes.addEventListener('click', () => {
    document.getElementById("sadpuppy").style.display = 'none'
       document.getElementById("title").style.display = 'none'
 document.getElementById("happypuppy").style.display = 'block'
document.getElementById("title2").style.display = 'block'
})


const button = document.getElementById('btn_no');

button.addEventListener('mouseover', () => {
  // Get the button's dimensions
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  // Get the button's original position
  const originalX = button.offsetLeft;
  const originalY = button.offsetTop;

  // Define a range for the random coordinates (e.g., 50px)
  const range = 100;

  // Generate random x and y coordinates within the range
  const randomX = Math.floor(Math.random() * (range * 2) - range) + originalX;
  const randomY = Math.floor(Math.random() * (range * 2) - range) + originalY;

  // Ensure the button doesn't move outside the viewport
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  const minX = 0;
  const minY = 0;

  // Clamp the random coordinates to the range [minX, maxX] and [minY, maxY]
  const newX = Math.max(minX, Math.min(randomX, maxX));
  const newY = Math.max(minY, Math.min(randomY, maxY));

  // Set the button's position to the new coordinates
  button.style.position = 'absolute';
  button.style.top = `${newY}px`;
  button.style.left = `${newX}px`;
});


    window.addEventListener('load', function() {
        const audio = document.getElementById('background-music');
        audio.play().catch(error => {
            // Autoplay might be blocked by the browser
            console.log('Autoplay was prevented:', error);
        });
    });
    

    btn_yes.addEventListener('click' , () =>{
      const audio = document.getElementById('background-music');
        audio.play().catch(error => {
            console.log('Autoplay was prevented:', error);
        });
    });
    


