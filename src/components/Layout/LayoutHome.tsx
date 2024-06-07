'use client'
import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, InputNumber, Layout, Rate, Row, theme } from 'antd';
import ContentHome from '../ContentHome/ContentHome';
import { ContentSiderbar } from '../ContentSiderbar';


const { Content, Sider } = Layout;

const arrayChecks: string[] = ['Agente', 'Supervisor', 'Tienda',];


const itemsSubMenu = [
    {
        text: 'Home',
    },
    {
        text: 'Celulares',
    },
    {
        text: 'Motocicletas',
    },
    {
        text: 'Tus préstamos',
    },
    {
        text: 'Tiendas',
    },
    {
        text: 'Tracking',
    },
    {
        text: 'Club Macropay',
    },
];

const LayoutHome: React.FC = () => {

    const [valueChecked, setValueChecked] = useState<String[]>();


    const handleCheckboxChange = (checkedValues:String[]) => {
        console.log(checkedValues)
        setValueChecked(checkedValues)
    }


    const contenido = [
        {
            key: 1,
            text: <h4 className='text-custom-blue font-bold'>Marcas</h4>,
            icon: UserOutlined,
            children: [{
                key: 2, label: (
                    <Checkbox.Group
                        className=' h-auto table-caption overflow-auto w-full'
                        onChange={handleCheckboxChange}
                        options={arrayChecks}/>)
            }],
        },
        {
            text: <h4 className='text-custom-blue font-bold'>Precio</h4>,
            icon: LaptopOutlined,
            children: [
                {
                    key: 3,
                    label: <div className='flex gap-[3px] ' >
                        <InputNumber className='text-slate-400' defaultValue={100} />
                        -
                        <InputNumber className='text-slate-400' defaultValue={5000} />
                    </div>
                }
            ]
        },
        {
            text: <h4 className='text-custom-blue font-bold'>Reviews</h4>,
            icon: NotificationOutlined,
            children: [{ key: 4, label: <Rate allowHalf defaultValue={4} /> }],
        },
        { text: <h4 className='text-custom-blue font-bold'>Memoria</h4>, icon: NotificationOutlined },
        { text: <h4 className='text-custom-blue font-bold'>Rango</h4>, icon: NotificationOutlined },
        { text: <h4 className='text-custom-blue font-bold'>Cámara</h4>, icon: NotificationOutlined },
    ]


    return (
        <>
            <Row className='p-[10px] mb-[4px] bg-white shadow-custom-header z-[1] gap-[7px] '>
                {itemsSubMenu.map((item, index) => (
                    <div key={index} className='pl-[30px] flex justify-center' >
                        {item.text}
                    </div>
                ))}
            </Row>
            <Layout className='flex justify-center p-[30px] bg-custom-bg-home  items-start '>
                <Sider width={250} theme='light' className='border-[1px] p-[10px] h-[654px]  shadow-lg shadow-gray-400' >
                    <Row className='flex flex-col gap-[25px] h-[654px]'>
                        {contenido.map(({ text, children }, index) => {
                            const key = String(index + 1);
                            return (
                                <ContentSiderbar key={key} text={text} children={children} />
                            );
                        })}
                    </Row>
                </Sider>
                <Layout>
                    <Content className='pl-[24px] min-[280] bg-custom-bg-home flex flex-col items-start '>
                        <ContentHome  valueChecked={valueChecked} />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default LayoutHome;