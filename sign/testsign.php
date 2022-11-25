<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>de tai lap trinh web</title>
	<script type="text/javascript" language="JavaScript" src="image-logo.js"></script>
	<script type="text/javascript" language="JavaScript" src="fontcolor.js"></script>
	<link href="bootstrap-5.1.3\dist\css\bootstrap.css">
	<script src="bootstrap-5.1.3\dist\css\bootstrap.js"></script>
	<link href="aos-master\dist\aos.css" rel="stylesheet">
	<script src="aos-master\dist\aos.js" language="JavaScript"></script>
	<link rel="stylesheet" type="text/css" href="stylelsign1.css">
	<link rel="stylesheet" type="text/css" href="stylelsign.css">
</head>
<body>
	<div class="container-k">
			<div class="menutop">
		<header>
		<div class="menu" data-aos="fade-down" data-aos-duration="500">
			<div class="up">
				<ul>
					<li class="logo-menu"><a href=""><img src="iconsign\logo.png" name="picload-logo-before" id="picload-logo-before"  height="100px"></a></li>
					<li style="padding-right:25px;"><a href=""><span onmouseover="fontcolorafter(this)" onmouseout="fontcolorbefore(this)" class="font-color1"><strong>Trang chủ</strong></span></a></li>
					<li><a href=""style="padding-right:25px;"><span onmouseover="fontcolorafter(this)" onmouseout="fontcolorbefore(this)" class="font-color1" name="change-fontcolor" id="change-fontcolor"><strong>Giới thiệu</strong></span></a></li>
					<li><a href="" style="padding-right:25px;"><span onmouseover="fontcolorafter(this)" onmouseout="fontcolorbefore(this)" class="font-color1"><strong>Sản phẩm</strong></span></a></li>
					<li><a href="" style="padding-right:25px;"><span onmouseover="fontcolorafter(this)" onmouseout="fontcolorbefore(this)" class="font-color1"><strong>Cửa hàng</strong></span></a></li>
					<li><a href="" style="padding-right:25px;"><span onmouseover="fontcolorafter(this)" onmouseout="fontcolorbefore(this)" class="font-color1"><strong>Liên hệ</strong></span></a></li>
				</ul>
			</div>
		</div>
		<script type="text/javascript" language="JavaScript">
			
		</script>
</header>
	</div>
	<div class="content-k">

		<form class="form-sign" name="form_sign" id="form_sign" method="post" action="storage_sign.php" onsubmit="return kiemtra();" >
			<h1>Đăng ký</h1>
			<ul>
				<li style="padding-right:0px;padding-left: 0px;"><input type="text" name="name" id="name" placeholder="Họ" style="padding-left:10px" ></li>
				<li style="padding-right:10px;padding-left: 40px;"><input type="text" name="lastName" id="lastName" placeholder="Tên" style="padding-left:10px"></li>
			</ul>
			<div class="form-text">
				
				<input type="text" name="password" id="password" placeholder="Mật Khẩu" style="padding-left:10px">
			</div>
			<div class="form-text">
				
				<input type="password" name="repassword" id="repassword" placeholder="Nhập lại mật khẩu" style="padding-left:10px">
			</div>

		<div class="form-information">
			<table>	
					<thead>
					<th>	
						<p style="float:left; color: #808080;padding-bottom: 8px;">Sinh nhật</p>
					</th>
				</thead>
				<tbody>
					<tr>	
						<td>
							<ul>
								<li>
									<select class="day"></select>
								</li>
								<li>
									<select class="month"></select>
								</li>
								<li>
									<select class="year"></select>
								</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
				<div class="form-information1">
			<table>
				<thead>
					<th>	
						<p style="float:left;color: #808080;">Giới tính</p>
					</th>
				</thead>
				<tbody>
					<tr>	
						<td>
							<ul>
								<li style="padding-left: 110px;padding-right: 0px;">

									<label>Nam</label>
									<input type="radio" name="Man" id="Man">
								</li>
								<li style="padding-left:80px;">
									<label>Nữ</label>
									<input type="radio" name="Woman" id="Woman">
								</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
			<div class="form-Acpt">
			<button>Đặng nhập</button>
			<input type="checkbox" name="ch_Acpt" id="ch_Acpt"  >
			 <label for="vehicle1">Tôi đồng ý với các điều khoản sử dụng dịch vụ và chính sách bảo mật</label>
			</div>
		<div class="icon-k">
			<ul>
				<li style="padding-left:100px;"><a href="#"><img src="https://cdn.iconscout.com/icon/free/png-256/google-1772223-1507807.png" width="33px" height="33px"></a></li>
				<li><a href="#"><img src="https://i.rada.vn/data/image/2020/08/21/Facebook-2020-200.png" width="33px" height="33px"></li>
			</ul>
			<span><p style="text-align:center; color: #808080; font-size: 1.1em;display: inline;">Bạn đã có tài khoản?</p><a href="~/login/login.html" style="font-size: 1.1em;color: blue;"> Đăng nhập</a></span>
		</div>
		</form>
	</div>

	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<script type="text/javascript">
		function kiemtra(){
			var lastName = document.getElementById("lastName");
			var Name = document.getElementById("name");
			var Password=document.getElementById("password");
			var Repassword=document.getElementById("repassword");
			if(Name.value==""){
				alert("Vui lòng nhập họ");
				Name.focus();
				return false;

			}	
			if(lastName.value==""){
				alert("Vui lòng nhập tên");
				lastName.focus();
				return false;

			}
			if(Password.value==""){
				alert("Vui lòng nhập mật khẩu");
				Password.focus();
				return false;

			}
			if(Repassword.value==""){
				alert("Vui lòng nhập lại mật khẩu");
				Repassword.focus();
				return false;

			}
			if(document.getElementById("Man").checked==true && document.getElementById("Woman").checked==true){
				alert("Vui lòng lỗi giới tính vui lòng chọn lại");
				document.getElementById("Men").checked=false;
				document.getElementById("Woman").checked=false;
			}
			if(document.getElementById("Man").checked==false && document.getElementById("Woman").checked==false ){
				alert("Vui lòng chọn giới tính")
				document.getElementById("Men").checked=false;
				document.getElementById("Woman").checked=false;
			}	
			if(document.getElementById("ch_Acpt").checked==false){
				alert("Vui lòng chấp nhận điều kiện và chính sách");
			}
		}
	</script>
	<script>
		$(function(){
			var $select=$(".day");
			for(i=31;i>=1;i--){
				$select.append($('<option></option>').val(i).html(i))
			}
		});
		$(function(){
			var $select=$(".month");
			for(i =12;i>=12;i--){
				$select.append($('<option></option>').val(i).html("Tháng "+i))
			}
		});
		$(function(){
			var $select=$(".year");
			for(i =2022;i>=1900;i--){
				$select.append($('<option></option>').val(i).html(i))
			}
		});
	</script>
</body>
</html>