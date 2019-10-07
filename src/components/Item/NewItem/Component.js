import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { GRADIANTBLUE2, COLORGB, COLORGB2 } from '../../../constants/colors';
import { validateAddItem } from '../../../utils/validations';
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
      headerBackground: (
        <LinearGradient
          colors={ GRADIANTBLUE2 }
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      ),
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: <TouchableOpacity onPress={()=> {
                    if (navigation.state.params.type === 'collection') navigation.navigate('ItemList');
                    else navigation.navigate('ListInvoiceItem');
                  }}>
                    <Icon name="left" size={20} color="white" style={{marginLeft:20}}/>
                  </TouchableOpacity> 
    }
  };

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
        },
        navigation, type
      );
    }
    else {
      if (name=='' && price=='') 
        this.setState({
          errorPrice: 'Debe ingresar un valor', 
          errorName: 'Este campo no puede ser vacio'
        })  
      else if (price=='') 
        this.setState({errorPrice: 'Debe ingresar un valor'})
        else 
          this.setState({errorName: 'Este campo no puede ser vacio'})
          
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
      <KeyboardAwareScrollView>
        <View style={style.container}>

          <View style={style.containerBody}>
            <View style={[style.boxSelectButton, style.inLineSpaceAround]}>
              <Button
                title='Productos'
                onPress={() => this.setState({isProduct: true}) }
                buttonStyle={ style.buttonSelect }
                titleStyle={ style.textRegular16White }
                ViewComponent={LinearGradient}
                linearGradientProps={this.state.isProduct ? COLORGB : COLORGB2}
              />
              <Button
                title='Servicios'
                onPress={() => this.setState({isProduct: false}) }
                buttonStyle={ style.buttonSelect }
                titleStyle={ style.textRegular16White }
                ViewComponent={LinearGradient}
                linearGradientProps={this.state.isProduct ? COLORGB2 : COLORGB}
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
          </View> 

          <View style={[style.containerFooter, {alignItems: 'center'}]}>
            <Button
              title='Guardar'
              onPress={ this.saveItem }
              buttonStyle={ style.buttonSave }
              titleStyle={ style.textRegular16White }
              loading={this.state.loading}
              ViewComponent={LinearGradient}
              linearGradientProps={COLORGB2}
            /> 
          </View> 

        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default NewItem;