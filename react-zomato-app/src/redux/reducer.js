export default (state = {restaurants: []}, action) => {
    switch (action.type) {
      case 'restaurants/set':
        return {
            ...state,
            restaurants: action.payload
        }
      default:
        return state
    }
  }
  