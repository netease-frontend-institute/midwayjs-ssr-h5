import { Readable } from 'stream'
import { Controller, Get, Provide, Inject } from '@midwayjs/decorator'
import { Context } from 'egg'
import { render } from 'ssr-core-react'
import { IApiService, IApiDetailService } from '../interface'

interface IEggContext extends Context {
  apiService: IApiService
  apiDeatilservice: IApiDetailService
}

@Provide()
@Controller('/')
export class Index {
  @Inject()
  ctx: IEggContext

  @Inject('ApiService')
  apiService: IApiService

  @Inject('ApiDetailService')
  apiDeatilservice: IApiDetailService

  @Get('/')
  @Get('/user')
  @Get('/detail/:id')
  async handler (): Promise<void> {
    try {
      this.ctx.apiService = this.apiService
      this.ctx.apiDeatilservice = this.apiDeatilservice
      const stream = await render<Readable>(this.ctx, {
        stream: false
      })
      this.ctx.body = stream
    } catch (error) {
      console.log(error)
      this.ctx.body = error
    }
  }

  @Get('/404')
  notFound () {
     return "<h1>404</h1>"
  }
}
