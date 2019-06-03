import React from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../style';
import { METRICS } from '../../../constants/metrics';

class ItemList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isProduct: true,
    };
  }

  static navigationOptions = {
    title: 'LISTA PRODUCTOS/SERVICIOS',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  componentWillMount() {
    this.props.getItemList();
  }

  navigateToNewItem = () => {
    this.props.navigation.navigate('NewItem');
  }

  navigateToHome = () => {
    this.props.navigation.navigate('Home');
  }

  navigateToEditItem = (item) => {
    this.props.navigation.navigate('EditItem', { item });
  }

  renderItems = () => {
    const { items } = this.props;
    const category = this.state.isProduct ? 'product' : 'service';
    return items
      .filter(item => item.attributes.category === category)
      .map((item) => {
        return (
          <View style={[style.inLineSpaceBetween,{paddingVertical: 2}]} key={item.id}>
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
        <ScrollView>
          <View style={style.container}>
            {this.renderSwtichButtons()}
            <View style={style.boxInput}>
              {this.renderItems()}
            </View>
          </View>
        </ScrollView>
        <View style={style.inLine}>
          <Button
            title=" Crear nuevo Item"
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
            onPress={ this.navigateToHome }
            buttonStyle={ style.buttonContinue }
            titleStyle={style.textRegular18WhiteBold}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default withNavigation(ItemList);