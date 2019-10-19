import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const orderByName = (a, b) => {
  if (a.attributes.name > b.attributes.name) return 1
  if (a.attributes.name < b.attributes.name) return -1
  return 0
}

export const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === "Inicio") {
    iconName = "home";
  } else if (routeName === "Facturar") {
    iconName = "file-text";
  } else if (routeName === "Clientes") {
    iconName = "user";
  } else if (routeName === "Items") {
    iconName = "shopping-cart";
  }

  return <IconComponent name={iconName} size={21} color={tintColor} />;
};