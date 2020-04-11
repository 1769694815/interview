/*
 * @Author: xwen
 * @Date: 2020-04-08 09:42:51
 * @LastEditTime: 2020-04-08 13:46:42
 * @LastEditors: xwen
 * @Description:
 */

import router from '../../router'
import template from './index.html'
import './style.css'

export default class {
  mount(container) {
    document.title = 'foo'
    container.innerHTML = template

    container.querySelector('.foo__gobar').addEventListener('click', () => {
      router.go('/bar')
    })
  }
}