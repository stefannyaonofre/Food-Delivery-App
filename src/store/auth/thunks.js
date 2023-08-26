import {
  loginWithEmailPassword,
  registerWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async(dispatch) => {
    try {
      dispatch(checkingCredentials());
      const result = await singInWithGoogle();
      if (!result.ok) return dispatch(logout(result.errorMessage));
      console.log(result);
      dispatch(login(result));
    } catch (error) {
      console.log(error);
    }
  };
};

//loguin con usuario y contraseña 
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async( dispatch ) => {

      // dispatch( checkingCredentials() );

      const result = await registerWithEmailPassword({ email, password, displayName });
      console.log(result)
      if ( result.ok ) return  result.ok;
      return false
      // dispatch( login( result ))

  }

}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async( dispatch ) => {

      dispatch( checkingCredentials() );

      const result = await loginWithEmailPassword({ email, password });
      console.log(result);

      if ( !result.ok ) return dispatch( logout( result ) );
      dispatch( login( result ));

  }
}
