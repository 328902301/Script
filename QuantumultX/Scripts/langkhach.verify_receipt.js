/******************************
#!name=Unlock Any Buy Apple
#!desc=Unlock Beer, in short, fabulous, ShadowLink, ..
[MITM]
hostname = %APPEND% buy.itunes.apple.com
[Script]
Buy = type=http-response,pattern=^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt,requires-body=1,max-size=0,script-path=scripts/langkhach/verify_receipt.js,script-update-interval=-1
*******************************/

re('("expires_date"):"\\w{4}@("expires_date_pst"):"\\w{4}@("expires_date_ms"):"\\w+"','$1:"2099@$1:"2099@$1:"4096019658000"');
function re() {
var body = $response.body;
if(!body){
$done({});
}
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done({body});
} 