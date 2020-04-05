import React from 'react';
import ListRecentCustomer from './ListRecentCustomer';
import { View, Modal, Text, Picker,Dimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { LineChart } from 'react-native-chart-kit';
import { Icon } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { messageInfoChart, messageCobros, messageTotalPeriod } from '../../utils/messagesNotifications';
import { dataConfig, presentDataDay, presentDataMonth, presentDataYear, DMY } from '../../constants/lineChart';
import { COLORS } from '../../constants/colors';
import { limitBilling } from '../../utils/invoice'
import style from './style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IconInvoice } from '../../constants/icons';
import ModalBilling from './ModalBilling';
import NotifService from '../../notifications/NotifService';

class Home extends React.Component {

  constructor(props) {
    super(props);
    const { user } = this.props
    this.state = {
      name: user.name,
      itemInputSearch: '',
      loading: true,
      chart: 'day',
      modalVisible: false,
      renderRecentInvoices: false,
      invoices: this.props.invoices,
      registerToken: null
    }
    this.notif = new NotifService(this.onRegister.bind(this));
  }

  onRegister(token) {
    console.log('Token Device:',token);
    this.setState({ registerToken: token.token});
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

  calculateTotalInvoice = () => {
    const filterInvoices = this.props.invoices.filter(invoice => invoice.attributes.state === 'processed');
    let total = 0;
    for(let i of filterInvoices) total+= parseInt(i.attributes.total);
    return total;
  }

  componentWillMount(){
    this.props.listInvoice()
      .then(() => this.setState({loading: false}))
  }

  componentDidMount() {
    console.log(this.props.user);
    const { navigation } = this.props;
    navigation.setParams({ toggleDrawer: this.toggleDrawer });
  }

  /*componentDidUpdate() {
    //Si no existe el Token Device, guardarlo.
    if (this.state.registerToken != null && this.props.user.token_device === null) {
      //this.notif.localNotif('Bienvenida')
      this.props.setTokenDevice(this.state.registerToken); 
    }
  }*/

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
    const {invoices} = this.props;
    return (
      <ListRecentCustomer
        invoices={invoices}
      />
    );
  }

  showDataChart = () => {
    if (this.state.chart == 'month'){
      const data = presentDataMonth(new Date(), this.props.invoices); 
      return data;
    } else if (this.state.chart == 'day') {
      const dataM = presentDataDay(new Date(), this.props.invoices);
      return dataM
    } else {
      const dataY = presentDataYear(new Date(), this.props.invoices);
      return dataY
    }
  }

  setModalVisible = value => {this.setState({modalVisible: value})} 

  render() {
    const total = this.calculateTotalInvoice();
    const category = this.props.user.clase.slice(0,1)
    const limit = limitBilling(category);
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
            <TouchableOpacity activeOpacity={0.7}>
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
        
        <View style={style.containerProgressBar}>
          <View style={style.boxProgress}>
            <Text style={style.textRegular16GrayDark}>
              Total Facturado del Período
            </Text>
            <Progress.Bar 
              progress={total/limit} 
              width={300} 
              height={35}
              unfilledColor={COLORS.grayLight}
              color={COLORS.blueLight}
              borderWidth={1} 
              borderColor={COLORS.blue} 
              borderRadius={7}
              style={{marginVertical: 5}}
            />
            <View style={style.inLineSpaceAround}>
              <Text style={style.textRegular20Blue}>
                ${total} / ${limit} 
              </Text>
            </View>
            <View style={style.inLineSpaceAround}>
              <Text style={style.textRegular12GrayDark}>
                Total Facturado / Límite de Facturación
              </Text>
            </View>
          </View>
          
        </View>
          
          <View style={style.containerStatics}>
            <Button
              title=' Ver Detalles de Facturación'
              icon={<IconInvoice size={20} color={COLORS.blueLight}/>}
              TouchableComponent={TouchableOpacity}
              onPress={() => this.setModalVisible(true)}
              buttonStyle={style.buttonPeriod}
              titleStyle={ style.textRegular14White }
            />
          </View>

          <View style={style.containerButtonNewCbte}>
            <Button
              title='Nuevo Comprobante'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.props.navigation.navigate('Invoice') }
              buttonStyle={style.buttonAll}
              titleStyle={ style.textBold14White }
            />
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
          >
            <ModalBilling 
              setModalVisible={this.setModalVisible}
              invoices={this.props.invoices}
            />
          </Modal>
          
        </View>
    )
  }
}

export default Home;