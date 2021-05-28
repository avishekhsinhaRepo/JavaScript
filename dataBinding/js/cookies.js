(function () {
    if(getCookie('tfn')== null)
        document.cookie = "tfn=1800 67322; expires=Thu, 18 Dec 2021 12:00:00 UTC;";
    $( document ).trigger( "tfnCookie")
  })();