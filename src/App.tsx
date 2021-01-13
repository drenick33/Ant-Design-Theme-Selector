import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.less';
import Navbar from './components/layout/Navbar';
import Main from './components/pages/main/main';
import { Layout } from 'antd';
const { Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <Navbar></Navbar>
        </header>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
        <Footer style={{ textAlign: 'center' }}>
          Theme Previewer for AntDesign; Created by Daniel Renick
        </Footer>
      </div>
    </BrowserRouter>
  );
}

// const mapDispatchToProps = (dispatch: any) => ({
//   loadUser: () => dispatch({ type: 'USER_LOADING' }),
// });

export default App;
