import React from 'react';
import { Icon } from "react-native-elements";
import { COLORS } from './colors';

export const iconMenuBack = <Icon 
  type='material-community' 
  name="menu-open" 
  size={30} 
  color={COLORS.blueLight} 
  iconStyle={{marginLeft:10}}/>

export const IconTrash = props => (
  <Icon 
    type='evilicon'
    name="trash" 
    size={25} 
    {...props} 
  />
);

export const IconBack = <Icon 
  type='ionicon' 
  name='ios-arrow-back' 
  size={25} 
  color={COLORS.blueLight} 
  iconStyle={{marginLeft: 15}}
/>

export const IconMore = <Icon 
  type='antdesign' 
  name="plus" 
  size={18} 
  color="white"
/>

export const IconDocument = <Icon 
  type='antdesign' 
  name="filetext1" 
  size={18} 
  color={COLORS.blueLight} 
  iconStyle={{marginLeft: 15}}
/>

export const IconRight = <Icon 
  type='antdesign' 
  name="right" 
  size={12} 
  color={COLORS.blue} 
  iconStyle={{ marginLeft: 2, top: 2.5}}
/>

export const IconAddCustomer = <Icon 
  type='antdesign' 
  name="adduser" 
  size={15} 
  color={COLORS.white} 
/>

export const IconX = props => (
  <Icon 
    type='feather'
    name="x" 
    {...props} 
  />
);

export const IconEdit = props => (
  <Icon 
    type='material'
    name="edit" 
    color={COLORS.blueMedium} 
    {...props} 
  />
);

export const IconCheck = <Icon 
  type='antdesign'
  name="check" 
  size={20} 
  color={COLORS.blueMedium} 
/>

//Icons Bottom Tab Navigator
export const IconHome = props => (
  <Icon 
    name="home" 
    type="feather"
    size={21} 
    {...props}
  />
);

export const IconInvoice = props => (
  <Icon 
    name="file" 
    type="feather"
    size={21}
    {...props}
  />
);

export const IconCustomer = props => (
  <Icon 
    name="users"
    type="feather"
    size={21}
    {...props}
  />
);

export const IconItem = props => (
  <Icon 
    name="shopping-cart"
    type="feather"
    size={21}
    {...props}
  />
);

//Icons Drawer Navigator
export const IconChat = <Icon 
  type='antdesign' 
  name='message1' 
  size={20} 
  color={COLORS.blue} 
  iconStyle={{marginRight:8}}
/> 

export const IconConfig = <Icon 
  type='antdesign' 
  name='setting' 
  size={20} 
  color={COLORS.blue} 
  iconStyle={{marginRight:8}} 
/>

export const IconClose = <Icon 
  type='antdesign' 
  name='logout' 
  size={20} 
  color={COLORS.blue} 
  iconStyle={{marginRight:8}} 
/>

export const IconCloseDrawer = <Icon 
  type='antdesign' 
  name='closecircle' 
  size={40} 
  color={COLORS.blue} 
/>