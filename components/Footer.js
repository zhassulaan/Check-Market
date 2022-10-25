import { useState, useContext  } from 'react';
import Image from 'next/image';
import { Context } from '../context/Context';
import Scroll from './ScrollToTop';
import styles from '../styles/footer.module.css';

function Footer({ modal }) {
	const { state, dispatch } = useContext(Context);
	const [detail, setDetail] = useState('');

	const [isActive1, setActive1] = useState(false);
	const [isActive2, setActive2] = useState(false);

	const handleToggle1 = () => {
    	setActive1(!isActive1);
 	};
	const handleToggle2 = () => {
    	setActive2(!isActive2);
 	};

 	const handleSubmit = e => {
		e.preventDefault();

		if (detail.email !== undefined && detail !== "") {
			const inCart = state.subscription.find((item) => 
				item.email === detail.email) ?
					true
						: 
					false;
			
			if (!inCart) {
				dispatch({
					type: "SUBSCRIBE",
					payload: detail,
				});
				modal(e);
			}
		}
	}

	return (
		<footer className={styles.footer}>
			<Scroll/>
			<div className={styles.container}>
				<div className={styles.link_box}>
					<div className={styles.contents}>
						<div className={isActive1 ? styles.active : null}>
							<div className={styles.content}>
								<div className={styles.header}>
									<p className={styles.title}>НАВИГАЦИЯ</p>
									<div className={[styles.mobile, styles.arrow].join(" ")} onClick={handleToggle1}>
										<Image src='/footer-icons/arrow.svg' alt="message icon" width={20} height={10} layout='fixed' />
									</div>
								</div>

								<ul className={styles.menu}>
									<li className={styles.item}>
										<a href="/">Главная</a>
									</li>
									<li className={styles.item}>
										<a href="/shop">Магазин</a>
									</li>
									<li className={styles.item}>
										<a href="/about">О нас</a>
									</li>
									<li className={styles.item}>
										<a href="/services">Услуги</a>
									</li>
									<li className={styles.item}>
										<a href="/blog">Блог</a>
									</li>
									<li className={styles.item}>
										<a href="/delivery">Доставка</a>
									</li>
									<li className={styles.item}>
										<a href="/contacts">Контакты</a>
									</li>
								</ul>
							</div>
						</div>
						
						<div className={isActive2 ? styles.active : null}>
							<div className={[styles.content, styles.middle].join(" ")}>
								<div className={styles.header}>
									<p className={styles.title}>ИНТЕРНЕТ-МАГАЗИН</p>
									<div className={[styles.mobile, styles.arrow].join(" ")} onClick={handleToggle2}>
										<Image src='/footer-icons/arrow.svg' alt="message icon" width={20} height={10} layout='fixed' />
									</div>
								</div>

								<ul className={styles.menu}>
									<li className={styles.item}>
										<a href="/">ЧЕКОВАЯ ЛЕНТА</a>
									</li>
									<li className={styles.item}>
										<a href="/">ТЕРМОЭТИКЕТКИ</a>
									</li>
									<li className={styles.item}>
										<a href="/">СЧЁТЧИКИ ПОДСЧЁТА ПОСЕТИТЕЛЕЙ</a>
									</li>
									<li className={styles.item}>
										<a href="/">ПРОТИВОКРАЖНОЕ ОБОРУДОВАНИЕ</a>
									</li>
									<li className={styles.item}>
										<a href="/">ОБОРУДОВАНИЕ ДЛЯ АВТОМАТИЗАЦИИ</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					
					<div className={styles.content}>
						<div className={styles.header}>
							<p className={styles.title}>ОСТАВАЙТЕСЬ НА СВЯЗИ</p>
						</div>

						<p className={styles.item}>Подпишитесь на нашу рассылку, чтобы узнавать об акциях, скидках и последних новостях от ЧЕК МАРКЕТ</p>
						<form className={styles.message} onSubmit={ handleSubmit }>
							<input 
								type='email'
								id='email'
								placeholder='Введите ваш e-mail адрес'
								onChange={e => setDetail({email: e.target.value})}
								value={detail.email}
							/>
							<button className={styles.icon}>
								<Image src='/footer-icons/message.svg' alt="message icon" width={25} height={20} layout='fixed' />
							</button>
						</form>
						<div className={styles.mobile}>
							<a className={styles.item}>+7 (707) 907-07-17</a>
							<div className={styles.social_box}>
								<div className={styles.social_icon}>
									<a href="">
										<Image src='/footer-icons/whatsapp.svg' alt="message icon" width={20} height={20} layout='fixed' />
									</a>
								</div>
								<div className={styles.social_icon}>
									<a href="">
										<Image src='/footer-icons/instagram.svg' alt="message icon" width={20} height={20} layout='fixed' />
									</a>
								</div>
								<div className={styles.social_icon}>
									<a href="">
										<Image src='/footer-icons/telegram.svg' alt="message icon" width={20} height={17} layout='fixed' />
									</a>
								</div>
							</div>
						</div>
						<p className={[styles.item, styles.athenaplus, styles.laptop].join(" ")}>Сайт создан <a href="http://athenaplus.kz/">athenaplus.kz</a></p>
					</div>
				</div>

				<div className={[styles.social_box, styles.laptop].join(" ")}>
					<div className={styles.social_icon}>
						<a href="">
							<Image src='/footer-icons/whatsapp.svg' alt="message icon" width={20} height={20} layout='fixed' />
						</a>
					</div>
					<div className={styles.social_icon}>
						<a href="">
							<Image src='/footer-icons/instagram.svg' alt="message icon" width={20} height={20} layout='fixed' />
						</a>
					</div>
					<div className={styles.social_icon}>
						<a href="">
							<Image src='/footer-icons/telegram.svg' alt="message icon" width={20} height={17} layout='fixed' />
						</a>
					</div>
				</div>
				
				<div className={styles.policy_box}>
					<p className={styles.item}>© 2012-2021 ЧЕК МАРКЕТ. Все права защищены</p>
					<a href="tel:+77759764165" className={[styles.item, styles.laptop].join(" ")}>+7 (707) 907-07-17</a>
					<p className={[styles.item, styles.athenaplus, styles.mobile].join(" ")}>Сайт создан <a href="http://athenaplus.kz/">athenaplus.kz</a></p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;