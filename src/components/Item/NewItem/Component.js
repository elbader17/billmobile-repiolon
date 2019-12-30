import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import { validateAddItem, validateName, validatePrice } from '../../../utils/validations';
import { GRADIANTBLUE2, GRADIANTBLUELIGHT, COLORGBL, COLORS } from '../../../constants/colors';
import { iconMenuBack } from '../../../constants/icons';
import { XY } from '../../../constants/gradientCoord';
import AddItem from './AddItem';
import style from '../style';

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam('item', this.defaultItem());
    console.log(item);
    const productOrService = item.category === 'product';
    const isProducts = this.props.navigation.getParam('isProduct', productOrService );
    
    this.state = {
      name: item.name,
      price: item.price,
      isProduct: isProducts,
      itemId: item.id,
      loading: false,
      errorName: undefined, 
      errorPrice: undefined
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Cargar Items',
      headerStyle: { backgroundColor: COLORS.blue, elevation: 0 },
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
    };
  }

  saveItem = () => {
    const { name, price, isProduct, itemId } = this.state;
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
        quantity
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
          errorPrice: 'Valor incorrecto o vacío', 
          errorName: 'Campo inválido'
        })  
      else if (!validatePrice(price)) this.setState({errorPrice: 'Valor incorrecto o vacío'})
        else this.setState({errorName: 'Campo inválido'})
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
            <View style={[style.boxSelectButton, style.inLineSpaceAround]}>
              <Button
                title='Productos'
                TouchableComponent={TouchableOpacity}
                onPress={() => this.setState({isProduct: true})} 
                buttonStyle={ this.state.isProduct ? style.buttonSelect : style.buttonSelectDisable }
                titleStyle={ this.state.isProduct ? style.textRegular14White : style.textRegular14White }
              />
              <Button
                title='Servicios'
                TouchableComponent={TouchableOpacity}
                onPress={() => this.setState({isProduct: false})}
                buttonStyle={ this.state.isProduct ? style.buttonSelectDisable : style.buttonSelect }
                titleStyle={ this.state.isProduct ? style.textRegular14White : style.textRegular14White }
              />
            </View>

            <View style={style.boxInput}>
              <AddItem
                data={data}
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
              buttonStyle={ style.buttonSave }
              titleStyle={ style.textBold16White }
              loading={this.state.loading}
            /> 
          </View> 

      </View>
    );
  }
}

export default NewItem;