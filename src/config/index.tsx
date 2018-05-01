import * as host from './host'


// 请将导入的配置卸载CONFIG对象里,便于遍历
const CONFIG: any = {host}


// 获取配置
export const config = (key: string) => {
    key = key.split('.').map((name:string) => `['${name}']`).join('')
    const reader = new Function('data', [
        `var ret = null`,
        `try{`,
        `   ret = data${key}`,
        `}catch(e){}`,
        `return ret`
    ].join('\n'))
    return reader(CONFIG)
}