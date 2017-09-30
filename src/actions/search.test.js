import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)
;
import {searchRepo, searchUser} from './search'
// import store from '../store'

describe('Search Actions', ()=>{

    it("has a searchRepo", () => {
      const store = mockStore({items: []});

      return store.dispatch(searchRepo("test")).then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(2);
        expect(actions).toContainEqual({ type: "SEARCH_REPO" });
        expect(store.getState()).toEqual({items: []});
      });
    });


    it("has a searchUser", () => {
      const store = mockStore({items: []})

      return store.dispatch(searchUser('test'))
      .then(()=>{
        const actions = store.getActions()
        expect(actions.length).toBe(2);
        expect(actions).toContainEqual({type: 'SEARCH_USER'})
        expect(store.getState()).toEqual({items: []})
      })
    });


})