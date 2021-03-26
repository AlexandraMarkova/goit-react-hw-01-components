import React from 'react';

import user from './Data/user.json';
import statisticalData from './Data/statistical-data.json';
import friends from './Data/friends.json';
import items from './Data/transactions.json';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friend/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import Container from './components/Container/Container';

const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </Container>
  );
};

export default App;
