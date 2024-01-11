// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoDetails: [], isLoading: true}

  componentDidMount() {
    this.getDataFromAPI()
  }

  getDataFromAPI = async () => {
    const responseData = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await responseData.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))

    console.log(updatedData)

    this.setState({cryptoDetails: updatedData, isLoading: false})
  }

  render() {
    const {cryptoDetails, isLoading} = this.state
    return (
      <div className="crypto-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto-image"
            />

            <ul className="crypto-list-container">
              <li className="crypto-list-header">
                <h1 className="list-heading">Coin Type</h1>
                <div className="header-dollar-list">
                  <p className="usd-dollar-heading">USD</p>
                  <p className="euro-dollar-heading">EURO</p>
                </div>
              </li>
              {cryptoDetails.map(eachItem => (
                <CryptocurrencyItem eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
