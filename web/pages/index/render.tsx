import React, { useContext } from 'react'
import { SProps, IContext } from 'ssr-types'
import Slider from '@/components/slider'
import Rectangle from '@/components/rectangle'
import Search from '@/components/search'
import { IData } from '@/interface'
import styles from './index.less'

export default (props: SProps) => {
  const { state, dispatch } = useContext<IContext<IData>>(window.STORE_CONTEXT)
  console.log(state);

  const onEnterUser = () => {
      props.history.push('/user')
  }

  return (
    <div>
        <p className={styles.link} onClick={onEnterUser}>用户（前端请求接口）</p>
        <p className={styles.link} href="/user">用户（ssr）</p>
      <Search />
      {
        state?.indexData?.data?.[0]?.components ? <div>
          <Slider {...props} data={state.indexData.data[0].components} />
          <Rectangle {...props} data={state.indexData.data[1].components} />
        </div> : <img src='https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif' className='loading' />
      }
    </div>
  )
}
