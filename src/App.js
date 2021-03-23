import user from './user.json';
import statisticalData from "./statistical-data.json";
import React from "react";
import Profile from './components/Profile';
import Statistics from "./components/Statistics";


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
        <Statistics
          title={'Upload stats'}
          stats={statisticalData}
        />
      </div>
    );
}

export default App;