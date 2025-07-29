import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/Page2.css'
export default class Page2 extends Component {
  render() {
    return (
      <div className='main1'>
        <div className='tl'>
          <h1>USA is not my Country</h1>
        </div>
        <marquee width="60%" direction="up" height="100px">
        Jai Hind
        </marquee>
      <br/> <br/>
      <div className='link1'>
       <Link to="/page1"><button>Go to Page 1</button></Link>
      </div>
      <div className='link2'>
      <Link to="/"><button>Go to Home Page</button></Link>
      </div>
      </div>
    )
  }
}
