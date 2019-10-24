import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GRADIANTBLUE2, GRADIANTBLUELIGHT ,COLORS, COLORGBL } from '../../../constants/colors';
import { validateAddItem, validateName, validatePrice } from '../../../utils/validations';
import AddItem from './AddItem';
import style from '../style';

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam('item', this.defaultItem());
    const productOrService = item.attributes.category==='product';
    const isProducts = this.props.navigation.getParam('isProduct', productOrService );
    this.state = {
      name: item.attributes.name,
      price: item.attributes.price,
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
      headerTransparent: true,
      headerStyle: { elevation: 0 },
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft:( 
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Icon name="menu-open" size={30} color={COLORS.blueLight} style={{marginLeft:10}}/>
        </TouchableOpacity>
      ) 
    }
  };
1
  componentWillMount() {
    this.props.navigation.setParams({type: this.props.type}); //Use in Header Left Navigation
  }

  defaultItem = () => {
    return {
      attributes: {
        name: '',
        price: '',
        category: 'product',
      }
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
      saveItem(
        {
          id: itemId,
          category,
          name,
          price,
          quantity
        }
      )
      .then(() => {
        this.setLoading(false);
        if (type === 'collection') navigation.navigate('ItemsList');
        else navigation.navigate('ListInvoiceItem');
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
      <LinearGradient
        colors={ GRADIANTBLUE2 }
        style={style.container}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
      >
          <View style={style.containerBody}>
            <ScrollView>
            <View style={[style.boxSelectButton, style.inLineSpaceAround]}>
              <TouchableOpacity onPress={() => this.setState({isProduct: true})} activeOpacity={0.8}>
                <LinearGradient
                  colors={ this.state.isProduct ? GRADIANTBLUELIGHT : GRADIANTBLUE2 }
                  style={ style.buttonSelect }
                  start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                >
                  <Text style={style.textRegular14White}>Productos</Text>
                </LinearGradient>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => this.setState({isProduct: false})} activeOpacity={0.8}>
                <LinearGradient
                  colors={ this.state.isProduct ? GRADIANTBLUE2 : GRADIANTBLUELIGHT }
                  style={ style.buttonSelect }
                  start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                >
                  <Text style={style.textRegular14White}>Servicios</Text>
                </LinearGradient>
              </TouchableOpacity>
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
              title='Guardar'
              TouchableComponent={TouchableOpacity}
              onPress={ this.saveItem }
              buttonStyle={ style.buttonSave }
              titleStyle={ style.textRegular16White }
              loading={this.state.loading}
              ViewComponent={LinearGradient}
              linearGradientProps={COLORGBL}
            /> 
          </View> 

      </LinearGradient>
    );
  }
}

export default NewItem;