import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { authFeatureName, AuthState, authReducer } from "../reducers/auth.reducer";

interface RootState {
  [authFeatureName]: AuthState;
}


const RootReducer: ActionReducerMap<RootState> = {
  [authFeatureName]: authReducer
};

export { RootReducer };
