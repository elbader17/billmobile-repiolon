import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import { Button} from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import style from '../style';
import { METRICS } from '../../../constants/metrics';
import { orderByName } from '../../../utils/functions';
import Icon from 'react-native-vector-icons/AntDesign';
import { GRADIANTBLUE, GRADIENTYELLOW, GRADIANTBLUE2 } from '../../../constants/colors';

class CustomerList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false
    };
  }
  
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Clientes',
      headerBackground: (
        <LinearGradient
          colors={ GRADIANTBLUE2 }
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      ),
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <Icon name="left" size={20} color="white" style={{marginLeft:20}}/>
                  </TouchableOpacity> 
    }
  };

  componentWillMount() {
    this.props.getCustomerList()
     .then(()=> {this.setState({loading: true})})
  }

  navigateToNewCustomer = () => this.props.navigation.navigate('NewCustomer');

  navigateToHome = () => this.props.navigation.navigate('Home');

  navigateToEditCustomer = (customer) => {
    this.props.navigation.navigate('EditCustomer', { customer });
  }

  renderLoading = () => {
    return (
      <View style={style.center}>
        <ActivityIndicator size="large" color="gray" style={{paddingBottom: 15}}/>
        <Text style={style.textRegular16GrayDark} >Cargando</Text>
      </View>
    );
  }

  renderCustomers() {
    const customers = this.props.customers.slice().sort(orderByName);
    return customers.map((customer) => {
       return (
        <View style={[style.inLineSpaceBetween, style.boxInfoCustomer]} key={customer.id}>
          <View>
            <Text style={style.textRegular14GrayDark}>
              {customer.attributes.name} 
            </Text>
            <Text style={style.textLight14Blue}>
              {customer.attributes.identification}
            </Text>
          </View>
          <Button
            title='Editar'
            onPress={() => this.navigateToEditCustomer(customer) }
            buttonStyle={ style.buttonEditBlue }
            titleStyle={ style.textButtonEdit }
          />
        </View>
       );
    });
  }

  render() {
    return(
      <KeyboardAvoidingView
          behavior={'padding'}
          style={style.container}
          keyboardVerticalOffset={METRICS.heightHeader}
      >
        <View style={style.containerBody}>
          <View style={style.boxCustomer}>
            <ScrollView > 
              {this.state.loading ? this.renderCustomers() : this.renderLoading()}
            </ScrollView>
          </View>
        </View>

        <View style={style.containerFooter}>

          <View style={style.inLineSpaceAround}>    
            <TouchableOpacity 
              onPress={ this.navigateToNewCustomer }
            >
              <LinearGradient 
                colors={GRADIANTBLUE2}
                style={style.gradientNew}  
                start={{x: 0, y: 1}} 
                end={{x: 1, y: 0.9}}
              >
                <Text style={style.textLight18White}>
                <Icon name="plus" size={18} color="white"/> Nuevo Cliente
                </Text>     
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={ this.navigateToHome }
            >
              <LinearGradient 
                colors={GRADIENTYELLOW}
                style={style.gradientReady}  
                start={{x: 0, y: 1}} 
                end={{x: 1, y: 0.9}}
              >
                <Text style={style.textLight18White}>
                  <Icon name="check" size={25} color="white"/>
                </Text>     
              </LinearGradient>
          
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default CustomerList;