$(document).on("tfnCookie", () =>{
    context.tfn= getCookie('tfn');
    Twine.reset(context).bind().refresh();
});
