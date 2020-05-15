const toggle = document.querySelector('.switch input');
const slider = document.querySelector('.slider');
const header = document.querySelector('header');
const firstGrid = document.querySelectorAll('.fgrid1');
const secondGrid = document.querySelectorAll('.sgrid1');
const h6 = document.querySelectorAll('.fgrid1 h6');
const firstH6 = document.querySelectorAll('.subsecgrid1 h6');
const secondH6 = document.querySelectorAll('.subsecgrid2 h6');
const h4 = document.querySelectorAll('.fgrid1 h4');


//subsecgrid2

toggle.addEventListener('click',function(){
    if (this.checked) {
        console.log('it working')
        document.body.style.backgroundColor = "red";
        header.style.color = "white";
        for( var i = 0; i<h6.length; i++){
            h6[i].style.color = "white";
        }
        for( var i = 0; i<secondH6.length; i++){
            secondH6[i].style.color = "white";
        }
        for( var i = 0; i<firstH6.length; i++){
            firstH6[i].style.color = "white";
        }
        for( var i = 0; i<h4.length; i++){
            h4[i].style.color = "white";
        }
        // h6.style.color = "white";
        // h4.style.color = "white";
        for( var i = 0; i<firstGrid.length; i++){
            firstGrid[i].style.backgroundColor = "green";
        }
        for( var i = 0; i<secondGrid.length; i++){
            secondGrid[i].style.backgroundColor = "green";
        }
    }
    else{
        console.log('it not working');
        document.body.style.removeProperty("background-color");
        header.style.removeProperty("color");
        // h6.style.removeProperty("color");
        // h4.style.removeProperty("color");
        for( var i = 0; i<firstGrid.length; i++){
            firstGrid[i].style.removeProperty("background-color");
        }
        for( var i = 0; i<secondGrid.length; i++){
            secondGrid[i].style.removeProperty("background-color");
        }
        for( var i = 0; i<h4.length; i++){
            h4[i].style.removeProperty("color");
        }
        for( var i = 0; i<h6.length; i++){
            h6[i].style.removeProperty("color");
        }
        for( var i = 0; i<secondH6.length; i++){
            secondH6[i].style.removeProperty("color");
        }
        for( var i = 0; i<firstH6.length; i++){
            firstH6[i].style.removeProperty("color");
        }
        // firstGrid.style.removeProperty("color");
    }
})