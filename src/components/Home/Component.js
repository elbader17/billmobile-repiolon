import React from 'react';
import ListRecentCustomer from './ListRecentCustomer';
import { View, Text, Picker,Dimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { LineChart } from 'react-native-chart-kit';
import { Icon } from 'react-native-elements';
import { messageInfoChart, messageCobros, messageTotalPeriod } from '../../utils/messagesNotifications';
import { dataConfig, presentDataDay, presentDataMonth, presentDataYear, DMY } from '../../constants/lineChart';
import { COLORS } from '../../constants/colors';
import style from './style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IconCaretRight, MoreInfo } from '../../constants/icons';

class Home extends React.Component {

  constructor(props) {
    super(props);
    const { user } = this.props
    this.state = {
      name: user.name,
      itemInputSearch: '',
      loading: true,
      chart: 'day',
      renderRecentInvoices: false
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Bill Mobile',
    headerStyle: {backgroundColor: COLORS.blue},
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

  renderLoading = () => (
      <ActivityIndicator size="large" color={COLORS.gray} style={{marginTop: 30}}/>
  );

  renderRecentCustomers = () => {
    const customersInvoices = this.props.invoices;
    return (
      <ListRecentCustomer
        invoices={customersInvoices}
        customers={this.props.customers}
      />
    );
  }

  loadInvoices = () => {
    this.setState({renderRecentInvoices: true})
    this.props.listInvoice()
      .then(() => this.setState({loading: false}))
  }

  showDataChart = () => {
    const invoicess = this.props.invoices;
    if (this.state.chart == 'month'){
      const data = presentDataMonth(new Date(), invoicess); 
      return data;
    } else if (this.state.chart == 'day') {
      const dataM = presentDataDay(new Date(), invoicess);
      return dataM
    } else {
      const dataY = presentDataYear(new Date(), invoicess);
      return dataY
    }
  }

  render() {
    const displayButtonRecentInvoices = this.state.renderRecentInvoices ? 'none' : 'flex'
    return(
        <View style={style.container}>

        <View style={style.containerHeader}>
          <View style={style.textFacPeriodo}>
            <View style={style.inLine}>
              <Icon type='feather' name="bar-chart" color={COLORS.blueLight} size={18} iconStyle={{marginLeft: 15, marginRight: 5}}/>
            <Text style={style.textRegular12White}>
              Facturación del Período : 
            </Text>
            <View style={style.selectDMY}>
              <Picker
                selectedValue={this.state.chart}
                style= {style.picker}
                onValueChange={value => this.setState({chart: value}) }>
                  { DMY.map((i, index) => (
                     <Picker.Item 
                      key={index}
                      color='gray' 
                      label={i.label} 
                      value={i.value}/>                           
                  ))}
              </Picker>
            </View>
            </View>
          </View>
          <View style={style.containerChart}>
            <TouchableOpacity onPress={this.infoChart} activeOpacity={0.7}>
            <View>
              <LineChart
                height={hp('30%')}
                width={Dimensions.get('window').width-20}
                style={style.styleChart}
                data={this.showDataChart()}
                chartConfig={dataConfig}
                yAxisLabel={'$'}
                bezier
              />
            </View>
            </TouchableOpacity>
          </View> 

        </View>

          <View style={style.containerStatics}>
            <TouchableOpacity onPress={this.infoPendingCharges} activeOpacity={0.7}>
              <View style={style.boxData}>
                <View style={style.inLineSpaceAround}>
                  <Text style={style.textRegular22BlueMedium}>
                    20/250 Mil 
                  </Text>
                  {IconCaretRight}
                  <Text style={style.textLight14White}>
                    Total del Período
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={style.containerListCustomer}>
            <View style={style.scrollCustomers}>              
              
              <View style={[style.inLine, {marginBottom: 5}]}>
                <Icon type='feather' name="file-text" color={COLORS.blueLight} size={13} iconStyle={{marginRight: 3}}/>
                <Text style={style.textRegular12Blue}>
                  Comprobantes Recientes
                </Text>
              </View>
              

              <ScrollView style={style.listCustomers}> 
                <Button
                  title='Cargar Comprobantes'
                  TouchableComponent={TouchableOpacity}
                  onPress={ this.loadInvoices }
                  buttonStyle={[style.buttonLoad,{display: displayButtonRecentInvoices}]}
                  titleStyle={style.textRegular14White }
                />
                <View style={{display: this.state.renderRecentInvoices ? 'flex' :'none'}}>
                  {this.state.loading ? this.renderLoading() : this.renderRecentCustomers()}
                </View>
              </ScrollView>

              <Button
                title='Nuevo Comprobante'
                TouchableComponent={TouchableOpacity}
                onPress={ () => this.props.navigation.navigate('Invoice') }
                buttonStyle={style.buttonAll}
                //disabled={this.props.invoices.length === 0}  
                titleStyle={ style.textBold14White }
                //disabledTitleStyle={ style.textBold14White }
              />

            </View>
          </View>
          
        </View>
    )
  }
}

export default Home;