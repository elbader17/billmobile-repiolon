import React from 'react';
import { View, Text, Alert, TextInput, ScrollView} from 'react-native';
import { Button} from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from '../style';


class NewItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      nameProduct:"",
      nameService:"",
      price:"",
      isProduct: true,
    };
  }

  static navigationOptions = {
    title: 'CARGAR PRODUCTO/SERVICIO',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  updateIndex = () => {
    const newIndex = this.state.selectedIndex === 0 ? 1 : 0;
    this.setState({ selectedIndex: newIndex });
  }

  saveProduct = () => {
    const { nameProduct,price } = this.state;
    const { createItem, navigation } = this.props;
    createItem("product", nameProduct, price, navigation);
    //.catch(err => Alert.alert("Error al Ingresar: ",err.message))
  }

  saveService = () => {
    const { nameService,price } = this.state;
    const { createItem, navigation } = this.props;
    createItem("service", nameService, price, navigation);
    //.catch(err => Alert.alert("Error al Ingresar: ",err.message));
  }

  setNameProduct = (value) => this.setState({ nameProduct: value})
  setNameService = (value) => this.setState({ nameService: value})
  setPrice = (value) => this.setState({ price:value })

  renderNewItems = () => {
    if (this.state.isProduct) {
      return (
        <View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Nombre de Producto"
              onChangeText={this.setNameProduct}
              style={ style.textName }
            />
          </View>
          <View style={style.price}>
            <Text style={style.textRegular14GrayDarkPrice}>Precio $ </Text>
            <TextInput
              placeholder="0.00"
              onChangeText={this.setPrice}
              style={ style.textBoxPrice }
              keyboardType='numeric'
            />
          </View>
        </View>
      );
    }else {
      return (
        <View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Concepto del Servicio"
              onChangeText={this.setNameService}
              style={ style.textName }
            />
          </View>
          <View style={style.price}>
            <Text style={style.textRegular14GrayDarkPrice}>Precio $ </Text>
            <TextInput
              placeholder="0.00"
              onChangeText={this.setPrice}
              style={ style.textBoxPrice }
              keyboardType='numeric'
            />
          </View>
        </View>
      );
    }
  }

  render() {
    return(
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
            { this.renderNewItems() }
          </View>

          <View style={style.positionFinalButton}>
            <Button
              title={<Text>GUARDAR {this.state.isProduct ? 'PRODUCTO' : 'SERVICIO'}</Text>}
              onPress={ this.saveProduct }
              buttonStyle={ style.buttonSave }
              titleStyle={ style.textSemiBold14White }
            />
          </View>

      </View>
      </ScrollView>
    )
  }

}

export default withNavigation(NewItem);
