import { useState, useContext  } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import { Context } from '../context/Context';
import styles from '../styles/footer.module.css';

export default function Footer({ modal }) {
	const { state, dispatch } = useContext(Context);
	const router = useRouter();
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

		if (detail.email !== undefined && detail !== '') {
			const inCart = state.subscription.find((item) => 
				item.email === detail.email) ?
					true
						: 
					false;
			
			if (!inCart) {
				dispatch({
					type: 'SUBSCRIBE',
					payload: detail,
				});
				modal(e);
			}
		}
	}

	const handleClick = async(ev) => {
		ev.preventDefault();
		dispatch({
			type: 'SAVE_PAGE',
			payload: ev.target.id
		})
		router.push('/shop/catalog/1');
	}

	return (
		<footer className={ styles.footer }>
			<div className={ styles.container }>
				<div className={ styles.link_box }>
					<div className={ styles.contents }>
						<div className={ isActive1 ? styles.active : null }>
							<div className={ styles.content }>
								<div className={ styles.header }>
									<p className={ styles.title }>НАВИГАЦИЯ</p>
									<div className={ [styles.mobile, styles.arrow].join(" ") } onClick={ handleToggle1 }>
										<Image src='/footer-icons/arrow.svg' alt="message icon" width={ 20 } height={ 10 } layout='fixed' />
									</div>
								</div>

								<ul className={ styles.menu }>
									<li className={ styles.item }>
										<Link href='/'>Главная</Link>
									</li>
									<li className={ styles.item }>
										<Link href='/shop'>Магазин</Link>
									</li>
									<li className={ styles.item }>
										<Link href='/about'>О нас</Link>
									</li>
									<li className={ styles.item }>
										<Link href='/services'>Услуги</Link>
									</li>
									<li className={ styles.item }>
										<Link href='/blog'>Блог</Link>
									</li>
									<li className={ styles.item }>
										<Link href='/delivery'>Доставка</Link>
									</li>
									<li className={ styles.item }>
										<Link href='/contacts'>Контакты</Link>
									</li>
								</ul>
							</div>
						</div>
						
						<div className={ isActive2 ? styles.active : null }>
							<div className={ [styles.content, styles.middle].join(" ") }>
								<div className={ styles.header }>
									<p className={ styles.title }>ИНТЕРНЕТ-МАГАЗИН</p>
									<div className={ [styles.mobile, styles.arrow].join(" ") } onClick={handleToggle2}>
										<Image src='/footer-icons/arrow.svg' alt='message icon' width={20} height={10} layout='fixed' />
									</div>
								</div>

								<ul className={ styles.menu }>
									<li id='1' className={ styles.item } onClick={ handleClick }>
										<Link id='1' href='/'>ЧЕКОВАЯ ЛЕНТА</Link>
									</li>
									<li id='2' className={ styles.item } onClick={ handleClick }>
										<Link id='2' href='/'>ТЕРМОЭТИКЕТКИ</Link>
									</li>
									<li id='3' className={ styles.item } onClick={ handleClick }>
										<Link id='3' href='/'>СЧЁТЧИКИ ПОДСЧЁТА ПОСЕТИТЕЛЕЙ</Link>
									</li>
									<li id='4' className={ styles.item } onClick={ handleClick }>
										<Link id='4' href='/'>ПРОТИВОКРАЖНОЕ ОБОРУДОВАНИЕ</Link>
									</li>
									<li id='5' className={ styles.item } onClick={ handleClick }>
										<Link id='5' href='/'>ОБОРУДОВАНИЕ ДЛЯ АВТОМАТИЗАЦИИ</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					
					<div className={ styles.content }>
						<div className={ styles.header }>
							<p className={ styles.title }>ОСТАВАЙТЕСЬ НА СВЯЗИ</p>
						</div>

						<p className={ styles.item }>Подпишитесь на нашу рассылку, чтобы узнавать об акциях, скидках и последних новостях от ЧЕК МАРКЕТ</p>
						<form className={ styles.message } onSubmit={ handleSubmit }>
							<input 
								type='email'
								id='email'
								placeholder='Введите ваш e-mail адрес'
								onChange={ e => setDetail({ email: e.target.value }) }
								value={ detail.email }
							/>
							<button className={ styles.icon }>
								<Image src='/footer-icons/message.svg' alt='message icon' width={ 25 } height={ 20 } layout='fixed' />
							</button>
						</form>
						<div className={ styles.mobile }>
							<a className={ styles.item }>+7 (707) 907-07-17</a>
							<div className={ styles.social_box }>
								<div className={ styles.social_icon }>
									<Image src='/footer-icons/whatsapp.svg' alt='whatsapp icon' width={ 20 } height={ 20 } layout='fixed' />
								</div>
								<div className={styles.social_icon}>
									<Image src='/footer-icons/instagram.svg' alt='instagram icon' width={ 20 } height={ 20 } layout='fixed' />
								</div>
								<div className={styles.social_icon}>
									<Image src='/footer-icons/telegram.svg' alt='telegram icon' width={ 20 } height={ 17 } layout='fixed' />
								</div>
							</div>
						</div>
						<div className={ styles.laptop }>
							<div className={ styles.athenaplus }>
								<p className={styles.item}>Сайт создан</p> 
								<a href='http://athenaplus.kz/' className={ [styles.item, styles.athenaplus_url].join(" ") }>athenaplus.kz</a>
							</div>
						</div>
					</div>
				</div>

				<div className={ [styles.social_box, styles.laptop].join(" ") }>
					<div className={ styles.social_icon }>
						<Image src='/footer-icons/whatsapp.svg' alt='whatsapp icon' width={ 20 } height={ 20 } layout='fixed' />
					</div>
					<div className={styles.social_icon}>
						<Image src='/footer-icons/instagram.svg' alt='instagram icon' width={ 20 } height={ 20 } layout='fixed' />
					</div>
					<div className={styles.social_icon}>
						<Image src='/footer-icons/telegram.svg' alt='telegram icon' width={ 20 } height={ 17 } layout='fixed' />
					</div>
				</div>
				
				<div className={ styles.policy_box }>
					<p className={ styles.item }>© 2012-{ new Date().getFullYear() } ЧЕК МАРКЕТ. Все права защищены</p>
					<a href='tel:+77759764165' className={ [styles.item, styles.laptop].join(" ") }>+7 (707) 907-07-17</a>
					<div className={ styles.mobile }>
						<div className={ styles.athenaplus }>
							<p className={styles.item}>Сайт создан</p> 
							<a href='http://athenaplus.kz/' className={ [styles.item, styles.athenaplus_url].join(" ") }>athenaplus.kz</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
