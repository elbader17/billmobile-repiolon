import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import { validateAddItem, validateName, validatePrice } from '../../../utils/validations';
import { iconMenuBack } from '../../../constants/icons';
import AddItem from './AddItem';
import style from '../style';

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam('item', this.defaultItem());
    const productOrService = item.category === 'product';
    const isProducts = this.props.navigation.getParam('isProduct', productOrService );
    
    this.state = {
      name: item.name,
      price: item.price,
      isProduct: isProducts,
      itemId: item.id,
      loading: false,
      errorName: undefined, 
      errorPrice: undefined,
      dateFrom: item.date_from,
      dateTo: item.date_to,
      paymentExpiration: item.payment_expiration
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Cargar Items',
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft:( 
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          {iconMenuBack}
        </TouchableOpacity>
      ) 
    }
  };

  defaultItem = () => {
    return {      
      name: '',
      price: '',
      category: 'product',
      quantity: 1,
      date_from: new Date(),
      date_to: new Date(),
      payment_expiration: new Date()
    };
  }

  handleDateFrom = (date) => this.setState({ dateFrom: date });
  handleDateTo = (date) => this.setState({ dateTo: date });
  handleDatePayment = (date) => this.setState({ paymentExpiration: date });

  saveItem = () => {
    const { name, price, isProduct, itemId, dateFrom, dateTo, paymentExpiration } = this.state;
    const { saveItem, type, navigation } = this.props;
    const category = isProduct ? 'product' : 'service';
    const quantity = 1;
    if (validateAddItem(name, price)) {
      this.setState({ isEnableButton: false});
      this.setLoading(true);
      saveItem({
        id: itemId,
        category,
        name,
        price,
        quantity,
        dateFrom,
        dateTo,
        paymentExpiration
      })
      .then(() => {
        this.setLoading(false);
        if (type === 'collection') navigation.navigate('ItemsList');
        else navigation.navigate('Invoice');
      })
    }
    else {
      if (!validateName(name) && !validatePrice(price)) 
        this.setState({
          errorPrice: '*Precio no válido o vacío', 
          errorName: '*Campo vacío'
        })  
      else if (!validatePrice(price)) this.setState({errorPrice: '*Precio no válido o vacío'})
        else this.setState({errorName: 'Campo vacío'})
    }
  }

  setName = (value) => this.setState({ name: value })
  setPrice = (value) => this.setState({ price:value })
  setLoading = (bool) => this.setState({ loading: bool })
  setErrorName = () => this.setState({errorName: undefined})
  setErrorPrice = () => this.setState({errorPrice: undefined})

  render() {
    const data = {
      isProduct: this.state.isProduct,
      name: this.state.name,
      price: this.state.price,
      errorName: this.state.errorName,
      errorPrice: this.state.errorPrice
    }
    return(
      <View style={style.container}>

          <View style={style.containerBody}>
            <ScrollView>
            <View style={[style.boxSelectButton, style.inLine]}>
              <Button
                title='Productos'
                TouchableComponent={TouchableOpacity}
                onPress={() => this.setState({isProduct: true})} 
                buttonStyle={ this.state.isProduct ? style.buttonSelect : style.buttonSelectDisable }
                titleStyle={ style.textRegular14GrayDark }
              />
              <Button
                title='Servicios'
                TouchableComponent={TouchableOpacity}
                onPress={() => this.setState({isProduct: false})}
                buttonStyle={ this.state.isProduct ? style.buttonSelectDisable : style.buttonSelect }
                titleStyle={ style.textRegular14GrayDark }
              />
            </View>

            <View style={style.boxInput}>
              <AddItem
                dateFrom={this.state.dateFrom}
                dateTo={this.state.dateTo}
                paymentExpiration={this.state.paymentExpiration}
                handleDateFrom={this.handleDateFrom}
                handleDateTo={this.handleDateTo}
                handleDatePayment={this.handleDatePayment}
                data={data}
                type={this.props.type}
                setName={this.setName}
                setPrice={this.setPrice}
                setErrorName={this.setErrorName}
                setErrorPrice={this.setErrorPrice}
              />
            </View>
            </ScrollView>
          </View> 

          <View style={[style.containerFooter, {alignItems: 'center'}]}>
            <Button
              title={this.props.type==='invoice' ? 'Añadir al Comprobante' : 'Guardar'}
              TouchableComponent={TouchableOpacity}
              onPress={ this.saveItem }
              buttonStyle={ style.buttonPrimary }
              titleStyle={ style.textBold16White }
              loading={this.state.loading}
            /> 
          </View> 

      </View>
    );
  }
}

export default NewItem;