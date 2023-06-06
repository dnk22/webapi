import {load} from './mmkv';
import {APP_PARAMS} from '../constants';
import axiosClient from './axios';

export default async function pushNotificationCallback() {
  const lastStoredNotification = load('notifications');
  if (lastStoredNotification) {
    const notification = JSON.parse(lastStoredNotification);

    delete notification.iconLarge;
    delete notification.icon;
    delete notification.image;

    const apiParams = load(APP_PARAMS);
    const appConfig = load(notification.app);
    if (apiParams && appConfig && !appConfig.isNoti) return;
    try {
      const response = await axiosClient.post(
        `${apiParams.domain}?chat_id=${apiParams.chat_id}&username=${appConfig.username}`,
        notification,
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
