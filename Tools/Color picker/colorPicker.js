const input = document.getElementById('inputColor');
const boton = document.getElementById('boton');
const hexadecimal = document.getElementById('hexadecimal');
const boxColor = document.getElementById('boxColor');

boton.addEventListener("click", ()=>{
    hexadecimal.textContent = input.value;
    boxColor.style.backgroundColor = input.value;
})

hexadecimal.addEventListener("click", ()=>{
    navigator.clipboard.writeText(input.value)
    setTimeout(() => {
        hexadecimal.textContent = "copied!"
          }, ); 
          setTimeout(() => {
            hexadecimal.textContent = input.value            
              }, 400); 
});