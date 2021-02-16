import { createStore, applyMiddleware } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { AppActions } from './types/actions'

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))

export default store