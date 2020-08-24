import React from 'react';
import './Info.css';
import { Button } from 'antd';

const Info = (props) => {
  return (
    <div className="Info">
      <div className="avatar_url">
        <img src={props.user.avatar_url} alt="avatar" />
      </div>
      <div className="info">
        <div className="login">
          <b>Login:</b>
          {props.user.login}
        </div>
        <div className="name">
          <b>Name:</b>
          {props.user.name}
        </div>
        <div className="location">
          <b>Location:</b>
          {props.user.location}
        </div>
        <div className="bio">
          <b>Bio:</b>
          {props.user.bio}
        </div>
        <div className="followers">
          <b>Followers:</b>
          {props.user.followers}
        </div>
        <div className="following">
          <b>Following:</b>
          {props.user.following}
        </div>
        <div className="following">
          <b>Public repos:</b>
          {props.user.public_repos}
        </div>

        <Button
          className="button"
          href={'https://github.com/' + props.user.login}
          target="_blank"
        >
          Github account
        </Button>
        {props.user.email && (
          <Button className="button" href={'mailto:' + props.user.email}>
            Email
          </Button>
        )}
      </div>
    </div>
  );
};
export default Info;
