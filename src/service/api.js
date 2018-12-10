import fetch from '../http'

export const getData = (mother_name = '', card_no = '') => fetch('POST', '/admin/account/login.json', {
  phone: mother_name,
  pwd: card_no
})
