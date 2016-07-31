window.onload=function(){
	
	var msg = document.getElementsByTagName("p");
	var msg_name = msg[0];
	var msg_pswd = msg[1];
	var msg_conf = msg[2];
	var name = $("#name");
	var pswd = $("#pswd");
	var confirm = $("#confirm");
	var em = document.getElementsByTagName('em');
	var reg2 = /[^\d]/g;
	var reg3 = /[^a-zA-Z]/g;
	$("#name").onfocus=function(){
		msg_name.style.visibility = "visible";
		msg_name.innerHTML="<i class = 'ati'></i>5-25个字符，一个汉字为2个字符，推荐使用中文会员名";
		

	} 
	$("#name").onkeyup=function(){
		$("#count").style.visibility = "visible";
		name_length = getLength(this.value);
		if (name_length!=0){
			$("#count").innerHTML = name_length+"个字符";
			
	}else{
		$("#count").style.visibility  = 'hidden';
		}
	}
name.onblur = function(){
	var reg=/[^\w\u4e00-\u9fa5]/g;
	if (reg.test(this.value)) {
		msg_name.innerHTML="<i class='err'></i>含有非法字符";
	}else if(this.value==""){

		msg_name.innerHTML="<i class='err'></i>不能为空";
	}else if(name_length>25){

		msg_name.innerHTML="<i class='err'></i>长度超过25个字符";
	}else if(getLength(this.value)<6){
		msg_name.innerHTML="<i class='err'></i>长度小于6个字符";

	}else{
		msg_name.innerHTML="<i class='ok'></i>OK";

	}
}
pswd.onfocus=function(){
	msg_pswd.style.visibility = "visible";
	msg_pswd.innerHTML="<i class = 'ati'>5-15个字符，可以使用字母。数字符号组合，不能单独使用字母汉字或符号</i>";
		
}
pswd.onkeyup=function(){
if(this.value.length>5){
	em[1].className ='active';
	confirm.removeAttribute('disabled');
	msg_conf.style.visibility="visible";
}
if (this.value.length<=5) {
	em[1].className ='inactive';
	confirm.setAttribute('disabled','disabled');
	msg_conf.style.visibility="hidden";
}
if(this.value.length>10){
	em[2].className ='active';
	confirm.removeAttribute('disabled');
	msg_conf.style.visibility="visible";
}
if (this.value.length<=10) {
	em[2].className ='inactive';
}
}
pswd.onblur=function(){
	var m=findStr(this.value,this.value.charAt(0));
	if (this.value=="") {
		msg_pswd.innerHTML="<i class = 'err'>不能为空</i>";
	}else if(m==this.value.length){
		msg_pswd.innerHTML="<i class = 'err'>不能全为重复字符</i>";
	}else if(!reg2.test(this.value)){
    msg_pswd.innerHTML="<i class = 'err'>不能全为数字</i>";
	}else if(getLength(this.value)<6||getLength(this.value)>16){
		msg_pswd.innerHTML="<i class = 'err'>长度必须为6到16位字符</i>";
	}else if (!reg3.test(this.value)) {
		msg_pswd.innerHTML="<i class = 'err'>不能全为字母</i>";
	}else{
		msg_pswd.innerHTML="<i class = 'err'>OK!</i>";
	}
}
confirm.onblur=function(){
	if(this.value!=pswd.value){
		msg_conf.innerHTML="<i class = 'err'>两次密码输入不一致</i>";
	}else{
		msg_conf.innerHTML="<i class = 'err'>OK!</i>";
	}
}
}
function $(el){
	return document.querySelector(el);;
}
function getLength(str){
	return str.replace(/[^\x00-xff]/g,"xx").length;
}
function findStr(str,n){
	var tmp = 0;
	for(var i=0 ; i<str.length; i++){
		if(str.charAt(i)==n)
			tmp++;
	}
	return tmp;

}