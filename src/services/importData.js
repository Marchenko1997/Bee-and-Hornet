import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Используем только getDocs для получения данных

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Функция для получения всех данных из коллекции
export const getAllHoney = async () => {
  try {
    const honeyCollectionRef = collection(db, 'beeAndHornet');
    const querySnapshot = await getDocs(honeyCollectionRef);
    const honeyData = [];

    querySnapshot.forEach((doc) => {
      honeyData.push({ id: doc.id, ...doc.data() });
    });

    console.log('Honey Data:', honeyData); // Логируем данные перед возвратом
    return honeyData;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
};