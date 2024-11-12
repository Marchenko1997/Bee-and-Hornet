import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const getAllHoney = async () => {
  try {
    const honeyCollectionRef = collection(db, 'beeAndHornet');
    const querySnapshot = await getDocs(honeyCollectionRef);
    const honeyData = [];

    querySnapshot.forEach((doc) => {
      honeyData.push({ id: doc.id, ...doc.data() });
    });

     
    return honeyData;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
};