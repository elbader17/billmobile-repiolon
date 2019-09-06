import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { GRADIANTBLUE, GRADIANTBLUE2, GRADIENTYELLOW } from '../../../constants/colors';
import { orderByName } from '../../../utils/functions';
import style from '../style';

class ItemList extends React.Component {
  constructor(props){
    super(props);
    //this.props.getItemList();
    this.state = {
      //items: this.props.items,
      isProduct: true,
      loading: false
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Productos y Servicios',
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
      headerLeft: <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <Icon name="left" size={20} color="white" style={{marginLeft:20}}/>
                  </TouchableOpacity> 
    }  
  };

  componentWillMount() {
    this.props.getItemList()
      .then(()=> {this.setState({loading: true})})
  }

  navigateToNewItem = (isProduct) => {
    this.props.navigation.navigate('NewItem', { isProduct });
  }
  navigateToHome = () => {
    this.props.navigation.navigate('Home');
  }
  navigateToEditItem = (item) => {
    this.props.navigation.navigate('EditItem', { item });
  }

  renderLoading = () => {
    return (
      <View style={style.center}>
        <ActivityIndicator size="large" color="gray" style={{paddingBottom: 15}}/>
        <Text style={style.textRegular16GrayDark} >Cargando</Text>
      </View>
    );
  }

  renderItems = () => {
    const category = this.state.isProduct ? 'product' : 'service';
    const items = this.props.items.slice().sort(orderByName);
    return items
      .filter(item => item.attributes.category === category)
      .map((item) => {
        return (
          <View style={[style.inLineSpaceBetween,{paddingVertical: 2}, style.borde]} key={item.id}>
            <View style={style.boxNameItems}>
              <Text style={style.textRegular16GrayDark}>
                {item.attributes.name}
              </Text>
            </View>
            <View style={style.boxPriceItems}>
              <Text style={style.textRegular16GrayDark}>
                $ {item.attributes.price}
              </Text>
            </View>
            <Button
              title='Editar'
              onPress={() => this.navigateToEditItem(item) }
              buttonStyle={ this.state.isProduct ? style.buttonEditRed : style.buttonEditBlue }
              titleStyle={ this.state.isProduct ? style.textButtonEditRed : style.textButtonEditBlue }
            />
          </View>
        );
      });
  }

  renderSwtichButtons() {
    return (
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
    );
  }

  render() {
    return(
      <KeyboardAwareScrollView>
        <View style={style.container}>
          
          <View style={style.containerBody}>
            {this.renderSwtichButtons()}
            <View style={style.boxItems}>
              <ScrollView>
                {this.state.loading ? this.renderItems() : this.renderLoading()}
              </ScrollView>
            </View>
          </View>
          
          <View style={style.containerFooter}>
            <View style={style.inLineSpaceAround}>
              <TouchableOpacity 
                onPress={() => this.navigateToNewItem(this.state.isProduct) }>
                <LinearGradient 
                  colors={GRADIANTBLUE2}
                  style={style.buttonNew}  
                  start={{x: 0, y: 1}} 
                  end={{x: 1, y: 0.9}}
                >
                  <Text style={style.textRegular16White}>
                    <Icon name="plus" size={18} color="white"/> Agregar {this.state.isProduct ? 'Producto' : 'Servicio'}
                  </Text>     
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={ this.navigateToHome }>
                <LinearGradient 
                  colors={GRADIANTBLUE2}
                  style={style.buttonReady}  
                  start={{x: 0, y: 1}} 
                  end={{x: 1, y: 0.9}}
                >
                  <Text>
                    <Icon name="check" size={25} color="white"/>
                  </Text>     
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default withNavigation(ItemList);