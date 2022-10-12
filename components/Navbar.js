import React from 'react';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  	return (
	 	<nav className={styles.container}>
			<ul className={styles.links}>
				<li className={styles.item}><a href='/'>Главная</a></li>
				<li className={styles.item}><a href='/shop'>Магазин</a></li>
				<li className={styles.item}><a href='/about'>О нас</a></li>
				<li className={styles.item}><a href='/services'>Услуги</a></li>
				<li className={styles.item}><a href='/blog'>Блог</a></li>
				<li className={styles.item}><a href='/delivery'>Доставка</a></li>
				<li className={styles.item}><a href='/contacts'>Контакты</a></li>
			</ul>

			<div className={styles.icons}>
				<div className={styles.icon}>
					<Image src='/navbar-icons/search.svg' alt="Purchase icon" width={29} height='30px' layout='fixed' />
				</div>
				<div className={styles.icon}>
					<Image src='/navbar-icons/purchase.svg' alt="Search icon" width={22} height='30px' layout='fixed' />
				</div>
			</div>
		</nav>
  	);
}

export default Navbar;