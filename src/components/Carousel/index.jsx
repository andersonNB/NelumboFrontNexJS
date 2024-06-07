'use client';
import React from 'react';
import { Avatar, List } from 'antd';
import iconUser from '../../../public/iconUser.svg';
export const CustomCarousel = ({ dataImage = iconUser , setIdImage}) => {

	const onChangeImage = (idImage)=>{
		console.log(idImage)
		setIdImage(idImage)
	}

	return (
		<List
			className='flex flex-col overflow-y-auto h-[500px] '
			itemLayout='vertical'
			size='large'
			dataSource={dataImage}
			renderItem={(item) => (
				<List.Item key={item.title}>
					<List.Item.Meta
						avatar={
							<Avatar 
							src={item?.avatar || 'https://via.placeholder.com/150'} className='w-[127px] h-[127px]'
							onClick={()=>onChangeImage(item?.id)}
							 />
						}
					/>
					{item.content}
				</List.Item>
			)}
		/>
	);
};
