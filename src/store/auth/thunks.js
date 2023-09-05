import { doc, setDoc } from "firebase/firestore";
import { firebaseAuth, firebaseDB } from "../../firebase/config";
import {
  // loginWithCode,
  loginWithEmailPassword,
  registerWithEmailPassword,
  signInWithCode,
  singInWithGoogle,
} from "../../firebase/provider";
import { addNewUser, checkingCredentials, login, logout } from "./authSlice";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

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

export const startLoginWithEmailPassword = ({ email, password, displayName, photoURL }) => {
  return async( dispatch ) => {

      dispatch( checkingCredentials() );

      const result = await loginWithEmailPassword({ email, password, displayName,photoURL });
      console.log(result);

      if ( !result.ok ) return dispatch( logout( result ) );
      dispatch( login( result ));

  }
}


export const startLoginWithCode = (code) => {
  return async( dispatch ) => {

      dispatch( checkingCredentials() );

      const result = await signInWithCode(code);
      console.log(result);

      if ( !result.ok ) return dispatch( logout( result ) );
      dispatch( login( result ));

  }
}

export const startNewUser = (createUser) => {
  return async (dispatch, getState) => {
    
    const State = getState().firebaseAuth;

    const newUser = {
      uid: State.uid,
      photoURL: createUser?.photoURL,
      email: State.email,
      displayName: State.displayName,
      date: State.date,
      phone: State.phone,
      

    }
   const newDoc = doc(firebaseDB, 'usuarios', State.uid);
   await setDoc( newDoc, newUser );
  };
};

export const createAnUser = (newUser) => {
  return async (dispatch) => {
      try {
          const { user } = await createUserWithEmailAndPassword(firebaseAuth, newUser.email, newUser.password)
          await updateProfile(firebaseAuth.currentUser, {
              displayName: newUser.displayName, photoURL: newUser.photoURL,
          });
          const createdUser = await createAnUserInCollection(user.uid, newUser);
          console.log("respuesta firebase", user);
          console.log("respuesta firestore", createdUser);
          dispatch(addNewUser(createdUser.user));
          dispatch(login(true));
      } catch (error) {
          console.log(error)
      }
  }
}
//authactions