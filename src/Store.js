import {createStore} from 'redux';
import ScreenManager from './dispatcher/ScreenManager';

const store = createStore(ScreenManager,{
  action:'howdy',
});

export default {store};