'use client'
import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Button } from 'antd';
import iconUser from '../../../../public/iconUser.svg';
import Image from 'next/image';
import { CustomCarousel } from '../../../components/Carousel';
import { response } from '../../../constants/constants';
import { User } from '../../../interface/User';
import { useRouter } from 'next/navigation';
import { ArrowLeftOutlined } from '@ant-design/icons';


const CardDetail = ({ params }: { params: { id: string } }) => {

	// console.log(params)

	const [user, setUser] = useState<User[]>([]);
	const router = useRouter();

	useEffect(() => {

		const filterUser = response !== undefined &&
			response?.filter((user) => user.id === Number(params.id))
		setUser(filterUser)
	}, [])

	console.log(user)

	const goHome = () => router.push('/')



	const title = user[0]?.firstName.concat(user[0]?.lastName).length > 10;

	return (
		<Row className='flex justify-start items-center h-[80vh] w-[100%] m-[10px]' >
			<Col span={4}>
				<CustomCarousel />
			</Col>
			<Col span={7}>
				<Image src={iconUser} alt="imagen de prueba" height={642} width={429} />
			</Col>
			<Col span={7}>
				<Card
					title={title ? <h4>{user[0]?.firstName || 'No firstName'} {user[0]?.lastName || 'No lastName'}</h4> : <h2 className='text-4xl ' >{user[0]?.firstName || 'No firstName'} {user[0]?.lastName || 'No lastName'}</h2>}
					bordered={false}
					className='w-[300px] h-[400px] m-[10px] border-[1px] border-solid border-[#ccc] shadow-[5px] cursor-pointer'>

					<p className='text-2xl' >{user[0]?.role || 'unknown rol'}</p>
					<span className='text-justify block m-[10px] ' >
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut in dolore necessitatibus! Illo nulla magnam mollitia ea unde. Veniam quasi earum quidem culpa tempore eligendi officiis incidunt a. Beatae, repellendus!
					</span>
					<Button onClick={goHome} type="primary" className='h-[40px] w-[100%]' icon={<ArrowLeftOutlined />} >Regresar</Button>
				</Card>
			</Col>

		</Row>
	)
}

export default CardDetail;
