import React from 'react';
import { Auth } from 'aws-amplify';
import { View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';

class Initializing extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser();  
      if (user) this.props.navigation.navigate('Home');
      else this.props.navigation.navigate('Authentication');
    } catch (err) {
      console.log('error: ', err);
      if (this.props.user.completed) this.props.navigation.navigate('Authentication');
      else this.props.navigation.navigate('Intro');
    }
  }

  render() {
    const logo = require('../../images/iconInit.png')
    return(
      <View style={styles.container}>
        <View style={ styles.containerHeader }>
          <Image source={ logo } style={ styles.imageHeader } />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      height: hp('100%'),
      backgroundColor: COLORS.white
    },
    containerHeader: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    imageHeader: {
      width: 176,
      height: 109
    }
});

const mapStateToProps = state => ({ user: state.userservice,});
const Component = connect( mapStateToProps, null) (Initializing);

export default Component;