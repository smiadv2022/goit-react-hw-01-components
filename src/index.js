import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// const elem= React.createElement('div');
// console.log(elem);
// const data = {
//   username: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308
//   }
// }
// const profile = (<div class="profile">
// <div class="description">
//   <img
//     src={data.avatar}
//     alt="User avatar"
//     class="avatar"
//   />
//   <p class="name">{data.username}</p>
//   <p class="tag">{data.tag}</p>
//   <p class="location">{data.location}</p>
// </div>

// <ul class="stats">
//   <li>
//     <span class="label">Followers</span>
//     <span class="quantity">{data.followers}</span>
//   </li>
//   <li>
//     <span class="label">Views</span>
//     <span class="quantity">{data.views}</span>
//   </li>
//   <li>
//     <span class="label">Likes</span>
//     <span class="quantity">{data.likes}</span>
//   </li>
// </ul>
// </div>);
// ReactDOM.render(profile, document.getElementById('root') );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
