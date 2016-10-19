require('normalize.css/normalize.css');
require('styles/App.css');


import React from 'react';
import CreateLogin from './../login/components/CreateLogin'


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="login">
          <CreateLogin  />
        </div>
      </div>
    );
  }
}


export default AppComponent;
