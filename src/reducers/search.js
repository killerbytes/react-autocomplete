export default function reducer(state={
    repository: {
    },
    user: {
    }
}, action){
    switch (action.type) {
      case "SEARCH_REPO": {
        return { ...state, repository: { fetching: true } };
      }
      case "SEARCH_REPO_FULFILLED": {
        return { ...state, repository: { fetching: false, result: action.payload } };
      }
      case "SEARCH_USER": {
        return { ...state, user: { fetching: true } };
      }
      case "SEARCH_USER_FULFILLED": {
        return { ...state, user: { fetching: false, result: action.payload } };
      }
      default:
        return state;
    }
}