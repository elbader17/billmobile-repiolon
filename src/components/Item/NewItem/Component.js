import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from "react-native-elements";
import AddItem from './AddItem';
import style from '../style';
import { METRICS } from '../../../constants/metrics';
import { validateAddItem } from '../../../utils/validations';

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam('item', this.defaultItem());
    this.state = {
      name: item.attributes.name,
      price: item.attributes.price,
      isProduct: item.attributes.category === 'product',
      isEnableButton: true,
      itemId: item.id,
      loading: false
    };
  }

  static navigationOptions = {
    title: 'CARGAR PRODUCTO/SERVICIO',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
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
    this.setState({ isEnableButton: false});
    this.setLoading(true);
    saveItem(
      {
        id: itemId,
        category,
        name,
        price,
      },
      navigation,
    );
    //.catch(err => Alert.alert("Error al Ingresar: ",err.message))
  }

  setName = (value) => this.setState({ name: value, isEnableButton: true})
  setPrice = (value) => this.setState({ price:value, isEnableButton: true })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    const data = {
      isProduct: this.state.isProduct,
      name: this.state.name,
      price: this.props.price
    }
    return(
      <KeyboardAvoidingView
          behavior={'padding'}
          style={{flex: 1}}
          keyboardVerticalOffset={METRICS.heightHeader}>
        <ScrollView>
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
            <View style={style.boxInput}>
              <AddItem
                 data={data}
                 setName={this.setName}
                 setPrice={this.setPrice}
              />
            </View>
          </View>
        </ScrollView>
        <Button
          title={<Text>GUARDAR {this.state.isProduct ? 'PRODUCTO' : 'SERVICIO'}</Text>}
          onPress={ this.saveItem }
          buttonStyle={ style.buttonSave }
          titleStyle={ style.textSemiBold14White }
          disabledStyle={ style.buttonSaveDisabled }
          disabledTitleStyle={ style.textRegular14WhiteBold}
          disabled={(!validateAddItem || !this.state.isEnableButton) }
          loading = {this.state.loading}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default NewItem;