'use client'
import React from 'react';
import { Avatar, List } from 'antd';

const data = Array.from({
	length: 4,
}).map((_, i) => ({
	avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
}));

export const CustomCarousel = () => {
	return (
		<List
            className='flex flex-col justify-center items-center'
			itemLayout='vertical'
			size='large'
			dataSource={data}
			renderItem={(item) => (
				<List.Item key={item.title}>
					<List.Item.Meta avatar={<Avatar src={item.avatar} className='w-[127px] h-[127px]' />} />
					{item.content}
				</List.Item>
			)}
		/>
	);
};
