import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore();

export const fetchReviews = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'reviews'));
    const reviews = [];
    querySnapshot.forEach((doc) => {
      reviews.push(doc.data());
    });
    return reviews;
  } catch (error) {
    throw new Error(error.message);
  }
};
