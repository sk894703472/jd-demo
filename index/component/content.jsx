import React,{Component} from 'react';
import ReactDom from 'react-dom';
import baseStyle from '../css/base.css';
import Styles from '../css/content.css';
import userRes from '../images/user-res.png';
/*图片轮播组件*/
class Slideimges extends Component{
	constructor(props){
		super(props);
        this.state = {
        	thispic:'//img1.360buyimg.com/da/jfs/t21718/139/757565952/63132/67d1d5e7/5b17856fNf43e2b48.jpg',
        	defaultbgcolor:'#fff'
        };
        this.timer=null;
	}
	/*向左滑*/
	toLeft(){
		var picArr=['//img1.360buyimg.com/da/jfs/t21718/139/757565952/63132/67d1d5e7/5b17856fNf43e2b48.jpg',
        	'//img14.360buyimg.com/da/jfs/t20161/143/544153177/101492/f0cfd87/5b10e4a9Nc4dc8e75.jpg',
        	'//m.360buyimg.com/babel/jfs/t20326/126/496168267/60368/a88051dc/5b0e9278N636cb4d9.jpg',
        	'//m.360buyimg.com/babel/jfs/t22114/9/768847622/81254/e69a1497/5b178545N499976de.jpg',
        	'//m.360buyimg.com/babel/jfs/t21148/263/500139364/86146/4a473fcf/5b0f68bfN7031ac10.jpg',
        	'//img1.360buyimg.com/da/jfs/t21142/58/847620726/99735/d02da881/5b190228N2404e841.jpg'
        	];
        var oldidx=picArr.indexOf(this.state.thispic);
		var idx=oldidx-1;
		if(idx<0){
			idx=6+idx;
		}
		this.setState({thispic:picArr[idx]})
		var pointer = document.querySelectorAll('.pointer li');
		pointer[oldidx].style.backgroundColor=''
		pointer[idx].style.backgroundColor='#fff';
	}
	/*向右滑*/
	toRight(){
		var picArr=['//img1.360buyimg.com/da/jfs/t21718/139/757565952/63132/67d1d5e7/5b17856fNf43e2b48.jpg',
        	'//img14.360buyimg.com/da/jfs/t20161/143/544153177/101492/f0cfd87/5b10e4a9Nc4dc8e75.jpg',
        	'//m.360buyimg.com/babel/jfs/t20326/126/496168267/60368/a88051dc/5b0e9278N636cb4d9.jpg',
        	'//m.360buyimg.com/babel/jfs/t22114/9/768847622/81254/e69a1497/5b178545N499976de.jpg',
        	'//m.360buyimg.com/babel/jfs/t21148/263/500139364/86146/4a473fcf/5b0f68bfN7031ac10.jpg',
        	'//img1.360buyimg.com/da/jfs/t21142/58/847620726/99735/d02da881/5b190228N2404e841.jpg'
        	];
        var oldidx=picArr.indexOf(this.state.thispic);
		var idx=oldidx+1;
		if(idx>5){
			idx=idx-6;
		}
		this.setState({thispic:picArr[idx]})
		var pointer = document.querySelectorAll('.pointer li');
		pointer[oldidx].style.backgroundColor=''
		pointer[idx].style.backgroundColor='#fff'
	}
	/*图片设置定时*/
	componentDidMount(){
		var _this=this;
		this.timer = setInterval(function(){
			_this.toRight()
		},1500)
	}
	removetimer(){
		if(this.timer){
			clearInterval(this.timer)
		}
	}
	settimer(){
		var _this=this;
		this.timer  = setInterval(function(){
			_this.toRight()
		},1500)
	}
	render(){
		return(
			<div className='slide-images' onMouseEnter={this.removetimer.bind(this)} onMouseLeave={this.settimer.bind(this)}>
				<button className='toleft' onClick={this.toLeft.bind(this)}></button>
				<div>
					<img src={this.state.thispic}></img>
				</div>
				<button className='toright' onClick={this.toRight.bind(this)}></button>
				<ul className='pointer'>
					<li style={{backgroundColor:this.state.defaultbgcolor}}></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		)
	}
}
/*内容主组件*/
class Content extends Component{
	render(){
		return(
			<div className='index-content'>
				<Slideimges/>
				<Activitysug/>
				<Useroperate/>
			</div>
		)
	}
}
/*活动显示组件*/
class Activitysug extends Component{
	render(){
		return(
			<div className='activity-img'>
				<a className='act1'><img src='//img12.360buyimg.com/babel/s190x150_jfs/t20764/14/768369621/77709/82b33af3/5b188372N8793b2d2.jpg!q90!cc_190x150'></img></a>
				<a className='act2'><img src='//img12.360buyimg.com/babel/s190x150_jfs/t21247/152/860459704/65364/d88c50/5b18f91aN32baf41d.jpg!q90!cc_190x150'></img></a>
				<a className='act3'><img src='//img1.360buyimg.com/pop/s190x150_jfs/t20218/244/372226436/42443/181236c4/5b0ba916N10b2ad3d.jpg!q90!cc_190x150'></img></a>
			</div>
		)
	}
}
/*用户显示操作组件*/
class Useroperate extends Component{
	render(){
		return(
			<div className='user-operate'>
				<div className='uo1'></div>
				<Usreop2/>
				<Usreop3/>
			</div>
		)
	}
}
/*促销公告组件*/
class Usreop2 extends Component{
	constructor(props){
		super(props);
        this.state = {
        	promotion:true,
        	notice:false
        };
	}
	showTag(res,e){
		let alltag = document.querySelectorAll('.uo2-tags li');
		for(var i=0;i<alltag.length;i++){
			alltag[i].setAttribute('class','')
		}
		e.target.setAttribute('class','tag-active')
		switch(res){
			case "promotion":this.setState({promotion:true});this.setState({notice:false});break;
			case "notice":this.setState({notice:true});this.setState({promotion:false});break;
		}
	}
	render(){
		var promotionShow;
		this.state.promotion?promotionShow='block':promotionShow='none';
		var noticeShow;
		this.state.notice?noticeShow='block':noticeShow='none';
		return(
			<div className='uo2'>
					<ul className='uo2-tags' >
						<li onMouseEnter={this.showTag.bind(this,'promotion')} className='tag-active'>促销</li>
						<li onMouseEnter={this.showTag.bind(this,'notice')}>公告</li>
						<li>更多</li>
					</ul>
					<ul className='uo2-con'>
						<li style={{display:promotionShow}}>
							<a>玩所未玩，爆款低至5折抢</a>
							<a>平板电脑6.18元秒杀!</a>
							<a>波士顿大龙虾79.9</a>
							<a>京东超市每满199减100</a>
						</li>
						<li style={{display:noticeShow}}>
							<a>京东PLUS会员权益更新及会费调整</a>
							<a>京东启用全新客服电话“950618”</a>
							<a>关于召回普利司通（天津）轮胎有限公司2个规格乘用车轮胎的公告</a>
							<a>京东物流推出配送员统一外呼电</a>
						</li>
					</ul>
			</div>
		)
	}
}
/*酒店、话费、机票、游戏组件*/
class Usreop3 extends Component{
	constructor(props){
		super(props);
        this.state = {
        	thisLetter:"p1",
        	teleCharge:true,
        	ariTicket:false,
        	hotelOrder:false,
        	playGame:false
        };
    }
	showTag(res,e){
		let alltag = document.querySelectorAll('.uo3-tags li');
		for(let i=0;i<alltag.length;i++){
			alltag[i].setAttribute('class','')
		}
		e.target.setAttribute('class','tag-active')
		switch(res){
			case "teleCharge":this.setState({teleCharge:true,ariTicket:false,hotelOrder:false,playGame:false}); break;
			case "ariTicket":this.setState({teleCharge:false,ariTicket:true,hotelOrder:false,playGame:false}); break;
			case "hotelOrder":this.setState({teleCharge:false,ariTicket:false,hotelOrder:true,playGame:false}); break;
			case "playGame":this.setState({teleCharge:false,ariTicket:false,hotelOrder:false,playGame:true}); break;
		}
	}

    choseLetter(e){
    	let clname = e.target.className;
    	document.querySelector('.choosePlace .'+this.state.thisLetter).setAttribute('class',this.state.thisLetter);
    	document.querySelector('.choosePlace .'+clname).setAttribute('class',clname+' choosePlace-active');
    	document.querySelector('.placeItem .'+this.state.thisLetter).style.display='none';
    	document.querySelector('.placeItem .'+clname).style.display='block';

    	this.setState({thisLetter: clname });
    }
    choseDestination(e){
    	var palce = e.target.firstChild.nodeValue;
    	var tag = e.target.nodeName;
    	if(palce&&tag=='A'){
    		document.getElementById('Destination').value=palce;
    		document.getElementsByClassName('choosePlace')[0].style.display='none';
    	}
    }
    showChosePlace(){
    	document.getElementsByClassName('choosePlace')[0].style.display='block';
    }
	render(){
		var teleChargeShow;
		this.state.teleCharge?teleChargeShow='block':teleChargeShow='none';
		var ariTicketShow;
		this.state.ariTicket?ariTicketShow='block':ariTicketShow='none';
		var hotelOrderShow;
		this.state.hotelOrder?hotelOrderShow='block':hotelOrderShow='none';
		var playGameShow;
		this.state.playGame?playGameShow='block':playGameShow='none';
		return(
			<div className='uo3'>
				<ul className='uo3-tags'>
						<li onMouseEnter={this.showTag.bind(this,'teleCharge')} className='tag-active'>话费</li>
						<li onMouseEnter={this.showTag.bind(this,'ariTicket')}>机票</li>
						<li onMouseEnter={this.showTag.bind(this,'hotelOrder')}>酒店</li>
						<li onMouseEnter={this.showTag.bind(this,'playGame')}>游戏</li>
					</ul>
					<ul className='uo3-con'>
						<li className='teleCharge' style={{display:teleChargeShow}}></li>
						<li className='ariTicket' style={{display:ariTicketShow}}></li>
						<li className='hotelOrder' style={{display:hotelOrderShow}}>
							<div className='uo3-a'>
								<a>国内/港澳台</a>
								<a>促销活动</a>
							</div>
							<form>
							<label> 目 的 地 </label>
							<input type='text' placeholder='北京' id='Destination' onClick={this.showChosePlace.bind(this)}/><br/>
							<div className='choosePlace'>
								<span>支持中文/拼音/简拼输入</span>
								<ul onClick={this.choseLetter.bind(this)}>
									<li className='p1 choosePlace-active'>热门城市</li>
									<li className='p2'>ABC</li>
									<li className='p3'>DEFG</li>
									<li className='p4'>HJ</li>
									<li className='p5'>kLM</li>
									<li className='p6'>NPQ</li>
									<li className='p7'>RSTW</li>
									<li className='p8'>XYZ</li>
								</ul>
								<div className='placeItem'>
									<ul>
										<li className='p1' style={{display:'block'}} onClick={this.choseDestination.bind(this)}>
											<a>北京</a>
											<a>上海</a>
											<a>广州</a>
											<a>成都</a>
											<a>武汉</a>
											<a>杭州</a>
											<a>深圳</a>
											<a>三亚</a>
											<a>厦门</a>
											<a>南京</a>
											<a>青岛</a>
											<a>西安</a>
											<a>天津</a>
											<a>重庆</a>
											<a>苏州</a>
											<a>济南</a>
											<a>长沙</a>
											<a>香港</a>
											<a>大连</a>
											<a>哈尔滨</a>
										</li>
										<li className='p2'  onClick={this.choseDestination.bind(this)}>
											<span>A</span>
											<a>安顺市</a>
											<a>安吉</a>
											<a>安庆</a>
											<a>鞍山</a><br/>
											<span>B</span>
											<a>北京</a>
											<a>百色</a>
											<a>包头</a>
											<a>滨州</a>
											<a>北海</a>
											<a>本溪</a>
											<a>蚌埠</a>
											<a>北戴河</a>
											<a>保定</a>
											<a>宝鸡</a><br/>
											<span>C</span>
											<a>长沙</a>
											<a>重庆</a>
											<a>成都</a>
											<a>常熟</a>
											<a>长春</a>
											<a>慈溪</a>
											<a>常州</a>
											<a>沧州</a>
											<a>长治</a>
											<a>赤峰</a>
											<a>长白山</a>
											<a>池北</a>
											<a>承德</a>
											<a>潮州</a>
											<a>昌黎</a>
											<a>郴州</a>
										</li>
										<li className='p3'></li>
										<li className='p4'></li>
										<li className='p5'></li>
										<li className='p6'></li>
										<li className='p7'></li>
										<li className='p8'></li>
									</ul>
								</div>
							</div>
							<label>入住日期</label>
							<input type='date' placeholder='2018/6/9'/><br/>
							<label>离店日期</label>
							<input type='date' placeholder='2018/6/9'/>
							<input type='text' placeholder='酒店/商圈/地标'/>
							<button>酒店查询</button>
							<a>订酒店上京东</a>
							</form>
						</li>
						<li className='playGame' style={{display:playGameShow}}></li>
					</ul>
			</div>
		)
	}
}
export default Content