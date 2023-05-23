import {Image, Text, View} from 'react-native';
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
  return (
    <View
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
          <Text
            style={[
              styles.textInfo,
              {color: colors.text},
            ]}>{`app: ${app}`}</Text>
          <Text
            style={[
              styles.textInfo,
              {color: colors.text},
            ]}>{`title: ${title}`}</Text>
          <Text
            style={[
              styles.textInfo,
              {color: colors.text},
            ]}>{`text: ${text}`}</Text>
          {!!time && (
            <Text
              style={[
                styles.textInfo,
                {color: colors.text},
              ]}>{`time: ${time}`}</Text>
          )}
          {!!titleBig && (
            <Text
              style={[
                styles.textInfo,
                {color: colors.text},
              ]}>{`titleBig: ${titleBig}`}</Text>
          )}
          {!!subText && (
            <Text
              style={[
                styles.textInfo,
                {color: colors.text},
              ]}>{`subText: ${subText}`}</Text>
          )}
          {!!summaryText && (
            <Text
              style={[
                styles.textInfo,
                {color: colors.text},
              ]}>{`summaryText: ${summaryText}`}</Text>
          )}
          {!!bigText && (
            <Text
              style={[
                styles.textInfo,
                {color: colors.text},
              ]}>{`bigText: ${bigText}`}</Text>
          )}
          {!!audioContentsURI && (
            <Text
              style={[
                styles.textInfo,
                {color: colors.text},
              ]}>{`audioContentsURI: ${audioContentsURI}`}</Text>
          )}
          {!!imageBackgroundURI && (
            <Text
              style={[
                styles.textInfo,
                {color: colors.text},
              ]}>{`imageBackgroundURI: ${imageBackgroundURI}`}</Text>
          )}
          {!!extraInfoText && (
            <Text
              style={[
                styles.textInfo,
                {color: colors.text},
              ]}>{`extraInfoText: ${extraInfoText}`}</Text>
          )}
        </View>
      </View>
    </View>
  );
};
export default Notification;
