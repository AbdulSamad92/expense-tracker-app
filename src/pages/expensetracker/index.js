import React from 'react';
import { Button, Form, Input } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center p-5 bg-white`}
        >
            <h1>Expense Tracker</h1>
            <div className='flex m-3'>
            <div className='text-[10px] mx-2 border-inherit rounded p-2 border-solid border cursor-pointer'>Income</div>
            <div className='text-[10px] mx-2 border-inherit rounded p-2 border-solid border cursor-pointer'>Expense</div>
            </div>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Amount"
                        name="amount"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your amount!',
                            },
                        ]}
                    >
                        <Input type='number'/>
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your description!',
                            },
                        ]}
                    >
                        <Input type='text' />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary bg-blue-800" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <div className='flex justify-between'>
                    <div className=' flex flex-col justify-between items-center m-5'>
                    <div className=''>Income</div>
                    <div className='text-[40px] font-bold text-green-600'>0</div>
                    </div>
                    <div className=' flex flex-col justify-between items-center m-5'>
                    <div className=''>Expense</div>
                    <div className='text-[40px] font-bold text-red-600'>0</div>
                    </div>
                    <div className=' flex flex-col justify-between items-center m-5'>
                    <div className=''>Balance</div>
                    <div className='text-[40px] font-bold text-green-600'>0</div>
                    </div>
                </div>
                
                </main>
    )
}