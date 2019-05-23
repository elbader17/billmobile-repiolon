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
    this.state = {
      nameProduct:"",
      nameService:"",
      priceProduct:"",
      valueService:"",
      isProduct: true,
      loading: false
    };
  }

  static navigationOptions = {
    title: 'CARGAR PRODUCTO/SERVICIO',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  saveProduct = () => {
    const { nameProduct, priceProduct } = this.state;
    const { createItem, navigation } = this.props;
    this.setLoading(true);
    createItem("product", nameProduct, priceProduct, navigation);
  }

  saveService = () => {
    const { nameService, valueService } = this.state;
    const { createItem, navigation } = this.props;
    this.setLoading(true);
    createItem("service", nameService, valueService, navigation);
  }

  setNameProduct = (value) => this.setState({ nameProduct: value })
  setNameService = (value) => this.setState({ nameService: value })
  setPriceProduct = (value) => this.setState({ priceProduct:value })
  setValueService = (value) => this.setState({ valueService:value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    const data = {
      nameProduct: this.state.nameProduct,
      nameService: this.state.nameService,
      price: this.state.priceProduct,
      value: this.state.valueService
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
                testID='product'
                onPress={() => this.setState({isProduct: true})}
                buttonStyle={this.state.isProduct ? style.buttonProduct : style.buttonProductDisabled}
                titleStyle={this.state.isProduct ? style.textRegular12WhiteBold : style.textRegular12RedBold}
              />
              <Button
                title='SERVICIO'
                testID='service'
                onPress={() => this.setState({isProduct: false}) }
                buttonStyle={this.state.isProduct ? style.buttonServiceDisabled : style.buttonService}
                titleStyle={this.state.isProduct ? style.textRegular12BlueBold : style.textRegular12WhiteBold}
              />
            </View>
            <View style={style.boxInput}>
              <AddItem
                isProduct={this.state.isProduct}
                setName={this.state.isProduct ? this.setNameProduct : this.setNameService}
                setValueOrPrice={this.state.isProduct ? this.setPriceProduct: this.setValueService}
                data={data}  
              />
            </View>
          </View>
        </ScrollView>
        <Button
          title={<Text>GUARDAR {this.state.isProduct ? 'PRODUCTO' : 'SERVICIO'}</Text>}
          testID='buttonSave'
          onPress={this.state.isProduct ? this.saveProduct : this.saveService}
          buttonStyle={style.buttonSave}
          titleStyle={style.textSemiBold14White}
          disabledStyle={style.buttonSaveDisabled}
          disabledTitleStyle={style.textRegular14WhiteBold}
          disabled={!validateAddItem(this.state.nameProduct, this.state.nameService, this.state.isProduct ? this.state.priceProduct : this.state.valueService)}
          loading = {this.state.loading}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default NewItem;