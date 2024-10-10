import api from 'axios'

const baseURL = 'https://cdnapi.smotrim.ru/api/v1'

export const getPersons = () => {
  return api.get(`${baseURL}/boxes/vesti2`)
}

export const getPersonInfo = async(id: number) => {
  return api.get(`${baseURL}/persons/${id}`)
}