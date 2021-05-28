import { ISSRContext } from 'ssr-types'
import { IndexData } from '@/interface'
interface IApiService {
  index: () => Promise<IndexData>
}

export default async (ctx: ISSRContext<{
  apiService?: IApiService
}>) => {
  // 页面首次加载（刷新页面）走ssr请求，后续路由跳转走前端的fetch请求
  const data = __isBrowser__ ? await (await window.fetch('/api/index')).json() : await ctx.apiService?.index()

  return {
    // 建议根据模块给数据加上 namespace 防止数据覆盖
    indexData: data
  }
}
