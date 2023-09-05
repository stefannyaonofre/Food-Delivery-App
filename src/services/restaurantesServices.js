import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase/config";

const colletictionName = "restaurantes";
const collectionRef = collection(firebaseDB, colletictionName);

export const getRestaurantesFromCollection = async () => {
    const restaurants = [];
    try {
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
            restaurants.push({
                id: doc.id,
                ...doc.data()
            })
        })
        console.log(restaurants)
        return restaurants;
        
    } catch (error) {
        console.log(error);
        return null;
    }
}