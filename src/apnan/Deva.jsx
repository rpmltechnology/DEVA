import React from "react";
import './index.css';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {

const popup = () => {
  document.getElementById('popup').classList.add('active');
}
const popclose = () => {
  document.getElementById('popup').classList.remove('active');
}
const swapdis = () => {
  document.getElementById('dummy').classList.add('active');
  document.getElementById('second_page').classList.add('active');
}
const swapactive = () => {
  document.getElementById('dummy').classList.remove('active');
  document.getElementById('second_page').classList.remove('active');
}
const navicon = () => {
  document.getElementById('navicon').classList.add('active');
  document.getElementById('naviconone').classList.add('active');
  document.getElementById('naviconclose').classList.add('active');
}
const naviconclose = () => {
  document.getElementById('navicon').classList.remove('active');
  document.getElementById('naviconone').classList.remove('active');
  document.getElementById('naviconclose').classList.remove('active');
}

  return(
  <>
  <div className='header'>
    <div className='heading'>Deva</div>
    <div className='left_content' id='navicon'>
      <ul>
        <li onClick={swapactive}>Swap</li>
        <li onClick={swapdis}>Pool</li>
      </ul>
    </div>
    <div className='right_content' id='naviconone'>
      <ul>
        <li class='active'>0 DeV</li>
        <li onClick={popup}>connect to a wallet</li>
        <li><BsFillBrightnessHighFill /></li>
        <li><AiOutlineEllipsis /></li>
      </ul>
    </div>
  </div>
  <div className="navicon">
    <div className="icon" onClick={navicon}><AiOutlineMenu /></div>
    <div className="iconclose" onClick={naviconclose} id='naviconclose'><AiOutlineClose /></div>
  </div>

  <div className="popup" id='popup'>
    <div className="overlay"></div>
    <div className="content">
      <div className='close' onClick={popclose}> <AiOutlineClose /></div>
      <p>connect to wallet</p>
      <div class='token'>
        <h1>walletconnect</h1>
        <p></p>
      </div>
      <div class='token'>
        <h1>DeGe wallet</h1>
        <p></p>
      </div>
      <div class='token'>
        <h1>coinbase wallet</h1>
        <p>54254</p>
      </div>
      <div class='token'>
        <h1>portis</h1>
        <p></p>
      </div>
      <div className="bottom">New to Ethereum? <a>Learn more about wallets</a></div>
    </div>
  </div>
  </>
  )
}

export default Header;