import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "../../features/dashboard/users/models";


//accion individual
// export const setAuthenticatorUser = createAction(
//     '[Auth] Set Authenticated User',
//     props<{user:User}>()
// );
//grupo de acciones
export const AuthActions = createActionGroup({
    source:'Auth',
    events:{
        'Set Authenticated User': props<{user:User}>(),
        'Unset Authenticated User':emptyProps(),
    }
})