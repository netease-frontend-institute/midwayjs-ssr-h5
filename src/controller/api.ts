import { Inject, Controller, Provide, Get } from '@midwayjs/decorator'
import { Context } from 'egg'
import { IApiService, IApiDetailService, IUserApiService } from '../interface'

@Provide()
@Controller('/api')
export class Api {
  @Inject()
  ctx: Context

  @Inject('ApiService')
  service: IApiService

  @Inject('UserService')
  userService: IUserApiService

  @Inject('ApiDetailService')
  detailService: IApiDetailService

  @Get('/index')
  async getIndexData () {
    const data = await this.service.index()
    return data
  }

  @Get('/user')
  async getUser () {
    const data = await this.userService.user()
    return data
  }

  @Get('/detail/:id')
  async getDetailData () {
    const { ctx, detailService } = this
    const id = ctx.params.id
    const data = await detailService.index(id)
    return data
  }
}
