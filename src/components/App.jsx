import user from '../user.json';
import statData from '../data.json';
import { Profile } from './profile';
import { Statistics } from './Statistics';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* React homework template */}


 <Profile
//  key={user.tag}
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>


 <Statistics title="Upload stats" stat={statData} key={statData.length}/> 
    </div>
  );
};
