import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  render() {
    return (
      <MultiThemeProvider>
        <React.Fragment>
          <AppBar title='Success' />
          <h1>Thank You For Submission</h1>
          <p>You will get an email with further instructions.</p>
        </React.Fragment>
      </MultiThemeProvider>
    );
  }
}
export default Success;
