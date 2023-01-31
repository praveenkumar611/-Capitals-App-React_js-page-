import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    currentCapitalId: countryAndCapitalsList[0].id,
  }

  changeCapital = event => {
    this.setState({currentCapitalId: event.target.value})
  }

  getCountry = () => {
    const {currentCapitalId} = this.state
    const getCountryList = countryAndCapitalsList.find(
      eachList => eachList.id === currentCapitalId,
    )
    return getCountryList
  }

  render() {
    const {currentCapitalId} = this.state
    const countryGet = this.getCountry()

    return (
      <div className="bg-container">
        <div className="container">
          <h1>Countries And Capitals</h1>
          <div className="drop-down">
            <select onChange={this.changeCapital} value={currentCapitalId}>
              {countryAndCapitalsList.map(eachCapital => (
                <option value={eachCapital.id} key={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="text">is capital of which country?</p>
          </div>
          <p className="text1">{countryGet.country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
