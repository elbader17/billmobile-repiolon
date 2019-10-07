import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from "react-native-elements";
import Icon1 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../../constants/colors';
import style from '../style';

const ListItems = props => {
    return props.items
      .filter(item => item.attributes.category === props.category)
      .map((item) => {
        const conditionLoading = props.loadingDelete && item.id === props.itemDelete;
        const isInvoice = props.type === 'invoice';
        const color = props.loadingDelete ? COLORS.gray : COLORS.blueMedium //Disabled an enabled Button
        const iconCart = <Icon name="add-shopping-cart" size={23} color={color}/>;
        const iconTrash = <Icon1 name="trash-2" size={20} color={color}/>;
        const icon = isInvoice ? iconCart : iconTrash  
        return (
          <View style={style.boxInfoItems} key={item.id}>
            <View style={style.inLineSpaceBetween} >
              <View>
                <Text style={style.textRegular14GrayDark}>
                  {item.attributes.name}
                </Text>
                <Text style={style.textRegular14Blue}>
                  $ {item.attributes.price}
                </Text>
              </View>
              <View style={style.inLine}>
                <Button
                  title='Editar'
                  onPress={() => props.navigateToEditItem(item) }
                  buttonStyle={ style.buttonEditBlue }
                  titleStyle={ style.textButtonEdit }
                />
                <Button
                  icon={icon}
                  onPress={() => props.actionItem(item) }
                  buttonStyle={conditionLoading ? style.buttonDeleteLoad : style.buttonDelete}
                  titleStyle={style.textDelete}
                  disabledStyle={conditionLoading ? style.buttonDeleteLoad : style.buttonDelete}
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