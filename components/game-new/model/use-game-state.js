import { useReducer, useState } from "react";
import { GAME_SYMBOLS } from "../../game/constants";
import { computeWinner } from "./compute-winner";
import { getNextMove } from "./get-next-move";

const gameStateReducer = (state, action) => {
  return state;
};

const initGameState = ({}) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
});

export function useGameState(playersCount) {
  const [gameState, dispatch] = useReducer(gameStateReducer, {}, initGameState);
  // const [{ cells, currentMove, playersTimeOver }, setGameState] = useState({
  //   cells: new Array(19 * 19).fill(null),
  //   currentMove: GAME_SYMBOLS.CROSS,
  //   playersTimeOver: [],
  // });

  // const winnerSequence = computeWinner(cells);
  // const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

  // const winnerSymbol =
  //   nextMove === currentMove ? currentMove : cells[winnerSequence?.[0]];

  // const handleCellClick = (index) => {
  //   setGameState((lastGameState) => {
  //     if (lastGameState.cells[index]) {
  //       return lastGameState;
  //     }

  //     return {
  //       ...lastGameState,
  //       currentMove: getNextMove(
  //         lastGameState.currentMove,
  //         playersCount,
  //         lastGameState.playersTimeOver
  //       ),
  //       cells: lastGameState.cells.map((cell, i) =>
  //         i === index ? lastGameState.currentMove : cell
  //       ),
  //     };
  //   });
  // };

  // const handlePlayerTimeOver = (symbol) => {
  //   setGameState((lastGameState) => {
  //     return {
  //       ...lastGameState,
  //       playersTimeOver: [...lastGameState.playersTimeOver, symbol],
  //       currentMove: getNextMove(
  //         lastGameState.currentMove,
  //         playersCount,
  //         lastGameState.playersTimeOver
  //       ),
  //     };
  //   });
  // };

  // return {
  //   cells,
  //   currentMove,
  //   nextMove,
  //   handleCellClick,
  //   winnerSequence,
  //   handlePlayerTimeOver,
  //   winnerSymbol,
  // };
}
