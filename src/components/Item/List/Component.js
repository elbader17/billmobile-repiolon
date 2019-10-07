import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import ListItems from './ListItems';
import { GRADIANTBLUE2, COLORS, COLORGB, COLORGB2 } from '../../../constants/colors';
import { orderByName } from '../../../utils/functions';
import style from '../style';

const KEYS_TO_FILTERS = ['attributes.name', 'attributes.price']; //Attributes shown in the search item

class ItemList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isProduct: true,
      loading: true, //loading items list
      loadingDelete: false, //for button item delete
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
        <TouchableOpacity onPress={()=> {
          if (navigation.state.params.type === 'collection') navigation.navigate('Home');
          else navigation.navigate('Invoice');
        }}>
          <Icon name="left" size={20} color="white" style={{marginLeft:20}}/>
        </TouchableOpacity>
      ),
      headerRight: (
        <Icon name="search1" size={20} color={COLORS.grayLight} style={{marginRight:35}}/>
      )
    }  
  };

  componentWillMount() {
    this.props.navigation.setParams({type: this.props.type}); //Use in Header Left Navigation
  }
  
  componentDidMount() {
    this.props.getItemList()
      .then(()=> {this.setState({loading: false})})
  }

  navigateToNewItem = (isProduct) => {
    if (this.props.type === 'collection')
      this.props.navigation.navigate('NewItem', { isProduct });
    else this.props.navigation.navigate('NewInvoiceItem', { isProduct });
  }
  navigateToHome = () => {
    if (this.props.type === 'collection')
      this.props.navigation.navigate('Home');
    else this.props.navigation.navigate('Invoice');
  }
  navigateToEditItem = (item) => {
    this.props.navigation.navigate('EditItem', { item });
  }

  actionItem = (item) => {
    const isInvoice = this.props.type === 'invoice'
    const title = isInvoice ? 'Añadir ' : 'Eliminar ';
    Alert.alert(
      title + item.attributes.name,'¿Está Seguro?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Delete Item'),
          style: 'cancel',
        },
        {text: title, onPress: () => {
          this.setState({loadingDelete: true, itemDelete: item.id})
          const { actionItem, navigation } = this.props;
          actionItem(item, navigation)
            .then(() => {
              if(this.props.type === 'collection')
                this.props.getItemList().then(()=> this.setState({loadingDelete: false}));
              else navigation.navigate('Invoice');
            })
        }},
      ],
      {cancelable: false},
    );
    
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
    return (
      <ListItems
        type={this.props.type}
        items={filteredItems}
        loadingDelete={this.state.loadingDelete}
        itemDelete={this.state.itemDelete}
        category={category}
        navigateToEditItem={this.navigateToEditItem}
        actionItem={this.actionItem}
      />
    );
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
                {this.state.loading ? this.renderLoading() : this.renderItems()}
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