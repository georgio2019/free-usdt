


function share() {
  const shareUrl = window.location.href;
  const shareText = "Check out this USDT Mining site and earn rewards!";
let clickCount = 0;
let adIndex = 0;

const adLinks = [
  "https://www.profitableratecpm.com/h5v8mhd1x?key=c75ec7e5f06ddc1018b91041bc3b9c98",
  "https://www.profitableratecpm.com/kd3q8t8f?key=940c48adaf827d5d281a7a2c6d879216",
  "https://www.profitableratecpm.com/venz52rjr?key=7267283ed28e44df4e53bd8261927842",
  "https://www.profitableratecpm.com/fu7yev62bm?key=e054b07766ce67c26142e2940e9e0543",
  "https://www.profitableratecpm.com/zdbdureths?key=75426bc7cf41ba08f80204bc57ece038",
  "https://www.profitableratecpm.com/ckp7swjv?key=e88314d8ba2ec5cbc46449c728846ba9",
  "https://www.profitableratecpm.com/j2s0a3hks?key=cf128de4a33451aeaaf35201b424a746",
  "https://www.profitableratecpm.com/nwaq6p0d?key=d28d5f896c27ff3f2f9a6a2bb28161cf",
  "https://www.profitableratecpm.com/ee2xfxv50c?key=bd5934fc78d95edb0e37c95bfe568596",
  "https://www.profitableratecpm.com/fcr4shw2?key=132f44382b5db1ad01ca35c65cf33d4d",
  "https://www.profitableratecpm.com/yc1f90tj46?key=e2e5d1849cf9a6df3b3c0cbc9b19e17e",
  "https://www.profitableratecpm.com/vdy1v6k1b7?key=093eeca67ee1673af6838e197a700ae7",
  "https://www.profitableratecpm.com/yp51mdc748?key=7a0fd1f191b0acd3b0bde795a884cbce",
  "https://www.profitableratecpm.com/u8wpye066?key=4caaf75c44928bbc0000389cc28a2a30",
  "https://www.profitableratecpm.com/twcyc0icci?key=3f9288dbca9c442999b2483bb822380b",
  "https://www.profitableratecpm.com/hcku8bh2?key=6ac4a5403450587167dd7ae89bbabd23",
  "https://www.profitableratecpm.com/s24vyvcsi?key=19d7f86175c79b42521b990fb791e4cf",
  "https://www.profitableratecpm.com/zf1hqtds3?key=028431d66438c786de37190a566c0afb",
  "https://www.profitableratecpm.com/mrbfn42k3?key=a2e445b1a4130e320658483065a84ccc",
  "https://www.profitableratecpm.com/y8m923qg?key=76ee4b686008e1e37999f3f43e9e2d6a",
  "https://www.profitableratecpm.com/b92xam7ber?key=3d15295860a3f4e7a1747097222ef75a",
  "https://www.profitableratecpm.com/ik6df60rzb?key=5974ceb3e433235252d6467e53649b6a",
  "https://www.profitableratecpm.com/vgzuygd5su?key=ff3d6ed69fd7e51eb115351343af91c4",
  "https://www.profitableratecpm.com/xjkeah0x0b?key=b74c7a2245f66004f02fae0aee88ca71",
  "https://www.profitableratecpm.com/bgjrbn0zqx?key=b76fe29ed668bc13eb886c9ed471ad8b",
  "https://www.profitableratecpm.com/r69t06nik?key=0987f11879a629c80e6a1891e802340c",
  "https://www.profitableratecpm.com/q6ej3kuuzr?key=7fca69813c9ad82930e25033c8769281",
  "https://www.profitableratecpm.com/xyxv1xyne?key=71ca5c02834d88fb220c33fa2cf0c729",
  "https://www.profitableratecpm.com/y6pcktwgm?key=8ee2aa103fc3922c789ecbe47c2f6844",
  "https://www.profitableratecpm.com/c9fkk149qk?key=4b2412d5c1259b9526704a71eb8b1925",
  "https://www.profitableratecpm.com/db764f62u?key=cecad173990e7480507a41c43e30445b",
  "https://www.profitableratecpm.com/w45yhzpc?key=c0ae90838df96ee68914a821ff15fe51",
  "https://www.profitableratecpm.com/dd1nb7h9?key=908b59125d3fc4e23e2459969ab9f5ed",
  "https://www.profitableratecpm.com/kq0b4vn4q?key=ffab14d99dafd4d0a370db30f9db52a0",
  "https://www.profitableratecpm.com/g4h8ndq6p?key=6740a21f2c5d25f611e702209b3599de",
  "https://www.profitableratecpm.com/dfyauvwmgr?key=b1f4c08a4cbdac28eab60949dd94faf1",
  "https://www.profitableratecpm.com/ycgu0idvy?key=e8e724900b9daaaef26d9cf1bbd26b09",
  "https://www.profitableratecpm.com/u3fup41q5?key=898c1985053a2eeb2f05fad1b941e03b",
  "https://www.profitableratecpm.com/rr3ms0ru?key=8fc68a584c62d18a3130cde221876ea5",
  "https://www.profitableratecpm.com/v95qjk35?key=14db4d17eb639d9a1b547c0430b4526d",
  "https://www.profitableratecpm.com/es24prwe?key=eb746db5d93e0b5ad54d1b49afa28f7e",
  "https://www.profitableratecpm.com/awg03uiaxg?key=2c57defe3b414ecf67256edf995adba6",
  "https://www.profitableratecpm.com/jqtjrnr9bd?key=a9d7403e2a5e7311fc1e75c90958f9c1",
  "https://www.profitableratecpm.com/p1mdgt8pz?key=b635b8a917da96c4ea0b063260465ebf",
  "https://www.profitableratecpm.com/sqemv59sp0?key=16aaeae5ff98af5abb470e8ebf2fa0df",
  "https://www.profitableratecpm.com/r6c020f8w?key=c6bd77d5b7244cac50e24ec89b52ae4b",
  "https://www.profitableratecpm.com/b3anyhjf?key=d1f0f4dc6e59f6801300edfc9f64ba0f",
  "https://www.profitableratecpm.com/xys89dshr?key=8ac474509698618045c0ede16835734f",
  "https://www.profitableratecpm.com/fszq8xm5?key=0628e787034b43b71151c9598974a39f",
  "https://www.profitableratecpm.com/hhc2cwhkj?key=1ddf4c39898a4f9583cdde049f684bb8"
];

function eggClicked() {
  clickCount++;
  // Other logic like increasing balance...

  if (clickCount % 20 === 0 && adIndex < adLinks.length) {
    window.open(adLinks[adIndex], "_blank");
    adIndex++;
  }
}

  if (navigator.share) {
    navigator.share({
      title: 'USDT Mining',
      text: shareText,
      url: shareUrl,
    })
    .then(() => {
      // User confirmed share
      balance += 0.5;

