function Array(){
	var len = arguments.length;
	var array=[];
	var i;
	switch(len){
		case 0:break;
		case 1:if(typeof(arguments[0])===Number){
			array.length=arguments[0];
		}else{
			array[0]=arguments[0];
		}		
		break;
		default: for (i=0;i<len;i++){ 
			array[i]=arguments[i];
		}
	}
	return array;
}


function String(){
	var o = {};
	var array=[];
	var len = arguments.length,alen;
	var i;
	if(len==0){
		alen=0;
	}else if (len >= 1){
		len=1;  
		if(typeof(arguments[0])!=String){
		/*	arguments[0]=arguments[0].toString()//这里用了toString是败笔*/
		arguments[0]= ''+arguments[0];//''+数字会直接转化为字符串                                         
		}
		array=arguments[0].split("");
		for (i=0,alen=array.length;i<alen;i++){
			o[i]=array[i];
		}
	}
	o.length=alen;
	String.prototype=String;
	return o;
}

