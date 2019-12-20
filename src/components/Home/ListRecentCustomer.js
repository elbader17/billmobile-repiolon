import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import PropTypes from 'prop-types';
import {IconRight} from '../../constants/icons'
import style from './style';

const ListRecentCustomer = props => {
    if (props.customers === null ) {
      return (
        <View>
          <Text>
            No hay Clientes recientes
          </Text>
        </View>
      )
    }
    return props.invoices
      .filter(invoice => invoice.attributes.state === 'confirm')
      .map((invoice) => {
        const customer = props.customers.find(
          customer => customer.id === invoice.relationships.fiscal_identity.data.id
        );
        return (
          <View key={invoice.id}>
            <View style={style.inLineSpaceBetween} >
              
              <Text style={style.textRegular16GrayDark}>
                {customer.attributes.name === 'fc' ? 'Consumidor Final': customer.attributes.name}
              </Text>
              
              <Button
                title='Comporobante'
                icon= {IconRight}
                iconRight
                TouchableComponent={TouchableOpacity}
                onPress={() => null }
                buttonStyle={ style.buttonComprobante }
                titleStyle={ style.textRegular14Blue }
              />
              
            </View>
          </View>
        );
    });
}

ListRecentCustomer.propTypes = {
  invoices: PropTypes.array,
  customers: PropTypes.array
};

export default ListRecentCustomer;