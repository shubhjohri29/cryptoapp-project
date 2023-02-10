import React from 'react'

import {Route, Link, Routes} from 'react-router-dom'
import { Layout, Typography, Space} from 'antd'

import { Navbar, Homepage, Exchanges, Cryptocurrncies, News, CryptoDetails } from "./components"


function App() {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout >
                <div className='routes'>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path='/exchanges' element = {<Exchanges />} />
                        <Route path="/cryptocurrencies" element = {<Cryptocurrncies />} />
                        <Route path='/crypto/:coinId' element = { <CryptoDetails />} />
                        <Route path='/news' element={<News />} />
                    </Routes>
                </div>
            </Layout>
            <div className='footer'>
            <Typography.Title level={5} style={{color: 'white', textAlign:'center'}}>
                Cryptoverse <br/>
                All right reserved
                
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
            </Space>
        </div>
        </div>
    </div>
  )
}

export default App
