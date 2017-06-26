var products = [
	{
		category: 'Sporting Goods',	
		price: '$49.99',
		name: 'Football',
		inStock: true
	},
	// {
	// 	category: 'Junk',	
	// 	price: '$49.99',
	// 	name: 'Football',
	// 	inStock: true
	// },	
	{
		category: 'Sporting Goods',	
		price: '$9.99',
		name: 'Baseball',
		inStock: true
	},
	{
		category: 'Sporting Goods',	
		price: '$29.99',
		name: 'Basketball',
		inStock: false
	},

	{
		category: 'Electronics',	
		price: '$99.99',
		name: 'iPod Touch',
		inStock: true
	},
	{
		category: 'Electronics',	
		price: '$399.99',
		name: 'iPhone 5',
		inStock: false
	},
	{
		category: 'Electronics',	
		price: '$199.99',
		name: 'Nexus 7',
		inStock: true
	}
]

function ProductTable(props){
	return(
		<div className="ProductTable">
			<div className="ProductCatergoryRow">{props.category}
				<div>{props.name} {props.price}</div>
			</div>
			
		</div>
	)
}


function FilterableProductTable(props){
	return(
		
		<div>
			<div className="SearchBar">
				<form>
					<input type="text" name="search"/>
				</form>
			</div>
			<ProductTable category={props.category} name={props.name} price={props.price} />
		</div>
		
	)
}


function Application(props){
	// console.log(props)
	var productsArray = [];
  return(
      <div className="container">
        <h1>React Checklist Rules</h1>
        <FilterableProductTable  category={props.products[0].category} name={props.products[0].name} price={props.products[0].price}/>
        
        
      </div>
  )
}




ReactDOM.render(
	<Application products={products} />,
	document.getElementById('root')
)