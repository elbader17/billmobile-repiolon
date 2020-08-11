import React, { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'

class RemotePushController extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    PushNotification.configure({
      onRegister: function(token) {
        console.warn('TOKEN DEVICE:', token)
        alert(token)
      },
      senderID: '6708350543',
      popInitialNotification: false,
      requestPermissions: false
    })
  }

  render() {
    return null
  }
}

export default RemotePushController;