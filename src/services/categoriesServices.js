import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase/config";

const colletictionName = "categorias";
const collectionRef = collection(firebaseDB, colletictionName);

export const getOlatosFromCollection = async () => {
    const categories = [];
    try {
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
            categories.push({
                id: doc.id,
                ...doc.data()
            })
        })
        console.log(categories)
        return categories;
        
    } catch (error) {
        console.log(error);
        return null;
    }
}