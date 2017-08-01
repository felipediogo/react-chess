import pieceReducer from './pieceReducer';

const initialState = {
  board: [
    ['black-tower', 'black-horse', 'black-bishop', 'black-queen', 'black-king', 'black-bishop', 'black-horse', 'black-tower'],
    Array(8).fill('black-pawn'),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill('white-pawn'),
    ['white-tower', 'white-horse', 'white-bishop', 'white-queen', 'white-king', 'white-bishop', 'white-horse', 'white-tower'],
  ],
  selectedPiece: {},
  isWhiteMove: true,
};

const getPiece = (piece) => piece.split('-')[1];

const changePieceLocation = (piece, location, board) => {
  const newBoard = board.map(function (arr) {
    return arr.slice();
  });
  let pieceY, pieceX, newLocationY, newLocationX;
  [ pieceY, pieceX ] = piece.position.split('-');
  [ newLocationY, newLocationX ] = location.split('-');
  newBoard[pieceY][pieceX] = null;
  newBoard[newLocationY][newLocationX] = piece.piece;
  return newBoard;
};

const isTheSamePiece = (selectedPiece, actionPiece) =>
  selectedPiece && selectedPiece.piece === actionPiece.piece && selectedPiece.position === actionPiece.position;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PIECE_SELECTED':
      if (isTheSamePiece(action.piece, state.selectedPiece)) {
        return {
          ...state,
          selectedPiece: {}
        };
      } else if (state.selectedPiece.piece) {
        pieceReducer[getPiece(state.selectedPiece.piece)](state.isWhiteMove ? 'white' : 'black', state.board, '1-7');
      }
      return {
        ...state,
        selectedPiece: {
          piece: action.piece.piece,
          position: action.piece.position
        }
      };
    case 'SQUARE_CLICKED':
      if (state.selectedPiece) {
        return {
          ...state,
          board: changePieceLocation(state.selectedPiece, action.location, state.board),
          selectedPiece: {}
        };
      }
      return state;
    default:
      return state;
  }
};
