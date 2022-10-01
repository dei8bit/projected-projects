const ok = document.createElement("p");
ok.innerHTML = `<p class="p-2 text-2xl absolute animate-ping transition duration-150 ease-in-out ">👌</p>`

const seccion = document.getElementById("seccion");
btn.addEventListener("click", ()=>{
    const content = document.getElementById('textArea').value;
    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...");  
        seccion.appendChild(ok);  
        setTimeout(() => {
            ok.remove();
          }, 800);                 
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
})

textArea.addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        const content = document.getElementById('textArea').value;
        navigator.clipboard.writeText(content)
            .then(() => {
            console.log("Text copied to clipboard...");  
            seccion.appendChild(ok);  
            setTimeout(() => {
                ok.remove();
              }, 800);                 
        })
            .catch(err => {
            console.log('Something went wrong', err);
        })    
    }
});