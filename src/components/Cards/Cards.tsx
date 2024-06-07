"use client"

import React from 'react';
import { Button, Card, Col, Rate, Row } from 'antd';
import iconUser from '../../../public/iconUser.svg'
import Image from 'next/image';
import { User } from '@/interface/User';
import { useRouter } from 'next/navigation'


interface CardsProps {
	user: User;

}

const Cards: React.FC<CardsProps> = ({ user }) => {
	const router = useRouter();

	const showDetailsInfoUser = (id: Number) => {
		// console.log(id)
		router.push(`/Card/${id}`);
	}

	return (
		<Card
			title={`${user.firstName} ${user.lastName}`}
			bordered={false}		
			className='w-[300px] h-[400px] m-[10px] border-[1px] border-solid cursor-pointer'
			onClick={() => showDetailsInfoUser(user.id)}
			>
			<Image src={iconUser} alt="imagen de prueba" height={150} width={150} />
			<p>{user?.role}</p>
			<Row className='bg-slate-600 justify-end '>
				<Col className='bg-zinc-100 '>
				<Rate allowHalf defaultValue={4} />
				</Col>
			 <Col className='bg-orange-500'>
				<Button className='w-[117px] h-[43px]  bg-custom-color-boton  text-[#0149BE]' >Lo Quiero!</Button>
			 </Col>
			</Row>
		</Card>
	);
};

export default Cards;
