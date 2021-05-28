import { ISSRContext } from 'ssr-types'

interface IApiService {
  user: () => any
}

export default async (ctx: ISSRContext<{
  userApiService?: IApiService
}>) => {
  const data = __isBrowser__ ? await (await window.fetch('/api/user')).json() : await ctx.userApiService?.user()

  console.log(data);

  return {
    // 建议根据模块给数据加上 namespace防止数据覆盖
    userData: data
  }
}
