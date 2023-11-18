import { createStore } from 'redux';
import rootReducer from './src/store/reducers';

const store = createStore(rootReducer);

export default store;