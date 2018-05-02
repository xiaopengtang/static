import * as React from 'react'
import { Form, Row, Col, Input, Button, Icon, Select  } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import { FormComponentProps } from 'antd/lib/form';

interface ListProps extends FormComponentProps {
    form: any
}
class SearchHeader extends React.Component<ListProps, any> {
    state = {
        expand: false,
    };

    handleSearch = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
            console.log('Received values of form: ', values);
        });
    }

    handleReset = () => {
        this.props.form.resetFields();
    }

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    }

    // To generate mock Form.Item
    getFields() {
        const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form;
        const children: any[] = [];
        const field: any[] = [{
            name: 'roleId',
            label: '用户角色',
            message: '',
            component: (
                <Select defaultValue="lucy">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            )
        }, {
            name: 'organizationId',
            label: '所属机构',
            message: '',
            placeholder: '',
            component: (
                <Select defaultValue="lucy">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            )
        }, {
            name: 'name',
            label: '查询内容',
            message: '',
            // placeholder: '登录名/用户名/邮箱/手机号',
            component: <Input placeholder="登录名/用户名/邮箱/手机号" />
        }]

        field.forEach((f, i) => {
            // console.log({i})
            children.push(
                <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <FormItem label={f.label}>
                        {getFieldDecorator(`field-${i}`, {
                            rules: [{
                                required: true,
                                message: 'Input something!',
                            }],
                        })(
                            f.component
                            // <Input placeholder={f.placeholder} />
                        )}
                    </FormItem>
                </Col>
            );
        })
        for (let i = 0; i < 10; i++) {
            
        }
        return children;
    }

    render() {
        return (
            <Form
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
            >
                <Row gutter={24}>{this.getFields()}</Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">搜索</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            重置
            </Button>
                        <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                            展开 <Icon type={this.state.expand ? 'up' : 'down'} />
                        </a>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Form.create()(SearchHeader);
