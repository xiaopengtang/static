import { Form, Icon, Input, Button } from 'antd';
import './index.css'
import * as React from 'react'
import {login} from '../../utils/auth'
import { message } from 'antd';

// import {RootComponent} from '../interface'
const FormItem = Form.Item;

import { FormComponentProps } from 'antd/lib/form';

interface UserFormProps extends FormComponentProps {
//   username?: string;
//   password?: string;
  form: any;
  history?: any;
}

class NormalLoginForm extends React.Component<UserFormProps, any>{
  state = {
    loading: false
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(this.props.form.getFieldsValue())
    let opt = this.props.form.getFieldsValue()
    this.props.form.validateFields((err: any, values: {username: string, password: string}) => {
        // console.log({values, err})
      if (!err) {
          
        console.log('Received values of form: ', values);
      }
      if(values.username && values.password){
          this.setState({loading: true})
        login(opt).then((status: boolean) => {
            this.setState({loading: false})
            if(!status){
                return message.error('登录失败')
            }
            return this.props.history.replace('/')
          })
      }
      
    //   login()
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
         <div className="login-content">
            <h2>LINKEDING</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入用户名' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                )}
                </FormItem>
                <FormItem>
                <Button type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                    登录
                </Button>
                </FormItem>
            </Form>
         </div>
      </div>
    );
  }
}

export default Form.create()(NormalLoginForm);