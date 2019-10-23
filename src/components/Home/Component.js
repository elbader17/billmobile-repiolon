import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Button } from "react-native-elements";
import { LineChart } from 'react-native-chart-kit';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
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

  render() {
    const iconInvoice = <Icon type='antdesign' name="filetext1" size={12} style={{opacity: 0.7}} color={COLORS.blueLight}/>
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
                <Icon type='entypo' name="area-graph" color={COLORS.blueLight} size={15} iconStyle={{marginRight: 3}}/>
                <Text style={style.textLight12White}>
                  Facturación del Período
                </Text>
              </View>
            </View>

            <LineChart
              height={190}
              width={Dimensions.get('window').width-25}
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
                    <Text style={style.textLight18White}>
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
                    <Text style={style.textLight18White}>
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

            <View style={style.inLine}>
              <View style={style.lineWhiteLeft}></View>
              <Text style={[style.textRegular16White,{marginHorizontal: 7}]}>
                Clientes Recientes
              </Text>  
              <View style={style.lineWhiteRight}></View>
            </View>
            
            <ScrollView style={style.scrollCustomers}>
              
              <View style={[style.inLineSpaceBetween,{marginVertical: 3}]}>
                <Text style={style.textRegular14White}>Fulano Automotores & Hnos</Text>
                <Button
                  icon={iconInvoice}
                  title='Ver Factura '
                  iconRight
                  buttonStyle={style.buttonViewInvoice}
                  titleStyle={style.textLight12BlueLight}
                />
              </View>

              <View style={style.lineBlueLight}></View>
                
              <View style={[style.inLineSpaceBetween,{marginVertical: 3}]}>
                <Text style={style.textRegular14White}>Estudio Jurídico Juniors</Text>
                <Button
                  icon={iconInvoice}
                  title='Ver Factura '
                  iconRight
                  buttonStyle={style.buttonViewInvoice}
                  titleStyle={style.textLight12BlueLight}
                />
              </View>

              <View style={style.lineBlueLight}></View>

              <View style={[style.inLineSpaceBetween,{marginVertical: 3}]}>
                <Text style={style.textRegular14White}>Pedro Rodriguez</Text>
                <Button
                  icon={iconInvoice}
                  title='Ver Factura '
                  iconRight
                  buttonStyle={style.buttonViewInvoice}
                  titleStyle={style.textLight12BlueLight}
                />
              </View>
              <View style={style.lineBlueLight}></View>
            </ScrollView>
              
          </View>
      
        </LinearGradient>
    )
  }
}

export default Home;