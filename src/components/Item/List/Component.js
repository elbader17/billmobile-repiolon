import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../style';
import { METRICS } from '../../../constants/metrics';
import { orderByName } from '../../../utils/functions';

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
      title: 'LISTA DE PRODUCTOS/SERVICIOS',
      headerTitleStyle: style.headerText,
      headerTintColor: '#3687D1',
      headerLeft: <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <Icon name="md-arrow-back" size={24} color="#3687d1" style={{marginLeft:20}}/>
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
              {this.state.loading ? this.renderItems() : this.renderLoading()}
            </View>
          </ScrollView>
        </View>
       
        <View style={style.inLine}>
          <Button
            title=" Crear Nuevo"
            onPress={() => this.navigateToNewItem(this.state.isProduct) }
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
            onPress={ this.navigateToHome }
            buttonStyle={ style.buttonContinue }
            titleStyle={style.textRegular16WhiteBold}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default withNavigation(ItemList);