import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ScrollView } from 'react-native-gesture-handler';
import { showMessage } from "react-native-flash-message";
import { Button } from "react-native-elements";
import { LineChart } from 'react-native-chart-kit';
import LinearGradient from 'react-native-linear-gradient';
import IconOne from 'react-native-vector-icons/AntDesign';
import IconTwo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';
import { messageOptions } from '../../utils/messagesNotifications';
import { dataChart, dataConfig } from '../../constants/lineChart';
import { GRADIANTBLUE2, COLORS } from '../../constants/colors';
import style from './style';

class Home extends React.Component {

  constructor(props) {
    super(props);
    const { user } = this.props
    this.state = {
      name: user.name,
    }
  }

  customerListNavigate = () => this.props.navigation.navigate('CustomerList');
  itemListNavigate = () => this.props.navigation.navigate('ItemList');
  newInvoiceNavigate = () => this.props.navigation.navigate('Invoice');
  handleSignOut = () => {
    const { signOut } = this.props;
    signOut()
      .then(() => {
        this.props.navigation.navigate('Authentication');
      })
      .catch((err) => {
        alert('Error al Cerrar Sesión ' + err)
      })
  }

  render() {
    return(
      <KeyboardAwareScrollView>
        <LinearGradient
          colors={ GRADIANTBLUE2 }
          start={{x: 0.0, y: 1.0}} 
          end={{x: 1.0, y: 1.0}}
          style={style.container}
        >
          <View style={style.containerHeader}>

            <View style={style.inLine}>
              <Button
                icon={<Icon name="menu" size={25} color="white" />}
                buttonStyle={style.buttonHeader}
                onPress={() => showMessage(messageOptions)}
              />
              <Text style={[style.textLight18White,{marginLeft:12}]}>
                { this.state.name }
              </Text>
            </View>

            <View style={style.textFacPeriodo}>
              <Text style={style.textLight12BlueLight}>
                <IconTwo name="area-graph"/> Facturación del Período
              </Text>
            </View>

            <LineChart
              height={190}
              width={Dimensions.get('window').width-10}
              style={style.styleChart}
              data={dataChart}
              chartConfig={dataConfig}
            />  
          </View>
          
          <View style={style.containerStatictis}>
            <View style={style.inLineSpaceAround}>
              <AnimatedCircularProgress
                size={145}
                width={12}
                fill={80}
                rotation={0}
                tintColor={COLORS.blueLight}
                backgroundColor={COLORS.white}
                lineCap={"round"}
                style={style.circlePercentaje}>
                {(fill) => (
                  <View style={style.inColumn}>
                    <Text style={style.textLight16White}>
                      0{ fill/10 }/12 
                    </Text>
                    <Text style={style.textLight12BlueLight}>
                      Cobros Pendientes
                    </Text>
                  </View>
                )}
              </AnimatedCircularProgress>

              <AnimatedCircularProgress
                size={145}
                width={12}
                fill={20}
                rotation={0}
                tintColor={COLORS.blueLight}
                backgroundColor={COLORS.white}
                lineCap={"round"}
                style={style.circlePercentaje}>
                {(fill) => (
                  <View style={style.inColumn}>
                    <Text style={style.textLight16White}>
                      { fill }/250 Mil 
                    </Text>
                    <Text style={style.textLight12BlueLight}>
                      Total del Período
                    </Text>
                  </View>
                )}
              </AnimatedCircularProgress>
            </View>
          </View>

          <View style={style.containerListCustomer}>

            <Text style={[style.textRegular16White,{marginBottom: 4, marginLeft: 15}]}>
              Clientes Recientes
            </Text>  
            <View style={style.lineBlueLightTop}></View>
            <ScrollView style={style.scrollCustomers}>
              
              <View style={[style.inLineSpaceBetween,{marginVertical: 3}]}>
                <Text style={style.textLight14White}>Fulano Automotores & Hnos</Text>
                <Button
                  icon={<IconOne name="filetext1" size={15} style={{opacity: 0.7}} color={COLORS.blueLight}/>}
                  title='Ver Factura '
                  iconRight
                  buttonStyle={style.buttonViewInvoice}
                  titleStyle={style.textRegular12BlueLight}
                />
              </View>

              <View style={style.lineBlueLight}></View>
                
              <View style={[style.inLineSpaceBetween,{marginVertical: 3}]}>
                <Text style={style.textLight14White}>Estudio Jurídico Juniors</Text>
                <Button
                  icon={<IconOne name="filetext1" size={15} style={{opacity: 0.7}} color={COLORS.blueLight}/>}
                  title='Ver Factura '
                  iconRight
                  buttonStyle={style.buttonViewInvoice}
                  titleStyle={style.textRegular12BlueLight}
                />
              </View>

              <View style={style.lineBlueLight}></View>

              <View style={[style.inLineSpaceBetween,{marginVertical: 3}]}>
                <Text style={style.textLight14White}>Pedro Rodriguez</Text>
                <Button
                  icon={<IconOne name="filetext1" size={15} style={{opacity: 0.7}} color={COLORS.blueLight}/>}
                  title='Ver Factura '
                  iconRight
                  buttonStyle={style.buttonViewInvoice}
                  titleStyle={style.textRegular12BlueLight}
                />
              </View>
              <View style={style.lineBlueLight}></View>
            </ScrollView>
              
          </View>

          <View style={style.containerFooter}>

            <View style={style.inLineCenter}>
              <Button
                onPress={ this.customerListNavigate }
                icon={<IconOne name="user" size={23} color="white"/>}
                buttonStyle={style.buttonFooter}
                titleStyle={style.textRegular14White}
              />
              <Button
                onPress={ this.newInvoiceNavigate }
                icon={<IconOne name="file1" size={23} color="white"/>}
                buttonStyle={style.buttonFooter}
                titleStyle={style.textRegular14White}
              />
              <Button
                onPress={ this.itemListNavigate }
                icon={<Icon name="shopping-cart" size={23} color="white"/>}
                buttonStyle={style.buttonFooter}
                titleStyle={style.textRegular14White}
              />
              <Button
                icon={<IconOne name="poweroff" size={23} color="white" />}
                onPress={this.handleSignOut}
                buttonStyle={style.buttonFooter}
              />
            </View>

          </View>
        </LinearGradient>
      </KeyboardAwareScrollView>
    )
  }
}

export default Home;
