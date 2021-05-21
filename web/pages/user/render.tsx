import React, {useContext} from 'react'
import { SProps, IContext } from 'ssr-types'
import { IData } from '@/interface'


export default (props: SProps) => {
  const { state, dispatch } = useContext<IContext<IData>>(window.STORE_CONTEXT)
  console.log(state);
  
  return (
    <div>
      user
    </div>
  )
}
