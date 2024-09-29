import axios from 'axios';
import { createTgMessage } from '../helpers/createTgMessage';
const { VITE_TG_BOT_TOKEN, VITE_TG_CHANEL_ID } = import.meta.env;

const instance = axios.create({
  baseURL: `https://api.telegram.org/bot${VITE_TG_BOT_TOKEN}/`,
});

export const sendMessageTg = async (message) => {
      console.log(VITE_TG_BOT_TOKEN, VITE_TG_CHANEL_ID);
  const { data } = await instance.post('/sendMessage', {
    chat_id: VITE_TG_CHANEL_ID,
    parse_mode: 'html',
    text: createTgMessage(message),
  });
  return data;
};
