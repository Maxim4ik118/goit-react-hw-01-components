import { FriendsList, Profile, Statistics, TransactionHistory } from './components';

import transactionsList from './transactions';
import profileData from './user';
import statsData from './data';
import friendsData from './friends';

function App() {
  return (
    <div className="App">
      <TransactionHistory items={transactionsList} />
      <Profile {...profileData} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendsList friends={friendsData} />
    </div>
  );
}

export default App;
