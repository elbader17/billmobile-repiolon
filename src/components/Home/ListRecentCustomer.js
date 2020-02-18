import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Button } from "react-native-elements";
import PropTypes from 'prop-types';
import {IconRight} from '../../constants/icons'
import style from './style';
import { COLORS } from '../../constants/colors';

const showpdf = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      alert('Error al abrir archio' + this.props.url)
      console.log("Don't know how to open URI: " + this.props.url);
    }
  });
}

const ListRecentCustomer = props => {
    const listProcessed = props.invoices.filter(invoice => invoice.attributes.state === 'processed');
    if (listProcessed.length === 0 || props.invoices.length === 0 ) {
      return (
        <View style={{ alignItems: 'center', marginTop: 30}}>
          <Text style={style.textRegular16GrayDark}>
            !No posee Clientes recientes!
          </Text>
        </View>
      )
    }
    return props.invoices
      .filter(invoice => invoice.attributes.state === 'processed')
      .map((invoice) => {
        return (
          <View key={invoice.id} style={{ paddingLeft: 7, marginVertical: 3, paddingVertical: 0, borderRadius: 7, borderBottomWidth: 0.5, borderColor: COLORS.grayLight}}>
            <View style={style.inLineSpaceBetween} >
              
              <Text style={style.textRegular14GrayDark}>
                <Text>
                  {invoice.attributes.invoice_type === 'fc' ? 'Factura-C | ' : 'Comprobante | '}
                </Text>
                {invoice.attributes.invoice_date}
              </Text>
              
              <Button
                title='Comporobante'
                icon= {IconRight}
                iconRight
                TouchableComponent={TouchableOpacity}
                onPress={ () => showpdf(invoice.attributes.url) }
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