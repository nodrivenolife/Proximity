import React, { useContext } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Typography } from '../../theme';
import { ThemeContext } from '../../context/ThemeContext';

const { IconSizes } = Typography;

const TabIcon = ({ route, isActive }) => {
  const { theme } = useContext(ThemeContext);

  switch (route) {
    case 'HomeScreen':

      return <Entypo name='home' color={isActive ? theme.text01 : theme.text02} size={IconSizes.x5} />;

    case 'ExploreScreen':

      return <AntDesign name='search1' color={isActive ? theme.text01 : theme.text02} size={IconSizes.x5} />;

    case 'UploadScreen':

      return <AntDesign name='plus' color={isActive ? theme.text01 : theme.text02} size={IconSizes.x5} />;

    case 'NotificationScreen':

      return <Feather name='bell' color={isActive ? theme.text01 : theme.text02} size={IconSizes.x5} />;

    case 'ProfileScreen':

      return <AntDesign name='user' color={isActive ? theme.text01 : theme.text02} size={IconSizes.x5} />;

    default:
      return null;
  };
};

export default TabIcon;