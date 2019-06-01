import React from 'react';
import { View, Text, Alert, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Button} from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from '../style';
import { METRICS } from '../../../constants/metrics';

class ItemList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isProduct: false,
    };
  }

  componentWillMount() {
    this.props.getItemList();
  }

  navigateToNewItem = () => {
    this.props.navigation.navigate('NewItem');
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
          <View style={style.boxItems1} key={item.id}>
            <Text style={style.textRegular16GrayDark}>
              {item.attributes.name}
              {item.attributes.price}
            </Text>
            <Button
              title='Editar'
              onPress={() => this.navigateToEditItem(item) }
              buttonStyle={ style.buttonService  }
              titleStyle={ style.textRegular12WhiteBold }
            />
          </View>
        );
      });
  }

  renderSwtichButtons() {
    return (
      <View style={style.container}>
        <View style={[style.boxSelectButton,style.inLineSpaceAround]}>
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
      </View>
    );
  }

  render() {
    return(
      <KeyboardAvoidingView
          behavior={'padding'}
          style={{flex: 1}}
          keyboardVerticalOffset={METRICS.heightHeader}>
        {this.renderItems()}
        <Button
          title="Nuevo Item"
          onPress={ this.navigateToNewItem }
          buttonStyle={ style.buttonSave }
          />
        {this.renderSwtichButtons()}
      </KeyboardAvoidingView>
    );
  }
}


export default withNavigation(ItemList);