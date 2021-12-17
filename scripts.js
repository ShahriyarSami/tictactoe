var parent = document.querySelectorAll(".parent")[0]
var boxes = document.querySelectorAll(".box")
var turnof = document.querySelectorAll(".turnof")[0]
var modal_bg = document.querySelectorAll(".modal-bg")[0]
var modal_box = document.querySelectorAll(".modal-box")[0]
var modal_close = document.querySelectorAll(".modal-close")[0]
var turn = "X"
var won = false
var turnForWins = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
]
modal_box.style.marginLeft = window.innerWidth/2 - 200 + "px"
modal_box.style.marginTop = window.innerHeight/2 - 100 + "px"
parent.style.marginLeft = window.innerWidth/2 - 225 + "px"
parent.style.marginTop = window.innerHeight/2 - 225 + "px"
turnof.style.marginLeft = window.innerWidth/2 - 105 + "px"

function showTurn(){
    turnof.innerHTML = "Turn of " + turn
}

function changeTurn(){
    turn = turn==="X"?"O":"X"
    showTurn()
}

function gebi(id){
    return document.getElementById(id).innerHTML
}

function checkForWins(){
    turnForWins.forEach(function(val){
            if(gebi("box"+val[0]) == gebi("box"+val[1]) && gebi("box"+val[1]) == gebi("box"+val[2]) && gebi("box"+val[0]) !== ""){
            console.log(gebi("box"+val[0])+" won!")
            won = true
            modal_bg.style.display = "block"
            modal_box.style.display = "block"
        }
    })
}

window.addEventListener("resize",function(){
    modal_box.style.marginLeft = window.innerWidth/2 - 200 + "px"
    modal_box.style.marginTop = window.innerHeight/2 - 100 + "px"
    parent.style.marginLeft = window.innerWidth/2 - 225 + "px"
    parent.style.marginTop = window.innerHeight/2 - 225 + "px"
    turnof.style.marginLeft = window.innerWidth/2 - 105 + "px"
})

modal_close.addEventListener("click",function(){
            modal_bg.style.display = "none"
            modal_box.style.display = "none"
    boxes.forEach(function(val){
        val.innerHTML = ""
        won = false
        turn = "X"
        showTurn()
    })
})

boxes.forEach(function(val){
    val.addEventListener("click",function(){
        if(!won){
            if(this.innerHTML == ""){
                this.innerHTML = turn
            }
            checkForWins()
            changeTurn()
        }
    })
})