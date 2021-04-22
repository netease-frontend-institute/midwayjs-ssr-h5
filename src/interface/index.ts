export interface IApiService {
  index: () => Promise<any>,
  user: () => {}
}

export * from './detail'
