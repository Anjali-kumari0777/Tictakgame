var restartb=document.querySelector('#b')
var cells=document.querySelectorAll('td')
restartb.addEventListener('click',function(){
    for (cell of cells){
        cell.textContent=''
    }
})
function changeContent(){
    if(this.textContent==''){
       this.textContent='X'
    }
    else if(this.textContent=='X'){
          this.textContent='O'
    }
    else{
        this.textContent=''
    }
}
for(var i=0;i<cells.length;i++){
    cells[i].addEventListener('click',changeContent)
}

