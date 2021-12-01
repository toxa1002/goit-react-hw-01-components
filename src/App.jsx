import Profile from './components/Profile/Profile';
import userData from './data/userData.json';
import Statistics from './components/Statistics/Statistics';
import StatData from './data/statisticalData.json';
import FriendList from './components/FriendList/FriendList';
import Friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

export default function App(params) {
    return (
        <div>
            <Profile
                name={userData.name}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats}
            />
            <Statistics title="UPLOAD STATS" stats={StatData} />
            <FriendList friends={Friends} />
            <TransactionHistory items={transactions} />
        </div>
    );
}
