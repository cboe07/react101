// Our first component
function Application(){
	// This is a comment outside the return, within the return (JSX) use handle bars and CSS comment
	// Inside handle bars, JS is read
	var name = "Chris";
	console.log(React);
	return(
		<div id="parent">
			<div class="sibling">
				<Message name="Chr1570" status="Unknown"/>   {/* Message component below */}  
				<Message name="deadMau5"/>
				<Message name="Anonymous"/>
			</div>
			<div class="sibling">
				<h2>From {name}. {5+2}</h2>  
			</div>
		</div>
	)
}

function Message(props){
	return(
		<h1>Hello, {props.name}. Status: {props.status}</h1>
	)
}
// ReactDOM is availabe because we included reactDOM.js
// The .render function needs React (React.js) and takes 2 arguments
// 1. The component to render.
// 2. Where to render it.
// When ReactDOM.render runs it will OWN that element

ReactDOM.render(
	// <h1>Hello, world!</h1>,  
	<Application />, 
	document.getElementById('container')
);