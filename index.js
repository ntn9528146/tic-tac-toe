const btnGame = document.querySelectorAll('.btnGame')
const btnReset = document.querySelector('.btnReset')
const winnerPrint = document.querySelector('.winnerPrint')
const btnStart = document.querySelector('.btnStart')
const gameBox = document.querySelector('.gameBox')



let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



btnGame.forEach((btnGame)=>{
    btnGame.addEventListener('click',()=>{
        console.log("btn was clicked");
        if (turnO) {
            btnGame.innerHTML ="O";
            turnO = false;
        } else {
            btnGame.innerHTML = "X";
            turnO = true; 
        }
        btnGame.disabled = true;
        checkWin();
                
    } )
})
const resetGame = ()=>{
    btnGame.forEach((btnGame)=>{
        btnReset.addEventListener('click',()=>{
    
            console.log("reset")
            btnGame.disabled = false;
            turnO = true;
            btnGame.innerHTML = "";
        });
    })

    }
    
    

const startGame = ()=>{
    btnStart.addEventListener('click', ()=>{
        gameBox.classList.add("gameBox")
    btnGame.forEach((btnGame)=>{
       
            console.log("reset")
            btnGame.disabled = false;
            turnO = true;
            btnGame.innerHTML = "";
           
        console.log("Start")
        winnerPrint.classList.remove("winnerPrint");
        
    })
   
   

    })
    
    
}

const  btnDisabled=()=>{
    for(let btn of btnGame){
        btn.disabled = true;
    }
}
const winName=(w)=>{
    gameBox.classList.remove("gameBox");
    winnerPrint.innerHTML =`Congratulation, ${w} are winner`;
    winnerPrint.classList.remove("winnerPrint");
    

    
    btnDisabled();

    
}
const checkWin = ()=>{
    for (let pattern of winPattern){
        let pos1val   = btnGame[pattern[0]].innerText;
        let pos2val   = btnGame[pattern[1]].innerText;
        let pos3val   = btnGame[pattern[2]].innerText;

        if( pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val ==  pos2val && pos2val  == pos3val && pos3val  ==  pos1val){
                console.log(pos1val)
                winName(pos1val);

            }

        }


       
    }

}

startGame();
resetGame();