

// Make component called 'Application' that returns a single DOM element
// Add props param so we can get properties sent by the computer rendering this component

// The app works but it's big. And no better than if we just copy and paste in our html
// If it gets any bigger than we are in trouble bc we have to manage both JSX and html
// Let's break up the app into components
// 1. Header
// 2. Multiple Teams
// 3. Each team has a counter

// State.
// Props are immutable. They DO NOT change ever.
// State is piece of data, that DOES change
// State has:
// 1. An initial value
// 2. (Infinite number of) changed values
// In the case of the NL east, all gamesback start at 0
// Some kind of mutation occurs (namely, someone loses or wins a game)

// In ES5, to use state, React proves a component class for us to use.
// It takes an object as a param.

// ANYTIME STATE CHANGES... THE COMPONENT WILL RE-RENDER

var teams = [
	{
		name: "Braves",
		gamesBack: 0,
		city: "Atlanta"
	},
	{
		name: "Nationals",
		gamesBack: 0,
		city: "Washington D.C."
	},
	{
		name: "Marlins",
		gamesBack: 0,
		city: "Miami"
	},
	{
		name:"Mets",
		gamesBack:0,
		city: "New York"
	},
	{
		name:"Phillies",
		gamesBack:0,
		city:"Philadeliphia"
	}
]


function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

function Team(props){
	return(
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2 team">
				<div className="team-name col-sm-12">{props.city} {props.name}</div>
				<Counter gamesBack={props.gamesBack} />
			</div>
		</div>
	)
}

// var with the name of the Component
// The only REQUIRED property is render
var Counter = React.createClass({

	// A set React property (like render), is getInitialState 
	getInitialState: function(){
		// this function sets the initial state value of a variable
		// It returns a single Object
		var stateObject = {
			gamesBack: 0
		}
		return stateObject;
	},

	addGame: function(){
		// this.state.gamesBack++ = BAAADDD!!!!! Don't change the state!
		this.setState({
			gamesBack: this.state.gamesBack + 1
		})
	},
	loseGame: function(){
		this.setState({
			gamesBack: this.state.gamesBack - 1
		})
	},

	render: function(){
		// back to the good ole days....
		return(
			<div className="counter">
				<button onClick={this.addGame} className="btn btn-success">+</button>
				<div className="games-back">{this.state.gamesBack}</div>
				<button onClick={this.loseGame} className="btn btn-danger">-</button>
			</div>
		)
	}
})

function Application(props){		
	return(
		// Use map to loop through the teams array,
		// We no longer need:
		// 	<Team name="Braves" score="0"/>
		// 	<Team name="Brewers" score="0"/>
		// props.team is an aray, with team objects
		// send Team the object, in map, ES6 style

		<div className="container">
			{ /*<h1>{props.title}</h1>*/ }
			<Header title={props.title} />
			{props.teams.map((team,index)=>{
				return <Team key={index} name={team.name} gamesBack={team.gamesBack} city={team.city} />
			})}
		</div>
	)
}

// Add a prop to send the title to the Application component
ReactDOM.render(  
	<Application title="NL East Scoreboard" teams={teams} />,
	document.getElementById('root')
);







