import axios from 'axios';
import {INotificationProps} from '../types';

export default async function pushNotificationCallback(
  notification: INotificationProps,
) {
  console.log('call ');
  delete notification.iconLarge;
  delete notification.icon;
  delete notification.image;
  try {
    const response = await axios.post(
      `https://api.ukm.vn/api/callback/appnotification`,
      notification,
    );
    return response;
  } catch (error) {
    const response = await axios.post(
      `https://api.ukm.vn/api/callback/appnotification`,
      error,
    );
    return response;
  }
}
