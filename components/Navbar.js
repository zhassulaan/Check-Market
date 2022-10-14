import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

function Navbar() {
	const [show, setShow] = useState(false);

	const search = async(ev) => {
		ev.preventDefault();
		setShow(!show);
	}

	return (
		show ? 
			<Wrapper>
				<div className='icon button laptop searchIcon'>
					<Image src='/navbar-icons/search-laptop2.svg' alt="close button" width={29} height={30} layout='fixed' />
				</div>

				<div className="search">
					<SearchBar/>
					<div className='icon button mobile searchIcon'>
						<Image src='/navbar-icons/search-mobile2.svg' alt="close button" width={20} height={20} layout='fixed' />
					</div>
				</div>

				<div className='icon button laptop closeIcon'>
					<Image src='/navbar-icons/close-laptop2.svg' alt="close button" width={25} height={25} layout='fixed' onClick={search} />
				</div>
				
				<p className='button mobile closeButton' onClick={search}>Закрыть</p>
			</Wrapper>
				: 
			<Wrapper>
				<ul className='shop-menu laptop'>
					<li className='item'><a href='/'>Главная</a></li>
					<li className='item'><a href='/shop'>Магазин</a></li>
					<li className='item'><a href='/about'>О нас</a></li>
					<li className='item'><a href='/services'>Услуги</a></li>
					<li className='item'><a href='/blog'>Блог</a></li>
					<li className='item'><a href='/delivery'>Доставка</a></li>
					<li className='item'><a href='/contacts'>Контакты</a></li>
				</ul>

						{/* <div className='icon'>
								<Image src='/navbar-icons/logo.svg' alt="чекмаркет logo" width={32} height={30} layout='fixed' onClick={search} />
							</div>
							<p className='text'>+7 (707) 907-07-17</p>
							<div className='icon'>
								<Image src='/navbar-icons/close1.svg' alt="close button" width={15} height={15} layout='fixed' onClick={search} />
							</div>
						</div> */}
						
				<div className='icons mobile'>
					<div className='icon button'>
						<Image src='/navbar-icons/search-mobile1.svg' alt="dropdown toggle" width={20} height={20} layout='fixed' onClick={search}/>
					</div>

					<div className="shop-menu">
						<div className='icon button'>
							<Image src='/navbar-icons/purchase-mobile1.svg' alt="Search icon" width={17} height={20} layout='fixed' />
							<span className='purchased'></span>
						</div>
						<div className='icon button'>
							<Image src='/navbar-icons/toggle.svg' alt="dropdown toggle" width={20} height={14} layout='fixed' />
						</div>
					</div>
				</div>

				<div className='icons laptop'>
					<div className='icon button'>
						<Image src='/navbar-icons/search-laptop1.svg' alt="Purchase icon" width={29} height={30} layout='fixed' onClick={search} />
					</div>
					<div className='icon button'>
						<Image src='/navbar-icons/purchase-laptop1.svg' alt="Search icon" width={22} height={30} layout='fixed' />
						<span className='purchased'>
							{0}
						</span>
					</div>
				</div>
			</Wrapper>
  	);
}

const Wrapper = styled.nav`
	max-width: 120rem;
	height: 6.25rem;
	display: flex;
	justify-content: center;
	padding: 0 auto;

	.mobile {
		display: none;
	}

	.shop-menu,
	.laptop {
		display: flex;
	}

	.shop-menu {
		margin: 0;
		padding: 0;
	}

	.item {
		font-size: 20px;
		margin: auto 0;
		padding-right: 3.75vw;
	}

	.icons {
		padding-left: 1.84219vw;
	}

	.icon {
		position: relative;
		margin: auto 0;
		padding: 0 28px 0 3px;
	}

	.purchased {
		position: absolute;
		top: 20px;
		left: 10px;
		width: 20px;
		height: 20px;
		background: var(--clr-primary-1);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 0.75rem;
		color: var(--clr-white);
	}

	.searchIcon {
		padding: 0 1.09375vw 0 13.54167vw;
	}

	.closeIcon {
		padding: 0 10.6771vw 0 3.125vw;
	}

	@media (max-width: 992px) {
		height: 3.125rem;
		justify-content: space-between;
		padding: 0 5.55556vw;
		
		.mobile {
			display: block;
		}

		.mobile.icons {
			display: flex;
			width: 100%;
		}
		
		.laptop {
			display: none;
		}

		.icons {
			justify-content: space-between;
		}

		.icons,
		.icon {
			padding: 0;
		}

		.search {
			display: flex;
		}

		.searchIcon {
			width: 1.875rem;
			height: 1.875rem;
			background: var(--clr-primary-1);
			padding: 0.3125rem;
			margin-left: -1.875rem;
		}

		.closeButton {
			font-size: 15px;
		}

		.shop-menu .icon {
			margin-left: 6.3889vw;
		}

		.purchased {
			top: 14px;
			left: 11px;
			width: 11px;
			height: 11px;
		}
	}
`

export default Navbar;