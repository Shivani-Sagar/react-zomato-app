export default (state = {restaurants: []}, action) => {
    switch (action.type) {
      case 'restaurants/set':
        return {
            ...state,
            restaurants: action.payload,
            
        }
      case 'cuisines/set':
        return {
            ...state,
           
            cuisines:action.payload
        }
      default:
        return state
    }
  }
  