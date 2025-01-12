import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
import { thunk } from 'redux-thunk'

const middleware = [thunk]
export default configureStore({reducer: reducers},middleware);