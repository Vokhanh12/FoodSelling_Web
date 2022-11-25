function kiemtra(form) {

	if(form.tendn.value.length==0)
	{
		alert("Bạn chưa nhập thông tin!");
		return false;
	}	

	if(form.mk.value==""){
		alert("Vui lòng nhập mật khẩu!");
		return false;
	}
	return true;
}
function checkdangky(form){
	var hoten=form.hoten.value;
	var ten=form.tendn.value;
	var email=form.email.value;
	var mk=form.mk.value;
	var nlmk=form.nlmk.value;
	var sdt=form.sdt.value;

	if(hoten=="")
		{
			alert("Vui lòng nhập đầy đủ họ tên!");
			return false;
	}	
	if(ten=="")
	{
		alert("Vui lòng nhập tên đăng nhập!");
		return false;
	}	
	if(sdt=="")
	{
		alert("Vui lòng nhập số điện !");
		return false;
	}	
	if(email=="")
	{
		alert("Vui lòng nhập tên email!");
		return false;
	}	
	if(mk=="")
	{
		alert("Vui lòng nhập mật khẩu!");
		return false;
	}	
	if(nlmk=="")
	{
		alert("Vui lòng nhập lại mật khẩu!");
		return false;
	}	

	for(var i=0,n=ten.length;i<n;i++)
	{
		if(ten[i]==' ')
			{
				alert("Tên đăng nhập không được chứa khoảng trắng!");
				return false;
			}
	}

	for (var i = sdt.length - 1; i >= 0; i--) {
		if(sdt[i]<'0'||sdt[i]>'9')
		{
			alert("Số điện thoại không hợp lệ!");
			return false;
		}
	}
	var ehl=false;
	for(let x in email)
	{
		if(x=='@')
		{
			ehl=true;
			break;
		}	
	}
	if(!ehl)
	{
		alert("email khoong hợp lệ!");
		return false;
	}
	if(form.mk.value!=form.nlmk.value)
	{
		alert("Mật khẩu bạn nhập không khớp !")
	}
}




function dichuyen(obj){
	obj.tranform.TranslateY("10px");
}