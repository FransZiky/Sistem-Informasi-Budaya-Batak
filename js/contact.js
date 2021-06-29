function validate(){
	var nama = document.forms["form"]["nama"].value;
	var email = document.forms["form"]["email"].value;
	var email2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var subject = document.forms["form"]["subject"].value;
	var pesan = document.forms["form"]["pesan"].value;

	if (nama=="") {
		alert("Nama belum di isi !");
		return false;
	}

	if (email=="") {
		alert("Email tidak boleh kosong !");
		return false;
	}

	if(!email2.test(email)){
		alert("Penulisan Email Tidak Benar !");
		return false;
	}

	if (subject=="") {
		alert("Subject tidak boleh kosong !");
		return false;
	}

	if (pesan == "") {
		alert("Anda lupa mengisikan pesan/comentar !");
		return false;
	}

}