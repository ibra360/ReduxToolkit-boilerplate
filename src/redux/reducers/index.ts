import { combineReducers } from 'redux'
import cardReducer from '../slices/cardSlice'

const reducers = combineReducers({
  card: cardReducer,
})

export default reducers
