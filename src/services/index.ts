import {AppStorage, load, save} from './mmkv';
import {APP_PARAMS, RECENT_API_CALLED} from '../constants';
import axiosClient from './axios';

export default async function pushNotificationCallback() {
  const lastStoredNotification = load('notifications');
  if (lastStoredNotification) {
    /** check domain */
    let URL = AppStorage.getString('domain');
    if (!URL) return;

    /** chat Id */
    const chatIdSetting = JSON.parse(AppStorage.getString('chatId') || '');
    URL = URL + `?chat_id=${chatIdSetting.isActive ? chatIdSetting.value : ''}`;

    /** get notification data */
    const notification = JSON.parse(lastStoredNotification);
    delete notification.iconLarge;
    delete notification.icon;
    delete notification.image;

    /** check app settings */
    const appConfig = load(notification.app);
    URL = URL + `&username=${appConfig?.username || ''}`;
    if (appConfig === null || !appConfig.isNoti) return;

    const responseData = {
      status: 0,
      content: '',
      time: new Date().toLocaleString(),
    };
    // call api
    const response = await axiosClient
      .post(URL, notification)
      .then(res => {
        responseData.status = res.status;
        responseData.content = String(res.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          responseData.status = error.response.status;
          responseData.content =
            'Lỗi chưa xác định' || JSON.stringify(error.response.data);
        }
      });
    save(RECENT_API_CALLED, JSON.stringify(responseData));
    return response;
  }
}
