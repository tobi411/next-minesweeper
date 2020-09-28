import React, { ReactElement, ComponentType } from 'react'
import { render } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '../reducers/gameReducer'

let test = {
  name: "Tobi Kehinde",
  gameOver: false,
  gameWon: false,
  difficulty: 'medium',
  timer: 0,
  numFlagged: 0,
  numMoves: 0,
  gameBoard: null,
};


export default function wrappedRender(
  ui: ReactElement,
  options?: any
): any {
  // Wrap dispatch in a mock so it can be spied on.
  const store = createStore(reducer, options?.state);
  store.dispatch = jest.fn(store.dispatch);

  function AllProviders({ children }: any): ReactElement {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  }

  const returns = render(ui, {
    wrapper: AllProviders as ComponentType,
    ...options,
  });

  return { store, ...returns };
}