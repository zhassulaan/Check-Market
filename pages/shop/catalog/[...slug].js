import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Context } from '../../../context/Context';
import data from '../../../data/products-data';
import data2 from '../../../data/top-products';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import Pagination from '../../../components/Pagination';
import ProductBox from '../../../components/ProductBox';
import SearchBar from '../../../components/SearchBar';
import BasketModal from '../../../components/Modals/BasketModal';
import SubscribeModal from '../../../components/Modals/SubscribeModal';
import styles from '../../../styles/catalog.module.css';
import bg from '../../../public/home/background.png';

export default function Shop() {
	const { state, dispatch } = useContext(Context);
	const router = useRouter();

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
	
	// Sorting
	function sortDefault(a, b) {
		if (b.id === a.id) {
			return 0;
		}
		else {
			return (b.id > a.id) ? -1 : 1;
		}
	}
	function sortByPrice(ascending) {
		return function (a, b) {
			// equal items sort equally
			if (a.price === b.price) {
				return 0;
			}
			// if we're ascending, lowest sorts first
			else if (ascending) {
				return (a.price < b.price) ? -1 : 1;
			}
			// if descending, highest sorts first
			return (a.price < b.price) ? 1 : -1;
		}
	}
	function sortByDate(a, b) {
		if (b.date === a.date) {
			return 0;
		}
		else {
			return (b.date > a.date) ? -1 : 1;
		}
	}
	
	// SEARCH
	const [q, setQ] = useState('');

	// USE FILTER
	let [openDropdown, setOpenDropdown] = useState([false, false, false, false, false]);
	const handleClick = (ev) => {
			if (ev.target.className == undefined)
				setOpenDropdown(false, false, false, false, false);
			else {
				let newOpenDropdown = [false, false, false, false, false];
				newOpenDropdown[ev.target.className] = !openDropdown[ev.target.className];
				setOpenDropdown(newOpenDropdown);
			}
	};
	
	// FILTER BY SECTION
	const productType = [
		{ text: 'Все товары' },
		{ text: 'Чековая лента' },
		{ text: 'Термоэтикетки' },
		{ text: 'Счётчики подсчёта посетителей' },
		{ text: 'Противокражное оборудование' },
		{ text: 'Оборудование для автоматизации' },
	];
	const type = [];
	for(let i = 0; i < 6; i++) { 
		(i == Number(state.page)) ? 
			type[i] = true 
				: 
			type[i] = false
	}
	const [selectedType, setSelectedType]= useState(type);	
	const handleFilterByType = async(ev) => {
		ev.preventDefault();
		if (ev.target.id == 0)
			setSelectedType([!selectedType[0], false, false, false, false, false]);
		if (ev.target.id == 1)
			setSelectedType([false, !selectedType[1], false, false, false, false]);
		if (ev.target.id == 2)
			setSelectedType([false, false, !selectedType[2], false, false, false]);
		if (ev.target.id == 3)
			setSelectedType([false, false, false, !selectedType[3], false, false]);
		if (ev.target.id == 4)
			setSelectedType([false, false, false, false, !selectedType[4], false]);
		if (ev.target.id == 5)
			setSelectedType([false, false, false, false, false, !selectedType[5]]);
		dispatch({
			type: 'SAVE_PAGE',
			payload: ev.target.id
		});
	};

	// FILTER BY PRICE
	const [selectedPrice, setSelectedPrice]= useState([false, false, false]);
	const handleFilterByPrice = async(ev) => {
		ev.preventDefault();
		if (ev.target.id == 0)
			setSelectedPrice([!selectedPrice[0], false, false]);
		if (ev.target.id == 1)
			setSelectedPrice([false, !selectedPrice[1], false]);
		if (ev.target.id == 2)
			setSelectedPrice([false, false, !selectedPrice[2]]);
	};

	// FILTER BY AVIABILITY
	const [selectedAviability, setSelectedAviability]= useState(false, false, false, false);
	const handleFilterByAvailability = async(ev) => {
		ev.preventDefault();
		if (ev.target.id == 0)
			setSelectedAviability([!selectedAviability[0], false, false, false]);
		if (ev.target.id == 1)
			setSelectedAviability([false, !selectedAviability[1], false, false]);
		if (ev.target.id == 2)
			setSelectedAviability([false, false, !selectedAviability[2], false]);
		if (ev.target.id == 3)
			setSelectedAviability([false, false, false, !selectedAviability[3]]);
	};
	
	// FILTER BY SALE
	const [selectedSale, setSelectedSale] = useState([false, false]);
	const handleFilterBySale = async(ev) => {
		ev.preventDefault();
		if (ev.target.id == 0)
			setSelectedSale([!selectedSale[0], false]);
		if (ev.target.id == 1)
			setSelectedSale([false, !selectedSale[1]]);
	};
	
	// FILTER SORTING
	const [selectedSorting, setSelectedSorting] = useState([false, false, false]);
	const handleSorting = async(ev) => {
		ev.preventDefault();
		if (ev.target.id == 0)
			setSelectedSorting([!selectedSorting[0], false, false]);
		if (ev.target.id == 1)
			setSelectedSorting([false, !selectedSorting[1], false]);
		if (ev.target.id == 2)
			setSelectedSorting([false, false, !selectedSorting[2]]);
	};

	const [products, setProducts] = useState(data);
	const applyFilters = () => {
		let updatedList = data;

		if (q !== '') {
			updatedList = updatedList.filter(item => 
				item.name.toLowerCase().indexOf(q.toLowerCase()) > -1
			);
		}

		let i;
		selectedType.find((item, index) => 
			(item === true) ? 
				i = index
					: 
				i = 0
		);

		if (selectedType[i] === true && i !== 0) {
			updatedList = updatedList.filter(item => 
				item.type == productType[i].text
			);
		}

		if (selectedPrice[0] === true) 
			updatedList = updatedList.slice().sort(sortDefault);
		else if (selectedPrice[1] === true) 
			updatedList = updatedList.slice().sort(sortByPrice(true));
		else if (selectedPrice[2] === true) 
			updatedList = updatedList.slice().sort(sortByPrice(false));
	
		if (selectedAviability[1] === true)
			updatedList = updatedList.filter(item => 
				item.inStock === true
			);
		else if (selectedAviability[2] === true)
			updatedList = updatedList.filter(item => 
				item.onOrder === true
			);
		else if (selectedAviability[3] === true)
			updatedList = updatedList.filter(item => 
				item.inStock === false && item.onOrder === false
			);
		
		if (selectedSale[0] === true)
			updatedList = updatedList.filter(item =>
				item.sale == null
			);
		else if (selectedSale[1] === true)
			updatedList = updatedList.filter((item) =>
				item.sale !== null
			);

		if (selectedSorting[0] === true) {
			updatedList = updatedList.slice().sort(sortDefault);
		}
		else if (selectedSorting[1] === true) {
			updatedList = updatedList.slice().sort(sortByDate);
		}
		else if (selectedSorting[2] === true) {
			let data2Indexes = data2.map(item => item.id)
			let updatedList2 = updatedList.filter(item => data2Indexes.includes(item.id));
			let temp = updatedList.filter(item =>
				!data2Indexes.includes(item.id)
			);
			updatedList = updatedList2.concat(temp);
		}

		setProducts(updatedList);
	}

	// CLEAR FILTERS
	const handleClearFilter = () => {
		dispatch({
			type: 'SAVE_PAGE',
			payload: 0
		});
		dispatch({
			type: 'SAVE_FILTER',
			payload: ['', 0, 0, 0, 0]
		});
		setQ('')
		setSelectedType([true, false, false, false, false, false]);
		setSelectedPrice([false, false, false]);
		setSelectedAviability([false, false, false, false]);
		setSelectedSale([false, false]);
		setSelectedSorting([false, false, false]);
		setOpenDropdown([false, false, false, false, false]);
	}

	useEffect(() => {
		applyFilters();
	}, [q, selectedType, selectedPrice, selectedAviability, selectedSale, selectedSorting]);

	// PAGINATION
	const [productsPerPage] = useState((window.innerWidth > 540) ? 9 : 8);

	const totalProducts = products.length;
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i);
	}
	
	let currentPage = Number(router.query.slug);
	
	// Get current posts
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
	
	// Change page
	const paginate = async(ev) => {
		ev.preventDefault();
		currentPage = ev.target.id;
	}

	const [filter, setFilter] = useState(false);
	const openFilter = async(ev) => {
		ev.preventDefault();
		setFilter(!filter)
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

			{ (router.query.slug == 1) || pageNumbers.find((number) => router.query.slug == number) ?
				(() => {
					if (basketModal)
						return (
							<BasketModal close={ basket }/> 
						);
					else if (subscribeModal)
						return (
							<SubscribeModal modal={ subscribe }/>
						);
					else
						return (<>	
							<Navbar modal={ basket }/>

							<LogoContainer>
								<div className='logo-box'>
									<img src='/home/logo.svg' alt='logo' className='logo' />
								</div>
							</LogoContainer>

							{ (window.innerWidth < 769 && filter) ? <div className={ styles.frame }></div> : null}

							<div className={ styles.container } onClick={ handleClick }>
								<div className={ styles.header }>
									<h3 className={ styles.title }>Интернет-магазин</h3>

									<div className={ styles.icons }>
										<Image src='/modal/rectangle.svg' alt='rectangle' width={ 15 } height={ 15 } layout='fixed' />
										<Image src='/modal/triangle.svg' alt='triangle' width={ 40 } height={ 15 } layout='fixed' />
										<Image src='/modal/ellipse.svg' alt='ellipse' width={ 15 } height={ 15 } layout='fixed' />
									</div>

									<p className={ styles.subtitle }>Более сотни позиций для автоматизации вашего бизнеса.</p>
								</div>
												
								<div className={ styles.filter_content }>
									{ window.innerWidth < 769 ? 
										<div className={ styles.filter_opener } onClick={ openFilter }>
											<h5>Фильтр</h5> 
											<img src='/catalog-icons/filter.svg' alt='filter icon' />
										</div>
											: 
										null }
									
									{ (window.innerWidth > 768 || filter) ?
										<div className={ styles.filter_boxes }>
											<svg width='25' height='25' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' onClick={ openFilter }>
												<path d='M1 1L30.9999 31' stroke='black' stroke-width='2' />
												<path d='M31 1L1 31' stroke='black' stroke-width='2' />
											</svg>
											<h4>Выберите нужные фильтры</h4>

											<div className='0' style={{ position: 'relative' }}>
												<div className={ styles.filter_header }>
													<p className='0'>Разделы:</p>
													<div className='0'>
														{ (window.innerWidth > 768) ?
															<img className='0' src='/catalog-icons/arrow.svg' alt='show button' />
																:
															<img className='0' src='/catalog-icons/arrow_mobile.svg' alt='show button' />
														}
													</div>
												</div>

												<ul className={ (openDropdown[0] === true) ? styles.filter_options : styles.hide }>
													<li className={ selectedType[0] ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='0' className={ styles.filter_minitext } onClick={ handleFilterByType }>Все товары</p>
													</li>
													<li className={ selectedType[1] ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='1' className={ styles.filter_minitext } onClick={ handleFilterByType }>Чековая лента</p>
													</li>
													<li className={ selectedType[2] ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='2' className={ styles.filter_minitext } onClick={ handleFilterByType }>Термоэтикетки</p>
													</li>
													<li className={ selectedType[3] ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='3' className={ styles.filter_bigtext } onClick={ handleFilterByType }>Счётчики подсчёта посетителей</p>
													</li>
													<li className={ selectedType[4] ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='4' className={ styles.filter_bigtext } onClick={ handleFilterByType }>Противокражное оборудование</p>
													</li>
													<li className={ selectedType[5] ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='5' className={ styles.filter_bigtext } onClick={ handleFilterByType }>Оборудование для автоматизации</p>
													</li>
												</ul>
											</div>

											<div className='1' style={{ position: 'relative' }}>
												<div className={ styles.filter_header }>
													<p className='1'>Цена:</p>
													<div className='1'>
														{ (window.innerWidth > 768) ?
															<img className='1' src='/catalog-icons/arrow.svg' alt='show button' />
																:
															<img className='1' src='/catalog-icons/arrow_mobile.svg' alt='show button' />
														}
													</div>
												</div>

												<ul className={ (openDropdown[1] === true) ? styles.filter_options : styles.hide }>
													<li className={ selectedPrice[0] === true ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='0' className={ styles.filter_minitext } onClick={ handleFilterByPrice }>Все цены</p>
													</li>
													<li className={ selectedPrice[1] === true ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='1' className={ styles.filter_minitext } onClick={ handleFilterByPrice }>Цены по возрастанию</p>
													</li>
													<li className={ selectedPrice[2] === true ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='2' className={ styles.filter_minitext } onClick={ handleFilterByPrice }>Цены по убыванию</p>
													</li>
												</ul>
											</div>

											<div className='2' style={{ position: 'relative' }}>
												<div className={ styles.filter_header }>
													<p className='2'>Наличие:</p>
													<div className='2'>
														{ (window.innerWidth > 768) ?
															<img className='2' src='/catalog-icons/arrow.svg' alt='show button' />
																:
															<img className='2' src='/catalog-icons/arrow_mobile.svg' alt='show button' />
														}
													</div>
												</div>

												<ul className={ (openDropdown[2] === true) ? styles.filter_options : styles.hide }>
													<li className={ selectedAviability[0] === true ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='0' className={ styles.filter_minitext } onClick={ handleFilterByAvailability }>Все позиции</p>
													</li>
													<li className={ selectedAviability[1] === true ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='1' className={ styles.filter_minitext } onClick={ handleFilterByAvailability }>В наличии</p>
													</li>
													<li className={ selectedAviability[2] === true ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='2' className={ styles.filter_minitext } onClick={ handleFilterByAvailability }>Под заказ</p>
													</li>
													<li className={ selectedAviability[3] === true ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='3' className={ styles.filter_minitext } onClick={ handleFilterByAvailability }>Нет в наличии</p>
													</li>
												</ul>
											</div>

											<div className='3' style={{ position: 'relative' }}>
												<div className={ styles.filter_header }>
													<p className='3'>Акции:</p>
													<div className='3'>
														{ (window.innerWidth > 768) ?
															<img className='3' src='/catalog-icons/arrow.svg' alt='show button' />
																:
															<img className='3' src='/catalog-icons/arrow_mobile.svg' alt='show button' />
														}
													</div>
												</div>

												<ul className={ (openDropdown[3] === true) ? styles.filter_options : styles.hide }>
													<li className={ selectedSale[0] === true ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='0' className={ styles.filter_minitext } onClick={ handleFilterBySale }>Позиции без скидок</p>
													</li>
													<li className={ selectedSale[1] === true ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
														<p id='1' className={ styles.filter_minitext } onClick={ handleFilterBySale }>Позиции со скидками</p>
													</li>
												</ul>
											</div>

											{ (window.innerWidth > 768) ?
												<div className='4' style={{ position: 'relative' }}>
													<div className={ styles.filter_header }>
														<p className='4'>Сортировка:</p>
														<div className='4'>
															<img className='4' src='/catalog-icons/arrow.svg' alt='show button' />
														</div>
													</div>
												
													<ul className={ (openDropdown[4] === true) ? styles.filter_options : styles.hide }>
														<li className={ selectedSorting[0] === true ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
															<p id='0' className={ styles.filter_minitext } onClick={ handleSorting }>По порядку</p>
														</li>
														<li className={ selectedSorting[1] === true ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
															<p id='1' className={ styles.filter_minitext } onClick={ handleSorting }>По новизне</p>
														</li>
														<li className={ selectedSorting[2] === true ? [styles.filter_item, styles.active].join(" ") : styles.filter_item }>
															<p id='2' className={ styles.filter_minitext } onClick={ handleSorting }>Самые популярные</p>
														</li>
													</ul>
												</div>
													:
												<div></div>
											}

											{ (window.innerWidth < 769) ?
												<div className={ styles.mobile_fliter } style={{ position: 'relative' }}>
													<div style={{ width: '9.6875rem', height: '2.5rem' }} onClick={ openFilter }>
														<Button text={ 'Применить' }/>
													</div>
												
													<p className={ styles.clear_filter } onClick={ handleClearFilter }>Сбросить все фильтры</p>
												</div>
													:
												<div></div>
											}
										</div>
											:
										<div></div>
									}

									<div className={ styles.filter_box }>
										<div className={ styles.search_box }>
											<SearchBar
												text={ 'Поиск товара...' }
												value={ q }
												onChange={ (e) => setQ(e.target.value) }
												/>
										</div>
										{ (window.innerWidth > 768) ?
											<p className={ styles.clear_filter } onClick={ handleClearFilter }>Сбросить все фильтры</p>
												:
											<div></div>
										}
									</div>
								</div>
								
								{ (currentProducts.length > 0) ?
									<>
										<div className={ styles.product_content }>
											{ currentProducts.map((item, idx) => {
												return(
													<div id={ item.id } className={ styles.product } key={ idx }>
														<ProductBox key={ item.id } product={ item } />
													</div>
												);
											}) }
										</div>
											
										<Pagination
											pageNumbers={ pageNumbers }
											currentPage={ currentPage }
											paginate={ paginate }
										/>
									</>
										:
									<div className={ styles.notfound_content }>
										<img src='/product-images/not-found.svg' alt='not found' />
										<p>По Вашему запросу нет результатов. Попробуйте сбросить все фильтры или обновить страницу.</p>
									</div>
								}
							</div>
										
							<Footer modal={ subscribe }/>
						</>);
				})()
					:
				<></>
			}
		</div>
	);
}

const LogoContainer = styled.div`
	@keyframes animate {
		50%, 60%, 70%, 100% {
			opacity: 100%;
		} 0%, 55%, 65% {
			opacity: 0;
		}
	}

	@keyframes logoAnimation {
		0% {
			top: 0;
			opacity: 0;
		} 5% {
			opacity: 1;
		} 50% {
			top: 100%;
		} 95% {
			opacity: 1;
		} 100% {
			top: 0;
			opacity: 0;
		}
	}

	display: none;

	@media (max-width: 992px) {
		display: flex;
		align-items: center;
		background-image: url(${ bg.src }); 
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		width: 100%;
		height: 23.75rem;
		margin-top: 1.5625rem;
		padding: 5.625rem 0;

		.logo-box {
			position: relative;
			width: calc(100% - 39.0421vw * 2);
			margin: 0 39.0421vw;
		}
		
		.logo-box:before {
			content: '';
			position: absolute;
			width: calc(100vw - 39.0421vw * 2);
			height: 0.1rem;
			background-color: var(--clr-primary-1);
			opacity: 0;
			animation: logoAnimation 2s linear;
		}

		.logo-box:active {
			animation: animate 1.2s linear;
		}

		.logo {
			width: calc(100vw - 39.0421vw * 2);
			animation: animate 1.2s linear;
		}
	}

	@media (max-width: 650px) {
		height: 52.778vw;
		padding: 11.11112vw 0;

		.logo-box {
			width: 33.33334vw;
			margin: 0 33.33334vw;
		}
		
		.logo-box:before {
			width: calc(100vw - 33.33334vw * 2);
		}

		.logo {
			width: 33.33334vw;
		}
	}
`
