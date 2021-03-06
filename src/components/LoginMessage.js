import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import Divider from 'material-ui/Divider'

const styles = {
  marginTop:{
    marginTop:'10px'
  }
}

class LoginMessage extends Component {
  
  render() {
    return (
      <div>
        <Divider />
        <div style={styles.marginTop}>
          <Link to="/register">Click here</Link> to register
        </div>
      </div>
    )
  }

}

export default LoginMessage