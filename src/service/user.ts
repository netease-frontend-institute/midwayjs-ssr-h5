import { Provide } from '@midwayjs/decorator'

@Provide('UserService')
export class UserService {
    user () {
        return {
            name:'z',
            age: 20,
            gender: '男'
        }
    }
}
