// import STATIC from './static'

export const setCookie = (key: string, value: any) => {
    document.cookie = `${key}=${value}`
}

export const getCookie = (key: string) => {
    const r = new RegExp(`${key}=([^=]+)`)
    return r.test(document.cookie) ? RegExp.$1 : null
}