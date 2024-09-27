import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Используем только getDocs для получения данных

const firebaseConfig = {
  apiKey: 'AIzaSyA5nhg9P4K1dFCKHs_y2U8Ooyx7DxLi3kE',
  authDomain: 'bee-and-hornet-c35e0.firebaseapp.com',
  projectId: 'bee-and-hornet-c35e0',
  storageBucket: 'bee-and-hornet-c35e0.appspot.com',
  messagingSenderId: '698549756883',
  appId: '1:698549756883:web:8e830d8649b67ab2f58526',
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