function selam(){
    alert("Merhaba, siteme hoşgeldiniz");
}

function kontrol(){

    var isim, email, yas, btn, usermessage;
    isim = document.getElementById("isim").value;
    email = document.getElementById("mail").value;
    yas = document.getElementById("yas").value;
    usermessage= document.getElementById("u_message").value;
    btn = document.getElementById("contact_form_button");
    btn = document.createElement("button");

    if(isim==""){
        alert("Ad-Soyad boş olamaz");
   
   if(email==""){
        alert("Email boş kalamaz");    
    }

    if(yas <=0 || yas>=100){
        alert("Yaş sıfırdan büyük olmalı fakat yüzden küçük olmalı");
    }
        if(yas==""){
       alert("Yaş boş kalamaz");

            if(usermessage==""){
                alert("Mesaj kutusu boş kalamaz");
            }

    } 

    }
    else { 
        alert("Başarıyla gönderildi");
        btn.formAction="contact.php"; btn.formMethod="post";
    }
    
}