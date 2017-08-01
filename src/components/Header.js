import React from 'react';
export default ({ store }) => {
  const selectedPiece = store.getState().game.selectedPiece;

  return (
    <div>
      <If condition={selectedPiece.piece}>
        <p>Selected piece is {selectedPiece.piece} and the current location is {selectedPiece.position}</p>
      </If>
    </div>
  );
};
