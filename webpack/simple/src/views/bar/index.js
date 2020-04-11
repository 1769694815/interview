/*
 * @Author: xwen
 * @Date: 2020-04-08 09:43:02
 * @LastEditTime: 2020-04-08 09:46:27
 * @LastEditors: xwen
 * @Description:
 */

import router from '../../router'
import template from './index.html'
import './style.css'

export default class {
  mount(container) {
    document.title = 'bar'
    container.innerHTML = template

    container.querySelector('.bar__gofoo').addEventListener('click', () => {
      router.go('/foo')
    })
  }
}