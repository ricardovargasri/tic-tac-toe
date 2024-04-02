document.addEventListener('DOMContentLoaded', function(){


  
  class Board{
    constructor(board = ['', '','','','','','','','',]){
      this.board = board;
    };
    getBoard(){
      console.log(this.board)
    }
  };

  class Jugadores{
    constructor(symbol){
      this.symbol = symbol;
      }
    };
  (function handleSymbol(){
    const x = document.querySelector('#chooseX');
    const o = document.querySelector('#chooseO');

    x.addEventListener('click', ()=>{
      let player1 = new Jugadores('X');
      let player2 = new Jugadores('O');
      console.log(`el juador 1 escogio ${player1.symbol} y el jugador 2 escogio ${player2.symbol}`)
      x.style.display = 'none';
      o.style.display = 'none';
      makeBoard();
        
      })
      o.addEventListener('click', ()=>{
        let player1 = new Jugadores('O');
        let player2 = new Jugadores('X');
        console.log(`el juador 1 escogio ${player1.symbol} y el jugador 2 escogio ${player2.symbol}`)
        x.style.display = 'none';
        o.style.display = 'none';
        makeBoard();
          
        })
        function makeBoard(){
          let board = new Board;
          console.log(board); 
        }
    })();
  });
  
  
  
  


