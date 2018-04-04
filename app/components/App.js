import React from 'react';
import axios from 'axios';

import appClass from './App.css';

/* export default () => <h1>Hello World</h1>; */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '游客',
      opacity: 1.0,
      date: new Date()
    };
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.setState({ userName: response.data[0].name });
        return false;
      }).catch();
    this.opaID = setInterval(
      () => this.tick(this.state.opacity),
      100
    );
    this.timeID = setInterval(
      () => this.clock(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.opaID);
    clearInterval(this.timeID);
  }

  tick(opacity) {
    let opacityNew = opacity - 0.05;
    if (opacityNew < 0.1) {
      opacityNew = 1.0;
    }
    this.setState({ opacity: opacityNew });
  }

  clock() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className={appClass.HolyGrail}>
        <header>Hello,{this.state.userName}。现在是{this.state.date.toLocaleString()}</header>
        <div className={appClass.HolyGrail_body} style={{ opacity: this.state.opacity }}>
          <main className={appClass.HolyGrail_content}>。。</main>
          <nav className={appClass.HolyGrail_nav}>...</nav>
          <aside className={appClass.HolyGrail_ads}>...</aside>
        </div>
        <footer>...</footer>
      </div>
    );
  }
}
