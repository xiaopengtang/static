import {getCookie, setCookie} from './cookie'
import {curl} from './request'
// 判断登录状态
export const IS_LOGIN = (): boolean => {
    return !!getCookie('accessToken')
}
// 登录
export const login = async(opt: {username: string, password: string, scope?: string}): Promise<any> => {
    opt.scope = 'web'
    let res = await curl({
        data: opt,
        url: 'user/login'
    })
    let model = res && res.model
    console.log({model})
    model && setCookie('accessToken', model)
    return !!model
}

export const loginOut = async() => {
    const res: any = await curl({
        url: 'user/loginout'
    })
    res.success && setCookie('accessToken', '')
    return !!res.success
}
// 检查是否有权限
export const checkAuth = () => {}