import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { LineChart } from 'react-native-chart-kit';
import { Icon } from 'react-native-elements';
import { IconCustomer, IconRight } from '../../constants/icons';
import { messageInfoChart, messageCobros, messageTotalPeriod } from '../../utils/messagesNotifications';
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

  static navigationOptions = ({ navigation }) => ({
    title: 'Bill Mobile',
    headerTransparent: true,
    headerStyle: { elevation: 0 },
    headerTitleStyle: style.headerText,
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon type='feather' name='menu' size={30} color={COLORS.blueLight} iconStyle={{marginLeft: 10}}/>
      </TouchableOpacity>
    ),
    headerRight: (
      <Image source={require('../../images/Bill.png')} style={{width: 45, height: 45}}/>
    ),
  });

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ toggleDrawer: this.toggleDrawer });
  }

  toggleDrawer = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };

  customerListNavigate = () => this.props.navigation.navigate('CustomerList');
  itemListNavigate = () => this.props.navigation.navigate('ItemList');
  newInvoiceNavigate = () => this.props.navigation.navigate('Invoice');

  infoChart = () => showMessage(messageInfoChart);
  infoPendingCharges = () => showMessage(messageCobros);
  infoTotalPeriod = () => showMessage(messageTotalPeriod);

  render() {
    return(
        <LinearGradient
          colors={ GRADIANTBLUE2 }
          start={{x: 1.0, y: 1.0}} 
          end={{x: 1.0, y: 0.0}}
          style={style.container}
        >
          <View style={style.containerHeader}>

            <View style={style.textFacPeriodo}>
              <View style={style.inLine}>
                <Icon type='entypo' name="area-graph" color={COLORS.blueLight} size={15} iconStyle={{marginRight: 4}}/>
                <Text style={style.textLight14White}>
                  Facturación del Período
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={this.infoChart} activeOpacity={0.7}>
              <LineChart
                height={190}
                width={Dimensions.get('window').width}
                style={style.styleChart}
                data={dataChart}
                chartConfig={dataConfig}
                yAxisLabel={'K $'}
                bezier
              />
            </TouchableOpacity>

          </View>
                
          <View style={style.containerStatictis}>
            <View style={style.inLineSpaceAround}>
              <TouchableOpacity onPress={this.infoPendingCharges} activeOpacity={0.7}>
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
                      <Text style={style.textLight18White}>
                        0{ fill/10 }/12 
                      </Text>
                      <Text style={style.textLight12BlueLight}>
                        Cobros Pendientes
                      </Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={this.infoTotalPeriod} activeOpacity={0.7}>
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
                      <Text style={style.textLight18White}>
                        { fill }/250 Mil 
                      </Text>
                      <Text style={style.textLight12BlueLight}>
                        Total del Período
                      </Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.containerListCustomer}>
            <View style={[style.inLine,{marginLeft: 10}]}>
              <IconCustomer size={17} color={COLORS.blueLight} iconStyle={{marginRight: 4}}/>
              <Text style={style.textLight14White}>Clientes Recientes</Text>
            </View>
            <View style={style.scrollCustomers}>
              
              <View>
                <View style={style.inLineSpaceBetween}>
                  <Text style={style.textLight16White}> 
                    Armando Construcciones 
                  </Text>
                  <Button
                    title='Comprobante'
                    icon={IconRight}
                    iconRight={true}
                    buttonStyle={style.buttonViewInvoice}
                    titleStyle={style.textLight16BlueLight}
                  />
                </View>
              </View>

              <View>
                <View style={style.inLineSpaceBetween}>
                  <Text style={style.textLight16White}> 
                    Ferretería Monsegur SRL
                  </Text>
                  <Button
                    title='Comprobante'
                    icon={IconRight}
                    iconRight={true}
                    buttonStyle={style.buttonViewInvoice}
                    titleStyle={style.textLight16BlueLight}
                  />
                </View>
              </View>

              <View>
                <View style={style.inLineSpaceBetween}>
                  <Text style={style.textLight16White}> 
                    Martin Daniotti 
                  </Text>
                  <Button
                    title='Comprobante'
                    icon={IconRight}
                    iconRight={true}
                    buttonStyle={style.buttonViewInvoice}
                    titleStyle={style.textLight16BlueLight}
                  />
                </View>
              </View>

            </View>
              
          </View>
        </LinearGradient>
    )
  }
}

export default Home;