import { ISSRContext } from 'ssr-types'
import { IndexData } from '@/interface'
interface IApiService {
  index: () => Promise<IndexData>
}

export default async (ctx: ISSRContext<{
  apiService?: IApiService
}>) => {
  const data = __isBrowser__ ? await (await window.fetch('/api/user')).json() : await ctx.apiService?.index()
  
  console.log(data);
  
  return {
    // 建议根据模块给数据加上 namespace防止数据覆盖
    userData: data
  }
}
