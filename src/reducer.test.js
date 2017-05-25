import reducer from './reducer';
import { NEW_GAME, newGame, 
         MAKE_GUESS, makeGuess, 
         TOGGLE_INFO_MODAL, toggleInfoModal } from './actions';

describe('Reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});

    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.showInfoModal).toEqual(false);
  });
  
  it('should return state when action is unknown', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  }); 

});

describe('newGame func', ()=>{
  it('should start a new game', () => {

    let state = {
      guesses: [1,3,5,7],
      feedback: `You're ice cold.`,
      correctAnswer: 66,
      showInfoModal: false 
    };

    state = reducer(state, newGame());
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.showInfoModal).toBe(false);
  });
});

describe('makeGuess func', () => {
  it('should update state to represent a new guess', () => {

    let state = {
      guesses: [1,3,5,7],
      feedback: `You're ice cold.`,
      correctAnswer: 66,
      showInfoModal: false
    };
    //test all difference scenarios
    state = reducer(state, makeGuess(21));
    expect(state.guesses).toEqual([1,3,5,7,21]);
    expect(state.feedback).toBe(`You're Cold...`);
    expect(state.showInfoModal).toBe(false);

    state = reducer(state, makeGuess(49));
    expect(state.guesses).toEqual([1,3,5,7,21,49]);
    expect(state.feedback).toBe(`You're Warm`);
    expect(state.showInfoModal).toBe(false);

    state = reducer(state, makeGuess(60));
    expect(state.guesses).toEqual([1,3,5,7,21,49,60]);
    expect(state.feedback).toBe(`You're Hot!`);
    expect(state.showInfoModal).toBe(false);

    state = reducer(state, makeGuess(66));
    expect(state.guesses).toEqual([1,3,5,7,21,49,60,66]);
    expect(state.feedback).toBe(`You got it!`);
    expect(state.showInfoModal).toBe(false);
  });
});

describe('showInfoModal', () => {
  it('should toggle the show in')
})