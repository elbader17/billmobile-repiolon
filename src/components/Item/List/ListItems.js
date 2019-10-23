import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from "react-native-elements";
import { Icon } from 'react-native-elements';
import { COLORS } from '../../../constants/colors';
import style from '../style';

const ListItems = props => {
    return props.items
      .filter(item => item.attributes.category === props.category)
      .map((item) => {
        const conditionLoading = props.loadingDelete && item.id === props.itemDelete;
        const isInvoice = props.type === 'invoice';
        const color = props.loadingDelete ? COLORS.gray : COLORS.blueLight //Disabled an enabled Button
        const iconCart = <Icon name="add-shopping-cart" size={23} color={color}/>;
        const iconTrash = <Icon name="trash" size={25} color={color} type='evilicon'/>; 
        const icon = isInvoice ? iconCart : iconTrash  
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
                  icon={icon}
                  TouchableComponent={TouchableOpacity}
                  onPress={() => props.actionItem(item) }
                  buttonStyle={style.buttonDelete}
                  titleStyle={style.textDelete}
                  disabledStyle={style.buttonDelete}
                  disabled = {props.loadingDelete}
                  loading={conditionLoading}
                />    
              </View>
            </View>
          </View>
        );
    });
}

ListItems.propTypes = {
  navigateToEditItem: PropTypes.func,
  deleteItem: PropTypes.func,
  category: PropTypes.string,
  loadingDelete: PropTypes.bool,
  itemDelete: PropTypes.string
};

export default ListItems;