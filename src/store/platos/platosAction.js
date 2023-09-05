import {
  getPlatosFromCollection,
  getMenu,
} from "../../services/platosServices";
import { setError, setPlato } from "./platosSlice";

export const fillPlatosFromCollection = () => async (dispatch) => {
  try {
    const platos = await getPlatosFromCollection();
    dispatch(setPlato(platos));
    dispatch(setError(false));
  } catch (error) {
    console.log(error);
    dispatch(
      setError({
        error: true,
        code: error.code,
        message: error.message,
      })
    );
  }
};

export const getRestaurantsMenuFromCollection =
  (idRestaurant) => async (dispatch) => {
    try {
      const platos = await getMenu(idRestaurant);
      dispatch(setPlato(platos));
      dispatch(setError(false));
    } catch (error) {
      console.log(error);
      dispatch(
        setError({
          error: true,
          code: error.code,
          message: error.message,
        })
      );
    }
  };
