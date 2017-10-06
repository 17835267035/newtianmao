window.onload = function(){
	//nav
	// let mains = $('.nav-right')[0];
	// let list = $('li',mains);	
	// let tb = $('.tb',mains);
	// console.log(tb);
	// 	list[0].onmouseover = function(){
	// 		tb[0].style.display = 'block';			
	// 	}
	// 	list[0].onmouseout = function(){
	// 		tb[0].style.display = 'none';
	// 	}
	// 	list[3].onmouseover = function(){
	// 		tb[1].style.display = 'block';
	// 	}
	// 	list[3].onmouseout = function(){
	// 		tb[1].style.display = 'none';
	// 	}
	// 	list[4].onmouseover = function(){
	// 		tb[2].style.display = 'block';
	// 	}
	// 	list[4].onmouseout = function(){
	// 		tb[2].style.display = 'none';
	// 	}
	// 	list[6].onmouseover = function(){
	// 		tb[3].style.display = 'block';
	// 	}
	// 	list[6].onmouseout = function(){
	// 		tb[3].style.display = 'none';
	// 	}
	// 	list[7].onmouseover = function(){
	// 		tb[4].style.display = 'block';
	// 	}
	// 	list[7].onmouseout = function(){
	// 		tb[4].style.display = 'none';
	// 	}


		
	// 侧导航
	let cebian = document.getElementsByClassName('banner-left')[0];
	let lis = cebian.getElementsByClassName('cb');
	let item = cebian.getElementsByClassName('item');


	console.log(cebian);
	console.log(lis);
	console.log(item);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover = function(){
			item[i].style.display = 'block';
			// animate(item[i],{opacity:1});
		}
		lis[i].onmouseout = function(){
			item[i].style.display = 'none';
			// animate(item[i],{opacity:0});
		}
	}


	// banner
	let banner = $('#banner');
	let btn = document.getElementsByClassName('banner-btn')[0];
	let lis1 = btn.getElementsByTagName('li');
    let bannerimg = document.getElementsByClassName('banner-img')[0];
    let lis2 = bannerimg.getElementsByTagName('li');
    console.log(banner);	
        
        //图片的li隐藏，第一张图片的li显示
		// let now = 0;
		//   for(let i=0;i<lis1.length;i++){
		//     lis1[i].onclick = function(){
		//       lis2[now].style.display = 'none';
		//       lis1[now].style.background = '#98979B';
		//       lis2[i].style.display = 'block';
		//       lis1[i].style.background = '#fff';
		//       now = i;
		//     }
		//   }
		
		for(let i=0;i<lis1.length;i++){
			lis1[i].onclick = function(){
				for(let j=0;j<lis2.length;j++){
					animate(lis2[j],{opacity:0});
					// lis2[j].style.display = 'none';
					lis1[j].style.background = '#98979B';
				}
				animate(lis2[i],{opacity:1});
				// lis2[i].style.display = 'block';
				lis1[i].style.background = '#fff';
				num = i;
			}
		}

        
        let num = 0;
        let t;
        t = setInterval(move,2000);
        banner.onmouseover = function(){
        	clearInterval(t);
        }
        banner.onmouseout = function(){
        	t = setInterval(move,2000);
        }
        function move(){
        	num++;
        	if(num == lis2.length){
        		num = 0;
        	}
        	for(let i=0;i<lis2.length;i++){
        		animate(lis2[i],{opacity:0});
        		// lis2[i].style.display = 'none';
				lis1[i].style.background = '#98979B';
			}
			animate(lis2[num],{opacity:1});
			// lis2[num].style.display = 'block';
			lis1[num].style.background = '#fff';

        	}


        	//左边滚动条
        	let chao = document.querySelector('.module');
        	let like = document.querySelector('.like');
        	let zuoaside = document.querySelector('.asideLeft');
        	let zuoli = document.querySelectorAll('.asideLeft li');
        	let divs = document.querySelectorAll('.beautiful-style');
        	// let imgs = document.querySelectorAll('.beautiful-style','img');
        	let toubu = document.querySelector('.toubu');
        	
        	let divsArr = [toubu,chao,...divs,like];
        	let newarr = [];
        	// console.log(item1);
        	let ch = innerHeight;
        	let zbcolor = ['#ff0036','#54c333','#000','#ea5f8d','#0aa618','#64c333','#f15453','#19c8a9','#ff0036','#ABABAB'];
        	let flag = true;

        	
        	divsArr.forEach(element=>{
				newarr.push(element.offsetTop);
			})

        	zuoli.forEach((element,index)=>{
				element.onclick = function(){
					for(let i=0;i<zuoli.length;i++){
						zuoli[i].style.background = '#626262';
					}
					flag = false;
					element.style.background = zbcolor[index];
					
					animate(document.body,{scrollTop:newarr[index]},function(){flag = true;})
				}
			})
        	let flag1 = true;
			window.onscroll = function(){
				// toubu出现				
				let scrolltop = document.body.scrollTop;
				if(scrolltop>=600){
					if(flag1){
						flag1 = !flag1;
						zuoaside.style.transform = `translateY(${0}px)`;
						zuoaside.style.opacity = 1; 
						toubu.style.transform = `translateY(${0}px)`;
						toubu.style.opacity = 1; 
						youli[9].style.opacity = 1;
					}					
				}
				if(scrolltop<600){
					if(!flag1){
						flag1 = !flag1;
						zuoaside.style.transform = `translateY(${-50}px)`;
						zuoaside.style.opacity = 0; 
						toubu.style.transform = `translateY(${-51}px)`;
						toubu.style.opacity = 0; 
						youli[9].style.opacity = 0;
					}					
				}
				if(!flag){
					return;
				}
				newarr.forEach((value,index)=>{
					if(scrolltop+ch>=value+200){
						for(let i=0;i<zuoli.length;i++){
							zuoli[i].style.background = '#626262';
							zuoli[0].style.background = '#ff0036';
							zuoli[9].style.background = '#ababab';
						}
						zuoli[index].style.background = zbcolor[index];
						let imgs = divsArr[index].getElementsByTagName('img');
						for(let i=0;i<imgs.length;i++){
							imgs[i].src = imgs[i].getAttribute('imgPath');
						}
					}

				})
			}

			//右边滚动条
			let youaside = document.getElementsByClassName('asideRight')[0];
        	let youli = youaside.getElementsByTagName('li');
        	let item1 = youaside.querySelectorAll('.item1');
        	let jiao = youaside.querySelectorAll('.jiao');
        	// console.log(item1);
        	for(let i=0;i<youli.length;i++){
		    	youli[i].onmouseover = function(){
		    		youli[i].style.background = '#ff0036';
		    		
		    	}
		    	youli[i].onmouseout = function(){
		    		youli[i].style.background = '#000';
		    		
		    	}
			}

			for(let i=0;i<youli.length;i++){
			youli[i].onmouseover = function(){
				item1[i].style.opacity = 1;
				jiao[i].style.opacity = 1;
				item1[i].style.transform = `translateX(${10}px)`; 
			}
			youli[i].onmouseout = function(){
				item1[i].style.opacity = 0;
				jiao[i].style.opacity = 0;
				item1[i].style.transform = `translateX(${0}px)`;
			}
		}

}