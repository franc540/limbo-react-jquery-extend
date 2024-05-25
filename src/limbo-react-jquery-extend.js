import React from 'react';
///import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'


export function JqueryExtend(fnName,Component){
	
	const __TARGETS=[];
	const mode = process.env.NODE_ENV;
 

	const p = new Promise((resolve,reject)=>{		
		const hotRender=function(NewComponent){
			//console.log('hotRender');
			__TARGETS.map((x)=>{
				
				createRoot(x.t).render( <NewComponent {...x.params}/>)
			  })
		}

 
		if(typeof jQuery !== 'undefined'){

			jQuery.fn[fnName] = function (params) {
				
			
				this.each(function () {
					__TARGETS.push({t:this,params:params});
					
					createRoot(this).render( <Component {...params}/>)

				});
				if(mode == 'development'){			
					resolve(hotRender);
				}
				
			};
			
		}
		 
	})
	return p;
	
}