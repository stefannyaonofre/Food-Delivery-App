import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../firebase/config";

const colletictionName = "platos";
const collectionRef = collection(firebaseDB, colletictionName);

export const getPlatosFromCollection = async () => {
  const platos = [];
  try {
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      platos.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log(platos);
    return platos;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getMenu = async (idRestaurant) => {
    const platos = [];
  try {
    console.log(idRestaurant)
    const q = query(collectionRef, where("restauranteId", "==", idRestaurant));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        platos.push({
            id: doc.id,
            ...doc.data()
        })
    });
      console.log(platos);
      return platos
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPlatoById = async (idPlato) => {
    try {
        const q = doc(collectionRef, idPlato);
        const querySnapshot = await getDoc(q);
        const plato = querySnapshot.data();
        return plato;
    } catch (error) {
        console.log(error);
        return null;
    }
}
