import React from 'react';
import Cat from './Cat';

const CatList = ( {cats} ) => {
	return (
		<div className = "CardList">
			{	
				cats.map((user, i) => {
					return(
						<Cat 
							key={i}
							id={cats[i].id}
							name={cats[i].name}
							email={cats[i].email}
						/>
					)
				})
			}
		</div>
	)
}

export default CatList;