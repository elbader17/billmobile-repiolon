import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import { IconRight } from "../../constants/icons";
import { presentInvoiceType } from "../../utils/invoice";
import { COLORS } from "../../constants/colors";
import style from "./style";

const showpdf = (url) => {
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    } else {
      alert("Error al abrir archio" + this.props.url);
      console.log("Don't know how to open URI: " + this.props.url);
    }
  });
};

const ListRecentCustomer = (props) => {
  const listProcessed = props.invoices.filter(
    (invoice) => invoice.attributes.state === "processed"
  );
  if (listProcessed.length === 0 || props.invoices.length === 0) {
    return (
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text style={style.textRegular16GrayDark}>
          !No posee Clientes recientes!
        </Text>
      </View>
    );
  }
  return props.invoices
    .filter((invoice) => invoice.attributes.state === "processed")
    .map((invoice) => {
      return (
        <View
          key={invoice.id}
          style={{
            paddingLeft: 7,
            marginVertical: 3,
            paddingVertical: 0,
            borderRadius: 7,
            borderBottomWidth: 0.5,
            borderColor: COLORS.grayLight,
          }}
        >
          <View style={style.inLineSpaceBetween}>
            <Text style={style.textRegular14GrayDark}>
              <Text style={style.textRegular14Blue}>
                {presentInvoiceType(invoice.attributes.invoice_type)}
              </Text>
              {" (" +
                invoice.attributes.invoice_date.substr(8, 2) +
                "/" +
                invoice.attributes.invoice_date.substr(5, 2) +
                "/" +
                invoice.attributes.invoice_date.substr(2, 2) +
                ")"}
            </Text>

            <Button
              title="Ver"
              icon={IconRight}
              iconRight
              TouchableComponent={TouchableOpacity}
              onPress={() => showpdf(invoice.attributes.url)}
              buttonStyle={style.buttonComprobante}
              titleStyle={style.textRegular14BlueMedium}
            />
          </View>
        </View>
      );
    });
};

ListRecentCustomer.propTypes = {
  invoices: PropTypes.array,
};

export default ListRecentCustomer;
