<head>
	<meta charset="utf-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <style>
    	.chip {
		  display: inline-block;
		  padding: 0 25px;
		  height: 38px;
		  font-size: 16px;
		  line-height: 38px;
		  border-radius: 25px;
		  background-color: #f1f1f1;
		}

		.chip img {
		  float: left;
		  margin: 0 10px 0 -25px;
		  height: 38px;
		  width: 38px;
		  border-radius: 50%;
		}
    </style>
</head>
<?php 
	if(isset($_POST["login"])){
		$email=$_POST['kullanici_mail'];
		$sifre=$_POST['kullanici_sifre'];

		if($email=="g191210103@sakarya.edu.tr" && $sifre=="123"){
			?>
			<div class="container-field">
				<div class="col-md-12 p-1">
			        <div class="chip float-left">
						<img src="images/profil.png">
						<b>Hoşgeldiniz</b> <?php echo strstr($email, '@', true); ?>	
					</div>
					<div class="float-right">
						<a href="login.html"><button class="btn btn-danger btn-xs" >Çıkış Yap</button></a>	
					</div>
					<div class="clearfix"></div>
				</div>
				</div>
			</div>
			<?php
		}
		else
		{
			header("Location:login.html?durum=hatali");
		}
	}
	else if(isset($_POST["basvuru"])){
		$ad=$_POST["ad"];
		$soyad=$_POST["soyad"];
		$email=$_POST["email"];
		$cinsiyet=$_POST["cinsiyet"];
		$diller = $_POST["dil"];
		$dgun=$_POST["dgun"];
		$day=$_POST["day"];
		$dyil=$_POST["dyil"];
		$il=$_POST["il"];
		$ilce=$_POST["ilce"];
		$adres=$_POST["adres"];
		?>
		<div class="container">
			<script>
			  $(document).ready(function(){
			        $("#myModal").modal('show');
			    });
		  	</script>
			  <!-- The Modal -->
			  <div class="modal fade" id="myModal">
			    <div class="modal-dialog modal-xl">
			      <div class="modal-content">
			        <div class="modal-body">
			          	<table class="table table-striped table-bordered col-md-12">
							<thead class="thead-dark">
							    <tr>
							      <th colspan="2" scope="col"><h4 style="text-align: center;">Başvuru Bilgileri</h4></th>
							    </tr>
						  	</thead>
						  	<tbody>
						      	<tr>
							        <th>Ad</th>
							        <td><?php echo $ad; ?></td>
						      	</tr>
						      	<tr>
							        <th>Soyad</th>
							        <td><?php echo $soyad; ?></td>
						      	</tr>
						      	<tr>
							        <th>Email</th>
							        <td><?php echo $email; ?></td>
						      	</tr>
						      	<tr>
							        <th>Yabancı Diller</th>
							        <td>
							        	<?php  
							        		foreach ($diller as  $dil) {
												echo $dil."<br>";
											}
								        ?>
							        </td>
						      	</tr>
						      	<tr>
							        <th>Cinsiyet</th>
							        <td><?php echo $cinsiyet; ?></td>
						      	</tr>
						      	<tr>
							        <th>Doğum Tarihi</th>
							        <td><?php echo $dgun." ".$day." ".$dyil; ?></td>
						      	</tr>
						      	<tr>
							        <th>İl</th>
							        <td><?php echo $il ?></td>
						      	</tr>
						      	<tr>
							        <th>İlçe</th>
							        <td><?php echo $ilce; ?></td>
						      	</tr>
						      	<tr>
							        <th>Adres</th>
							        <td><?php echo $adres; ?></td>
						      	</tr>
					      </tbody>
					  </table>
			        </div>
			        <div class="modal-footer">
			          <a href="iletisim.html"><button type="button" class="btn btn-secondary">İletişim Sayfasına Dön</button></a>
			        </div>
			        
			      </div>
			    </div>
		  	</div>
		</div>
		<?php
	}
	else
	{
		header("Location:login.html");
	}
?>