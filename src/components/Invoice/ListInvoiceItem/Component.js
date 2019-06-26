import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';
import { METRICS } from '../../../constants/metrics';
import { orderByName } from '../../../utils/functions';
import { messageAddItemInvoice } from '../../../utils/messagesNotifications'

class ListInvoiceItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isProduct: true,
      loading: true,
      touchItemsList: [],
      touchItem: null
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'ELEGIR PRODUCTOS/SERVICIOS',
      headerTitleStyle: style.headerText,
      headerTintColor: '#3687D1',
      headerLeft: <TouchableOpacity onPress={()=> navigation.navigate('Invoice')}>
                    <Icon name="md-arrow-back" size={24} color="#3687d1" style={{marginLeft:20}}/>
                  </TouchableOpacity> 
    }  
  };

  componentWillMount() {
    this.props.getItemList()
     .then(()=> {this.setState({loading: false})})
  }

  navigateToNewItem = () => {
    this.props.navigation.navigate('NewInvoiceItem');
    showMessage(messageAddItemInvoice);
  }

  navigateToInvoice = () => {
    this.props.navigation.navigate('Invoice');
  }

  renderLoading = () => {
    return (
      <View style={style.center}>
        <ActivityIndicator size="large" color="gray" style={{paddingBottom: 15}}/>
        <Text style={style.textRegular16GrayDark} >Cargando</Text>
      </View>
    );
  }

  /*editItemInvoice = item => {
    //this.props.navigation.navigate('EditItem', { item });
    const id = item.id;
    const name = item.attributes.name;
    const category = item.attributes.category;
    const price = item.attributes.price;
    const attributes = { id, category, name, price }
    updateItem(attributes, this.props.navigation)
  }*/

  finItemListForId = (array, elementId) => {
    const findItem = x => x === elementId;
    return array.find(findItem);
  } 

  saveItemInvoice = (id, category, name, price) => {
    this.setState({touchItemsList: [...this.state.touchItemsList, id], touchItem: id});
    const { saveItemInvoice } = this.props;
    const resourse = {
      category,
      name,
      price
    }
    saveItemInvoice(resourse)
      .then(() => {
        this.setState({touchItem: null});
      });
  }

  setDisabled = id => {
    const itemId = this.finItemListForId(this.state.touchItemsList,id);
    if (itemId === id) return true;
    else return false;
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
    const itemsList = this.props.items.slice().sort(orderByName);
    return itemsList
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
              title = 'Añadir'
              onPress={() => this.saveItemInvoice(item.id, item.attributes.category, item.attributes.name, item.attributes.price) }
              buttonStyle = { this.state.isProduct ? style.buttonSelectBlue : style.buttonSelectRed }
              titleStyle = { style.textButtonAñadir }
              loading = { this.state.touchItem === item.id ? true : false }
              loadingStyle={{top: 4}}
              disabled = { this.setDisabled(item.id) }
              disabledStyle = { style.buttonSelectDisabled }
              disabledTitleStyle = { style.textButtonAñadirDisabled }
            />
            {/*<Button
              title='Editar'
              onPress={() => this.editItemInvoice(items, item) }
              buttonStyle={ this.state.isProduct ? style.buttonEditRed : style.buttonEditBlue }
              titleStyle={ this.state.isProduct ? style.textButtonEditRed : style.textButtonEditBlue }
            />*/}
          </View>
        );
      });
  }

  renderSwtichButtons() {
    return (
      <View style={[style.boxSelectButton,style.inLineSpaceAround, {marginBottom: 25}]}>
        <Button
          title='PRODUCTO'
          onPress={() => this.setState({isProduct: true}) }
          buttonStyle={ this.state.isProduct ? style.buttonProduct : style.buttonProductDisabled }
          titleStyle={ this.state.isProduct ? style.textRegular12WhiteBold : style.textRegular12RedBold }
        />
        <Button
          title='SERVICIO'
          onPress={() => this.setState({isProduct: false}) }
          buttonStyle={ this.state.isProduct ? style.buttonServiceDisabled : style.buttonService  }
          titleStyle={ this.state.isProduct ? style.textRegular12BlueBold : style.textRegular12WhiteBold }
        />
      </View>
    );
  }

  render() {
    return(
      <KeyboardAvoidingView
        behavior={'padding'}
        style={{flex: 1}}
        keyboardVerticalOffset={METRICS.heightHeader}>
        
        <View style={style.container}>
          {this.renderSwtichButtons()}
          <ScrollView style={style.styleScroll}>
            <View style={style.boxInput}>
              {this.state.loading ? this.renderLoading(): this.renderItems()}
            </View>
          </ScrollView>
        </View>
       
        <View style={style.inLine}>
          <Button
            title=" Crear Nuevo"
            onPress={ this.navigateToNewItem }
            buttonStyle={ style.buttonNewItem }
            titleStyle={style.textButtonNewItem}
            icon={
              <Icon
                name="md-add"
                size={25}
                color="#EE6123"
              />
            }
          />
          <Button
            title="Listo"
            onPress={ this.navigateToInvoice }
            buttonStyle={ style.buttonContinue }
            titleStyle={style.textRegular16WhiteBold}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default withNavigation(ListInvoiceItem);