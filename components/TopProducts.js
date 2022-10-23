import { useState } from "react";
import styled from "styled-components";
import data from '../data/top-products';
import ProductBox from '../components/ProductBox';

export default function TopProducts() {
	const [element, setElement] = useState(3);
	const [count, setCount] = useState(0);

	const handleSubmit = async(ev) => {
		ev.preventDefault();
		setElement(Number(ev.target.id));
	}

	const previous = (element / 3 - 1);
	const next = Math.ceil(data.length / 3) - (element / 3);

	return (
		<Wrapper>
			<div className='products'>
				{ data.map(item => {
					return(
						(element >= item.id && element - 3 < item.id) ?
							<div id={item.id}>
								<ProductBox key={ item.id } product={ item }/>
							</div>
								:
							<></>
					);
				}) }
			</div>

			<div className='buttons'>
				<img src="/product-images/left.svg" alt="previous" id={ (element !== 3) ? element - 3 : element } className='arrow button' onClick={ handleSubmit }/>
				{Array(Math.ceil(previous)).fill(true).map((item, index) => <img src="/product-images/passive.svg" id={ (index + 1) * 3 } alt="passive" className='button' onClick={ handleSubmit }/>)}
				<img src="/product-images/active.svg" alt="active" className='button'/>
				{Array(Math.ceil(next)).fill(true).map((item, index) => <img src="/product-images/passive.svg" id={ (index + 1) * 3 + element } alt="passive" className='button' onClick={ handleSubmit }/>)}
				<img src="/product-images/right.svg" alt="next" id={(element < data.length) ? element + 3 : element} className='arrow button' onClick={ handleSubmit }/>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin-top: 2.5rem;

	.products {
		display: flex;
		gap: 1.5625rem;
	}

	.buttons {
		display: flex;
		justify-content: center;
		gap: 2.5rem;
		margin-top: 4.375rem;
	}

	.arrow {
		margin: 0 0.625rem;
	}
`