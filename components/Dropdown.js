import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

function Dropdown({ close }) {
  	return (
		<Wrapper>
			<div className='dropdown-header'>
				<div>
					<div className='dropdown-icon'>
						<Image src='/navbar-icons/logo.svg' alt="чекмаркет logo" width={32} height={30} layout='fixed' />
					</div>
					<p className='dropdown-text'>+7 (707) 907-07-17</p>
				</div>
				<div className='dropdown-icon'>
					<Image src='/navbar-icons/close-mobile1.svg' alt="close button" width={15} height={15} layout='fixed' onClick={close} />
				</div>
			</div>

			<ul className='dropdown-menu'>
				<li className='dropdown-item'>
					<div>
						<Image src='/dropdown-icons/shop.svg' alt="Shop icon" width={15} height={15} layout='fixed' />
						<Link href="/shop">Магазин</Link>
					</div>
					<Image src='/dropdown-icons/arrow.svg' alt="open arrow" width={7} height={10} layout='fixed' />
				</li>
				
				<li className='dropdown-item'>
					<div>
						<Image src='/dropdown-icons/home.svg' alt="Home icon" width={17} height={15} layout='fixed' />
						<Link href="/">Главная</Link>
					</div>
					<Image src='/dropdown-icons/arrow.svg' alt="open arrow" width={7} height={10} layout='fixed' />
				</li>
				
				<li className='dropdown-item'>
					<div>
						<Image src='/dropdown-icons/about.svg' alt="About icon" width={15} height={15} layout='fixed' />
						<Link href="/about">О нас</Link>
					</div>
					<Image src='/dropdown-icons/arrow.svg' alt="open arrow" width={7} height={10} layout='fixed' />
				</li>
				
				<li className='dropdown-item'>
					<div>
						<Image src='/dropdown-icons/services.svg' alt="Services icon" width={16} height={15} layout='fixed' />
						<Link href="/services">Услуги</Link>
					</div>
					<Image src='/dropdown-icons/arrow.svg' alt="open arrow" width={7} height={10} layout='fixed' />
				</li>
				
				<li className='dropdown-item'>
					<div>
						<Image src='/dropdown-icons/blog.svg' alt="Blog icon" width={14} height={15} layout='fixed' />
						<Link href="/blog">Блог</Link>
					</div>
					<Image src='/dropdown-icons/arrow.svg' alt="open arrow" width={7} height={10} layout='fixed' />
				</li>
				
				<li className='dropdown-item'>
					<div>
						<Image src='/dropdown-icons/delivery.svg' alt="Delivery icon" width={17} height={16} layout='fixed' />
						<Link href="/delivery">Доставка</Link>
					</div>
					<Image src='/dropdown-icons/arrow.svg' alt="open arrow" width={7} height={10} layout='fixed' />
				</li>
				
				<li className='dropdown-item'>
					<div>
						<Image src='/dropdown-icons/contacts.svg' alt="Contacts icon" width={15} height={15} layout='fixed' />
						<Link href="/contacts">Контакты</Link>
					</div>
					<Image src='/dropdown-icons/arrow.svg' alt="open arrow" width={7} height={10} layout='fixed' />
				</li>
			</ul>
		</Wrapper>
  	);
}

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	background: var(--clr-white);
	padding: 0 5.55556vw 4.375rem;
	z-index: 1;

	.dropdown-header,
	.dropdown-header div {
		display: flex;
		align-items: center;
	}

	.dropdown-header {
		justify-content: space-between;
		height: 1.875rem;
		margin: 0.625rem 0;
	}
	
	.dropdown-text,
	.dropdown-link {
		font-size: 15px;
	}
	
	.dropdown-text {
		font-weight: 400;
		margin-left: 3.6111vw;
	}
	
	.dropdown-menu {
		margin-top: 1.25rem;
	}

	.dropdown-item {
		height: 3.125rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--clr-primary-4);
		padding: 0.875rem 0.625rem 1rem 0.9375rem;
	}
	
	.dropdown-item a {
		font-weight: 600;
		margin-left: 2.778vw;
	}
`

export default Dropdown;