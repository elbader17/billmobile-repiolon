import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import _ from 'lodash';
import { ThemeContext } from '../theme';
import { SearchBar } from 'react-native-elements';


class SearchScreen extends Component {
  static contextType = ThemeContext;

  static navigationOptions = ({ navigation }) => ({
    title: 'Search',
    headerBackTitle: ' ',
    //headerRight: ,
  });

  constructor(props) {
    super(props);
    this.state = { 
      input: '' 
    };
  }

  updateSearch = (input) => {};

  renderContent = () => (
    <View>
        <Text>Martin Daniotti</Text>
    </View>
  );

  render() {
    const theme = this.context;
    const { input } = this.state;

    return (
      <View>
        <SearchBar
          placeholder="Type here..."
          onChangeText={this.updateSearch}
          value={input}
          //showLoading={this.props.loadingMore}
        />
        <View style={{ flex: 1 }}>
          {this.renderContent()}
        </View>
      </View>
    );
  }
}

export default SearchScreen;
