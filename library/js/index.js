function fadeout() {
    document.getElementById('copysuccess').style.opacity = '0';
    document.getElementById('copysuccess').innerHTML = '';
  }

function copy() {
    navigator.clipboard.writeText('freelegalweed@gmail.com');
    document.getElementById('copysuccess').innerHTML = 'Email copied to clipboard.';
    window.setTimeout(fadeout, 3000);
  }
