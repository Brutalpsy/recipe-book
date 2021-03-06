import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';



const initialState = {
  Ingredient: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};


export function shopListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredient: [
          ...state.Ingredient,
          action.payload
        ]
      };
    default:
      return state;
  }
}
