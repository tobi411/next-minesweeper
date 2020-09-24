import { applyMiddleware, createStore, combineReducers, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/gameSaga'

const bindMiddleware = (middleware: Middleware[]) => {
    return applyMiddleware(...middleware)
}

export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}

export const wrapper = createWrapper(makeStore)