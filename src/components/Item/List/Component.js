import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Button } from "react-native-elements";
import LoadingIndicator from '../../Loading';
import ListItems from './ListItems';
import { COLORS } from '../../../constants/colors';
import { IconBack, IconMore, IconSearch } from '../../../constants/icons';
import { orderByName } from '../../../utils/functions';
import style from '../style';

const KEYS_TO_FILTERS = ['attributes.name', 'attributes.price']; //Attributes shown in the search item

class ItemList extends React.Component {
  constructor(props){
    super(props);
    const concept = this.props.navigation.getParam('concept', 'Productos');
    this.state = {
      isProduct: concept === 'Productos',
      concept: concept,
      loading: true, //Loading items list
      loadingItem: false, //Adding or removing a item
      itemActive: undefined,
      itemInputSearch: ''
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Listado de Items',
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
    else this.props.navigation.navigate('NewInvoiceItem', { isProduct, concept: this.state.concept });
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
          titleStyle={ style.textRegular14GrayDark }
          disabled = {this.props.type === 'invoice' && this.state.concept === 'Servicios'}
        />
        <Button
          title='Servicios'
          TouchableComponent={TouchableOpacity}
          onPress={() => this.setState({isProduct: false})}
          buttonStyle={ this.state.isProduct ? style.buttonSelectDisable : style.buttonSelect }
          titleStyle={ style.textRegular14GrayDark }
          disabled = {this.props.type === 'invoice' && this.state.concept === 'Productos'}
        />
      </View>
    );
  }

  render() {
    return(
      <View style={style.container}>

          <View style={style.containerBody}>
            
            {this.renderSwtichButtons()}
            
            <View style={style.containerSearch}>
              {IconSearch}
              <SearchInput 
                onChangeText={(term) => { this.setState({itemInputSearch: term}) }} 
                placeholder={this.state.isProduct ? 'Buscar producto/s' : 'Buscar servicio/s'}
                placeholderTextColor={COLORS.grayDark}
                style={ style.search }
              />
            </View>

            <View style={style.boxItems}>
              <ScrollView>
                {this.state.loading ? this.renderLoading() : this.renderItems()}
              </ScrollView>
            </View>
          </View>
          
          <View style={style.containerFooter}>
            <View style={style.inLineSpaceAround}>
              <Button
                title='Añadir Nuevo'
                TouchableComponent={TouchableOpacity}
                onPress={() => this.navigateToNewItem(this.state.isProduct) }
                buttonStyle={ style.buttonPrimary }
                titleStyle={ style.textBold16White }
              />
            </View>
          </View>

      </View>   
    );
  }
}

export default ItemList;