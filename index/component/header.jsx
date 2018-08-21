import React,{Component} from 'react';
import ReactDom from 'react-dom';
import baseStyle from '../css/base.css'
import styles from '../css/header.css'
/*header组件*/
class Header extends Component{
	constructor(props){
		super(props);
        this.state = {
        	myjd:false,
        	business:false,
        	customer:false,
        	Webnet:false,
        	Codetow:false
        };
	}
	showTag(res){
		switch(res){
			case "myjd":this.setState({myjd:!this.state.myjd}); break;
			case "business":this.setState({business:!this.state.business}); break;
			case "customer":this.setState({customer:!this.state.customer}); break;
			case "Webnet":this.setState({Webnet:!this.state.Webnet}); break;
			case "Codetow":this.setState({Codetow:!this.state.Codetow}); break;
		}
	}
	hideTag(res){
		switch(res){
			case "myjd":this.setState({myjd:!this.state.myjd}); break;
			case "business":this.setState({business:!this.state.business}); break;
			case "customer":this.setState({customer:!this.state.customer}); break;
			case "Webnet":this.setState({Webnet:!this.state.Webnet}); break;
			case "Codetow":this.setState({Codetow:!this.state.Codetow}); break;
		}
	}
	render(){
		return(
			<div id='header'>
				<span className='nav-left'><i></i>北京</span>
				<ul className='nav-right'>
					<li><a>你好，请登录</a><a>免费注册</a></li>
					<li><a>我的订单</a></li>
					<li onMouseEnter={this.showTag.bind(this,'myjd')} onMouseLeave={this.hideTag.bind(this,'myjd')}><a>我的京东</a><i></i><Myjd ishow={this.state.myjd}/></li>
					<li><a>京东会员</a></li>
					<li onMouseEnter={this.showTag.bind(this,'business')} onMouseLeave={this.hideTag.bind(this,'business')}><a>企业采购</a><i></i><Business ishow={this.state.business}/></li>
					<li onMouseEnter={this.showTag.bind(this,'customer')} onMouseLeave={this.hideTag.bind(this,'customer')}><a>客户服务</a><i></i><CustomerServer ishow={this.state.customer}/></li>
					<li onMouseEnter={this.showTag.bind(this,'Webnet')} onMouseLeave={this.hideTag.bind(this,'Webnet')}><a>网站导航</a><i></i><Webnet ishow={this.state.Webnet}/></li>
					<li onMouseEnter={this.showTag.bind(this,'Codetow')} onMouseLeave={this.hideTag.bind(this,'Codetow')}><a>手机京东</a><Codetow ishow={this.state.Codetow}/></li>
				</ul>
			</div>
		)
	}
}
/*二维码隐藏组件*/
class Codetow extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let show;
		this.props.ishow?show='block':show='none';
		return(
			<div className='Codetow' style={{display: show}}>
			</div>
		)
	}
}
/*我的京东隐藏组件*/
class Myjd extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let show;
		this.props.ishow?show='block':show='none';
		return(
			<div className='Myjdbox' style={{display: show}}>
				<ul>
					<li><a>待处理订单</a></li>
					<li><a>返修退换货</a></li>
					<li><a>降价商品</a></li>
					<li><a>消息</a></li>
					<li><a>我的问答</a></li>
					<li><a>我的关注</a></li>
				</ul>
				<hr/>
				<ul>
					<li><a>我的京豆</a></li>
					<li><a>我的白条</a></li>
					<li><a>我的优惠券</a></li>
					<li><a>我的理财</a></li>
				</ul>
			</div>
		)
	}
}
/*企业关系隐藏组件*/
class Business extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let show;
		this.props.ishow?show='block':show='none';
		return(
			<div className='Businessbox' style={{display: show}}>
				<ul>
					<li><a>企业购</a></li>
					<li><a>商用场景馆</a></li>
					<li><a>工业品</a></li>
					<li><a>礼品卡</a></li>>
				</ul>
			</div>
		)
	}
}
/*客户服务隐藏组件*/
class CustomerServer extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let show;
		this.props.ishow?show='block':show='none';
		return(
			<div className='Customerbox' style={{display: show}}>
			{/*此处因时间用图片代替*/}
			</div>
		)
	}
}
/*网站隐藏组件*/
class Webnet extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let show;
		this.props.ishow?show='block':show='none';
		return(
			<div className='Webnetbox' style={{display: show}}>
				{/*此处因时间用图片代替*/}
			</div>
		)
	}
}
export default Header