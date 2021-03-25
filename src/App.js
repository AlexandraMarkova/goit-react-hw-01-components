import React from "react";

import user from './user.json';
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import items from "./transactions.json";

import Profile from './components/Profile/Profile';
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/Friend/FriendList";
import TransactionHistory from "./components/Transaction/TransactionHistory";


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
        <FriendList
          friends={friends}
        />
        <TransactionHistory
          items={items}
        />
      </div>
    );
}

export default App;