import {useState} from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBorad.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';
import {WINNING_COMBINATIONS} from './assets/winning-combinations.js';


const PLAYERS = {
  'X' : 'Player 1',
  'O' : 'Player 2'
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns){
  let currentPlayer = 'X';
  if(turns.length >0 && turns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players){
  let winner ;

  for(const match of WINNING_COMBINATIONS)
  {
      const firstSquareSymbol = gameBoard[match[0].row][match[0].column];
      const secondSqaureSymbol = gameBoard[match[1].row][match[1].column];
      const thirdSquareSymbol = gameBoard[match[2].row][match[2].column];
      if(firstSquareSymbol && firstSquareSymbol === secondSqaureSymbol && secondSqaureSymbol === thirdSquareSymbol )
      {
        winner = players[firstSquareSymbol];
      }
      
  }
  return winner;
}
function derivedGameBoard (turns){
  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of turns )
    {
        const {square , player} = turn;
        const {row , col} = square;
        gameBoard[row][col] = player;
    }
    return gameBoard;
}
function App() {
  const [ players , setPlayers]  = useState(PLAYERS);
  const [ turns , setTurns ] = useState([]);
  const activePlayer = deriveActivePlayer(turns);
  const board = derivedGameBoard(turns);
  const winner = deriveWinner(board, players);
  const draw = (turns.length === 9) && (!winner);
  
  function handleRestart(){
    setTurns([]);
  }
  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: [newName]
      };      
    });
  }
  function handleActivePlayer(rowIndex, colIndex){
    // setActivePlayer((currentActivePlayer) =>{
    //   return currentActivePlayer === 'X' ? 'O' : 'X';
    // })
  
    setTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{square :{row: rowIndex , col: colIndex }, player : currentPlayer}, 
                      ...prevTurns,
      ]
      return updatedTurns;
    });
  }
  return (
  
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol ="X" isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbol ="O" isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || draw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare = {handleActivePlayer} board = {board}/>
      </div>
      <Log turnsData = {turns}/>
    </main>
  )
}

export default App
