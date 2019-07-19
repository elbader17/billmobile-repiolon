import React from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from "react-native-elements";
import style from './style';
import  { validateCuit } from '../../../utils/identity';
import { METRICS } from '../../../constants/metrics';
import { renderMessageName, renderMessageCuit } from '../../../utils/showMessage';

class TaxConfiguration extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      cuit: this.props.cuit,
      onInputName: false,
      onInputCuit: false,
      loading: false,
    };
  }

  handleConfigFiscal = () => {
    const { name, cuit } = this.state;
    const { updateFiscalIdentity } = this.props;
    this.setLoading(true);
    updateFiscalIdentity(name, cuit)
     .then((data) => {
      this.props.navigation.navigate('Home');
    })
  }

  validateData = () => {
    return validateCuit(this.state.cuit);
  }
  setName = (value) => this.setState({ name: value})
  setCuit = (value) => this.setState({ cuit: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    return(
    <KeyboardAvoidingView
      behavior={'padding'}
      style={{flex: 1}}
      keyboardVerticalOffset={METRICS.heightHeader}>
    <ScrollView>
      <View style={style.container}>
        <View style={ style.textBoxBtnHolder }>
          <View style={style.boxName}>
            <Text style={[style.textRegular16GrayDark,style.paddingVertical5]}>
              NOMBRE DE LA EMPRESA
            </Text>
            <TextInput style={ style.textRegular14DarkGray }
              onChangeText={this.setName}
              onFocus = {() => this.setState({onInputName: true})}
              onEndEditing={() => this.setState({onInputName: false})}
              style={ style.textBox }
              value={this.state.name}
            />
            {renderMessageName(this.state.onInputName)}
          </View>
          <View style={style.lineGray}></View>
          <View style={style.boxCuit}>
            <Text style={[style.textRegular16GrayDark,style.paddingVertical5]}>
              INGRESA TU CUIT
            </Text>
            <TextInput style={ style.textRegular14DarkGray }
              onChangeText={this.setCuit}
              onFocus={() => this.setState({onInputCuit: true})}
              onEndEditing={() => this.setState({onInputCuit: false})}
              style={ style.textBox }
              value={this.state.cuit}
              keyboardType='numeric'
            />
            {renderMessageCuit(this.state.onInputCuit)}
          </View>
          <View style={style.lineGray}></View>
        </View>
      </View>
      </ScrollView>
      <Button
        title="LISTO"
        testID='ready'
        onPress={ this.handleConfigFiscal }
        buttonStyle={ style.submitReady }
        titleStyle={ style.textRegular14WhiteBold }
        disabledTitleStyle={ style.textRegular14WhiteBold }
        disabledStyle={ style.submitDisabled }
        disabled={!this.validateData() }
        loading={this.state.loading}
      />
      </KeyboardAvoidingView>
    )
  }
}

export default TaxConfiguration;
