
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
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case 'PIECE_SELECTED':
    //   return state.set('board', [
    //     ['black-horse', 'black-tower', 'black-bishop', 'black-queen', 'black-king', 'black-bishop', 'black-horse', 'black-tower'],
    //     Array(8).fill('black-pawn'),
    //     Array(8).fill(null),
    //     Array(8).fill(null),
    //     Array(8).fill(null),
    //     Array(8).fill(null),
    //     Array(8).fill('white-pawn'),
    //     ['white-tower', 'white-horse', 'white-bishop', 'white-queen', 'white-king', 'white-bishop', 'white-horse', 'white-tower'],
    //   ]);
    default:
      return state;
  }
};
