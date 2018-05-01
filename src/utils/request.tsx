/**
 * 交互插件
 */

import {config} from '../config'
import {default as axios} from 'axios'
import {getCookie} from './cookie'



export const curl = (opt :{url: string, data?: any, method?: string}): Promise<any> => {
    return new Promise(resolve => {
        const subSystem: string = config('host.subSystem')
        const instance = axios.create({
            baseURL: subSystem,
            headers: {
                accessToken: getCookie('accessToken') || ''
            }
        })
        return instance[opt.method || 'post'](opt.url, opt.data).then((json: any) => resolve(json.data)).catch((e: Error) => resolve({}))
    })
}