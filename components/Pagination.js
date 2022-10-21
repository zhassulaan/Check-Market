import styled from "styled-components";

const Pagination = ({ pageNumbers, currentPage, paginate }) => {
  	return (
    	<Wrapper>
      	<ul className='pagination'>
				{ (currentPage > 1)	?
					<a href={`${currentPage - 1}`} id={currentPage - 1} onClick={() => paginate}>
						<p className='previous'>Предыдущая</p>
					</a>
						:
					<p className='previous'>Предыдущая</p>
				}
				
				{pageNumbers.map(number => (
          		<li key={number} className={currentPage === number ? 'selected' : 'link'}>
            		<a href={`${number}`} id={number} onClick={() => paginate}>
              			<p>{number}</p>
            		</a>
          		</li>
        		)) }

				{ (currentPage < pageNumbers.length) ?
					<a href={`${currentPage + 1}`} id={currentPage + 1} onClick={() => paginate}>
						<p className='next'>Следующая</p>
					</a>
						:
					<p className='next'>Следующая</p>
				}
      	</ul>
    	</Wrapper>
  	);
};

const Wrapper = styled.nav`
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3.125rem;
		margin-top: 5.625rem;
	}

	.link {
		width: 1.875rem;
		height: 1.875rem;
		font-weight: 400;
		margin: 0 .625rem;
	}

	li a {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
	}

	p {
		font-weight: 400;
	}

	.previous,
	.next {
		display: flex;
		width: 10rem;
		height: 1.875rem;
		text-decoration: underline;
		margin: 0 3.75rem;
	}
	
	.previous {
		justify-content: flex-end;
	}
		
	.next {
		justify-content: flex-start;
	}
		
	.selected {
		width: 3.125rem;
		height: 3.125rem;
		fonw-weight: 600;
		background-color: var(--clr-primary-4);
		border-radius: 5px;
		margin: 0 .3125rem;
	}

	.selected p {
		font-weight: 600;
	}
`

export default Pagination;