import React,{Component} from 'react';
import ReactDom from 'react-dom';
import baseStyle from '../css/base.css'
import styles from '../css/search.css'

class Search extends Component{
	constructor(props){
		super(props);
        this.state = {
        	showcart:false
        };
    }
    showcar(){
    	document.getElementsByClassName('sellcart-hide')[0].style.display='block';
    }
    hidecart(){
    	document.getElementsByClassName('sellcart-hide')[0].style.display='none';
    }
	render(){
		return(
			<div id='search'>
				<input type='text'/>
				<i className='pic'></i>
				<button className='searchbtn'></button>
				<button className='sellcart' onMouseEnter={this.showcar.bind(this)} onMouseLeave={this.hidecart.bind(this)}><span className='sellcart-hide' ></span></button>
				<div className='search-code'>
					<img src='//misc.360buyimg.com/mtd/pc/index_2017/2.1.0/static/images/mobile_qrcode.png'></img>
				</div>
				<div className='suggest-top'>
					<a>服饰狂欢</a>
					<a>购259减199</a>
					<a>京东超市</a>
					<a>热卖零食</a>
					<a>游戏手机</a>
					<a>五折秒杀</a>
					<a>品牌盛典</a>
					<a>每150-50</a>
					<a>低至5折</a>
				</div>
				<div className='suggest-bottom'>
					<a>秒杀</a>
					<a>优惠券</a>
					<a>PLUS会员</a>
					<a>闪购</a>
					<a>拍卖</a>
					<a>京东服饰</a>
					<a>京东超市</a>
					<a>生鲜</a>
					<a>全球购</a>
					<a>京东金融</a>
					<img src='//img12.360buyimg.com/da/jfs/t22009/72/764381716/44885/ae2cac46/5b17557fN89144b62.gif'></img>
				</div>
			</div>
		)
	}
}
export default Search