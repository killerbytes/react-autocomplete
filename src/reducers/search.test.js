import search from './search'

describe('Search Reducer', ()=>{

  it('has a default state', ()=>{
    expect(search({repository: {}, user: {}}, {type: 'unexpected'})).toEqual({repository: {}, user: {}})
  })

  it("can handle SEARCH_REPO", () => {
    expect(search(undefined, {
      type: 'SEARCH_REPO'
    })).toEqual({ repository: {fetching: true}, user: {}});
  });

  it("can handle SEARCH_REPO_FULFILLED", () => {
    expect(search(undefined, {
        type: "SEARCH_REPO_FULFILLED",
        payload: {items: []}
      })).toEqual({ 
        repository: { fetching: false, result: {items: []} }, 
        user: {} 
      });
  });
  
  it("can handle SEARCH_USER", () => {
    expect(search(undefined, {
        type: "SEARCH_USER"
      })).toEqual({ user: { fetching: true }, repository: {} });
  });

    it("can handle SEARCH_USER_FULFILLED", () => {
      expect(search(undefined, {
          type: "SEARCH_USER_FULFILLED",
          payload: { items: [] }
        })).toEqual({
        user: { fetching: false, result: { items: [] } },
        repository: {}
      });
    });


})