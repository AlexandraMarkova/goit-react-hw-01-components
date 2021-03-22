import user from './user.json';
import React from "react";
import Profile from './components/Profile'

const App = () => { 
    return (
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
    );
}

export default App;