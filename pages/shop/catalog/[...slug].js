import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Context } from '../../../context/Context';
import BasketModal from '../../../components/Modals/BasketModal';
import SubscribeModal from '../../../components/Modals/SubscribeModal';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductBox from '../../../components/ProductBox';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import data from '../../../data/products-data';
import data2 from '../../../data/top-products';
import styles from '../../../styles/catalog.module.css';

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
	const [q, setQ] = useState("");

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
	console.log(openDropdown);
	
	// FILTER BY SECTION
	const productType = [
		{ text: "Все товары" },
		{ text: "Чековая лента" },
		{ text: "Термоэтикетки" },
		{ text: "Счётчики подсчёта посетителей" },
		{ text: "Противокражное оборудование" },
		{ text: "Оборудование для автоматизации" }
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
			type: "SAVE_PAGE",
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

		if (q !== "") {
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
			type: "SAVE_PAGE",
			payload: 0
		});
		dispatch({
			type: "SAVE_FILTER",
			payload: ["", 0, 0, 0, 0]
		});
		setQ("")
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
	const [productsPerPage] = useState(9);

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

							<div className={ styles.container } onClick={ handleClick }>
								<div className={ styles.header }>
									<h3 className={ styles.title }>Интернет-магазин</h3>

									<div className={ styles.icons }>
										<img src="/modal/rectangle.svg" alt="rectangle" width={15} height={15} layout="fixed"/>
										<img src="/modal/triangle.svg" alt="triangle" width={40} height={15} layout="fixed"/>
										<img src="/modal/ellipse.svg" alt="ellipse" width={15} height={15} layout="fixed"/>
									</div>

									<p className={ styles.subtitle }>Более сотни позиций для автоматизации вашего бизнеса.</p>
								</div>
												
								<div className={ styles.filter_content }>
									<div>
										<div className={ styles.filter_header }>
											<p className='0'>Разделы:</p>
											<div className='0'>
												<img className='0' src="/catalog-icons/arrow.svg" alt="show button"/>
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

									<div>
										<div className={ styles.filter_header }>
											<p className='1'>Цена:</p>
											<div className='1'>
												<img className='1' src="/catalog-icons/arrow.svg" alt="show button"/>
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

									<div>
										<div className={ styles.filter_header }>
											<p className='2'>Наличие:</p>
											<div className='2'>
												<img className='2' src="/catalog-icons/arrow.svg" alt="show button"/>
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

									<div>
										<div className={ styles.filter_header }>
											<p className='3'>Акции:</p>
											<div className='3'>
												<img className='3' src="/catalog-icons/arrow.svg" alt="show button"/>
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

									<div>
										<div className={ styles.filter_header }>
										<p className='4'>Сортировка:</p>
											<div className='4'>
												<img className='4' src="/catalog-icons/arrow.svg" alt="show button"/>
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

									<div className={ styles.filter_box }>
										<div className={ styles.search_box }>
											<SearchBar
												text={ "Поиск товара..." }
												value={ q }
												onChange={ (e) => setQ(e.target.value) }
												/>
										</div>
										<p className={ styles.clear_filter } onClick={ handleClearFilter }>Сбросить все фильтры</p>
									</div>
								</div>
								
								{ (currentProducts.length > 0) ?
									<>
										<div className={ styles.product_content }>
											{ currentProducts.map(item => {
												return(
													<div id={ item.id } className={ styles.product }>
														<ProductBox key={ item.id } product={ item }/>
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
										<img src="/product-images/not-found.svg" alt="not found" />
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