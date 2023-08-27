import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { Context } from '../context/Context';
import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';

function Navbar({ home, modal }) {
	const router = useRouter();
	const { state } = useContext(Context);
	const [show, setShow] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

	const search = async(ev) => {
		ev.preventDefault();
		setShow(!show);
	}

	const dropdown = async(ev) => {
		ev.preventDefault();
		setShowDropdown(!showDropdown);
	}

	let totalItems = 0;
	state.cart?.map((item) =>
		totalItems = totalItems + item.quantity
	);

	const handleSubmit = e => {
		e.preventDefault();
		(window.innerWidth > 650) ? modal(e) : router.push('/basket');
	}

	return (
		<Wrapper>
			{show ? 
				<nav className={ home ? 'container white' : 'container' }>
					<div className='icon button laptop searchIcon'>
						<svg width="29" height="30" viewBox="0 0 29 30" fill={ home ? "#838383" : "white" } xmlns="http://www.w3.org/2000/svg">
							<path d="M28.8415 29.0411L20.3922 20.2885C22.5474 18.1356 23.8825 15.1677 23.8825 11.8944C23.8825 5.3355 18.526 0 11.9412 0C5.3565 0 0 5.3355 0 11.8944C0 18.4533 5.3565 23.7888 11.9412 23.7888C14.8316 23.7888 17.4843 22.7597 19.5518 21.052L28.0216 29.8261C28.133 29.9422 28.282 30 28.4315 30C28.5737 30 28.7153 29.9473 28.8256 29.842C29.0519 29.625 29.0587 29.2665 28.8415 29.0411ZM11.9412 22.656C5.9837 22.656 1.13726 17.8286 1.13726 11.8944C1.13726 5.96024 5.9837 1.1328 11.9412 1.1328C17.8988 1.1328 22.7452 5.96024 22.7452 11.8944C22.7452 17.8286 17.8982 22.656 11.9412 22.656Z"/>
						</svg>
					</div>

					<div className="search">
						<SearchBar text={ "Введите здесь ключевые слова для поиска" }/>
					</div>

					<div className='icon button laptop closeIcon' onClick={ search }>
						<svg width="25" height="25" viewBox="0 0 25 25" stroke={ home ? "#838383" : "white" } xmlns="http://www.w3.org/2000/svg">
							<path d="M1.00024 1L26.0002 26" stroke-width="2"/>
							<path d="M26 1L1 26" stroke-width="2"/>
						</svg>
					</div>
					
					<p className='button mobile closeButton' onClick={ search }>Закрыть</p>
				</nav>
					: 
				<nav className={ home ? 'container white' : 'container' }>
					<ul className='shop-menu laptop'>
						<li className={ home ? 'white item' : 'item' }>
							<Link href='/' className={ (router.pathname == "/") ? 'active' : 'notactive' }>Главная</Link>
						</li>
						<li className={ home ? 'white item' : 'item' }>
							<Link href='/shop' className={ (router.pathname == "/shop" || router.pathname == "/shop/catalog/[...slug]"  || router.pathname == "/shop/product/[...slug]") ? 'active' : 'notactive' }>Магазин</Link>
						</li>
						<li className={ home ? 'white item' : 'item' }>
							<Link href='/about' className={ (router.pathname == "/about") ? 'active' : 'notactive' }>О нас</Link>
						</li>
						<li className={ home ? 'white item' : 'item' }>
							<Link href='/services' className={ (router.pathname == "/services" || router.pathname == "/basket" || router.pathname == "/order") ? 'active' : 'notactive' }>Услуги</Link>
						</li>
						<li className={ home ? 'white item' : 'item' }>
							<Link href='/blog' className={ (router.pathname == "/blog" || router.pathname === "/blog/news/[slug]" || router.pathname === "/blog/articles/[slug]") ? 'active' : 'notactive' }>Блог</Link>
						</li>
						<li className={ home ? 'white item' : 'item' }>
							<Link href='/delivery' className={ (router.pathname == "/delivery") ? 'active' : 'notactive' }>Доставка</Link>
						</li>
						<li className={ home ? 'white item' : 'item' }>
							<Link href='/contacts' className={ (router.pathname == "/contacts") ? 'active' : 'notactive' }>Контакты</Link>
						</li>
					</ul>
					
					<div className='icons mobile'>
						<div className='icon button'>
							<Image src='/navbar-icons/search1.svg' alt="dropdown toggle" width={ 20 } height={ 20 } layout='fixed' onClick={ search }/>
						</div>

						<div className="shop-menu">
							<div className='icon button'>
								<div onClick={ handleSubmit }>
									<Image src='/navbar-icons/purchase.svg' alt="dropdown toggle" width={ 17 } height={ 20 } layout='fixed'/>
									<span className='purchased'></span>
								</div>
							</div>
							<div className='icon button'>
								<Image src='/navbar-icons/toggle.svg' alt="dropdown toggle" width={ 20 } height={ 14 } layout='fixed' onClick={ dropdown }/>
							</div>
						</div>
					</div>

					<div className='icons laptop'>
						<div className='icon button'>
							<svg width="29" height="30" viewBox="0 0 29 30" fill={ home ? "black" : "white" } xmlns="http://www.w3.org/2000/svg" onClick={ search }>
								<path d="M28.8415 29.0411L20.3922 20.2885C22.5474 18.1356 23.8825 15.1677 23.8825 11.8944C23.8825 5.3355 18.526 0 11.9412 0C5.3565 0 0 5.3355 0 11.8944C0 18.4533 5.3565 23.7888 11.9412 23.7888C14.8316 23.7888 17.4843 22.7597 19.5518 21.052L28.0216 29.8261C28.133 29.9422 28.282 30 28.4315 30C28.5737 30 28.7153 29.9473 28.8256 29.842C29.0519 29.625 29.0587 29.2665 28.8415 29.0411ZM11.9412 22.656C5.9837 22.656 1.13726 17.8286 1.13726 11.8944C1.13726 5.96024 5.9837 1.1328 11.9412 1.1328C17.8988 1.1328 22.7452 5.96024 22.7452 11.8944C22.7452 17.8286 17.8982 22.656 11.9412 22.656Z"/>
							</svg>
						</div>
						<div className='icon button'>
							<div onClick={ handleSubmit }>
								<svg width="22" height="30" viewBox="0 0 22 30" fill={ home ? "black" : "white" } xmlns="http://www.w3.org/2000/svg">
									<path d="M21.9981 27.5883L21.1675 6.50959C21.1482 6.01978 20.7548 5.63601 20.2718 5.63601H16.5233V5.60665C16.5233 2.51513 14.0455 0 11 0C7.95446 0 5.47674 2.51513 5.47674 5.60665V5.63601H1.72827C1.24529 5.63601 0.851893 6.01973 0.832518 6.50959L0.00188953 27.5883C-0.0232109 28.2248 0.202462 28.8284 0.637209 29.2877C1.07201 29.747 1.65707 30 2.28459 30H19.7155C20.343 30 20.928 29.747 21.3628 29.2877C21.7975 28.8283 22.0232 28.2248 21.9981 27.5883ZM6.34427 5.60665C6.34427 3.0007 8.43281 0.880626 11 0.880626C13.5672 0.880626 15.6557 3.0007 15.6557 5.60665V5.63601H6.34427V5.60665ZM20.7372 28.6775C20.4676 28.9624 20.1046 29.1194 19.7155 29.1194H2.28459C1.89536 29.1194 1.5325 28.9625 1.26281 28.6776C0.993127 28.3927 0.853165 28.0184 0.868781 27.6235L1.69935 6.54481C1.69999 6.52896 1.71265 6.51663 1.72827 6.51663H5.47674V9.36399C5.47674 9.60716 5.67095 9.80431 5.9105 9.80431C6.15006 9.80431 6.34427 9.60716 6.34427 9.36399V6.51663H15.6557V9.36399C15.6557 9.60716 15.8499 9.80431 16.0895 9.80431C16.3291 9.80431 16.5233 9.60716 16.5233 9.36399V6.51663H20.2718C20.2873 6.51663 20.3 6.52896 20.3006 6.54481L21.1313 27.6235C21.1468 28.0183 21.0069 28.3926 20.7372 28.6775Z"/>
								</svg>
								<span className='purchased'>{totalItems}</span>
							</div>
						</div>
					</div>
				</nav>
			}
				
				{showDropdown ? <Dropdown close={dropdown}/> : null}
			</Wrapper>
  	);
}

const Wrapper = styled.header`
	width: 100%;	
	height: 6.25rem;
	position: fixed;
	top: 0;
	z-index: 1;

	@keyframes animate3 {
		0% {
			width: 25%;
			left: -0.3125rem;
		} 100% {
			width: 100%;
			left: 0;
		}
	}
	
	.container {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--clr-black);
		padding: 1.5625rem 0; 
	}

	.mobile,
	.search_icon {
		display: none;
	}

	.shop-menu,
	.icons.laptop {
		display: flex;
	}

	.item {
		position: relative;
		line-height: 1.875rem;
		font-size: 20px;
		color: var(--clr-white);
		margin-right: 4.5rem;
	}

	.notactive:after,
	.active:after {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: -0.625rem;
		left: 0;
	}

	.active:after {
		background-color: var(--clr-primary-1);
	}

	.notactive:hover:after {
		background-color: var(--clr-primary-1);
		animation: animate3 0.3s linear;
	}

	.white {
		color: var(--clr-black);
		background-color: var(--clr-white);
	}

	.icons {
		padding-left: 2.210625rem;
	}

	.icon {
		position: relative;
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

	.search input {
		width: 35rem;
		height: 3.125rem;
		border: none;
	}
	
	.search input::placeholder {
		font-size: 20px;
		color: var(--clr-primary-2);
	}

	.searchIcon {
		padding: 0 1.09375vw 0 13.54167vw;
	}

	.closeIcon {
		padding: 0 10.6771vw 0 3.125vw;
	}

	@media (max-width: 1440px) {
		height: 5rem;

		.item {
			font-size: 18px;
			margin-right: 4.507rem;
		}
	}
	
	@media (max-width: 1220px) {
		.item {
			margin-right: 3.24267rem;
		}

		.icons {
			padding: 0;
		}

		.icon {
			padding: 0 20px 0 3px;
		}
	}

	@media (max-width: 992px) {
		height: 3.125rem;
		
		.container {
			justify-content: space-between;
			padding: 0.625rem 5.55556vw;
			background-color: var(--clr-white);
		}
		
		.laptop,
		.icons.laptop {
			display: none;
		}

		.mobile {
			display: block;
		}
		
		.search_icon,
		.mobile.icons {
			display: flex;
		}

		.mobile.icons {
			width: 100%;
		}

		.icons {
			justify-content: space-between;
		}

		.icons,
		.icon {
			padding: 0;
		}

		.search input {
			height: 1.875rem;
			width: 65.27778vw;
			border: 1px solid var(--clr-primary-4);;
		}

		.search input::placeholder {
			font-size: 12px;
			color: var(--clr-primary-4);
		}
	
		.search .search_icon {
			width: 1.875rem;
			height: 1.875rem;
		}
	
		.closeButton {
			font-size: 15px;
			margin: 0.3125rem 0;
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