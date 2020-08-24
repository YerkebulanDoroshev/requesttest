import React from 'react';
import axios from 'axios';
import { Info } from '../';
import { Input } from 'antd';

const { Search } = Input;

class Form extends React.Component {
  state = {
    user: '',
  };
  getUser = (user) => {
    if (user) {
      axios.get(`https://api.github.com/users/${user}`).then((res) => {
        const user = res.data;
        this.setState({ user });
      });
    } else return;
  };

  render() {
    return (
      <div>
        <Search
          placeholder="Username"
          onSearch={this.getUser}
          style={{ width: 200 }}
          size="large"
          name="username"
          allowClear={true}
        />

        {this.state.user && <Info user={this.state.user} />}
      </div>
    );
  }
}
export default Form;
