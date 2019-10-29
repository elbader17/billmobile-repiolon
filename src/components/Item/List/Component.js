import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import LoadingIndicator from '../../Loading';
import ListItems from './ListItems';
import { GRADIANTBLUE2, COLORS, COLORGBL, GRADIANTBLUELIGHT } from '../../../constants/colors';
import { IconBack, IconMore } from '../../../constants/icons';
import { XY } from '../../../constants/gradientCoord';
import { orderByName } from '../../../utils/functions';
import style from '../style';

const KEYS_TO_FILTERS = ['attributes.name', 'attributes.price']; //Attributes shown in the search item

class ItemList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isProduct: true,
      loading: true, //Loading items list
      loadingItem: false, //Adding or removing a item
      itemActive: undefined,
      itemInputSearch: ''
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Listado de Items',
      headerTransparent: true,
      headerStyle: { elevation: 0 },
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: (
        <TouchableOpacity onPress={() => {
          const type = navigation.state.params;
          if (type === 'collection') navigation.navigate('Inicio');
          else navigation.navigate('Invoice');
        }}>
          {IconBack}
        </TouchableOpacity>
      )
    }  
  };

  componentWillMount() {
    this.props.navigation.setParams({type: this.props.type}); //Use in Header Left Navigation
  }
  
  componentDidMount() {
    this.props.getItemList()
      .then(() => { this.setState({loading: false}) })
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
    if (this.props.type === 'collection')
      this.props.navigation.navigate('EditItem', { item });
    else this.props.navigation.navigate('EditInvoiceItem', { item });
  }

  actionItem = (item) => {
    const isInvoice = this.props.type === 'invoice'
    const title = isInvoice ? 'Añadir ' : 'Eliminar ';
    Alert.alert(
      title + item.attributes.name,'¿Está Seguro?',
      [
        { //Press Cancel
          onPress: () => console.log('Cancel Delete Item'),
          text: 'Cancelar',
          style: 'cancel',
        },
        { //Press OK
          text: title, onPress: () => {
            this.setState({loadingItem: true, itemActive: item.id})
            const { actionItem, navigation } = this.props;
            actionItem(item, navigation)
              .then(() => {
                if(this.props.type === 'collection')
                  this.props.getItemList().then(()=> this.setState({loadingItem: false}));
                else navigation.navigate('Invoice');
              })
          }//End onPress
        },
      ],
      {cancelable: false},
    );
  }

  renderLoading = () => (<LoadingIndicator/>);

  renderItems = () => {
    const category = this.state.isProduct ? 'product' : 'service';
    const items = this.props.items.slice().sort(orderByName);
    const filteredItems = items.filter(
      createFilter(this.state.itemInputSearch, KEYS_TO_FILTERS)
    );
    return (
      <ListItems
        type={this.props.type}
        items={filteredItems}
        loadingItem={this.state.loadingItem}
        itemActive={this.state.itemActive}
        category={category}
        navigateToEditItem={this.navigateToEditItem}
        actionItem={this.actionItem}
      />
    );
  }

  renderSwtichButtons() {
    return (
      <View style={[style.boxSelectButton, style.inLineSpaceAround]}>
        <TouchableOpacity 
          onPress={() => this.setState({isProduct: true})} 
          activeOpacity={0.8}>
          <LinearGradient
            colors={ this.state.isProduct ? GRADIANTBLUELIGHT : GRADIANTBLUE2 }
            style={ style.buttonSelect }
            start={XY.startH} end={XY.endH}>
            <Text style={style.textRegular14White}>Productos</Text>
          </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.setState({isProduct: false})} activeOpacity={0.8}>
          <LinearGradient
            colors={ this.state.isProduct ? GRADIANTBLUE2 : GRADIANTBLUELIGHT }
            style={ style.buttonSelect }
            start={XY.startH} end={XY.endH}>
            <Text style={style.textRegular14White}>Servicios</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return(
      <LinearGradient
        colors={ GRADIANTBLUE2 }
        style={style.container}
        start={XY.startV}
        end={XY.endV}>

          <View style={style.containerBody}>
            <SearchInput 
              onChangeText={(term) => { this.setState({itemInputSearch: term}) }} 
              placeholder={this.state.isProduct ? 'Buscar producto/s' : 'Buscar servicio/s'}
              placeholderTextColor={COLORS.grayDark}
              style={ style.search }
            />

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
                TouchableComponent={TouchableOpacity}
                onPress={() => this.navigateToNewItem(this.state.isProduct) }
                icon={IconMore}
                buttonStyle={ style.buttonNew }
                titleStyle={ style.textRegular16White }
                ViewComponent={LinearGradient}
                linearGradientProps={COLORGBL}
              />
            </View>
          </View>

      </LinearGradient>   
    );
  }
}

export default ItemList;