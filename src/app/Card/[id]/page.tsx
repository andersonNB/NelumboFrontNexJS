'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, Row, Col, Button, Timeline } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import iconUser from '../../../../public/iconUser.svg';
import { CustomCarousel } from '../../../components/Carousel';
import { response } from '../../../constants/constants';
import { User } from '../../../interface/User';
import usersAvatar from '../../../../public/images/usersAvatar.svg';
import usersAvatarMan from '../../../../public/images/usersAvatarMan.svg';
import usersAvatarWoman from '../../../../public/images/usersAvatarWoman.svg';


const CardDetail = ({ params }: { params: { id: string } }) => {


	const data = [
		{ id: 1, avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png' },
		{ id: 2, avatar: usersAvatar.src }, // Uso de src para la imagen importada
		{ id: 3, avatar: usersAvatarMan.src },
		{ id: 4, avatar: usersAvatarWoman.src },
	]

	const [user, setUser] = useState<User[]>([]);
	const [listImage, setListImage] = useState(data);
	const [chooseImage, setChooseImage] = useState(data[0].id)
	const [image, setImage] = useState([])
	const router = useRouter();

	useEffect(() => {

		const filterUser = response !== undefined &&
			response?.filter((user) => user.id === Number(params.id))
		setUser(filterUser)
	}, [])

	useEffect(() => {

		const showImage = listImage.filter((image) => image.id === chooseImage)
		setImage(showImage)
	}, [chooseImage])


	console.log(user)

	const goHome = () => router.push('/')



	const title = user[0]?.firstName.concat(user[0]?.lastName).length > 10;

	return (
		<Row className='flex justify-start h-[80vh] w-[100%] m-[10px] gap-[20px] ' >
			<Col span={4}>
				<CustomCarousel dataImage={listImage} setIdImage={setChooseImage} />
			</Col>
			<Col span={7} className='flex flex-col justify-center'>
				<Image src={image[0]?.avatar} alt="imagen de prueba" height={642} width={429} />
			</Col>
			<Col className='flex flex-col justify-center w-[49%]'>
				<Card
					title={title ? <h4>{user[0]?.firstName || 'No firstName'} {user[0]?.lastName || 'No lastName'}</h4> : <h2 className='text-4xl ' >{user[0]?.firstName || 'No firstName'} {user[0]?.lastName || 'No lastName'}</h2>}
					bordered={false}
					className='w-[100%] h-[400px] m-[10px] border-[1px] border-solid border-[#ccc] shadow-[5px] cursor-pointer'>

					<p className='text-2xl mb-[10px]' >{user[0]?.role || 'unknown rol'}</p>
					<Timeline
						className='p-0'
						items={
							[{ children: user[0]?.email }, { children: user[0]?.gender === 1 ? 'Masculino' : 'Femenino' }, { children: <i>Telefono: {user?.phone || 'Not found'} </i> },
							{
								children: <>Fecha Creación: {user[0]?.createTime.split('T')[0]}  </>
							},
							{
								children: <>Fecha Actualización: {user[0]?.updateTime.split('T')[0]}  </>
							}
							]} />
					<Button onClick={goHome} className='h-[40px] w-[250px] bg-custom-color-boton  text-[#0149BE] font-bold hover:bg-custom-blue hover:text-custom-button-text ' icon={<ArrowLeftOutlined />} >Regresar</Button>
				</Card>
			</Col>

		</Row>
	)
}

export default CardDetail;
