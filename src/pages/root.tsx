import * as React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './login'
import Home from './home'
import * as auth from '../utils/auth'
import {RootComponenet} from './interface'
// const {Route} = Router
// const Login = (location: any, cb: Function) => {
//     console.log({location, cb})
//     require.ensure([], require => {
//         cb(null, require('./login').default)
//     })
// }


export default class Root extends React.Component<RootComponenet, any>{
    public componentDidMount(){
        console.log(this.props)
        let {history} = this.props
        let status: boolean = auth.IS_LOGIN()
        if(status){
            return history.replace(this.props.location.pathname)
        }
        // let {history} = this.props
        history && history.replace('/login')
    }
    public render(){
        return (
            <Switch>
               <Route exact={true} path="/" component={Home} />
               <Route path="/login" component={Login} />
            </Switch>
        )
    }
}