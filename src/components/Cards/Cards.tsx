"use client"

import React, { useCallback, useMemo, useState } from 'react';
import { Button, Card, Col, Modal, Rate, Row, Timeline } from 'antd';
import iconUser from '../../../public/iconUser.svg'
import Image from 'next/image';
import { User } from '@/interface/User';
import { useRouter } from 'next/navigation'
import { response } from '@/constants/constants';


interface CardsProps {
	user: User;

}

const Cards: React.FC<CardsProps> = ({ user }) => {
	const router = useRouter();

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [userDetail, setUserDetail] = useState<User[]>([]);

	const showDetailsInfoUser = useCallback((id: Number) => {
		router.push(`/Card/${id}`);
	}, [router]);



	const openModalAndViewDetails = useCallback(() => {
		setIsModalVisible((prev) => !prev);
		setUserDetail(response.filter((response) => response.id === user.id));
	}, [user.id]);


	const title = useMemo(() => {
		return userDetail[0]?.firstName.concat(userDetail[0]?.lastName).length > 10;
	}, [userDetail]);

	console.log(userDetail)
	return (
		<>
			<Card
				title={`${user.firstName} ${user.lastName}`}
				bordered={false}
				className='w-[300px] h-[400px] m-[10px] border-[1px] border-solid cursor-pointer'
			>
				<Image onClick={() => showDetailsInfoUser(user.id)} src={iconUser} alt="imagen de prueba" height={150} width={150} />
				<p>{user?.role}</p>
				<Row className=' justify-end  gap-[5] '>
					<Col className='pb-[20px]' span={24} >
						<Rate allowHalf defaultValue={Math.random() * (5 - 1) + 1} />
					</Col>
					<Col className=''>
						<Button onClick={openModalAndViewDetails}
							className='w-[117px] h-[43px]  bg-custom-color-boton  text-[#0149BE]  hover:bg-custom-blue hover:text-custom-button-text ' >Lo Quiero!</Button>
					</Col>
				</Row>
			</Card>

			<Modal title={userDetail?.length > 0 && userDetail[0].role} open={isModalVisible}
				onCancel={() => setIsModalVisible(!isModalVisible)}
				onOk={() => setIsModalVisible(!isModalVisible)}

			>
				<Row gutter={[0, 15]} className='bg-gradient-to-bl from-white to-gray-200' >
					<Col span={24} >
						<Image src={iconUser} alt="imagen de prueba" className='w-[-webkit-fill-available] h-[150px] ' />
					</Col>
					{userDetail?.length > 0 && userDetail.map((user, index) => (
						<Col key={index} span={24} className=' flex gap-[25px] ' >
							<hr />
							<div className='flex flex-col'>
								{title
									? <h4 className='font-bold'>{`${user.firstName} `.concat(user.lastName).toUpperCase()}</h4>
									: <h2 className='font-bold text-lg pb-2 ' >{`${user.firstName} `.concat(user.lastName).toUpperCase()}</h2>
								}
								<p className={user?.status.toUpperCase() === 'ACTIVO' ? 'text-lime-400' : 'text-yellow-400'} >{user?.status.toUpperCase()}</p>
								<i>{user?.userType.toUpperCase()}</i>
							</div>
							<Timeline
								className='p-0'
								items={
									[{ children: user?.role }, { children: user?.email }, { children: user?.gender === 1 ? 'Masculino' : 'Femenino' }, { children: <i>Telefono: {user?.phone || 'Not found'} </i> },
									{
										children: <>Fecha Creación: {user?.createTime.split('T')[0]}  </>
									},
									{
										children: <>Fecha Actualización: {user?.updateTime.split('T')[0]}  </>
									}
									]} />
						</Col>
					))}
				</Row>
			</Modal>
		</>
	);
};

export default React.memo(Cards);
