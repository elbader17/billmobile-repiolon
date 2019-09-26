import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { GRADIANTBLUE, GRADIANTBLUE2, COLORS, COLORGB, COLORGB2 } from '../../../constants/colors';
import { orderByName } from '../../../utils/functions';
import style from '../style';

const KEYS_TO_FILTERS = ['attributes.name', 'attributes.price'];

class ItemList extends React.Component {
  constructor(props){
    super(props);
    //this.props.getItemList();
    this.state = {
      //items: this.props.items,
      isProduct: true,
      loading: false
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: (
        <SearchInput 
          onChangeText={(term) => { navigation.setParams({text: term}) }} 
          placeholder="Buscar items"
          placeholderTextColor={COLORS.grayLight}
          style={style.search}
        />
      ),
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
      headerLeft: ( 
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
          <Icon name="left" size={20} color="white" style={{marginLeft:20}}/>
        </TouchableOpacity>
      ),
      headerRight: (
        <Icon name="search1" size={20} color={COLORS.grayLight} style={{marginRight:35}}/>
      )
    }  
  };

  componentWillMount() {
    this.props.getItemList()
      .then(()=> {this.setState({loading: true})})
  }

  navigateToNewItem = (isProduct) => {
    this.props.navigation.navigate('NewItem', { isProduct });
  }
  navigateToHome = () => {
    this.props.navigation.navigate('Home');
  }
  navigateToEditItem = (item) => {
    this.props.navigation.navigate('EditItem', { item });
  }

  renderLoading = () => {
    return (
      <View style={style.center}>
        <ActivityIndicator size="large" color={COLORS.blueMedium} style={{paddingBottom: 15}}/>
        <Text style={style.textRegular16Blue} >Cargando</Text>
      </View>
    );
  }

  renderItems = () => {
    const category = this.state.isProduct ? 'product' : 'service';
    const items = this.props.items.slice().sort(orderByName);
    const filteredItems = items.filter(
      createFilter(this.props.navigation.getParam('text', ''), KEYS_TO_FILTERS)
    );
    return filteredItems
      .filter(item => item.attributes.category === category)
      .map((item) => {
        return (
          <View style={style.boxInfoItems} key={item.id}>
            <View style={style.inLineSpaceBetween} >
              <View>
                <Text style={style.textRegular14GrayDark}>
                  {item.attributes.name}
                </Text>
                <Text style={style.textRegular14Blue}>
                  $ {item.attributes.price}
                </Text>
              </View>
              <View style={style.inLine}>
                <Button
                  title='Editar'
                  onPress={() => this.navigateToEditItem(item) }
                  buttonStyle={ style.buttonEditBlue }
                  titleStyle={ style.textButtonEdit }
                />
                <Button
                  icon={ <Icon name="delete" size={20} color={COLORS.blueMedium}/>}
                  //onPress={() => this.navigateToEditCustomer(customer) }
                  buttonStyle={ style.buttonDelete }
                  titleStyle={ style.textDelete }
                />
              </View>
            </View>
          </View>
        );
      });
  }

  renderSwtichButtons() {
    return (
      <View style={[style.boxSelectButton, style.inLineSpaceAround]}>
        <Button
          title='Productos'
          onPress={() => this.setState({isProduct: true}) }
          buttonStyle={ style.buttonSelect }
          titleStyle={ style.textRegular16White }
          ViewComponent={LinearGradient}
          linearGradientProps={this.state.isProduct ? COLORGB : COLORGB2}
        />
        <Button
          title='Servicios'
          onPress={() => this.setState({isProduct: false}) }
          buttonStyle={ style.buttonSelect }
          titleStyle={ style.textRegular16White }
          ViewComponent={LinearGradient}
          linearGradientProps={this.state.isProduct ? COLORGB2 : COLORGB}
        />
      </View>
    );
  }

  render() {
    return(
      <KeyboardAwareScrollView>
        <View style={style.container}>
          
          <View style={style.containerBody}>
            {this.renderSwtichButtons()}
            <View style={style.boxItems}>
              <ScrollView>
                {this.state.loading ? this.renderItems() : this.renderLoading()}
              </ScrollView>
            </View>
          </View>
          
          <View style={style.containerFooter}>
            <View style={style.inLineSpaceAround}>
              <Button
                title=' Añadir Nuevo'
                onPress={() => this.navigateToNewItem(this.state.isProduct) }
                icon={<Icon name="plus" size={18} color="white"/>}
                buttonStyle={ style.buttonNew }
                titleStyle={ style.textRegular16White }
                ViewComponent={LinearGradient}
                linearGradientProps={COLORGB2}
              />
              <Button
                onPress={ this.navigateToHome }
                icon={<Icon name="check" size={25} color="white"/>}
                buttonStyle={ style.buttonReady }
                titleStyle={ style.textRegular16White }
                ViewComponent={LinearGradient}
                linearGradientProps={COLORGB2}
              /> 
            </View>
          </View>

        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default withNavigation(ItemList);