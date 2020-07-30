var $ = function ( id ) { return document.getElementById( id ); }


var validate2 = function()
{
  var email = $("given-email").value;
  var errors = "";
  if ( email == "" )
    errors += "You must enter an email address \n";
  if ( errors == "" )
    alert( "Thank you" );
  else
    alert( errors );
}
window.onload = function()
{
  $("subscribe-button").onclick = validate2;
}
