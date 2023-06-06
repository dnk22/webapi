import {load, save} from './mmkv';
import {APP_PARAMS, RECENT_API_CALLED} from '../constants';
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
      const apiURL = `${apiParams.domain}?chat_id=${apiParams.chat_id}&username=${appConfig?.username}`;
      const response = await axiosClient.post(apiURL, notification);
      save(RECENT_API_CALLED, apiParams.domain);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
