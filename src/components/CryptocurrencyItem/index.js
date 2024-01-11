// Write your JS code here
import './index.css'

const cryptocurrencyItem = props => {
  const {eachItem} = props

  const {id, currencyName, usdValue, euroValue, currencyLogo} = eachItem

  return (
    <li className="crypto-item">
      <div className="item-image-heading">
        <img
          src={currencyLogo}
          alt={`${currencyName}`}
          className="item-image"
        />
        <p className="item-heading">{currencyName}</p>
      </div>
      <div className="dollar-items">
        <p className="usd-dollar">{usdValue}</p>
        <p className="euro-dollar">{euroValue}</p>
      </div>
    </li>
  )
}

export default cryptocurrencyItem
