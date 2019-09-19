import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button} from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { GRADIANTBLUE, GRADIANTBLUE2 } from '../../../constants/colors';
import { orderByName } from '../../../utils/functions';
import style from '../style';

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
        <View style={style.boxInfoCustomer}>
        <View style={style.inLineSpaceBetween} key={customer.id}>
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
        </View>
       );
    });
  }

  render() {
    return(
      <KeyboardAwareScrollView>
      <View style={style.container}>
        
        <View style={style.containerBody}>
          <View style={style.boxCustomer}>
            <ScrollView> 
              {this.state.loading ? this.renderCustomers() : this.renderLoading()}
            </ScrollView>
          </View>
        </View>

        <View style={style.containerFooter}>

          <View style={style.inLineSpaceAround}>    
            <TouchableOpacity 
              onPress={ this.navigateToNewCustomer }>
              <LinearGradient 
                colors={GRADIANTBLUE2}
                style={style.buttonNew}  
                start={{x: 0, y: 1}} 
                end={{x: 1, y: 0.9}}
              >
                <Text style={style.textRegular16White}>
                  <Icon name="plus" size={18} color="white"/> Nuevo Cliente
                </Text>     
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={ this.navigateToHome }>
              <LinearGradient 
                colors={GRADIANTBLUE2}
                style={style.buttonReady}  
                start={{x: 0, y: 1}} 
                end={{x: 1, y: 0.9}}
              >
                <Text>
                  <Icon name="check" size={25} color="white"/>
                </Text>     
              </LinearGradient>
            </TouchableOpacity>
          </View>

        </View>
      
      </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default CustomerList;