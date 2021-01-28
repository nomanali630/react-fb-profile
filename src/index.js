import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';

// function Janu(){
//   return <h1>HELLO mera name ahmed raza hai</h1>
// }
// ReactDOM.render(
//   <Janu/>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// function Love(){
//   return <div>
//     <strong className="head">Hello</strong>
//    <h1 className="name">Mera name ahmed raza hai</h1>
//    <ul className="res">
//    <li >me hostel me parhta hu</li>
//    <li >me hostel me parhta hu</li>
//    <li >me hostel me parhta hu</li>
//    <li >me hostel me parhta hu</li>
//    <li >me hostel me parhta hu</li>
//    </ul>
//   </div>
// }
//  ReactDOM.render(
//    <Love/>,
//    document.getElementById('root')
//  );

function Mediacard(property) {
  return <div className="media">
    <div >
      <div className="profile">
        <img src={property.imageUrl}></img>
      </div>
      <div className="name">
        <p>{property.name}</p>
        <p>{property.time}</p>
      </div>
      <div className="clear"></div>
    </div>
    <div className="para">
      <p>{property.body}</p>
    </div>
    <div className="img">
      <img src={property.imageUrl} />
    </div>
  </div>
}
ReactDOM.render(<Mediacard time={new Date().toLocaleTimeString()} 
name="House" body="This photo was taken in saadabad palace in Tehran, Iran. we were actually going to take some photos of the buildings, but then we encountered these flowers which were full of butterflies and they were just amazing."
 imageUrl="https://images.all-free-download.com/images/graphicthumb/beautiful_scenery_04_hd_pictures_166258.jpg" />,
  document.getElementById('root'));