import React from 'react';
import Square from './Square';
import Piece from './Piece';

const boardPieces = [
  ['black-tower', 'black-horse', 'black-bishop', 'black-queen', 'black-king', 'black-bishop', 'black-horse', 'black-tower'],
  Array(8).fill('black-pawn'),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill('white-pawn'),
  ['white-tower', 'white-horse', 'white-bishop', 'white-queen', 'white-king', 'white-bishop', 'white-horse', 'white-tower'],
];

const onPieceClick = (teste) => console.log(teste);

export default () => (
  <div className="board">
    <For each="item" index="x" of={boardPieces}>
      <div>
        <For each="item" index="i" of={boardPieces}>
          <Square color={(i + x) % 2 == 0 ? 'white' : 'black'} >
            <If condition={boardPieces[x][i]}>
              <Piece piece={boardPieces[x][i]} onClick={(piece) => onPieceClick(piece)} boardPosition={`${x}-${i}`} />
            </If>
          </Square>
        </For>
      </div>
    </For>
  </div>
);