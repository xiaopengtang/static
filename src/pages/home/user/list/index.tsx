import * as React from 'react'
import Search from './search'
import TableList from './table'
import './index.css'

export default class ListComponent extends React.Component {
    public render(){
        return [
            <Search key={1}/>,
            <TableList key={2} />
        ]
    }
}