import * as React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Root from './pages/root'
import {Route} from 'react-router-dom'
import './App.css'
export default class App extends React.Component {
  public componentDidMount(){
  }
  public render(){
    return (
      <BrowserRouter>
        <Route path="" component={Root}/>
      </BrowserRouter>
    )
  }
}