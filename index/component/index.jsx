import React,{Component} from 'react'
import ReactDom from 'react-dom'
import Header from './header.jsx'
import Search from './search.jsx'
import Leftside from './left-side.jsx'
import Content from './content.jsx'

class App extends Component{
	render(){
		return (
			<div>
				<Leftside/>
				<Search />
				<Content/>
				<Header/>
			</div>
		)
	}
}

ReactDom.render(<App />,document.getElementById('App'))