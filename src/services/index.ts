import {AppStorage, load, save} from './mmkv';
import {RECENT_API_CALLED} from '../constants';
import axiosClient from './axios';

export default async function pushNotificationCallback(data: any) {
  if (data) {
    /** check domain */
    let URL = AppStorage.getString('domain');
    if (!URL) return;

    /** chat Id */
    const chatIdSetting = JSON.parse(AppStorage.getString('chatId') || '');

    /** get notification data */
    const notification = JSON.parse(data);
    delete notification.iconLarge;
    delete notification.icon;
    delete notification.image;

    /** check app settings */
    const appConfig = load(notification.app);

    if (appConfig === null || !appConfig.isNoti) return;

    const responseData = {
      status: 0,
      content: '',
      time: new Date().toLocaleString(),
    };
    const requestData = {
      ...notification,
      chat_id: chatIdSetting.isActive ? chatIdSetting.value : '',
      username: appConfig?.username || '',
    };
    // call api
    const response = await axiosClient
      .post(URL, requestData)
      .then(res => {
        responseData.status = res?.status;
        responseData.content = res?.data
          ? JSON.stringify(res.data)
          : 'Chưa xác định';
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          responseData.status = error?.response?.status;
          responseData.content = error?.response?.data
            ? JSON.stringify(error?.response?.data)
            : 'Lỗi chưa xác định';
        }
      });
    save(RECENT_API_CALLED, JSON.stringify(responseData));
    return response;
  }
}
