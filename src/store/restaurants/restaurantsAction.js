import { getRestaurantById, getRestaurantesFromCollection } from "../../services/restaurantesServices";
import { setError, setRestaurant } from "./restaurantsSlice";

export const fillRestaurantsFromCollection = () => async (dispatch) => {
  try {
    const restaurants = await getRestaurantesFromCollection();
    dispatch(setRestaurant(restaurants));
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

// export const getRestaurantByIdFromCollection =
//   (idRestaurant) => async (dispatch) => {
//     try {
//         const restaurant = await getRestaurantById(idRestaurant);
//         dispatch(setRestaurant(restaurant));
//         dispatch(setError(false));
//     } catch (error) {
//       console.log(error);
//       dispatch(
//         setError({
//           error: true,
//           code: error.code,
//           message: error.message,
//         })
//       );
//     }
//   };
