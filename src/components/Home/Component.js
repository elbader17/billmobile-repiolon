import React from 'react';
import ListRecentCustomer from './ListRecentCustomer';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { BarChart } from 'react-native-chart-kit';
import { Icon } from 'react-native-elements';
import { messageInfoChart, messageCobros, messageTotalPeriod } from '../../utils/messagesNotifications';
import { dataChart, dataConfig } from '../../constants/lineChart';
import { COLORS } from '../../constants/colors';
import style from './style';

class Home extends React.Component {

  constructor(props) {
    super(props);
    const { user } = this.props
    this.state = {
      name: user.name,
      itemInputSearch: '',
      loading: true
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

  componentWillMount(){
    this.props.listInvoice()
      .then(() => (
        this.props.getCustomerList()
          .then(() => this.setState({loading: false}))
        )
      )
  }

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
      <ActivityIndicator size="large" color={COLORS.blue} style={{marginTop: 25}}/>
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
                    <Text style={style.textLight22Blue}>
                      08/12 
                    </Text>
                    <Text style={style.textLight14White}>
                      Cobros Pendientes
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={this.infoTotalPeriod} activeOpacity={0.7}>
                <View style={style.boxData}>
                  <View style={style.inColumn}>
                    <Text style={style.textLight22Blue}>
                      20/250 Mil
                    </Text>
                    <Text style={style.textLight14White}>
                      Total del Período
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.containerListCustomer}>
            <View style={style.scrollCustomers}>              
              
              <View style={style.inLineCenter}>
              
                <Text style={style.textRegular12Blue}>  Clientes Recientes  </Text>
              
              </View>
              
              <ScrollView style={style.listCustomers}> 
                {this.state.loading ? this.renderLoading() : this.renderRecentCustomers()}
              </ScrollView>

              <Button
                title='Ver todos'
                TouchableComponent={TouchableOpacity}
                onPress={ null }
                buttonStyle={style.buttonAll}  
                titleStyle={ style.textRegular14White }
                />

            </View>
              
          </View>
        </View>
    )
  }
}

export default Home;