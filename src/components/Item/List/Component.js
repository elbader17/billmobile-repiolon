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
      headerStyle: { backgroundColor: COLORS.blue, elevation: 0 },
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
            actionItem(item)
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
        <Button
          title='Productos'
          TouchableComponent={TouchableOpacity}
          onPress={() => this.setState({isProduct: true})} 
          buttonStyle={ this.state.isProduct ? style.buttonSelect : style.buttonSelectDisable }
          titleStyle={ this.state.isProduct ? style.textRegular14White : style.textRegular14White }
        />
        <Button
          title='Servicios'
          TouchableComponent={TouchableOpacity}
          onPress={() => this.setState({isProduct: false})}
          buttonStyle={ this.state.isProduct ? style.buttonSelectDisable : style.buttonSelect }
          titleStyle={ this.state.isProduct ? style.textRegular14White : style.textRegular14White }
        />
      </View>
    );
  }

  render() {
    return(
      <View style={style.container}>

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
                titleStyle={ style.textBold18White }
              />
            </View>
          </View>

      </View>   
    );
  }
}

export default ItemList;