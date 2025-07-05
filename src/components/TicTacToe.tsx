import React, { useState } from 'react';

type Player = 'X' | 'O' | null;

const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<Player>(null);
  const [winningCombo, setWinningCombo] = useState<number[] | null>(null);

  const checkWinner = (newBoard: Player[]) => {
    for (let combo of WIN_COMBINATIONS) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        setWinningCombo(combo);
        return;
      }
    }
    if (!newBoard.includes(null)) setWinner('Draw');
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = 'X';
    setBoard(newBoard);
    checkWinner(newBoard);
    if (!winner && newBoard.includes(null)) {
      // IA joue après 800ms
      setTimeout(() => aiMove(newBoard), 800);
    }
  };

  const aiMove = (currentBoard: Player[]) => {
    const boardCopy = currentBoard.slice();
    let move;

    if (Math.random() < 0.7) {
      // IA forte 70% du temps
      move = findBestMove(boardCopy, 'O');
    } else {
      // Coup aléatoire
      const emptyIndices = boardCopy.map((v, i) => v === null ? i : null).filter(v => v !== null) as number[];
      move = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    }

    boardCopy[move] = 'O';
    setBoard(boardCopy);
    checkWinner(boardCopy);
  };

  const findBestMove = (board: Player[], player: Player) => {
    // Cherche coup gagnant
    for (let combo of WIN_COMBINATIONS) {
      const [a, b, c] = combo;
      const line = [board[a], board[b], board[c]];
      if (line.filter(x => x === player).length === 2 && line.includes(null))
        return combo[line.indexOf(null)];
    }
    // Bloque l'adversaire
    const opponent = player === 'X' ? 'O' : 'X';
    for (let combo of WIN_COMBINATIONS) {
      const [a, b, c] = combo;
      const line = [board[a], board[b], board[c]];
      if (line.filter(x => x === opponent).length === 2 && line.includes(null))
        return combo[line.indexOf(null)];
    }
    // Sinon premier dispo
    return board.indexOf(null)!;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setWinningCombo(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Morpion</h2>
      <div className="grid grid-cols-3 gap-2 mx-auto w-64">
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className={`aspect-square text-3xl font-bold border rounded-md transition-transform duration-200 
              ${cell === 'X' ? 'text-blue-500' : cell === 'O' ? 'text-red-500' : ''}
              ${winningCombo?.includes(idx) ? 'bg-green-200 animate-pulse scale-105' : 'bg-white dark:bg-gray-800'}
              hover:scale-105`}
          >
            {cell}
          </button>
        ))}
      </div>

      {winner && (
        <div className="mt-4 text-center animate-fade-in-up">
          <p className={`text-xl font-semibold 
            ${winner === 'Draw' ? 'text-gray-500' : winner === 'X' ? 'text-blue-600' : 'text-red-600'}`}>
            {winner === 'Draw' ? 'Match nul !' : `${winner} gagne !`}
          </p>
          <button
            onClick={resetGame}
            className="mt-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
}
