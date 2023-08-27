import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import BasketModal from '../components/Modals/BasketModal';
import SubscribeModal from '../components/Modals/SubscribeModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import styles from '../styles/about.module.css';

export default function About() {
	// SUBSCRIBE AND BASKET MODAL
	const [subscribeModal, setSubscribeModal] = useState(false);
	const [basketModal, setBasketModal] = useState(false);
	const subscribe = async(ev) => {
		ev.preventDefault();
		setSubscribeModal(!subscribeModal);
	}
	const basket = async(ev) => {
		ev.preventDefault();
		setBasketModal(!basketModal);
	}

	return (
		<div>
			<Head>
				<title>ЧЕКМАРКЕТ</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
				<meta name="msapplication-TileColor" content="#da532c"/>
				<meta name="theme-color" content="#ffffff"/>
			</Head>

			<div>
				{ basketModal ? <BasketModal close={ basket }/> : null };
				{ subscribeModal ? <SubscribeModal modal={ subscribe }/> : null };

				<Navbar modal={ basket }/>

				<div className={ styles.logo_container }>
					<div className={ styles.logo_box }>
		           		<img src="/home/logo.svg" alt="logo" className={ styles.logo }/>
					</div>
				</div>

				<div className={ styles.container }>
					<div className={ styles.header }>
						<h3 className={ styles.title }>О нас</h3>

						<div className={ styles.icons }>
							<Image src='/modal/rectangle.svg' alt='rectangle' width={ 15 } height={ 15 } layout='fixed' />
							<Image src='/modal/triangle.svg' alt='triangle' width={ 40 } height={ 15 } layout='fixed' />
							<Image src='/modal/ellipse.svg' alt='ellipse' width={ 15 } height={ 15 } layout='fixed' />
						</div>

						<p className={ styles.subtitle }>Узнайте подробнее о ЧЕК МАРКЕТ</p>
					</div>

					<div className={ styles.content }>
						<p className={ styles.text }>Наша компания создана с целью помогать. Помогать вам в решении ваших задач и проблем. Основной принцип работы нашей компании – подбор оптимальных решений по безопасности предприятий торговли и оказание профессиональных услуг по автоматизации производства, установке и обслуживанию оборудования, а также предоставление качественного расходного материала!</p>
						<br className={ styles.br }/>

						<p className={ styles.text }>В настоящее время мы предлагаем широкий ассортимент решений и качественного оборудования и расходного материала в следующих категориях:</p>
						<br className={ styles.br }/>

						<ul className={ styles.options }>
							<li>
								<p className={ styles.text }>противокражные системы (антенны, датчики, сейфера, защитные этикетки, тросики)</p>
								<br className={ styles.br }/>
							</li>
							<li>
								<p className={ styles.text }>автоматизация торговли (принтера этикеток, принтера чеков, сканера штрих кодов, моноблоки и.т.д)</p>
								<br className={ styles.br }/>
							</li>
							<li>
								<p className={ styles.text }>системы подсчёта посетителей (для маркетинговых исследований)</p>
								<br className={ styles.br }/>
							</li>
							<li>
								<p className={ styles.text }>расходный материал (чековая лента для принтеров и кассовых аппаратов, этикет лента, бумага ЛПУ, бумага А4)</p>
								<br className={ styles.br }/>
							</li>
						</ul>
					</div>

					<div className={ styles.footer }>
						<h3 className={ styles.title }>Наши партнеры и бренды</h3>

						<div className={ styles.icons }>
							<img src="/modal/rectangle.svg" alt="rectangle" width={15} height={15} layout="fixed"/>
							<img src="/modal/triangle.svg" alt="triangle" width={40} height={15} layout="fixed"/>
							<img src="/modal/ellipse.svg" alt="ellipse" width={15} height={15} layout="fixed"/>
						</div>

						<div className={ styles.images }>
							<div className={ styles.brand }>
								<Image src='/about-icons/torgsoft.png' alt='ТОРГСОФТ' width={ 140 } height={ 70 } layout='fixed' />
							</div>
							<div className={ styles.brand }>
								<Image src='/about-icons/aokia.png' alt='AOKIA' width={ 160 } height={ 40 } layout='fixed' />
							</div>
							<div className={ styles.brand }>
								<Image src='/about-icons/xprinter.png' alt='Xprinter' width={ 160 } height={ 48 } layout='fixed' />
							</div>
							<div className={ styles.brand }>
								<Image src='/about-icons/tsc.png' alt='TSC' width={ 127 } height={ 50 } layout='fixed' />
							</div>
							<div className={styles.brand}>
								<Image src='/about-icons/rongta.png' alt='RONGTA' width={ 120 } height={ 70 } layout='fixed' />
							</div>
							<div className={ styles.brand }>
								<Image src='/about-icons/massa_k.png' alt='MASSA-K' width={ 80 } height={ 80 } layout='fixed' />
							</div>
						</div>
					</div>
				</div>
						
				<ScrollToTop/>
        
				<Footer modal={ subscribe }/>
			</div>
		</div>
	);
}