import {applyMiddleware,combineReducers,createStore,} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

//const initialState={};
export default function CounterApp(state=0, action) {
    switch(action.type) {
        case "INCREMENT":
        return state = state + 1;
        case "DECREMENT":
            return state = state - 1;
            default:
            return state;
    }
    return state;
}

//  export const reducers=combineReducers({
//   CounterApp1,
//  });
//  const store1 =createStore(reducers);

//  export default function store(){
//      return store1;
//  };
 //export default store;
// export default function CounterApp(state=0, action) 
// {
//  switch(action.type) {
//       case "INCREMENT":
//             return state = state + 1;
//         case "DECREMENT":
//             return state = state - 1;
//              default:
//             return state;
//    }
//    return state;
// }

//  export const reducers=combineReducers({
//   CounterApp1,
//  });
// //  export function configureStore()
// //  {
// //   const store=createStore(reducers,initialState,applyMiddleware(thunk));
// //  return store;
// // }
// export function configureStore(initialState = {}) {  
//   const store = createStore(
//     reducers,
//     initialState,
//     applyMiddleware(thunk)
//   )
//   return store;
// };
// export const store = configureStore();  
//export const store=configureStore();
//const store=createStore(reducers);