
const newInput = `<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Filtre por marca">`
const titles = Array.from(document.querySelectorAll('.title'))
let marcasContainer =  document.querySelector('UL.Marca')
marcasContainer.classList.remove('hidden')

titles.forEach(title => {
    if(title.innerText === 'Marca'){
        title.classList.remove('close')
        title.classList.add('open')
        title.insertAdjacentHTML('afterend', newInput)    
    }
})




function myFunction() {
    var input, filter, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    li = marcasContainer.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}