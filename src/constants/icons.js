import React from 'react';
import { Icon } from "react-native-elements";
import { COLORS } from './colors';

export const iconMenuBack = <Icon 
  type='material-community' 
  name="menu-open" 
  size={30} 
  color={COLORS.blue} 
  iconStyle={{marginLeft:10}}/>

export const IconTrash = props => (
  <Icon 
    type='evilicon'
    name="trash" 
    size={25}
    iconStyle={{marginLeft: -3}}
    {...props} 
  />
);

export const IconCaretRight = <Icon
  name='caretright'  
  type='antdesign'
  color={COLORS.blueLight}
  size={18}
/>

export const IconEye = <Icon
  name='eye'  
  type='feather'
  color={COLORS.grayDark}
  size={18}
/>

export const IconEyeOff = <Icon
  name='eye-off'  
  type='feather'
  color={COLORS.grayDark}
  size={18}
/>

export const IconBack = <Icon 
  type='ionicon' 
  name='ios-arrow-back' 
  size={25} 
  color={COLORS.blue} 
  iconStyle={{marginLeft: 15}}
/>

export const IconMore = <Icon 
  type='antdesign' 
  name="plus" 
  size={18} 
  color={COLORS.blueLight}
/>

export const IconDocument = <Icon 
  type='antdesign' 
  name="filetext1" 
  size={18} 
  color={COLORS.blue} 
  iconStyle={{marginLeft: 15}}
/>

export const IconRight = <Icon 
  type='antdesign' 
  name="right" 
  size={12} 
  color={COLORS.blue} 
  iconStyle={{ marginLeft: 2, top: 2.5}}
/>

export const IconAddCustomer = props => (
  <Icon 
    type='antdesign' 
    name="adduser"
    size={15}  
    {...props} 
  />
);

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
    color={COLORS.blue} 
    {...props} 
  />
);

export const IconUp = props => (
  <Icon 
    type='entypo'
    name="chevron-thin-up" 
    {...props} 
  />
);

export const MoreInfo = props => (
  <Icon 
    type='foundation'
    name="page-search" 
    {...props} 
  />
);

export const IconCheck = <Icon 
  type='antdesign'
  name="check" 
  size={20} 
  color={COLORS.white} 
/>

export const IconKey = <Icon 
  type='entypo'
  name="key" 
  size={20} 
  color={COLORS.grayDark} 
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

export const IconCustomer2 = props => (
  <Icon 
    name="user"
    type="feather"
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
  color={COLORS.blueLight} 
  iconStyle={{marginRight:8}}
/> 

export const IconConfig = <Icon 
  type='antdesign' 
  name='setting' 
  size={20} 
  color={COLORS.blueLight} 
  iconStyle={{marginRight:8}} 
/>

export const IconClose = <Icon 
  type='antdesign' 
  name='logout' 
  size={20} 
  color={COLORS.blueLight} 
  iconStyle={{marginRight:8}} 
/>

export const IconCloseDrawer = <Icon 
  type='antdesign' 
  name='close' 
  size={40} 
  color={COLORS.blueLight} 
/>

export const IconMoney = <Icon 
  type='materialicons' 
  name='attach-money' 
  size={30} 
  color={COLORS.grayDark} 
/>

export const IconLocation = <Icon 
  type='materialicons' 
  name='location-on' 
  size={30} 
  color={COLORS.grayDark} 
/>

export const IconTag = <Icon 
  type='antdesign' 
  name='tago' 
  size={25} 
  color={COLORS.grayDark} 
/>

export const IconIdcard = <Icon 
  type='antdesign' 
  name='idcard' 
  size={25} 
  color={COLORS.grayDark} 
/>

export const IconTax = <Icon 
  type='antdesign' 
  name='exclefile1' 
  size={25} 
  color={COLORS.grayDark} 
/>

export const IconSearch = <Icon 
  type='feather' 
  name='search' 
  size={23} 
  color={COLORS.grayDark} 
/>

export const IconBottom = <Icon 
  type='feather' 
  name='chevron-down' 
  size={20} 
  color={COLORS.blueLight} 
  iconStyle={{left: 10}}
/>