export interface IPerson {
  type: string
  id: number
  name: string
  surname: string
  title: string
  origName: any
  origSurname: any
  picId: number
  url: string
}

export interface IPersonInfo {
  name: string
  surname: string
  title: string
  picId: number
  anons: string
  body: string
}