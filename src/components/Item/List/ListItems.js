import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from "react-native-elements";
import { IconTrash } from '../../../constants/icons';
import { COLORS } from '../../../constants/colors';
import style from '../style';

const ListItems = props => {
  if (props.items.length == 0) {
    return(
      <View style={{alignItems: 'center', marginTop: 25}}>
        <Text style={style.textRegular16GrayDark}>
          ¡No hay items cargados!
        </Text>
      </View>
    )
  }
  else {
    return props.items
        .filter(item => item.attributes.category === props.category)
        .map((item) => {
          const resource = {
            name: item.attributes.name,
            price: item.attributes.price,
            category: item.attributes.category,
            id: item.id
          }
          const isInvoice = props.type === 'invoice';
          const color = props.loadingItem ? COLORS.grayDark : COLORS.blue //Disabled an enabled Button
          const icon = isInvoice ? undefined : <IconTrash color={color} />;  
          const title = isInvoice ? 'Añadir' : undefined ; 
          const conditionLoading = props.loadingItem && item.id === props.itemActive;
          return (
            <View style={style.boxInfoItems} key={item.id}>
              <View style={style.inLineSpaceBetween} >
                <View>
                  <Text style={style.textRegular14GrayDark}>
                    {item.attributes.name}
                  </Text>
                  <Text style={style.textLight14BlueMedium}>
                    $ {item.attributes.price}
                  </Text>
                </View>
                <View style={style.inLine}>
                  <Button
                    title='Editar'
                    TouchableComponent={TouchableOpacity}
                    onPress={() => props.navigateToEditItem(resource) }
                    buttonStyle={ style.buttonEditBlue }
                    titleStyle={ style.textButtonEdit }
                    disabled = {isInvoice}
                    disabledStyle={{display: 'none', borderColor: 'transparent'}}
                  />
                  <Button
                    title={title}
                    icon={icon}
                    TouchableComponent={TouchableOpacity}
                    onPress={() => props.actionItem(item) }
                    buttonStyle={isInvoice ? style.buttonEditBlue : style.buttonDelete}
                    titleStyle={style.textButtonEdit}
                    disabledStyle={isInvoice ? style.buttonEditGray : style.buttonDeleteDisabled}
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
}

ListItems.propTypes = {
  navigateToEditItem: PropTypes.func,
  actionItem: PropTypes.func,
  category: PropTypes.string,
  loadingItem: PropTypes.bool,
  itemActive: PropTypes.string
};

export default ListItems;