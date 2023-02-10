import React, {useState, useEffect} from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd'


import { useGetCryptosQuery } from '../services/cryptoApi'

function Cryptocurrncies({simplified}) {

  const count = simplified ? 10 : 100
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count)

  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  //console.log(searchTerm)

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredData)
  },[searchTerm, cryptosList])

  if(isFetching) return 'Loading...'
  //console.log(cryptos)


  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
        <Input placeholder='Search Cryptocurrency' onChange={(evt) => setSearchTerm(evt.target.value)} />
      </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} md={6} className="crypto-card" key={currency.uuid}>
          <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrncies
