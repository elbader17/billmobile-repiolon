import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import PropTypes from 'prop-types';
import {IconRight} from '../../constants/icons'
import style from './style';
import { COLORS } from '../../constants/colors';

const ListRecentCustomer = props => {
    if (props.invoices.length === 0 ) {
      return (
        <View style={{ alignItems: 'center', marginTop: 30}}>
          <Text style={style.textRegular16GrayDark}>
            !No posee Clientes recientes!
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
          <View key={invoice.id} style={{ paddingLeft: 7, marginVertical: 3, paddingVertical: 0, borderRadius: 7, borderBottomWidth: 0.5, borderColor: COLORS.grayLight}}>
            <View style={style.inLineSpaceBetween} >
              
              <Text style={style.textRegular14GrayDark}>
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