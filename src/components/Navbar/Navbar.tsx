'use client'
import React from 'react';
import { Button, Col, Layout, Row } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import logo from '../../../public/logo.svg'

const { Header } = Layout;

export const Navbar = () => {
    return (
        <Header className='flex justify-between items-center bg-custom-blue pr-[10%] '>
            <Image src={logo} width={203} height={45} alt='logo de la empresa MacroPay' />
            <Row gutter={24}>
                <Col span={12}>
                    <Button
                        className='bg-custom-color-boton  h-[50px] w-[140px] border-[none] text-[#0149BE] '
                        block
                    >
                        Crear Tu Cuenta
                    </Button>
                </Col>
                <Col span={12}>
                    <Button
                        style={{
                            backgroundColor: 'transparent',
                            height: 50,
                            width: 140,
                            color: '#FFD300',
                            borderStyle: 'none',
                        }}
                        block
                    >
                        Iniciar Sesión
                        <ShoppingCartOutlined
                            style={{ color: 'black', borderRadius: '10px', backgroundColor: '#ccc', padding: '5px' }}
                        />
                    </Button>
                </Col>
            </Row>
        </Header>
    )
}
