import React from 'react';
import ReactDOM from 'react-dom';

export function JqueryExtend(fnName,Component){
	
	const __TARGETS=[];
	const mode = process.env.NODE_ENV;
 

	const p = new Promise((resolve,reject)=>{		
		const hotRender=function(NewComponent){
			//console.log('hotRender');
			__TARGETS.map((x)=>{
	
				ReactDOM.render(
				  <NewComponent {...x.params}/>,
				  x.t
				);
			  })
		}

 
		if(typeof jQuery !== 'undefined'){

			jQuery.fn[fnName] = function (params) {
				
			
				this.each(function () {
					__TARGETS.push({t:this,params:params});
				
					ReactDOM.render(
						<Component {...params}/>,
						this
					);
				});
				if(mode == 'development'){			
					resolve(hotRender);
				}
				
			};
			
		}
		 
	})
	return p;
	
}