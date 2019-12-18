import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { BarChart } from 'react-native-chart-kit';
import { Icon } from 'react-native-elements';
import { IconCustomer, IconRight } from '../../constants/icons';
import { messageInfoChart, messageCobros, messageTotalPeriod } from '../../utils/messagesNotifications';
import { dataChart, dataConfig } from '../../constants/lineChart';
import { GRADIANTBLUE2, COLORS, GRADIANTBLUE3 } from '../../constants/colors';
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
    headerStyle: { backgroundColor: COLORS.blue, elevation: 0 },
    headerTitleStyle: style.headerText,
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon type='feather' name='menu' size={25} color={COLORS.blueLight} iconStyle={{marginLeft: 10}}/>
      </TouchableOpacity>
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
        <View style={style.container}>

        <View style={style.containerHeader}>
          <View style={style.textFacPeriodo}>
              <View style={style.inLine}>
                <Icon type='feather' name="bar-chart" color={COLORS.blueLight} size={12} iconStyle={{marginRight: 2}}/>
                <Text style={style.textLight12White}>
                  Facturación del Período
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={this.infoChart} activeOpacity={0.7}>
            <BarChart
                height={190}
                width={Dimensions.get('window').width-10}
                style={style.styleChart}
                data={dataChart}
                chartConfig={dataConfig}
                yAxisLabel={'$ '}
                bezier
              />
            </TouchableOpacity>

          </View>
                
          <View style={style.containerStatictis}>
            <View style={style.inLineSpaceAround}>
              <TouchableOpacity onPress={this.infoPendingCharges} activeOpacity={0.7}>
                <View style={style.boxData}>
                  <View style={style.inColumn}>
                    <Text style={style.textLight22Gray}>
                      08/12 
                    </Text>
                    <Text style={style.textRegular14Blue}>
                      Cobros Pendientes
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={this.infoTotalPeriod} activeOpacity={0.7}>
                <View style={style.boxData}>
                  <View style={style.inColumn}>
                    <Text style={style.textLight22Gray}>
                      20/250 Mil
                    </Text>
                    <Text style={style.textRegular14Blue}>
                      Total del Período
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.containerListCustomer}>
            <View style={[style.inLine,{justifyContent: 'center'}]}>
              <IconCustomer size={15} color={COLORS.blue} iconStyle={{marginRight: 4}}/>
              <Text style={style.textRegular12Blue}>Clientes Recientes</Text>
            </View>
            <View style={style.scrollCustomers}>
              
              <View>
                <View style={style.inLineSpaceBetween}>
                  <Text style={style.textLight14BlueMedium}> 
                    Armando Construcciones 
                  </Text>
                  <Button
                    title='Comprobante'
                    icon={IconRight}
                    iconRight={true}
                    buttonStyle={style.buttonViewInvoice}
                    titleStyle={style.textRegular14Blue}
                  />
                </View>
              </View>

              <View>
                <View style={style.inLineSpaceBetween}>
                  <Text style={style.textLight14BlueMedium}> 
                    Ferretería Monsegur SRL
                  </Text>
                  <Button
                    title='Comprobante'
                    icon={IconRight}
                    iconRight={true}
                    buttonStyle={style.buttonViewInvoice}
                    titleStyle={style.textRegular14Blue}
                  />
                </View>
              </View>

              <View>
                <View style={style.inLineSpaceBetween}>
                  <Text style={style.textLight14BlueMedium}> 
                    Martin Daniotti 
                  </Text>
                  <Button
                    title='Comprobante'
                    icon={IconRight}
                    iconRight={true}
                    buttonStyle={style.buttonViewInvoice}
                    titleStyle={style.textRegular14Blue}
                  />
                </View>
              </View>

              <View style={{flex: 1,justifyContent: "flex-end"}}>
                <Button
                  title='Ver Todos'
                  buttonStyle={style.buttonViewAll}
                  titleStyle={style.textBold14Blue}
                />   
              </View>

            </View>
              
          </View>
        </View>
    )
  }
}

export default Home;