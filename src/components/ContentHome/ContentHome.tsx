'use client'
import { memo, useState, useEffect } from 'react';
import { Col, Row, Input, Select } from 'antd';
import { response } from '../../constants/constants';
import Cards from '../Cards/Cards';
import { SearchOutlined } from '@ant-design/icons';
import { User } from '@/interface/User';


// const CustomInput = styled(Input)`
// 	width: 563px;
// 	height: 44px;
// 	background: #ffffff 0% 0% no-repeat padding-box;
// 	border: 1px solid #d8e0e9;
// 	border-radius: 24px;
// 	opacity: 1;
// `;

// const ModalCol = styled(Col)`
// 	background: #ccc;
// `;

// const CustomModal = styled(Modal)`
// 	.ant-modal-content {
// 		padding: 0;
// 	}
// `;

const ContentHome = ({ valueChecked }:{valueChecked:any}) => {
	const [infoUser, setinfoUser] = useState<User[]>(response);

	// const { getInfoUser, infoUser: responseData } = useInfoUser();

	// useEffect(() => {
	// 	const resolveInfoUser = async () => {
	// 		const response = await getInfoUser();
	// 		setinfoUser(response.items);
	// 	};

	// 	resolveInfoUser();
	// }, []);

	console.log(valueChecked)
	useEffect(() => {

		if (valueChecked?.length > 0) {
			const newInfoFiltered = response.filter(objeto => valueChecked.includes(objeto.role));
			setinfoUser(newInfoFiltered);
		} else {
			setinfoUser(response);
		}
		// const responseChecked = valueChecked?.length > 0 ? response?.filter((user) => (user.role.toUpperCase().includes(valueChecked[0].toUpperCase()))): response;
	}, [valueChecked])


	const filterInfoUser = async (text: any) => {
		const { value } = text.target;
		console.log(value)
		const responseFilter = await response?.filter((user) => (user.firstName.toUpperCase().includes(value.toUpperCase()) || user.role.toUpperCase().includes(value.toUpperCase())));
		setinfoUser(responseFilter);
	};

	return (
		<div>
			<Row>
				<Col span={24}>
					<div className='w-[563px] '>
						<Input
							onChange={filterInfoUser}
							placeholder='Encuentra el producto que necesitas'
							prefix={<SearchOutlined />}
							className='w-[563px] h-[44px] bg-white bg-no-repeat border-[1px] border-solid border-[#d8e0e9] opacity-[1] rounded-[24px]'
						/>
						{/* <Select placeholder='Todas las categorias' className='absolute left-[328px]'>
							<Select.Option>Categoria1</Select.Option>
							<Select.Option>Categoria2</Select.Option>
							<Select.Option>Categoria3</Select.Option>
						</Select> */}
					</div>

				</Col>
				{infoUser?.length > 0 &&
					infoUser.map((user, index) => (
						<Col key={index} >
							<Cards user={user} />
						</Col>
					))}
			</Row>
		</div>
	);
};

export default memo(ContentHome);
