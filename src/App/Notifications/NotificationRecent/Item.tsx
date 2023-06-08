import {Image, ScrollView, Text, View} from 'react-native';
import styles from '../styles';

interface INotificationProps {
  time: string;
  app: string;
  title: string;
  titleBig: string;
  text: string;
  subText: string;
  summaryText: string;
  bigText: string;
  audioContentsURI: string;
  imageBackgroundURI: string;
  extraInfoText: string;
  icon: string;
  image: string;
  iconLarge?: string;
  colors: any;
}

const Notification: React.FC<INotificationProps> = ({
  time,
  app,
  title,
  titleBig,
  text,
  subText,
  summaryText,
  bigText,
  audioContentsURI,
  imageBackgroundURI,
  extraInfoText,
  icon,
  image,
  iconLarge,
  colors,
}) => {
  const dateTime = time ? new Date(+time).toLocaleString() : null;
  return (
    <ScrollView
      style={[styles.notificationWrapper, {backgroundColor: colors.surface}]}>
      <View style={styles.notification}>
        <View style={styles.imagesWrapper}>
          {!!icon && (
            <View style={styles.notificationIconWrapper}>
              <Image source={{uri: icon}} style={styles.notificationIcon} />
            </View>
          )}
          {!!image && (
            <View style={styles.notificationImageWrapper}>
              <Image source={{uri: image}} style={styles.notificationImage} />
            </View>
          )}
          {!!iconLarge && (
            <View style={styles.notificationImageWrapper}>
              <Image
                source={{uri: iconLarge}}
                style={styles.notificationImage}
              />
            </View>
          )}
        </View>
        <View style={styles.notificationInfoWrapper}>
          <View style={styles.row}>
            <Text style={[styles.rowTitle, {color: colors.text}]}>App </Text>
            <Text style={[styles.rowValue, {color: colors.text}]}>{app}</Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.rowTitle, {color: colors.text}]}>Tiêu đề</Text>
            <Text style={[styles.rowValue, {color: colors.text}]}>{title}</Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.rowTitle, {color: colors.text}]}>
              Nội dung
            </Text>
            <Text style={[styles.rowValue, {color: colors.text}]}>{text}</Text>
          </View>
          {!!time && (
            <View style={styles.row}>
              <Text style={[styles.rowTitle, {color: colors.text}]}>
                Thời gian
              </Text>
              <Text style={[styles.rowValue, {color: colors.text}]}>
                {dateTime}
              </Text>
            </View>
          )}
          {!!titleBig && (
            <View style={styles.row}>
              <Text style={[styles.rowTitle, {color: colors.text}]}>
                Tiêu đề lớn
              </Text>
              <Text style={[styles.rowValue, {color: colors.text}]}>
                {titleBig}
              </Text>
            </View>
          )}
          {!!subText && (
            <View style={styles.row}>
              <Text style={[styles.rowTitle, {color: colors.text}]}>
                Tiêu đề phụ
              </Text>
              <Text style={[styles.rowValue, {color: colors.text}]}>
                {subText}
              </Text>
            </View>
          )}
          {!!summaryText && (
            <View style={styles.row}>
              <Text style={[styles.rowTitle, {color: colors.text}]}>
                summaryText
              </Text>
              <Text style={[styles.rowValue, {color: colors.text}]}>
                {summaryText}
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};
export default Notification;
