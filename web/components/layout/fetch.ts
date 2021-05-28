import { ISSRContext } from 'ssr-types'
import { IndexData } from '@/interface'
interface IApiService {
    index: () => Promise<IndexData>
}

export default async (ctx: ISSRContext<{
    apiService?: IApiService
}>) => {
    // layout 级别的 fetch，用于获取所有页面的公共数据，将会在每一个页面级别的fetch 调用之前调用，此处鉴权
    // const data = __isBrowser__ ? await (await window.fetch('/api/index')).json() : await ctx.apiService?.index()

    return {
        // 建议根据模块给数据加上 namespace 防止数据覆盖
        menuList: [{ id: 1, name: "我的部门", parentId: null, permission: 1 }, { id: 11, name: "我的部门2", parentId: 1, permission: 1 }]
    }
}
