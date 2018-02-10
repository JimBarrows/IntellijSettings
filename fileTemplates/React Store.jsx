import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';
import {${NAME}_EVENT_NAMES} from '../constants';

class ${NAME} extends EventEmitter {
	constructor() {
		super();
	}


	handleActions(action) {
		switch (action.type) {
		}
	}
}


const store             = new ${NAME};
export const token = dispatcher.register(store.handleActions.bind(store));
export default store;