import React,{Component} from 'react';
import ReactDom from 'react-dom';
import baseStyle from '../css/base.css'
import styles from '../css/left.css'
require('../images/items-1.png')
class Leftside extends Component{
	render(){
		return(
			<div id='left-side'>
				<img src="//img30.360buyimg.com/da/jfs/t21058/278/510975033/142108/a7121405/5b0fc1fdN58a5269f.gif?t=1528199859808"></img>
				<Menuitem/>
			</div>
		)
	}
}
class Menuitem extends Component{
	constructor(props){
		super(props);
        this.state = {
        	thiscontent:null
        };
	}
	showcontent(e){
		let targetname = e.target.getAttribute('name');
		this.setState({thiscontent:targetname})
		if(targetname){
			let allcon = document.querySelectorAll('.menu-content li');
			for(let i=0;i<allcon.length;i++){
				allcon[i].style.display='none';
			}
			document.getElementById('menu-content').style.display='block';
			document.getElementById(targetname).style.display='block';
		}
	}
	hidecontent(e){
		let targetname = e.target.getAttribute('name');
		if (targetname) {
			document.getElementById('menu-content').style.display='none';
			document.getElementById(targetname).style.display='none';
		}
	}
	showthiscon(){
		document.getElementById('menu-content').style.display='block';
		document.getElementById(this.state.thiscontent).style.display='block';
	}
	hidethiscon(){
		document.getElementById('menu-content').style.display='none';
		document.getElementById(this.state.thiscontent).style.display='none';
	}
	render(){
		return(
			<div className='menu'>
				<ul className='menu-items'>
					<li name='m1' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>家用电器</a></li>
					<li name='m2' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>手机</a>/<a>运营商</a>/<a>数码</a></li>
					<li name='m3' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>电脑</a>/<a>办公</a></li>
					<li name='m4' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>家居</a>/<a>家具</a>/<a>家装</a>/<a>厨具</a></li>
					<li name='m5' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>男装</a>/<a>女装</a>/<a>童装</a>/<a>内衣</a></li>
					<li name='m6' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>美妆</a>/<a>个护清洁</a>/<a>宠物</a></li>
					<li name='m7' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>女鞋</a>/<a>箱包</a>/<a>钟表</a>/<a>珠宝</a></li>
					<li name='m8' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>男鞋</a>/<a>运动</a>/<a>户外</a></li>
					<li name='m9' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>房产</a>/<a>汽车</a>/<a>汽车用品</a></li>
					<li name='m10' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>母婴</a>/<a>玩具乐器</a></li>
					<li name='m11' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>食品</a>/<a>酒类</a>/<a>生鲜</a>/<a>特产</a></li>
					<li name='m12' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>艺术</a>/<a>礼品鲜花</a>/<a>农资绿植</a></li>
					<li name='m13' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>医药保健</a>/<a>计生情趣</a></li>
					<li name='m14' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>图书</a>/<a>音像</a>/<a>电子书</a></li>
					<li name='m15' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>机票</a>/<a>酒店</a>/<a>旅游</a>/<a>生活</a></li>
					<li name='m16' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>理财</a>/<a>众筹</a>/<a>白条</a>/<a>保险</a></li>
					<li name='m17' onMouseEnter={this.showcontent.bind(this)} onMouseLeave={this.hidecontent.bind(this)}><a>安装</a>/<a>维修</a>/<a>清洗保养</a></li>
				</ul>
				<ul className='menu-content' id='menu-content' onMouseEnter={this.showthiscon.bind(this)} onMouseLeave={this.hidethiscon.bind(this)}>
					<li id='m1'></li>
					<li id='m2'></li>
					<li id='m3'></li>
					<li id='m4'></li>
					<li id='m5'></li>
					<li id='m6'></li>
					<li id='m7'></li>
					<li id='m8'></li>
					<li id='m9'></li>
					<li id='m10'></li>
					<li id='m11'></li>
					<li id='m12'></li>
					<li id='m13'></li>
					<li id='m14'></li>
					<li id='m15'></li>
					<li id='m16'></li>
					<li id='m17'></li>
				</ul>
			</div>
		)
	}
}
export default Leftside