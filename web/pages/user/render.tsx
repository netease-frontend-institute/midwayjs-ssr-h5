import React, { useContext } from 'react'
import { SProps, IContext } from 'ssr-types'
import { UserData } from '@/interface'

export default (props: SProps) => {
  const { state, dispatch } = useContext<IContext<UserData>>(window.STORE_CONTEXT)
  console.log(state);
  if (!state) return;
  const { userData } = state
  if (!userData) return null
  const { name } = userData
  return (
    <div>
      姓名：{name}
    </div>
  )
}
