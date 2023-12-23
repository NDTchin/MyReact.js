import React from 'react';
import logo from './logo.svg';
import './App.css';
import PricingPage from '../components/PricingPage';

const Text = ({ style = {}}) => (
  <p style={{...style, fontFamily:"Inter"}}>Hello World!</p>
);
const StyledText = widthStyles(Text);

function widthStyles(Components){
  return (props) => {
    const style ={
      color: "red",
      fontSize: "1em",
      ...props.style,
    };
    return <Components {...props} style={style}/>;
  };
}
function Welcome({myName}){
  return(
    <section>
      <h1>Hello, <span>{myName}</span></h1>
    </section>
  )
}

export default function MyApp(){
  return (
    <div className='App'>
      <Welcome myName="ThiDK"/>
      <Text/>
      <StyledText/>
      <PricingPage/>
    </div>
  );
}