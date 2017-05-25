import { NEW_GAME, 
        newGame, 
        MAKE_GUESS,
        makeGuess,
        TOGGLE_INFO_MODAL,
        toggleInfoModal } from './actions';

describe('New Game', () => {
  it('should start a new game', () => {
    const action = newGame();
    expect(action.type).toEqual(NEW_GAME);
    expect(action.correctAnswer).toBeGreaterThan(0);
    expect(action.correctAnswer).toBeLessThan(100); 
  });
});

describe('Make Guess', () => {
  it('should make a guess', () => {
    const guess = 8;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});

describe('Toggle Info Modal', () => {
  it('should toggle the info Modal', () => {
    const action = toggleInfoModal();
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);

  });
});

