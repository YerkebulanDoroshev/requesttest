import React from 'react';
import axios from 'axios';
import { Info } from '../';
import { Input, Button, Tooltip } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

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
          value={this.state.user}
          onChange={(e) => {
            this.setState({ user: e.target.value });
          }}
        />
        <Tooltip title="clear">
          <Button
            shape="circle"
            icon={<CloseOutlined />}
            onClick={() => this.setState({ user: '' })}
          />
        </Tooltip>

        {this.state.user && <Info user={this.state.user} />}
      </div>
    );
  }
}
export default Form;
