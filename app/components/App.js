import React from 'react';
import HelloComponent from './hello/Hello';
import Avatar from './avatar/Avatar';

const USER_DATA = {
  name: 'Anil Allewar',
  username: 'anilallewar',
  imageUrl: 'https://avatars0.githubusercontent.com/u/2588724?v=3&s=460'
};

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <HelloComponent name="Anil"/>
                <Avatar user={USER_DATA}/>
                <HelloComponent/>
            </div>
        );
    }
}

export default AppComponent;
