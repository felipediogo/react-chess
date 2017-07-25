import React from 'react';
import Square from './Square';
import Piece from './Piece';

const onPieceClick = (teste) => console.log(teste);

export default ({ boardPieces }) => (
  <div className="board">
    <For each="item" index="x" of={boardPieces}>
      <div>
        <For each="item" index="i" of={boardPieces}>
          <Square color={(i + x) % 2 == 0 ? 'white' : 'black'} >
            <If condition={boardPieces[x][i]}>
              <Piece piece={boardPieces[x][i]} onClick={(piece) => onPieceClick(piece)} value={`${x}-${i}`} />
            </If>
          </Square>
        </For>
      </div>
    </For>
  </div>
);