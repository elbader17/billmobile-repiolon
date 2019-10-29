import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from "react-native-elements";
import { IconTrash } from '../../../constants/icons';
import { COLORS } from '../../../constants/colors';
import style from '../style';

const ListItems = props => {
    return props.items
      .filter(item => item.attributes.category === props.category)
      .map((item) => {
        const isInvoice = props.type === 'invoice';
        const color = props.loadingItem ? COLORS.gray : COLORS.blueLight //Disabled an enabled Button
        const icon = isInvoice ? undefined : <IconTrash color={color}/>;  
        const title = isInvoice ? 'Añadir' : undefined ; 
        const conditionLoading = props.loadingItem && item.id === props.itemActive;
        return (
          <View style={style.boxInfoItems} key={item.id}>
            <View style={style.inLineSpaceBetween} >
              <View>
                <Text style={style.textRegular14White}>
                  {item.attributes.name}
                </Text>
                <Text style={style.textLight14BlueLight}>
                  $ {item.attributes.price}
                </Text>
              </View>
              <View style={style.inLine}>
                <Button
                  title='Editar'
                  TouchableComponent={TouchableOpacity}
                  onPress={() => props.navigateToEditItem(item) }
                  buttonStyle={ style.buttonEditBlue }
                  titleStyle={ style.textButtonEdit }
                />
                <Button
                  title={title}
                  icon={icon}
                  TouchableComponent={TouchableOpacity}
                  onPress={() => props.actionItem(item) }
                  buttonStyle={isInvoice ? style.buttonEditBlue : style.buttonDelete}
                  titleStyle={style.textButtonEdit}
                  disabledStyle={isInvoice ? style.buttonEditGray : style.buttonDelete}
                  disabledTitleStyle={style.textRegular12Gray}
                  disabled = {props.loadingItem}
                  loading={conditionLoading}
                  loadingStyle={{top: 2.5}}
                />    
              </View>
            </View>
          </View>
        );
    });
}

ListItems.propTypes = {
  navigateToEditItem: PropTypes.func,
  actionItem: PropTypes.func,
  category: PropTypes.string,
  loadingItem: PropTypes.bool,
  itemActive: PropTypes.string
};

export default ListItems;