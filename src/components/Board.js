import React from 'react';
import Square from './Square';
import Piece from './Piece';

export default ({ store }) => {
  const onPieceClick = () => console.log('oi');
  console.log(store.getState().game);
  const game = store.getState().game;
  return (
    <div className="board">
      <For each="item" index="x" of={game.board}>
        <div>
          <For each="item" index="i" of={game.board}>
            <Square color={(i + x) % 2 == 0 ? 'white' : 'black'} >
              <If condition={game.board[x][i]}>
                <Piece piece={game.board[x][i]} onClick={(piece) => onPieceClick(piece)} value={`${x}-${i}`} />
              </If>
            </Square>
          </For>
        </div>
      </For>
    </div>
  );
}