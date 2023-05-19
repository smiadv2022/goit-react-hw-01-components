import user from '../user.json';
import statData from '../data.json';
import { Profile } from './profile';
import { Statistics } from './Statistics';
// const statd=statData[0];
// console.log (user);
// console.log (statData);

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
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="111111111111" stat={statData[0]}/> 
<Statistics title="111111111111" stat={statData[1]}/>
    </div>
  );
};
