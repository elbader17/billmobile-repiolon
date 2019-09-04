import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { GRADIANTBLUE, GRADIANTBLUE2, GRADIENTYELLOW } from '../../../constants/colors';
import AddItem from './AddItem';
import style from '../style';
import { validateAddItem } from '../../../utils/validations';

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
      isEnableButton: true,
      itemId: item.id,
      loading: false
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Cargar Producto o Servicio',
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
        headerLeft: <TouchableOpacity onPress={()=> navigation.navigate('ItemList')}>
                      <Icon name="left" size={20} color="white" style={{marginLeft:20}}/>
                    </TouchableOpacity> 
    }
  };

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
    const { saveItem, navigation } = this.props;
    const category = isProduct ? 'product' : 'service';
    const quantity = 1;
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
      navigation,
    );
  }

  setName = (value) => this.setState({ name: value, isEnableButton: true})
  setPrice = (value) => this.setState({ price:value, isEnableButton: true })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    const data = {
      isProduct: this.state.isProduct,
      name: this.state.name,
      price: this.state.price
    }
    return(
      <KeyboardAwareScrollView>
        <View style={style.container}>

          <View style={style.containerBody}>
            <View style={[style.boxSelectButton, style.inLineSpaceAround]}>
              <TouchableOpacity 
                onPress={() => this.setState({isProduct: true}) }>
                <LinearGradient 
                  colors={this.state.isProduct ? GRADIENTYELLOW : GRADIANTBLUE2}
                  style={style.buttonSelect}  
                  start={{x: 0, y: 1}} 
                  end={{x: 1, y: 0.9}}
                >
                  <Text style={style.textRegular16White}>
                    Productos
                  </Text>     
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => this.setState({isProduct: false}) }>
                <LinearGradient 
                  colors={this.state.isProduct ? GRADIANTBLUE2 : GRADIENTYELLOW }
                  style={style.buttonSelect}  
                  start={{x: 0, y: 1}} 
                  end={{x: 1, y: 0.9}}
                >
                  <Text style={style.textRegular16White}>
                    Servicios
                  </Text>     
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={style.boxInput}>
              <AddItem
                data={data}
                setName={this.setName}
                setPrice={this.setPrice}
              />
            </View>
          </View> 
          
          <View style={style.containerFooter}>
            <Button
              title={<Text>GUARDAR {this.state.isProduct ? 'PRODUCTO' : 'SERVICIO'}</Text>}
              onPress={ this.saveItem }
              buttonStyle={ style.buttonSave }
              titleStyle={ style.textSemiBold14White }
              disabledStyle={ style.buttonSaveDisabled }
              disabledTitleStyle={ style.textRegular14WhiteBold}
              disabled={(!validateAddItem(this.state.name, this.state.price) || !this.state.isEnableButton) }
              loading = {this.state.loading}
            />
          </View> 

        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default NewItem;