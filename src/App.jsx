import Profile from "./components/Profile/index.js";
import user from "./components/Profile/user.json";


function App() {
  return (
    <div >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.avatar}
        stats={user.stats}
      />
       <Statistics statistic={statistics} />
        <FriendsList friends={friends} />
        <Transactions items={transactions} />
    </div>
  );
}

export default App;
