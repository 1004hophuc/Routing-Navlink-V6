import { combineReducers } from 'redux'
import BaiTapHOCReducer from './reducer/BaiTapHOCmodalReducer'
import { createStore } from 'redux'

const rootReducer = combineReducers({
    BaiTapHOCReducer
})

const store = createStore(rootReducer);
export default store;