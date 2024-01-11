// Write your code here
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptoTracker extends Component {
  render() {
    return (
      <div className="main-crypto-container">
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default CryptoTracker
