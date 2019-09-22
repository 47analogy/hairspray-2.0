import * as actiontype from './actiontypes'
import axios from 'axios'

const URL =
  'https://pacific-basin-16363.herokuapp.com/api' || 'http://localhost:5000/api'

// Stylist Actions

export const getAllStylists = () => {
  return dispatch => {
    dispatch({ type: actiontype.GETTING_STYLISTS })
    axios
      .get(`${URL}/stylist`)
      .then(stylists => {
        dispatch({ type: actiontype.GOT_STYLISTS, payload: stylists.data })
      })
      .catch(err => {
        dispatch({ type: err })
      })
  }
}
