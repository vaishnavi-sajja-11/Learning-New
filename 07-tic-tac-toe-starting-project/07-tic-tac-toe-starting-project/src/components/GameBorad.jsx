import { useState } from "react";
import Player from "./Player";


export default function GameBoard({onSelectSquare ,board}) {

    // const [gameBoard , setGameBoard] = useState(initialGameBoard);

    // function handleClick(row,col)
    // {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
    //         updatedGameBoard[row][col] = currentPlayer;
    //         return updatedGameBoard;
    //     });
    //     onSelectSquare();
    // }
    return (
            <ol id="game-board">
                {board.map((row, rowIndex) => 
                (<li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) => (
                            <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex,colIndex)} 
                            disabled = {col !== null ? true :false}>{col}</button>
                        </li>
                        ))}
                    </ol>
                </li>)
                )}
            </ol>
    );
}