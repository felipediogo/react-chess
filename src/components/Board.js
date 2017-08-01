import React from 'react';
import Square from './Square';
import Piece from './Piece';

export default ({ store }) => {
  const onPieceClick = (piece) => store.dispatch({
    type: 'PIECE_SELECTED',
    piece: piece
  });

  const onSquareClick = (piece, position) => {
    if (!piece) {
      return store.dispatch({
        type: 'SQUARE_CLICKED',
        location: position
      });
    }
  };

  const game = store.getState().game;
  return (
    <div className="board">
      <For each="item" index="y" of={game.board}>
        <div>
          <For each="item" index="x" of={game.board}>
            <Square color={(y + x) % 2 == 0 ? 'white' : 'black'} position={`${y}-${x}`} key={`${y}-${x}`} onClick={onSquareClick} >
              <If condition={game.board[y][x]}>
                <Piece piece={game.board[y][x]} onClick={(piece) => onPieceClick(piece)} value={`${y}-${x}`} key={`${y}-${x}`} />
              </If>
            </Square>
          </For>
        </div>
      </For>
    </div>
  );
}