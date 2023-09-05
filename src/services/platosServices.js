import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase/config";

const colletictionName = "platos";
const collectionRef = collection(firebaseDB, colletictionName);

export const getOlatosFromCollection = async () => {
    const platos = [];
    try {
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
            platos.push({
                id: doc.id,
                ...doc.data()
            })
        })
        console.log(platos)
        return platos;
        
    } catch (error) {
        console.log(error);
        return null;
    }
}