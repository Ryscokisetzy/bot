import fetch from 'node-fetch';
var nansoffc = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* buatkan saya code express.js`
try {
  await m.reply(wait)
  var apii = await fetch(`https://api.betabotz.eu.org/api/search/blackbox-chat?text=${text}&apikey=${lann}`)
  var res = await apii.json()
  await m.reply(res.message)
} catch (err) {
  console.error(err)
  throw "Terjadi kesalahan dalam menjawab pertanyaan"
}
}
nansoffc.command = nansoffc.help = ['blackbox','blackboxai','aicoding'];
nansoffc.tags = ['tools','ai'];
nansoffc.premium = false
nansoffc.diamond = true
export default nansoffc;