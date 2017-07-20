import React from 'react';
import Square from './Square';
import Piece from './Piece';

const occupiedSquares = [
  ['black-tower', 'black-horse', 'black-bishop', 'black-queen', 'black-king', 'black-bishop', 'black-horse', 'black-tower'],
  Array(8).fill('black-pawn'),
  //Array(8).fill('black-king'),
  // Array(8).fill('black-king'),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill('white-pawn'),
  ['white-tower', 'white-horse', 'white-bishop', 'white-queen', 'white-king', 'white-bishop', 'white-horse', 'white-tower'],
];

export default () => (
  <div className="board">
    <For each="item" index="x" of={occupiedSquares}>
      <div>
        <For each="item" index="i" of={occupiedSquares}>
          <Square color={(i + x) % 2 == 0 ? 'white' : 'black'} >
            <If condition={occupiedSquares[x][i]}>
              <Piece piece={occupiedSquares[x][i]} />
            </If>
          </Square>
        </For>
      </div>
    </For>
  </div>
);