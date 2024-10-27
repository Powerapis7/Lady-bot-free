//｡☆✼★━━━━━━━━━━━━━━━━★✼☆｡
//.        LADY BUG BUTECA
//｡☆✼★━━━━━━━━━━━━━━━━★✼☆｡
require("./dono.js")

const { 
default:
makeWASocket, 
downloadContentFromMessage,
generateWAMessageContent,
generateWAMessageFromContent,
makeCacheableSignalKeyStore,
StylePrivWaFromMessage,
delay,
useMultiFileAuthState,
BufferJSON,
proto,
close,
prepareWAMessageMedia, 
MediaType,
MessageType,
ChatModification,
DisconnectReason,
relayWAMessage,
fetchLatestBaileysVersion,
WASocket,
Browsers,
EyeWaSocket,
makeInMemoryStore,
} = require('@WhiskeySockets/baileys');

// ──────┤MODULOS├────── //

const webp_mp4 = require("./arquivos/lib/webp_mp4.js");

const { getRandom} = require('./arquivos/funcoes/myfunc.js');

const { exec } = require("child_process")

const totalcmd = "1117"

const chalk = require('chalk');

const { runtime } = require("./lib/myfunc")

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };

let pino = require('pino')

const YT = require('./lib/ytdl.js');

const yts = require("yt-search");

const fs = require('fs')

const PhoneNumber = require('awesome-phonenumber')

const cfonts = require('cfonts')


const axios = require('axios');

const infoSystem = require('os')

const NodeCache = require('node-cache')

const readline = require('readline')

const util = require("util")

const path = require("path")

const fetch = require('node-fetch');

const speed = require('performance-now')

const moment = require('moment-timezone');

const ffmpeg = require('fluent-ffmpeg');

const mimetype = require("mime-types")

const BodyForm = require("form-data")

const { Boom }  = require('@hapi/boom');

const crypto = require('crypto');

const cheerio = require('cheerio');

const { getBuffer, getGroupAdmins,} = require('./datab/myfunc.js')

const { Configuration, OpenAIApi } = require("openai");

const { menu } = require('./menus/menu.js')

const { logos } = require('./menus/logos.js')

const { criado } = require('./menus/criador.js')

const { menuvip } = require('./menus/menuvip.js')

const { menutravazap } = require('./menus/menutravazap.js')

const { menu1 } = require('./menus/menu1.js')

const { alugar } = require('./menus/alugar.js')

const { emoji2 } = require ('./settings.json')

const { menudono } = require('./menus/menudono.js')

const { menujogos } = require('./menus/menujogos.js')

const antilink = JSON.parse(fs.readFileSync('./loli/seguranca/antilink.json'))

const samih = JSON.parse(fs.readFileSync('./arquivos/usuarios/simi.json'));


const samih2 = JSON.parse(fs.readFileSync('./arquivos/funcoes/simi.json'));

const antilinkgp = JSON.parse(fs.readFileSync('./arquivos/antis/antilinkgp.json'))

const premium = JSON.parse(fs.readFileSync('./Premiums/usuarios/premium.json'));

const antiporn = JSON.parse(fs.readFileSync('./arquivos/antis/antiporn.json'))

const antidoc = JSON.parse(fs.readFileSync('./arquivos/antis/antidoc.json'))

const { conselhob } = require('./arquivos/funcoes/conselhob.js');

const antictt = JSON.parse(fs.readFileSync('./arquivos/antis/antictt.json'))

const casa = JSON.parse(fs.readFileSync('./funcoes_rpg/casa/casa.json'));

const modobn = JSON.parse(fs.readFileSync('./arquivos/grupos/brincadeiras.json'));

const antiflood = JSON.parse(fs.readFileSync('./arquivos/usuarios/antiflood.json'));

const limitefll = JSON.parse(fs.readFileSync('./arquivos/usuarios/flood.json'));

const registros = JSON.parse(fs.readFileSync('./arquivos/registro/registros.json'));

const antiloc = JSON.parse(fs.readFileSync('./arquivos/antis/antiloc.json'))

const antifake = JSON.parse(fs.readFileSync('./arquivos/antis/antifake.json'))

const carab = JSON.parse(fs.readFileSync('./funcoes_rpg/carab/carab.json'));

const nescessario = JSON.parse(fs.readFileSync('./arquivos/nescessario.json'));

const antiaudio = JSON.parse(fs.readFileSync('./arquivos/antis/antiaudio.json'))

const caussa = JSON.parse(fs.readFileSync('./funcoes_rpg/caussa/caussa.json'));

const anotar = JSON.parse(fs.readFileSync('./database/func/tabela/anotar.json'));

const tagrico = JSON.parse(fs.readFileSync('./funcoes_rpg/tagrico/tagrico.json'));

const sapato = JSON.parse(fs.readFileSync('./funcoes_rpg/sapato/sapato.json'));

const palitor = JSON.parse(fs.readFileSync('./funcoes_rpg/palitor/palitor.json'));

const antisticker = JSON.parse(fs.readFileSync('./arquivos/antis/antisticker.json'))

const countMessage = JSON.parse(fs.readFileSync('./arquivos/grupos/countmsg.json'));

const antinotas = JSON.parse(fs.readFileSync('./arquivos/antis/antinotas.json'))

const antipv = JSON.parse(fs.readFileSync('./arquivos/usuarios/antipv.json'))

const adeuscara = JSON.parse(fs.readFileSync('./arquivos/grupos/adeuscara.json'));

const espada = JSON.parse(fs.readFileSync('./funcoes_rpg/espada/espada.json'));

const anticatalogo = JSON.parse(fs.readFileSync('./arquivos/antis/anticatalogo.json'))

const autoreact = JSON.parse(fs.readFileSync('./arquivos/funcoes/autoreact.json'))

const muted = JSON.parse(fs.readFileSync('./database/usuarios/muted.json'))

const antivid = JSON.parse(fs.readFileSync('./arquivos/antis/antivideo.json'))

const aguacoco = JSON.parse(fs.readFileSync('./funcoes_rpg/agua/aguacoco.json'));

const roupab = JSON.parse(fs.readFileSync('./funcoes_rpg/roupa/roupab.json'));

const dindin = JSON.parse(fs.readFileSync("./funcoes_rpg/dinheiro/dindin.json"));

const antiimg = JSON.parse(fs.readFileSync('./arquivos/antis/antiimg.json'))

const { menu18 } = require("./menus/menu18.js")

const { tabela } = require('./arquivos/grupos/tabela');


var { verificado } = require("./settings/nescessario.json")


//COLOCA OS JSON AKI

const API_KEY_SHADOW = "apikey-do-flexa"
const API_KEY_SABRINA = "api-do_flexa"
const API_KEY_DANIEL = "daniel-api3";

//ARQUIVOS JS
const { banner } = require('./loli/browser/browser.js');
const { 
getExtension, Random, 
getFileBuffer,
} = require("./loli/browser/get.js")
const { fetchJson } = require('./arquivos/funcoes.js');
const { addFlod , isFlod } = require('./spam.js')
const { isFiltered, addFilter } = require('./spam.js')
const { palavras } = require('./arquivos/lib/conselhos.js');

//ARQUIVOS PARA SUAS CARACTERES TRAVAZAP CASO VOCÊ NÃO FOR TRAVAZAP IGNORE😆
const { carrinho } = require('./loli/travas/carrinho')
const { ctt } = require('./loli/travas/ctt')
const { txt } = require('./loli/travas/txt')
const { ios } = require('./loli/travas/ios')
const { ui } = require('./loli/travas/ui')
//ARQUIVOS DA CONFIG PREFIX DONO E NOME BOT CASO NÃO SAIBA MEXE NÃO MEXA NISSO DEIXA ASSIM OU VAI CAUSAR ERRO
donoName = global.donoName
botName = global.botName
donoNumber = global.donoNumber
prefix = global.prefix
// IGNORE //
function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

//// DATA E HORA PIKEMON

data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const msgRetryCounterCache = new NodeCache();


async function ligarbot() {
let phoneNumber = "558598603654"
const store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) })
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")


const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))


//// DATA E HORA PIKEMON

data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const { state, saveCreds } = await useMultiFileAuthState('./datab/qr-code')
const { version, isLatest} = await fetchLatestBaileysVersion();

const loli = makeWASocket({
  logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode,
      mobile: useMobile,
      browser: ['Chrome (Linux)'],
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      browser: ['Chrome (Linux)', '', ''],
      markOnlineOnConnect: true,
      generateHighQualityLinkPreview: true,
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache,
      defaultQueryTimeoutMs: undefined,
   })
//==========================================\\

if (pairingCode && !loli.authState.creds.registered) {
console.log(`${chalk.redBright("Coloque o número de whatsapp. Exemplo: +558598603654")}:`);
let phoneNumber = await question(`   ${chalk.cyan("- Número")}: `);
phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

let code = await loli.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(` 🥶 ${chalk.redBright("Seu código")}:`);
console.log(`   ${chalk.cyan("- Código")}: ${code}`);
rl.close();
}

const banner = cfonts.render(("LADY|BUG"), {
font: "block",
align: "center",
colors: [`cyan`,`white`,`cyan`],
})

loli.ev.on('creds.update', saveCreds);
store.bind(loli.ev)
loli.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
loli.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
loli.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
if(shouldReconnect) {
startBase()
}
} else if(connection === "open") {
console.log(banner.string)
console.log(`${color(`${botName} Conectado com sucesso ✓ `,'cyan')}`)
}
})

loli.ev.on('contacts.set', () => {
console.log('setando contatos...')
})

loli.ev.on('creds.update', saveCreds)

loli.ev.on('messages.upsert', async ({ messages }) => {
try {
//=============funcoes
const info = m = messages[0]
if (!info.message) return 

const key = {
    remoteJid: info.key.remoteJid,
    id: info.key.id, 
    participant: info.key.participant 
}
await loli.readMessages([key])

if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

type_message = JSON.stringify(info.message)

const isQuotedImage = type === "extendedTextMessage" && type_message.includes("imageMessage")
const from = m.chat = info.key.remoteJid


/// ==============budy
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

///============body
var body = (type === 'conversation') ?
info.message.conversation : (type == 'imageMessage') ?
info.message.imageMessage.caption : (type == 'videoMessage') ?
info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
info.message.buttonsResponseMessage.selectedButtonId : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectenviar.selectedRowId.startsWith(prefix) && info.message.listResponseMessage.singleSelectenviar.selectedRowId) ? info.message.listResponseMessage.singleSelectenviar.selectedRowId : (type == 'templateButtonenviarMessage') ?
info.message.templateButtonenviarMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectenviar.selectedRowId || info.text) : ''
////========
const content = JSON.stringify(info.message);
const isCmd = body.startsWith(prefix)

const isGroup = from.endsWith("@g.us")


// Render de Jogos
gayzin = gayzão
fein = feião 
matei = mateii
cornin = cornão
vesgin = vesgão
bebin = bebão
gadin = gadão
gostosin = gostosão
gostosinha = gostosona 
hitler = nazista
tapinha = tapão
beijin = beijão
chutin = chutão
dancinha = dança 
casalzin = casar
soquin = socão 
By = "LADY-BOT"

//================= funcoes de Grupo 🥋 =============//

const dirGroup = `./arquivos/grupos/${from}.json`;

const nescj = "./dono/nescessario.json";

const data_IDGP = [{
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false,
antiloc: false, antilinkgp: false,
antilinkhard: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false,
sistemGold: false, visuUnica: false, 
registrarFIGUS: false, soadm: false,
rg_aluguel: false,
listanegra: [], advertir: [], prefixos: ["!"],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}],
minerar_gold: [], ausentes: [], forca_inc: false, 
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
}],
simi1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false
}];

if(isGroup && !fs.existsSync(dirGroup)){
fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP, null, 2) + '\n');
}

try {
var dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined;
} catch (e){
fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP));
}

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2))}

/////=================
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const sender = isGroup ? info.key.participant: from
const command = comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const nome = pushName = info.pushName ? info.pushName: botName 
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await loli.groupMetadata(from): ""
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup  ? groupMetadata.subject: ""
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const args = body.trim().split(/ +/).splice(1)
const q = text = args.join(' ')
const So_Adm = isGroup ? dataGp[0].soadm: undefined
const IS_sistemGold = isGroup ? dataGp[0].sistemGold : undefined
const criador = `${donoNumber}@s.whatsapp.net`
const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined
const numeroBot = loli.user.id.split(":")[0]+"@s.whatsapp.net"
const isCreator = criador.includes(sender)
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotAdmins = groupAdmins.includes(numeroBot) || false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isPremium = premium.includes(sender)
const TOKEN_GPT = nescessario.TOKEN_GPT


    loli.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await loli.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
   
//********************************************//

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./arquivos/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./arquivos/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./arquivos/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}


const { mensagens } = require('./arquivos/funcoes/aleatoria.js');

var texto_exato = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 

const texto = texto_exato.slice(0).trim().split(/ +/).shift().toLowerCase()

async function escrever (texto) {
await loli.sendPresenceUpdate('composing', from) 
await esperar(1000)   
loli.sendMessage(from, { text: texto }, {quoted: info})
}

const min = JSON.parse(fs.readFileSync('./ladyft/edite/fotos.json'))
megu = min.megumax

const reply = (texto) => {
mimi = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
 loli.sendMessage(from, {
document: fs.readFileSync('./arquivos/lib/arquivo.xlsx'),
mimetype: mimi,
jpegThumbnail: null,
mentions: null,
fileName: `${botName}`,
fileLength: 9999999999999999999999999999,
caption: texto,
footer: `Usuario:${pushname}`, 
contextInfo:{"externalAdReply": {"title": `${botName}`,"body": `Nome: ${pushname} `, "previewType": "PHOTO","thumbnailUrl": `${megu}`,"thumbnail":  Buffer,"sourceUrl": "https://wa.me/558598603654?text=oii%20luan"}}}, { quoted: info})}
          
const esperar = sleep = async (tempo) => {
    return new Promise(funcao => setTimeout(funcao, tempo));
}

const checkATMuser = (sender) => {

let position = false
Object.keys(dindin).forEach((i) => {
if (dindin[i].id === sender) {
position = i
}
})
if (position !== false) {
return dindin[position].dindin
}
}

const confirmATM = (sender, amount) => {

let position = false
Object.keys(dindin).forEach((i) => {
if (dindin[i].id === sender) {
position = i
}
})
if (position !== false) {
dindin[position].dindin -= amount
fs.writeFileSync('./funcoes_rpg/dinheiro/dindin.json', JSON.stringify(dindin))
}
}


const addKoinUser = (sender, amount) => {

let position = false
Object.keys(dindin).forEach((i) => {
if (dindin[i].id === sender) {
position = i
}
})
if (position !== false) {
dindin[position].dindin += amount
fs.writeFileSync('./funcoes_rpg/dinheiro/dindin.json', JSON.stringify(dindin))
}
}

const addATM = (sender) => {

const obj = {
 id: sender,
 dindin: 0
};
dindin.push(obj)
fs.writeFileSync('./funcoes_rpg/dinheiro/dindin.json', JSON.stringify(dindin))
}

const msgSemQuoted = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return loli.sendMessage(from, options, {quoted: info}).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}

// PRA LIMPAR DO CONTADOR QUEM NÃO ESTÁ NO GRUPO
async function LIMPARDOCNT_QUEMJASAIU() {
var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
CNT1 = []; for ( i of groupMembers) {CNT1.push(i.id)} 
CNT = []; for ( i of RD_CNT) {
if(!CNT1.includes(i.id)) CNT.push(i)}
for ( i of CNT) {
RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)}
fs.writeFileSync("./arquivos/countmsg.json", JSON.stringify(countMessage, null, 2))
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
loli.sendMessage(idgp, reactionMessage)
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
loli.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: info}) 
}

// MUTAR USUÁRIO 
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
reply(`🐤😡 *Você deu um piu?* - Agora prepare-se para o seu julgamento!`)
setTimeout(async () => {
    loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
return
}

if (isCmd) {
if (isFiltered(sender)) {
return reply(mess.floodCommands())
} else {
addFilter(sender)
}
} 

const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
loli.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: info}) 
}
//--------------//

//SISTEMA RPG\\


const isRoupab = roupab.includes(sender)

const iscasa = casa.includes(sender)

const isaguacoco = aguacoco.includes(sender)

const isCarab = carab.includes(sender) 

const isCaussa = caussa.includes(sender)

const istagrico = tagrico.includes(sender)

const isSapato = sapato.includes(sender)

const isPalitor = palitor.includes(sender) 

const isespada = espada.includes(sender)




//sistema banco//



const checkATM = checkATMuser(sender)
             try {
                 if (checkATM === undefined) addATM(sender)
                 const dinheirosaku = Math.floor(Math.random() * 0) + 0//GANHA ENTRA 10 * 50 POR CADA MSG
                  addKoinUser(from, dinheirosaku)
              } catch (err) {
                 console.error(err)
             }

//================//isquoted/const
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
 
const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const exportion = JSON.parse(fs.readFileSync('./exportion.json'))

const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const isAutoReact = isGroup ? autoreact.includes(from) : false

const isAntiLink = isGroup ? antilink.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAntiAudio = isGroup ? antiaudio.includes(from) : false

const isModobn =  isGroup ? modobn.includes(from) : true

const Antidoc = isGroup ? antidoc.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false

const isAntifake = isGroup ? antifake.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiPorn = isGroup ? antiporn.includes(from) : true

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const isSimi = isGroup ? samih.includes(from) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false
        
const sender_ou_n = q.includes("@") ? menc_jid : sender


const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? loli.sendMessage(from, {text: teks.trim(), mentions: memberr}) : loli.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'ʙᴏᴀ ᴍᴀᴅʀᴜɢᴀᴅᴀ 🌒'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'ʙᴏᴀ ᴅɪᴀ 🌕'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'ʙᴏᴀ ᴛᴀʀᴅᴇ 🌗'
} if(time2 > "18:00:00"){
var tempo = 'ʙᴏᴀ ɴᴏɪᴛᴇ 🌑'
}

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

// VERIFICADOS ⭐️
const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}
const may = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `${botName}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',  forwardingScore: 508, isForwarded: true,'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./loli/image/menu.jpg')} } }
const selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${botName}`, 'jpegThumbnail': fs.readFileSync('./loli/image/menu.jpg')}}}

const menc_os2 = q.includes("@") ? menc_jid : menc_prt 


 if (!isGroup && isCmd) console.log(
color(`𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐍𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','red'),color(botName, 'cyan'),'\n',
color('⪼ USUÁRIO:','red'),color(pushname,'cyan'),'\n',
color('⪼ COMANDO:','red'),color(budy, 'cyan'),'\n',
color('⪼ HORÁRIO:','red'),color(hora,'cyan'),'\n',
color('⪼ DAТA:','red'),color(data,'cyan'),'\n')

if (!isCmd && !isGroup) console.log(
color(`𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐍𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','red'),color(botName, 'cyan'),'\n',
color('⪼ USUÁRIO:','red'),color(pushname,'cyan'),'\n',
color('⪼ MENSAGEM:','red'),color(budy,'cyan'),'\n',
color('⪼ HORÁRIO:','red'),color(hora,'cyan'),'\n',
color('⪼ DATA:','red'),color(data,'cyan'),'\n')

if (isCmd && isGroup) console.log(
color(`𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','red'),color(botName, 'cyan'),'\n',
color('⪼ NOME DO GRUPO:','red'),color(groupName,'cyan'),'\n',
color('⪼ USUÁRIO:','red'),color(pushname,'cyan'),'\n',
color('⪼ COMANDO:','red'),color(budy,'cyan'),'\n',
color('⪼ HORÁRIO:','red'),color(hora,'cyan'),'\n',
color('⪼ DATA:','red'),color(data,'cyan'),'\n')

if (!isCmd && isGroup) console.log(
color(`𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','red'),color(botName, 'cyan'),'\n',
color('⪼ NOME DO GRUPO:','red'),color(groupName,'cyan'),'\n',
color('⪼ USUÁRIO:','red'),color(pushname,'cyan'),'\n',
color('⪼ MENSAGEM:','red'),color(budy,'cyan'),'\n',
color('⪼ HORÁRIO:','red'),color(hora,'cyan'),'\n',
color('⪼ DATA:','red'),color(data,'cyan'),'\n')

//
msg = {
registro: "_[❗] Para ver o menu você precisa se registrar use /login_",
botadm: "[❗] bot precisa ser adm",
aguarde: "[❗] aguarde uns minutinho estou processado👨‍🦯",
dono: "[❗] este comando so podera ser usado pelo meu dono💣",
grupo: "[❗] este comando so pode ser usado em grupo🫂",
private: "[❗] este comando so pode ser usado no privado👀",
premium: "[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*",
adm: "este comando so pode ser usado por um adm",
botadm: "[❗] bot precisa ser adm pra executar esse comando",
erro: "[❗] ocorreu uma falha no comando por favor aguarde ate meu dono ajeitar", 
dono: "[❗] Esse comando so pode ser usado pelo meu dono!!!",
abrindomenu: "_[❗]Carregando menu aguarde..._",
}

const foto = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"imageMessage": {
"caption": ' •𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂• ',
"jpegThumbnail": fs.readFileSync('./loli/image/menu.jpg')
}}}

const order = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"orderMessage": {
"thumbnail": fs.readFileSync('./loli/image/menu.jpg'),
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `👁 •𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂• 👁`,
}}}


switch(comando) {

case 'comprarbot': case 'comprabot':
await delay(5000)
reply(`Ok vou te mandar a chave pix para você efetuar o pagamento, aguarde...`)
await delay(8000)
reply(`Qual forma você quer efetuar o pagamento?

/email
/telefone
/chavealeatoria`)
break

case 'email':
await delay(3000)
reply(`Ok enviando email`)
await delay(4000)
reply(`aqui esta a chave para você efetuar o pagamento`)
await delay(4000)
reply(`Nao tenho kkkkk`)
await delay(110000)
reply(`❌_Não identifiquei o seu pagamento_❌
Entre em contato com o desenvolvedor 👉🏻 Wa.me/558598603654`) 
break

case 'tell':
await delay(3000)
reply(`Ok enviando chave...`)
await delay(4000)
reply(`aqui esta a chave para você efetuar o pagamento`)
await delay(5000)
reply(`nao tenho pix kkkkk`)
await delay(110000)
reply(`❌_Não identifiquei o seu pagamento_❌
Entre em contato com o desenvolvedor 👉🏻 Wa.me/558598603654`) 
break

case 'chavealeatoria': case 'chavealeatória':
await delay(3000)
reply(`Ok enviando chavealeatoria...`)
await delay(4000)
reply(`nao tenho piquici`)
await delay(110000)
reply(`❌_Não identifiquei o seu pagamento_❌
Entre em contato com o desenvolvedor 👉🏻 Wa.me/558598603654`) 
break
//Todos os comandos estão funcionando normalmente mas estao tudo embaralhado 😅😅 e isso boa sorte.\\

case 'figurinha': case 's': case 'stickergifp': case 'figura': case 'f': case 'figu': case 'st': case 'stk': case 'fgif':

{
(async function () {
var legenda = q ? q?.split("/")[0] : `╼⊳⊰ Solicitado Por:
╼⊳⊰ Bot:
╼⊳⊰ Dono:`
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `${pushname}
${botName}
${donoName}`
if (isMedia && !info.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
// "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
var json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
loli.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
loli.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
reply("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
}
break

//============MENUS AQUI===========\\
case 'menu': case 'ajuda': case 'help':
    reagir(from, "7️⃣")
    await sleep(100)
    reagir(from, "6️⃣")
    await sleep(200)
    reagir(from, "5️⃣")
    await sleep(300)
    reagir(from, "4️⃣")
    await sleep(400)
    reagir(from, "3️⃣")
    await sleep(500)
    reagir(from, "2️⃣")
    await sleep(600)
    reagir(from, "1️⃣")
    await sleep(1000)

    // Enviar áudio primeiro
    const audio = fs.readFileSync('./loli/audio/minutinho.mp3') // Substitua pelo caminho correto do áudio
    loli.sendMessage(from, {audio: audio, mimetype: 'audio/mp4'}, {quoted: info})
    
    // Enviar imagem do menu logo após o áudio
    await sleep(500) // Pequeno delay opcional entre o áudio e a imagem
    loli.sendMessage(from,
    {
        image: fs.readFileSync('./loli/image/menu.jpg'),
        caption: menu(comando, prefix, hora, data, pushname, totalcmd),
        gifPlayback: true
    },
    {quoted: info})

break
case 'logos': case 'menulogos': case 'lg':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/logos.jpg'),
caption: logos(comando, prefix, hora, data, pushname, totalcmd),
gifPlayback: true},
{quoted: info})
break

case 'menuvip':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: menuvip(comando, prefix, hora, data, pushname, totalcmd),
gifPlayback: true},
{quoted: info})
break

case 'menutravazap':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: menutravazap(comando, prefix, hora, data, pushname, totalcmd),
gifPlayback: true},
{quoted: info})
break

case 'menuadm':
case 'adms':
    reagir(from, "💎")
    await sleep(100)
    reagir(from, "✅️")
    await sleep(200)
    reagir(from, "‼️")
    await sleep(300)
    reagir(from, "🤡")
    await sleep(400)
    reagir(from, "♥️")
    await sleep(500)
    reagir(from, "👥")
    await sleep(600)
    reagir(from, "😍")
    await sleep(1000)

    if (!isGroupAdmins) return reply(msg.adm)
    if (!isGroup) return reply(msg.grupo)

    // Enviar áudio para administradores
    const audiomenu = await fs.readFileSync("./loli/audio/adm.mp3")
    loli.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt: true}, {quoted: info})

    await delay(4000)

    // Enviar imagem do menu
    loli.sendMessage(from,
    {
        image: fs.readFileSync('./loli/image/menu.jpg'),
        caption: menu1(comando, prefix, hora, data, pushname, totalcmd),
        gifPlayback: true
    },
    {quoted: info})

break
case 'menujogos':
case 'menubrincadeiras':
case 'jogos':
case 'brincadeiras':
    reagir(from, "💎")
    await sleep(100)
    reagir(from, "✅️")
    await sleep(200)
    reagir(from, "‼️")
    await sleep(300)
    reagir(from, "🤡")
    await sleep(400)
    reagir(from, "♥️")
    await sleep(500)
    reagir(from, "👥")
    await sleep(600)
    reagir(from, "😍")
    await sleep(1000)

    if(!isGroup) return reply(msg.grupo)

    await loli.sendMessage(from, { react: { text: `🎮`, key: info.key }})

    // Enviar áudio do menu de jogos
    audiomenu = await fs.readFileSync("./loli/audio/jogos.mp3")
    loli.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})

    await delay(4000)

    // Enviar imagem do menu de jogos
    loli.sendMessage(from,
    {
        image: fs.readFileSync('./loli/image/menu.jpg'),
        caption: menujogos(comando, prefix, hora, data, pushname),
        gifPlayback: true
    },
    {quoted: info})

    // Enviar música após o menu de jogos
    await delay(1000) // Opcional: Pequeno intervalo antes de tocar a música
    const musica = fs.readFileSync('./loli/audio/musica_jogos.mp3') // Substitua pelo caminho correto da música
    loli.sendMessage(from, {audio: musica, mimetype: 'audio/mpeg', ptt: false}, {quoted: info})

break
case 'criador':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: criado(comando, prefix, hora, data, pushname, totalcmd),
gifPlayback: true},
{quoted: info})
break

case 'alugar':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
await loli.sendMessage(from, { react: { text: `🍃`, key: info.key }})
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: alugar(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case 'menudono':
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
if(!isCreator) return reply(msg.dono)
await loli.sendMessage(from, { react: { text: `🍃`, key: info.key }})
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: menudono(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break



case "menu18":
reagir(from, "💎")
await sleep(100)
reagir(from, "✅️")
await sleep(200)
reagir(from, "‼️")
await sleep(300)
reagir(from, "🤡")
await sleep(400)
reagir(from, "♥️")
await sleep(500)
reagir(from, "👥")
await sleep(600)
reagir(from, "😍")
await sleep(1000)
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
templateMassage = {
image: {url:"./loli/image/menu.jpg",
quoted: info},
caption: menu18(prefix, hora, data, pushname),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
loli.sendMessage(from, templateMassage)
break

case 'documento':
reply(`enviando...`)
if(!isCreator) return reply(msg.dono)
loli.sendMessage(from, {
document: fs.readFileSync('./loli/image/menu.jpg'),
mimetype: 'application/zip',
fileName: '🤬${botName}🤬'
},
{quoted: info
})
break

case 'txt-desativar9': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá , eu perdi todos meus documentos junto com meu celular e preciso imediatamente que desativem meu número:
+55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar8': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\n偷⾛了我的⼿机和我所有的宝⻉，请⽴即禁⽌我的帐⼾
+55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar7': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá , eu gostaria de desativar meu número do WhatsApp porque eu estou migrando para o telegram , Meu número:
+55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar4': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nPerdido/Roubado: Por favor, desative minha conta
+55 11 11111-11111`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desban3': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu numero foi banido, utilizo ele para falar com meus amigos e familia. Além de falar com meus clientes, e estou sendo prejudicado perdendo vendas +55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desban4': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n?? • Texto: \n\nOla suporte do whatsapp , meu numero ,(numero) foi banido injustamente do whatsapp , estou solicitando o desbanimento imediato de meu número `
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-sair-1-2': // by: loli-MD
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n?? • Texto: \n\nEu nao consigo entrar no whatsapp , meu número esta -1 , solicito que resetem minha verificação de número!
Número: +55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-sair-1-1': // by: loli-MD
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número está no suporte alguém solicitou meu código por engano meu número é usado para conversas com familiares que estão com convite por favor reinicie o meu código de verificação via SMS!
Número: +55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar7': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá , eu gostaria de desativar meu número do WhatsApp porque eu estou migrando para o telegram , Meu número:
+55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar6': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá fui assaltado a uns 30 minutos e roubaram todos meus pertences , quero que desativem minha conta do whatsapp.
Número: +55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar5': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu numero do whatsapp foi roubado , desativem minha conta imensamente , desde já agradeço! meu numero :
+55 99999-99999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar3': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nEstou solicitando a desativação temporária de minha conta no whatsapp , meu numero:
+55 11 11111-1111`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar2': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nPlease Deactivate The My Account Number (número*) Immediately Because The Number Has Been Lost`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar1': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá,perdi todos os meus documentos e o meu chip foi roubado. Peço que desativem
minha conta imediatamente,no chip há dados sobre mim por isso peço que desativem,meu  número imediatamente (número)`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desban1': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número (Número) foi banido indevidamente isto foi um engano . Fui clonado e roubaram meu número preciso ativar minha conta tenho uma empresa de eletrodomésticos e tenho pedidos pendentes.`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desban2': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número (Numero) , foi banido do whatsapp injustamente e tenho provas pra mostrar que o banimento foi um erro do sistema.`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desban4': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n?? • Texto: \n\nOla suporte do whatsapp , meu numero ,(numero) foi banido injustamente do whatsapp , estou solicitando o desbanimento imediato de meu número `
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-desban5': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOla eu sou roberto silva, eu comprei um número número para meu filho fazer os trabalhos da escola em qual ele estuda , porém quando fui tentar entrar , estava dizendo que o número foi banido e eu nem sequer entrei no número, não fiz nada eu ja comprei o número e ele ja estava assim , ele precisa urgentemente desse número para fazer os trabalhos da escola.
Verifiquem o maís rápido possível!
NÚMERO: 55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-sair-1-2': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n?? • Texto: \n\nEu nao consigo entrar no whatsapp , meu número esta -1 , solicito que resetem minha verificação de número!
Número: +55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

case 'txt-sair-1-1': // ${botName}
reply(`Enviando no pv`)
await delay(5000)
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número está no suporte alguém solicitou meu código por engano meu número é usado para conversas com familiares que estão com convite por favor reinicie o meu código de verificação via SMS!
Número: +55 99 9999-9999`
loli.sendMessage(sender, {text: bymonarge}, {quoted: info})
break

//===============FIM CMD TRAVA=================\\

//===============MENU ADM==============\\


case 'ban': case 'kick':
    if (!isBotAdmins) return reply(msg.botadm)
    if (!isGroup) return reply(msg.grupo)
    if (!isGroupAdmins) return reply(msg.adm)
    {
        // Corrigido: Removido 'await' da leitura do arquivo de áudio
        const audiomenu = fs.readFileSync("./loli/audio/ban.mp3");
        
        loli.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info});

        if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) {
            return reply('Marque a mensagem da pessoa que deseja banir');
        }

        if (info.message.extendedTextMessage.contextInfo.participant !== null && 
            info.message.extendedTextMessage.contextInfo.participant !== undefined && 
            info.message.extendedTextMessage.contextInfo.participant !== "") {
                
            mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] 
                ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] 
                : info.message.extendedTextMessage.contextInfo.participant;

            let responseb = await loli.groupParticipantsUpdate(from, [mentioned], 'remove');
            
            if (responseb[0].status === "200") return reply(`*Usuário removido do grupo com sucesso🙍🏻‍♂️*`);
            else if (responseb[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????');
            else if (responseb[0].status === "404") return reply('*Este usuário já foi removido ou saiu do grupo*');
            else return reply('Tenta dnv');
        
        } else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && 
                   info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {

            mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid;

            if (mentioned.length > 1) {
                if (mentioned.length > groupMembers.length || 
                    mentioned.length === groupMembers.length || 
                    mentioned.length > groupMembers.length - 3) return reply(`Vai arquivar msm??`);
                
                let sexocomrato = 0;

                for (let banned of mentioned) {
                    await sleep(100);
                    let responseb2 = await loli.groupParticipantsUpdate(from, [banned], 'remove');
                    if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1;
                }
                return reply(``);
            
            } else {
                let responseb3 = await loli.groupParticipantsUpdate(from, [mentioned[0]], 'remove');
                
                if (responseb3[0].status === "200") return reply(`*Usuário removido do grupo com sucesso🙍🏻‍♂️*`);
                else if (responseb3[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????');
                else if (responseb3[0].status === "404") return reply('Este usuário já foi removido ou saiu');
                else return reply('Tenta dnv');
            }
        }
    }
break;

case 'nomegp':
if (!isBotAdmins) return reply(msg.botadm)
if (!isCreator) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isCreator) nadm = fs.readFileSync('./loli/audio/soadm')

if (!isGroupAdmins) if (!isCreator) return loli.sendMessage(from, nadm, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
if (!isGroup) return reply(`Este comando so pode ser usado em grupo`);
if (!q) return reply(` `);
loli.groupUpdateSubject(from, `${q}`)
loli.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'})
break

case 'descgp':
case 'descriçãogp': 
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotAdmins) return reply(msg.botadm)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(`Este comando so pode ser usado em grupo`);
if (!q) return reply(` `);
loli.groupUpdateDescription(from, `${q}`)
loli.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: loc})
break

case 'promover': case 'promote':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Vai colocar o vento como adm???')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsedm = await loli.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") return reply('Temos um novo admir')
else if (responsedm[0].status === "404") return reply('Esse maluco nem ta no grupo 🤔')
else return reply('Tenta dnv '-'')
break

case "grupo":
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
try {
if (q == "a") {
await loli.groupSettingUpdate(from, "not_announcement")
reply("Grupo aberto com sucesso")
}
if (q == "f") {
await loli.groupSettingUpdate(from, "announcement")
reply("Grupo fechado com sucesso ")
}
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'rebaixar': case 'rebaixa':
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotAdmins) return reply(msg.botadm)
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply('nao e adm...')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsepm = await loli.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????')
else if (responsepm[0].status === "200") return reply('Voce perdeu o cargo de adm por motivos justo, Lamento voce nao e mais adm do grupo 😂😂')
else if (responsepm[0].status === "404") return reply('Esse cara nem ta no grupo')
else return reply('tente dnv')
break

case 'reviver': case 'add':
reply(`Desculpe esse comando esta dando ban no número nao e possível usar`)
break

case 'marcarwa':
try {
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isGroupAdmins && !isCreator) return reply('Você precisa ser ADM pra utilizar este comando')  
if(q.includes(`.`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
 let metadata = await loli.groupMetadata(from)
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += `〘 *👥 MARCANDO TODOS 🙂* 〙\n\n*〘👥〙MEMBROS:* ${metadata.participants.length ? metadata.participants.length : "undefined"}\n\n`
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
loli.sendMessage(from, {text: teks}, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'resetarlink':
if (!isBotAdmins) return reply(msg.botadm)
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
try {
await loli.groupRevokeInvite(from)
reply("*LINK DO GRUPO RESETADO COM SUCESSO✅*")
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'antiimg':
if (!isBotAdmins) return reply(msg.botadm)
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./arquivos/antis/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'saibot':
if (!isGroup) return reply(mag.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
reply(`ok ${pushname} me desculpe se eu nao pude ajudá-lo(a) com o que vc precisava....adeus😔`)
await delay(1000)
try {
await loli.groupLeave(from)
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

//============FIM DOS CMD ADM=============\\

//============CMD DONO===========\\
case 'sairgp':
if (!isCreator) return loli.sendMessage(from, {text: 'somente dono'})
try {
loli.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'reiniciar':
if (!isCreator) return reply(msg.dono)
loli.sendMessage(from,{text: `_Ok Reiniciando Isso vai levar alguns segundos..._`}, {quoted: info})
setTimeout(() => {process.exit(0)}, 3000)
break

case 'foto':
if (!isCreator) return loli.sendMessage(from, {text: 'somente dono'})
loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: '𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂'},{quoted: info})
break

case 'video':
if (!isCreator) return loli.sendMessage(from, {text: 'somente dono'})
loli.sendMessage(from, {video: fs.readFileSync('./loli/video/cantada brabakkkkk.mp4'), caption: '𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂'},{quoted: info})
break


case 'dado':
const dadus = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./arquivos/funcoes/dado/' + dadu + '.webp')
loli.sendMessage(from, {
sticker: dador
}, {
quoted: info
})
break

case 'limpeza':
if (!isCreator) return loli.sendMessage(from, {text: 'somente dono'})
loli.sendMessage(m.chat, {text: `krl lixo pra kct\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Limpo com sucesso ✅`},{quoted: m})
break

case 'fotopraperfil_femino':{
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`Enviando a foto no seu perfil...`)
bla = await fetchJson("https://world-ecletix.onrender.com/api/femininotrava")

loli.sendMessage(sender, {image: {url: bla.url}})
}break




case 'meme':{
if(!isPremium) return reply(msg.premium)
reply(`enviando meme aguarde...`)
bla = await fetchJson("https://world-ecletix.onrender.com/api/meme")

loli.sendMessage(from, {video: {url: bla.url}})
}break

case 'onlyfans': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/onlyfans"}});
}
break

case 'foto18':
case 'foto+18': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Fazendo a requisição diretamente para a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/atriz"}});
}
break;


case 'onlyfans': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/onlyfans"}});
}
break;
case 'fotinhas': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/fotinhas"}});
}
break;
case 'foto_aleatoria': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/pack"}});
}
break;

case 'pussy':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'neko2':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'achego':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'manga':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'foot':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'vídeo18':
case 'video18': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Fazendo a requisição diretamente para a nova API
  loli.sendMessage(sender, {video: {url: "https://world-ecletix.onrender.com/api/videozinhos"}});
}
break;

case 'aesthetic': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/aesthetic"}});
}
break

case 'cosplay': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/cosplay"}});
loli.sendMessage(sender, {video: {url: bla.url}})
}break


case 'cosplayloli': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/cosplayloli"}});
}
break;

case 'cosplaysagiri': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/cosplaysagiri"}});
}
break;


case 'game_wallp': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/gameWallp"}});
}
break;

case 'pookemon': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/pokemon"}});
}
break;

case 'satanic': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/satanic"}});
}
break;

case 'nime': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/Nime"}});
}
break;

case 'shotas': {
  if (!isPremium) return reply(msg.premium);
  reply(`Estou enviando no seu PV ${pushname}, se não for porque a API caiu.`);
  
  // Envia a imagem diretamente usando a nova API
  loli.sendMessage(sender, {image: {url: "https://world-ecletix.onrender.com/api/shotas"}});
}
break;


case 'trava2':
if(!isCreator) return replu(msg.dono)
reply(`🤬 ${venomiphone1}`) 
break

case 'lbc':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'hentai4':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'hentai3':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image: {url: bla.url}})
}break


case 'zettai':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'bdsm':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'glasses':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'orgy':{
if(!isPremium) return reply(msg.premium)
reply(`Estou enviando no seu PV ${pushname} se não for porque API caiu.`)
bla = await fetchJson("https://clover-t-bot.onrender.com/nsfw/neko?key=287268&username=Sandro999")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'plaq':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq2':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq3':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/bunda3.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq4':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-48%25&text.0.position.y=-68%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq5':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/9152e7a9-7d49-48ef-b8ac-2e6149fda0b2.jpg?text.0.text=${teks}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq6':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq7':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'loli' :{
if(!isPremium) return reply(msg.premium)
reply("aguarde um momento, eu vou enviar no seu pv se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'vc e um(a) lolicon?🤔!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await loli.sendMessage(sender, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'only1': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only1 = `
Luiz russo (mansão maromba)
⌠🌐⌡> https://t.me/+8cJ7yGnq5fI2YjYx
`
loli.sendMessage(sender, {text: only1}, {quoted: info})
break

case 'only2': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only2 = `
Luiza blue 
⌠🌐⌡> https://t.me/+JaX8wY_45843ZTBh
`
loli.sendMessage(sender, {text: only2}, {quoted: info})
break

case 'only3': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only3 = `
Isadora vale 
⌠🌐⌡> https://t.me/+smb4i0bxRl41ZjRh
`
loli.sendMessage(sender, {text: only3}, {quoted: info})
break

case 'only4': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only4 = `
Ingrid bianchi
⌠🌐⌡> https://t.me/+RJtf2TqTQ8NjZjlh
`
loli.sendMessage(sender, {text: only4}, {quoted: info})
break

case 'only5'://${botName}  
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only5 = `
Lizy Donato 
⌠🌐⌡> https://t.me/+gmSjm2WZnb41OGEx
`
loli.sendMessage(sender, {text: only5}, {quoted: info})
break

case 'only6': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only6 = ` 
Feh Galvão
⌠🌐⌡> https://t.me/+naeQ1pp8ajswMjgx
`
loli.sendMessage(sender, {text: only6}, {quoted: info})
break

case 'only7': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only7 = `
Tatyzack
⌠🌐⌡> https://t.me/+NvglGFhOLSY5NmZ
`
loli.sendMessage(sender, {text: only7}, {quoted: info})
break

case 'only8'://${botName}  
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only8 = `
Ayrla Souza 
⌠🌐⌡> https://t.me/+XLziPd47MWo2N2Y
`
loli.sendMessage(sender, {text: only8}, {quoted: info})
break

case 'only9'://${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only9 = `
ALINE FARIA
⌠🌐⌡> https://t.me/+j1xp_hmXrx5lZWMx
`
loli.sendMessage(sender, {text: only9}, {quoted: info})
break

case 'limpar':
if(!isGroup) return reply(msg.grupo)
if(!isGroupAdmins) return reply(msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
if(verificado === true) {
loli.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})
} else {
loli.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})  
}
break

case 'only10'://${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only10 = `
KINE CHAN 
⌠🌐⌡> https://t.me/+YIVax4IQ9aFlMDgx
`
loli.sendMessage(sender, {text: only10}, {quoted: info})
break

case 'only11': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviado no seu pv`)
only11 = `
DJ NATHI
⌠🌐⌡> https://t.me/+6Z5vuVApT-1lYjEx
`
loli.sendMessage(sender, {text: only11}, {quoted: info})
break

case 'only12': //${botName} 
if(!isPremium) return reply(msg.premium)
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`[☑️]Enviando no seu pv`)
only12 = `
BELE KAFFER
⌠🌐⌡> https://t.me/+70DMw3iTzb0yMzEx
`
loli.sendMessage(sender, {text: only12}, {quoted: info})
break

case 'creditos': //Deixa os meus créditos mn pufafavorrr🥺
await loli.sendMessage(from, { react: { text: `❤️`, key: info.key }})
await delay(5000)
            menu8 = `
┏━━━━━━━━━━━━━━━━
┃ZAP: Wa.me/558598603654
┣━━━━━━━━━━━━━━━━
┃insta Luanzin.fe
┣━━━━━━━━━━━━━━━━
┣━━━━━━━━━━━━━━━━
┃LADY BUG
┣━━━━━━━━━━━━━━━━
┗━━━〔‼️〕━━━━

            `            
           await loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: menu8, contextInfo: {
            externalAdReply: {
            title:"‼️INFO DO CRIADOR ‼️",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/350558660dc20aa7299d6.jpg`,
            sourceUrl: `https://instagram.com/mg_sandro_`, 
            mediaType: 2
            }}})
             
            
            break
            
case 'taon?':
reply(`Sim!!`)
break

case 'enquete':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var enquete = generateWAMessageFromContent(from, proto.Message.fromObject({
"messageContextInfo": {
"messageloli": "QEwFogrlUlBtJgIiRuBYBjXD7VZwmpu/8rGXYb2MuaA="},
"pollCreationMessage": {
"name": "pokemon?",
"options": [
{ "optionName": 'Sim' },
{ "optionName": 'Não'}],
"selectableOptionsCount": 2
}}), { userJid: from, quoted: info})
loli.relayMessage(from, enquete.message, { messageId: enquete.key.id })
break

case 'marcar': {
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(msg.grupo)
 let metadata = await loli.groupMetadata(from)
let teks = `Hora de acordar rapaziada...‼️\n•\n`
for (let mem of participants) {
teks += `💫 @${mem.id.split('@')[0]}\n`
}
loli.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: info })
}
break

case 'aplaca':{
    if (args.length < 1) return reply(`${prefix}aplaca e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 20) return reply('O texto é longo, até 20 caracteres') //maximo de caracteres
    buffer =(`https://553555.sirv.com/Images/IMG-20231205-WA0153.jpg?text.0.text=${q}%24%7Bq%7D&text.0.position.x=-34%25&text.0.position.y=-4%25&text.0.size=37&text.0.color=f00000`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🤩`, key: info.key }})
    }
    reply (`olha seu pv hehe`)
    break
    
case 'criador': case 'criado': //deixa meus créditos mn.
reply(`╭━─━───༺[🙇🏻‍♀️]༻────━─━╮
┃[☆]╭
┃[☆]  ⎙  INFORMAÇÕES DO CRIADOR
┃[☆]╰
╰━─━───༺[🙇🏻‍♀️]༻────━─━╯
┏━━━━━━━━ ✓
┃[☆] -➤ Criador: Luanzin
┃[☆] -➤ Insta: luanzin.fe
┃[☆] -➤ [ wa.me/558598603654]
┗━━━━━━━━ ✓
┏━━━━━━━━ ✓
┃[☆] -➤ Prefixo : ${prefix}
┃[☆] -➤ ${botName}
┗━━━━━━━━ ✓`)
break

case 'dono':
reply(`
╭━─━───༺👑️༻────━─━╮
┃[☆]╭
┃[☆]  ⎙  INFORMAÇÕES DO DONO
┃[☆]╰
╰━─━───༺👑️༻────━─━╯
[Informações do meu dono]

┏━━━━━━━━ ✓
┃nome: ${donoName}
┃número: ${donoNumber}
┗━━━━━━━━ ✓
`)
break

case 'sla':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var extendedTextMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"extendedTextMessage": {
"text": ` •${botName}• \nhttps://Wa.me/stickerpack/whatsappcuppy`,
"matchedText": `opa`,
"description": "Convite para grupo do WhatsApp",
"title": `${botName}`,
"previewType": "NONE",
"jpegThumbnail": fs.readFileSync('./loli/image/menu.jpg'),
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, extendedTextMessage.message, { messageId: extendedTextMessage.key.id })
break

case 'carrinho':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var orderMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "235714359395213",
"thumbnail": fs.readFileSync('./loli/image/menu.jpg'),
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botName}`,
"orderTitle": "ᚷ𝐒𝐀𝐍𝐃𝐑𝐎ᚷ",
"sellerJid": "558388741307@s.whatsapp.net",
"token": "AR5Wfq0kwTRxgMuziAWteLeROO/rP/3z9fRPpLSb+o8tfA=="
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, orderMessage.message, { messageId: orderMessage.key.id })
break

case 'catalogo':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"thumbnail": fs.readFileSync('./loli/image/menu.jpg'),
"productId": " ",
"title": `${botName}`,
"fileLength": "161349999999999",
"description": `sandrk`,
"footerText": ` •${botName}• `,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© Hirox`,
"url": "wa.me/558388741307"
},
"businessOwnerJid": "558388741307@s.whatsapp.net",
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, catalog.message, { messageId: catalog.key.id })
break

case 'loc':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var locationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": 99,
"degreesLongitude": 99,
"name": " •𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂• ",
"jpegThumbnail": messa.imageMessage
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, locationMessage.message, { messageId: locationMessage.key.id })
break

case 'doc':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var documentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7119-24/29949057_1673439003134136_8717143220188456473_n.enc?ccb=11-4&oh=01_AdQKvXFOKFVqb0bq6t6cD1AT8YA1lUmzCh6BmjRufONBTg&oe=64D30429&mms3=true",
"mimetype": " ",
"title": "👀 𔕱𝐓𝐑𝐀𝐕𝐀𝐙𝐀𝐏𝐈𔕱 💨.exct",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 999999999,
"index": 0,
"mediaKey": "fcxyCLIN2AubiCHSqdykEzQdvmIYdzZJHGeTz1UoFlY=",
"fileName": "👀 𔕱𝐓𝐑𝐀𝐕𝐀𝐙𝐀𝐏𝐈𔕱 💨",
"fileEncSha256": "vaEk8nmpa8fera+p5GTdtjaHNw34HrcF+rXLe3tG9/M=",
"directPath": "/v/t62.7119-24/29949057_1673439003134136_8717143220188456473_n.enc?ccb=11-4&oh=01_AdQKvXFOKFVqb0bq6t6cD1AT8YA1lUmzCh6BmjRufONBTg&oe=64D30429",
"mediaKeyTimestamp": "1688964255"
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, documentMessage.message, { messageId: documentMessage.key.id })
break

case 'vcard':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var contactMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"contactMessage": {
"displayName": " •𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂• ",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;; •𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂• ;\nFN: •𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂• \nitem1.TEL:553172595934\nitem1.X-ABLabel:Celular\nEND:VCARD"
}}), { userJid: from, quoted: info})
loli.relayMessage(from, contactMessage.message, { messageId: contactMessage.key.id })
break

case 'payment2':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `•𝑺𝑨𝑵𝑫𝑹𝑶-𝑩𝑶𝑻⃟🥂•`,
}
}}), { userJid: from, quoted: info})
loli.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
break
//==============JOGOS===========\\

case 'gay':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);  
    if (!isGroup) return reply('Só pode ser utilizado este comando em grupo.');

    let blamention_id; // Declare a variável aqui

    if (budy.includes("@")) {
        mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
        blamention_id = mention_id; // Atribui a variável corretamente
    } else {
        blamention_id = sender; // Não declare novamente, apenas atribua
    }

    await loli.sendMessage(from, {text: `❰ Pesquisando a sua ficha de gay: @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]});
    
    setTimeout(async () => {
        const wew = await getBuffer(`${gayzin}`);
        const random = Math.floor(Math.random() * 110); // Mova a declaração da variável aqui
        let bo; // Declare a variável para a resposta

        // Use a lógica condicional para definir o valor de 'bo'
        if (random < 20) {
            bo = 'hmm... você é hetero😔';
        } else if (random <= 50) {
            bo = 'você é né?😏';
        } else {
            bo = 'você é gay🙈';
        }

        await loli.sendMessage(from, {
            image: wew,
            caption: `O quanto você é gay? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gay 🏳️‍🌈\n\n${bo}`,
            mentions: [blamention_id],
            thumbnail: null
        }, { quoted: info });
    }, 7000);
    break;
case "ppt2":
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!isGroup) return reply(msg.grupo)
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Você ganhou -_-"
}
if (vit == "derrota") {
var tes = "Eu ganhei pobre kkkkkk"
}
if (vit == "empate") {
var tes = "Deu empate 😐"
}
reply(`${botName} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'sn':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!isGroup) return reply(msg.grupo)
const sn = ['sim', 'não']
gosto = body.slice(3)
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break

case 'chance':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!isGroup) return reply(msg.grupo)
rate = body.slice(7)
zxzz = 
random = `${Math.floor(Math.random() * 200)}`
reply(' ➥ A chance disso que você falou vai acontecer e de:❰ '+random+'% ❱ ✧ ')
break

case 'corno':
case 'corna':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo. Digite ${prefix}modobrincadeira 1 para ativar.`);
    if (!isGroup) return reply('Este comando só pode ser utilizado em grupos.');

    // Declare a variável dentro do escopo do comando
    let mentionIdCorno;
    if (budy.includes("@")) {
        mentionIdCorno = args.join(" ").replace("@", "").trim() + "@s.whatsapp.net";
    } else {
        mentionIdCorno = sender;
    }

    let randomCorno = `${Math.floor(Math.random() * 200)}`;
    let randomCorno2 = `${Math.floor(Math.random() * 200)}`;

    await loli.sendMessage(from, {
        text: `Pesquisando o quanto você é ${comando}: @${mentionIdCorno.split("@")[0]}\n\nVocê é: ❰ ${randomCorno},${randomCorno2}% ❱ muito corno(a) kkkkkkkk 🐂`,
        mentions: [mentionIdCorno]
    });
    break;

case 'gado':
case 'gada':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo. Digite ${prefix}modobrincadeira 1 para ativar.`);
    if (!isGroup) return reply('Este comando só pode ser utilizado em grupos.');

    // Declare a variável dentro do escopo do comando
    let mentionIdGado;
    if (budy.includes("@")) {
        mentionIdGado = args.join(" ").replace("@", "").trim() + "@s.whatsapp.net";
    } else {
        mentionIdGado = sender;
    }

    await loli.sendMessage(from, {
        text: `❰ Pesquisando a ficha de gado: @${mentionIdGado.split("@")[0]}, aguarde... ❱`,
        mentions: [mentionIdGado]
    });

    setTimeout(async () => {
        const wew = await getBuffer(gadin);
        const randomGado = `${Math.floor(Math.random() * 110)}`;
        await loli.sendMessage(from, {
            image: wew,
            caption: `O quanto você é gado? \n\n「 @${mentionIdGado.split("@")[0]} 」Você é: ❰ ${randomGado}% ❱ gado(a) 🐂`,
            mentions: [mentionIdGado]
        }, { quoted: info });
    }, 7000);
    break;
case 'nazista':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo. Digite ${prefix}modobrincadeira 1 para ativar.`);
    if (!isGroup) return reply('Só pode ser utilizado este comando em grupos.');

    // Declare a variável no escopo do comando
    let mentionIdNazista;
    if (budy.includes("@")) {
        mentionIdNazista = args.join(" ").replace("@", "").trim() + "@s.whatsapp.net";
    } else {
        mentionIdNazista = sender;
    }

    await loli.sendMessage(from, {
        text: `❰ Pesquisando a sua ficha de nazista: @${mentionIdNazista.split("@")[0]}, aguarde... ❱`,
        mentions: [mentionIdNazista]
    });

    setTimeout(async () => {
        const wew = await getBuffer(hitle);
        const randomNazista = `${Math.floor(Math.random() * 110)}`;
        await loli.sendMessage(from, {
            image: wew,
            caption: `O quanto você é nazista?\n\n「 @${mentionIdNazista.split("@")[0]} 」Você é: ❰ ${randomNazista}% ❱ nazista 卐`,
            mentions: [mentionIdNazista]
        }, { quoted: info });
    }, 7000);
    break;
 

case 'nazista2':
    if (!isGroup) return reply(msg.grupo);
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);

    async function nazistaMsg() {
        const random = Math.floor(Math.random() * 110); // Gera um número aleatório de 0 a 109
        const nazista = random;
        var nazi;  // Declare a variável uma vez antes do bloco

if(nazista <= 15) {nazi = 'hmm, parece q você não é nazista'}
else if(nazista == 16) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 17) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 18) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 19) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 20) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 21) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 22) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 23) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 24) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 25) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 26) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 27) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 28) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 29) {nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 30) {nazi = 'você é um pouco nazista 😶'}
else if(nazista == 31) {nazi = 'você é um pouco nazista 😶'}
else if(nazista == 32) {nazi = 'você é um pouco nazista 😶'}
else if(nazista == 33) {nazi = 'você é um pouco nazista 😶'}
else if(nazista == 34) {nazi = 'você é um pouco nazista 😶'}
else if(nazista == 35) {nazi = 'você é um pouco nazista 😶'}
else if(nazista == 36) {nazi = 'você é um pouco nazista 😶'}
else if(nazista == 37) {nazi = 'você é um pouco nazista 😶'}
else if(nazista == 38) {nazi = 'você é um pouco nazista 😶'}
else if(nazista == 39) {nazi = 'você é um pouco nazista 😶'}
else if(nazista == 40) {nazi = '🫣'}
else if(nazista == 41) {nazi = '🫣'}
else if(nazista == 42) {nazi = '🫣'}
else if(nazista == 43) {nazi = '🫣'}
else if(nazista == 44) {nazi = '🫣'}
else if(nazista == 45) {nazi = '🫣'}
else if(nazista == 46) {nazi = '🫣'}
else if(nazista == 47) {nazi = '🫣'}
else if(nazista == 48) {nazi = '🫣'}
else if(nazista == 49) {nazi = '🫣'}
else if(nazista == 50) {nazi = '🫣'}
else if(nazista == 51) {nazi = '🫣'}
else if(nazista == 52) {nazi = '🫣'}
else if(nazista == 53) {nazi = '🫣'}
else if(nazista == 54) {nazi = '🫣'}
else if(nazista == 55) {nazi = '🫣'}
else if(nazista == 56) {nazi = '🫣'}
else if(nazista == 57) {nazi = '🫣'}
else if(nazista == 58) {nazi = '🫣'}
else if(nazista == 59) {nazi = '🫣'}
else if(nazista == 60) {nazi = '😳'}
else if(nazista == 61) {nazi = '😳'}
else if(nazista == 62) {nazi = '😳'}
else if(nazista == 63) {nazi = '😳'}
else if(nazista == 64) {nazi = '😳'}
else if(nazista == 65) {nazi = '😳'}
else if(nazista == 66) {nazi = '😳'}
else if(nazista == 67) {nazi = '😳'}
else if(nazista == 68) {nazi = '😳'}
else if(nazista == 69) {nazi = '😳'}
else if(nazista == 70) {nazi = '😳'}
else if(nazista == 71) {nazi = '😳'}
else if(nazista == 72) {nazi = '😳'}
else if(nazista == 73) {nazi = '😳'}
else if(nazista == 74) {nazi = '😳'}
else if(nazista == 75) {nazi = '😳'}
else if(nazista == 76) {nazi = '😳'}
else if(nazista == 77) {nazi = '😳'}
else if(nazista == 78) {nazi = '😳'}
else if(nazista == 79) {nazi = '😳'}
else if(nazista == 80) {nazi = '😳'}
else if(nazista == 81) {nazi = '😳'}
else if(nazista == 82) {nazi = '😳'}
else if(nazista == 83) {nazi = '😳'}
else if(nazista == 84) {nazi = '😳'}
else if(nazista >= 85) {nazi = '...'}

        const sandrokjk = [
            `*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
            `*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚝𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
            `*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚝𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
            `*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚝𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
            `*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚝𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
            `*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚝𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
            `*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚝𝚘...*\n*《 ██████▒▒▒▒》60%*`,
            `*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚝𝚘...*\n*《 ███████▒▒▒》70%*`,
            `*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚝𝚘...*\n*《 ████████▒▒》80%*`,
            `*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚝𝚘...*\n*《 █████████▒》90%*`,
            `*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
            `*O quanto você é nazista?*\n\n*「 @${sender_ou_n.split("@")[0]} 」seu nível de nazista é: ❰ ${random}% ❱*\n\n*${nazi}*`
        ];

        const { key } = await loli.sendMessage(from, { text: `*❰Pesquisando a sua ficha de nazista: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱*`, mentions: [sender_ou_n] }, { quoted: info });

        setTimeout(async () => {
            for (let i = 0; i < sandrokjk.length; i++) {
                await loli.sendMessage(from, { text: sandrokjk[i], mentions: [sender_ou_n], edit: key });
            }
        }, 1500);
    }

    nazistaMsg();
    break;

case 'chifre':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
await loli.sendMessage(from, { react: { text: `🐂`, key: info.key }})
random2 = `${Math.floor(Math.random() * 35)}`
const tamanho2 = random2
if (tamanho2 < 13 ) {pp = 'muito corno🤟'} else if (tamanho2 == 13 ) {pp = 'meio corno😬'} else if (tamanho2 == 14 ) {pp = 'muito corno😳'} else if (tamanho2 == 15 ) {pp = 'cuidado com o poste'} else if (tamanho2 == 16 ) {pp = 'vai pegar manga com esse chifre?'} else if (tamanho2 == 17 ) {pp = 'eita poha, levou muita galha em😳'} else if (tamanho2 == 18 ) {pp = 'cuidado com os fios de energia😳'} else if (tamanho2 == 19 ) {pp = 'como você aguenta esse peso todo😳'} else if (tamanho2 == 20 ) {pp = 'recorde de maior chifre, parabéns'} else if (tamanho2 == 21 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 22 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 23 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 24 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 > 25 ) {pp = 'vai construir uma torre com isso?'
}
hasil = `╭═════════════════ ⪩
╰╮ू ፝͜❥⃟💡𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐃𝐎 𝐂𝐇𝐈𝐅𝐑𝐄👁⃟ू ፝͜❥
╭┤➢☃️ 「𝘖𝘓𝘈: ${pushName}」
╭┤➢🤟 「𝘚𝘌𝘜 𝘊𝘏𝘐𝘍𝘙𝘌 𝘛𝘌𝘔: ${random2}𝘊𝘔
╭┤➢✉️ 「${pp}」
┃╰══ ⪨
╰═════════════════ ⪨`
reply(hasil)
break

case 'cassino':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!isGroup) return reply('Você só pode jogar em grupos')
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const mining = Math.ceil(Math.random() * 200) +1
const somtoy2 = exportion[Math.floor(Math.random() * exportion.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : ?? : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►  Você ganhou🔮  ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`

} else {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►    Você perdeu...    ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`
}
	const cassino = `
   ۣۜۜ͜͡☆ ☲ ► 𝐂𝐀𝐒𝐒𝐈𝐍𝐎 ◄☲  ☆ۣۜۜ͜͡
┏━━━━━━━━━━━━━━━━━┓
 ۣۜۜ͜͡☆ ☲ ► ${somtoy2} ◄☲ ☆ۣۜۜ͜͡   
┗━━━━━━━━━━━━━━━━━┛

*${Vitória}*`
reply(cassino)
if (Vitória == `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►   Você ganhou..🎊   ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`) {

reply('Parabéns')
}
await (sender)
break



//========FIM DOS CMD JOGOS=========\\

case 'metadinha':{
                await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
                let anu = await axios.get(`https://tohsaka.onrender.com/api/ferramenta/metadinha?apikey=Dkp2ubeJP6`)
                loli.sendMessage(sender, {image: {url: anu.data.masculina}, caption: `𝑴𝑨𝑺𝑪𝑼𝑳𝑰𝑵𝑶`})
                loli.sendMessage(sender, {image: {url: anu.data.feminina}, caption: `𝑭𝑬𝑴𝑰𝑵𝑰𝑵𝑶`})
                reply(`a metadinha esta sendo enviado no seu privado...`)
                }
                break
case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break

case 'figurinhas':
                if(!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 7`)
                if(q >= 100) return reply("Coloque abaixo de 100...")
                if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv olha la😁.`)
                async function figuss() {
                var rnd = Math.floor(Math.random() * 8051)
                loli.sendMessage(sender, { sticker: { url: `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp` } })}
                for (i = 0; i < q; i++) {
                await sleep(680)
                figuss()
                }
                break

case "perfil":
if (!isGroup) return reply(msg.grupo)
const migi = `${Math.floor(Math.random() * 105)}`
const russo = `${Math.floor(Math.random() * 105)}`
const valor = `${Math.floor(Math.random() * 5000)}`
{loli.sendMessage(
from, {audio: fs.readFileSync('./loli/audio/perfil.mp3'), mimetype: 'audio/mp4', ptt: true 
},
{quoted: info}
)
}
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
try {
ppimg = await loli.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)
await delay(4000)
try {
loli.sendMessage(from, {
image: perfil,
caption: `
*Nome: ${pushname}

*Número: ${sender.split("@")[0]}*

*Grupo: ${groupName}*

*🐂Nivel de gado: ${migi}%*

*😈nível de puta: ${russo}%*

*💵valor do programa: ${valor}$*

*concelho* ${conselho}
`
}, {quoted: info})
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'onlines':  //case by: ᬊ͜͡𝑩𝑰𝑬𝑳𝒁𝑰𝑵𝑯𝑶.𝑬𝑿𝑬ᵒᶠᶜ
if (!isGroup) return reply(enviar.msg.grupo)
if (!isCreator && !isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.Badmin)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[ido]), loli.user.id]
loli.sendMessage(from, {text: 'Pessoas online do gp:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`}, {quoted: info})
break

case 'report':
case 'bug':
if (!q) return reply('Exemplo: /report bug no menu 18... por favor fale o nome so comando que esta com bugs, obrigado.')
reply(`${pushname} Obrigado pela colaboração, o bug foi reportado ao meu criador...

<♨️>bugs falsos nao serão respondidos`)
let templateMesssage = {
image: {url: './loli/image/menu.jpg',
quoted: info},
caption: `♨️𝗨𝗺 𝗕𝘂𝗴♨️\nDo Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
footer: 'Noelle_md'
}
loli.sendMessage("558598603654@s.whatsapp.net",templateMesssage)
break

case 'novocmd':
if (!q) return reply('Exemplo: /novocmd coloca antilink ou a case do novo cmd que quer que adicione no bot.')
reply(`${pushname} Obrigado pela colaboração, a sua idea foi reportada ao meu criador.😊`)
const qp = args.join(" ")
let templateMessage = {
image: {url: './loli/image/menu.jpg',
quoted: info},
caption: `♨️IDEIA DE CMD♨️\nDo Número: @${sender.split('@')[0]},\nA Ideia É:\n ${q}`,
footer: 'Noelle_md'
}
loli.sendMessage("558598603654@s.whatsapp.net",templateMessage)
break

case 'teste':
if(!isCreator) return reply(msg.dono)
reply(`Seila bla bla bla`)
break

case 'teste2':
if(!isPremium) return reply(msg.premium)
reply(`Teste bla bla bla`)
break


case 'sermembro':
if (!isCreator) return reply(msg.dono)
reply(`Agora vc não é mais adm do grupo.`)
kicee = sender
await loli.groupParticipantsUpdate(from, [kicee], 'demote')
break

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(msg.grupo)
if(!isGroupAdmins)return reply(msg.adm)
ppUrl = await loli.profilePictureUrl(from, 'image')
buffer = await getBuffer(ppUrl)
const metadata = await loli.groupMetadata(from) 
loli.sendMessage(from, {image: buffer, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadata.desc}`, thumbnail: null}, {quoted: info})
break 

case 'toimg':
if (!isQuotedSticker) return reply('Marca uma Figurinha!!')
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
try {
loli.sendMessage(from, {image: buff}, {quoted: info})
} catch(e) {
console.log(e)
reply('erro...')
}
break

case 'travatxt':
if (!q) return reply(`cade o numero do meliante?`)
reply(`Acabei de mandar No pv dele kkkk`)
loli.sendMessage(`${q}@s.whatsapp.net`, {text: trava1})
break

case 'ping': {
reagir(from, "🏃🏻")
await sleep(1000)
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
respon = `⏱️ *Velocidade de Resposta:* ${String(r.toFixed(3))} _segundos._\n🤖 *O bot se encontra online por:* ${kyun(uptime)}\n💻 *Sistema Operacional:* ${infoSystem.type()}\n📂 *Versão:* ${infoSystem.release()}\n💾 *Memoria RAM total:* ${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB\n💾 *Memoria RAM disponível:* ${(infoSystem.freemem()/Math.pow(1024, 3)).toFixed(2)}GB`.trim()
await loli.sendMessage(from, { image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE%20DO%20BOT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(r.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` }, caption: respon, mentions: [sender]}, {quoted: info}) 
}
break                 

case 'listafake':
if(!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(msg.botadm)
if(!isGroupAdmins) return reply(mess.only.admin)
teks = '𝗙𝗔𝗞𝗘𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢  \n'
men = []
for(let mem of groupMembers) {
    if(!mem.id.startsWith(55)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply(' 𝗡𝗲𝗻𝗵𝘂𝗺 𝗙𝗮𝗹𝘀𝗼 𝗗𝗲𝘁𝗲𝗰𝘁??𝗱𝗼')
loli.sendMessage(from, {text: teks, mentions: men})
break

case 'listabr':
if(!isGroup) return reply(mag.grupo)
if (!isBotAdmins) return reply(msg.botadm)
if(!isGroupAdmins) return reply(mag.adm)
teks = '𝗕𝗥𝗔S𝗜𝗟𝗘𝗜𝗥𝗢𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢 \n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(55)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply('🇧🇷 *NENHUM NÚMERO BR FOI ENCONTRADO* 🇧🇷')
loli.sendMessage(from, {text: teks, mentions: men})
break

case 'banfake':
{
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
if (!isBotAdmins) return reply(msg.botadm)
if(!isGroup) return reply(mag.grupo)
array_fake = [];
for(let a of groupMembers) {
if(!a.id.startsWith("55") && a.id !== numeroBot && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return reply("Nenhum número fake encontrado no grupo")
for(let a of array_fake) {
await sleep(100)
loli.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} números fake removido do grupo`
loli.sendMessage(from, {text: teks, mentions: array_fake})
}
break

case 'banbrs': case 'banbr':
{
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
if (!isBotAdmins) return reply(msg.botadm)
if(!isGroup) return reply(mag.grupo)
array_fake = [];
for(let a of groupMembers) {
if(!a.id.startsWith("258") && a.id !== numeroBot && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return reply("Nenhum número fake encontrado no grupo")
for(let a of array_fake) {
await sleep(100)
loli.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} números Brs foi removido do grupo`
loli.sendMessage(from, {text: teks, mentions: array_fake})
}
break

case 'antisticker':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('[1 para ativar, 0 para desativar]')
antisticker.push(from)
fs.writeFileSync('./arquivos/antis/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('[1 para ativar, 0 para desativar]')
}
break

 case 'fazernick':{ // BY ALIZINDEV //by: ALIZINDEV 
if (!q) return reply(`Exemple\n${prefix+command} AlizinDev`)
let lizink_res = await fetchJson(`https://alizindev-api.onrender.com/api/tools/styletext?text=${q}&apikey=a93e85c1`)
let lizinn = lizink_res.resultado
let alizinnk =`*NICKS*\n\n`
for (let x of lizinn){
alizinnk +=`RESULTADO : ${x.result}\n\n`
}
reply(alizinnk)
}
break

case 'listaadmins': case 'listaadm': // BY ALIZINDEV BY ALIZIN DEV 
if (!isGroup) return reply('_so em grupos..._')
teks = `Lista de administradores do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break

case 'antidoc':
if (!isGroup) return reply(msg.grupo)
if (!isBotGroupAdmins) return reply(msg.botadm)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
antidoc.push(from)
fs.writeFileSync('./arquivos/antis/antidoc.json', JSON.stringify(antidoc))
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (Number(args[0]) === 0) {
antidoc.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antidoc.json', JSON.stringify(antidoc))
reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
 } else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antivideo':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (args.length < 1) return reply('[1 para ativar, 0 para desativar]')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./arquivos/antis/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break



case 'beijo':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = await getBuffer(`${beijin}`)
await loli.sendMessage(from, {video: wew, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break
case "ppt":
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!isGroup) return reply(msg.grupo)
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Você ganhou -_-"
}
if (vit == "derrota") {
var tes = "Eu ganhei pobre kkkkkk"
}
if (vit == "empate") {
var tes = "Deu empate 😐"
}
reply(`${botName} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break



case 'chance':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (!isGroup) return reply(msg.grupo)
rate = body.slice(7)
zxzz = 
random = `${Math.floor(Math.random() * 200)}`
reply(' ➥ A chance disso que você falou vai acontecer e de:❰ '+random+'% ❱ ✧ ')
break


// Caso 'casar'
case 'casar':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);
    if (!isGroup) return reply('Só pode ser utilizado este comando, em grupo.');

    let casarMentionId; // Variável para armazenar o ID da menção
    if (budy.includes("@")) {
        let mentionId = args.join(" ").replace("@", "") + "@s.whatsapp.net";
        casarMentionId = mentionId; // Atribui o ID mencionado
    } else {
        casarMentionId = sender; // Se não houver menção, usa o remetente
    }

    // Mensagem de casamento com menção
    let suspCasar = `Parabéns, Agora Você Pegou Prisão Perpétua, Digo, se Casou Com @${casarMentionId.split('@')[0]}`;
    let jrqCasar = await getBuffer(`${casalzin}`);
    
    // Envia a mensagem com vídeo
    await loli.sendMessage(from, {
        video: jrqCasar,
        gifPlayback: true,
        caption: suspCasar,
        mentions: [casarMentionId]
    }, { quoted: info });
    break;

// Caso 'dança' ou 'dançar'
case 'dança':
case 'dançar':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou, se você for, apenas digite ${prefix}modobrincadeira 1.`);
    if (!isGroup) return reply('Este comando só pode ser utilizado em grupos.');

    let dançaMentionId; // Variável para armazenar o ID da menção
    if (budy.includes("@")) {
        let mentionId = args.join(" ").replace("@", "") + "@s.whatsapp.net";
        dançaMentionId = mentionId; // Atribui o ID mencionado
    } else {
        dançaMentionId = sender; // Se não houver menção, usa o remetente
    }

    // Enviar a mensagem inicial com menção
    await loli.sendMessage(from, {
        text: `❰ Pesquisando parceiros de dança: @${dançaMentionId.split("@")[0]}, aguarde... ❱`,
        mentions: [dançaMentionId]
    });

    // Aguardar um tempo antes de enviar o vídeo
    setTimeout(async () => {
        let jrqDanca = await getBuffer(`${dancinha}`);
        await loli.sendMessage(from, {
            video: jrqDanca,
            gifPlayback: true,
            caption: `Você e o(a) @${dançaMentionId.split("@")[0]} estão dançando para o TikTok! 🕺💃`,
            mentions: [dançaMentionId]
        }, { quoted: info });
    }, 7000); // Aguardar 7 segundos
    break;

// Caso 'soco'
case 'soco':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);
    if (!isGroup) return reply('Só pode ser utilizado este comando, em grupo.');

    let socoMentionId; // Variável para armazenar o ID da menção
    if (budy.includes("@")) {
        let mentionId = args.join(" ").replace("@", "") + "@s.whatsapp.net";
        socoMentionId = mentionId; // Atribui o ID mencionado
    } else {
        socoMentionId = sender; // Se não houver menção, usa o remetente
    }

    let suspSoco = `@${socoMentionId.split('@')[0]} Você Recebeu um Socão`;
    let jrqSoco = await getBuffer(`${soquin}`);
    await loli.sendMessage(from, {
        video: jrqSoco,
        gifPlayback: true,
        caption: suspSoco,
        mentions: [socoMentionId]
    }, { quoted: info });
    break;

    case 'chute':
case 'chutar':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1.`);
    if (!isGroup) return reply('Só pode ser utilizado este comando, em grupo.');

    // Declarar uma variável para menção
    let mentionIdChutar;

    if (budy.includes("@")) {
        let userMention = args.join(" ").replace("@", "") + "@s.whatsapp.net";
        mentionIdChutar = userMention; // Atribuição aqui
    } else {
        mentionIdChutar = sender; // Atribuição aqui
    }

    // Mensagem de chute com menção
    let suspChute = `Você acabou de dar um chute em @${mentionIdChutar.split('@')[0]} 🤡`;

    // Obter o buffer do vídeo
    try {
        let jry = await getBuffer(`${chutin}`);
        // Enviar vídeo com menção e legenda
        await loli.sendMessage(from, {
            video: jry,
            gifPlayback: true,
            caption: suspChute,
            mentions: [mentionIdChutar]
        }, { quoted: info });
    } catch (error) {
        reply("Erro ao carregar o vídeo. Tente novamente mais tarde.");
    }
    break;

case 'chutar2':  // Alana vendedora de ovo frito
    if (!isGroup) return reply('Só pode ser utilizado este comando em grupo.');

    let chutarMentionId; // Variável para armazenar o ID da menção
    if (budy.includes("@")) {
        chutarMentionId = args.join(" ").replace("@", "") + "@s.whatsapp.net"; // Atribui o ID mencionado
    } else {
        chutarMentionId = sender; // Se não houver menção, usa o remetente
    }

    // Mensagem de chute com menção
    const suspChutar = `Você acabou de dar um chute em @${chutarMentionId.split('@')[0]} 🤡`;

    // Obter o buffer do vídeo da URL especificada
    try {
        const jry = await getBuffer(`https://telegra.ph/file/d4b2525d2e1aeb33fa626.mp4`);
        // Enviar vídeo com menção e legenda
        await loli.sendMessage(from, {
            video: jry,
            gifPlayback: true,
            caption: suspChutar,
            mentions: [chutarMentionId] // Usando a variável correta aqui
        }, { quoted: contato });
    } catch (error) {
        reply("Erro ao carregar o vídeo. Tente novamente mais tarde.");
    }
    break;
// Caso 'feio'
case 'feio':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);
    if (!isGroup) return reply('Só pode ser utilizado este comando, em grupo.');

    let feio_mention_id;

    if (budy.includes("@")) {
        let mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
        feio_mention_id = mention_id;  // Atribui o ID mencionado
    } else {
        feio_mention_id = sender;  // Se não houver menção, usa o remetente
    }

    await loli.sendMessage(from, { text: `Pesquisando a sua ficha de feio : @${feio_mention_id.split("@")[0]} aguarde...`, mentions: [feio_mention_id] });

    setTimeout(async () => {
        let wew = await getBuffer(`${fein}`);
        let random = `${Math.floor(Math.random() * 110)}`;
        let feio = random;

        let bo = '';
        if (feio < 20) { bo = 'É, não é feio'; } 
        else if (feio == 21 || feio == 23 || feio == 24 || feio == 25 || feio == 26 || feio == 27 || feio == 2 || feio == 29 || feio == 30) { 
            bo = '+/- feio'; 
        } else if (feio == 31) { 
            bo = 'Ainda tá na média'; 
        } else if (feio == 32 || feio == 33) { 
            bo = 'Da pra pegar umas(ns) novinha(o) ainda'; 
        } else if (feio == 34) { 
            bo = 'É fein, mas tem baum coração'; 
        } else if (feio == 35) { 
            bo = 'Tá na média, mas não deixa de ser feii'; 
        } else if (feio == 36) { 
            bo = 'Bonitin mas é feio com orgulho'; 
        } else if (feio == 37) { 
            bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'; 
        } else if (feio == 3) { 
            bo = 'tenho'; 
        } else if (feio == 39) { 
            bo = 'Feio, mas um banho e se arrumar deve resolver'; 
        } else if (feio == 40) { 
            bo = 'FeiN, mas não existe gente feia, existe gente que não conhece os produtos jequity'; 
        } else if (feio == 41) { 
            bo = 'Você é feio, mas é legal, continue assim'; 
        } else if (feio == 42) { 
            bo = 'Nada que uma maquiagem e se arrumar não resolva 🥴'; 
        } else if (feio == 43) { 
            bo = 'Feio que dói de ver, compra uma máscara que melhora'; 
        } else if (feio == 44) { 
            bo = 'Feio mas nada que um saco na cabeça não resolva né!?'; 
        } else if (feio == 45) { 
            bo = 'Você é feio, mas tem bom gosto'; 
        } else if (feio == 46) { 
            bo = 'Feio, mas tem muitos amigos'; 
        } else if (feio == 47) { 
            bo = 'Feio, mas tem lábia pra pegar várias novinhas'; 
        } else if (feio == 4) { 
            bo = 'Feio e ainda não sabe se vestir, vixi'; 
        } else if (feio == 49) { 
            bo = 'Feiooo'; 
        } else if (feio == 50) { 
            bo = 'Você é feio, mas não se enxerga 🧐'; 
        } else if (feio > 51) { 
            bo = 'Você é feio demais 🙈'; 
        }

        await loli.sendMessage(from, { 
            image: wew, 
            caption: `O quanto você é feio? \n\n 「 @${feio_mention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ feio 🙉\n\n${bo}`, 
            mentions: [feio_mention_id], 
            thumbnail: null 
        }, { quoted: info });
    }, 7000);
    break;




// Caso 'soco'




case 'casal':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
audiomenu = await fs.readFileSync("./loli/audio/shipo.mp3")
loli.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.id)
membr.push(teupai21.id)
mentions(jet, membr, true)
break

case 'shipo':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
teks = args.join(" ")
if(teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.id.split('@')[0]}\n && 2 = ${teks} com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.id)
membrr.push(teupai211.id)
mentions(jet, membrr, true)
break

case 'idgp':
reply(`${from}`)
break

case 'a1':
loli.sendMessage(from, {
audio: fs.readFileSync('./arquivos/musica/a1.mp3'),
mimetype: 'audio/mp4'
},
{quoted: info
})
break

case 'a2':
loli.sendMessage(from, {
audio: fs.readFileSync('./arquivos/musica/a2.mp3'),
mimetype: 'audio/mp4'
},
{quoted: info
})
break

case 'a3':
loli.sendMessage(from, {
audio: fs.readFileSync('./arquivos/musica/a3.mp3'),
mimetype: 'audio/mp4'
},
{quoted: info
})
break


case 'japonesa':
try {
loli.sendMessage(from, {image: {url: `https://aemt.me/japan`}}, {quoted: info}).catch(() => {
return reply('erro...')
})
await sleep(600)
loli.sendMessage(from, {text: 'MANDANDO...'}, {quoted: info});
} catch {
reply('A API CAIU')
}
break

case 'a4':
loli.sendMessage(from, {
audio: fs.readFileSync('./arquivos/musica/a4.mp3'),
mimetype: 'audio/mp4'
},
{quoted: info
})
break

case 'suruba':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply(msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modo-gamer 1 ativado, para desativar só basta utilizar ${prefix}modo-gamer 0`)
const quantidadeSafados = args.join(' ')
if(!quantidadeSafados) return reply(`Informe por favor a quantidade de pessoas você deseja em sua suruba... *Exemplo:* ${prefix+command} 4`)
emojiskk = ["🥵", "😈", "🫣", "😏"]
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)]  
frasekk = [`tá querendo relações sexuais a ${quantidadeSafados}, topa?`, `quer que *${quantidadeSafados}* pessoas venham de *chicote, algema e corda de alpinista*.`, `quer que ${quantidadeSafados} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`]
context = frasekk[Math.floor(Math.random() * frasekk.length)]  
ABC = `${prefix} @${sender.split('@')[0]} ${context}\n\n`
for (var i = 0; i < quantidadeSafados; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mencionarIMG(ABC, suruba);
break;

case 'addpremium': case 'addvip':
if (!isCreator) loli.sendMessage(from, ndono2, sticker)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./Premiums/usuarios/premium.json', JSON.stringify(premium))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break 

case 'serprem': case 'servip':
if (!isCreator) return reply(msg.dono)
premium.push(`${donoNumber}@s.whatsapp.net`)
fs.writeFileSync('./Premiums/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${donoNumber} você foi adicionado na lista premium.`)
break

case 'modobrincadeiras':  
case 'modobrincadeiras':  
case 'Modobrincadeira':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isModobn) return reply('o modobrincadeira já está ativo')
modobn.push(from)
fs.writeFileSync('./arquivos/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`✓Ativado com sucesso o modobrincadeiras no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isModobn) return reply('o modobrincadeira já está Desativado')  
modobn.splice(from, 1)
fs.writeFileSync('./arquivos/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`✓Modo brincadeiras desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'delpremium': case 'delvip':
if (!isGroup) return reply(msg.grupo)
if (!isCreator) return  reply(msg.dono)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("_Este número não está incluso na lista premium.._")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./Premiums/usuarios/premium.json', JSON.stringify(premium))
loli.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("_Este número não está incluso na lista premium.._")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./Premiums/usuarios/premium.json', JSON.stringify(premium))
loli.sendMessage(from, {text: ` @${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

case 'listavip': case 'listaprem':
if(!isCreator) return reply(msg.dono)   
if(!isPremium) return reply(msg.premium)   
tkks = '╭────*「 _PREMIUM USER👑_ 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 _${botName}_ 」*────`
reply(tkks.trim())
break

case 'sorteio':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `
❯  ❒『${botName}』❒  ❮


║❯         〘 SORTEIO ALEATÓRIO 〙


┠❯ ❒  Você Foi o Premiado 
┠❯ ❒  Prêmio: ${q}
┠❯ ❒  Doador: ${pushname}\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `┠❯ ❒  @${groupMembers[r].id.split('@')[0]}\n\n\n║❯         〘 MOTIVACIONAL 〙\n\n\n${enviarmen}`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break





case 'antilink':
if (!isBotAdmins) return reply(msg.botadm)
if (!isGroupAdmins) return reply(msg.adm)
if (!info.key.fromMe && !isCreator) return reply(msg.botadm)
					if (args.length < 1) return reply('digite 1 para ativar ou 0 para desativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./loli/seguranca/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi ativo no grupo ✔️')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./loli/seguranca/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi desativado com sucesso neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
					
case 'admshide': case 'listaadm': case 'adms':
if (!isGroup) return reply(msg.grupo)
ytb = `Lista dos admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break




case 'alma-gemeas':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae121 = groupMembers
const suamae251 = groupMembers
const teupai117 = suamae121[Math.floor(Math.random() * suamae121.length)]
const teupai251 = suamae251[Math.floor(Math.random() * suamae251.length)]
var shipted11 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipteddd = shipted11[Math.floor(Math.random() * shipted11.length)]
jet = `*Hmmm....  alma-gemeas eles 2 💘💘*\n\n1= @${teupai117.id.split('@')[0]}\ne esse\n2= @${teupai251.id.split('@')[0]}\ncom uma porcentagem de: ${shipteddd}`
membr.push(teupai117.id)
membr.push(teupai251.id)
mentions(jet, membr, true)
break

case 'dado': 
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
					kapankah = body.slice(1)
					const elu =['Caiu⚀','Caiu⚁','Caiu⚂','Caiu⚃','Caiu⚄','Caiu⚅']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					loli.sendMessage(from, ule, text, { quoted: info })
					break

case 'autoreact':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (Number(args[0]) === 1) {
if (isAutoReact) return reply('Já está ativado')
autoreact.push(from)
fs.writeFileSync('./arquivos/funcoes/autoreact.json', JSON.stringify(autoreact))
reply('[🩸] Ativou com sucesso o recurso de auto reação neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAutoReact) return reply('Já está desativado')
pesquisar = from
processo = autoreact.indexOf(pesquisar)
while(processo >= 0){
autoreact.splice(processo, 1)
processo = autoreact.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/funcoes/autoreact.json', JSON.stringify(autoreact))
reply('‼️ Desativou com sucesso o recurso de auto reação neste grupo✔️')
}
break

case 'antiloc':
if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {		 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./arquivos/antis/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'anticatalg': case 'anticatalago':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (Number(args[0]) === 1) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./arquivos/antis/anticatalogo.json', JSON.stringify(anticatalogo))
reply('[🩸] Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/antis/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
}
break

case 'antinotas':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiNotas) return reply('Já Esta ativo')
antinotas.push(from)
fs.writeFileSync('./arquivos/antis/antinotas.json', JSON.stringify(antinotas))
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return reply('Ja esta Desativado.')
antinotas.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antinotas.json', JSON.stringify(antinotas))
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'quando':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (args.length < 1) return reply('Digite a pergunta')
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\n\nResposta: 1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random2} ${random3}`
}
reply(texto)
break

case 'rankgostoso':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
❯ 『${botName}』 ❮


║❯         〘 TOP MAIS GOSTOSOS 〙

┠❯ ❒ GRUPO: ${groupName}
┠
┠❯ ❒ GOSTOSO: @${o01.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o02.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o03.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o04.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o05.id.split('@')[0]}  

❯         〘 MOTIVACIONAL 〙

${enviarmen}`
member.push(o01.id)
member.push(o02.id)
member.push(o03.id)
member.push(o04.id)
member.push(o05.id)
mentions(luy, member, true)
break

case 'rankgostosa':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.id.split('@')[0]}??🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.id)
member.push(o2.id)
member.push(o3.id)
member.push(o4.id)
member.push(o5.id)
mentions(luy, member, true)
break

case 'rankcornos':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22%`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
❯  ❒『 ${botName} 』❒  ❮


║❯         〘 TOP MAIS CORNOS 〙

┠❯ ❒ GRUPO: ${groupName}
┠
┠❯ ❒ CORNO: @${cornos1.id.split('@')[0]}  ❯ ${porcent} ❮
┠❯ ❒ CORNO: @${cornos2.id.split('@')[0]}  ❯ ${porcentag} ❮
┠❯ ❒ CORNO: @${cornos3.id.split('@')[0]}  ❯ ${porcl} ❮
┠❯ ❒ CORNO: @${cornos4.id.split('@')[0]}  ❯ ${porg} ❮
┠❯ ❒ CORNO: @${cornos5.id.split('@')[0]}  ❯ ${prg} ❮

❯         〘 MOTIVACIONAL 〙

${enviarmen}`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mentions(ytb, membr, true)
break

case 'rankgay':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
d = []
ret = `❯  ❒『${botName}』❒  ❮\n\n║❯         〘 TOP 5 MAIS GAYS 〙\n\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `┠❯ ❒ 🏳️‍🌈 @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgados':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
d = []
ret = `❯  ❒『${botName}』❒  ❮\n\n║❯         〘 TOP 5 MAIS GADOS 〙\n\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `┠❯ ❒ 🐮 @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'feminista':
    await loli.sendMessage(from, {
        text: `Pesquisando a ficha de feminista @${sender_ou_n.split("@")[0]}, aguarde...`,
        mentions: [sender_ou_n]
    }, { quoted: info });

    setTimeout(async () => {
        const random = Math.floor(Math.random() * 101);
        await loli.sendMessage(from, {
            image: { url: `https://i.imgur.com/W9eiq08.jpeg` },
            caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser feminista?\n• A porcentagem de chance é *${random}%*`,
            mentions: [sender_ou_n]
        }, { quoted: info });
    }, 7000);
    break;

case 'machista':
    await loli.sendMessage(from, {
        text: `Pesquisando a ficha de machista @${sender_ou_n.split("@")[0]}, aguarde...`,
        mentions: [sender_ou_n]
    }, { quoted: info });

    setTimeout(async () => {
        const random = Math.floor(Math.random() * 101);
        await loli.sendMessage(from, {
            image: { url: `https://i.imgur.com/w1Gmeo4.jpeg` },
            caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser machista?\n• A porcentagem de chance é *${random}%*`,
            mentions: [sender_ou_n]
        }, { quoted: info });
    }, 7000);
    break;

case 'fiel':
    await loli.sendMessage(from, {
        text: `Pesquisando a ficha de fiel @${sender_ou_n.split("@")[0]}, aguarde...`,
        mentions: [sender_ou_n]
    }, { quoted: info });

    setTimeout(async () => {
        const random = Math.floor(Math.random() * 101);
        await loli.sendMessage(from, {
            image: { url: `https://i.imgur.com/x7Xw6Cm.jpeg` },
            caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser Fiel?\n• A porcentagem de chance é *${random}%*`,
            mentions: [sender_ou_n]
        }, { quoted: info });
    }, 7000);
    break;
case 'lindo':
await loli.sendMessage(from, {
    text: `Pesquisando a ficha de lindo @${sender_ou_n.split("@")[0]}, aguarde...`,
    mentions: [sender_ou_n]
}, { quoted: info });

setTimeout(async () => {
    // Gera um número aleatório de 0 a 100
    const random = Math.floor(Math.random() * 101); // Mudou de 110 para 101 para garantir 0-100
    await loli.sendMessage(from, {
        image: { url: `https://i.imgur.com/ZunNgJQ.jpeg` },
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser lindo?\n• A porcentagem de chance é *${random}%*`,
        mentions: [sender_ou_n]
    }, { quoted: info });
}, 7000);
break;


case 'linda':
    // Remover as verificações de grupo e modo brincadeiras
    // if (!isGroup) return reply('Este comando só pode ser usado em grupos.')
    // if (!isModobn) return reply(`Ative o modo de brincadeiras para usar este comando. \nUtilize: \n${prefix}modobrincadeira 1`)

    await loli.sendMessage(from, {
        text: `Pesquisando a ficha de linda @${sender_ou_n.split("@")[0]}, aguarde...`,
        mentions: [sender_ou_n]
    }, { quoted: info });

    setTimeout(async () => {
        // Gera um número aleatório de 0 a 100
        const random = Math.floor(Math.random() * 101);
        await loli.sendMessage(from, {
            image: { url: `https://i.imgur.com/0A18pcT.jpeg` },
            caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser linda?\n• A porcentagem de chance é *${random}%*`,
            mentions: [sender_ou_n]
        }, { quoted: info });
    }, 7000);
    break;

//ɴᴋᴢɪɴ </> 🧸

case 'batalha': {
    if (!isGroup) return reply('Este comando só pode ser usado em grupos.');
    if (!isModobn) return reply(`Ative o modo de brincadeiras para usar este comando. \nUtilize: \n${prefix}modobrincadeira 1`);

    // Mensagem de "aguarde" antes de mostrar o resultado
    await reply(' *Batalha ja vai começar.....* ');

    const personagens = [
        { nome: 'Pikachu', gifUrl: 'https://telegra.ph/file/6bd40adb0a376e675f939.mp4' },
        { nome: 'Naruto', gifUrl: 'https://telegra.ph/file/d2f30730977deb091879e.mp4' },
        { nome: 'Goku', gifUrl: 'https://telegra.ph/file/bd5047e87a0f7ebae3ffc.mp4' },
        { nome: 'Saitama', gifUrl: 'https://telegra.ph/file/e8aff573fef04246fcd18.mp4' },
        { nome: 'Deadpool', gifUrl: 'https://telegra.ph/file/2964a8622a45c99bf9956.mp4' },
        { nome: 'Meliodas', gifUrl: 'https://telegra.ph/file/b59d9ee2a283607d50281.mp4' },
        { nome: 'Zenitsu', gifUrl: 'https://telegra.ph/file/dc2e573f4686f4966b5d4.mp4' },
        { nome: 'Thor', gifUrl: 'https://telegra.ph/file/b67bb89796934670abaf2.mp4' },
        { nome: 'Tanjiro', gifUrl: 'https://telegra.ph/file/07d10c28239f73dec90c3.mp4' },
        { nome: 'Dogao', gifUrl: 'https://telegra.ph/file/51a84339a650a74afc929.mp4' },
        { nome: 'Luffy', gifUrl: 'https://telegra.ph/file/99e2a7164fcea37396485.mp4' },
        { nome: 'Zoro', gifUrl: 'https://telegra.ph/file/3d22a58c4315c83043b1d.mp4' },
        { nome: 'Thanos', gifUrl: 'https://telegra.ph/file/fad082178f3bfbfe126fc.mp4' },
        { nome: 'Homem de ferro', gifUrl: 'https://telegra.ph/file/541d39e6ab1a0807e303f.mp4' },
        { nome: 'Mulher maravilha', gifUrl: 'https://telegra.ph/file/760ae4e17c30f73cf3f98.mp4' }
    ];
    const personagemEscolhido = personagens[Math.floor(Math.random() * personagens.length)];
    
    // Define a dificuldade aumentando o valor máximo da chance de vitória
    const minChance = 1;
    const maxChance = 40;  // Reduz a chance máxima de vitória
    const chanceDeVitoria = Math.floor(Math.random() * (maxChance - minChance + 1)) + minChance;
    
    const resultado = Math.random() * 100 < chanceDeVitoria ? 'ganhou' : 'perdeu';
    
    const tempoBatalhaSegundos = Math.floor(Math.random() * 3600); 
    const minutos = Math.floor(tempoBatalhaSegundos / 60);
    const segundos = tempoBatalhaSegundos % 60;
    const tempoBatalhaFormatado = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

    const batalhaMsg = `╔═════════════════════╗
┃ 🎬 **BATALHA ÉPICA** 🎬
╠═════════════════════╣
┃ *Nome : ${pushname}*
┃ 🤖 *Desafiante:* ${personagemEscolhido.nome}
┃ 🔥 **Chance de Vitória:** ${chanceDeVitoria}%
┃ ⏱ *Duração da Batalha:* ${tempoBatalhaFormatado}
┃ 🎉 *Resultado:* ${resultado.toUpperCase()}!
╚═════════════════════╝`;

    await loli.sendMessage(from, {
        video: { url: personagemEscolhido.gifUrl },
        gifPlayback: true,
        caption: batalhaMsg
    }, { quoted: info });
}
break 

case 'frase':	//Dark goxtoso //Zalts apaixonado
                    rate = body.slice(6)
					var foda =['amor imaturo diz: Eu te amo porque preciso de você','A vida começa a cada cinco minutos','Onde as palavras falham, a música fala','Um bom viajante não tem planos','Uma vez que aceitamos nossos limites, vamos além deles','O que não nos mata nos fortalece','Se você caminha sozinho, você vai mais rápido Se vocês caminharem juntos, vocês irão mais longe','Uma vida cheia de erros não é apenas mais honrosa, mas é mais sábia do que uma vida gasta sem fazer nada','Nunca perca o senso de humor e aprenda a rir de suas próprias falhas','A preocupação é como uma cadeira de balanço, ela mantém você ocupado, mas não leva a lugar nenhum','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida','Se você pode sonhar, você pode fazer','O impossível é o fantasma dos tímidos e o refúgio dos covardes','O caminho que temos que percorrer 998 é cheio de surpresas. Você nunca estará preparado para aqueles que o tocam, sejam eles felizes ou sombrios, porque isso faz parte de ganhar experiência. E descobrir quão agradáveis ou infelizes são aqueles que esperam por você, é algo que você nunca poderá evitar','A felicidade não é algo que você adia para o futuro, é algo que você projeta para o presente','Os amigos devem ser como dinheiro, que antes de precisar, você sabe o seu valor','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break
					
case 'recadoprowhatsapp':	//Dark goxtoso //Zalts apaixonado💙
                    rate = body.slice(6)
					var foda =['Felicidade é só questão de ser.','Acredite: sempre tem algo bom guardado para você','Concentre-se no que está buscando, não no que está deixando para trás.','A vida é muito curta pra não viver sorrindo por aí!','Onde há vontade, há chance de dar certo!','Dance no seu ritmo! 💃','Só você sabe o que te deixará feliz.','Não se estresse com o que está fora do seu controle.','Aprenda a apreciar as voltas que o mundo dá.','Comece a se amar. O resto virá depois.','Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!','Reciprocidade, para as coisa boas. Imunidade, para as coisas ruins.','Coragem, a vida gosta de pessoas destemidas.', 'Compartilhe seus sentimentos. Nem todas as pessoas sabem adivinhar','Continue caminhando, não tem problema se for devagar.','Melhor amar do que ser amargo!','Não corrigir nossas falhas é o mesmo que cometer novos erros','Quando o caminho se torna duro, só os duros continuam caminhando','Florescer exige passar por todas as estações!','Quando as coisas simples parecem especiais, você percebe como a vida pode ser boa.','Os aprendizados deixam a vida especial.','Feliz daquele que encontra o verdadeiro amor sem as cicatrizes da decepção']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'frasecriativas':	//Dark goxtoso //Zalts apaixonado💙
                    rate = body.slice(6)
					var foda =['Não conte os dias, viva-os! ☀️😎','Tudo que vem, vem com algum propósito. Assim como tudo que vai, vai por uma razão. 🌸🌀','Eu não gosto de cobrar atitude de ninguém porque eu tenho de sobra. 😉','Gostar, eu gosto de muita gente, mas a minha prioridade sempre será eu mesma. ✨','As pessoas que criticam, são as mesmas que copiam. 👀','Aprendi que meu único limite é a minha mente. ??','Fazendo dos meus sonhos, um objetivo. 💭']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'frasebonita':	//Dark goxtoso //Zalts apaixonado
                    rate = body.slice(6)
					var foda =['Viver em paz é um luxo. É saber que, apesar dos pesares, ficar bem é prioridade. ✨','Somos ferramentas para a vida seguir em frente. 🌎','Ao invés de pensar nas marcas que a vida deixa em você, reflita: Quais as marcas você está deixando na vida? 💭','Segue seu coração, tudo vai dar certo. ♥️','Permita-se sentir tudo que está dentro de você! ✨','Cada etapa da vida, lhe demandará uma versão mais forte de você. 🍃','A vida é como uma rosa, cada pétala um sonho, cada espinho uma realidade🌷🙉','A arma dos fracos é criticar os fortes. A arma dos fortes é ignorar os fracos!👌','Pare de olhar para trás. Você já sabe onde esteve, agora precisa saber pra onde vai🌙🍃','Só faz sentido o que te faz sentir.']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break


case 'antiaudio':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./arquivos/antis/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break
case 'perfil2': //its morais
try {
ppimg = await eren.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}
try {
var conselho = palavrasc[Math.floor(Math.random() * palavrasc.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
loli.sendMessage(from, {image: {url: ppimg}, caption: mess.profileInformation(pushname, sender, info, putar, putar2, gostosurar, gostosurar2, nivelgador, nivelgado2r, programa, conselho), mentions: [sender]}, {quoted: sasah})
} catch (e) {
console.log(e)
}
break				
case 'perfil':
try {
ppimg = await loli.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
var bio = await loli.fetchStatus
var bioo = bio.status
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const dptr = `
❯  ❒『${botName}』❒  ❮


║❯         〘 SEU PERFIL 〙

┠❯ ❒ NOME: ${pushname}
┠❯ ❒ ${!isGroup ? `PRIVADO: ${pushname}` :  `GRUPO: ${groupName}`}
┠❯ ❒ GADISSE: ${nivelgador}${nivelgado2r}%
┠❯ ❒ PUTARIA: ${putar}${putar2}%
┠❯ ❒ GOSTOSURA: ${gostosurar}${gostosurar2}% 
┠❯ ❒ TELEFONE: ${m.key.id.length > 21 ? 'Android 👾' : m.key.id.substring(0, 2) == '3A' ? 'IOS 🍎🍏' : 'Zap zap web 🖥️💻'}
┠❯ ❒ PROGRAMA: R$${programa}

❯         〘 MOTIVACIONAL 〙

${enviarmen}`
daftarimg = await getBuffer(ppimg)
loli.sendMessage(from, {image: daftarimg, caption: dptr}, {quoted: info})
break

          case 'tempo':
          if(!isPremium) return reply(msg.premium)
            loli.sendMessage(from, { react: { text: `📡`, key: info.key } })
            if (!q) return reply(`Qual o nome da sua cidade? Exemplo: /tempo Sao Paulo caso ter algum ponto retire pra nao da erro.`)
            cidade = body.slice(7)
            clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=f5c0840c2457fbb64188a6d4be05618f&units=metric&lang=pt_br`)
            if (clima.error) return reply(resposta.erro)
            jr = `🌞 Temperatura agora: ${clima.data.main.temp}ºC
  🏙️ Cidade: ${clima.data.name}
  🔥 Temperatura Máxima: ${clima.data.main.temp_max}°C
  ❄ Temperatura Mínima: ${clima.data.main.temp_min}°C
  🌦 Clima: ${clima.data.weather[0].description}
  💧 Umidade de ar: ${clima.data.main.humidity}% 
  🌫 Ventos: ${clima.data.wind.speed}  
  
  Solicitado por: ${pushname}`
            await loli.sendMessage(from, { text: jr }, { quoted: info, contextInfo: { "mentionedJid": jr } })
            break
            
          case 'emojimix': {
            if (!q) return reply(`Exemplo : ${prefix + command} 😅+🤔`)
            reply('SER NÃO FOR TENTA COM OUTRO... ?')
            let [emoji1, emoji2] = q.split`+`
            var em = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
            for (let res of em.results) {
              templateMassage = {
                image: {
                  url: `${res.url}`,
                  quoted: live
                }
              }
              loli.sendMessage(from, templateMassage, { quoted: live })
            }
          }
            break
            
         case 'punheteiro':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);  
    if (!isGroup) return reply(`Só pode ser utilizado este comando em grupo.`);

    // Se houver menção, define blamention_id; caso contrário, usa o sender
    if (budy.includes("@")) {
        blamention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"; // Atribui o valor à variável já definida
    } else {
        blamention_id = sender; // Se não houver menção, usa o sender
    }

    const aletli = `${Math.floor(Math.random() * 105)}`;
    reply(`@${blamention_id.split("@")[0]} Aguarde, confiscando sua porcentagem...`);
    
    await delay(7000); // Aguardar 7 segundos

    reply(`「 @${blamention_id.split("@")[0]} 」Sua porcentagem de punheteiro é de: ${aletli}%`);
    break;
            
          case "arma": {
            bancoDeDados = {
              "M1887": {
                "nome": "M1887",
                "descrição": "Uma espingarda de cano duplo que inflige danos massivos em curta distância.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AK47": {
                "nome": "AK47",
                "descrição": "Rifle de assalto de alta potência com alta taxa de disparo e precisão moderada.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "AWM": {
                "nome": "AWM",
                "descrição": "Rifle de precisão capaz de derrubar inimigos com um único tiro.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "Groza": {
                "nome": "Groza",
                "descrição": "Rifle de assalto altamente poderoso com uma taxa de disparo e precisão excepcionais.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "UMP45": {
                "nome": "UMP45",
                "descrição": "Submetralhadora de alta cadência de tiro, equilibrada em termos de dano e controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 25
              },
              "M1014": {
                "nome": "M1014",
                "descrição": "Uma espingarda de combate próxima com uma taxa de disparo e dano impressionantes.",
                "dano": "Muito alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 6
              },
              "M60": {
                "nome": "M60",
                "descrição": "Metralhadora com alto poder de fogo, ideal para suprimir inimigos e combates a média distância.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 60
              },
              "XM8": {
                "nome": "XM8",
                "descrição": "Rifle de assalto de alta eficiência, com ótimo equilíbrio entre dano, alcance e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "SCAR": {
                "nome": "SCAR",
                "descrição": "Rifle de assalto confiável, com boa precisão e controle de recuo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "M4A1": {
                "nome": "M4A1",
                "descrição": "Rifle de assalto versátil e equilibrado, adequado para várias situações de combate.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "SVD": {
                "nome": "SVD",
                "descrição": "Rifle de precisão semi-automático, com ótimo alcance e dano significativo.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "MP5": {
                "nome": "MP5",
                "descrição": "Submetralhadora compacta e precisa, adequada para combates em espaços confinados.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "SPAS12": {
                "nome": "SPAS12",
                "descrição": "Uma espingarda de ação por bombeamento, eficaz a curta distância com alto dano.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 6
              },
              "KAR98K": {
                "nome": "KAR98K",
                "descrição": "Rifle de precisão de ação por ferrolho, com excelente precisão e dano letal.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "M249": {
                "nome": "M249",
                "descrição": "Metralhadora leve com grande capacidade de munição, ideal para controle de área.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 100
              },
              "Thompson": {
                "nome": "Thompson",
                "descrição": "Submetralhadora clássica de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "VSS": {
                "nome": "VSS",
                "descrição": "Rifle de assalto silencioso com escopo integrado e baixo recuo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 15
              },
              "MP40": {
                "nome": "MP40",
                "descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "AUG": {
                "nome": "AUG",
                "descrição": "Rifle de assalto com excelente precisão, alcance e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "G18": {
                "nome": "G18",
                "descrição": "Pistola automática com alta taxa de disparo, ideal para combate próximo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 20
              },
              "P90": {
                "nome": "P90",
                "descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 50
              },
              "Desert Eagle": {
                "nome": "Desert Eagle",
                "descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 7
              },
              "Vector": {
                "nome": "Vector",
                "descrição": "Submetralhadora compacta com alta cadência de tiro e boa precisão.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "CG15": {
                "nome": "CG15",
                "descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "USP": {
                "nome": "USP",
                "descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 12
              },
              "M1873": {
                "nome": "M1873",
                "descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AN94": {
                "nome": "AN94",
                "descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "CG15": {
                "nome": "CG15",
                "descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "USP": {
                "nome": "USP",
                "descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 12
              },
              "M1873": {
                "nome": "M1873",
                "descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AN94": {
                "nome": "AN94",
                "descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "M82B": {
                "nome": "M82B",
                "descrição": "Rifle de precisão de ação por ferrolho com alto dano e capacidade de penetração.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "P90": {
                "nome": "P90",
                "descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 50
              },
              "Desert Eagle": {
                "nome": "Desert Eagle",
                "descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 7
              },
              "M1887": {
                "nome": "M1887",
                "descrição": "Espingarda de ação por ferrolho com alto dano em combates de curta distância.",
                "dano": "Extremo",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "XM8": {
                "nome": "XM8",
                "descrição": "Rifle de assalto com boa precisão e cadência de tiro.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "KAR98K": {
                "nome": "KAR98K",
                "descrição": "Rifle de precisão de ação por ferrolho com alto dano e precisão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "MP40": {
                "nome": "MP40",
                "descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              }
            }


            const armaPesquisada = args.join(" "); // Substitua pelo valor desejado
            let resultado = null;

            for (const arma in bancoDeDados) {
              if (arma.toLowerCase() === armaPesquisada.toLowerCase()) {
                resultado = bancoDeDados[arma];
                break;
              }
            }

            if (resultado) {
              reply(`*${resultado.nome}*\n*${resultado.descrição}*\n\n*Dano: ${resultado.dano}*\n\n*Alcance: ${resultado.alcance}*\n\n*Taxa de Disparo: ${resultado.taxa_de_disparo}*\n\n*Capacidade do Pente: ${resultado.capacidade_do_pente}*`);
            } else {
              reply('Erro: Arma não encontrada no banco de dados.');
            }
          } break
          
         case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão':
         reply(`esse comando causa ban infelizmente não pode ser usado`)
            break


                    case 'walpaperanime':
            {
              json = JSON.parse(fs.readFileSync('./arquivos/wall.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                image: {
                  url: random,
                  quoted: info
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              loli.sendMessage(from, templateMassage)
            }
            break
            
                    case 'animememe':
            {
              json = JSON.parse(fs.readFileSync('./arquivos/animememe.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                image: {
                  url: random,
                  quoted: info
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              loli.sendMessage(from, templateMassage)
            }
            break
            
          case "adivinhação": case 'advh':
            if (!isGroup) return reply(`Comando só para grupos.`)
            if (args.length < 1) return reply(`Exemplo: ${prefix} adivinhacao 50`)
            const num = Math.floor(Math.random() * 100) + 1
            const guess = parseInt(args[0])
            if (isNaN(guess)) return reply('Digite um número válido.')
            if (guess < 1 || guess > 100) return reply('O número deve estar entre 1 e 100.')
            if (guess === num) {
              const premio = Math.floor(Math.random() * 50) + 1
              reply(`Parabéns, você acertou! O número era ${num}.\nVocê ganhou ${premio} em dinheiro.`)
            } else {
              reply(`Que pena, você errou. número era ${num}. Tente novamente.`)
            }
            break
            
            case 'apps':
loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: `



1° ENCONTREI TV
https://encontrei.tv/assistir/filmes-online-2/


➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️↗️↘️



2° REDE CANAIS
https://redecanais.zip/eu-sou-franky-dublado-lista-de-episodios_3ef81a600.html

(ESSE E MELHOR NO COMPUTADOR)


➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️↗️↘️


2° TOP-FLIX
 https://m.topflix.fm/


➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️↗️↘️



3° FILMELIER
https://www.filmelier.com/br/

✰✰✰✰✰




`},{quoted: info})

break

case 'gpofc':
loli.sendMessage(from, { react: { text: `⭐`, key: m.key }})
reply(`https://chat.whatsapp.com/IiBxOEZcwHkG5G9FsYdJ2u`)
break

          case 'ddd':
            if (!isPremium) return reply(msg.vip)
            if (args.length < 1) return reply(`Use ${prefix + command} 21`)
            ddd = body.slice(5)
            ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
            dddlist = `LISTA DE CIDADES ${ddds.data.state} COM ESTE DDD ${q}~\n\n`
            for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
            loli.sendMessage(from, { text: dddlist }, { quoted: info })
            break        
 
          case "imgpralink2":
            try {
              if (isQuotedImage) {
                boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
                const fetch = require('node-fetch');
                const FormData = require('form-data');
                const fs = require('fs');
                async function uploadImageToTelegraph(imageBuffer) {
                  const form = new FormData();
                  form.append('file', imageBuffer, { filename: 'image.jpg' });

                  const response = await fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: form,
                  });
                  const data = await response.json();
                  if (data && data[0] && data[0].src) {
                    return 'https://telegra.ph' + data[0].src;
                  } else {
                    throw new Error('Failed to retrieve the image URL from the response.');
                  }
                }
                const owgi = await getFileBuffer(boij, "image");
                const imageUrl = await uploadImageToTelegraph(owgi);
                reply(imageUrl);
              } else {
                reply('marque a ft')
              }
            } catch (e) {
              console.log(e)
              reply('error...')
            }
            break
       
          case 'fotobot':
            if (!isCreator) return reply(msg.dono)
            if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
            buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
            await loli.updateProfilePicture(numeroBot, buff)
            reply('Obrigado pelo novo perfil vlw')
            break        

case 'ct1':
if (!isGroup) return reply(msg.grupo)
if (!isCreator && !isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./arquivos/antis/antictt.json', JSON.stringify(antictt))
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
break 

          case 'antilinkgp':
          case 'antilink':
            if (!isGroup) return reply(msg.grupo)
            if (!isGroupAdmins) return reply(msg.adm)
            if (!isBotGroupAdmins) return reply(msg.botadm)
            if (Number(args[0]) === 1) {
              if (isAntilinkgp) return reply('Ja esta ativo')
              antilinkgp.push(from)
              fs.writeFileSync('./arquivos/antis/antilinkgp.json', JSON.stringify(antilinkgp))
              reply('Ativou com sucesso o recurso de antilinkgp')
            } else if (Number(args[0]) === 0) {
              if (!isAntilinkgp) return reply('Ja esta Desativado')
              pesquisar = from
              processo = antilinkgp.indexOf(pesquisar)
              while (processo >= 0) {
                antilinkgp.splice(processo, 1)
                processo = antilinkgp.indexOf(pesquisar)
              }
              fs.writeFileSync('./arquivos/antis/antilinkgp.json', JSON.stringify(antilinkgp))
              reply('Desativou com sucesso o recurso de antilink de grupo')
            } else {
            }
            break
case 'ct0':
if (!isGroup) return reply(msg.grupo)
if (!isCreator && !isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/antis/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
break
case 'Deezer':
case 'deezer':
//Requerir Um Nome De Uma Música 
if (!q) return reply(`ৡৢ͜͡𝔬⃝Exemplo: ${prefix}Deezer Грустная Сука`);
try {
//Pesquisar Na Api Do Deezer
searchMusicDeezerFind = (await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(q)}`)).data;
//Caso Não Retorne Nada, O Bot Vai Avisar
if (searchMusicDeezerFind.length == 0) return reply(`Não consegui encontrar q música informada!`);
//Nome Do Artista
const artistName = searchMusicDeezerFind.data[0].artist.name;
//Nome Da Música
const songTitle = searchMusicDeezerFind.data[0].title;
//Buscar A Música No Módulo Do YouTube
ABC = await yts(`${artistName} ${songTitle}`);
//Pegar O Primeiro Resultado
informationVideoYT = ABC.videos[0];
//Criar O Modelo De Mensagem 
const deezerMessage = `〘 𝐃𝐄𝐄𝐙𝐄𝐑 𝐌𝐎𝐃𝐔𝐋𝐄 〙

Música: ${songTitle}
Artista: ${artistName}
Álbum: ${searchMusicDeezerFind.data[0].album.title}
Duração: ${searchMusicDeezerFind.data[0].duration} Segundos
Música Explícita: ${searchMusicDeezerFind.data[0].explicit_lyrics ? 'Sim' : 'Não'}
Link Do Perfil: ${searchMusicDeezerFind.data[0].artist.link}
link Do Álbum: ${searchMusicDeezerFind.data[0].album.tracklist.replace('api.', '')}
Link: ${searchMusicDeezerFind.data[0].link}`;
//Enviar A Foto Retornada Junto Com O Texto
await loli.sendMessage(from, { image: { url: informationVideoYT.thumbnail }, caption: deezerMessage });
//Enviar Uma Prévia Da Música 
await loli.sendMessage(from, { audio: { url: searchMusicDeezerFind.data[0].preview }, mimetype: 'audio/mpeg'}, {quoted: info}).catch(e => { console.log(e) });
} catch (e) {
//Caso Ocorra Erros Retornar
if (String(e).includes("invalid json response body at")) {
console.log("Hmmm, Creio Que A Api Do Deezer Caiu. Tente Novamente Mais Tarde");
} else {
//Jogar Os Erros No Console 
console.log(e);
//Enviar A Mensagem De Erro
reply(enviar.msg.error);
}
}
break;
case 'happymod':
case 'happy': //By Luan and Tzn
    if (!q) return reply('Nome do app?');
    const url0 = `https://happymod.com/search.html?q=${q}`;    
    axios(url0)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const noticias = [];    
        $('.pdt-app-h3').each((index, element) => {
            const titulo = $(element).text().trim();
            const url = 'https://happymod.com/' + $(element).find('a').attr('href');
            const imagem = $(element).find('img').attr('src');
            const titu = $(element).next().find('.pdt-list-num').text().trim(); 
            noticias.push({ titulo, url, imagem, titu });
        });
        if (noticias.length === 0) return reply('Nenhum resultado encontrado.');//By Luan and Tzn
        let rapaz = `Olá, ${pushname}. Aqui está os aplicativos encontrados:\n\n`;
        noticias.forEach(noticia => {
          rapaz += `🎮 *${noticia.titulo}*\n` + 
                   `🔗 [Link](${noticia.url})\n` + 
                   `⭐ ${noticia.titu}\n\n`;  
        });//By Luan and Tzn
        loli.sendMessage(from, { text: rapaz }, { quoted: info });
        console.log(noticias);
      })
      .catch(error => {
        console.error(`Erro: ${error}`);
        reply('broxou,pae');
      });//By Luan and Tzn
    break;
case 'Aptoide':
case 'aptoide':
if (!q) return reply(`• Insira O Nome Do Aplicativo Juntamente Ao Comando!`)
try {
//Pesquisar O App No Aptoide
const aptoide = await axios.get(`https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(q)}&trusted=true`);
//Caso Não Ache Nenhum App, Retornar 
if (aptoide.data.datalist.total == 0) return reply('• Não Encontrei O Aplicativo Que Você Está Pesquisando!');
//Criando A Mensagem
description = (getApk, sizeApk) => `ꪶ͢͜𝐋𝐀𝐃𝐘 𝐁𝐎𝐓 - 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃‍ꫂ

❯ Nome: ${getApk.name}
❯ Package: ${getApk.package}
❯ Tamanho Do App: ${sizeApk}MB
❯ Versão Do App: ${getApk.file.vername}
❯ Link: ${getApk.file.path}`;
//Pegar O Buffer Da Imagem
photoAptoideBuffer = await(await fetch(aptoide.data.datalist.list[0].graphic)).buffer(),
//Enviar A Imagem Com As Informações
loli.sendMessage(from, {image: photoAptoideBuffer, caption: description(aptoide.data.datalist.list[0], (aptoide.data.datalist.list[0].size / 1048576).toFixed(1))})
//Enviar O Documento Do Aplicativo
loli.sendMessage(from, {document: {url: aptoide.data.datalist.list[0].file.path}, mimetype: "application/vnd.android.package-archive", fileName: `${aptoide.data.datalist.list[0].name}.apk`, caption: "Aqui Está O Aplicativo: "+q}, {quoted: info}) // Envia o app
} catch(e) {
reply('Erro Ao Baixar O Apk!')
console.log(e)
}
break;
case 'vasconews': 
    try {
        var nunudatav = await axios.get('https://vasco.com.br/noticias-home/')
        var nunu$v = cheerio.load(nunudatav.data)
        var nununoticiasv = []
        nunu$v('.box-noticias').each((index, nunulementv) => {
            var nunuezbtv = nunu$v(nunulementv).find('h3').text().trim()
            var nunugdv = nunu$v(nunulementv).find('.btn').text().trim()
            var nunulinkv = nunu$v(nunulementv).find('a').attr('href')
            var nunuimagev = nunu$v(nunulementv).find('img').attr('src')

            if (nunuezbtv && nunulinkv) {
                nununoticiasv.push({
                    nunuezbtv,
                    nunugdv: nunugdv.replace('Leia mais', ''),
                    nunulinkv: `${nunulinkv}`,
                    nunuimagev
                })
            }
        })

        nununoticiasv = nununoticiasv.slice(0, 5)

        var nunumensagemv = '⚽ *Últimas Notícias do Vasco:*\n\n'
        nununoticiasv.forEach((nununoticia, index) => {
            nunumensagemv += `*${index + 1}. ${nununoticia.nunuezbtv}*\n` +
                            `📝 ${nununoticia.nunugdv}\n` +
                            `🛕 ${nununoticia.nunulinkv}\n`
            nunumensagemv += '\n'
        })
        if (nununoticiasv.length > 0 && nununoticiasv[0].nunuimagev) {
            await loli.sendMessage(from, { 
                image: { url: nununoticiasv[0].nunuimagev }, 
                caption: nunumensagemv 
            }, { quoted: info })
        } else {
            await loli.sendMessage(from, { text: nunumensagemv }, { quoted: info })
        }
    } catch (nunuerrov) {
        console.error('Erro ao buscar notícias do Vasco', nunuerrov)
        reply('⚠️ Não foi possível buscar as notícias do Vasco no momento')
    }
    break
case 'noticias_ciberneticas':
case 'newscibernetico':
case 'cisoadvisor': 
    try {
        const { data: nunucucisohtml } = await axios.get('https://www.cisoadvisor.com.br/arquivo-categorias/')
        const nunucucisoparser = cheerio.load(nunucucisohtml)
        let nunucucisonoticias = []
        
        nunucucisoparser('.elementor-post').each((index, nunucucisopost) => {
            const nunucucisotitle = nunucucisoparser(nunucucisopost).find('.elementor-post__title a').text().trim()
            const nunucucisosummary = nunucucisoparser(nunucucisopost).find('.elementor-post__excerpt p').text().trim()
            const nunucucisolink = nunucucisoparser(nunucucisopost).find('.elementor-post__title a').attr('href')
            const nunucucisoimage = nunucucisoparser(nunucucisopost).find('.elementor-post__thumbnail img').attr('src')
            
            if (nunucucisotitle && nunucucisolink) {
                nunucucisonoticias.push({
                    nunucucisotitle,
                    nunucucisosummary,
                    nunucucisolink,
                    nunucucisoimage
                })
            }
        })

        nunucucisonoticias = nunucucisonoticias.slice(0, 5)
        
        let nunucucisomensagem = '🛡️ *Últimas Notícias de Segurança Cibernética:*\n\n'
        nunucucisonoticias.forEach((nunucucisoitem, index) => {
            nunucucisomensagem += `*${index + 1}. ${nunucucisoitem.nunucucisotitle}*\n` +
                                  `📋 ${nunucucisoitem.nunucucisosummary}\n` +
                                  `🔗 ${nunucucisoitem.nunucucisolink}\n\n`
        })

        if (nunucucisonoticias.length > 0 && nunucucisonoticias[0].nunucucisoimage) {
            await loli.sendMessage(from, { 
                image: { url: nunucucisonoticias[0].nunucucisoimage }, 
                caption: nunucucisomensagem 
            }, { quoted: info })
        } else {
            await loli.sendMessage(from, { text: nunucucisomensagem }, { quoted: info })
        }
    } catch (nunucucisoerro) {
        console.error('Erro ao buscar notícias do CISO Advisor:', nunucucisoerro)
        reply('⚠️ Não foi possível buscar as notícias do CISO Advisor no momento.')
    }
    break//nunu dia das criança
case 'news':
    const apiUrl = 'https://world-ecletix.onrender.com/api/ultimasnoticias';

    try {
        // Requisição para a API de últimas notícias
        const response = await axios.get(apiUrl);
        const noticias = response.data;

        // Verificar se a resposta contém notícias
        if (noticias && noticias.length > 0) {
            // Limitar o número de notícias exibidas
            const limit = 5; // Número de notícias para exibir
            let message = '📰 Últimas Notícias:\n\n';

            noticias.slice(0, limit).forEach((noticia, index) => {
                const { titulo, link } = noticia;

                // Adicionar a notícia à mensagem
                message += `${index + 1}. *${titulo}*\nLeia mais: ${link}\n\n`;
            });

            // Enviar a mensagem com as notícias
            await loli.sendMessage(from, { text: message }, { quoted: info });
        } else {
            loli.sendMessage(from, { text: '🚨 Não foi possível encontrar as últimas notícias.' }, { quoted: info });
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição à API de notícias:', error);
        loli.sendMessage(from, { text: '🚨 Erro ao buscar as últimas notícias.' }, { quoted: info });
    }
    break;
case 'noticias': 
try {
if (!q) return reply(`informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
newsSends = theNews.data.articles.map(d => `${d.publishedAt.split('T').join(' - ').split('Z')[0]}\n\n${d.title} - ${d.author} [${d.source.name}]\n\n${d.description}\n\n${d.url}\n\n${d.content}\n\n--------------------------- * ---------------------------\n\n`).join('');
msgSemQuoted(newsSends).catch(() => {
return console.log(e)
})
} catch (e) {
return console.log(e)
}
break
case 'esporte': 
  try {
    const response = await fetch('https://tohka.tech/api/outros/globoesportes?apikey=gxhu6');
    const data = await response.json();
    
    if (data && data.length > 0) {
      let esporteMessage = '🏆 Notícias de Esportes:\n\n';

      data.forEach((news, index) => {
        esporteMessage += `🔹 ${index + 1}. ${news.titulo}\n${news.noticia}\n${news.link}\n\n`;
        if (news.img) {
          esporteMessage += `![Imagem](${news.img})\n\n`;
        }
      });

      await loli.sendMessage(sender, { text: esporteMessage });
    } else {
      reply('Desculpe, não há notícias esportivas disponíveis no momento.');
    }
  } catch (error) {
    console.error('Ocorreu um erro ao recuperar as notícias esportivas:', error);
    reply('Ocorreu um erro ao processar a solicitação. Tente novamente mais tarde.');
  }
  break;

case 'g1': 
  try {
    const response = await fetch('https://tohka.tech/api/outros/g1?apikey=gxhu6');
    const data = await response.json();
    
    if (data && data.length > 0) {
      let g1Message = '📰 Notícias do G1:\n\n';

      data.forEach((news, index) => {
        g1Message += `🔹 ${index + 1}. ${news.titulo}\n${news.link}\n\n`;
      });

      await loli.sendMessage(sender, { text: g1Message });
    } else {
      reply('Desculpe, não há notícias disponíveis no momento.');
    }
  } catch (error) {
    console.error('Ocorreu um erro ao recuperar as notícias do G1:', error);
    reply('Ocorreu um erro ao processar a solicitação. Tente novamente mais tarde.');
  }
  break;

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `
╭━─━───༺[🗯]༻────━─━╮
╿║• ${hora} ${pushname} 
╿║
╿║• Conselhos Bíblico para você: 
╿║
╿║• ${conselhosb} 
╿║
╿║• Bot: ${botName}
╿║• ${!isGroup ? `𝗨𝘀𝘂𝗮??𝗶𝗼: ${pushname}` :  `𝗚𝗿𝘂𝗽𝗼: ${groupName}`}
╰━─━───༺[💫]༻────━─━╯`
await loli.sendMessage(from, {text: jr}, {quoted: info, contextInfo: {"mentionedJid": jr}})
break

            case 'avalie':
                if (!q) return reply(`Ex: ${prefix} avaliação bot muito top..`)
                reply(`Avaliacão enviada com sucesso.`)
                let templateMeesssage = {
                    image: {
                        url: imagemdomenu,
                        quoted: info
                    },
                    caption: `*👻Avaliação👻*\nDo Número: @${sender.split('@')[0]},\nAvaliacão:\n${q}`,
                    footer: 'Noelle_md'
                }
                loli.sendMessage(`${donoNumber}@s.whatsapp.net`, templateMeesssage)
                break

case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !isCreator  && !m.key.fromMe) return reply(msg.adm)

reply(`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
│➱ Anti áudios: ${isAntiAudio? '✅' : '⛔'}
│➱ Anti documentos: ${Antidoc ? '✅' : '⛔'}
│➱ Anti fake: ${isAntifake ? '✅' : '⛔'}
│➱ Anti img: ${isAntiImg? '✅' : '⛔'}
│➱ Anti sticker: ${isAntiSticker ? '✅' : '⛔'}
│➱ Anti ligação: ${isAnticall ? '✅' : '⛔'}
│➱ Anti Notas: ${isAntiNotas ? '✅' : '⛔'}
│➱ Anti catalogo: ${isAnticatalogo ? '✅' : '⛔'}
│➱ Anti video: ${isAntiVid ? '✅' : '⛔'}
│➱ Anti localização: ${Antiloc ? '✅' : '⛔'}
│➱ Anti link grupo: ${isAntiLink ? '✅' : '⛔'}
│➱ AutoReact: ${isAutoReact ? '✅' : '⛔'}
╰╼╾❲ ${botName} ❳╼╾╯`)
break
                  
            case "!massacote":
            case '!mascote':
                var mascoteFotoURL = "https://i.imgur.com/mVwa7q4.png"
                await loli.sendFileFromUrl(chatId, mascoteFotoURL, 'mascote.jpeg', 'Whatsapp Jr.', id)
                break 

case 'amongus': 
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
mentions(`${sus}`, mentioned, true)

break           

   
case 'togif':
if(!isQuotedSticker) return reply('Marque a figurinha animada!')
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('Aguarde, estou convertendo a figurinha para o formato gif.')
a = await webp_mp4(buff)
loli.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: live}).catch(e => {
reply("Erro ao realizar o envio do sticker!") 
})
DLT_FL(buff)
}
} catch {
reply(mess.erro())
}
break

case 'contar':
if (args.length == 0) return reply( 'Tem Nada, Você Não Colocou Nada')
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caractere.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break

case 'gerarcpf':
if(!isPremium) return reply(msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
loli.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: info})
break

case 'esquilo':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'nick':
case 'gerarnick':
case 'fazernick22':
try {
nick = args.join(' ')
if(!q) return reply('Escreva o Nick ou nome que você quer personalizar.')
axios.get(`http://yurimodz-apis.xyz:3006/api/fazernick?nome=Rooh&apikey=YuriModz2025`)
.then(dados => {
var emojis = `┠❯ ❒  `
nicks = dados.data
txt = `${botName}`
for (let i = 0; i < nicks.length; i++) {
txt += `${emojis} ${nicks[i]}\n`
}
txt += `\nCopyright
@Licht.Offc
@AquaBot.Wpp`
reply(`${txt.trim()}`)
}).catch(e => {
reply('Não pode incluir letras modificadas nem emojis, ou pode ser que a api caiu, mas volta logo logo...')  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break
case 'illuminated-metallic':
case 'carved-wood':
case 'night-sky':
case 'butterfly':
case 'coffee-cup':
case 'picture-of-love':
case 'flower-typography':
case 'harry-potter':
case 'under-grass':
case 'pubg':
case 'naruto':
case 'metallic':
case 'shadow-sky':
case 'flaming':
case 'metalgold':
case 'cemiterio':
case 'efeitoneon':
case 'shadow':
case 'txtborboleta':
case 'cup':
case 'harryp':
case 'lobometal':
case 'neon2':
case 'madeira':
case 'florwooden':
case 'coffecup2':
case 'coffecup':
case 'lovemsg3':
case 'lovemsg2':
case 'lovemsg':
case 'narutologo':
case 'romantico':
case 'darkdragon':
case 'papel':
case 'fire':
case 'sweet-candy':  
  const inputTextForApi = args.join(' '); // Nome alterado para evitar conflitos

  // Usar o texto como está, já que a API aceita apenas um texto
  const singleText = inputTextForApi || 'Indefinido'; 

  reply(`AGUARDE...`);
  console.log('Aguardando resposta da API...');
  
  try {
    // Construir a URL da API
    const apiUrl = `https://world-ecletix.onrender.com/api/${command}?texto=${singleText}`;
    console.log('URL da API:', apiUrl);

    const apiResponse = await fetchJson(apiUrl);
    
    // Log da resposta completa da API
    console.log('Resposta da API:', apiResponse);

    // Verificar se a resposta contém a URL da imagem
    if (apiResponse.imageUrl) {
      const generatedImageUrl = apiResponse.imageUrl;

      // Log da URL da imagem recebida
      console.log('URL da imagem recebida:', generatedImageUrl);

      // Enviar a imagem com a URL da resposta
      await loli.sendMessage(from, { image: { url: generatedImageUrl }, caption: `${command} gerado com sucesso!` }, { quoted: info });

      console.log(`${command} gerado com sucesso!`);
      
    } else {
      console.log('Erro: A URL da imagem está ausente na resposta.');
      reply("Erro ao gerar a imagem! Tente novamente mais tarde.");
    }
    
  } catch (e) {
    console.error('Erro ao gerar imagem:', e.message, e.stack);
    reply("Erro ao gerar a imagem! Tente novamente mais tarde.");
  }
  break;
case 'vingadores':
case 'ffbanner':
case 'marvel': 
case 'steel':
case 'america':   
case 'deadpool':   
case 'space':
case 'pornhub':
case 'typography':   
case 'pohub':  
case 'graffiti':  
case 'thor':  
  const userInputText = args.join(' '); // Nome mais específico para a entrada do usuário

  // Separar os textos por "/"
  const primaryText = userInputText.split('/')[0] || 'Indefinido';
  const secondaryText = userInputText.split('/')[1] || 'Indefinido';
  
  // Verificar se o separador '/' foi incluído
  if (!userInputText.includes("/")) {
    return reply(`Cadê a "/"?\nExemplo: ${prefix + command} texto1/texto2`);
  }
  
  reply(`AGUARDE...`);
  console.log('Aguardando resposta da API...');
  
  try {
    // Fazer solicitação à API passando os dois textos
    const apiUrl = `https://world-ecletix.onrender.com/api/${command}?texto=${primaryText}&texto2=${secondaryText}`;
    console.log('URL da API:', apiUrl);

    const apiResponse = await fetchJson(apiUrl);
    
    // Log da resposta completa da API
    console.log('Resposta da API:', apiResponse);

    // Verificar se a resposta contém sucesso
    if (apiResponse.status && apiResponse.resultado && apiResponse.resultado.success) {
      const generatedImageUrl = apiResponse.resultado.imageUrl;

      // Log da URL da imagem recebida
      console.log('URL da imagem recebida:', generatedImageUrl);

      // Enviar a imagem com a URL da resposta
      await loli.sendMessage(from, { image: { url: generatedImageUrl }, caption: `${command} gerado com sucesso!` }, { quoted: info });

      console.log(`${command} gerado com sucesso!`);
      
    } else {
      console.log('Erro: A API não retornou sucesso ou a URL da imagem está ausente.');
      reply("Erro ao gerar a imagem! Tente novamente mais tarde.");
    }
    
  } catch (e) {
    console.error('Erro ao gerar imagem:', e.message, e.stack);
    reply("Erro ao gerar a imagem! Tente novamente mais tarde.");
  }
  break;
  case 'gameplay':  
  console.log('Comando recebido:', args.join(' '));

  // Separar os dois textos por "/"
  const [gameplayText1 = 'Indefinido', gameplayText2 = 'Indefinido'] = args.join(' ').split('/');

  console.log('Gameplay Text 1:', gameplayText1);
  console.log('Gameplay Text 2:', gameplayText2);

  if (!args.join(' ').includes("/") || args.join(' ').split('/').length < 2) {
    console.log('Erro: Formato incorreto. Textos não estão separados corretamente.');
    return reply(`Cadê os dois textos separados por "/"?\nExemplo: ${prefix + command} texto1/texto2`);
  }

  reply(`AGUARDE...`);
  console.log('Aguardando resposta da API...');

  try {
    // Construir a URL corretamente conforme especificado
    const apiUrl = `https://world-ecletix.onrender.com/api/gameplay?texto=${gameplayText1}&texto=${gameplayText2}`;
    console.log('URL da API:', apiUrl);

    // Fazer solicitação à API passando os 2 textos
    const response = await fetchJson(apiUrl);
    console.log('Resposta da API:', response);

    // Verificar se a URL da imagem foi retornada corretamente
    if (response.imageUrl) {
      let imageUrl = response.imageUrl;

      console.log('URL da imagem recebida:', imageUrl);

      // Corrigir a URL se tiver barra dupla "//"
      if (imageUrl.includes('//')) {
        imageUrl = imageUrl.replace('https://', '').replace('//', '/');
        imageUrl = 'https://' + imageUrl;
      }

      console.log('URL da imagem corrigida:', imageUrl);

      // Enviar a imagem com a URL da resposta
      await loli.sendMessage(from, { image: { url: imageUrl }, caption: `${command} gerado com sucesso!` }, { quoted: info });
      console.log('Imagem enviada com sucesso!');
      
    } else {
      console.log('Erro: A URL da imagem está ausente na resposta.');
      reply("Erro ao gerar a imagem! Tente novamente mais tarde.");
    }

  } catch (e) {
    console.error('Erro ao gerar imagem:', e.message, e.stack);
    reply("Erro ao gerar a imagem! Tente novamente mais tarde.");
  }
  break;
case 'googlesg':  
  console.log('Comando recebido:', args.join(' '));

  const textooo = args.join(' ');

  // Separar os três textos por "/"
  const texto1 = textooo.split('/')[0] || 'Indefinido';
  const texto2 = textooo.split('/')[1] || 'Indefinido';
  const texto3 = textooo.split('/')[2] || 'Indefinido';

  console.log('Texto 1:', texto1);
  console.log('Texto 2:', texto2);
  console.log('Texto 3:', texto3);

  if (!textooo.includes("/") || textooo.split('/').length < 3) {
    console.log('Erro: Formato incorreto. Textos não estão separados corretamente.');
    return reply(`Cadê os três textos separados por "/"?\nExemplo: ${prefix + command} texto1/texto2/texto3`);
  }

  reply(`AGUARDE...`);
  console.log('Aguardando resposta da API...');

  try {
    // Construir a URL corretamente conforme especificado
    const apiUrl = `https://world-ecletix.onrender.com/api/googlesg?texto=${texto1}&texto2=${texto2}&texto3=${texto3}`;
    console.log('URL da API:', apiUrl);

    // Fazer solicitação à API passando os 3 textos
    const response = await fetchJson(apiUrl);
    console.log('Resposta da API:', response);

    // Verificar se a URL da imagem foi retornada corretamente
    if (response.imageUrl) {
      let imageUrl = response.imageUrl;

      console.log('URL da imagem recebida:', imageUrl);

      // Corrigir a URL se tiver barra dupla "//"
      if (imageUrl.includes('//')) {
        imageUrl = imageUrl.replace('https://', '').replace('//', '/');
        imageUrl = 'https://' + imageUrl;
      }

      console.log('URL da imagem corrigida:', imageUrl);

      // Enviar a imagem com a URL da resposta
      await loli.sendMessage(from, { image: { url: imageUrl }, caption: `${command} gerado com sucesso!` }, { quoted: info });
      console.log('Imagem enviada com sucesso!');
      
    } else {
      console.log('Erro: A URL da imagem está ausente na resposta.');
      reply("Erro ao gerar a imagem! Tente novamente mais tarde.");
    }

  } catch (e) {
    console.error('Erro ao gerar imagem:', e.message, e.stack);
    reply("Erro ao gerar a imagem! Tente novamente mais tarde.");
  }
  break;
case 'steel':
case 'dragon-ball':
case 'praia':
case 'graffiti':
case 'star-wars':
case 'glitch':
case 'royal':
case 'cloud':
case 'birthday':
case 'natal':
case 'matirix':
case 'galaxy':
case 'snow':  
case 'devil':
case 'anonymous':
case 'boom':
case 'mascotegame':
case 'mascoteavatar':
case 'wingeffect':
case 'angelglx':
case 'gizquadro':
case 'blackpink': 
case 'girlmascote':
case 'logogame':
case 'logogame':
case 'smoke':
case 'papel':
case 'angelwing':
case 'hackneon':
case 'fpsmascote':
case 'equipemascote':
case 'txtquadrinhos':
case '3dsilver':
case 'goldtext':
case 'starballons':
case 'frozen':
case 'halloween':
case 'ffavatar':
  textin = args.join(" ")
  if (!q) return reply(`Qual o nome?`)
  reply('enviando...')
  
  try {
    // Fazer solicitação à API usando o comando dinâmico na URL
    const response = await fetchJson(`https://world-ecletix.onrender.com/api/${command}?texto=${textin}`);
    
    // Verificar se o resultado foi bem-sucedido
    if (response.status && response.resultado && response.resultado.success) {
      const imageUrl = response.resultado.imageUrl;
      
      // Baixar a imagem e enviar a resposta
      const blabla = await getBuffer(imageUrl);
      await loli.sendMessage(from, { image: blabla }, { quoted: info });
      
    } else {
      reply("Erro ao criar sua logo! Tente novamente mais tarde.");
    }
    
  } catch (e) {
    console.error('Erro ao gerar logo:', e)
    reply("Erro ao criar sua logo! Tente novamente mais tarde.")
  }
  break
  //by luanzin
case "artilheirosdobr":
{
    try {
        // Faz a requisição para a API de artilheiros
        const res = await fetch('https://world-ecletix.onrender.com/api/artilheiro');
        const data = await res.text();  // Obtém a resposta como texto

        if (!data) {
            return reply("Nenhum dado de artilheiros encontrado.");
        }

        // O texto está formatado, então você pode exibir diretamente ou processar
        const message = `**Artilheiros do Brasileirão:**\n\n${data}`;
        
        reply(message);
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;
case "tabeladobr":
{
    try {
        // Faz a requisição para a API da tabela
        const res = await fetch('https://world-ecletix.onrender.com/api/tabela');
        const data = await res.text();  // Obtém a resposta como texto

        if (!data) {
            return reply("Nenhum dado da tabela foi encontrado.");
        }

        // O texto está formatado, então podemos exibir diretamente
        const message = `**Tabela do Brasileirão:**\n\n${data}`;
        
        reply(message);
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação da tabela.");
    }
}
break;
// by luanzin
case 'pergunta':
try {
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/PERGUNTE_E_EU_RESPONDO?q=${q.trim()}&apikey=tiomaker8930`)
reply(`( ${ABC.msg} )`)
} catch { 
reply("Erro..")
}
break;

case 'gimage':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} naruto`)
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/google-img?nome=${q}&apikey=tiomaker8930`);
loli.sendMessage(from, {image: {url: ABC[Math.floor(Math.random() * ABC.length)].url}}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'esportenoticias': case 'esportenoticia': case 'espnoticia': case 'espnoticias':
case 'noticiasesporte': case 'noticiaesporte': case 'noticiaesp': case 'noticiasesp':
case 'esporte_noticias': case 'esporte_noticia': case 'esporte-noticias': case 'esporte-noticia':
reply("Aguarde, realizando ação..")
try {
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/esporte_noticias?apikey=tiomaker8930`)
AB =""
for ( i = 1; i < ABC.length; i++) {
AB += `${ABC[i].titulo}\n\n`
}
loli.sendMessage(from, {image: {url: ABC[0].img}, caption: AB}, {quoted: info})
} catch {
return reply("Erro, tente novamente ou aguarde até voltar ao normal.")
}
break;

case "playstore":
if(q.length < 2) return reply("Cade o título do apk que deseja pesquisar?")
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/playstore?nome=${q}&apikey=tiomaker8930`)
ABC = "Play Store pesquisa:\n\n"
for(let a of data.resultados) {
ABC += `\n\n${a.title}\n\n----------------------------------------------\nID:
${a.appId}\n\n----------------------------------------------\n\nURL:
${a.url}\n\n----------------------------------------------`
}
reply(ABC)
break;

case 'celular':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} galaxy a9 2018`);
reply("Realizando ação..");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/info_celular?celular=${q}&apikey=tiomaker8930`);
reply(`📱 Celular: ${ABC.celular || "Não encontrado"}\n\nInformações:\n${ABC.resumo || ABC.infoc || "Não encontrado, seja mais específico, a marca e a versão"}`);
} catch (e) {
return reply("Erro...");
}
break;

case 'amazon': case 'amazonsearch':
if(q.trim().length < 4) return reply(`Exemplo: ${prefix+command} fone redmi airdots 2`)
try {
reply("Aguarde..")
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/Amazon_Pesquisa?pesquisa=${q.trim()}&apikey=tiomaker8930`)
RST = "Pesquisa Amazon:\n\n"
for ( i  = 0; i < (ABC.length > 40 ? 40: ABC.length); i++) {
RST +=  `( ${i+1} ) - Titulo: ${ABC[i].titulo}\n- Preço: ${ABC[i].preco}\n- Url: ${ABC[i].url}\n${"_".repeat(27)}\n\n`
}
reply(RST);
} catch {
return reply(`Erro, não foi possivel encontrar.`)
}
break;

case 'pesquisa_yt': case 'ytsearch':
try {
if(!q.trim()) return reply(`Digite o nome de algum vídeo ou música que deseja encontrar..`);
AB = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=tiomaker8930`)
ABC = `${"-\t".repeat(13)}\n\n`
for (var i of AB) {
ABC += `Titulo: ${i.titulo}\nUrl: ${i.url}\nTempo: ${i.tempo}\nPostado: ${i.postado}\n\nDescrição: ${i.desc}\n\n`;
ABC += `${"-\t".repeat(13)}\n\n`
}
reply(ABC);
} catch (e) {
return reply(`Erro....`)
}
break;
// by luanzin
case 'print': case 'printdesite':
if(!q.trim()) return reply(`Faltando a url do site que quer tirar print, Exemplo: ${prefix+command} https://google.com\n\nNão esqueça do https se o site tiver, ou http se não for um site com ssl`)
try {
loli.sendMessage(from, {image: {url: `https://api.bronxyshost.com.br/api-bronxys/print_de_site?url=${q.trim()}&apikey=tiomaker8930`}}, {quoted: info}) 
} catch {
return reply("Erro..");
}
break;
//by luanzin 
case "transcrever": {
if((isMedia && !info.message.imageMessage && info.message.videoMessage || isQuotedVideo || isQuotedAudio)) {
reply("Aguarde.. transcrevendo seu áudio..")
muk = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.audioMessage : info.message.audioMessage

let base64String = await getFileBuffer(muk, isQuotedAudio ? 'audio': 'video');
let buffer = Buffer.from(base64String, 'base64');

let formData = new FormData();
formData.append('file', buffer, {filename: isQuotedAudio ? 'audiofile': 'videofile', contentType: muk.mimetype });

fetch(`https://api.bronxyshost.com.br/transcrever?apikey=tiomaker8930`, {
method: 'POST',
body: formData
}).then(response => response.json())
.then(data => {
reply(data.texto);
}).catch((Err) => {
console.log(Err);
reply("Sinto muito, alguns formatos de áudio/vídeo, eu não consigo transcrever, em caso de dúvidas, tente novamente...");
});
} else {
return reply("Marque um audio ou um vídeo.")
}
}
break;
// by luanzin dev
case 'attp': case 'attp2': case 'attp3': case'attp4': case 'attp5': case'attp6': case'attp7': case 'attp8': case 'attp9': case 'attp10':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} bronxys`);
reply("AGUARDE, REALIZANDO AÇÃO.")
var Fontes = command === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono"
loli.sendMessage(from, {sticker: {url: `https://api.bronxyshost.com.br/api-bronxys/attp_edit?texto=${encodeURIComponent(q)}&fonte=${Fontes}&apikey=tiomaker8930`}}, {quoted: info}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;
// Função genérica para enviar as figurinhas
async function enviarFigurinhas(url) {
    await loli.sendMessage(sender, { sticker: { url: url } });
}
// by luanzin dev 
case 'figuroblox': case 'figu_roblox':
    if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    if (!Number(args[0]) || Number(q.trim()) > 50) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 50..");
    for (let i = 0; i < q; i++) {
        await sleep(680);
        await enviarFigurinhas(`https://world-ecletix.onrender.com/api/figu_roblox`);
    }
    break;

case 'figu_coreana': case 'figucoreana':
    if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    if (!Number(args[0]) || Number(q.trim()) > 50) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 50..");
    for (let i = 0; i < q; i++) {
        await sleep(680);
        await enviarFigurinhas(`https://world-ecletix.onrender.com/api/figu_coreana`);
    }
    break;

case 'figudesenho': case 'figu_desenho':
    if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    if (!Number(args[0]) || Number(q.trim()) > 50) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 50..");
    for (let i = 0; i < q; i++) {
        await sleep(680);
        await enviarFigurinhas(`https://world-ecletix.onrender.com/api/figu_desenho`);
    }
    break;

case 'figurinhas1': case 'figurinhas1':
    if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    if (!Number(args[0]) || Number(q.trim()) > 50) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 50..");
    for (let i = 0; i < q; i++) {
        await sleep(680);
        await enviarFigurinhas(`https://world-ecletix.onrender.com/api/figurinhas`);
    }
    break;

case 'figurinhas2': case 'Figurinhas2':
    if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    if (!Number(args[0]) || Number(q.trim()) > 50) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 50..");
    for (let i = 0; i < q; i++) {
        await sleep(680);
        await enviarFigurinhas(`https://world-ecletix.onrender.com/api/figurinhas2`);
    }
    break;

case 'figuemoji': case 'figu_emoji':
    if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    if (!Number(args[0]) || Number(q.trim()) > 50) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 50..");
    for (let i = 0; i < q; i++) {
        await sleep(680);
        await enviarFigurinhas(`https://world-ecletix.onrender.com/api/figu_emoji`);
    }
    break;

case 'figualeatorio': case 'figu_alearorio':
    if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    if (!Number(args[0]) || Number(q.trim()) > 50) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 50..");
    for (let i = 0; i < q; i++) {
        await sleep(680);
        await enviarFigurinhas(`https://world-ecletix.onrender.com/api/figu_aleatorio`);
    }
    break;

case 'figu_anime': case 'figu_anime':
    if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    if (!Number(args[0]) || Number(q.trim()) > 50) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 50..");
    for (let i = 0; i < q; i++) {
        await sleep(680);
        await enviarFigurinhas(`https://world-ecletix.onrender.com/api/figu_anime`);
    }
    break;

case 'figuraiva': case 'figu_raiva':
    if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    if (!Number(args[0]) || Number(q.trim()) > 50) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 50..");
    for (let i = 0; i < q; i++) {
        await sleep(680);
        await enviarFigurinhas(`https://world-ecletix.onrender.com/api/figu_raiva`);
    }
    break;

case 'figuengracada': case 'figu_engracada':
    if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    if (!Number(args[0]) || Number(q.trim()) > 50) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 50..");
    for (let i = 0; i < q; i++) {
        await sleep(680);
        await enviarFigurinhas(`https://world-ecletix.onrender.com/api/figu_engracada`);
    }
    break;
case 'PLAY':
case 'Play':
case 'play': {
try {
if(!q.trim()) return reply(`- Exemplo: ${prefix}play nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`)
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=tiomaker8930`)
if(data[0]?.tempo?.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
var N_E = " Não encontrado."
var bla = `
๖ۣ• Titulo: ${data[0]?.titulo||N_E}
๖ۣ• Tempo: ${data[0]?.tempo||N_E}
๖ۣ• Postado: ${data[0]?.postado||N_E}
๖ۣ• Descrição: ${data[0]?.desc||N_E}

■■■■■ 100% 

E᥉ᥴ᥆ᥣhᥲ ᥙ꧑ᥲ ᥆ρᥴᥲ᥆...

Se desejar baixar o video, use ${prefix}play_video ${q.trim()}
`
loli.sendMessage(from, {image: {url: data[0]?.thumb || logoslink?.logo}, caption: bla}, {quoted: info})
loli.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=tiomaker8930`}, mimetype: "audio/mpeg", fileName: data[0]?.titulo || "play.mp3"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
console.log(e)
return reply("Seja mais específico, não deu pra encontrar com apenas isto... / Erro");
}
}
break;
case 'clipe':
case 'play2':
case 'playvideo': {
try {
if(!q.trim()) return reply(`- Exemplo: ${prefix}play nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`)
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=tiomaker8930`)
if(data[0]?.tempo?.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
var N_E = " Não encontrado."
var bla = `
๖ۣ• Titulo: ${data[0]?.titulo||N_E}
๖ۣ• Tempo: ${data[0]?.tempo||N_E}
๖ۣ• Postado: ${data[0]?.postado||N_E}
๖ۣ• Descrição: ${data[0]?.desc||N_E}

■■■■■ 100% 

E᥉ᥴ᥆ᥣhᥲ ᥙ꧑ᥲ ᥆ρᥴᥲ᥆...

Se desejar baixar o áudio, use ${prefix}play ${q.trim()}
`
loli.sendMessage(from, {image: {url: data[0]?.thumb || logoslink?.logo}, caption: bla}, {quoted: info})
loli.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=tiomaker8930`}, mimetype: "video/mp4", fileName: data[0]?.titulo || "play.mp4"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
console.log(e)
return reply("Seja mais específico, não deu pra encontrar com apenas isto... / Erro");
}
}
break;

case "letra": case "liryc": case "letradamusica": case "letramusic": case "letramusica": {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} Ela me traiu`)
try {
reply("Aguarde...")
const abc = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/letra_musica?letra=${q.trim()}&apikey=tiomaker8930`)
reply(` - Titulo: ${abc.titulo}\n\n - Compositor: ${abc.compositor}\n\n - Letra: ${abc.letra}`)
} catch (e) {
reply("Erro...")
}
}
break;
case 'face_video':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply("Realizando ação..")
loli.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=tiomaker8930`}, mimetype: "video/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'face_audio':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply("Realizando ação..")
loli.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=tiomaker8930`}, mimetype: "audio/mpeg"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;
case "threads": case "thr":
if(!q.includes("threads.net")) return reply(`Cade o link do threads? Exemplo: ${prefix+command} https://www.threads.net/@tali_mito22/post/C_3_FbKyHtm/?xmt=AQGzOjjOpgW7PRhCZRcda0GvAqfvYqPWDwHgzn_v6_FVLQ`)
reply("Aguarde, estou enviando..")
try {
loli.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/threads?url=${q}&apikey=tiomaker8930`}})
} catch (e) {
return reply("Erro, tente falar com o suporte...")
}
break;
case 'kwai': {
if(!q.trim().includes("kwai")) return reply(`Exemplo: ${prefix+command} LINK DO KWAI`);
reply(Res_Aguarde);
try {
loli.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/kwai?url=${q.trim()}&apikey=tiomaker8930`}, mimetype: "video/mp4"}, {quoted: info})
} catch (e) {
console.log(e);
return reply("Erro...");
}
}
break;
case 'twitter_video':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply("Realizando ação..")
loli.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=tiomaker8930`}, mimetype: "video/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'twitter_audio':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply("Realizando ação..")
loli.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=tiomaker8930`}, mimetype: "audio/mpeg"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'instagram_link':
try {
if(q.length < 5) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/instagram?url=${q.trim()}&apikey=tiomaker8930`)
reply("Realizando ação..")
let DM_T = ABC.msg[0].type
var A_T = DM_T === "mp4" ? "video/mp4" : DM_T === "webp" ? "image/webp" : DM_T === "jpg" ? "image/jpeg" : DM_T === "mp3" ? "audio/mpeg" : "video/mp4"
loli.sendMessage(from, {[A_T.split("/")[0]]: {url: ABC.msg[0].url}, mimetype: A_T}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'insta_audio':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/instagram?url=${q.trim()}&apikey=tiomaker8930`)
reply("AGUARDE, REALIZANDO AÇÃO.")
let DM_T = ABC.msg[0].type
var A_T = DM_T === "webp" ? "image/webp" : DM_T === "jpg" ? "image/jpeg" : DM_T === "mp3" ? "audio/mpeg" : "audio/mpeg"
loli.sendMessage(from, {[A_T.split("/")[0]]: {url: ABC.msg[0].url}, mimetype: A_T}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;
case 'pinterets4':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} naruto`)
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pinterest?nome=${q}&apikey=tiomaker8930`);
loli.sendMessage(from, {image: {url: ABC[Math.floor(Math.random() * ABC.length)]}}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case "Play_video":
case "play_vid":
case "play_video":
{
  if (!text) {
    return loli.sendMessage(
      from,
      { text: `Por favor, forneça o nome do vídeo. Exemplo: ${prefix}play_video nome_do_video` },
      { quoted: info }
    );
  }

  try {
    // Fazer a solicitação à API para obter o link e informações do vídeo
    const response = await axios.get(`http://tohka.tech/api/dl/playvideo?nome=${encodeURIComponent(text)}&apikey=gxhu6`);
    const result = response.data.resultado;

    // Verificar se a resposta contém as informações necessárias
    if (!result || !result.link || !result.título || !result.thumb) {
      console.log("Resultado inválido da API:", result);
      return loli.sendMessage(from, { text: "Não foram encontrados resultados para o vídeo fornecido." }, { quoted: info });
    }

    // Extrair informações da resposta
    const { link, título, thumb, canal, publicado, visualizações, desc } = result;

    // Criar uma mensagem com as informações do vídeo
    const message = `
🎥 *Título:* ${título}
📺 *Canal:* ${canal || 'Desconhecido'}
📅 *Publicado:* ${publicado || 'Desconhecido'}
👁️ *Visualizações:* ${visualizações || 'Desconhecido'}
📝 *Descrição:* ${desc || 'Sem descrição disponível'}
    `;

    // Enviar a capa e informações do vídeo
    await loli.sendMessage(from, { 
      image: { url: thumb }, 
      caption: message 
    }, { quoted: info });

    // Baixar o vídeo do link
    const { data: video } = await axios.get(link, { responseType: 'arraybuffer' });

    // Enviar o vídeo baixado ao usuário
    await loli.sendMessage(
      from,
      {
        video: Buffer.from(video),  // Certifique-se de que o vídeo está sendo enviado como Buffer
        mimetype: 'video/mp4',
        fileName: `${título}.mp4`
      },
      { quoted: info }
    );

  } catch (error) {
    console.error('Erro ao processar a solicitação:', error.response ? error.response.data : error.message);
    loli.sendMessage(from, { text: "Ocorreu um erro ao processar a solicitação." }, { quoted: info });
  }
}
break;
case 'pinterestvideo': case 'pinterest5': case 'Pinterestvideo':{
    try {
        if (!q.trim()) return reply(`- Exemplo: ${prefix}pinterestvideo nome do vídeo\no vídeo será baixado se estiver disponível no Pinterest.`);

        const response = await fetch(`https://tohka.tech/api/pesquisa/pinterestvideo?nome=${encodeURIComponent(q)}&apikey=gxhu6`);
        if (!response.ok) return reply("Erro ao buscar os dados do Pinterest.");

        const data = await response.json();

        // Filtra apenas vídeos
        let allVideos = [];
        data.forEach(itemArray => {
            itemArray.forEach(item => {
                if (item.tipo === 'vídeo' && item.url.endsWith('.mp4')) {
                    allVideos.push(item);
                }
            });
        });

        if (allVideos.length === 0) return reply("Não encontrei nenhum vídeo.");

        // Ordena os vídeos pela qualidade, colocando os de maior resolução primeiro
        allVideos.sort((a, b) => {
            const qualidadeA = parseInt(a.qualidade.match(/\d+/)[0]);
            const qualidadeB = parseInt(b.qualidade.match(/\d+/)[0]);
            return qualidadeB - qualidadeA;
        });

        // Seleciona o vídeo de maior qualidade
        const bestVideo = allVideos[0];
        console.log('Melhor vídeo selecionado:', bestVideo);

        // Envia o vídeo
        loli.sendMessage(from, { 
            video: { url: bestVideo.url }, 
            mimetype: "video/mp4", 
            fileName: `video_pinterest_${q}.mp4` 
        }, { quoted: info }).catch(e => {
            console.log('Erro ao enviar o vídeo:', e);
            return reply("Erro ao tentar baixar o vídeo.");
        });

    } catch (e) {
        console.log('Erro no bloco try:', e);
        return reply("Não foi possível baixar ou encontrar esse vídeo no Pinterest 🐞");
    }
}
break;
case "Spotify":
case "spotify":
case "spo":
{
  if (!text) {
    await loli.sendMessage(
      from,
      { audio: { url: './assets/voz/aguarde.mp3' }, mimetype: 'audio/mp4' },
      { quoted: info }
    );
    return loli.sendMessage(
      from,
      { text: `Por favor, forneça o nome da música. Exemplo: ${prefix}play_audio nome_da_musica` },
      { quoted: info }
    );
  }

  try {
    // Fazer a solicitação à nova API de música
    const response = await axios.get(`https://world-ecletix.onrender.com/api/spotify?nome=${encodeURIComponent(text)}`);
    const result = response.data;

    // Verificar se a resposta contém as informações necessárias
    if (!result.status || !result.trackInfo || !result.downloadLink) {
      await loli.sendMessage(from, { audio: { url: './assets/voz/algodeuerrado.mp3' }, mimetype: 'audio/mp4' }, { quoted: info });
      return loli.sendMessage(from, { text: "Não foram encontrados resultados para a música fornecida." }, { quoted: info });
    }

    // Extrair informações da resposta
    const { title } = result.trackInfo;
    const downloadLink = result.downloadLink;

    // Criar uma mensagem com as informações da música
    const message = `
🎵 *Título:* ${title}
🔗 *Link no Spotify:* ${result.trackInfo.url}
    `;

    // Enviar informações da música
    await loli.sendMessage(from, { 
      text: message 
    }, { quoted: info });

    // Baixar a música do link como um buffer
    const audioResponse = await axios.get(downloadLink, { responseType: 'arraybuffer' });

    // Verificar se o buffer de áudio não está vazio
    if (!audioResponse.data || audioResponse.data.length === 0) {
      throw new Error('Áudio não foi baixado corretamente.');
    }

    // Log do tamanho do buffer de áudio
    console.log(`Tamanho do buffer de áudio: ${audioResponse.data.length} bytes`);

    // Enviar o áudio baixado ao usuário
    await loli.sendMessage(
      from,
      {
        audio: Buffer.from(audioResponse.data),  // Usar o buffer diretamente
        mimetype: 'audio/mpeg',  // Use o tipo MIME correto para MP3
        fileName: `${title}.mp3`,  // Nome do arquivo
        ptt: true  // Enviar como mensagem de voz se desejado
      },
      { quoted: info }
    );

  } catch (error) {
    console.error('Erro ao processar a solicitação:', error);
    await loli.sendMessage(from, { audio: { url: './assets/voz/algodeuerrado.mp3' }, mimetype: 'audio/mp4' }, { quoted: info });
    loli.sendMessage(from, { text: "Ocorreu um erro ao processar a solicitação." }, { quoted: info });
  }
}
break;
case 'musica':  case 'música': case 'music': {
    try {
        if (!q.trim()) return reply(`- Exemplo: ${prefix}play nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`);
        
        // Nova API para pesquisa
        data = await fetchJson(`https://world-ecletix.onrender.com/api/pesquisayt?query=${q}`);
        
        // Verifica se há resultados
        if (!data || !data.formattedVideos || data.formattedVideos.length === 0) return reply("Desculpe, não consegui encontrar a música.");

        // Pegando a primeira informação do array formattedVideos
        const firstResult = data.formattedVideos[0];

        var N_E = " Não encontrado.";
        var bla = `
        ๖ۣ• Titulo: ${firstResult.title || N_E}
        ๖ۣ• Tempo: ${firstResult.duration || N_E}
        ๖ۣ• Canal: ${firstResult.channel || N_E}
        ๖ۣ• Visualizações: ${firstResult.views || N_E}

        ■■■■■ 100% 

        E᥉ᥴ᥆ᥣhᥲ ᥙ꧑ᥲ ᥆ρᥴᥲ᥆...

        Se desejar baixar o vídeo, use ${prefix}play_video ${firstResult.link.trim()}
        `;
        
        loli.sendMessage(from, { image: { url: firstResult.thumbnail || logoslink?.logo }, caption: bla }, { quoted: info });

        // Nova API para download de música
        loli.sendMessage(from, { audio: { url: `https://world-ecletix.onrender.com/api/musica?name=${encodeURIComponent(firstResult.title)}` }, mimetype: "audio/mpeg", fileName: firstResult.title || "play.mp3" }, { quoted: info }).catch(e => {
            return reply("Erro ao tentar baixar a música.");
        });
    } catch (e) {
        console.log(e);
        return reply("não foi possível baixar ou encontrar esse audio🐞");
    }
}
break;

case 'clipe': case 'videoclipe': {
    try {
        if (!q.trim()) return reply(`- Exemplo: ${prefix}playvideo nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`);
        
        // Nova API para pesquisa
        data = await fetchJson(`https://world-ecletix.onrender.com/api/pesquisayt?query=${q}`);
        
        // Verifica se há resultados
        if (!data || !data.formattedVideos || data.formattedVideos.length === 0) return reply("Desculpe, não consegui encontrar a música.");

        // Pegando a primeira informação do array formattedVideos
        const firstResult = data.formattedVideos[0];

        var N_E = " Não encontrado.";
        var bla = `
        ๖ۣ• Titulo: ${firstResult.title || N_E}
        ๖ۣ• Tempo: ${firstResult.duration || N_E}
        ๖ۣ• Canal: ${firstResult.channel || N_E}
        ๖ۣ• Visualizações: ${firstResult.views || N_E}

        ■■■■■ 100% 

        E᥉ᥴ᥆ᥣhᥲ ᥙ꧑ᥲ ᥆ρᥴᥲ᥆...

        Se desejar baixar o áudio, use ${prefix}play ${firstResult.link.trim()}
        `;
        
        loli.sendMessage(from, { image: { url: firstResult.thumbnail || logoslink?.logo }, caption: bla }, { quoted: info });

        // Nova API para download de vídeo
        loli.sendMessage(from, { video: { url: `https://world-ecletix.onrender.com/api/musica?name=${encodeURIComponent(firstResult.title)}` }, mimetype: "video/mp4", fileName: firstResult.title || "play.mp4" }, { quoted: info }).catch(e => {
            return reply("Erro ao tentar baixar o vídeo.");
        });
    } catch (e) {
        console.log(e);
        return reply("não foi possível baixar ou encontrar esse video🐞");
    }
}
break;
case 'playlink': case 'ytbmp3': {
    try {
        if (!q.trim()) return reply(`- Exemplo: ${prefix}playlink nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`);
        
        // Nova API para pesquisa
        data = await fetchJson(`https://world-ecletix.onrender.com/api/pesquisayt?query=${q}`);
        
        // Verifica se há resultados
        if (!data || !data.formattedVideos || data.formattedVideos.length === 0) return reply("Desculpe, não consegui encontrar a música.");

        // Pegando a primeira informação do array formattedVideos
        const firstResult = data.formattedVideos[0];

        var N_E = " Não encontrado.";
        var bla = `
        ๖ۣ• Titulo: ${firstResult.title || N_E}
        ๖ۣ• Tempo: ${firstResult.duration || N_E}
        ๖ۣ• Canal: ${firstResult.channel || N_E}
        ๖ۣ• Visualizações: ${firstResult.views || N_E}

        ■■■■■ 100% 

        E᥉ᥴ᥆ᥣhᥲ ᥙ꧑ᥲ ᥆ρᥴᥲ᥆...

        Se desejar baixar o vídeo, use ${prefix}videolink ${firstResult.link.trim()}
        `;
        
        loli.sendMessage(from, { image: { url: firstResult.thumbnail || logoslink?.logo }, caption: bla }, { quoted: info });

        // Nova API para download de música
        loli.sendMessage(from, { audio: { url: `https://world-ecletix.onrender.com/api/linkmp3?url=${encodeURIComponent(firstResult.link)}` }, mimetype: "audio/mpeg", fileName: firstResult.title || "play.mp3" }, { quoted: info }).catch(e => {
            return reply("Erro ao tentar baixar a música.");
        });
    } catch (e) {
        console.log(e);
        return reply("Seja mais específico, não deu pra encontrar com apenas isto... / Erro");
    }
}
break;
case 'videolink': case 'ytbmp4': {
    try {
        if (!q.trim()) return reply(`- Exemplo: ${prefix}videolink nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`);
        
        // Nova API para pesquisa
        data = await fetchJson(`https://world-ecletix.onrender.com/api/pesquisayt?query=${q}`);
        
        // Verifica se há resultados
        if (!data || !data.formattedVideos || data.formattedVideos.length === 0) return reply("Desculpe, não consegui encontrar a música.");

        // Pegando a primeira informação do array formattedVideos
        const firstResult = data.formattedVideos[0];

        var N_E = " Não encontrado.";
        var bla = `
        ๖ۣ• Titulo: ${firstResult.title || N_E}
        ๖ۣ• Tempo: ${firstResult.duration || N_E}
        ๖ۣ• Postado: ${firstResult.creator || N_E}
        ๖ۣ• Descrição: ${firstResult.channel || N_E}
        ๖ۣ• Visualizações: ${firstResult.views || N_E}

        ■■■■■ 100% 

        E᥉ᥴ᥆ᥣhᥲ ᥙ꧑ᥲ ᥆ρᥴᥲ᥆...

        Se desejar baixar o a música, use ${prefix}playlink ${firstResult.link.trim()}
        `;
        
        loli.sendMessage(from, {image: {url: firstResult.thumbnail || logoslink?.logo}, caption: bla}, {quoted: info});
        
        // Baixando o vídeo
        loli.sendMessage(from, {video: {url: `https://world-ecletix.onrender.com/api/linkmp4?url=${encodeURIComponent(firstResult.link)}`}, mimetype: "video/mp4", fileName: firstResult.title || "video.mp4"}, {quoted: info}).catch(e => {
            return reply("Erro ao baixar o vídeo..");
        });
    } catch (e) {
        console.log(e);
        return reply("Seja mais específico, não deu pra encontrar com apenas isto... / Erro");
    }
}
break;

case "play9":
{
  if (!text) {
    return loli.sendMessage(
      from,
      { text: `Por favor, forneça o link da música. Exemplo: ${prefix}play9 link` },
      { quoted: info }
    );
  }

  try {
    // Solicitar o áudio diretamente da API
    const response = await axios.get(`http://br2.bronxyshost.com:4109/api/download/youtube-audio?url=https://youtube.com/watch?v=${encodeURIComponent(text)}&apikey=aGQ8xn0L&username=comefemea`, { responseType: 'arraybuffer' });
    const audioBuffer = response.data;

    // Verificar se o buffer de áudio está correto
    if (!audioBuffer || audioBuffer.length === 0) {
      return loli.sendMessage(from, { text: "Não foi possível obter o áudio solicitado." }, { quoted: info });
    }

    // Enviar o áudio baixado
    await loli.sendMessage(
      from,
      {
        audio: Buffer.from(audioBuffer),  // Certifique-se de que o áudio está sendo enviado como Buffer
        mimetype: 'audio/mp4',  // Use o tipo MIME correto para o áudio
        fileName: `${text}.mp3`,
        ptt: true
      },
      { quoted: info }
    );

  } catch (error) {
    console.error('Erro ao baixar e enviar o áudio:', error);
    loli.sendMessage(from, { text: "Ocorreu um erro ao processar a solicitação." }, { quoted: info });
  }
}
break;
case "play10":
{
  if (!text) {
    return loli.sendMessage(
      from,
      { text: `Por favor, forneça o link do vídeo. Exemplo: ${prefix}play10 link` },
      { quoted: info }
    );
  }

  try {
    // Solicitar o vídeo diretamente da API
    const response = await axios.get(`http://br2.bronxyshost.com:4109/api/download/youtube-video?url=https://youtube.com/watch?v=${encodeURIComponent(text)}&apikey=aGQ8xn0L&username=comefemea`, { responseType: 'arraybuffer' });
    const videoBuffer = response.data;

    // Verificar se o buffer de vídeo está correto
    if (!videoBuffer || videoBuffer.length === 0) {
      return loli.sendMessage(from, { text: "Não foi possível obter o vídeo solicitado." }, { quoted: info });
    }

    // Enviar o vídeo baixado
    await loli.sendMessage(
      from,
      {
        video: Buffer.from(videoBuffer),  // Certifique-se de que o vídeo está sendo enviado como Buffer
        mimetype: 'video/mp4',
        fileName: `${text}.mp4`
      },
      { quoted: info }
    );

  } catch (error) {
    console.error('Erro ao baixar e enviar o vídeo:', error);
    loli.sendMessage(from, { text: "Ocorreu um erro ao processar a solicitação." }, { quoted: info });
  }
}
break;
case 'perfilzap':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  try {
    // Verifica se o texto (parâmetros) foi fornecido
    if (!text) {
      return reply('🚨 Por favor, forneça os parâmetros no formato: .perfilzap Nome/numero/bio/horas');
    }

    // Divide o texto em nome, número, bio e horas com base no '/'
    const [nome, numero, bio, horas] = text.split('/').map(param => param.trim());

    // Verifica se todos os parâmetros foram fornecidos
    if (!nome || !numero || !bio || !horas) {
      return reply('🚨 Parâmetros inválidos. Use o formato: .perfilzap Nome/numero/bio/horas');
    }

    // Verifica se o usuário marcou uma foto
    if (isQuotedImage) {
      console.log('Imagem marcada detectada.');

      // Obtém a imagem marcada
      const boij = JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage;

      const fetch = require('node-fetch');
      const FormData = require('form-data');

      // Função para fazer upload da imagem para o Telegraph
      async function uploadImageToTelegraph(imageBuffer) {
        const form = new FormData();
        form.append('file', imageBuffer, { filename: 'image.jpg' });

        const response = await fetch('https://telegra.ph/upload', {
          method: 'POST',
          body: form,
        });

        const data = await response.json();
        if (data && data[0] && data[0].src) {
          return 'https://telegra.ph' + data[0].src;
        } else {
          throw new Error('Falha ao obter o URL da imagem.');
        }
      }

      // Obtém o buffer da imagem
      const owgi = await getFileBuffer(boij, 'image');
      const perfilUrl = await uploadImageToTelegraph(owgi);
      console.log(`URL do perfil atualizado (imagem marcada): ${perfilUrl}`);

      // Gera a imagem com o link da foto
      if (perfilUrl && perfilUrl.startsWith('http')) {
        const encodedNome = encodeURIComponent(nome);
        const encodedNumero = encodeURIComponent(numero);
        const encodedBio = encodeURIComponent(bio);
        const encodedHoras = encodeURIComponent(horas);
        const encodedPerfilUrl = encodeURIComponent(perfilUrl);

        const apiUrl = `https://tohka.tech/api/canvas/perfilzap?nome=${encodedNome}&numero=${encodedNumero}&bio=${encodedBio}&horas=${encodedHoras}&perfil=${encodedPerfilUrl}&apikey=gxhu6`;

        console.log(`URL da API: ${apiUrl}`);

        reply("🔄 Gerando a imagem...");

        const responsePerfilzap = await fetch(apiUrl);

        if (!responsePerfilzap.ok) {
          throw new Error(`Erro na resposta da API: ${responsePerfilzap.status} ${responsePerfilzap.statusText}`);
        }

        const imageBufferPerfilzap = await responsePerfilzap.buffer();
        await loli.sendMessage(sender, { image: imageBufferPerfilzap, caption: 'Imagem gerada com sucesso.' }, { quoted: info });

      } else {
        reply('🚨 Não foi possível obter a URL da imagem. Tente novamente.');
      }
    } else {
      reply('🚨 Por favor, marque uma foto para gerar a imagem.');
    }
  } catch (error) {
    console.error("Erro ao processar a imagem:", error);
    reply("🚨 Não foi possível processar a imagem. Tente novamente mais tarde.");
  }
  break;
case 'vasco':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  try {
    // Verifica se o texto (parâmetros) foi fornecido
    if (!text) {
      return reply('🚨 Por favor, forneça os parâmetros no formato: .vasco título/nome');
    }

    // Divide o texto em título e nome com base no '/'
    const [titulo, nome] = text.split('/').map(param => param.trim());
    
    // Verifica se ambos os parâmetros foram fornecidos
    if (!titulo || !nome) {
      return reply('🚨 Parâmetros inválidos. Use o formato: .vasco título/nome');
    }

    // Verifica se o usuário marcou uma foto
    if (isQuotedImage) {
      console.log('Imagem marcada detectada.');

      // Obtém a imagem marcada
      const boij = JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage;

      const fetch = require('node-fetch');
      const FormData = require('form-data');

      // Função para fazer upload da imagem para o Telegraph
      async function uploadImageToTelegraph(imageBuffer) {
        const form = new FormData();
        form.append('file', imageBuffer, { filename: 'image.jpg' });

        const response = await fetch('https://telegra.ph/upload', {
          method: 'POST',
          body: form,
        });

        const data = await response.json();
        if (data && data[0] && data[0].src) {
          return 'https://telegra.ph' + data[0].src;
        } else {
          throw new Error('Falha ao obter o URL da imagem.');
        }
      }

      // Obtém o buffer da imagem
      const owgi = await getFileBuffer(boij, 'image');
      const perfil = await uploadImageToTelegraph(owgi);
      console.log(`Perfil atualizado (imagem marcada): ${perfil}`);

      // Gera a imagem com o link da foto
      if (perfil && perfil.startsWith('http')) {
        const encodedTitulo = encodeURIComponent(titulo);
        const encodedNome = encodeURIComponent(nome);
        const encodedPerfil = encodeURIComponent(perfil);

        const apiUrl = `https://tohka.tech/api/canvas/vasco?titulo1=${encodedTitulo}&nome=${encodedNome}&perfil=${encodedPerfil}&apikey=gxhu6`;

        console.log(`URL da API: ${apiUrl}`);

        reply("🔄 Gerando a imagem...");

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
        }

        const imageBuffer = await response.buffer();
        await loli.sendMessage(sender, { image: imageBuffer, caption: 'Imagem gerada com sucesso.' }, { quoted: info });

      } else {
        reply('🚨 Não foi possível obter a URL da imagem. Tente novamente.');
      }
    } else {
      reply('🚨 Por favor, marque uma foto para gerar a imagem.');
    }
  } catch (error) {
    console.error("Erro ao processar a imagem:", error);
    reply("🚨 Não foi possível processar a imagem. Tente novamente mais tarde.");
  }
  break;
case 'photo':
  // Checa se o usuário está aguardando uma foto
  if (userState[sender] && userState[sender].command === 'vasco') {
    const { titulo, nome } = userState[sender].params;
    const perfil = message.message.imageMessage?.url; // Obtém a URL da foto marcada

    if (!perfil) {
      return reply('🚨 Não consegui obter a foto. Por favor, marque a foto novamente.');
    }


    const encodedTitulo = encodeURIComponent(titulo);
    const encodedNome = encodeURIComponent(nome);
    const encodedPerfil = encodeURIComponent(perfil);

    const apiUrl = `https://tohka.tech/api/canvas/vasco?titulo1=${encodedTitulo}&nome=${encodedNome}&perfil=${encodedPerfil}&apikey=gxhu6`;

    console.log(`URL da API: ${apiUrl}`);

    reply("🔄 Gerando a imagem...");

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
      }

      const imageBuffer = await response.buffer();
      await loli.sendMessage(sender, { image: imageBuffer, caption: 'Imagem gerada com sucesso.' }, { quoted: info });

    } catch (error) {
      console.error("Erro ao obter a imagem:", error);
      reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
    }

    // Limpa o estado do usuário
    delete userState[sender];
  } else {
    reply('🚨 Não há um comando em espera para processar sua foto.');
  }
  break;
  case 'signo':
    if (!q) return loli.sendMessage(from, { text: '[⚙️️] Por favor, forneça o nome do signo que você deseja buscar. Exemplo: !signo touro' }, { quoted: info });

    const signo = encodeURIComponent(q.toLowerCase()); // Codifica a consulta para a URL
    const apiUrlSigno = `https://world-ecletix.onrender.com/api/horoscopo/${signo}`;

    try {
        // Requisição para a API de horóscopo
        const response = await axios.get(apiUrlSigno);
        const data = response.data;

        // Verificar se a resposta contém informações sobre o signo
        if (data && data.signo) {
            const { signo, horoscopo, palpite, cor, elemento, regente, flor, metal, pedra, amuletos, perfume, anjo, orixa, santoProtetor } = data;

            // Montar a mensagem com as informações do signo
            const message = `
                *Signo:* ${signo.charAt(0).toUpperCase() + signo.slice(1)}
                *Horóscopo:* ${horoscopo}
                *Palpite:* ${palpite}
                *Cor:* ${cor}
                *Elemento:* ${elemento}
                *Regente:* ${regente}
                *Flor:* ${flor}
                *Metal:* ${metal}
                *Pedra:* ${pedra}
                *Amuletos:* ${amuletos}
                *Perfume:* ${perfume}
                *Anjo:* ${anjo}
                *Orixá:* ${orixa}
                *Santo Protetor:* ${santoProtetor}
            `;

            // Enviar a mensagem com as informações do signo
            await loli.sendMessage(from, { text: message }, { quoted: info });
        } else {
            loli.sendMessage(from, { text: '🚨 Não foi possível encontrar informações para o signo pesquisado.' }, { quoted: info });
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição à API de horóscopo:', error);
        loli.sendMessage(from, { text: '🚨 Erro ao buscar informações sobre o signo.' }, { quoted: info });
    }
    break;
case 'flor':
    return reply(`
    ____________ 🍂_🍂_ 🍂_🍂
    ____________ 🍂__🍂__ 🍂__🍂
    ___________ 🍂___🍂__ 🍂___🍂
    __________ 🍂____🍂 __🍂____🍂
    _________ 🍂_____🍂 __🍂 ____🍂
    _________ 🍂_____🍂 __🍂 ____ 🍂
    _________ 🍂_____🍂 __🍂 ____ 🍂
    __________ 🍂____ 🍂__🍂 ___ 🍂
    ____________ 🍂___🍂__🍂 __ 🍂
    _____________ 🍂🍂🍂🍂🍂
    ______🍃🍃_______🌱🌱
    ____🍃🍃🍃_______🌱
    ___🍃🍃🍃🍃_____🌱
    ______🍃🍃🍃_____🌱
    __________🍃_______🌱
    ______🍃🍃_🍃____🌱
    ____🍃🍃🍃__🍃__🌱
    ___🍃🍃🍃_____🍃🌱
    ____🍃🍃__________🌱
    ____🍃_____________🌱
    ____________________🌱
    ____________________🌱
    ____________________🌱
    ________________███__██
    ______________███___ ███
    ______________███_____███_██
    ______________███______███_███
    _____________███______███__███
    ___________████_____████__███
    ___________████___████___███_██
    ___________██████████___███_███
    _________███████████_████_███
    _________███████████████_███
    _________█████████████_█████
    ████_███████████████_████
    █████_██████████████_████
    ██████_████████████_████
    ███████_██████████████
    █████████_███████████
    ██████████_███████
    ███████████
    ███████████
    ---------------\numa flor para outra flor\nessa eu dedico a você ${pushname} my amore🥰😘❤️`)
    break;

case 'stive':
    return reply(`
    🏿🏿🏿🏿🏿🏿🏿🏿
    🏿🏿🏽🏽🏽🏽🏿🏿
    🏽🏽🏽🏽🏽🏽🏽🏽
    🏽⬜⬛🏽🏽⬛⬜🏽
    🏽🏽🏽🏿🏿🏽🏽🏽
    🏽🏽🏿🏽🏽🏿🏽🏽
    🏽🏽🏿🏿🏿🏿🏽🏽 
    `);
    break;

case 'playboy':
    return reply(`..¶¶¶¶¶¶¶¶7………………………………$¶¶¶¶¶$
    ….¶¶¶¶¶¶¶¶¶¢…………………………¶¶¶¶¶¶¶$
    ….ø¶¶¶¶¶$¶¶¶¶……………………..¢¶¶¶¶¶¶¶$
    ……¶¶¶¶¶¶¶¶¶¶¶¶………………….¶¶¶¶¶¶¶¶ø
    ……..¶¶¶¶¶¶¶¶¶¶¶¶¢…………….¶¶¶¶¶¶¶¶¶o
    ……………¶¶¶¶¶¶¶¶¶¶¶¶…………..¶¶¶¶¶¶¶¶¶
    ……………..¢¶¶¶¶¶¶¶¶¶¶¶…………¶¶¶¶¶¶¶¶¶
    …………………¶¶¶¶¶$¶¶¶¶¶7……o¶¶¶¶¶¶¶¶7
    …………………….7¶¶¶¶¶¶¶¶¶¶….o¶¶¶¶¶¶¶¶
    ………………………….o¶¶¶¶¶¶¶¶….¶¶¶¶¶¶¶
    …………………………………….$¶¶¶o¶¶¶¶¶¶
    ………………………….o¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    …………………….¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    …………………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶7
    ……………….¶¶¶ø……¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ……………..¶¶¶¶……….¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ………….¶¶¶¶¶¶……¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ………….¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ……………..¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    …………………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    …………………….7¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ……………………………o¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ………………………………¶¶¶¶¶¶¶¶¶¶¶¶¶1`);
    break;
case 'letra':
    if (!q) return loli.sendMessage(from, { text: '[⚙️️] Por favor, forneça o nome da música que você deseja buscar. Exemplo: !letra matue 4tal' }, { quoted: info });

    const texto = encodeURIComponent(q); // Codifica a consulta para a URL
    const apiUrlLetra = `https://world-ecletix.onrender.com/api/letra?texto=${texto}`;

    try {
        // Requisição para a API de letra
        const response = await axios.get(apiUrlLetra);
        const data = response.data;

        // Verificar se a resposta contém informações sobre a música
        if (data && data.titulo) {
            const { titulo, artista, letra, imagem } = data;

            // Montar a mensagem com as informações da música
            const message = `
                *Título:* ${titulo}
                *Artista:* ${artista}
                *Letra:*
                
                ${letra}
            `;

            // Enviar a imagem e a mensagem com a letra da música
            if (imagem) {
                const imageResponse = await axios.get(imagem, { responseType: 'arraybuffer' });
                const imageBuffer = Buffer.from(imageResponse.data, 'binary');

                await loli.sendMessage(from, { 
                    image: imageBuffer, 
                    caption: message 
                }, { quoted: info });
            } else {
                await loli.sendMessage(from, { text: message }, { quoted: info });
            }
        } else {
            loli.sendMessage(from, { text: '🚨 Não foi possível encontrar a letra da música pesquisada.' }, { quoted: info });
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição à API de letra:', error);
        loli.sendMessage(from, { text: '🚨 Erro ao buscar a letra da música.' }, { quoted: info });
    }
    break;

case 'filme':
    if (!q) return loli.sendMessage(from, { text: '[⚙️️] Por favor, forneça o nome do filme que você deseja buscar. Exemplo: !filme Deadpool' }, { quoted: info });

    const queryFilme = encodeURIComponent(q); // Codifica a consulta para a URL
    const apiUrlFilme = `https://world-ecletix.onrender.com/api/filme?nome=${queryFilme}`;

    try {
        // Requisição para a API de filmes
        const response = await axios.get(apiUrlFilme);
        const data = response.data;

        // Verificar se a resposta contém informações sobre o filme
        if (data.status === 'online' && data.imagem) {
            const { Nome, Lancamento, Avaliacoes, Popularidade, Classificacao_adulta, Linguagem_oficial, Sinopse, imagem } = data;

            // Montar a mensagem com as informações do filme
            const message = `
                *Título:* ${Nome}
                *Lançamento:* ${Lancamento}
                *Avaliações:* ${Avaliacoes}
                *Popularidade:* ${Popularidade}
                *Classificação Adulta:* ${Classificacao_adulta}
                *Linguagem Oficial:* ${Linguagem_oficial}
                *Sinopse:* ${Sinopse}
            `;

            // Função para baixar a imagem
            const getImageBuffer = async (url) => {
                try {
                    const { data } = await axios.get(url, { responseType: 'arraybuffer' });
                    return Buffer.from(data, 'binary');
                } catch (error) {
                    console.error('Erro ao baixar a imagem:', error);
                    return null;
                }
            };

            // Verifica se a URL da imagem é acessível e obtém o buffer
            const imageBuffer = await getImageBuffer(imagem);

            if (imageBuffer && imageBuffer.length > 0) {
                // Envia a mensagem com a imagem
                await loli.sendMessage(
                    from,
                    {
                        image: imageBuffer,
                        caption: message, // Adiciona a mensagem como legenda
                    },
                    { quoted: info }
                );
            } else {
                // Se falhar ao baixar a imagem, envia apenas o texto
                await loli.sendMessage(
                    from,
                    {
                        text: `${message}\n\nNão foi possível baixar a imagem.`,
                    },
                    { quoted: info }
                );
            }
        } else {
            loli.sendMessage(from, { text: '🚨 Não foi possível encontrar informações para o filme pesquisado.' }, { quoted: info });
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição à API de filmes:', error);
        loli.sendMessage(from, { text: '🚨 Erro ao buscar informações sobre o filme.' }, { quoted: info });
    }
    break;

case 'serie':
    if (!q) return loli.sendMessage(from, { text: '[⚙️️] Por favor, forneça o nome da série que você deseja buscar. Exemplo: !serie The Boys' }, { quoted: info });

    const querySerie = encodeURIComponent(q); // Codifica a consulta para a URL
    const apiUrlSerie = `https://world-ecletix.onrender.com/api/serie?nome=${querySerie}`;

    try {
        // Requisição para a API de séries
        const response = await axios.get(apiUrlSerie);
        const data = response.data;

        // Verificar se a resposta contém informações sobre a série
        if (data.status === 'online' && data.imagem) {
            const { Nome, Lancamento, Avaliacoes, Popularidade, Classificacao_adulta, Linguagem_oficial, Sinopse, imagem } = data;

            // Montar a mensagem com as informações da série
            const message = `
                *Título:* ${Nome}
                *Lançamento:* ${Lancamento}
                *Avaliações:* ${Avaliacoes}
                *Popularidade:* ${Popularidade}
                *Classificação Adulta:* ${Classificacao_adulta}
                *Linguagem Oficial:* ${Linguagem_oficial}
                *Sinopse:* ${Sinopse}
            `;

            // Função para baixar a imagem
            const getImageBuffer = async (url) => {
                try {
                    const { data } = await axios.get(url, { responseType: 'arraybuffer' });
                    return Buffer.from(data, 'binary');
                } catch (error) {
                    console.error('Erro ao baixar a imagem:', error);
                    return null;
                }
            };

            // Verifica se a URL da imagem é acessível e obtém o buffer
            const imageBuffer = await getImageBuffer(imagem);

            if (imageBuffer && imageBuffer.length > 0) {
                // Envia a mensagem com a imagem
                await loli.sendMessage(
                    from,
                    {
                        image: imageBuffer,
                        caption: message, // Adiciona a mensagem como legenda
                    },
                    { quoted: info }
                );
            } else {
                // Se falhar ao baixar a imagem, envia apenas o texto
                await loli.sendMessage(from,
                    {
                        text: `${message}\n\nNão foi possível baixar a imagem.`,
                    },
                    { quoted: info }
                );
            }
        } else {
            loli.sendMessage(from, { text: '🚨 Não foi possível encontrar informações para a série pesquisada.' }, { quoted: info });
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição à API de séries:', error);
        loli.sendMessage(from, { text: '🚨 Erro ao buscar informações sobre a série.' }, { quoted: info });
    }
    break;

case 'pinterest':
    if (!q) return reply(`*_❕Coloque a busca que você deseja!_*\n- *🧑‍🏫 Por exemplo:* ${prefix + command} goku`);

    const searchQueryPinterest = encodeURIComponent(q);
    const pinterestApiUrl = `https://world-ecletix.onrender.com/api/pinterest?termo=${searchQueryPinterest}`;

    reply("🔄 Buscando imagens...");

    try {
        const response = await fetch(pinterestApiUrl);

        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }

        const urls = await response.json();

        if (!Array.isArray(urls) || urls.length === 0) {
            return reply("Nenhuma imagem encontrada para a pesquisa.");
        }

        const randomIndex = Math.floor(Math.random() * urls.length);
        const randomUrl = urls[randomIndex];

        // Faz a requisição da imagem
        const imageResponse = await fetch(randomUrl);
        if (!imageResponse.ok) {
            throw new Error('Erro ao buscar a imagem.');
        }

        const imageBuffer = await imageResponse.buffer();

        // Envia a imagem diretamente do buffer
        await loli.sendMessage(from, { image: imageBuffer, caption: `Aqui está a imagem: ${q}` });

    } catch (error) {
        console.error("Erro ao obter a imagem:", error);
        reply("🚨 Não foi possível buscar a imagem. Tente novamente mais tarde.");
    }
break;


case 'pinterest2':
    if (!q) return reply(`*_❕Coloque a busca que você deseja!_*\n- *🧑‍🏫 Por exemplo:* ${prefix + command} anime icon`);

    const searchQueryPinterest2 = encodeURIComponent(q);
    const apiUrlPinterest2 = `https://tohka.tech/api/pesquisa/pinterest?nome=${searchQueryPinterest2}&apikey=gxhu6`;

    reply("🔄 Buscando imagens...");

    try {
        const response = await fetch(apiUrlPinterest2);

        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }

        const urls = await response.json();

        if (!Array.isArray(urls) || urls.length === 0) {
            return reply("Nenhuma imagem encontrada para a pesquisa.");
        }

        const randomIndex = Math.floor(Math.random() * urls.length);
        const randomUrl = urls[randomIndex];

        // Faz a requisição da imagem
        const imageResponse = await fetch(randomUrl);
        if (!imageResponse.ok) {
            throw new Error('Erro ao buscar a imagem.');
        }

        const imageBuffer = await imageResponse.buffer();

        // Envia a imagem diretamente do buffer
        await loli.sendMessage(from, { image: imageBuffer, caption: `Aqui está a imagem: ${q}` });

    } catch (error) {
        console.error("Erro ao obter a imagem:", error);
        reply("🚨 Não foi possível buscar a imagem. Tente novamente mais tarde.");
    }
    break;

case 'imgpralink':
case 'gerarlink': 
try { 
    // essa porra foi criada por mim, entao deixe os créditos, by: ryuu
    if (isQuotedImage) {
        const boij = isQuotedImage 
        ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage 
        : info;

        const fetch = require('node-fetch');
        const FormData = require('form-data');

        // Função para fazer upload da imagem no Imgur
        async function uploadImageToImgur(imageBuffer) {
            const form = new FormData();
            form.append('image', imageBuffer, { filename: 'image.jpg' });

            const response = await fetch('https://api.imgur.com/3/image', {
                method: 'POST',
                body: form,
                headers: {
                    'Authorization': 'Client-ID 400116076ba4b73'
                }
            });

            const data = await response.json();
            
            // Verifica se o upload foi bem-sucedido e se a URL foi retornada
            if (response.ok && data.data && data.data.link) {
                return data.data.link;
            } else {
                throw new Error('Falha ao obter o link da imagem a partir da resposta.');
            }
        }

        // Garante que a função `getFileBuffer` está disponível
        const owgi = await getFileBuffer(boij, "image");
        const imageUrl = await uploadImageToImgur(owgi);
        
        const ryuumods = `_*Link gerado com sucesso*_⚡️\n\n${imageUrl}`;
        reply(ryuumods);

    } else {
        reply(`${pushname}, você tem que marcar a foto desejada.`);
    }
    
} catch (e) {
    console.log('Detalhes do erro:', e); 
    reply('Erro ao processar a imagem e gerar o link...');
} 
break;

case 'igstalk':
{
  if (!isPremium) {
    return loli.sendMessage(from, { text: '[⚙️️] Comando só para usuários VIP' }, { quoted: info });
  }

  // Verifica se o parâmetro foi fornecido
  if (!text) {
    return loli.sendMessage(from, { text: '🚨 Por favor, forneça o nome de usuário do Instagram. Exemplo: !igstalk neymarjr' }, { quoted: info });
  }

  // Remove o comando do texto para obter apenas o nome de usuário
  const username = text.replace('.igstalk ', '').trim();

  // Verifica se o nome de usuário não está vazio após a limpeza
  if (!username) {
    return loli.sendMessage(from, { text: '🚨 Nome de usuário inválido. Por favor, tente novamente.' }, { quoted: info });
  }

  // Codifica o nome de usuário para uso na URL da API
  const encodedUsername = encodeURIComponent(username);

  loli.sendMessage(from, { text: '🔄 Buscando informações do perfil...' }, { quoted: info });

  try {
    // Cria a URL para a requisição à API
    const apiUrl = `https://api-aswin-sparky.koyeb.app/api/search/ig?search=${encodedUsername}`;

    console.log(`Requisição para a API: ${apiUrl}`); // Log da URL da API

    // Faz a requisição para a API do Instagram
    const response = await fetch(apiUrl);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }

    // Converte a resposta em JSON
    const data = await response.json();

    console.log('Dados da API:', data); // Log dos dados retornados pela API

    if (!data || !data.data) {
      throw new Error('Nenhum dado encontrado para o nome de usuário fornecido.');
    }

    // Obtém as informações do perfil
    const profile = data.data;

    // Cria uma mensagem com as informações do perfil
    const profileInfo = `
👤 *Nome:* ${profile.name || 'N/A'}
🔗 *Username:* ${profile.username || 'N/A'}
📸 *Posts:* ${profile.posts || 'N/A'}
🧑‍🤝‍🧑 *Seguidores:* ${profile.followers || 'N/A'}
👥 *Seguindo:* ${profile.following || 'N/A'}
📖 *Descrição:* ${profile.description || 'N/A'}
🔗 *Link:* https://www.instagram.com/${profile.username || username}
    `;

    // Envia a mensagem com as informações do perfil, incluindo a imagem de avatar
    const avatarResponse = await fetch(profile.avatar);
    const avatarBuffer = await avatarResponse.buffer();

    await loli.sendMessage(from, { 
      image: avatarBuffer, 
      caption: profileInfo 
    }, { quoted: info });

  } catch (error) {
    // Mensagens detalhadas de erro
    let errorMessage;

    if (error.message.includes('Erro na resposta da API')) {
      errorMessage = '🚨 Erro ao acessar a API. Tente novamente mais tarde.';
    } else if (error.message.includes('Nenhum dado encontrado')) {
      errorMessage = '🚨 Nenhum dado encontrado para o nome de usuário fornecido. Verifique o nome de usuário e tente novamente.';
    } else {
      errorMessage = `🚨 Ocorreu um erro inesperado: ${error.message}`;
    }

    console.error("Detalhes do erro:", error); // Log detalhado do erro
    loli.sendMessage(from, { text: errorMessage }, { quoted: info });
  }
}
break;

case 'namoro':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Verifica se o comando possui o formato esperado
  if (args.length !== 1) {
    return reply('🚨 Por favor, use o comando no formato: .namoro');
  }

  // URLs das fotos a serem usadas
  const avatar1 = 'https://telegra.ph/file/0b76683c820979a034779.png'; // Primeira foto
  const avatar2 = 'https://telegra.ph/file/052f6f77b86db20253256.png'; // Segunda foto
  const fundoUrl = 'https://telegra.ph/file/14c9a6ce9c4e3e43a8ee1.jpg'; // Fundo

  // Construa a URL da API com os parâmetros fornecidos
  const namoroApiUrl = `https://tohka.tech/api/canvas/namoro?avatar1=${encodeURIComponent(avatar1)}&avatar2=${encodeURIComponent(avatar2)}&fundo=${encodeURIComponent(fundoUrl)}&apikey=gxhu6`;

  console.log(`URL da API: ${namoroApiUrl}`);

  reply("🔄 Gerando a imagem...");

  try {
    // Faz a requisição para a API
    const response = await fetch(namoroApiUrl);

    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
    }

    const imageBuffer = await response.buffer();  // Obtém a resposta como buffer

    // Envia a imagem ao usuário
    await loli.sendMessage(sender, { image: imageBuffer, caption: 'Imagem gerada com sucesso.' }, { quoted: info });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;
case 'editbranca':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Verifica se o parâmetro foi fornecido
  if (args.length < 2) {
    return reply('🚨 Por favor, forneça um nick. Exemplo: !editbranca Sayo Dev');
  }

  const nickBranca = encodeURIComponent(args[1]);

  reply("🔄 Gerando a imagem...");

  try {
    const response = await fetch(`https://tohka.tech/api/canvas/editbranca?nick=${nickBranca}&img=https://i.pinimg.com/564x/96/70/98/967098685058d9b14f5b715fd43e88d1.jpg&apikey=gxhu6`);
    
    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }

    const imageBuffer = await response.buffer();

    await loli.sendMessage(sender, { image: imageBuffer, caption: `Imagem gerada com o nick: ${args[1]}.` });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;

case 'editvermelha':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Verifica se o parâmetro foi fornecido
  if (args.length < 2) {
    return reply('🚨 Por favor, forneça um nick. Exemplo: !editvermelha Sexo');
  }

  const nickVermelha = encodeURIComponent(args[1]);

  reply("🔄 Gerando a imagem...");

  try {
    const response = await fetch(`https://tohka.tech/api/canvas/editvermelha?nick=${nickVermelha}&img=https://telegra.ph/file/d3f32c55c57b738806acf.png&apikey=gxhu6`);

    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }

    const imageBuffer = await response.buffer();

    await loli.sendMessage(sender, { image: imageBuffer, caption: `Imagem gerada com o nick: ${args[1]}.` });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;

case 'editroxo':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Verifica se o parâmetro foi fornecido
  if (args.length < 2) {
    return reply('🚨 Por favor, forneça um nick. Exemplo: !editroxo Sayo');
  }

  const nickRoxo = encodeURIComponent(args[1]);

  reply("🔄 Gerando a imagem...");

  try {
    const response = await fetch(`https://tohka.tech/api/canvas/editroxo?nick=${nickRoxo}&img=https://telegra.ph/file/edd98b4aefa226c05e60d.jpg&apikey=gxhu6`);

    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }

    const imageBuffer = await response.buffer();

    await loli.sendMessage(sender, { image: imageBuffer, caption: `Imagem gerada com o nick: ${args[1]}.` });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;

case 'matar':
case 'mata':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);
    if (!isGroup) return reply('Esse comando só pode ser utilizado em grupos.');

    let mentionIdMatar;
    if (budy.includes("@")) {
        mentionIdMatar = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdMatar = sender;
    }

    const susp = `Você acabou de matar o(a) *@${mentionIdMatar.split('@')[0]}* 😈👹`;
    const jrpp = await getBuffer(`${matei}`);
    
    await loli.sendMessage(from, {
        video: jrpp, 
        gifPlayback: true, 
        caption: susp, 
        mentions: [mentionIdMatar]
    }, { quoted: info });
    break;
    case 'tapa':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);
    if (!isGroup) return reply('Esse comando só pode ser utilizado em grupos.');

    let mentionIdTapa;
    if (budy.includes("@")) {
        mentionIdTapa = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdTapa = sender;
    }

    const suspTapa = `Você acabou de dar um tapa na raba de *@${mentionIdTapa.split('@')[0]}* 😏🔥`;
    const jrq = await getBuffer(`${tapinha}`);
    
    await loli.sendMessage(from, {
        video: jrq, 
        gifPlayback: true, 
        caption: suspTapa, 
        mentions: [mentionIdTapa]
    }, { quoted: info });
    break;
    case 'tapanacara': 
case 'tapa2': 
    // by albino mods
    if (!isGroup) return reply('Esse comando só pode ser usado em grupos.');
    
    // Verifica se foi mencionado alguém
    if (!budy.includes("@")) return reply('Marque a pessoa que vai receber os tapas com @.');
    
    // Extrai o ID do mencionado e usa a nova variável mentionIdTapa2
    let mentionIdTapa2 = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    
    // Envia a mensagem com o vídeo e a menção
    await boruto.sendMessage(from, {
        video: { url: 'https://telegra.ph/file/0876dc8aa28cc777dac43.mp4' },
        gifPlayback: true,
        caption: `*Ih ${pushname}, você acabou de meter um tapa na cara de @${mentionIdTapa2.split('@')[0]}*`,
        mentions: [mentionIdTapa2]
    }, { quoted: info });
    break;
case 'lavarlouca':
    if (!isGroup) return reply('Esse comando só pode ser usado em grupos.');
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativo. Fale com um adm ou, se você for, digite ${prefix}modobrincadeira 1`);

    // Definindo a variável para o usuário mencionado ou o remetente
    let mentionIdLavarlouca = budy.includes("@") ? args.join(" ").replace("@", "") + "@s.whatsapp.net" : sender;
    
    await loli.sendMessage(from, {
        video: { url: 'https://telegra.ph/file/a8183876a89ee799541f5.mp4' },
        gifPlayback: true,
        caption: `Você acabou de botar a(o) *@${mentionIdLavarlouca.split('@')[0]}* pra lavar a louça`,
        mentions: [mentionIdLavarlouca]
    }, { quoted: info });
    break;

case 'capinarlote':
    if (!isGroup) return reply('Esse comando só pode ser usado em grupos.');
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativo. Fale com um adm ou, se você for, digite ${prefix}modobrincadeira 1`);

    // Definindo a variável para o usuário mencionado ou o remetente
    let mentionIdCapinarlote = budy.includes("@") ? args.join(" ").replace("@", "") + "@s.whatsapp.net" : sender;
    
    await loli.sendMessage(from, {
        video: { url: 'https://telegra.ph/file/4682c1b474ce5dee3a48d.mp4' },
        gifPlayback: true,
        caption: `Você acabou de botar o(a) *@${mentionIdCapinarlote.split('@')[0]}* pra capinar um lote`,
        mentions: [mentionIdCapinarlote]
    }, { quoted: info });
    break;
case 'gay2':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);
    if (!isGroup) return reply('Esse comando só pode ser utilizado em grupos.');

    const rate = body.slice(7);
    let mentionIdGay2;
    if (budy.includes("@")) {
        mentionIdGay2 = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdGay2 = sender;
    }

    const random = `${Math.floor(Math.random() * 110)}`;
    const random2 = `${Math.floor(Math.random() * 110)}`;
    
    await loli.sendMessage(from, {
        text: `➮ Pesquisando a ficha de ${comando} : *@${mentionIdGay2.split("@")[0]}*, aguarde...\n\n _Você é: ❰ ${random}, ${random2}% ❱  ${comando}_`, 
        mentions: [mentionIdGay2]
    });
    break;
    
    case 'foder':
case 'fuder': // by tzn modas
    if (!isGroup) return reply('Este comando só pode ser usado em grupos.');

    let mentionIdFoder;
    if (budy.includes("@")) {
        mentionIdFoder = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdFoder = sender; 
    }

    const randomFoder = `${Math.floor(Math.random() * 100)}`;
    reagir(from, "💦");
    await loli.sendMessage(from, {
        video: { url: 'https://telegra.ph/file/121ed971b8a3472e8b673.mp4' },
        gifPlayback: true,
        caption: `*[👤] Olá, ${pushname}. Você acabou de fuder o(a) @${mentionIdFoder.split('@')[0]} 🥵*\n\n*[💦] Chance de você ter gozado no cuzinho do(a) @${mentionIdFoder.split('@')[0]} foi de:* _${randomFoder}%_`,
        mentions: [mentionIdFoder]
    }, { quoted: info });
    break;

case 'sexo':
case 'sex':
case 'Sexo':
    if (!isGroup) return reply('Este comando só pode ser usado em grupos.');

    let mentionIdSexo;
    if (budy.includes("@")) {
        mentionIdSexo = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdSexo = sender; 
    }

    const randomSexo = `${Math.floor(Math.random() * 120)}`;
    const fioteh = `${Math.floor(Math.random() * 100)}`;
    reagir(from, "🤱");
    await loli.sendMessage(from, {
        video: { url: 'https://telegra.ph/file/6060d62a642f78d9375d3.mp4' },
        gifPlayback: true,
        caption: `*[👤] Olá, ${pushname}. Você acabou de fazer sexo com(a) @${mentionIdSexo.split('@')[0]} 🥵*\n\n*[💦] Chance de você ter ejaculado dentro:* _${randomSexo}%_\n\n*[🤱] Possíveis chances do @${mentionIdSexo.split('@')[0]} ter engravidado é:* _${fioteh}%_`,
        mentions: [mentionIdSexo]
    }, { quoted: info });
    break;
case 'bebado':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);  
    if (!isGroup) return reply('Só pode ser utilizado este comando em grupo.');

    let mentionIdBebado;
    if (budy.includes("@")) {
        mentionIdBebado = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdBebado = sender;
    }

    await loli.sendMessage(from, {
        text: `❰ Pesquisando a ficha de bêbado : @${mentionIdBebado.split("@")[0]}, aguarde... ❱`,
        mentions: [mentionIdBebado]
    });

    setTimeout(async () => {
        const wew = await getBuffer(`${bebin}`);
        const random = `${Math.floor(Math.random() * 110)}`;
        await loli.sendMessage(from, {
            image: wew,
            caption: `O quanto você é bêbado? \n\n「 @${mentionIdBebado.split("@")[0]} 」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`,
            mentions: [mentionIdBebado]
        }, { quoted: info });
    }, 7000);
    break;

case 'vesgo':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1.`);
    if (!isGroup) return reply('Só pode ser utilizado este comando em grupos.');

    let mentionIdVesgo;
    if (budy.includes("@")) {
        mentionIdVesgo = args.join(" ").replace("@", "").trim() + "@s.whatsapp.net";
    } else {
        mentionIdVesgo = sender;
    }

    await loli.sendMessage(from, {
        text: `❰ Pesquisando a ficha de vesgo: @${mentionIdVesgo.split("@")[0]}, aguarde... ❱`,
        mentions: [mentionIdVesgo]
    });

    setTimeout(async () => {
        const wew = await getBuffer(vesgin);
        const randomVesgo = `${Math.floor(Math.random() * 110)}`;
        await loli.sendMessage(from, {
            image: wew,
            caption: `O quanto você é vesgo?\n\n「 @${mentionIdVesgo.split("@")[0]} 」Você é: ❰ ${randomVesgo}% ❱ Vesgo 🙄😆`,
            mentions: [mentionIdVesgo]
        }, { quoted: info });
    }, 7000);
    break;
case 'clt':
    // by sd modz
    if (!isGroup) return reply(`Esse comando só pode ser usado em grupos.`);
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);
    
    let mentionIdClt;
    if (budy.includes("@")) {
        mentionIdClt = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdClt = sender; 
    }
    
    const targetUserId = mentionIdClt.split('@')[0]; 
    const messageCaption = `Ih, mano! O ${pushname} levou o @${targetUserId} pra virar CLT! 🥲💥`;
    
    await loli.sendMessage(from, {
        video: { url: 'https://raw.githubusercontent.com/floxcloud/uploadsFlox/main/videos/1728153313349.mp4' },
        gifPlayback: true,
        caption: messageCaption,
        mentions: [mentionIdClt]
    }, { quoted: info });
    break;
    
    
case 'pegarpau':
    if (!isGroup) return reply('Este comando só pode ser usado em grupos.');
    if (!isModobn) return reply(`Ative o modo brincadeira usando ${prefix}modobrincadeira 1`);

    let mentionIdPegarPau = budy.includes("@") ? args.join(" ").replace("@", "") + "@s.whatsapp.net" : sender;

    await loli.sendMessage(from, {
        video: { url: 'https://telegra.ph/file/5073ba8be6b099ed812a7.mp4' },
        gifPlayback: true,
        caption: `Você acabou de pegar no pau do(a) *@${mentionIdPegarPau.split('@')[0]}*`,
        mentions: [mentionIdPegarPau]
    }, { quoted: info }); // Alterado para usar 'info'
    break;

case 'matar2':
case 'mata2':
    if (!isGroup) return reply('Este comando só pode ser usado em grupos.');
    if (!isModobn) return reply(`Ative o modo brincadeira usando ${prefix}modobrincadeira 1`);

    let mentionIdMatar2 = budy.includes("@") ? args.join(" ").replace("@", "") + "@s.whatsapp.net" : sender;

    await loli.sendMessage(from, {
        video: { url: matarcmd }, // Certifique-se de que 'matarcmd' esteja definido
        gifPlayback: true,
        caption: `Você acabou de matar o(a) *@${mentionIdMatar2.split('@')[0]}*, seu... 😵‍💫💅🏻`,
        mentions: [mentionIdMatar2]
    }, { quoted: info }); // Alterado para usar 'info'
    break;

case 'pegarbunda':
    if (!isGroup) return reply('Este comando só pode ser usado em grupos.');
    if (!isModobn) return reply(`Ative o modo brincadeira usando ${prefix}modobrincadeira 1`);

    let mentionIdPegarBunda = budy.includes("@") ? args.join(" ").replace("@", "") + "@s.whatsapp.net" : sender;

    await loli.sendMessage(from, {
        video: { url: 'https://telegra.ph/file/e62de1e6863c59d284b2e.mp4' },
        gifPlayback: true,
        caption: `Você acabou de pegar na bunda do(a) *@${mentionIdPegarBunda.split('@')[0]}*`,
        mentions: [mentionIdPegarBunda]
    }, { quoted: info }); // Alterado para usar 'info'
    break;

case 'pegarpeito':
    if (!isGroup) return reply('Este comando só pode ser usado em grupos.');
    if (!isModobn) return reply(`Ative o modo brincadeira usando ${prefix}modobrincadeira 1`);

    let mentionIdPegarPeito = budy.includes("@") ? args.join(" ").replace("@", "") + "@s.whatsapp.net" : sender;

    await loli.sendMessage(from, {
        video: { url: 'https://telegra.ph/file/52d46e2c58318b8cfcacc.mp4' },
        gifPlayback: true,
        caption: `Você acabou de pegar nos peitos do(a) *@${mentionIdPegarPeito.split('@')[0]}*`,
        mentions: [mentionIdPegarPeito]
    }, { quoted: info }); // Alterado para usar 'info'
    break;


case 'comer':
    if (!isGroup) return reply('Este comando só pode ser usado em grupos.');
    if (!isModobn) return reply(`Ative o modo brincadeira usando ${prefix}modobrincadeira 1`);

    let mentionIdComer = budy.includes("@") ? args.join(" ").replace("@", "") + "@s.whatsapp.net" : sender;

    const videoComer = await getBuffer('https://telegra.ph/file/d46ff5e2b8f4c5335e362.mp4'); // Carregando o vídeo
    if (!videoComer) {
        return reply("Não foi possível carregar o vídeo.");
    }

    await loli.sendMessage(from, {
        video: videoComer,
        gifPlayback: true,
        caption: `Você acabou de comer a(o) *@${mentionIdComer.split('@')[0]}*`,
        mentions: [mentionIdComer]
    }, { quoted: info }); // Alterado para usar 'info'
    break;

case 'matar':
case 'mata':
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modo brincadeira ativo. Fale com um admin ou, se você for, digite ${prefix}modobrincadeira 1`);
    if (!isGroup) return reply('Este comando só pode ser usado em grupos.');

    let targetMatar = budy.includes("@") ? args.join(" ").replace("@", "") + "@s.whatsapp.net" : sender;
    let suspMatar = `Você acabou de matar o(a) @${targetMatar.split('@')[0]} 😈👹`;
    const jrppMatar = await getBuffer(`${matei}`); // Certifique-se de que `matei` esteja definido

    await loli.sendMessage(from, {
        video: jrppMatar,
        gifPlayback: true,
        caption: suspMatar,
        mentions: [targetMatar]
    }, { quoted: info });
    break;


case 'dar':
    if (!isGroup) return reply('Este comando só pode ser usado em grupos.');

    // Obter a menção correta
    const mentionedDar = budy.includes("@") ? budy.match(/@\d+/g) : []; 
    let blamentionIdDar = mentionedDar.length > 0 ? mentionedDar[0].replace("@", "") + "@s.whatsapp.net" : sender;

    // Enviar mensagem com vídeo
    await loli.sendMessage(from, {
        video: { url: "https://telegra.ph/file/8d6c8af967fad0fe77ba8.mp4" },
        gifPlayback: true,
        caption: `Você deu com vontade na @${blamentionIdDar.split('@')[0]}, ela(e) até gozou.`,
        mentions: [blamentionIdDar]
    }, { quoted: info });
    break;
    
   case 'morder':
    if (!isGroup) return reply('Esse comando só pode ser usado em grupos.');
    if (!isModobn) return reply('Este comando só pode ser usado no modo brincadeira.');

    // Definindo a variável para o usuário mencionado ou o remetente
    let mentionIdMorder = budy.includes("@") ? args.join(" ").replace("@", "") + "@s.whatsapp.net" : sender;
    
    await loli.sendMessage(from, {
        video: { url: 'https://telegra.ph/file/75e4c0273be625a2363ce.mp4' },
        gifPlayback: true,
        caption: `Você acabou de dar uma mordida no(a) *@${mentionIdMorder.split('@')[0]}*`,
        mentions: [mentionIdMorder]
    }, { quoted: info }); // Alterado de selo para info
    break;

case 'carinho':
    if (!isGroup) return reply('Esse comando só pode ser usado em grupos.');
    if (!isModobn) return reply('Este comando só pode ser usado no modo brincadeira.');

    // Definindo a variável para o usuário mencionado ou o remetente
    let mentionIdCarinho = budy.includes("@") ? args.join(" ").replace("@", "") + "@s.whatsapp.net" : sender;
    
    await loli.sendMessage(from, {
        video: { url: 'https://telegra.ph/file/2b6b4f4e38214bd6164ce.mp4' },
        gifPlayback: true,
        caption: `Você acabou de dar um carinho no(a) *@${mentionIdCarinho.split('@')[0]}*`,
        mentions: [mentionIdCarinho]
    }, { quoted: info }); // Alterado de selo para info
    break;
    
case 'churrasco':
case 'açougue':  //by: its morais
    let picanha = Math.floor(Math.random() * 19) + 10;
    let contrafl = Math.floor(Math.random() * 10) + 17;
    let frangoassa = Math.floor(Math.random() * 15) + 20;
    let migilhon = Math.floor(Math.random() * 40) + 60;
    let resultFinal = picanha + contrafl + frangoassa + migilhon;
    
    reply(`Aguarde 9 segundos para sair os resultados das peças de carnes vendidas!`);
    await delay(9000);
    
    const logochurras = "https://telegra.ph/file/96a9f0a48bb9f81b30ede.jpg";
    loli.sendMessage(from, {
        image: { url: `${logochurras}` }, 
        caption: mess.barbecueResult(picanha, contrafl, frangoassa, migilhon, resultFinal) 
    }, { quoted: sasah });
    
    AdicionarSaldo(sender, resultFinal);
    break;

case 'lavar':
    // by sd modz
    if (!isGroup) return reply(`Esse comando só pode ser usado em grupos.`);
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);

    let mentionIdLavar;
    if (budy.includes("@")) {
        mentionIdLavar = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdLavar = sender;
    }

    const lavaLoucaMessage = `Ih, mano! O ${pushname} mandou o @${mentionIdLavar.split('@')[0]} lavar a louça, esse(a) preguiçoso(a)! 😬💦`;
    
    await loli.sendMessage(from, {
        video: { url: 'https://raw.githubusercontent.com/floxcloud/uploadsFlox/main/videos/1728153184856.mp4' },
        gifPlayback: true,
        caption: lavaLoucaMessage,
        mentions: [mentionIdLavar]
    }, { quoted: info });
    break;

case 'sentar':
    if (!isGroup) return reply(`Esse comando só pode ser usado em grupos.`);
    if (!isModobn) return reply(`Esse comando só pode ser usado no modo brincadeira. Use ${prefix}modobn`);
    
    let mentionIdSentar;
    if (budy.includes("@")) {
        mentionIdSentar = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdSentar = sender;
    }

    await loli.sendMessage(from, {
        video: { url: `https://telegra.ph/file/d695e05443043ff9a254d.mp4` }, 
        gifPlayback: true, 
        caption: `Você acabou de dar uma sentadinha no(a) *@${mentionIdSentar.split('@')[0]}*`, 
        mentions: [mentionIdSentar]
    }, { quoted: info });
    break;

case 'tirarft':
    if (!isGroup) return reply(`Esse comando só pode ser usado em grupos.`);
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);

    let mentionIdTirarFt;
    if (budy.includes("@")) {
        mentionIdTirarFt = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdTirarFt = sender;
    }

    await loli.sendMessage(from, {
        video: { url: `https://telegra.ph/file/0b2c64f03b9b916c0e2cb.mp4` }, 
        gifPlayback: true, 
        caption: `Você acabou de tirar a foto do(a) *@${mentionIdTirarFt.split('@')[0]}*`, 
        mentions: [mentionIdTirarFt]
    }, { quoted: info });
    break;

case 'apaixonar':
    if (!isGroup) return reply(`Esse comando só pode ser usado em grupos.`);
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);

    let mentionIdApaixonar;
    if (budy.includes("@")) {
        mentionIdApaixonar = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdApaixonar = sender;
    }

    await loli.sendMessage(from, {
        video: { url: `https://telegra.ph/file/d60f260b845760d823cfd.mp4` }, 
        gifPlayback: true, 
        caption: `Você acabou de apaixonar o(a) *@${mentionIdApaixonar.split('@')[0]}*`, 
        mentions: [mentionIdApaixonar]
    }, { quoted: info });
    break;
case 'abraçar':
case 'abracar':
    if (!isGroup) return reply(`Esse comando só pode ser usado em grupos.`);
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);

    let mentionIdAbracar;
    if (budy.includes("@")) {
        mentionIdAbracar = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdAbracar = sender;
    }

    await loli.sendMessage(from, {
        video: { url: `https://telegra.ph/file/c0d47a2ecae1055526db0.mp4` }, 
        gifPlayback: true, 
        caption: `Você acabou de abraçar o(a) *@${mentionIdAbracar.split('@')[0]}*`, 
        mentions: [mentionIdAbracar]
    }, { quoted: info });
    break;

case 'beijar':
    if (!isGroup) return reply(`Esse comando só pode ser usado em grupos.`);
    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);

    let mentionIdBeijar;
    if (budy.includes("@")) {
        mentionIdBeijar = args.join(" ").replace("@", "") + "@s.whatsapp.net";
    } else {
        mentionIdBeijar = sender;
    }

    await loli.sendMessage(from, {
        video: { url: `https://telegra.ph/file/c9b5ed858237ebc9f7356.mp4` }, 
        gifPlayback: true, 
        caption: `Você acabou de beijar o(a) *@${mentionIdBeijar.split('@')[0]}*`, 
        mentions: [mentionIdBeijar]
    }, { quoted: info });
    break;



case 'interro':
case 'lolinopc':
case 'lolifofa':
case 'lolifofaa':
case 'bolsonaro':
case 'comunismo':
case 'affect':
case 'bnw':
case 'circle':
case 'blur':
case 'gay':
case 'beautiful':
case 'del':
case 'invert':
case 'facepalm':
case 'jail':
case 'dither':
case 'rip':
case 'magik':
case 'rotate':
case 'pixelate':
case 'sepia':
case 'trash':
case 'wanted':
case 'wasted':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  try {
    if (isQuotedImage) {
      boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info;
      const fetch = require('node-fetch');
      const FormData = require('form-data');
      const fs = require('fs');

      async function uploadImageToTelegraph(imageBuffer) {
        const form = new FormData();
        form.append('file', imageBuffer, { filename: 'image.jpg' });

        const response = await fetch('https://telegra.ph/upload', {
          method: 'POST',
          body: form,
        });
        const data = await response.json();
        if (data && data[0] && data[0].src) {
          return 'https://telegra.ph' + data[0].src;
        } else {
          throw new Error('Failed to retrieve the image URL from the response.');
        }
      }

      const owgi = await getFileBuffer(boij, "image");
      const imageUrl = await uploadImageToTelegraph(owgi);

      // Define a URL da API para o comando atual
      const url = `https://tohka.tech/api/canvas/${command}?img=${encodeURIComponent(imageUrl)}&apikey=gxhu6`;

      reply(`🔄 Processando a imagem ${command}...`);

      // Envia a imagem para a API
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'image/png'  // Ajuste conforme o tipo de imagem retornado pela API
        }
      });

      if (!response.ok) throw new Error(`Erro na resposta da API ${command}`);
      const imageBuffer = await response.buffer();

      await loli.sendMessage(from, { image: imageBuffer, caption: `Imagem ${command} gerada com sucesso!` }, { quoted: info });

    } else {
      reply('🚨 Por favor, marque uma foto para aplicar o efeito.');
    }
  } catch (error) {
    console.error(`Erro ao processar a imagem ${command}:`, error);
    reply("🚨 Não foi possível processar a imagem. Tente novamente mais tarde.");
  }
  break;
  
case 'xvdownload': {
    try {
        if (!q.trim()) return reply(`- Exemplo: ${prefix}xvdownload link_do_video`);

        const response = await fetch(`https://tohka.tech/api/dl/xvideos?link=${encodeURIComponent(q)}&apikey=gxhu6`);
        if (!response.ok) return reply("Erro ao buscar os dados do Xvideos.");

        const data = await response.json();

        if (data.status !== 'operando') return reply("Não foi possível processar o vídeo no momento.");

        const videoInfo = data.resultado[0];

        const message = `*Título:* ${videoInfo.titulo}\n` +
                        `*Descrição:* ${videoInfo.descricao}\n` +
                        `*Duração:* ${videoInfo.duracao}\n` +
                        `*Data de Publicação:* ${new Date(videoInfo.dataDePublicacao).toLocaleDateString()}`;

        // Envia o vídeo com as informações
        await loli.sendMessage(from, { 
            video: { url: videoInfo.download }, 
            mimetype: "video/mp4", 
            caption: message 
        }, { quoted: info }).catch(e => {
            console.log('Erro ao enviar o vídeo:', e);
            return reply("Erro ao tentar baixar o vídeo.");
        });

    } catch (e) {
        console.log('Erro no bloco try:', e);
        return reply("Não foi possível baixar ou encontrar esse vídeo no Xvideos.");
    }
}
break;

case 'xnxxdownload': {
    try {
        if (!q.trim()) return reply(`- Exemplo: ${prefix}xnxxdownload link_do_video`);

        const response = await fetch(`https://tohka.tech/api/dl/xnxx?link=${encodeURIComponent(q)}&apikey=gxhu6`);
        if (!response.ok) return reply("Erro ao buscar os dados do XNXX.");

        const data = await response.json();

        if (data.status !== 'operando') return reply("Não foi possível processar o vídeo no momento.");

        const videoInfo = data.resultado[0];

        const message = `*Título:* ${videoInfo.titulo}\n` +
                        `*Descrição:* ${videoInfo.descricao}\n` +
                        `*Duração:* ${videoInfo.duracao}\n` +
                        `*Visualizações:* ${videoInfo.visualizacoes}\n` +
                        `*Data de Publicação:* ${new Date(videoInfo.dataDePublicacao).toLocaleDateString()}`;

        // Envia o vídeo com as informações e o thumbnail
        await loli.sendMessage(from, { 
            video: { url: videoInfo.urlDoVideo }, 
            mimetype: "video/mp4", 
            caption: message, 
            thumbnail: { url: videoInfo.thumbnail }
        }, { quoted: info }).catch(e => {
            console.log('Erro ao enviar o vídeo:', e);
            return reply("Erro ao tentar baixar o vídeo.");
        });

    } catch (e) {
        console.log('Erro no bloco try:', e);
        return reply("Não foi possível baixar ou encontrar esse vídeo no XNXX.");
    }
}
break;

  case 'xvideos':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  const urlXvideos = 'http://tohka.tech/api/pesquisa/xvideos?nome=ia&apikey=gxhu6';
  reply("🔄 Realizando a pesquisa no Xvideos...");

  try {
    const responseXvideos = await fetch(urlXvideos);
    if (!responseXvideos.ok) throw new Error('Erro na resposta da API Xvideos');
    const resultXvideos = await responseXvideos.json();

    let messageXvideos = '🔍 Resultados da pesquisa no Xvideos:\n\n';
    if (Array.isArray(resultXvideos) && resultXvideos.length) {
      resultXvideos.forEach(item => {
        messageXvideos += `- Título: ${item.titulo || 'Sem título'}\n`;
        messageXvideos += `  URL: ${item.link || 'Não disponível'}\n`;
        messageXvideos += `  Capa: ${item.capa || 'Não disponível'}\n`;
        messageXvideos += `  Qualidade: ${item.qualidade || 'Não disponível'}\n`;
        messageXvideos += `  Canal: ${item.canal || 'Não disponível'}\n\n`;
      });
    } else {
      messageXvideos += 'Nenhum resultado encontrado.\n';
    }

    await loli.sendMessage(sender, { text: messageXvideos }, { quoted: info });

  } catch (error) {
    console.error("Erro ao realizar a pesquisa no Xvideos:", error);
    reply("🚨 Não foi possível realizar a pesquisa. Tente novamente mais tarde.");
  }
  break;

case 'pornogratis':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  const urlPornogratis = 'https://tohka.tech/api/pesquisa/pornogratis?nome=orgasm&apikey=gxhu6';
  reply("🔄 Realizando a pesquisa no Pornogratis...");

  try {
    const responsePornogratis = await fetch(urlPornogratis);
    if (!responsePornogratis.ok) throw new Error('Erro na resposta da API Pornogratis');
    const resultPornogratis = await responsePornogratis.json();

    let messagePornogratis = '🔍 Resultados da pesquisa no Pornogratis:\n\n';
    if (Array.isArray(resultPornogratis) && resultPornogratis.length) {
      resultPornogratis.forEach(item => {
        messagePornogratis += `- Nome: ${item.nome || 'Sem título'}\n`;
        messagePornogratis += `  URL: ${item.link || 'Não disponível'}\n`;
        messagePornogratis += `  Imagem: ${item.img || 'Não disponível'}\n\n`;
      });
    } else {
      messagePornogratis += 'Nenhum resultado encontrado.\n';
    }

    await loli.sendMessage(sender, { text: messagePornogratis }, { quoted: info });

  } catch (error) {
    console.error("Erro ao realizar a pesquisa no Pornogratis:", error);
    reply("🚨 Não foi possível realizar a pesquisa. Tente novamente mais tarde.");
  }
  break;

case 'pornohub':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  const urlPornhubsrc = 'https://tohka.tech/api/pesquisa/pornhubsrc?nome=orgasm&apikey=gxhu6';
  reply("🔄 Realizando a pesquisa no Pornhubsrc...");

  try {
    const responsePornhubsrc = await fetch(urlPornhubsrc);
    if (!responsePornhubsrc.ok) throw new Error('Erro na resposta da API Pornhubsrc');
    const resultPornhubsrc = await responsePornhubsrc.json();

    let messagePornhubsrc = '🔍 Resultados da pesquisa no Pornhubsrc:\n\n';
    if (Array.isArray(resultPornhubsrc) && resultPornhubsrc.length) {
      resultPornhubsrc.forEach(item => {
        messagePornhubsrc += `- Título: ${item.titulo || 'Sem título'}\n`;
        messagePornhubsrc += `  Duração: ${item.duração || 'Não disponível'}\n`;
        messagePornhubsrc += `  Canal: ${item.canal || 'Não disponível'}\n`;
        messagePornhubsrc += `  Visualizações: ${item.visualizações || 'Não disponível'}\n`;
        messagePornhubsrc += `  Likes: ${item.likes || 'Não disponível'}\n`;
        messagePornhubsrc += `  URL: ${item.link2 || 'Não disponível'}\n`;
        messagePornhubsrc += `  Imagem: ${item.img || 'Não disponível'}\n\n`;
      });
    } else {
      messagePornhubsrc += 'Nenhum resultado encontrado.\n';
    }

    await loli.sendMessage(sender, { text: messagePornhubsrc }, { quoted: info });

  } catch (error) {
    console.error("Erro ao realizar a pesquisa no Pornhubsrc:", error);
    reply("🚨 Não foi possível realizar a pesquisa. Tente novamente mais tarde.");
  }
  break;

case 'assistirhentai':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  const urlAssistirhentai = 'https://tohka.tech/api/pesquisa/assistirhentai?nome=neko&apikey=gxhu6';
  reply("🔄 Realizando a pesquisa no Assistir Hentai...");

  try {
    const responseAssistirhentai = await fetch(urlAssistirhentai);
    if (!responseAssistirhentai.ok) throw new Error('Erro na resposta da API Assistir Hentai');
    const resultAssistirhentai = await responseAssistirhentai.json();

    let messageAssistirhentai = '🔍 Resultados da pesquisa no Assistir Hentai:\n\n';
    if (Array.isArray(resultAssistirhentai) && resultAssistirhentai.length) {
      resultAssistirhentai.forEach(item => {
        messageAssistirhentai += `- Nome: ${item.nome || 'Sem título'}\n`;
        messageAssistirhentai += `  Tipo: ${item.tipo || 'Não disponível'}\n`;
        messageAssistirhentai += `  Total de Episódios: ${item.total_ep || 'Não disponível'}\n`;
        messageAssistirhentai += `  Data de Publicação: ${item.data_up.trim() || 'Não disponível'}\n`;
        messageAssistirhentai += `  URL: ${item.link || 'Não disponível'}\n`;
        messageAssistirhentai += `  Imagem: ${item.img || 'Não disponível'}\n\n`;
      });
    } else {
      messageAssistirhentai += 'Nenhum resultado encontrado.\n';
    }

    await loli.sendMessage(sender, { text: messageAssistirhentai }, { quoted: info });

  } catch (error) {
    console.error("Erro ao realizar a pesquisa no Assistir Hentai:", error);
    reply("🚨 Não foi possível realizar a pesquisa. Tente novamente mais tarde.");
  }
  break;

case 'hentaistuber':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  const urlHentaistuber = 'https://tohka.tech/api/pesquisa/hentaistuber?nome=neko&apikey=gxhu6';
  reply("🔄 Realizando a pesquisa no Hentaistuber...");

  try {
    const responseHentaistuber = await fetch(urlHentaistuber);
    if (!responseHentaistuber.ok) throw new Error('Erro na resposta da API Hentaistuber');
    const resultHentaistuber = await responseHentaistuber.json();

    let messageHentaistuber = '🔍 Resultados da pesquisa no Hentaistuber:\n\n';
    if (Array.isArray(resultHentaistuber) && resultHentaistuber.length) {
      resultHentaistuber.forEach(item => {
        messageHentaistuber += `- Título: ${item.titulo || 'Sem título'}\n`;
        messageHentaistuber += `  Imagem: ${item.img || 'Não disponível'}\n`;
        messageHentaistuber += `  Link: ${item.link || 'Não disponível'}\n\n`;
      });
    } else {
      messageHentaistuber += 'Nenhum resultado encontrado.\n';
    }

    await loli.sendMessage(sender, { text: messageHentaistuber }, { quoted: info });

  } catch (error) {
    console.error("Erro ao realizar a pesquisa no Hentaistuber:", error);
    reply("🚨 Não foi possível realizar a pesquisa. Tente novamente mais tarde.");
  }
  break;
case 'hentaiword':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  const urlHentaiword = 'https://tohka.tech/api/hentai/hentaiword?nome=hentai&apikey=gxhu6';
  reply("🔄 Realizando a pesquisa no Hentaiword...");

  try {
    const responseHentaiword = await fetch(urlHentaiword);
    if (!responseHentaiword.ok) throw new Error('Erro na resposta da API Hentaiword');
    const resultHentaiword = await responseHentaiword.json();

    let messageHentaiword = '🔍 Resultados da pesquisa no Hentaiword:\n\n';
    if (Array.isArray(resultHentaiword) && resultHentaiword.length) {
      resultHentaiword.forEach(item => {
        messageHentaiword += `- Título: ${item.titulo || 'Sem título'}\n`;
        messageHentaiword += `  Imagem: ${item.imagem ? `https:${item.imagem}` : 'Não disponível'}\n`;
        messageHentaiword += `  Likes: ${item.likes || 'Não disponível'}\n`;
        messageHentaiword += `  Ameis: ${item.ameis || 'Não disponível'}\n\n`;
      });
    } else {
      messageHentaiword += 'Nenhum resultado encontrado.\n';
    }

    await loli.sendMessage(sender, { text: messageHentaiword }, { quoted: info });

  } catch (error) {
    console.error("Erro ao realizar a pesquisa no Hentaiword:", error);
    reply("🚨 Não foi possível realizar a pesquisa. Tente novamente mais tarde.");
  }
  break;
case "play5":
case "ytbemp3":
{
  if (!text) {
    return loli.sendMessage(
      from,
      { text: `Por favor, forneça o link do vídeo do YouTube. Exemplo: ${prefix}ytbmp3 link_do_video` },
      { quoted: info }
    );
  }

  try {
    // Solicitar o áudio diretamente da API
    const response = await axios.get(`https://tohka.tech/api/dl/ytmp3v2?link=${encodeURIComponent(text)}&apikey=gxhu6`, { responseType: 'arraybuffer' });
    const audioBuffer = response.data.resultado.audio;

    // Verificar se o buffer de áudio está correto
    if (!audioBuffer || audioBuffer.length === 0) {
      return loli.sendMessage(from, { text: "Não foi possível obter o áudio solicitado." }, { quoted: info });
    }

    // Enviar o áudio baixado
    await loli.sendMessage(
      from,
      {
        audio: Buffer.from(audioBuffer),  // Certifique-se de que o áudio está sendo enviado como Buffer
        mimetype: 'audio/mpeg',  // Use o tipo MIME correto para MP3
        fileName: `audio.mp3`,
        ptt: true
      },
      { quoted: info }
    );

  } catch (error) {
    console.error('Erro ao baixar e enviar o áudio:', error);
    loli.sendMessage(from, { text: "Ocorreu um erro ao processar a solicitação." }, { quoted: info });
  }
}
break;
case "play4":
case "ytbemp4":
{
  if (!text) {
    return loli.sendMessage(
      from,
      { text: `Por favor, forneça o link do vídeo do YouTube. Exemplo: ${prefix}ytbmp4 link_do_video` },
      { quoted: info }
    );
  }

  try {
    // Solicitar o vídeo diretamente da API
    const response = await axios.get(`https://tohka.tech/api/dl/ytmp4v2?link=${encodeURIComponent(text)}&apikey=gxhu6`, { responseType: 'arraybuffer' });
    const videoBuffer = response.data.resultado.video;

    // Verificar se o buffer de vídeo está correto
    if (!videoBuffer || videoBuffer.length === 0) {
      return loli.sendMessage(from, { text: "Não foi possível obter o vídeo solicitado." }, { quoted: info });
    }

    // Enviar o vídeo baixado
    await loli.sendMessage(
      from,
      {
        video: Buffer.from(videoBuffer),  // Certifique-se de que o vídeo está sendo enviado como Buffer
        mimetype: 'video/mp4',
        fileName: `video.mp4`
      },
      { quoted: info }
    );

  } catch (error) {
    console.error('Erro ao baixar e enviar o vídeo:', error);
    loli.sendMessage(from, { text: "Ocorreu um erro ao processar a solicitação." }, { quoted: info });
  }
}
break;

case "play2": case "play_audio":
{
  if (!text) {
    return loli.sendMessage(
      from,
      { text: `Por favor, forneça o nome da música. Exemplo: ${prefix}play_rapido nome_da_musica` },
      { quoted: info }
    );
  }

  try {
    // Solicitar o áudio diretamente da API
    const response = await axios.get(`https://tohka.tech/api/dl/play2?nome=${encodeURIComponent(text)}&apikey=gxhu6`, { responseType: 'arraybuffer' });
    const audioBuffer = response.data;

    // Verificar se o buffer de áudio está correto
    if (!audioBuffer || audioBuffer.length === 0) {
      return loli.sendMessage(from, { text: "Não foi possível obter o áudio solicitado." }, { quoted: info });
    }

    // Enviar o áudio baixado
    await loli.sendMessage(
      from,
      {
        audio: Buffer.from(audioBuffer),  // Certifique-se de que o áudio está sendo enviado como Buffer
        mimetype: 'audio/mpeg',  // Use o tipo MIME correto para MP3
        fileName: `${text}.mp3`,
        ptt: true
      },
      { quoted: info }
    );

  } catch (error) {
    console.error('Erro ao baixar e enviar o áudio:', error);
    loli.sendMessage(from, { text: "Ocorreu um erro ao processar a solicitação." }, { quoted: info });
  }
}
break;
case "play_video":
case "play3":
{
  if (!text) {
    return loli.sendMessage(
      from,
      { text: `Por favor, forneça o nome do vídeo. Exemplo: ${prefix}playvid nome_do_video` },
      { quoted: info }
    );
  }

  try {
    // Solicitar o vídeo diretamente da API
    const response = await axios.get(`https://tohka.tech/api/dl/playv2?nome=${encodeURIComponent(text)}&qualidade=360p&apikey=gxhu6`, { responseType: 'arraybuffer' });
    const videoBuffer = response.data;

    // Verificar se o buffer de vídeo está correto
    if (!videoBuffer || videoBuffer.length === 0) {
      return loli.sendMessage(from, { text: "Não foi possível obter o vídeo solicitado." }, { quoted: info });
    }

    // Enviar o vídeo baixado
    await loli.sendMessage(
      from,
      {
        video: Buffer.from(videoBuffer),  // Certifique-se de que o vídeo está sendo enviado como Buffer
        mimetype: 'video/mp4',
        fileName: `${text}.mp4`
      },
      { quoted: info }
    );

  } catch (error) {
    console.error('Erro ao baixar e enviar o vídeo:', error);
    loli.sendMessage(from, { text: "Ocorreu um erro ao processar a solicitação." }, { quoted: info });
  }
}
break;
case 'frases': {
    try {
        if (!q.trim()) return reply(`- Exemplo: ${prefix}frases luz`);

        const response = await fetch(`https://world-ecletix.onrender.com/api/pensador?nome=${encodeURIComponent(q)}`);
        if (!response.ok) return reply("Erro ao buscar as frases.");

        const data = await response.json();

        if (!data.length) return reply("Nenhuma frase encontrada.");

        let message = `*Frases sobre ${q}:*\n\n`;

        data.forEach((fraseInfo) => {
            message += `*Frase:* ${fraseInfo.frase}\n` +
                       `*Compartilhamentos:* ${fraseInfo.compartilhamentos}\n` +
                       `*Imagem:* ${fraseInfo.image}\n\n`;
        });

        return reply(message.trim());

    } catch (e) {
        console.log('Erro no bloco try:', e);
        return reply("Erro ao tentar buscar as frases.");
    }
}
break;
case 'pensador': {
    try {
        const response = await fetch(`https://world-ecletix.onrender.com/api/frasespensador`);
        if (!response.ok) return reply("Erro ao buscar as frases.");

        const data = await response.json();

        if (!data.length) return reply("Nenhuma frase encontrada.");

        let message = "*Frases Inspiradoras:*\n\n";

        data.forEach((frase, index) => {
            message += `*${index + 1}.* ${frase}\n\n`;
        });

        return reply(message.trim());

    } catch (e) {
        console.log('Erro no bloco try:', e);
        return reply("Erro ao tentar buscar as frases.");
    }
}
break;
case 'biblia': case 'bíblia': case 'Bíblia': case 'Biblia':{
    try {
        if (!q.trim()) return reply(`- Exemplo: ${prefix}biblia salmo 91`);

        const response = await fetch(`https://tohka.tech/api/pesquisa/biblia?versiculo=${encodeURIComponent(q)}&apikey=gxhu6`);
        if (!response.ok) return reply("Erro ao buscar os versículos da Bíblia.");

        const data = await response.json();

        if (!data.length) return reply("Nenhum versículo encontrado.");

        const versiculoInfo = data[0];

        const message = `*Bíblia:* ${versiculoInfo.bible_name}\n` +
                        `*Versículo:* ${versiculoInfo.versiculo.replace(/\u0003|\u0002/g, '')}`;

        return reply(message);

    } catch (e) {
        console.log('Erro no bloco try:', e);
        return reply("Erro ao tentar buscar o versículo bíblico.");
    }
}
break;
  case 'twitter':
  if (!q) return reply("Você precisa fornecer o link do post do Twitter.");
  try {
    const { data } = await axios.get(`http://tohka.tech/api/dl/twitter?link=${encodeURIComponent(q)}&apikey=gxhu6`);
    const { url } = data;
    if (!url) {
      return reply("Não foi possível baixar a postagem do Twitter.");
    }
    conn.sendMessage(from, { image: { url: url } }, {quoted: info});
  } catch (error) {
    console.error("Erro ao baixar postagem do Twitter:", error);
    return reply("Ocorreu um erro ao processar a solicitação.");
  }
  break;
  case 'soundcloud':
  if (!q) return reply("Você precisa fornecer o nome da música ou o link do SoundCloud.");
  try {
    const { data } = await axios.get(`https://tohka.tech/api/dl/sound?link=${encodeURIComponent(q)}&apikey=gxhu6`);
    const { url } = data;
    if (!url) {
      return reply("Não foi possível baixar a música do SoundCloud.");
    }
    conn.sendMessage(from, { audio: { url: url }, mimetype: 'audio/mp4', ptt:true}, {quoted: info});
  } catch (error) {
    console.error("Erro ao baixar música do SoundCloud:", error);
    return reply("Ocorreu um erro ao processar a solicitação.");
  }
  break;
  case 'mediafire_link':
  if (!q) return reply("Você precisa fornecer o link do arquivo do Mediafire.");
  try {
    const { data } = await axios.get(`https://tohka.tech/api/dl/mediafire?link=${encodeURIComponent(q)}&apikey=gxhu6`);
    const { url } = data;
    if (!url) {
      return reply("Não foi possível baixar o arquivo do Mediafire.");
    }
    if (mediaType === "video") {
      loli.sendMessage(from, { video: { url: url }, caption: `TOME! ${mediaType.toUpperCase()}` }, { quoted: info });
    } else if (mediaType === "image") {
      loli.sendMessage(from, { image: { url: url }, caption: `TOME! ${mediaType.toUpperCase()}` }, { quoted: info });
    }
  } catch (error) {
    console.error("Erro ao baixar arquivo do Mediafire:", error);
    return reply("Ocorreu um erro ao processar a solicitação.");
  }
  break;
 
case 'hentai_neko':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Envia uma mensagem informando que a imagem está sendo gerada
  reply("🔄 Gerando a imagem...");

  try {
    // Faz a requisição para a API e obtém a imagem como um buffer
    const response = await fetch('https://tohka.tech/api/hentai/random?categoria=neko&apikey=gxhu6');

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
    }

    // Obtém a imagem diretamente da resposta
    const imageBuffer = await response.buffer();

    // Envia a imagem ao usuário
    loli.sendMessage(sender, { image: imageBuffer, caption: 'Aqui está a imagem que você pediu!' }, { quoted: info });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;
case 'hentai_ass':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Envia uma mensagem informando que a imagem está sendo gerada
  reply("🔄 Gerando a imagem...");

  try {
    // Faz a requisição para a API e obtém a imagem como um buffer
    const response = await fetch('https://tohka.tech/api/hentai/ass?apikey=gxhu6');

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
    }

    // Obtém a imagem diretamente da resposta
    const imageBuffer = await response.buffer();

    // Envia a imagem ao usuário
    loli.sendMessage(sender, { image: imageBuffer, caption: 'Aqui está a imagem que você pediu!' }, { quoted: info });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;
  case 'hentaizinho':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Envia uma mensagem informando que a imagem está sendo gerada
  reply("🔄 Gerando a imagem...");

  try {
    // Faz a requisição para a API e obtém a imagem como um buffer
    const response = await fetch('https://tohka.tech/api/hentai/hentai?apikey=gxhu6');

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
    }

    // Obtém a imagem diretamente da resposta
    const imageBuffer = await response.buffer();

    // Envia a imagem ao usuário
    loli.sendMessage(sender, { image: imageBuffer, caption: 'Aqui está a imagem que você pediu!' }, { quoted: info });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;
  case 'hentai_milf':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Envia uma mensagem informando que a imagem está sendo gerada
  reply("🔄 Gerando a imagem...");

  try {
    // Faz a requisição para a API e obtém a imagem como um buffer
    const response = await fetch('https://tohka.tech/api/hentai/milf?apikey=gxhu6');

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
    }

    // Obtém a imagem diretamente da resposta
    const imageBuffer = await response.buffer();

    // Envia a imagem ao usuário
    loli.sendMessage(sender, { image: imageBuffer, caption: 'Aqui está a imagem que você pediu!' }, { quoted: info });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;
  case 'hentai_oral':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Envia uma mensagem informando que a imagem está sendo gerada
  reply("🔄 Gerando a imagem...");

  try {
    // Faz a requisição para a API e obtém a imagem como um buffer
    const response = await fetch('https://tohka.tech/api/hentai/oral?apikey=gxhu6');

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
    }

    // Obtém a imagem diretamente da resposta
    const imageBuffer = await response.buffer();

    // Envia a imagem ao usuário
    loli.sendMessage(sender, { image: imageBuffer, caption: 'Aqui está a imagem que você pediu!' }, { quoted: info });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;
  case 'hentai_aleatorio':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Envia uma mensagem informando que a imagem está sendo gerada
  reply("🔄 Gerando a imagem...");

  try {
    // Faz a requisição para a API e obtém a imagem como um buffer
    const response = await fetch('https://tohka.tech/api/hentai/random?categoria=neko&apikey=gxhu6');

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
    }

    // Obtém a imagem diretamente da resposta
    const imageBuffer = await response.buffer();

    // Envia a imagem ao usuário
    loli.sendMessage(sender, { image: imageBuffer, caption: 'Aqui está a imagem que você pediu!' }, { quoted: info });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;
  case 'hentai_paizuri':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Envia uma mensagem informando que a imagem está sendo gerada
  reply("🔄 Gerando a imagem...");

  try {
    // Faz a requisição para a API e obtém a imagem como um buffer
    const response = await fetch('https://tohka.tech/api/hentai/paizuri?apikey=gxhu6');

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
    }

    // Obtém a imagem diretamente da resposta
    const imageBuffer = await response.buffer();

    // Envia a imagem ao usuário
    loli.sendMessage(sender, { image: imageBuffer, caption: 'Aqui está a imagem que você pediu!' }, { quoted: info });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;
  case 'hentai_ecchi':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Envia uma mensagem informando que a imagem está sendo gerada
  reply("🔄 Gerando a imagem...");

  try {
    // Faz a requisição para a API e obtém a imagem como um buffer
    const response = await fetch('https://tohka.tech/api/hentai/ecchi?apikey=gxhu6');

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
    }

    // Obtém a imagem diretamente da resposta
    const imageBuffer = await response.buffer();

    // Envia a imagem ao usuário
    loli.sendMessage(sender, { image: imageBuffer, caption: 'Aqui está a imagem que você pediu!' }, { quoted: info });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;
  case 'hentai_ero':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');

  // Envia uma mensagem informando que a imagem está sendo gerada
  reply("🔄 Gerando a imagem...");

  try {
    // Faz a requisição para a API e obtém a imagem como um buffer
    const response = await fetch('https://tohka.tech/api/hentai/ero?apikey=gxhu6');

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
    }

    // Obtém a imagem diretamente da resposta
    const imageBuffer = await response.buffer();

    // Envia a imagem ao usuário
    loli.sendMessage(sender, { image: imageBuffer, caption: 'Aqui está a imagem que você pediu!' }, { quoted: info });

  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
  }
  break;
                case "cosplay":
                case "waifu":
                case "waifu2":
                case "shota":
                case "loli":
                case "yotsuba":
                case "shinomiya":
                case "yumeko":
                case "tejina":
                case "chiho":
                case "shizuka":
                case "boruto":
                case "kagori":
                case "kaga":
                case "kotori":
                case "mikasa":
                case "akiyama":
                case "hinata":
                case "minato":
                case "naruto":
                case "nezuko":
                case "yuki":
                case "hestia":
                case "emilia":
                case "itachi":
                case "elaina":
                case "madara":
                case "sasuke":
                case "deidara":
                case "sakura":
                case "tsunade":
  // Envia uma mensagem inicial informando que a busca está sendo processada
  loli.sendMessage(sender, { text: `🔄 Processando sua solicitação, ${pushname}. Por favor, aguarde um momento...` });

  try {
    // Envia uma reação para indicar que o processamento está em andamento
    loli.sendMessage(sender, { react: { text: '🕚', key: info.key } });

    fetch(encodeURI(`https://clover-t-bot-r0wt.onrender.com/nime/${command}?username=comefemea&key=768934`))
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("API Response:", data); // Log da resposta da API para depuração
        var resultado = data.url;
        if (!resultado) {
          throw new Error("URL da imagem não encontrada na resposta da API");
        }

        // Configuração da mensagem com a imagem
        let buttonMessage4 = {
          image: { url: resultado },
          caption: `🏕 Olá ${pushname}, aqui está sua imagem 🎲`,
          footer: '',
          headerType: 4
        };

        // Envia a mensagem com a imagem
        loli.sendMessage(sender, buttonMessage4, { quoted: info })
          .catch(err => {
            console.error("Erro ao enviar a mensagem:", err); // Adiciona log de erro ao enviar mensagem
            loli.sendMessage(sender, { text: "🚨 Não foi possível enviar a imagem. Tente novamente mais tarde." });
          });
      })
      .catch(err => {
        console.error("Erro ao buscar a imagem:", err); // Adiciona log de erro ao buscar imagem
        loli.sendMessage(sender, { text: "🚨 Não foi possível encontrar a imagem. Tente novamente mais tarde." });
      });
  } catch (e) {
    console.error("Erro no bloco try:", e); // Adiciona log de erro no bloco try
    loli.sendMessage(sender, { text: "🚨 Não foi possível encontrar a foto. Tente novamente mais tarde." });
  }
  break;
                case 'ahegao':
                case 'ass':
                case 'bdsm':
                case 'blowjob':
                case 'cuckold':
                case 'cum':
                case 'ero':
                case 'kasedaiki':
                case 'femdom':
                case 'foot':
                case 'gangbang':
                case 'glasses':
                case 'jahy':
                case 'manga':
                case 'masturbation':
                case 'neko':
                case 'orgy':
                case 'panties':
                case 'pussy':
                case 'neko2':
                case "neko":
                case 'tentacles':
                case 'thighs':
                case 'yuri':
                case 'zettai':
  // Envia uma mensagem inicial informando que a busca está sendo processada
  loli.sendMessage(sender, { text: `🔄 Processando sua solicitação, ${pushname}. Por favor, aguarde um momento...` });

  try {
    // Envia uma reação para indicar que o processamento está em andamento
    loli.sendMessage(sender, { react: { text: '🕚', key: info.key } });

    fetch(encodeURI(`https://clover-t-bot-r0wt.onrender.com/nsfw/${command}?username=comefemea&key=768934`))
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("API Response:", data); // Log da resposta da API para depuração
        var resultado = data.url;
        if (!resultado) {
          throw new Error("URL da imagem não encontrada na resposta da API");
        }

        // Configuração da mensagem com a imagem
        let buttonMessage4 = {
          image: { url: resultado },
          caption: `🏕 Olá ${pushname}, aqui está sua imagem 🎲`,
          footer: '',
          headerType: 4
        };

        // Envia a mensagem com a imagem
        loli.sendMessage(sender, buttonMessage4, { quoted: info })
          .catch(err => {
            console.error("Erro ao enviar a mensagem:", err); // Adiciona log de erro ao enviar mensagem
            loli.sendMessage(sender, { text: "🚨 Não foi possível enviar a imagem. Tente novamente mais tarde." });
          });
      })
      .catch(err => {
        console.error("Erro ao buscar a imagem:", err); // Adiciona log de erro ao buscar imagem
        loli.sendMessage(sender, { text: "🚨 Não foi possível encontrar a imagem. Tente novamente mais tarde." });
      });
  } catch (e) {
    console.error("Erro no bloco try:", e); // Adiciona log de erro no bloco try
    loli.sendMessage(sender, { text: "🚨 Não foi possível encontrar a foto. Tente novamente mais tarde." });
  }
  break;
case "tiktok_audio":
{
  if (!text) {
    return loli.sendMessage(
      from,
      { text: `Por favor, forneça o link do vídeo TikTok. Exemplo: ${prefix}tiktok_audio https://www.tiktok.com/@granitayt/video/7383381752024272133` },
      { quoted: info }
    );
  }

  try {
    // Solicitar o áudio diretamente da API
    const response = await axios.get(`https://tohka.tech/api/dl/tiktok?link=${encodeURIComponent(text)}&apikey=gxhu6`);
    const result = response.data.resultado;

    // Verificar se a resposta contém a URL do áudio
    if (!result || !result.data || !result.data.music) {
      return loli.sendMessage(from, { text: "Não foi possível obter o áudio do TikTok." }, { quoted: info });
    }

    // Extrair a URL do áudio
    const audioUrl = result.data.music;

    // Baixar o áudio do link
    const { data: audioBuffer } = await axios.get(audioUrl, { responseType: 'arraybuffer' });

    // Enviar o áudio baixado
    await loli.sendMessage(
      from,
      {
        audio: Buffer.from(audioBuffer),  // Certifique-se de que o áudio está sendo enviado como Buffer
        mimetype: 'audio/mpeg',
        fileName: `audio.mp3`,
        ptt: true
      },
      { quoted: info }
    );

  } catch (error) {
    console.error('Erro ao baixar e enviar o áudio:', error);
    loli.sendMessage(from, { text: "Ocorreu um erro ao processar a solicitação." }, { quoted: info });
  }
}
break;
case "tiktok_video":
{
  if (!text) {
    return loli.sendMessage(
      from,
      { text: `Por favor, forneça o link do vídeo TikTok. Exemplo: ${prefix}tiktok_video https://www.tiktok.com/@granitayt/video/7383381752024272133` },
      { quoted: info }
    );
  }

  try {
    // Solicitar o vídeo diretamente da API
    const response = await axios.get(`https://tohka.tech/api/dl/tiktok?link=${encodeURIComponent(text)}&apikey=gxhu6`);
    const result = response.data.resultado;

    // Verificar se a resposta contém a URL do vídeo
    if (!result || !result.data || !result.data.play) {
      return loli.sendMessage(from, { text: "Não foi possível obter o vídeo do TikTok." }, { quoted: info });
    }

    // Extrair a URL do vídeo
    const videoUrl = result.data.play;

    // Baixar o vídeo do link
    const { data: videoBuffer } = await axios.get(videoUrl, { responseType: 'arraybuffer' });

    // Enviar o vídeo baixado
    await loli.sendMessage(
      from,
      {
        video: Buffer.from(videoBuffer),  // Certifique-se de que o vídeo está sendo enviado como Buffer
        mimetype: 'video/mp4',
        fileName: `video.mp4`
      },
      { quoted: info }
    );

  } catch (error) {
    console.error('Erro ao baixar e enviar o vídeo:', error);
    loli.sendMessage(from, { text: "Ocorreu um erro ao processar a solicitação." }, { quoted: info });
  }
}
break;
case "tiktokvd": {
    if (q.length < 1) return reply("Por favor, coloque o link do vídeo após o comando.");
    const url = q;
    const apiUrl = `https://clover-t-bot.onrender.com/download/tiktok?url=${url}&key=768934&username=comefemea`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.videoSemWt) {
          loli.sendMessage(from, {
            video: { url: data.videoSemWt },
            mimetype: 'video/mp4'
          });
        } else {
          return reply("Não foi possível obter o vídeo. Verifique o link e tente novamente.");
        }
      })
      .catch(error => {
        console.error(error);
        return reply("Ocorreu um erro ao processar o pedido. Tente novamente mais tarde.");
      });
} 
break;
case 'wallpaper1': 
  if (!isPremium) return reply('[⚙️️]comando so pra usuários vip');
  reply("「🐸」ja to enviando no teu pv"); 
  google = await fetchJson(`https://clover-t-bot-r0wt.onrender.com/wallpaper/satanic?key=768934&username=comefemea`);
  loli.sendMessage(sender, { image: { url: google.url }}, { quoted: info });
  break;

case 'wallpaper2': 
  if (!isPremium) return reply('[⚙️️]comando so pra usuários vip');
  reply("「🐸」ja to enviando no teu pv"); 
  google = await fetchJson(`https://clover-t-bot-r0wt.onrender.com/wallpaper/cyberspace?key=768934&username=comefemea`);
  loli.sendMessage(sender, { image: { url: google.url }}, { quoted: info });
  break;

case 'wallpaper3': 
  if (!isPremium) return reply('[⚙️️]comando so pra usuários vip');
  reply("「🐸」ja to enviando no teu pv"); 
  google = await fetchJson(`https://clover-t-bot-r0wt.onrender.com/wallpaper/gaming?key=768934&username=comefemea`);
  loli.sendMessage(sender, { image: { url: google.url }}, { quoted: info });
  break;

case 'wallpaper4': 
  if (!isPremium) return reply('[⚙️️]comando so pra usuários vip');
  reply("「🐸」ja to enviando no teu pv"); 
  google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/wallpapertec?key=768934&username=comefemea`);
  loli.sendMessage(sender, { image: { url: google.url }}, { quoted: info });
  break;

case 'wallpaper5': 
  if (!isPremium) return reply('[⚙️️]comando so pra usuários vip');
  reply("「🐸」ja to enviando no teu pv"); 
  google = await fetchJson(`http://clover-t-bot-r0wt.onrender.com/wallpaper/wallpapertec?key=768934&username=comefemea`);
  loli.sendMessage(sender, { image: { url: google.url }}, { quoted: info });
  break;

case 'wallpaper6': 
  if (!isPremium) return reply('[⚙️️]comando so pra usuários vip');
  reply("「🐸」ja to enviando no teu pv"); 
  google = await fetchJson(`https://clover-t-bot-r0wt.onrender.com/wallpaper/pubg?key=768934&username=comefemea`);
  loli.sendMessage(sender, { image: { url: google.url }}, { quoted: info });
  break;

case 'wallpaper7':
  if (!isPremium) return reply('[⚙️️]comando so pra usuários vip');
  reply("「🐸」ja to enviando no teu pv"); 
  google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/aesthetic?key=768934&username=comefemea`);
  loli.sendMessage(sender, { image: { url: google.url }}, { quoted: info });
  break;

case 'wallpaper8': 
  if (!isPremium) return reply('[⚙️️]comando so pra usuários vip');
  reply("「🐸」ja to enviando no teu pv"); 
  google = await fetchJson(`http://clover-t-bot-r0wt.onrender.com/wallpaper/ppcouple?key=768934&username=comefemea`);
  loli.sendMessage(sender, { image: { url: google.url }}, { quoted: info });
  break;
  case 'wallpaper9': 
  if (!isPremium) return reply('[⚙️️]comando so pra usuários vip');
  reply("「🐸」ja to enviando no teu pv"); 
  google = await fetchJson(`https://clover-t-bot-r0wt.onrender.com/nime/anime?key=768934&username=comefemea`);
  loli.sendMessage(sender, { image: { url: google.url }}, { quoted: info });
  break;
  
case "tiktokad": {
    if (q.length < 1) return reply("Por favor, coloque o link do vídeo após o comando.");
    const url = q;
    const apiUrl = `https://clover-t-bot.onrender.com/download/tiktok?url=${url}&key=768934&username=comefemea`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.videoSemWt) {
          loli.sendMessage(from, {
            audio: { url: data.audio },
            mimetype: 'audio/mpeg'
          });
        } else {
          reply("Não foi possível obter o vídeo. Verifique o link e tente novamente.");
        }
      })
      .catch(error => {
        console.error(error);
        return reply("Ocorreu um erro ao processar o pedido. Tente novamente mais tarde.");
      });
} 
break;
  
case "play110":
  if (!q) return reply('Coloque o nome da música também');
  reply("「🍉」Calmo aí, estou procurando..."); 
  fetch(`https://clover-t-bot.onrender.com/yt/playmp4?query=${q}&key=768934&username=comefemea`).then(response => response.json()).then(ytbr => {

    loli.sendMessage(from, { image: { url: ytbr.thumb }, caption: `「👤」Nome: ${ytbr.title}\n「📺」Canal: ${ytbr.channel}\n「📈」Visualizações: ${ytbr.views}` });
    loli.sendMessage(from, { audio: { url: ytbr.url }, mimetype: 'audio/mpeg' });

  });
  break;
case "story":
{
  if (!text) {
    return reply("Você precisa fornecer o URL da história do Instagram.");
  }

  try {
    const res = await fetch(`https://api-aswin-sparky.koyeb.app/api/downloader/story?url=${text}`);
    const apiResponse = await res.json();

    if (!apiResponse || !apiResponse.data) {
      return reply("Nenhuma história encontrada ou resposta inválida da API.");
    }

    const mediaArray = apiResponse.data;
    for (const mediaData of mediaArray) {
      const mediaType = mediaData.type;
      const mediaURL = mediaData.url;
      let cap = `Aqui está o story do Instagram! ${mediaType.toUpperCase()}`;

      if (mediaType === "video") {
        await loli.sendMessage(from, { video: { url: mediaURL }, caption: cap }, { quoted: m });
      } else if (mediaType === "image") {
        await loli.sendMessage(from, { image: { url: mediaURL }, caption: cap }, { quoted: m });
      }
    }
  } catch (error) {
    console.error(error);
    return reply("Ocorreu um erro ao processar a solicitação.");
  }
}
break;
case "audio":
{
    if (!text) {
        await loli.sendMessage(
            from,
            { audio: { url: './assets/voz/aguarde.mp3' }, mimetype: 'audio/mp4' }, // Envio da mensagem de áudio "aguarde"
            { quoted: info }
        );
        return loli.sendMessage(
            from,
            { text: `Por favor, forneça o termo de busca. Exemplo: ${prefix}audio termo_da_busca` },
            { quoted: info }
        );
    }

    try {
        // Fazer a solicitação à API de áudio
        const response = await axios.get(`https://world-ecletix.onrender.com/api/audiomeme?query=${encodeURIComponent(text)}`);
        const result = response.data;

        // Verificar se a resposta contém as informações necessárias
        if (!result || !result.status || !result.results || result.results.length === 0) {
            await loli.sendMessage(from, { audio: { url: './assets/voz/algodeuerrado.mp3' }, mimetype: 'audio/mp4' }, { quoted: info });
            return loli.sendMessage(from, { text: "Não foram encontrados resultados para o termo fornecido." }, { quoted: info });
        }

        // Pegar a primeira opção de áudio da lista
        const firstAudio = result.results[0];
        const audioUrl = firstAudio.audio;
        const title = firstAudio.title;
        console.log(`[AUDIO] Primeiro áudio encontrado: ${title}, URL: ${audioUrl}`);

        // Baixar o áudio do link como um buffer
        const audioResponse = await axios.get(audioUrl, { responseType: 'arraybuffer' });

        // Verificar se o buffer de áudio não está vazio
        if (!audioResponse.data || audioResponse.data.length === 0) {
            throw new Error('Áudio não foi baixado corretamente.');
        }

        // Enviar o áudio baixado ao usuário
        await loli.sendMessage(
            from,
            {
                audio: Buffer.from(audioResponse.data),  // Usar o buffer diretamente
                mimetype: 'audio/mpeg',  // Use o tipo MIME correto para MP3
                fileName: `${title}.mp3`,  // Nome do arquivo
                ptt: true  // Enviar como mensagem de voz se desejado
            },
            { quoted: info }
        );

    } catch (error) {
        console.error('Erro ao processar a solicitação:', error);
        await loli.sendMessage(from, { audio: { url: './assets/voz/algodeuerrado.mp3' }, mimetype: 'audio/mp4' }, { quoted: info });
        loli.sendMessage(from, { text: "Ocorreu um erro ao processar a solicitação." }, { quoted: info });
    }
}
break;
case "audiomeme":
{
    if (!text) {
        return reply("Você precisa fornecer um termo de busca para consulta.");
    }

    try {
        // Extrair o termo de busca da mensagem de texto
        const query = text.trim();
        if (query.length === 0) {
            return reply("Por favor, forneça um termo válido para a busca.");
        }

        // Fazer a solicitação à API com o termo de busca dinâmico
        const res = await fetch(`https://world-ecletix.onrender.com/api/audiomeme?query=${encodeURIComponent(query)}`);
        const apiResponse = await res.json();

        // Verificar se a resposta da API está no formato correto e contém resultados
        if (!apiResponse || !apiResponse.status || !apiResponse.results || apiResponse.results.length === 0) {
            return reply("Nenhum dado encontrado para o termo de busca fornecido.");
        }

        // Montar a mensagem com os resultados
        let message = `**Resultados para a busca "${query}":**\n\n`;
        apiResponse.results.forEach((item, index) => {
            message += `${index + 1}. *${item.title}*\n🔊 ${item.audio}\n\n`;
        });

        // Enviar a mensagem formatada com os resultados
        reply(message);
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;
case 'volei': 
    try {
        const { data: nunuvoleicudataxw } = await axios.get('https://webvolei.com.br/')
        const nunuvoleicuhtmlkl = cheerio.load(nunuvoleicudataxw)
        let nunuvoleiculistgp = []
        nunuvoleicuhtmlkl('li.articles-box-item').each((index, nunuvoleicuelementovb) => {
            const nunuvoleicutitulorb = nunuvoleicuhtmlkl(nunuvoleicuelementovb).find('h3.article-title a').text().trim()
            const nunuvoleicudescxv = nunuvoleicuhtmlkl(nunuvoleicuelementovb).find('.article-meta-info .date').text().trim()
            const nunuvoleiculinkbw = nunuvoleicuhtmlkl(nunuvoleicuelementovb).find('h3.article-title a').attr('href')
            const nunuvoleicuimgmr = nunuvoleicuhtmlkl(nunuvoleicuelementovb).find('.article-thumb img').attr('src')

            if (nunuvoleicutitulorb && nunuvoleiculinkbw) {
                nunuvoleiculistgp.push({
                    nunuvoleicutitulorb,
                    nunuvoleicudescxv,
                    nunuvoleiculinkbw: `${nunuvoleiculinkbw}`,
                    nunuvoleicuimgmr
                })
            }
        })

        nunuvoleiculistgp = nunuvoleiculistgp.slice(0, 5)
        
        let nunuvoleicumsgqk = '🏐 *Últimas Notícias do Vôlei:*\n\n'
        nunuvoleiculistgp.forEach((nunuvoleicunoticiasbx, index) => {
            nunuvoleicumsgqk += `*${index + 1}. ${nunuvoleicunoticiasbx.nunuvoleicutitulorb}*\n` +
                            `📅 ${nunuvoleicunoticiasbx.nunuvoleicudescxv}\n` +
                            `🔗 ${nunuvoleicunoticiasbx.nunuvoleiculinkbw}\n`
            nunuvoleicumsgqk += '\n'
        })
        if (nunuvoleiculistgp.length > 0 && nunuvoleiculistgp[0].nunuvoleicuimgmr) {
            await loli.sendMessage(from, { 
                image: { url: nunuvoleiculistgp[0].nunuvoleicuimgmr }, 
                caption: nunuvoleicumsgqk 
            }, { quoted: info })
        } else {
            await loli.sendMessage(from, { text: nunuvoleicumsgqk }, { quoted: info })
        }
    } catch (nunuvoleicuerrordk) {
        console.error('Erro ao buscar notícias de Vôlei:', nunuvoleicuerrordk)
        reply('⚠️ Não foi possível buscar as notícias de Vôlei no momento')
    }
    break
 case 'basquete': 
    try {
        const { data: nunucubasquetehtmlakjs } = await axios.get('https://noticiasdebasquete.com.br/noticias-basquete/')
        const nunucubasqueteparserzzx = cheerio.load(nunucubasquetehtmlakjs)
        let nunucubasquetenoticiasqfj = []
        
        nunucubasqueteparserzzx('.listing-item').each((index, nunucubasquetenoticiaxfz) => {
            const nunucubasquetetitlezby = nunucubasqueteparserzzx(nunucubasquetenoticiaxfz).find('.post-title').text().trim()
            const nunucubasquetesummaryczx = nunucubasqueteparserzzx(nunucubasquetenoticiaxfz).find('.post-summary').text().trim()
            const nunucubasquetelinkqvf = nunucubasqueteparserzzx(nunucubasquetenoticiaxfz).find('a').attr('href')
            const nunucubasqueteimagecss = nunucubasqueteparserzzx(nunucubasquetenoticiaxfz).find('.img-holder').css('background-image')

            let nunucubasqueteimagecbv = ''
            if (nunucubasqueteimagecss && nunucubasqueteimagecss.match(/url(.*?)/)) {
                nunucubasqueteimagecbv = nunucubasqueteimagecss.match(/url(.*?)/)[1]
            }

            if (nunucubasquetetitlezby && nunucubasquetelinkqvf) {
                nunucubasquetenoticiasqfj.push({
                    nunucubasquetetitlezby,
                    nunucubasquetesummaryczx,
                    nunucubasquetelinkqvf: `${nunucubasquetelinkqvf}`,
                    nunucubasqueteimagecbv
                })
            }
        })

        nunucubasquetenoticiasqfj = nunucubasquetenoticiasqfj.slice(0, 5)
        
        let nunucubasquetemensagemazw = '🏀 *Últimas Notícias do Basquete:*\n\n'
        nunucubasquetenoticiasqfj.forEach((nunucubasqueteitemwby, index) => {
            nunucubasquetemensagemazw += `*${index + 1}. ${nunucubasqueteitemwby.nunucubasquetetitlezby}*\n` +
                            `🔗 ${nunucubasqueteitemwby.nunucubasquetelinkqvf}\n\n`
        })

        if (nunucubasquetenoticiasqfj.length > 0 && nunucubasquetenoticiasqfj[0].nunucubasqueteimagecbv) {
            await loli.sendMessage(from, { 
                image: { url: nunucubasquetenoticiasqfj[0].nunucubasqueteimagecbv }, 
                caption: nunucubasquetemensagemazw 
            }, { quoted: info })
        } else {
            await loli.sendMessage(from, { text: nunucubasquetemensagemazw }, { quoted: info })
        }
    } catch (nunucubasqueteerroqwe) {
        console.error('Erro ao buscar notícias do Basquete:', nunucubasqueteerroqwe)
        reply('⚠️ Não foi possível buscar as notícias de basquete no momento.')
    }
    break
case 'significado':
{
    if (args.length == 0) return await reply('Cadê o nome o qual você deseja ver o significado?');
    
    const nome = encodeURIComponent(args.join(' ')); // Nome formatado para a URL
    try {
        const res = await axios.get(`https://world-ecletix.onrender.com/api/significadodonome?nome=${nome}`);
        const apiResponse = res.data;

        if (!apiResponse.significado) {
            return await reply('Nenhum significado encontrado para o nome fornecido.');
        }

        const { significado, origem, genero, imageUrl } = apiResponse;

        // Baixa a imagem do nome como buffer
        const fotoNome = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(fotoNome.data, 'binary');

        // Formata a mensagem com as informações do nome
        const message = `*Nome:* ${nome}\n` +
                        `*Significado:* ${significado}\n` +
                        `*Origem:* ${origem}\n` +
                        `*Gênero:* ${genero || 'Não especificado'}\n`;

        // Envia a imagem com a legenda formatada
        await loli.sendMessage(from, { image: imageBuffer, caption: message }).catch((e) => {
            console.log(e);
            return reply('Ocorreu um erro ao enviar a imagem ou as informações.');
        });
    } catch (error) {
        console.error(error);
        return reply('Ocorreu um erro ao processar a solicitação.');
    }
}
break;

//consultas by world ecletix & lady-botv4 

case "telefone":
{
    if (!text) {
        return reply("Você precisa fornecer um número de telefone para consulta.");
    }

    try {
        const telefone = text.replace(/\D/g, '');
        if (telefone.length < 10 || telefone.length > 11) {
            return reply("Por favor, forneça um número de telefone válido com 10 ou 11 dígitos.");
        }

        const res = await fetch(`https://world-ecletix.onrender.com/api/consultas?type=telefone&query=${telefone}`);
        const apiResponse = await res.json();

        if (!apiResponse || !apiResponse.status) {
            return reply("Nenhum dado encontrado para o telefone fornecido.");
        }

        const { telefone: telefoneInfo, nome: nomeInfo, usuario, bot, "cpf/cnpj": cpfInfo, operadora } = apiResponse.resultado;

        const message = `**Informações do Telefone ${telefoneInfo}:**\n` +
                        `- Nome: ${nomeInfo}\n` +
                        `- CPF: ${cpfInfo}\n` +
                        `- Operadora: ${operadora}\n` + // Exibindo a operadora corretamente
                        `- Usuário: ${pushname}\n` + // Mantendo o pushname
                        `- Bot: ${botName}`; // Mantendo o botName

        reply(message);
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;
case "nome":
{
    if (!text) {
        return reply("Você precisa fornecer um nome para consulta.");
    }

    try {
        const nome = text.trim();
        const res = await fetch(`https://world-ecletix.onrender.com/api/consultas?type=nome&query=${encodeURIComponent(nome)}`);
        const apiResponse = await res.json();

        if (!apiResponse || !apiResponse.status) {
            return reply("Nenhum dado encontrado para o nome fornecido.");
        }

        const { cpf: cpfInfo, nome: nomeCompleto, "nome da mãe": nomeMae, "data de nascimento": dataNascimento, sexo } = apiResponse.resultado;

        const message = `**Informações sobre o nome ${nomeCompleto}:**\n` +
                        `- CPF: ${cpfInfo}\n` +
                        `- Nome da Mãe: ${nomeMae}\n` +
                        `- Data de Nascimento: ${dataNascimento}\n` +
                        `- Sexo: ${sexo || "Não especificado"}\n` +
                        `- Usuário: ${pushname}\n` +
                        `- Bot: ${botName}`;

        reply(message);
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;
case "ip":
{
    if (!text) {
        return reply("Você precisa fornecer um IP para consulta.");
    }

    try {
        const ip = text.trim();
        const res = await fetch(`https://ipwhois.app/json/${ip}`);
        const apiResponse = await res.json();

        if (!apiResponse || !apiResponse.success) {
            return reply("Nenhum dado encontrado para o IP fornecido.");
        }

        const { ip: ipInfo, continent, country, country_code, country_flag, region, city, latitude, longitude, asn, org, isp, timezone, currency, currency_code, currency_symbol, usuario, bot } = apiResponse;

        const message = `**Informações do IP ${ipInfo}:**\n` +
                        `- Continente: ${continent}\n` +
                        `- País: ${country} (${country_code})\n` +
                        `- Região: ${region}\n` +
                        `- Cidade: ${city}\n` +
                        `- Latitude: ${latitude}\n` +
                        `- Longitude: ${longitude}\n` +
                        `- ASN: ${asn}\n` +
                        `- Organização: ${org}\n` +
                        `- ISP: ${isp}\n` +
                        `- Fuso Horário: ${timezone}\n` +
                        `- Moeda: ${currency} (${currency_code})\n` +
                        `- Símbolo da Moeda: ${currency_symbol}\n` +
                        `- Usuário: ${pushname}\n` +
                        `- Bot: ${botName}`;

        reply(message);
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;
case "cnpj":
{
    if (!text) {
        return reply("Você precisa fornecer um CNPJ para consulta.");
    }

    try {
        const cnpj = text.replace(/\D/g, '');
        if (cnpj.length !== 14) {
            return reply("Por favor, forneça um CNPJ válido com 14 dígitos.");
        }

        const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
        const apiResponse = await res.json();

        if (!apiResponse || !apiResponse.cnpj) {
            return reply("Nenhum dado encontrado para o CNPJ fornecido.");
        }

        const { razao_social, nome_fantasia, cnpj: cnpjResult, logradouro, numero, bairro, municipio, uf, cep, ddd_telefone_1, email, capital_social, natureza_juridica, descricao_situacao_cadastral, qsa, usuario, bot } = apiResponse;

        let sociosInfo = qsa.map(socio => `- Nome do sócio: ${socio.nome_socio}\n  Qualificação: ${socio.qualificacao_socio}`).join('\n');

        const message = `**Informações do CNPJ ${cnpjResult}:**\n` +
                        `- Razão Social: ${razao_social}\n` +
                        `- Nome Fantasia: ${nome_fantasia || "Não informado"}\n` +
                        `- Logradouro: ${logradouro}, ${numero}\n` +
                        `- Bairro: ${bairro}\n` +
                        `- Cidade: ${municipio} - ${uf}\n` +
                        `- CEP: ${cep}\n` +
                        `- Telefone: ${ddd_telefone_1}\n` +
                        `- Email: ${email || "Não informado"}\n` +
                        `- Capital Social: R$ ${capital_social.toFixed(2)}\n` +
                        `- Natureza Jurídica: ${natureza_juridica}\n` +
                        `- Situação Cadastral: ${descricao_situacao_cadastral}\n\n` +
                        `**Quadro Societário:**\n${sociosInfo}\n` +
                        `- Usuário: ${pushname}\n` +
                        `- Bot: ${botName}`;

        reply(message);
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;
case "cpf":
{
    if (!text) {
        return reply("Você precisa fornecer um CPF para consulta.");
    }

    try {
        // Remove caracteres não numéricos do CPF fornecido
        const cpf = text.replace(/\D/g, '');
        if (cpf.length !== 11) {
            return reply("Por favor, forneça um CPF válido com 11 dígitos.");
        }

        // Faz a requisição para a API de consulta por CPF
        const res = await fetch(`https://world-ecletix.onrender.com/api/consultas?type=cpf&query=${cpf}`);
        const apiResponse = await res.json();

        // Verifica se a resposta contém dados esperados
        if (!apiResponse || !apiResponse.status) {
            return reply("Nenhum dado encontrado para o CPF fornecido.");
        }

        // Extrai as informações da resposta
        const { "🧑‍💼 nome": nome, "🚻 sexo": sexo, "🎂 nascimento": nascimento, "👩‍👧 mãe": mae, "🆔 cpf": cpfFormatado } = apiResponse.resultado;

        // Prepara a mensagem com as informações do CPF
        const message = `**Informações do CPF ${cpfFormatado}:**\n` +
                        `- Nome: ${nome}\n` +
                        `- Sexo: ${sexo}\n` +
                        `- Nascimento: ${nascimento}\n` +
                        `- Mãe: ${mae}\n` +
                        `- CPF: ${cpfFormatado}`;

        reply(message);
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;
case "ddd":
{
    if (!text) {
        return reply("Você precisa fornecer um DDD para consulta.");
    }

    try {
        const ddd = text.replace(/\D/g, '');
        if (ddd.length !== 2) {
            return reply("Por favor, forneça um DDD válido com 2 dígitos.");
        }

        const res = await fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);
        const apiResponse = await res.json();

        if (!apiResponse || !apiResponse.state) {
            return reply("Nenhum dado encontrado para o DDD fornecido.");
        }

        const { state, cities } = apiResponse;

        const message = `**Informações do DDD ${ddd}:**\n` +
                        `- Estado: ${state}\n` +
                        `- Cidades:\n${cities.join(', ')}`;

        reply(message);
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;
case "cep":
{
    if (!text) {
        return reply("Você precisa fornecer um CEP para consulta.");
    }

    try {
        // Remove caracteres não numéricos do CEP fornecido
        const cepInput = text.replace(/\D/g, '');
        if (cepInput.length !== 8) {
            return reply("Por favor, forneça um CEP válido com 8 dígitos.");
        }

        const res = await fetch(`https://brasilapi.com.br/api/cep/v2/${cepInput}`);
        const apiResponse = await res.json();

        // Verifica se a resposta contém dados esperados
        if (!apiResponse || !apiResponse.cep) {
            return reply("Nenhum dado encontrado para o CEP fornecido.");
        }

        // Extrai as informações da resposta
        const { cep: cepResult, street, neighborhood, city, state } = apiResponse;

        // Prepara a mensagem com as informações do CEP
        const message = `**Informações do CEP ${cepResult}:**\n` +
                        `- Rua: ${street}\n` +
                        `- Bairro: ${neighborhood}\n` +
                        `- Cidade: ${city}\n` +
                        `- Estado: ${state}`;

        reply(message);
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;
case "instagram2":
case "igvideo":
case "igvid":
case "ig2":
{
    if (!text) {
        return reply("Você precisa fornecer o URL de qualquer vídeo, postagem, rolo ou imagem do Instagram.");
    }
    
    try {
        const res = await fetch(`https://world-ecletix.onrender.com/api/insta?url=${text}`);
        const apiResponse = await res.json();
        
        // Verifica se a resposta contém dados e se 'data' é um array
        if (!apiResponse || !apiResponse.data || !Array.isArray(apiResponse.data.data)) {
            return reply("Nenhum vídeo ou imagem encontrado ou resposta inválida da API.");
        }
        
        const mediaArray = apiResponse.data.data;

        // Verifica se há pelo menos um item no array
        if (mediaArray.length < 1) {
            return reply("Não há vídeo disponível para esta postagem.");
        }

        // Pega o primeiro item (índice 0) para a URL do vídeo
        const videoData = mediaArray[0];
        const mediaURL = videoData.url;

        // Envia o vídeo usando a URL
        const cap = "aqui seu video";
        loli.sendMessage(from, { video: { url: mediaURL }, caption: cap }, { quoted: m });
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;
case "instagram":
case "igimage":
case "igimg":
case "ig":
{
    if (!text) {
        return reply("Você precisa fornecer o URL de qualquer vídeo, postagem, rolo ou imagem do Instagram.");
    }
    
    try {
        const res = await fetch(`https://world-ecletix.onrender.com/api/insta?url=${text}`);
        const apiResponse = await res.json();
        
        // Verifica se a resposta contém dados e se 'data' é um array
        if (!apiResponse || !apiResponse.data || !Array.isArray(apiResponse.data.data)) {
            return reply("Nenhum vídeo ou imagem encontrado ou resposta inválida da API.");
        }
        
        const mediaArray = apiResponse.data.data;

        // Itera sobre cada item no array de mídias
        for (const mediaData of mediaArray) {
            const mediaType = mediaData.url.endsWith('.mp4') ? 'video' : 'image'; // Determina o tipo com base na URL
            const mediaURL = mediaData.url;
            let cap = `aqui sua foto! ${mediaType.toUpperCase()}`;
            
            if (mediaType === "video") {
                loli.sendMessage(from, { video: { url: mediaURL }, caption: cap }, { quoted: m });
            } else if (mediaType === "image") {
                loli.sendMessage(from, { image: { url: mediaURL }, caption: cap }, { quoted: m });
            }
        }
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;
case "pinterest_video":
{
    if (!text) {
        return reply("Você precisa fornecer o URL de qualquer vídeo do Pinterest.");
    }

    try {
        const res = await fetch(`https://api-pinterest-y7jx.onrender.com/api/vid2?url=${text}`);
        const apiResponse = await res.json();

        if (!apiResponse || !apiResponse.video_url) {
            return reply("Nenhum vídeo encontrado ou resposta inválida da API.");
        }

        const videoURL = apiResponse.video_url;
        let cap = `aqui está!!!`;
        loli.sendMessage(from, { video: { url: videoURL }, caption: cap }, { quoted: m });
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;

case "pinterest_foto":
{
    if (!text) {
        return reply("Você precisa fornecer o URL de qualquer foto do Pinterest.");
    }

    try {
        const res = await fetch(`https://api-pinterest-y7jx.onrender.com/api/img2?url=${text}`);
        const apiResponse = await res.json();

        if (!apiResponse || !apiResponse.image_url) {
            return reply("Nenhuma foto encontrada ou resposta inválida da API.");
        }

        const imageURL = apiResponse.image_url;
        let cap = `aqui está!!!`;
        loli.sendMessage(from, { image: { url: imageURL }, caption: cap }, { quoted: m });
    } catch (error) {
        console.error(error);
        return reply("Ocorreu um erro ao processar a solicitação.");
    }
}
break;

case "song":
{
  if (!text) {
    return loli.reply(
      `Example : ${prefix + command} anime whatsapp status`
    );
  }

  try {
    const ytdl = require("./lib/ytdl"); // Importa a classe YT
    const searchResults = await ytdl.searchTrack(text); // Faz uma busca no YouTube Music usando o texto fornecido

    console.log('searchResults:', searchResults); // Adicione este log

    if (!searchResults || searchResults.length === 0) {
      return loli.reply(`No results found for "${text}"`);
    }

    const topResult = searchResults[0]; // Pega o primeiro resultado da busca

    if (!topResult || !topResult.url) {
      return loli.reply("No valid search result found.");
    }

    const music = await ytdl.downloadMusic(topResult.url); // Baixa a música do YouTube

    loli.sendMessage(
  m.chat,
  {
    audio: fs.readFileSync(music.path),
    fileName: topResult.title + ".mp3",
    mimetype: "audio/mp4",
    ptt: true,
  },
  { quoted: m }
);

    await fs.unlinkSync(music.path); // Remove o arquivo de música baixado após o envio
  } catch (error) {
    console.error('Failed to download music:', error); // Adicione este log
    loli.reply("Algo deu errado ao processar a solicitação.");
  }
}
break;
case "video":

{
  if (!text) {
    return loli.sendMessage(
      from,
      { text: `⚠️ Exemplo de uso:\n\n${prefix + command} Vale do reginaldo` },
      { quoted: info }
    );
  }

  try {
    const ytdl = require("ytdl-core");
    const yts = require("yt-search");
    const fs = require('fs');
    const path = require('path');

    // Verifique se o diretório de downloads existe, caso contrário, crie-o
    const downloadDir = path.resolve('./downloads');
    if (!fs.existsSync(downloadDir)) {
      fs.mkdirSync(downloadDir);
    }

    const searchResults = await yts(text);
    const topResult = searchResults.videos[0];

    console.log('searchResults:', searchResults); // Adicione este log

    if (!searchResults || searchResults.length === 0) {
      return loli.sendMessage(from, { text: `No results found for "${text}"` }, { quoted: info });
    }

    const videoURL = topResult.url;

    if (!videoURL) {
      return loli.sendMessage(from, { text: "No valid search result found." }, { quoted: info });
    }

    const videoPath = path.join(downloadDir, `${topResult.videoId}.mp4`);

    const videoStream = ytdl(videoURL, { quality: 'highest' })
      .pipe(fs.createWriteStream(videoPath));

    videoStream.on('finish', async () => {
      await loli.sendMessage(
        from,
        {
          video: fs.readFileSync(videoPath),
          fileName: topResult.title + ".mp4",
          mimetype: "video/mp4"
        },
        { quoted: info }
      );

      fs.unlinkSync(videoPath); // Remove o arquivo de vídeo baixado após o envio
    });

    videoStream.on('error', (error) => {
      console.error('Failed to download video:', error);
      loli.sendMessage(from, { text: "Algo deu errado ao processar a solicitação." }, { quoted: info });
    });
  } catch (error) {
    console.error('Failed to download video:', error); // Adicione este log
    loli.sendMessage(from, { text: "Algo deu errado ao processar a solicitação." }, { quoted: info });
  }
}
break;
case"linkmp3":

{
  if (!text) {
    return loli.sendMessage(
      from,
      { text: `⚠️ Exemplo de uso:\n\n${prefix + command} <link do YouTube>` },
      { quoted: info }
    );
  }

  try {
    const ytdl = require("ytdl-core");
    const fs = require('fs');
    const path = require('path');

    // Verifique se o diretório de downloads existe, caso contrário, crie-o
    const downloadDir = path.resolve('./downloads');
    if (!fs.existsSync(downloadDir)) {
      fs.mkdirSync(downloadDir);
    }

    const videoURL = text;
    const videoId = ytdl.getURLVideoID(videoURL);
    const videoInfo = await ytdl.getInfo(videoURL);
    const audioPath = path.join(downloadDir, `${videoId}.mp3`);

    const audioStream = ytdl(videoURL, { quality: 'highestaudio' })
      .pipe(fs.createWriteStream(audioPath));

    audioStream.on('finish', async () => {
      await loli.sendMessage(
        from,
        {
          audio: fs.readFileSync(audioPath),
          fileName: videoInfo.videoDetails.title + ".mp3",
          mimetype: "audio/mp4",
          ptt: true,
        },
        { quoted: info }
      );

      fs.unlinkSync(audioPath); // Remove o arquivo de áudio baixado após o envio
    });

    audioStream.on('error', (error) => {
      console.error('Failed to download audio:', error);
      loli.sendMessage(from, { text: "Algo deu errado ao processar a solicitação." }, { quoted: info });
    });
  } catch (error) {
    console.error('Failed to download audio:', error); // Adicione este log
    loli.sendMessage(from, { text: "Algo deu errado ao processar a solicitação." }, { quoted: info });
  }
}
break;

case "linkmp4":
{
  if (!text) {
    return loli.sendMessage(
      from,
      { text: `⚠️ Exemplo de uso:\n\n${prefix + command} <link do YouTube>` },
      { quoted: info }
    );
  }

  try {
    const ytdl = require("ytdl-core");
    const fs = require('fs');
    const path = require('path');

    // Verifique se o diretório de downloads existe, caso contrário, crie-o
    const downloadDir = path.resolve('./downloads');
    if (!fs.existsSync(downloadDir)) {
      fs.mkdirSync(downloadDir);
    }

    const videoURL = text;
    const videoId = ytdl.getURLVideoID(videoURL);
    const videoInfo = await ytdl.getInfo(videoURL);
    const videoPath = path.join(downloadDir, `${videoId}.mp4`);

    const videoStream = ytdl(videoURL, { quality: 'highest' })
      .pipe(fs.createWriteStream(videoPath));

    videoStream.on('finish', async () => {
      await loli.sendMessage(
        from,
        {
          video: fs.readFileSync(videoPath),
          fileName: videoInfo.videoDetails.title + ".mp4",
          mimetype: "video/mp4",
        },
        { quoted: info }
      );

      fs.unlinkSync(videoPath); // Remove o arquivo de vídeo baixado após o envio
    });

    videoStream.on('error', (error) => {
      console.error('Failed to download video:', error);
      loli.sendMessage(from, { text: "Algo deu errado ao processar a solicitação." }, { quoted: info });
    });
  } catch (error) {
    console.error('Failed to download video:', error); // Adicione este log
    loli.sendMessage(from, { text: "Algo deu errado ao processar a solicitação." }, { quoted: info });
  }
}
break;
case 'play55': case 'tocar': {
                if (!text) return reply(`Asim que usa:\n\n${prefix + comando} Amar amei gosta gostei`)
                try {
                    let dataa = await fetchJson(`http://sabapi.tech:8090/api/ytsrc/videos?q=${text}&apikey=MrRootsFree`)
                    ytbrt = `━「 PLAY AUDIO 」
  🥂∆𝐁𝐄𝐌✰𝐕𝐈𝐍𝐃𝐎∆🥂     ♬
⸺͟͞ꪶ${pushname}      ♪  
  
➤ۣۜۜ͜͡📌 𝚃𝚒́𝚝𝚞𝚕𝚘: ${dataa.resultado[0].title}
➤ۣۜۜ͜͡🎯 Tempo⧽${dataa.resultado[0].timestamp}
➤ۣۜۜ͜͡🦊 Descrição⧽ ${dataa.resultado[0].description}

 0:35 ━❍──────── -5:32 ↻ ⊲ Ⅱ ⊳ ↺ VOLUME: ▁▂▃▄▅▆▇ 100%

Bom diaa🤙🏻
ılı.lıllılı.ıllı..ılı.lıllılı.ıllı\n\n━━━━━━━━━━━━━`
                    loli.sendMessage(from, { image: { url: `${dataa.resultado[0].image}` }, caption: ytbrt }, { quoted: info })
                    loli.sendMessage(from, { audio: { url: `http://sabapi.tech:8090/api/dl/ytaudio?url=${dataa.resultado[0].url}&apikey=MrRootsFree` }, mimetype: "audio/mpeg", fileName: `${dataa.resultado[0].title}.mp4` }, { quoted: info })
                } catch (err) {
                    reply('❌ 𝙴𝚛𝚛𝚘 𝚊𝚘 𝚘𝚋𝚝𝚎𝚛 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜!')
                    console.log(err)
                }
            }
                break
                
                
case 'play99':
if (!q) return reply(`${pushname} Cadê o nome da música?\nExemplo: ${prefix}${command} Mc paiva`);
try {
data = await fetchJson(`http://45.126.210.24:5056/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_YURI)
loli.sendMessage(from,{image: {url: `${data.resultado[0].image}`}, caption: mess.playResult(data)}, {quoted:info})
loli.sendMessage(from, {audio: {url: `http://45.126.210.24:5056/api/dl/ytaudio?url=${data.resultado[0].url}&apikey=`+API_KEY_YURI}, fileName: data.resultado[0].title+'.mp3', mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
return reply(mess.error())
})
} catch(error) {
reply("Seja mais específico, não deu pra encontrar com apenas isto...");
}
break
case 'sandro': case 'simi':
if(!isGroup) return reply(msg.grupo)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Resposta não encontrada..")
}
break
case 'gerarimagem':
    loli.sendMessage(from, { react: { text: `🎨`, key: info.key } });
    
    if (args.length < 1) return reply('Por favor, forneça uma descrição para gerar a imagem.');
    
    // Concatena a descrição a partir dos argumentos
    const descricaoImagem = args.slice(1).join(' '); 

    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer sk-Atggpn9XIGDvppZVat0NQGV1Lw1b0lqcYwbX52Ah6GT3BlbkFJXsYEr0ZDJHHkTWK4Ub9IFuIMfaqhXf_8r2A59ARqMA`, // Substitua pela sua chave
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: descricaoImagem,
                n: 1,
                size: "1024x1024" // Você pode alterar o tamanho se necessário
            })
        });

        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
            const urlImagem = data.data[0].url;
            await loli.sendMessage(from, { image: { url: urlImagem }, caption: 'Aqui está sua imagem gerada!' }, { quoted: info });
        } else {
            reply("🚨 Não consegui gerar a imagem. Tente novamente mais tarde.");
        }
    } catch (error) {
        console.error("Erro ao gerar imagem:", error);
        reply("🚨 Não foi possível gerar a imagem. Tente novamente mais tarde.");
    }
    break;

case 'imagine':
if (!q) return reply(`O que você deseja criar?\nExemplo: ${prefix+command} Macaco voando`);
reply(`*Criando imagem sobre _~${q.toUpperCase()}~_*\n*Aguarde...*`);
try {
const response = await fetchJson(`https://hercai.onrender.com/v3/text2image?prompt=${encodeURIComponent(q)}`);
const imageUrl = response.url;
const imageBuffer = await getBuffer(imageUrl);
loli.sendMessage(from, { image: imageBuffer, caption: `*Resultado para: _~${q.toUpperCase()}~_*` });
} catch (error) {
console.log(error);
reply(`erro`);
}
break;

case 'videocontrario2':
case 'reversevid2':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
await loli.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento2':
case 'slowvid2':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(mess.wait()) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Error: ${err}`)
buffer453 = fs.readFileSync(ran)
await loli.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info})
await DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido2':
case 'fastvid2':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
await loli.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
await DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await akame.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave4':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await loli.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..");
}
break

case 'adolesc2':
case 'vozmenino2':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.');
hah = fs.readFileSync(ran)
await loli.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, async(err) => { 
await DLT_FL(media)
if(err) return reply('Ocorreu uma falha ao fazer a conversão do vídeo para mp3.')
buffer = fs.readFileSync(ran)
await loli.sendMessage(from, {audio: buffer, mimetype: 'audio/mpeg'}, {quoted: info})
await DLT_FL(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor...")
}
break

case 'bass5':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await loli.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass3': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await akame.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'bass4': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await loli.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await loli.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'fast2':
case 'audiorapido2':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await loli.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio...");
}
break

case 'esquilo2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, async(err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await loli.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio...");
}
break

case 'audiolento2': 
case 'slow2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, async(err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.');
hah = fs.readFileSync(ran)
await loli.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break
case 'plaq17': 
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${q}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
sendMsg = loli.sendMessage(sender, {image: buffer}, {quoted: info}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq8':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${q}`)
sendMsg = loli.sendMessage(sender, {image: buffer}, {quoted: info}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq9':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${q}&text.0.outline.blur=63`)
sendMsg = loli.sendMessage(sender, {image: buffer}, {quoted: info}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq10':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${q}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
sendMsg = loli.sendMessage(sender, {image: buffer}, {quoted: info}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq11':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${q}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
sendMsg = loli.sendMessage(sender, {image: buffer}, {quoted: info}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq12':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(6).jpeg?text.0.text=${q}&text.0.position.x=-17%25&text.0.position.y=-20%25&text.0.size=41&text.0.color=000000&text.0.opacity=59&text.0.font.family=PT%20Mono&text.0.outline.blur=10" width="463" height="662" alt="" />`,`https://lerrewor.sirv.com/Teste/images%20(1)%20(12).jpeg?text.0.text=${q}&text.0.position.x=-20%25&text.0.position.y=-35%25&text.0.size=41&text.0.color=000000&text.0.font.family=Playball&text.0.background.opacity=16&text.0.outline.color=ff0000&text.0.outline.blur=24" width="225" height="225" alt="" />`)
sendMsg = loli.sendMessage(sender, {image: buffer}, {quoted: info}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq13':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(5).jpeg?text.0.text=${q}&text.0.position.x=-45%25&text.0.position.y=-29%25&text.0.size=36&text.0.color=000000&text.0.opacity=65&text.0.font.family=PT%20Sans%20Narrow" width="479" height="640" alt="" />`)
sendMsg = loli.sendMessage(sender, {image: buffer}, {quoted: info}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq14':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(10).jpeg?text.0.text=${q}&text.0.position.y=-25%25&text.0.size=41&text.0.color=000000&text.0.font.family=Vollkorn&text.0.background.opacity=100" width="193" height="261" alt="" />`)
sendMsg = loli.sendMessage(sender, {image: buffer}, {quoted: info}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq15':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(9).jpeg?text.0.text=${q}&text.0.position.x=-49%25&text.0.position.y=-19%25&text.0.size=45&text.0.color=000000&text.0.opacity=97&text.0.font.family=Patrick%20Hand" width="250" height="333" alt="" />`)
sendMsg = loli.sendMessage(sender, {image: buffer}, {quoted: info}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq16': 
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(8).jpeg?text.0.text=${q}&text.0.position.x=-28%25&text.0.position.y=-41%25&text.0.size=41&text.0.color=000000&text.0.opacity=99&text.0.font.family=Signika" width="225" height="225" alt="" />`)
sendMsg = loli.sendMessage(sender, {image: buffer}, {quoted: info}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break
case 'ping2': 
const os = require("os");
{
loli.sendMessage(from, { react: { text: `⚡`, key: info.key }})
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
var getGroups = await asuna.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
const ingfoo = groups.map(v => v)
respon = `⚡ *Velocidade:* ${String(r.toFixed(3))} _ms_\n⏱️ *Uptime:* ${kyun(uptime)}\n💻 *Sistema:* ${os.type()}\n📁 *Versão:* ${os.release()}\nℹ️ *Total de Grupos:* ${ingfoo.length}\n💾 *Memoria RAM total:* ${(os.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB\n💾 *RAM disponível:* ${(os.freemem()/Math.pow(1024, 3)).toFixed(2)}GB\n📉 *Uso de memória RAM:* ${((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2)}%\n📈 *Uso da CPU (atual):* ${os.loadavg()[0].toFixed(2)}%`.trim()
await loli.sendMessage(from, { image: { url: `https://oillater.sirv.com/Picsart_23-12-03_22-49-09-032.jpg?text.0.text=${String(r.toFixed(3))}&text.0.position.gravity=northwest&text.0.position.x=12%25&text.0.position.y=65%25&text.0.size=29&text.0.color=ffffff&text.0.font.family=Teko&text.0.font.weight=600&text.0.background.opacity=100` }, caption: respon}, {quoted: info}) 
}
break
case 'filme2':
if (args.length == 0) return await reply(`Cadê o nome do filme o qual você deseja ver informações?`)
movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
var ImageMovieLink = `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`;
var fotoFilme = await getBuffer(ImageMovieLink)
loli.sendMessage(from, {image: fotoFilme, caption: `*Nome do Filme:* ${movieInfo.data.results[0].title}\n*Nome original:* ${movieInfo.data.results[0].original_title}\n*Data de Lançamento:* ${movieInfo.data.results[0].release_date}\n*Avaliações:* ${movieInfo.data.results[0].vote_average} - (${movieInfo.data.results[0].vote_count} Votos)\n*Popularidade:* ${movieInfo.data.results[0].popularity.toFixed(1)}%\n*Classificação adulta?* ${movieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}\n*Linguagem oficial:* ${movieInfo.data.results[0].original_language}\n\n*Sinopse:* ${movieInfo.data.results[0].overview}`}).catch((e) => {
console.log(e)
return reply(msg_erro)
})
break;

case 'serie2':
if (args.length == 0) return await reply(`Cadê o nome da serie o qual você deseja ver informações?`)
serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
var ImageSerieLink = `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`;
var fotoSerie = await getBuffer(ImageSerieLink)
loli.sendMessage(from, {image: fotoSerie, caption: `*Nome da Série:* ${serieInfo.data.results[0].name}\n*Nome original:* ${serieInfo.data.results[0].original_name}\n*Data de Lançamento:* ${serieInfo.data.results[0].first_air_date}\n*Avaliações:* ${serieInfo.data.results[0].vote_average} - (${serieInfo.data.results[0].vote_count} Votos)\n*Popularidade:* ${serieInfo.data.results[0].popularity.toFixed(1)}%\n*Classificação adulta?* ${serieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}\n*Linguagem oficial:* ${serieInfo.data.results[0].original_language}\n\n*Sinopse:* ${serieInfo.data.results[0].overview}`}).catch((e) => {
console.log(e)
return reply(msg_erro)
})
break;

case 'noticias2': 
try {
if (!q) return reply(`Informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
newsSends = theNews.data.articles.map(d => `${d.publishedAt.split('T').join(' - ').split('Z')[0]}\n\n${d.title} - ${d.author} [${d.source.name}]\n\n${d.description}\n\n${d.url}\n\n${d.content}\n\n--------------------------- * ---------------------------\n\n`).join('');
reply(newsSends).catch(() => {
return console.log(e)
})
} catch (e) {
return console.log(e)
}
break
case 'marcar2':
try {
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('ERROR!!')
}
break
case 'roleta':
case 'roletarussa':
if (!SoDono) return reply(`so o dono pode usar`)
jds = []
 A2 = groupMembers
 B2 = groupMembers
 TAMBOR = ["na perna.","na cabeça.","no pescoço.","no peito.","no olho.","no estômago.","na boca.","na perna.","na testa.","no braço."]
  C2 = A2[Math.floor(Math.random() * A2.length)]
if(C2 === sender || C2 === botNumber+"@s.whatsapp.net") {
return reply(`*Escolhi* @${C2.id.split('@')[0]} mas infelizmente correu de covardia...*`)
}
 tpa = TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]	 		
 reply(`A escolha é minha! 1 membro irá morrer, que os jogos comecem...`)
 setTimeout( () => {
D1 = `Que pena... você não sobreviveu ao meu jogo *@${C2.id.split('@')[0]}*, hora de enterrar o cadáver, infelizmente morreu com tiro *${tpa}*`             			
mentions(D1, jds, true)
}, 5000)
 jds.push(C2.id)				  
setTimeout( () => {
jds.push(C2.id)
conn.groupParticipantsUpdate(from, [C2.id], "remove")
}, 6000) 
break
 case 'antiflood': // Akila dev
    if (!isGroup) return reply(Res_SoGrupo);
    if (!isGroupAdmins) return reply(Res_SoAdm);
    if (!isBotGroupAdmins) return reply(Res_BotADM);
    
    let intervalo = 10, maxMensagem = 10, estadoNovo = !dataGp[0].antiflood.status;

    if (args.length == 2) [maxMensagem, intervalo] = args.map(Number);
    else if (args.length == 1) [maxMensagem] = args.map(Number);

    // Filtro - intervalo
    if (isNaN(intervalo) || intervalo < 10 || intervalo > 60) {
        return reply('[❗] Escolha um valor entre 10-60 segundos para o intervalo do anti-flood.');
    }
    
    // Filtro - maxMensagem
    if (isNaN(maxMensagem) || maxMensagem < 5 || maxMensagem > 20) {
        return reply('[❗] Escolha um valor entre 5-20 mensagens para o anti-flood.');
    }

    if (estadoNovo) {
        dataGp[0].antiflood = { status: true, maxMensagem, intervalo };
        setGp(dataGp);
        reply(`✅ O recurso de ANTI-FLOOD foi ativado para *${maxMensagem}* mensagens a cada *${intervalo}* segundos.`);
    } else {
        dataGp[0].antiflood.status = false;
        setGp(dataGp);
        reply('✅ O recurso de ANTI-FLOOD foi desativado com sucesso.');
    }
    break;

if (dataGp[0].antiflood.status && isGroup && !isGroupAdmins) {
    let flood = await this.tratarMensagemAntiFlood(dataGp[0].antiflood, sender);
    if (flood) {
        await conn.groupParticipantsUpdate(from, [sender], 'remove');
        return reply('Flooda na casa do crl.');
    }
} 

case 'anoschegar': {//Yuki 🫂
    if (!q) {
        return reply('por favor, forneça a data no formato dd/mm/aaaa. exemplo: anoschegar 25/09/2025');
    }
    const targetDate = moment(q, 'DD/MM/YYYY');
    const now = moment();   
    if (!targetDate.isValid()) {
        return reply('data inválida. Por favor, use o formato dd/mm/aaaa.');
    }
    const diffDays = targetDate.diff(now, 'days');
    const diffWeeks = targetDate.diff(now, 'weeks');
    const diffMonths = targetDate.diff(now, 'months');
    const diffSeconds = targetDate.diff(now, 'seconds');
    const diffHours = targetDate.diff(now, 'hours');
    const diffMinutes = targetDate.diff(now, 'minutes');
    const daysEmoji = '📅';
    const weeksEmoji = '📆';//Yuki mods
    const monthsEmoji = '🗓️';
    const secondsEmoji = '⏱️';
    const hoursEmoji = '⏰';
    const minutesEmoji = '⌛';
    const replyMessage = ` 
        ⏳ *tempo até a data ${targetDate.format('DD/MM/YYYY')}*:

        ${daysEmoji} *Dias restantes:* ${diffDays} dia(s) 
        ${weeksEmoji} *Semanas restantes:* ${diffWeeks} semana(s)
        ${monthsEmoji} *Meses restantes:* ${diffMonths} mês(es)
        ${hoursEmoji} *Horas restantes:* ${diffHours} hora(s)
        ${minutesEmoji} *Minutos restantes:* ${diffMinutes} minuto(s)
        ${secondsEmoji} *Segundos restantes:* ${diffSeconds} segundo(s)
    `;
    reply(replyMessage);
    break;
}

case 'gostoso2':
if(!isGroup) return enviar(`vamos ver`)
reagir("😏")
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
gostosotext = `๛ *_O quanto você é gostoso @${sender_ou_n.split("@")[0]} ? 😏_*\n-\n*「Você é:〘 ${random}% 〙gostoso」😝*`
gostosoimg = `https://telegra.ph/file/4c0d54ce0f396036db110.jpg`
mencionarIMG(gostosotext, gostosoimg)
}, 100)
break 

case 'gostosa2':
if(!isGroup) return enviar(`vou ver`)
reagir("😋")
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
gostosatext = `๛ *_O quanto você é gostosa @${sender_ou_n.split("@")[0]} ? 😏_*\n-\n*「Você é:〘 ${random}% 〙gostosa」😳*`
gostosaimg = `https://telegra.ph/file/4f4d3c5b3bcce85f8bfe7.jpg`
mencionarIMG(gostosatext, gostosaimg)
}, 2000)
break
case 'invocar':
    if (!isGroup) return reply(`so pode ser usado por adms`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const summonType = q.length > 1 ? q.trim() : 'monstro genérico';
    const summonMessage = `🔮 **Invocação!** 🔮\nVocê invocou um ${summonType}! Prepare-se para a batalha!`;
    
    await loli.sendMessage(from, { text: summonMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    
    break;



case 'feitiço':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const spellName = q.length > 1 ? q.trim() : 'feitiço poderoso';
    const spellMessage = `✨ **Feitiço Lançado!** ✨\nVocê lançou o feitiço: ${spellName}! Resultados mágicos a caminho...`;
    
    await loli.sendMessage(from, { text: spellMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;



case 'teletransportar':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const destination = q.length > 1 ? q.trim() : 'local desconhecido';
    const teleportMessage = `🚀 **Teletransporte!** 🚀\nVocê se teletransportou para ${destination}! Prepare-se para novas aventuras!`;
    
    await loli.sendMessage(from, { text: teleportMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;



case 'proteção':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`so adms`);

    const shieldDuration = q.length > 1 ? q.trim() : '5 minutos';
    const protectionMessage = `🛡️ **Escudo Mágico!** 🛡️\nVocê ativou um escudo mágico que durará ${shieldDuration}! Sinta-se seguro!`;
    
    await loli.sendMessage(from, { text: protectionMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;

case 'anjo':
if (!isGroup) return reply(`sopode ser usado em grupos`);
if (!isModobn) return reply(`so em grupos`);
loli.sendMessage(from, {text: `❰ Avaliando seu nível angelical : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]});
setTimeout(async () => {
    random = `${Math.floor(Math.random() * 100)}`;
    anjo = random;
    if (anjo < 20) { var bo = 'Você é bem terreno... 😇'; }
    else if (anjo < 40) { var bo = 'Você tem traços angelicais 😇'; }
    else if (anjo < 60) { var bo = 'Você é um anjo 😇'; }
    else if (anjo < 80) { var bo = 'Você é um anjo celestial! 😇'; }
    else { var bo = 'Você é um arcanjo divino! 😇✨'; }
    loli.sendMessage(from, {image: {url: 'https://telegra.ph/file/ddba48c868d7db5fdbbcd.jpg'}, caption: `O quanto você é anjo? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ anjo 😇✨\n\n${bo}`, mentions: [sender_ou_n], thumbnail: null}, {quoted: info});
}, 7000);
break
case 'revelarft':  
if(!isQuotedVisuU) return reply("*Detetive boruto aqui pra revelar sua imagem* selecione a imagem após o envio da imagem!");
cu = info.message;
cuu = cu.extendedTextMessage.contextInfo;
cuuu = cuu.quotedMessage.viewOnceMessageV2;
cuzin = await getFileBuffer(cuuu.message.imageMessage, "image");
loli.sendMessage(from, {image: cuzin, caption: `
usuário: ${pushname}
 Bot: ${NomeDoBot}
🕵🏻 Achei sua imagem 🕵🏻`}, {quoted: info}).catch(e => {
reply(`erro`);
});
break
case 'transformar':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const transformation = q.length > 1 ? q.trim() : 'criatura mágica';
    const transformationMessage = `🦄 **Transformação!** 🦄\nVocê se transformou em uma ${transformation}! Agora você tem novas habilidades!`;
    
    await loli.sendMessage(from, { text: transformationMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;



case 'elemento':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`sopode ser usado em grupos`);

    const element = q.length > 1 ? q.trim() : 'fogo';
    const elementMessage = `🔥 **Conjuração de Elemento!** 🔥\nVocê conjurou o elemento ${element}! Use-o sabiamente!`;
    
    await loli.sendMessage(from, { text: elementMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;



case 'restaurar':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const healthRestored = q.length > 1 ? q.trim() : '50 pontos de vida';
    const restoreMessage = `💫 **Restauração!** 💫\nVocê restaurou ${healthRestored}! Sinta-se renovado!`;
    
    await loli.sendMessage(from, { text: restoreMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;
    

case 'ilusão':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const illusionType = q.length > 1 ? q.trim() : 'um holograma';
    const illusionMessage = `🎭 **Ilusão Criada!** 🎭\nVocê criou ${illusionType} para enganar os inimigos! Cuidado com as consequências!`;
    
    await loli.sendMessage(from, { text: illusionMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;



case 'controlar':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const elementToControl = q.length > 1 ? q.trim() : 'água';
    const controlMessage = `🌊 **Controle de Elemento!** 🌊\nVocê controla ${elementToControl}! Use esse poder com responsabilidade!`;
    
    await loli.sendMessage(from, { text: controlMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;



case 'pó':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const powderEffect = q.length > 1 ? q.trim() : 'fumaça colorida';
    const powderMessage = `✨ **Pó Mágico Criado!** ✨\nVocê criou ${powderEffect} que pode ter efeitos variados! Use-o sabiamente!`;
    
    await loli.sendMessage(from, { text: powderMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;



case 'aumentar':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const boostType = q.length > 1 ? q.trim() : 'força mágica';
    const boostMessage = `⚡ **Aumento de Poder!** ⚡\nVocê aumentou sua ${boostType} temporariamente! Sinta-se invencível!`;
    
    await loli.sendMessage(from, { text: boostMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;



case 'cura':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const healingAmount = q.length > 1 ? q.trim() : '30 pontos de vida';
    const healingMessage = `💖 **Magia de Cura!** 💖\nVocê curou ${healingAmount}! A energia retorna ao seu corpo!`;
    
    await loli.sendMessage(from, { text: healingMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;



case 'tempo2':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const timeEffect = q.length > 1 ? q.trim() : 'parar o tempo por 10 segundos';
    const timeMessage = `⏳ **Magia do Tempo!** ⏳\nVocê consegue ${timeEffect}! Prepare-se para agir!`;
    
    await loli.sendMessage(from, { text: timeMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;



case 'telepatia':
    if (!isGroup) return reply(`sopode ser usado em grupos`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const mindReadTarget = q.length > 1 ? q.trim() : 'um amigo próximo';
    const telepathyMessage = `🧠 **Telepatia Ativada!** 🧠\nVocê leu a mente de ${mindReadTarget}! Cuidado com o que você descobre!`;
    
    await loli.sendMessage(from, { text: telepathyMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;



case 'aura':
    if (!isGroup) return reply(`so em grupos`);
    if (!isGroupAdmins) return reply(`so pode ser usado por adms`);

    const auraEffect = q.length > 1 ? q.trim() : 'uma aura protetora';
    const auraMessage = `🌈 **Aura Mágica!** 🌈\nVocê emitiu ${auraEffect} que aumenta suas defesas!`;
    
    await loli.sendMessage(from, { text: auraMessage, contextInfo: { forwardingScore: 50000, isForwarded: true } });
    break;
case 'viajar': case 'viagem': // by alana 
if(!isGroup) return enviar('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('marque um amigo pra viajar com vc')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `
 ➽ vcs dóis então em uma carroça🐎🧔🧔
╭─────≽「 ⚔️ ${botName} ⚔️ 」
│        
│
│➽${pushname} 
│
│➽@${mentioned[0].split('@')[0]}⁩ 
│
│➽ você e seu amigo chegaram numa vila 
│
│➽ arrumar as malas meus amigos🤠
│➽ chegou a hora de se aventura
╰────────────────────────` 
jrq = await getBuffer(`https://telegra.ph/file/2eeb5defcbe2fa5b0ef00.mp4`)
await loli.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info('QUE INCRIVEL(😱)')})
break // by alana
case 'retardado'://fantasma mods 
if (!isOwner) if (!isPremium) addFilter(from)  
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
hasil = `você é: *${random}%* RETARDADO(A)😛`
reply(hasil)
break
 case 'magico':
if (!isGroup) return reply(`so em grupos`);
if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);
loli.sendMessage(from, {text: `❰ Avaliando seu nível de magia : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]});
setTimeout(async () => {
    random = `${Math.floor(Math.random() * 100)}`;
    magico = random;
    if (magico < 20) { var bo = 'Você é bem mundano... 🧙'; }
    else if (magico < 40) { var bo = 'Você tem traços mágicos 🪄'; }
    else if (magico < 60) { var bo = 'Você é um mago 🧙'; }
    else if (magico < 80) { var bo = 'Você é um mago poderoso! 🧙'; }
    else { var bo = 'Você é o mestre dos magos! 🧙✨'; }
    loli.sendMessage(from, {image: {url: 'https://telegra.ph/file/bc46ce223a0cf3534d01f.jpg'}, caption: `O quanto você é mágico? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ mágico 🧙✨\n\n${bo}`, mentions: [sender_ou_n], thumbnail: null}, {quoted: info});
}, 7000);
break
case 'qrcode': case 'qr-qr-code': case 'qr-code'://Cleitin Modz
if(!q) return reply(`Digite o a palavra que deseja transformar em qr code\nExemplo: ${prefixo}qrcode Amo a lady bot`)
reply(`Aguarde...`)
loli.sendMessage(from, {image: {url: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${q}`}, gifPlayback: false, caption: 'AQUI ESTA SEU QR - CODE'
},{quoted: info})
break//Cleitin Modz



case 'abraco': case 'abraço':
if(!isGroup) return enviar('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('marque o alvo que você quer dár um belo abraço')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `
 ➽ ❤️Um simples abraço muda tudo🥰
╭─────≽「 ♡ LADY BOT ♡ 」
│        ♡ 𝐴𝐼 𝑄𝑈𝐼 𝐹𝑂𝐹𝑂 ♡
│
│➽${pushname} 
│
│➽@${mentioned[0].split('@')[0]}⁩ 
│
│➽ você ganhou um abraço bem gostosinho🥰
│
│➽ AAA não e pq eu sou um bot que eu 
│➽ tmb não mereço um abraço viu 🥺
╰────────────────────────` 
jrq = await getBuffer(`https://telegra.ph/file/d7f7092b8288905ba6edc.mp4`)
await loli.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info('QUE FOFINHO(A)🥰')})
break        

case 'criptografar': //Pedrozz Mods
if (!isPremium && !isCreator) return enviar(msg.premium)
let getBufferDocument = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage, 'document');
fs.writeFileSync(`./${sender}.js`, getBufferDocument);
reagir('💭')
const filePath = path.join(__dirname, `${sender}.js`);
try {

const code = readFileSync(filePath, 'utf8');

const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
compact: true,
controlFlowFlattening: true
}).getObfuscatedCode();


const obfuscatedFilePath = path.join(__dirname, `zi_${Date.now()}.js`);
const copiaFile = path.join(__dirname, `${sender}.js`);

writeFileSync(obfuscatedFilePath, obfuscatedCode);

await loli.sendMessage(from, { document: { url: obfuscatedFilePath }, mimetype: 'application/javascript', fileName: `${q || "Criptografia.js"}` },{quoted: info(`Nome: ${q || "Criptografia.js"}\nO arquivo foi criptografado com sucesso 🤙\nby: pedrozz Mods`)});
await loli.sendMessage(from, { document: { url: copiaFile }, mimetype: 'application/javascript', fileName: `${q || "copia.js"}` },{quoted: info(`Nome: ${q || "Copia.js"}\nCopia de segurança 🤙\nby: pedrozz Mods`)});
reagir('👍')
unlinkSync(obfuscatedFilePath);
DLT_FL(`./${sender}.js`);
} catch (error) {
console.error('Erro ao criptografar o arquivo:', error);
enviar('deu erro mn')
}
break; 
case 'gatos':
api = await fetchJson(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`)
loli.sendMessage(from, {image: {url: api[0].url}, caption: "Aqui sua imagem aleatório de um gato 🐈" })
break
case 'cachorros':  
api = await fetchJson(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`)
loli.sendMessage(from, {image: {url: api[0].url}, caption: "Aqui sua imagem aleatório de um cachorro 🐕"})
break


case 'addcmd':
    // Verifica se o usuário é um administrador ou o dono
    if (!isGroupAdmins && !isCreator) return reply('Precisa ser Dono');

    // Verifica se o argumento (o nome da nova case) foi passado
    if (!q || q.trim() === "") {
        return reply('Por favor, forneça o nome da nova case.');
    }

    // Lê o conteúdo atual do index.js
    const indexContent = fs.readFileSync('index.js', 'utf8');

    // Cria a nova case a ser adicionada
    const novaCase = `case '${q}':\n    // Sua lógica aqui\n    break;`;

    // Adiciona a nova case antes do último 'break'
    const pula = [
        indexContent.slice(0, indexContent.lastIndexOf('break') + 5), // Parte antes do último break
        novaCase, // Nova case a ser adicionada
        indexContent.slice(indexContent.lastIndexOf('break') + 5) // Parte depois do último break
    ].join('\n\n');

    // Escreve o novo conteúdo de volta no index.js
    fs.writeFileSync('index.js', pula);
    
    // Responde ao usuário
    await reagir('✅');
    reply('Nova case adicionada com sucesso!');
    break;
case 'getcase':
case 'puxarcase':
try{
if (!SoDono) return reply(`so o dono pode usar`)
reply('Seu perdido é uma ordem! Aguarde um pouco mestre! <3')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
msgSemQuoted(`${getCase(q)}`)
} catch(e) {
reply('A case não foi encontrada, você deve ter escrito errado...')
}
break

case 'gethtml': // Lm Only
    try {
        /**
         * Função para obter a HTML de um site
         * Útil para inspecionar site no mobile
         */
        let directory = 'Lm_Hutao.txt';
        
        if (q.includes('https://')) {
            const response = await axios({
                url: q.trim(),
                method: "GET"
            });
            
            directory = `./FILE-${Date.now()}.html`;
            
            fs.writeFileSync(directory, response.data.toString());
            
            loli.sendMessage(from, {
                document: fs.readFileSync(directory),
                filename: "resultado.html",  // Corrigido de 'fileresultado' para 'filename'
                mimetype: "text/plain"
            }, {
                quoted: info
            });
            
            fs.unlinkSync(directory);
        } else {
            reply('Você deve inserir um *Link* ao lado do comando');
        }
    } catch (e) {
        if (fs.existsSync(directory)) {
            fs.unlinkSync(directory);
        }
        
        console.error(e);
        reply('Houve um erro ao processar o comando!');
    }
    break; // Lm Only

//AkilaDevs 
case "explanadas":{
json = [
"https://telegra.ph/file/f17c88a15ceffa3cedc72.jpg",
"https://telegra.ph/file/cd4e07c652aefdb18521d.jpg",
"https://telegra.ph/file/7aba83de2f24c97288bd4.jpg",
"https://telegra.ph/file/303284117c952f3f511fe.jpg",
"https://telegra.ph/file/773a0c13da467627deadd.jpg",
"https://telegra.ph/file/2a901028e1bc14f9be638.jpg",
"https://telegra.ph/file/1a258e14b897111a50ca8.jpg",
"https://telegra.ph/file/92624873032e20f38168e.jpg",
"https://telegra.ph/file/f0291eb0c56d4999aecd3.jpg",
"https://telegra.ph/file/a7be4a88b3a3c9f588fac.jpg",
"https://telegra.ph/file/c2a2ed0b434f25a2edec8.jpg",
"https://telegra.ph/file/359e4bc3ffafa03b5290b.jpg",
"https://telegra.ph/file/cae681c06b256e8d86763.jpg",
"https://telegra.ph/file/1c73d9d497e3dfe99c01a.jpg",
"https://telegra.ph/file/e84242e2cdca7537a6f46.jpg",
"https://telegra.ph/file/138456af45394ba828c21.jpg",
"https://telegra.ph/file/a9a46f58598da874db190.jpg",
"https://telegra.ph/file/52b718dad52461023b9a8.jpg",
"https://telegra.ph/file/8ace28720c316ea74c42f.jpg",
"https://telegra.ph/file/9d2b2453f9ad90b00926e.jpg",
"https://telegra.ph/file/de8e36ea53e38e3f7073a.jpg",
"https://telegra.ph/file/ffd20091b246a3916a8be.jpg",
"https://telegra.ph/file/90cd6125f144933f5363e.jpg",
"https://telegra.ph/file/a405b39ede2d37190aa8d.jpg",
"https://telegra.ph/file/532f7fc83dd5d20009d04.jpg",
"https://telegra.ph/file/2c57a5df9b08203f517fc.jpg",
"https://telegra.ph/file/62da6b921c546a744704c.jpg",
"https://telegra.ph/file/4e3bd9b13a183b7c556ca.jpg",
"https://telegra.ph/file/039134aa81273edb155b5.jpg",
"https://telegra.ph/file/4fd437c0977090a8353b1.jpg",
"https://telegra.ph/file/c3519034be7b03f66ac71.jpg",
"https://telegra.ph/file/e12ce2bf1b6a9eff2ea65.jpg",
"https://telegra.ph/file/0983716af47e6841bfbaa.jpg",
"https://telegra.ph/file/36490eac60550c0226ff0.jpg",
"https://telegra.ph/file/87e824613fbd9807f4f4a.jpg",
"https://telegra.ph/file/38916bd148902361a5697.jpg",
"https://telegra.ph/file/4a623cab0cf50b7b065d8.jpg",
"https://telegra.ph/file/4d7d6d603f36e80f39539.jpg",
"https://telegra.ph/file/51f3978c8ce4425bed1f9.jpg"
]
random = json[Math.floor(Math.random() * json.length)]
chama_o_random = {
image: {url: random}, caption: `Garotinha explanada 🤭`, mentions: [sender_ou_n]
}
loli.sendMessage(from, chama_o_random)
}
break //AkilaDevs

case 'gerarlink2':
  try {
    if (isQuotedImage) {
      boij = isQuotedImage || isQuotedVideo 
        ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage 
        : info;
      const fetch = require('node-fetch');
      const FormData = require('form-data');
      async function uploadImageToImgur(imageBuffer) {
        const form = new FormData();
        form.append('image', imageBuffer, { filename: 'image.jpg' });
        const response = await fetch('https://api.imgur.com/3/image', {
          method: 'POST',
          body: form,
          headers: {
            'Authorization': 'Client-ID 400116076ba4b73'
          }
        });
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers.raw());
        const data = await response.json();
        console.log('Response data:', data); 
        if (response.ok && data.data && data.data.link) {
          return data.data.link;
        } else {
          throw new Error('Failed to retrieve the image URL from the response.');
        }
      }
      const owgi = await getFileBuffer(boij, "image");
      const imageUrl = await uploadImageToImgur(owgi);
      reply(imageUrl);
    } else {
      reply('Marque a foto.');
    }
  } catch (e) {
    console.log('Error details:', e); 
    reply('Erro...');
  }
  break;
case 'rvisu':
case 'open':
if(!isQuotedVisuU) return reply('Por favor, *mencione uma imagem ou video em visualização única* para executar o comando.')
await reagir(from, "👀");
if(info.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nO vídeo em visualização única foi revelado.."
await loli.sendMessage(from,px)
} else {
var px = info.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nA imagem em visualização única foi revelada.."
await loli.sendMessage(from,px)
}}
break

case 'chatgpt':
    loli.sendMessage(from, { react: { text: `🔎`, key: info.key } });
    
    if (args.length < 1) {
        console.log('Nenhuma pergunta fornecida.');
        return reply('Por favor, forneça uma pergunta para que eu possa ajudar.');
    }
    
    // Concatena a pergunta a partir dos argumentos
    const perguntaChatGPT = args.slice(1).join(' '); 
    console.log(`Pergunta para o ChatGPT: ${perguntaChatGPT}`);

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer sk-Atggpn9XIGDvppZVat0NQGV1Lw1b0lqcYwbX52Ah6GT3BlbkFJXsYEr0ZDJHHkTWK4Ub9IFuIMfaqhXf_8r2A59ARqMA`, // Substitua pela sua chave
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', // Ou gpt-4, dependendo do que você quiser usar
                messages: [{ role: 'user', content: perguntaChatGPT }]
            })
        });

        const data = await response.json();
        console.log('Resposta da API do ChatGPT:', data);

        if (data.choices && data.choices.length > 0) {
            const resposta = data.choices[0].message.content;
            await loli.sendMessage(from, { text: resposta }, { quoted: info });
        } else {
            console.log('Resposta não encontrada na resposta da API.');
            reply("🚨 Não consegui obter a resposta do ChatGPT. Tente novamente mais tarde.");
        }
    } catch (error) {
        console.error("Erro ao obter resposta do ChatGPT:", error);
        reply("🚨 Não foi possível se conectar ao ChatGPT. Tente novamente mais tarde.");
    }
    break;
    case 'imagine2':
if(!q) return reply(`Cade o nome?`)
reagir(from,"⏳")
try {
conn.sendMessage(from,{image: {url: `https://random-apis.online/api/ai/v4/image?q=${q}&apikey=mjcaFK16`}})
reagir(from,"✅")
} catch (e){
return reply(`${e}`)
reagir(from,"❌")
}
break//by luanzin dev
    case 'imagem':
    case 'gerar-imagem':
    if (!q) return loli.sendMessage(from, { text: '[⚙️️] Por favor, forneça o texto para gerar a imagem. Exemplo: !gerar-imagem Sua frase aqui' }, { quoted: info });

    const textoParaImagem = encodeURIComponent(q); // Codifica o texto para a URL
    const apiUrlImagem = `https://world-ecletix.onrender.com/api/gerar-imagem?texto=${textoParaImagem}`;

    try {
        // Envia a mensagem informando que está gerando a imagem
        reply(`aguarde um momento ${pushname}, pode demorar.`);

        // Envia a imagem diretamente usando a nova API
        const imageResponse = await axios.get(apiUrlImagem, { responseType: 'arraybuffer' });
        
        if (imageResponse.status === 200) {
            const imageBuffer = Buffer.from(imageResponse.data, 'binary');

            // Envia a imagem gerada no chat de onde veio a solicitação
            await loli.sendMessage(from, {
                image: imageBuffer,
                caption: `Aqui está a imagem gerada para: ${q}`, // Mensagem opcional
            });
        } else {
            loli.sendMessage(from, { text: '🚨 Não foi possível gerar a imagem.' }, { quoted: info });
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição à API de geração de imagem:', error);
        loli.sendMessage(from, { text: '🚨 Erro ao gerar a imagem.' }, { quoted: info });
    }
    break;
    case 'Gemini':
    case 'gemini':
  if (!args[1]) {
    return reply('🚨 Por favor, forneça uma pergunta para o Orbital IA.');
  }

  const promptOrbital = encodeURIComponent(args.slice(1).join(' '));

  try {
    const response = await fetch(`https://api-ia.orbital.host/gemini?prompt=${promptOrbital}`);
    const data = await response.json();
    
    if (data.result) {
      loli.sendMessage(sender, { text: `🗣️ Resposta do Orbital IA: ${data.result}` }, { quoted: info });
    } else {
      reply("🚨 Não consegui obter a resposta do Orbital IA. Tente novamente mais tarde.");
    }
  } catch (error) {
    console.error("Erro ao obter resposta do Orbital IA:", error);
    reply("🚨 Não foi possível. Tente novamente mais tarde.");
  }
  break;
    case 'lady':
    case 'Lady':
  if (!args[1]) {
    return reply('🚨 Por favor, forneça uma pergunta para a lady.');
  }

  const promptOrbital2 = encodeURIComponent(args.slice(1).join(' '));

  try {
    const response = await fetch(`https://api-ia.orbital.host/orbital?prompt=${promptOrbital2}&model=llama3-8b`);
    const data = await response.json();
    
    if (data.result) {
      loli.sendMessage(sender, { text: `🗣️ Resposta da Lady: ${data.result}` }, { quoted: info });
    } else {
      reply("🚨 Não consegui obter a resposta do Orbital IA. Tente novamente mais tarde.");
    }
  } catch (error) {
    console.error("Erro ao obter resposta do Orbital IA:", error);
    reply("🚨 Não foi possível, Tente novamente mais tarde.");
  }
  break;
    case 'analisaimg': //by luanzin dev
  if (!args[1] || !args[2]) {
    return reply('🚨 Por favor, forneça um prompt e uma URL de imagem. Exemplo: !analiseimg "analisar esta imagem" [URL da imagem]');
  }

  const promptVerImg = encodeURIComponent(args[1]);
  const imageUrl = args[2];

  try {
    const response = await fetch(`https://api-ia.orbital.host/gemini/img?prompt=${promptVerImg}&imageUrl=${imageUrl}`);
    const data = await response.json();
    
    if (data.result) {
      loli.sendMessage(sender, { text: `🖼️ Resultado da análise: ${data.result}` }, { quoted: info });
    } else {
      reply("🚨 Não consegui obter a análise da imagem.");
    }
  } catch (error) {
    console.error("Erro ao analisar a imagem:", error);
    reply("🚨 Não foi possível se conectar ao Orbital IA. Tente novamente mais tarde.");
  }
  break;
    case 'gerarimg': // by luanzin dev
  if (!args[1]) {
    return reply('🚨 Por favor, forneça uma descrição para gerar uma imagem.');
  }

  const promptGerarImg = encodeURIComponent(args.slice(1).join(' '));

  try {
    const response = await fetch(`https://api-ia.orbital.host/orbital/img-ai?prompt=${promptGerarImg}&model=v3`);
    const data = await response.json();
    
    if (data.url) {
      const imageBuffer = await getBuffer(data.url);
      loli.sendMessage(sender, { image: imageBuffer, caption: `*Resultado para: _${args.slice(1).join(' ')}_*` }, { quoted: info });
    } else {
      reply("🚨 Não consegui gerar a imagem.");
    }
  } catch (error) {
    console.error("Erro ao gerar a imagem:", error);
    reply("🚨 Não foi possível se conectar ao Orbital IA. Tente novamente mais tarde.");
  }
  break;
  
  case 'wikipedia': //Wikipédia atualizado
    try {
        if (!q) return reply('Insira o termo de busca para Wikipédia!');

        // Função para enviar a imagem e o texto
        const sendImageURL = (texts, url) => {
            const textinhur = `\n${q}\n\n  • ${texts}`;
            
            // Envia a imagem e o texto
            loli.sendMessage(from, {
                image: {
                    url
                },
                caption: textinhur
            }, {
                quoted: info
            });
        };

        // Define a base URL da Wikipedia
        const base = 'https://pt.m.wikipedia.org';

        // Faz a busca na Wikipedia
        const { data } = await axios.get(`${base}/w/index.php?search=${q}&title=Special:Search&profile=advanced&fulltext=1&ns0=1`);

        const $ = cheerio.load(data);
        const array = [];

        // Captura os links de resultados
        $('.mw-search-result-heading').each(function() {
            const ref = $(this).find('a').attr('href');
            if (ref) {
                array.push(ref);
            }
        });

        // Verifica se há resultados na pesquisa
        if (array.length === 0) {
            return reply("Nenhum resultado encontrado para o termo de busca.");
        }

        // Acessa o primeiro link de resultado
        const { data: body } = await axios.get(base + array[0]);
        const $$ = cheerio.load(body);
        
        // Captura a imagem do artigo ou define uma imagem padrão
        const image = 'https:' + ($$('a.mw-file-description').find('img').attr('src') || '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png');

        // Captura o conteúdo dos parágrafos
        let contents = '';
        $$('p').each(function() {
            contents += $$(this).text().trim() + '\n';
        });

        // Envia os resultados
        sendImageURL(contents, image);
    } catch (e) {
        console.error(e);
        reply('Erro ao executar o comando.');
    }
    break;
case 'sabetudo':
  if (!isPremium) return reply('[⚙️️] Comando só para usuários VIP');
  
  // Verifica se a mensagem contém uma pergunta
  if (!args[1]) {
    return reply('🚨 Por favor, forneça uma pergunta para o ChatGPT. Exemplo: !chatgpt Qual é a sua versão?');
  }

  // Concatena a pergunta a partir dos argumentos
  const pergunta = encodeURIComponent(args.slice(1).join(' '));

  reply("🔄 Enviando sua pergunta para o ChatGPT...");

  try {
    // Faz a requisição para a nova API do ChatGPT
    const response = await fetch(`https://tohka.tech/api/outros/chatgpt?modelo=gpt-4&pergunta=${pergunta}&apikey=gxhu6`);
    const data = await response.json();
    
    // Verifica se a resposta contém um campo `resposta` e envia a resposta
    if (data.resposta) {
      loli.sendMessage(sender, { text: `🗣️ Resposta do ChatGPT: ${data.resposta}` }, { quoted: info });
    } else {
      reply("🚨 Não consegui obter a resposta do ChatGPT. Tente novamente mais tarde.");
    }
  } catch (error) {
    console.error("Erro ao obter resposta do ChatGPT:", error);
    reply("🚨 Não foi possível se conectar ao ChatGPT. Tente novamente mais tarde.");
  }
  break;
  
case 'infiel':
if(!isGroup) return reply(`so pode em grupos`)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
async function InfielMsg() {
random = `${Math.floor(Math.random() * 110)}`
traic = random
infiel = random
if(infiel <= 15 ) {var trai = 'Parabéns, você é fiel 👏👏'}
else if(infiel == 16 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 17 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 18 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 19 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 20 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 21 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 22 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 23 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 24 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 25 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 26 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 27 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 28 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 29 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 30 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 31 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 32 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 33 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 34 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 35 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 36 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 37 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 38 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 39 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 40 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 41 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 42 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 43 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 44 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 45 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 46 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 47 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 48 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 49 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 50 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 51 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 52 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 53 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 54 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 55 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 56 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 57 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 58 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 59 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 60 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 61 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 62 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 63 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 64 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 65 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 66 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 67 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 68 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 69 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 70 ) {var trai = 'que isso, quer bater o record de traição? 😳'}    
else if(infiel == 71 ) {var trai = 'que isso, quer bater o record de traição? 😳'}    
else if(infiel == 72 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 73 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 74 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 75 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 76 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 77 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 78 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 79 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 80 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 81 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 82 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 83 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 84 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel >= 85 ) {var trai = 'vish... você é tão fiel quanto o neymar...'}
var sandrokjk = [
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██████▒▒▒▒》60%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███████▒▒▒》70%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████████▒▒》80%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████████▒》90%*`,
`*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
`*O quanto você é infiel?*\n\n*「 @${sender_ou_n.split("@")[0]} 」seu nível de infiel é: ❰ ${random}% ❱*\n\n*${trai}*`
]
let { key } = await loli.sendMessage(from, {text: `*❰Pesquisando a sua ficha de infiel: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱*`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
for (let i = 0; i < sandrokjk.length; i++) 
await loli.sendMessage(from, {text: sandrokjk[i], mentions: [sender_ou_n], edit: key });
}, 1500)
}
InfielMsg()
break

case 'wallpapers4k': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpapers4k.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break
          case 'videopralink2':
          case 'gerarvideo':
            try {
              if (isQuotedVideo) {
                boij = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
                  : info.message.videoMessage;
                const fetch = require('node-fetch');
                const FormData = require('form-data');
                const fs = require('fs');
                async function uploadVideoToTelegraph(videoBuffer) {
                  const form = new FormData();
                  form.append('file', videoBuffer, { filename: 'media' });

                  const response = await fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: form,
                  });
                  const data = await response.json();
                  if (data && data[0] && data[0].src) {
                    return 'https://telegra.ph' + data[0].src;
                  } else {
                    throw new Error('Failed to retrieve the image URL from the response.');
                  }
                }
                const owgi = await getFileBuffer(boij, "video");
                const imageUrl = await uploadVideoToTelegraph(owgi);
                reply(imageUrl);
              } else {
                reply('marque o video')
              }
            } catch (e) {
              console.log(e)
              reply('error...')
            }
            break

case 'simih':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./arquivos/usuarios/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗')
} else if (Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
samih.splice(from, 1)
fs.writeFileSync('./arquivos/usuarios/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em')
}
break

case 'simih2':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi2) return reply('O modo Simi está ativo')
samih2.push(from)
fs.writeFileSync('./arquivos/funcoes/simi.json', JSON.stringify(samih2))
reply('Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios')
} else if (Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
samih2.splice(from, 1)
fs.writeFileSync('./arquivos/funcoes/simi.json', JSON.stringify(samih2))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em')
}
break



case 'pornovid':{
if(!isPremium) return reply(msg.premium)
reply(`Já estou enviando no pv ${pushname}`)
await loli.sendMessage(from, {react: { text: "🔞", key: info.key }})
  bla = JSON.parse(fs.readFileSync("./arquivos/sexv.json")) 
button = [
  {buttonId: `${prefix}pornovid`, buttonText: {displayText: '😈[suivant]😈'}, type: 1}
]
buttonMessage = {
 video: {url: bla[Math.floor(Math.random() * bla.length)],
 quoted: info},
 caption: '🔞',
 footer: `@${pushname}`,
 button: button,
 headerType: 1
}
loli.sendMessage(sender, buttonMessage)
}
break


case "art1":
loli.sendMessage(from, {text: `
 . ___________________
 ▕╮╭┻┻╮╭┻┻╮╭▕╮╲
 ▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏
 ▕╭┻┻┻┛┗┻┻┛   ▕  ╰▏
 ▕╰━━━┓┈┈┈╭╮▕╭╮▏
 ▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏
 ▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏`, quoted: info})
break

case "art2":
loli.sendMessage(from, {text: `
░░╔══╗░░░░░░░░░░╔══╗░░
 ░╚╣▐▐╠╝░░╔══╗░░╚╣▐▐╠╝░
 ░░╚╦╦╝░░╚╣▌▌╠╝░░╚╦╦╝░░
 ░░░╚╚░░░░╚╦╦╝░░░░╚╚░░░
 ░░░░░░░░░░╝╝░░░░░░░░░░ `, quoted: info})
break

case "art3":
loli.sendMessage(from, {text: `
▒▒▒▒▒▒▐███████▌
 ▒▒▒▒▒▒▐░▀░▀░▀░▌
 ▒▒▒▒▒▒▐▄▄▄▄▄▄▄▌
 ▄▀▀▀█▒▐░▀▀▄▀▀░▌▒█▀▀▀▄
 ▌▌▌▌▐▒▄▌░▄▄▄░▐▄▒▌▐▐▐▐ `, quoted: info})
break

case "art4":
loli.sendMessage(from, {text: `
░▄░█░░░▄▀▀▀▀▀▄░░░█░▄░
 ▄▄▀▄░░░█─▀─▀─█░░░▄▀▄▄
 ░░░░▀▄▒▒▒▒▒▒▒▒▒▄▀░░░░
 ░░░░░█────▀────█░░░░░
 ░░░░░█────▀────█░░░░░   `, quoted: info})
break

case "art5":
loli.sendMessage(from, {text: `
 ▒▒▒▒▒▒▒▒▒▒▒▒
 ▒▒▒▒▓▒▒▓▒▒▒▒
 ▒▒▒▒▓▒▒▓▒▒▒▒
 ▒▒▒▒▒▒▒▒▒▒▒▒
 ▒▓▒▒▒▒▒▒▒▒▓▒
 ▒▒▓▓▓▓▓▓▓▓▒▒
 ▒▒▒▒▒▒▒▒▒▒▒▒`, quoted: info})
break

case "art6":
loli.sendMessage(from, {text: `
┈┈┈╱▔▔▔▔▔▔╲┈╭━━━╮┈┈
 ┈┈▕┈╭━╮╭━╮┈▏┃ZALTS.┃┈┈
 ┈┈▕┈┃╭╯╰╮┃┈▏╰┳━━╯┈┈
 ┈┈▕┈╰╯╭╮╰╯┈▏┈┃┈┈┈┈┈
 ┈┈▕┈┈┈┃┃┈┈┈▏━╯┈┈┈┈┈
 ┈┈▕┈┈┈╰╯┈┈┈▏┈┈┈┈┈┈┈
 ┈┈▕╱╲╱╲╱╲╱╲▏┈┈┈┈┈┈┈`, quoted: info})
break

case "art7":
loli.sendMessage(from, {text: `
──▒▒▒▒▒────▄████▄─────
 ─▒─▄▒─▄▒──███▄█▀──────
 ─▒▒▒▒▒▒▒─▐████──█──█──
 ─▒▒▒▒▒▒▒──█████▄──────
 ─▒─▒─▒─▒───▀████▀─────
 `, quoted: info})
break

case "art8":
loli.sendMessage(from, {text: `
╲╲╭━━━━━━━╮╱╱
 ╲╭╯╭━╮┈╭━╮╰╮╱
 ╲┃┈┃┈▊┈┃┈▊┈┃╱
 ╲┃┈┗━┛┈┗━┛┈┃╱
 ╱┃┈┏━━━━━┓┈┃╲
 ╱┃┈┃┈┈╭━╮┃┈┃╲
 ╱╰╮╰━━┻━┻╯╭╯╲
 ╱╱╰━━━━━━━╯╲╲`, quoted: info})
break

case "art9":
loli.sendMessage(from, {text: `
    ╭━━╮┈┈┈╭━━╮┈┈┈┈┈
 ┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
 ╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
 ┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
 ┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
 ╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
 ┃┈┈╰━━━╯┈┈╰━┛┈┃┈`, quoted: info})
break

case "art10":
loli.sendMessage(from, {text: `
○ ＿＿＿＿
 　　   ∥　　　　|
 　　   DANIEL👨‍💻
 　　   ∥　　　　|
 　　   ∥￣￣￣￣
  ∧＿∧
 ( ･ω･∥
 丶　つ０
  しーＪ `, quoted: info})
break

case "art11":
loli.sendMessage(from, {text: `
A____A
 |・ㅅ・|
 |っ　ｃ|
 |　　　|
 |　　　|
 |　　　|
 |　　　|
 |　　　|
 U￣￣U`, quoted: info})
break

case "art12":
loli.sendMessage(from, {text: `
╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭
 ╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯
 ┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║
 ╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝
 ╭┻╮╱╰╮╰━━╯╭╯╲┊   ║
 ╰┳┫▔╲╰┳━━┳╯╱▔┊   ║
 ┈┃╰━━╲▕╲╱▏╱━━━┬╨╮
 ┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯ `, quoted: info})
break

case "art13":
loli.sendMessage(from, {text: `
.    ▼￣＞-―-＜￣▼
 　　Ｙ　            Ｙ
   /\   / 　 ●    o  ●）
 ＼  ｜　 つ　    ヽ`, quoted: info})
break

case "art14":
loli.sendMessage(from, {text: `
👊🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👊🏿
👉🏿👊🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👊🏾👈🏿
👉🏿👉🏾👊🏽👇🏽👇🏽👇🏽👇🏽👇🏽👊🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👊🏼👇🏼👇🏼👇🏼👊🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👉🏼👊🏻👇🏻👊🏻👈🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👉🏼👉🏻🏳️‍🌈?👈🏻👈🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👉🏼👊🏻👆🏻👊🏻👈🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👊🏼👆🏼👆🏼👆🏼👊🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👊🏽👆🏽👆🏽👆🏽👆🏽👆🏽👊🏽👈🏾👈🏿
👉🏿👊🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👊🏾👈🏿
👊🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👊🏿`, quoted: info})
break

case "art15":
  loli.sendMessage(from, {text: `
  ┈┈▕╲▂▂▂▂╱▏┈┈┈┈┈┈
┈┈┈╲╱╭╱╲╱╲┈┈┈┈┈┈
┈╱▔▔┈┊▏▕▏▕┈┈┈┈┈┈
▕▂╱▔╳▔╲▊▏▊╱▔╲▔╲┈
┈┈┈┈▏▕▏▔▔▔▕▋▕▕▋▏
┈┈┈┈╲┈╲▂▂▂▂▂▂▂╱┈
┈┈┈┈▕╲▂▂▂▂▂╱┈┈┈┈
┈┈┈╱▔╲▕┈┈┈┈┈┈┈┈┈
┈┈┈╱▏┈┈┈┈┈╱▔▔▔▔╲┈┈┈┈
┈┈┈▏▏┈┈┈┈┈▏╲▕▋▕▋▏┈┈┈
┈┈┈╲╲┈┈┈┈┈▏┈▏┈▔▔▔▆┈┈
┈┈┈┈╲▔▔▔▔▔╲╱┈╰┳┳┳╯┈┈
┈╱╲╱╲▏┈┈┈┈┈┈▕▔╰━╯┈┈┈
┈▔╲╲╱╱▔╱▔▔╲╲╲╲┈┈┈┈┈┈
┈┈┈╲╱╲╱┈┈┈┈╲╲▂╲▂┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈╲╱╲╱┈┈┈┈
  `, quoted: info})
break

case 'edit1': 

					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break

case 'edit2':
                           
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break

case 'edit3':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit4':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=11%25&text.0.position.y=22%25&text.0.size=20&text.0.color=241b1b&text.0.opacity=33&text.0.font.family=Rock%20Salt&text.0.font.style=italic&text.0.background.opacity=49`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit5':
                   
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break

case 'edit6':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit7':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break

case 'edit8':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					//venomk = await getvenomk(`https://lollityp.sirv.com/venom_apis.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=47%25&text.0.size=99&text.0.color=ff0000&text.0.opacity=50&text.0.font.family=Cookie&text.0.font.style=italic&text.0.background.opacity=92&text.0.outline.width=23&text.0.outline.blur=24&text.0.outline.opacity=87`)
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis.jpg?w=640&h=640&text.0.text=Venom&text.0.position.gravity=north&text.0.position.y=53%25&text.0.size=96&text.0.color=ff0000&text.0.opacity=46&text.0.font.family=Shadows%20Into%20Light&text.0.font.style=italic&text.0.background.opacity=70&text.0.outline.width=9&text.0.outline.blur=52`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break					
					
					case 'edit9':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break

case 'edit10':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break

case 'edit11':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis11.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=60%25&text.0.size=64&text.0.color=0071ff&text.0.font.family=Old%20Standard%20TT&text.0.font.style=italic&text.0.background.opacity=55&text.0.outline.color=00d0ff&text.0.outline.width=19&text.0.outline.blur=30`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit12':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit13':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break		
					
					case 'edit14':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit15':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
					break	
					
					case 'edit16':
                    
					if (args.length < 1) return reply('qual o nome?')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
					loli.sendMessage(m.chat, { image: venomk }, { quoted: info})
			                break	
			               

          case 'antipv':
            if (!isCreator) return reply(`Apenas dono pode ativar/desativar essa função..`)
            if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
            if (Number(args[0]) === 1) {
              if (isAntiPv) return reply('Ja esta ativo')
              antipv.push('Ativado')
              fs.writeFileSync('./arquivos/usuarios/antipv.json', JSON.stringify(antipv))
              reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
            } else if (Number(args[0]) === 0) {
              if (!isAntiPv) return reply('Ja esta Desativado')
              pesquisar = 'Ativado'
              processo = antipv.indexOf(pesquisar)
              while (processo >= 0) {
                antipv.splice(processo, 1)
                processo = antipv.indexOf(pesquisar)
              }
              fs.writeFileSync('./arquivos/usuarios/antipv.json', JSON.stringify(antipv))
              reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
            } else {
              enviar('1 para ativar, 0 para desativar')
            }
            break
case 'ttp':
    if (!q) return reply(`*_❕Coloque o texto que você quiser!_*\n- *🧑‍🏫 Por exemplo:* ${prefix + command} sandro`);

    reagir(from, "👻");
    await sleep(1000);
    reply('fazendo');

    // Montar a URL da API com o texto fornecido
    const string = args.join(' ') || 'Texto indefinido';
    const post = `https://api.maher-zubair.tech/maker/text2img?q=${encodeURIComponent(string)}`;

    // Função para enviar sticker a partir da URL
    const sendStickerFromUrl = async (to, url, options) => {
        try {
            const buffer = await getBuffer(url);
            const filePath = 'temp.png'; // Caminho temporário para o arquivo
            fs.writeFileSync(filePath, buffer);

            // Converter a imagem para WebP
            const webpPath = 'temp.webp';
            exec(`ffmpeg -i ${filePath} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpPath}`, (err) => {
                if (err) {
                    console.error('Erro ao converter imagem para WebP:', err);
                    reply("Erro ao converter imagem para figurinha");
                    return;
                }

                // Enviar a figurinha
                loli.sendMessage(to, { sticker: fs.readFileSync(webpPath) }, options);

                // Limpar arquivos temporários
                fs.unlinkSync(filePath);
                fs.unlinkSync(webpPath);
            });
        } catch (error) {
            console.error('Erro ao obter o buffer:', error);
            reply("Erro ao criar a figurinha");
        }
    };

    // Enviar a figurinha
    sendStickerFromUrl(from, post, { quoted: info }).catch(e => {
        reply(mess.error());
    });
    break;






case 'linkvideo':
loli.sendMessage(from, { react: { text: `🎥`, key: info.key }}) 
try {
if(!q.trim()) return reply(`${prefix+command} link ou nome`);
reply("ENVIANDO..VÍDEO🎥");
loli.sendMessage(from, {video: {url:`https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=${API_KEY_DANIEL}`}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;


case 'criargp':          //case by: Bielzinho-bot
if (!isCreator) return reply(`Apenas dono pode ativar/desativar essa função..`)
const gp = args.join(' ')
if (!gp) return reply('*Escreva o nome do grupo que vc quer criar....*')
var group = await loli.groupCreate(`${gp}`, [sender])
reply(`*Grupo criado com sucesso*\n*Nome do grupo :* *${gp}*`)
loli.sendMessage(group.gid, `Bem vindo ao grupo amigo(a)`, MessageType.text, {quoted: info})
break

          case 'walpaperanime':
            {
              json = JSON.parse(fs.readFileSync('./arquivos/wall.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                image: {
                  url: random,
                  quoted: info
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              loli.sendMessage(from, templateMassage)
            }
            break
            case 'maru': { // by yuki ladrão de salsicha 
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 40) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MaruKarv/%20${numb}.jpg` };
    const mag = '🔞MaruKarv🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${NomeDoBot}`,
        headerType: 4,
    };
    await toga.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'netersg': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 30) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/netersg/%20${numb}.jpg` };
    const mag = '🔞netersg🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'egril18': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 14) + 1;
    const videoUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/EgrilVideo/%20${numb}.mp4`;
    const caption = '🔞egril🔞';
    
    // Use o método sendMessage para enviar o vídeo
    await loli.sendMessage(from, { video: { url: videoUrl }, caption: caption, footer: `${botName}`, headerType: 4 }, { quoted: info });
}
break;
case 'princesa': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 32) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/McPrincesa/%20${numb}.jpg` };
    const mag = '🔞McPrincesa🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${NomeDoBot}`,
        headerType: 4,
    };
    await toga.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'carniello': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 29) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/carniello/%20${numb}.jpg` };
    const mag = '🔞carniello🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'vitacelestine': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 30) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/VitaCelestine/%20${numb}.jpg` };
    const mag = '🔞Vita Celestine🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'pornovideo': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 45) + 1;
    const videoUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PornoVideo/${numb}.mp4`;
    const caption = '🔞Porno Video🔞';
    
    // Use o método sendMessage para enviar o vídeo
    await loli.sendMessage(from, { video: { url: videoUrl }, caption: caption, footer: `${botName}`, headerType: 4 }, { quoted: info });
}
break;
case 'onlyfansvideo': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 47) + 1;
    const videoUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/OnlyfansVideo/%20${numb}.mp4`;
    const caption = '🔞Onlyfans Video🔞';
    
    // Use o método sendMessage para enviar o vídeo
    await loli.sendMessage(from, { video: { url: videoUrl }, caption: caption, footer: `${botName}`, headerType: 4 }, { quoted: info });
}
case 'marukarv': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 40) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MaruKarv/%20${numb}.jpg` };
    const mag = '🔞Maru Karv🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'marinamui': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 27) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MarinaMui/%20${numb}.jpg` };
    const mag = '🔞Marina Mui🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'leticiashirayuki': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 28) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LeticiaShirayuki/%20${numb}.jpg` };
    const mag = '🔞Leticia Shirayuki🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'laynuniz': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 25) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LayNuniz/%20${numb}.jpg` };
    const mag = '🔞Lay Nuniz🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'isawaifu': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 21) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/IsaWaifu/%20${numb}.jpg` };
    const mag = '🔞IsaWaifu🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'isadoramartinez': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 30) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/ISADORA%20MARTINEZ/%20${numb}.jpg` };
    const mag = '🔞Isadora Martinez🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'giovannacampomar': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 34) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/GiovannaCampomar/%20${numb}.jpg` };
    const mag = '🔞GiovannaCampomar🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'fehgalvao': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 32) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/FehGalvao/%20${numb}.jpg` };
    const mag = '🔞Feh Galvao🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'egril': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 36) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/egril/%20${numb}.jpg` };
    const mag = '🔞Egril Video🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'cclowniac': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 29) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Cclowniac/%20${numb}.jpg` };
    const mag = '🔞Cclowniac🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'camibrito': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 30) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/CamiBrito/%20${numb}.jpg` };
    const mag = '🔞Cami Brito🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'brendatrindade': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 25) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BrendaTrindade/%20${numb}.jpg` };
    const mag = '🔞Brenda Trindade🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'belledelphine': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 31) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BelleDelphine/%20${numb}.jpg` };
    const mag = '🔞Belle Delphine🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'babymatoso': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 36) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BabyMatoso/%20${numb}.jpg` };
    const mag = '🔞Baby Matoso🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'aninhalopes': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 29) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AninhaLopes/%20${numb}.jpg` };
    const mag = '🔞Aninha lopes🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'amiichan': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 30) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Amiichan/%20${numb}.jpg` };
    const mag = '🔞Amii chan🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'videoamador': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 41) + 1;
    const videoUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AmadorVideo/${numb}.mp4`;
    const caption = '🔞Video amador 🔞';
    
    // Use o método sendMessage para enviar o vídeo
    await loli.sendMessage(from, { video: { url: videoUrl }, caption: caption, footer: `${botName}`, headerType: 4 }, { quoted: info });
}
break;
case 'alyciaribeiro': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 28) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlyciaRibeiro/%20${numb}.jpg` };
    const mag = '🔞Alycoa Ribeiro🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'alinefox': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 60) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlimeFox/%20${numb}.jpg` };
    const mag = '🔞Aline fox🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'alinefaria': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 65) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlineFaria/%20${numb}.jpg` };
    const mag = '🔞Aline faria🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
case 'meadinha': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 33) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Me1adinha/%20${numb}.jpg` };
    const mag = '🔞Me1adinha🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;

case 'nath': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 23) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/NathBister%C3%A7o/%20${numb}.jpg` };
    const mag = '🔞NathBister🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;

case 'nega': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 21) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/pacgaBarbie/%20${numb}.jpg` };
    const mag = '🔞gaBarbie🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;

case 'pornofot': {
    reagir(from, "😈");
    reply(`Enviando...`);
    const numb = Math.floor(Math.random() * 44) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PornoFoto/%20${numb}.jpg` };
    const mag = '🔞PornoFoto🔞';
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
            case 'rute': {
    // Reação ao comando
    reagir(from, "😈");
    reply(`Enviando...`);

    // Gerando número aleatório para selecionar a imagem
    const numb = Math.floor(Math.random() * 30) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/RuteRocha/%20${numb}.jpg` };
    const mag = '🔞RuteRocha🔞';
    
    // Configurando a mensagem com imagem e botão
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };

    // Enviando a mensagem para o grupo ou chat onde o comando foi chamado
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
            case 'polonesa': {
    // Reação ao comando
    reagir(from, "😈");
    reply(`Enviando...`);
    
    // Gerando número aleatório para selecionar a imagem
    const numb = Math.floor(Math.random() * 28) + 1;
    const wew = { url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PolonesaDoHype/%20${numb}.jpg` };
    const mag = '🔞PolonesaDoHype🔞';
    
    // Configurando a mensagem com imagem e botão
    let buttonMessage = {
        image: wew,
        caption: mag,
        footer: `${botName}`,
        headerType: 4,
    };
    
    // Enviando a mensagem para o grupo ou onde foi solicitado
    await loli.sendMessage(from, buttonMessage, { quoted: info });
}
break;
          case 'vazados':
            if (!isPremium) return reply(msg.premium)
            reply(`${pushname} enviando no seu pv olha la`)
            {
              json = JSON.parse(fs.readFileSync('./arquivos/sex/sex.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                video: {
                  url: random,
                  quoted: info
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              loli.sendMessage(sender, templateMassage)
            }
            break
            
                      case 'editfreefire': case 'editefreefire': case 'editff':
            reply(`${pushname} enviando`)
            {
              json = JSON.parse(fs.readFileSync('./arquivos/freefire.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                video: {
                  url: random,
                  quoted: info
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              loli.sendMessage(from, templateMassage)
            }
            break
            
            case 'freefire':
            reply(`${pushname} enviando no seu pv olha la`)
            {
              json = JSON.parse(fs.readFileSync('./arquivos/sex/freefire.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                video: {
                  url: random,
                  quoted: live
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              loli.sendMessage(sender, templateMassage)
            }
            break


case 'audiolento': 
case 'slow':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'audiorapido':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'grave2':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'grave':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'estourar': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass2': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'vozmenino':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply('espere')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'tabela':
if(verificado === true) {
reply(`Enviando no Privado...`)
await loli.sendMessage(sender, {text: tabela(prefix, botName)}, {quoted: info})
} else {
await loli.sendMessage(sender, {text: tabela(prefix, botName)}, {quoted: info})  
}
break 

case 'checkativo':
case 'check':
if (!isGroup) return reply(msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break

case 'atividades':  
try{
if(!isGroupAdmins) return reply(msg.adm)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `*Atividade dos membros do grupo:*\n\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) {
var indnum = numbersIds.indexOf(obj.id)
teks += `*• Membro:* @${countMessage[ind].numbers[indnum].id.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
} else {
teks += `*• Membro:* @${obj.id.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
}
mem.push(obj.id)
}
loli.sendMessage(from, {text: teks, contextInfo:{mentionedJid: mem}}, {quoted: info})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'cases':
if(!isCreator) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("nenhuma case encontrada.") } }
loli.sendMessage(from, { text: listCases() }, { quoted: live });
} catch (e) {
console.log(e)
reply('ocorreu um erro ao obter as cases.') }
break

case 'regraspp':  
if(!isGroupAdmins) return reply('Qual foi membro comum?')
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
loli.sendMessage(from, {text: txtz}, {quoted: info})
break

          case 'roubar': case 'rename':
            {
              (async function () {
                var legenda = q ? q?.split("/")[0] : ` `
                var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `  `
                if (isMedia && !info.message.videoMessage || isQuotedImage) {
                  var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
                  rane = getRandom('.' + await getExtension(encmedia.mimetype))
                  buffimg = await getFileBuffer(encmedia, 'image')
                  fs.writeFileSync(rane, buffimg)
                  rano = getRandom('.webp')
                  exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                    fs.unlinkSync(rane)
                    // "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
                    var json = {
                      "sticker-pack-name": legenda,
                      "sticker-pack-publisher": autor
                    }
                    var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                    var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                    var exif = Buffer.concat([exifAttr, jsonBuff])
                    exif.writeUIntLE(jsonBuff.length, 14, 4)
                    let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111) + ".temp.exif"
                    fs.writeFileSync(`./${nomemeta}`, exif)
                    exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                      loli.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                      fs.unlinkSync(nomemeta)
                      fs.unlinkSync(rano)
                    })
                  })
                } else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
                  var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
                  rane = getRandom('.' + await getExtension(encmedia.mimetype))
                  buffimg = await getFileBuffer(encmedia, 'video')
                  fs.writeFileSync(rane, buffimg)
                  rano = getRandom('.webp')
                  await ffmpeg(`./${rane}`)
                    .inputFormat(rane.split('.')[1])
                  exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                    fs.unlinkSync(rane)
                    let json = {
                      "sticker-pack-name": legenda,
                      "sticker-pack-publisher": autor
                    }
                    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                    let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                    let exif = Buffer.concat([exifAttr, jsonBuff])
                    exif.writeUIntLE(jsonBuff.length, 14, 4)
                    let nomemeta = "temp.exif"
                    fs.writeFileSync(`./${nomemeta}`, exif)
                    exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                      loli.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                      fs.unlinkSync(nomemeta)
                      fs.unlinkSync(rano)
                    })
                  })
                } else {
                  reply(`MARQUE ALGUMA FOTO OU VIDEO DE ATE 9 SEGUNDOS\n\nEXEMPLO:\n\n.roubar luan/lindão`)
                }
              })().catch(e => {
                console.log(e)
                reply("Hmm deu erro")
                try {
                  if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
                  if (fs.existsSync(rano)) fs.unlinkSync(rano);
                  if (fs.existsSync(media)) fs.unlinkSync(media);
                } catch { }
              })
            }
            break
                       
case 'banco': { //bay; ALEMAO BAY: ZENITSU//

var salldo = checkATMuser(sender)


loli.sendMessage(from, {image: fs.readFileSync('./loli/image/banco.jpg'), caption: `
『 👤 』 *NOME: ${pushname}*
『 🏛️ 』 *BANCO: NUBANK*
『 💵 』 *DINHEIRO: ${salldo}*
『 🏡 』 *CASA: ${iscasa? "SIM ✅" : "NÃO ❌"}*
『 🤑 』 *RICO: ${istagrico? "SIM ✅" : "NÃO ❌"}*
`},{quoted: info})
}
break

	case 'minerar': {
		// Verificar se o arquivo JSON existe, e criar se não existir
		if (!fs.existsSync('./loli/rpg/pescarCooldown.json')) {
			fs.writeFileSync('./loli/rpg/pescarCooldown.json', JSON.stringify({}));
		}
	
		// Carregar o objeto pescarCooldown do arquivo JSON
		const pescarCooldown = JSON.parse(fs.readFileSync('./loli/rpg/pescarCooldown.json', 'utf8'));
	
		const currentTimePescar = Date.now();
		const lastPescarTime = pescarCooldown[sender] || 0;
		const timeSinceLastPescar = currentTimePescar - lastPescarTime;
		const pescarCooldownTime = 5 * 60 * 1000; // 5 minutos em milissegundos
	
		if (timeSinceLastPescar < pescarCooldownTime) {
			const remainingTime = (pescarCooldownTime - timeSinceLastPescar) / 1000;
			return reply(`Aguarde ${remainingTime.toFixed(0)} segundos antes de minerar novamente.`);
		}
	
		reply(`*OLÁ ${pushname}, AGUARDE AGUARDE 5 SEGUNDA PARA CONCLUÍR A MINERAÇÃO**`);
			// Atualizar o tempo da última pescaria no arquivo JSON
		pescarCooldown[sender] = currentTimePescar;
		fs.writeFileSync('./loli/rpg/pescarCooldown.json', JSON.stringify(pescarCooldown));
		await sleep(5000);
		lagoostas = Math.floor((Math.random() * 150) + 40);
		carranguejos = Math.floor((Math.random() * 150) + 30);
		camaroes = Math.floor((Math.random() * 150) + 40);
		mexilhao = Math.floor((Math.random() * 150) + 50);
		var resultadoresultadoo = lagoostas + carranguejos + camaroes + mexilhao;
	
		addFilter(from);
	
		try {
			picc = await loli.profilePictureUrl(m.chat, "image");
		} catch(e) {
			picc = 'https://telegra.ph/file/9651f2a3a24c15ef71dd1.mp4';
		}
	
		ds = await getBuffer(picc);
	
		let thumbInfo = `
	*┏━── *「️ 🔰  M I N E  🔰 」*  ─━┓*
	*│▢ Total de PEDRAS: ${lagoostas}*
	*│▢ Total de DIAMANTES: ${carranguejos}*
	*│▢ Total de OUROS: ${camaroes}*
	*│▢ Total de FERRO: ${mexilhao}*
	*│▢ *Resultado Final: ${resultadoresultadoo}*
	*┗━── *「️ 🔰  M I N E  🔰 」*  ─━┛*
	[㕚] *Isso significa que foi adicionado em sua carteira R$${resultadoresultadoo},00 em coins!*
	`;
	
 loli.sendMessage(from,  {image: ds, caption: `${thumbInfo}`}, {quoted: info});
		addKoinUser(sender, +resultadoresultadoo);
	
	
	
		break;
	}
	
case 'trabalhar':
minerag = Math.floor((Math.random() * 10) * 150);
loli.sendMessage(from, {image: fs.readFileSync('./loli/image/trabalhar.jpg'), caption: `

*VC TRABALHOU E GANHA ${minerag}*

`},{quoted: info})
addKoinUser(sender, + minerag)
break

case 'money':
 loli.sendMessage(from, {react: {text: `💵`, key: info.key}}) 
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/7d1a76c9d628836f27e8d.mp4`}, gifPlayback: true, caption: `
╭━➪_MONEY_
│◦➛𝗡𝗼𝗺𝗲 : ${pushname}
│◦➛𝗡𝘂𝗺𝗲𝗿𝗼 : ${sender.split("@")[0]}
│◦➛𝗗𝗶𝗻𝗵𝗲𝗶𝗿𝗼 : ${checkATMuser(sender)}
╰━━━━━━━━
`
},{quoted: info})
 break
 
case 'fundomenu':
if(!Creator) return reply(msg.dono)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`opa, cria! já estou trocando a foto do menu para você..`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.logo.splice([])
fs.writeFileSync('./loli/image/menu.jpg', JSON.stringify(logoslink, null, 2))
setTimeout(() => {
logoslink.logo.push(res)
fs.writeFileSync('./loli/image/menu.jpg', JSON.stringify(logoslink, null, 2))
reply(`a foto do menu foi alterada com sucesso para: ${logoslink.logo}`)
}, 1000)
} else {
reply(`mande uma imagem com o comando ${prefix + command} para trocar a foto de todos os menus..`)
}
break

case 'fuguete':{
if (!isGroup) return reply('Comando apenas para grupo!') 
const doublez = Math.floor(Math.random() * 5) + 1
const prolxxp = doublez + Number(args[0])
const ganhardidinho = Math.floor(Math.random() * 50) * 100
const perdidinho = Math.floor(Math.random() * 50) * 100
const perda = Math.floor(Math.random() * 7) + 1
const ganha = Math.floor(Math.random() * 7) + 1
const dinheiro_ = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro_) 
const quantidader = `50`
if (checkxpr <= quantidader) return reply(`tu ta sem dinheiro`(quantidader, checkxpr))
if (Number(args[0]) < 1) return reply(`Qual o valor que você deseja apostar?`)
if (isNaN(args[0])) return reply(`Digite "${prefix}fuguete 100" (desse jeito sem nenhuma vírgula ou letras por favor.`)
if (doublez == 1) {
valoh3 = Number(args[0])
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/02aee2582cf5c3485b239.mp4`}, gifPlayback: true, caption: `
*VC PERDEU 00.${perda}.X TENTE MAIS UMA VEZ*

*DINHEIRO PERDIDO:* *${valoh3}*
`,
})
confirmATM(sender, valoh3)
} else if (doublez == 2) {
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/f2aa6670076884015f862.mp4`}, gifPlayback: true, caption: `
*POR POUCO VC NAO PERDE VC GANHOU 00.${ganha}.X*

*DINHEIRO GANHO:* *${prolxxp}*
`,
})
addKoinUser(sender, prolxxp, dinheiro_) 
} else if (doublez == 3) {
valoh4 = Number(args[0])
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/02aee2582cf5c3485b239.mp4`}, gifPlayback: true, caption: `
*VC OTARIO VC PERDEU 00.${perda}.X*

*DINHEIRO PERDIDO:* *${valoh4}*
`,
})
confirmATM(sender, valoh4)
} else if (doublez == 4) {
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/f2aa6670076884015f862.mp4`}, gifPlayback: true, caption: `
*SORTE VC GANHOU 00.${ganha}.X*

*DINHEIRO GANHO:* *${prolxxp}*
`,
})
addKoinUser(sender, prolxxp, dinheiro_) 
} else if (doublez == 5) {
valoh5 = Number(args[0])
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/02aee2582cf5c3485b239.mp4`}, gifPlayback: true, caption: `
*ACONSELHO VC A NAO JOGAR MAIS* *VC PERDEU 00.${perda}.X*

*DINHEIRO PERDIDO:* *${valoh5}*
`,
})
confirmATM(sender, valoh5)
} else if (doublez == 6) {
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/f2aa6670076884015f862.mp4`}, gifPlayback: true, caption: `
*OLHA SORTE MAIS UMA VEZ VC GANHOU 00.${ganha}.X*

*DINHEIRO GANHO:* *${prolxxp}*
`,
})
addKoinUser(sender, prolxxp, dinheiro_)

}
}
break 

case 'anime1':
    if (args.length < 1) return reply(`${prefix}${command} e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 18) return reply('O texto é longo, até 18 caracteres') //maximo de caracteres
    buffer =(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita COM SUCESSO*'})
    await loli.sendMessage(from, { react: { text: `😚`, key: info.key }})
    reply (`olha seu pv hehe`)
    break


case 'pescar':
pescando = Math.floor((Math.random() * 10) * 150);
const lagostas = `${Math.floor(Math.random() * 105)}`
const caranguejos = `${Math.floor(Math.random() * 105)}`
const mexilhão = `${Math.floor(Math.random() * 105)}`
const peixe = `${Math.floor(Math.random() * 105)}`

loli.sendMessage(from, {image: fs.readFileSync('./loli/image/pescar.jpg'), caption: `
┏━── *「️ 🎣️ 𝐏 𝐄 𝐒 𝐂 𝐀 🎣 」*  ─━┓
│▢ Total de Lagostas: ${lagostas}
│▢ Total de Caranguejos: ${caranguejos}
│▢ Total de peixe:${peixe}
│▢ Total de Mexilhão: ${mexilhão}
┗━── *「️ 🎣️ 𝐏 𝐄 𝐒 𝐂 𝐀 🎣 」*  ─━┛



E GANHOU ${pescando}R$ 😉 🎣 `},{quoted: info})

addKoinUser(sender, + pescando)

break

	case 'churrasco': {
	// Verificar se o arquivo JSON existe, e criar se não existir
		if (!fs.existsSync('prenderCooldown.json')) {
			fs.writeFileSync('prenderCooldown.json', JSON.stringify({}));
		}
	
		// Carregar o objeto prenderCooldown do arquivo JSON
		const prenderCooldown = JSON.parse(fs.readFileSync('prenderCooldown.json', 'utf8'));
	
		const currentTimeprender = Date.now();
		const lastprenderTime = prenderCooldown[sender] || 0;
		const timeSinceLastprender = currentTimeprender - lastprenderTime;
		const prenderCooldownTime = 5 * 60 * 1000; // 5 minutos em milissegundos
	
		if (timeSinceLastprender < prenderCooldownTime) {
			const remainingTime = (prenderCooldownTime - timeSinceLastprender) / 1000;
			return reply(`Aguarde ${remainingTime.toFixed(0)} segundos vc estar preso`);
		}
		// Verificar se o arquivo JSON existe, e criar se não existir
		if (!fs.existsSync('./loli/rpg/churrascoCooldown.json')) {
			fs.writeFileSync('./loli/rpg/churrascoCooldown.json', JSON.stringify({}));
		}
	
		// Carregar o objeto churrascoCooldown do arquivo JSON
		const churrascoCooldown = JSON.parse(fs.readFileSync('./loli/rpg/churrascoCooldown.json', 'utf8'));
	
		const currentTimeChurrasco = Date.now();
		const lastChurrascoTime = churrascoCooldown[sender] || 0;
		const timeSinceLastChurrasco = currentTimeChurrasco - lastChurrascoTime;
		const churrascoCooldownTime = 5 * 60 * 1000; // 5 minutos em milissegundos
	
		if (timeSinceLastChurrasco < churrascoCooldownTime) {
			const remainingTime = (churrascoCooldownTime - timeSinceLastChurrasco) / 1000;
			return reply(`Aguarde ${remainingTime.toFixed(0)} segundos antes de fazer outro churrasco.`);
		}
	
		reply(`*OLÁ [ ${pushname} ] AGUARDE 5 SEGUNDOS*`)
		await sleep (5000);
		contrafile = Math.floor((Math.random() * 150) + 50);
		assinhadefrango = Math.floor((Math.random() * 150) + 30);
		filebigno = Math.floor((Math.random() * 150) + 40);
		pikanha = Math.floor((Math.random() * 150) + 50);
		var resultado1 = contrafile + assinhadefrango + filebigno + pikanha;
	
		addFilter(from);
	
		try {
			picc = await zenitsu.profilePictureUrl(m.chat, "image");
		} catch(e) {
			picc = 'https://telegra.ph/file/2bf2e198407f9b8bfbcd0.jpg';
		}
	
		ds = await getBuffer(picc);
	
		let thumbInfo = `
	*┏ *「️🍖 𝐂 𝐇 𝐔 𝐑 𝐑 𝐀 𝐒 𝐂 𝐎 🍖」  ┓*
	*│▢ Carne - Picanha Argentina: ${contrafile}*
	*│▢ Carne - Contra Filé: ${assinhadefrango}*
	*│▢ Carne - Asinhas de Frango: ${filebigno}*
	*│▢ Carne - Filé Mignon: ${pikanha}*
	*┗ 「️🍖 𝐂 𝐇 𝐔 𝐑 𝐑 𝐀 𝐒 𝐂 𝐎 🍖」  ┛*
	[㕚] *Foram vendidas hoje por você em nosso açougue: ${resultado1} peças de carne por você. Parabéns!*
	[㕚] *Isso significa que foi adicionado em sua carteira R$${resultado1},00 em coins!*
	`;
	
		loli.sendMessage(from,  {image: ds, caption: `${thumbInfo}`}, {quoted: info});
		addKoinUser(sender, +resultado1);
	
		// Atualizar o tempo do último churrasco no arquivo JSON
		churrascoCooldown[sender] = currentTimeChurrasco;
		fs.writeFileSync('./loli/rpg/churrascoCooldown.json', JSON.stringify(churrascoCooldown));
	
		break;
	}

case 'alugarcasa':
if(!JSON.stringify(casa).includes(sender)) return reply(`VOCE NAO TEM UMA CASA USE  ${prefix}casa`)
casaluge = Math.floor((Math.random() * 10) * 30);
casapronta = Math.floor((Math.random() * 10) * 500);
reply(`VOCE ALUGOU A CASA POR ${casaluge} DIAS\n\nVOCE GANHOU  R$${casapronta}`)
addKoinUser(sender, + casapronta)
break

case 'casa':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `300000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR CASA*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
casa.push(`${sender}`)
fs.writeFileSync('./funcoes_rpg/casa/casa.json', JSON.stringify(casa))
addKoinUser(sender, - quantidader)
reply(`*CASA COMPRADO COM SUCESSO* 😃\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'hero': case 'lot':
try {
ppimg = await zenitsu.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}
try {
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/b1febb2db7a727eee9d7d.mp4`}, gifPlayback: true, caption: ` 
┏━──────「🕴️」──────━┓
│          *SEU INVENTÁRIO*
│
│ *${isCarab? "⛑️" : "❌"} : CAPACETE*
│
│ *${isRoupab? "👔" : "❌"} : PALITOR*
│
│ *${iscasa? "🏡" : "❌"} : CASA*
│
│ *${isCaussa? "👖" : "❌"} : CALÇA*
│
│ *${isaguacoco? "💧" : "❌"} : AGUA DE COCO*
│
│ *${isSapato? "👞" : "❌"} : SAPATO*
│
│ *${isespada? "⚔" : "❌"} : ESPADA*
│
│
│
╠━━━━━━━━━━━━━━━━━━━━━━━
│             *TAGS*
╠━━━━━━━━━━━━━━━━━━━━━━━
│
│
│> RICO: ${istagrico? "SIM ✅" : "NÃO ❌"}
│
│
┗━──────「🕴️」──────━┛
`},{quoted: info})
} catch (e) {
console.log(e)
}
break

case 'tomaraguacoco':
if(!JSON.stringify(aguacoco).includes(sender)) return reply(`VOCE NAO TEM AGUA DE COCO INFINITO USE  ${prefix}aguacoco`)
aguadd = Math.floor((Math.random() * 4) * 3);
reply(`VOCE TOMOU UMA AGUA DE COCO\n\nMATOU [ ${aguadd}% ] DA SUA SEDE `)
break

case 'aguacoco':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `30000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR AGUA DE COCO INFINITO*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
aguacoco.push(`${sender}`)
fs.writeFileSync('./funcoes_rpg/agua/aguacoco.json', JSON.stringify(aguacoco))
addKoinUser(sender, - quantidader)
reply(`AGUA DE COCO COMPRADA COM SUCESSO* 🌍\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'pornovidd':{
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const dattaa = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `4000`
if (checkxpr <= quantidader) return reply(`*[❗] Desculpe ${pushname} você não tem dinhero suficiente para efetuar a compra de $4000*`)
if(!isPremium) return reply(enviar.msg.premium)
reply(`Já estou enviando no pv ${pushname}`)
await loli.sendMessage(from, {react: { text: "😈", key: info.key }})
  bla = JSON.parse(fs.readFileSync("./loli/sexv.json")) 
loli.sendMessage(sender, {video: {url: bla[Math.floor(Math.random() * bla.length)]}},{quoted: info})
addKoinUser(sender, - quantidader)
}
break

case 'capacete':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `30000`
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR A CAPACETE DE TRABALHO*\n\n*PREÇO: ${quantidader}*`)
carab.push(`${sender}`)
fs.writeFileSync('./funcoes_rpg/carab/carab.json', JSON.stringify(carab))
addKoinUser(sender, - quantidader)
reply(`*CAPACETE COMPRADO COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'calssa':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `3000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR CALÇA DE TRABALHO*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
caussa.push(`${sender}`)
fs.writeFileSync('./funcoes_rpg/caussa/caussa.json', JSON.stringify(caussa))
addKoinUser(sender, - quantidader)
reply(`*CALÇA COMPRADA COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'sapatos':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `3000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR SAPATOS DE TRABALHO*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
sapato.push(`${sender}`)
fs.writeFileSync('./funcoes_rpg/sapato/sapato.json', JSON.stringify(sapato))
addKoinUser(sender, - quantidader)
reply(`*SAPATO COMPRADO COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'palitor':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `3000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR PALITOR DE TRABALHO*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
palitor.push(`${sender}`)
fs.writeFileSync('./funcoes_rpg/palitor/palitor.json', JSON.stringify(palitor))
addKoinUser(sender, - quantidader)
reply(`*PALITOR COMPRADO COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins && !SoDono) return reply('Você precisa ser ADM pra utilizar este comando')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !m.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : m.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
loli.sendMessage(from, options)
} else if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
loli.sendMessage(from, {image: buff, mentions: yd}, {quoted: info})
} else if ((isMedia && !m.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
loli.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: info})
} else if ((isMedia && !m.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
loli.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: info})
} else if ((isMedia && !m.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? m.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : m.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
loli.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: info})
} else if(body){
if(q.length < 1) return reply('Citar oq vey?')
loli.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break

case 'tagrico':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `6000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR TAG DE RICO*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
tagrico.push(`${sender}`)
fs.writeFileSync('./funcoes_rpg/tagrico/tagrico.json', JSON.stringify(tagrico))
addKoinUser(sender, - quantidader)
reply(`*TAG RICO COMPRADO  COM SUCESSO* 💰💲💵\n\n*CUSTO 💰: ${quantidader}*`)
}
break

case 'gerarcpff':
const dinheiropi = checkATMuser(sender)
const checkxprpi = checkATMuser(sender, dinheiropi) 
const quantidaderpi = `4000`
if (checkxprpi < quantidaderpi) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR*\n\n*PREÇO: ${quantidaderpi}*`)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await loli.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: info})
addKoinUser(sender, - quantidaderpi)
break

case 'animal':
  if (!q) {
    reply(`Desculpe, parece que você não forneceu o nome do animal. Você pode usar como exemplo: *${prefixo + comando} gato*`);
     } else {
    const animais = [{ "nome": "Cão", "especie": "Canis lupus familiaris", "habitat": "Doméstico", "dieta": "Carnívoro" }, { "nome": "Gato", "especie": "Felis catus", "habitat": "Doméstico e selvagem", "dieta": "Carnívoro" }, { "nome": "Cavalo", "especie": "Equus ferus caballus", "habitat": "Doméstico e selvagem", "dieta": "Herbívoro" },
  {
    "nome": "Lobo",
    "especie": "Canis lupus",
    "habitat": "Florestas, tundras, montanhas e campos abertos",
    "dieta": "Carnívoro"
  },
  {
    "nome": "Águia",
    "especie": "Aquila chrysaetos",
    "habitat": "Florestas, montanhas e áreas costeiras",
    "dieta": "Carnívoro"
  },
  {
    "nome": "Macaco",
    "especie": "Macaca fascicularis",
    "habitat": "Florestas tropicais e subtropicais",
    "dieta": "Onívoro"
  },
  {
    "nome": "Canarinho",
    "especie": "Serinus canaria",
    "habitat": "Ilhas Canárias e Madeira",
    "dieta": "Granívoro"
  },
  {
    "nome": "Tubarão",
    "especie": "Carcharodon carcharias",
    "habitat": "Oceanos tropicais e subtropicais",
    "dieta": "Carnívoro"
  },
  {
    "nome": "Formiga",
    "especie": "Formicidae",
    "habitat": "Todos os continentes, exceto a Antártida",
    "dieta": "Onívoro"
  },
  {
  "nome": "Tartaruga",
  "especie": "Testudines",
  "habitat": "Aquático e terrestre",
  "dieta": "Onívoro"
},
{
  "nome": "Corvo",
  "especie": "Corvus corax",
  "habitat": "Florestas, campos e cidades",
  "dieta": "Carnívoro"
},
{
  "nome": "Girafa",
  "especie": "Giraffa camelopardalis",
  "habitat": "África",
  "dieta": "Herbívoro"
},
{
  "nome": "Elefante",
  "especie": "Elephas maximus",
  "habitat": "Ásia e África",
  "dieta": "Herbívoro"
},
{
  "nome": "Golfinho",
  "especie": "Delphinus delphis",
  "habitat": "Oceanos e mares",
  "dieta": "Carnívoro"
},
    {
      "nome": "Leão",
      "especie": "Panthera leo",
      "habitat": "África subsaariana",
      "dieta": "Carnívoro"
    },
    {
      "nome": "Tigre",
      "especie": "Panthera tigris",
      "habitat": "Ásia",
      "dieta": "Carnívoro"
    },
    {
      "nome": "Gorila",
      "especie": "Gorilla gorilla",
      "habitat": "África Central e Ocidental",
      "dieta": "Herbívoro"
    },
    {
      "nome": "Papagaio",
      "especie": "Psittaciformes",
      "habitat": "América do Sul, América Central, África e Oceania",
      "dieta": "Onívoro"
    },
    {
      "nome": "Coelho",
      "especie": "Oryctolagus cuniculus",
      "habitat": "Europa, África e Austrália",
      "dieta": "Herbívoro"
    },
      { "nome": "Vaca", "especie": "Bos taurus", "habitat": "Doméstico", "dieta": "Herbívoro" }, { "nome": "Porco", "especie": "Sus scrofa domestica", "habitat": "Doméstico", "dieta": "Onívoro" }, { "nome": "Galinha", "especie": "Gallus gallus domesticus", "habitat": "Doméstico", "dieta": "Onívoro" }, { "nome": "Pato", "especie": "Anas platyrhynchos domesticus", "habitat": "Doméstico e selvagem", "dieta": "Onívoro" }, { "nome": "Ganso", "especie": "Anser anser domesticus", "habitat": "Doméstico e selvagem", "dieta": "Herbívoro" }, { "nome": "Peru", "especie": "Meleagris gallopavo", "habitat": "Doméstico", "dieta": "Onívoro" }, { "nome": "Coelho", "especie": "Oryctolagus cuniculus", "habitat": "Doméstico e selvagem", "dieta": "Herbívoro" }];
    const animal = animais.find(a => a.nome.toLowerCase() === q.toLowerCase());
       if (animal) {
       reply(`*• Nome:* ${animal.nome}\n*• Espécie:* ${animal.especie}\n*• Habitat:* ${animal.habitat}\n*• Dieta:* ${animal.dieta}`);
       } else {
       reply("Animal não encontrado.")}}
       break;
       
case 'wallpapers4k': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpapers4k.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperanimes': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpaperanimes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperbranco': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpapersbranco.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break
l
case 'wallpapervermelho': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpapervermelho.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapervermelho`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperverde': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpaperverde.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperverde`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperazul': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpaperazul.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperazul`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperroxo': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpaperoxo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperoxo`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperamarelo': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpaperamarelo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperamarelo`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperrosa': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/wallpaperosa.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperosa`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break


case 'wallpapershinobu': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/shinobu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapershinobu`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/SHINOBU/fb10ed54c286b52d7e5f22f5b465274c.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperobanai': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/obanai.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperobanai`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/OBANAI/f437d7615e55a1804f637f7151769ee9.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break


case 'wallpapergyutaro': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/gyutaro.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapergyutaro`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/GYUTARO/fdcde69d36595bfd6b7671adcd510761.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapertomioka': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/tomioka.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapertomioka`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/TOMIOKA/f9572e842eb8b67f089c259459394b35.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperuzui': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/uzui.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperuzui`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/UZUI/f67c5a0a822808ac770ad49472ccc14f.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapermitsuri': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/mitsuri.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapermitsuri`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/MITSURI/fd16399b5c80072c8deee4f87bf5993e.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperdaki': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/daki.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperdaki`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/DAKI/fb8d18f68edd43d1ef752337784cf98f.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperkanao': {
//by Daniel >\<
if (!dinheiros) return reply(enviar.msg.dinheiro)
data = fs.readFileSync('./loli/mais/kanao.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperkanao`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/KANAO/fbe10876319abaabc0a63f53f2121904.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapergyenia': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/gyenia.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapergyenia`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/GYENIA/fe251cb53add17e1aa7509d59d8490f9.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Sigma-MD`
, buttons: buttons, headerType: 4}
loli.sendMessage(info.chat, buttonMessage,{quoted: info})
}
break

case 'wallpapertamayo': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/tamayo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapertamayo`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/TAMAYO/ffb690c3d847c4e7bd539b5bd81d2271.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperdouma': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/douma.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperdouma`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/DOUMA/f75946301ba1edd8934d50aa8b1ffc58.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapersanemi': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/sanemi.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapersanemi`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/SANEMI/ffcb83d47e6fcaad697077c139a37890.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapertokito': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/tokito.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapertokito`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/TOKITO/ffac2e76c9de3818aca9c4032a109084.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperSigma': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/zenitsu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperSigma`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/Sigma/e4f78ec55881a632e4e1cc3948a970c9.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperenmu': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/enmu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperenmu`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/ENMU/ff9f048986711075883534c60efb3787.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperinosuke': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/inosuke.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperinosuke`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/INOSUKE/f8ecfcc2bb254000ad05f83586517adc1.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapermuzan': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/muzan.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapermuzan`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/MUZAN/f4c5e0ea5adc28e758506648e1f08107.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperkokushibou': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/kokushibou.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperkokushibou`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/KOKUSHIBOU/fdebc314e66ab36f00eb5f8705f21d2b.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperzenitsu': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/zenitsu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperzenitsu`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/ZENITSU/fda6066353d57465fac5b029a6afa082.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Sigma-MD`
, buttons: buttons, headerType: 4}
loli.sendMessage(info.chat, buttonMessage,{quoted: info})
}
break

case 'wallpapertanjiro': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/tanjiro.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapertanjiro`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/TANJIRO/0ee8d9c8ab5e795f4cc6d96dd5c65e8f.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpaperakaza': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/akaza.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperakaza`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/AKAZA/f637dd31731a8117a33ec5da8e335352.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapergyomei': {
//by Daniel >\<
data = fs.readFileSync('./loli/mais/gyomei.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapergyomei`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/GYOMEI/f4369b05134a1b3c2da0b548b876c112.jpg`);
loli.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break




case 'narutoedits': {
data = fs.readFileSync('./loli/mais/editsnaruto.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`₊˚.ೃೀ𝑬𝑫𝑰𝑻𝑺✰𝑵𝑨𝑹𝑼𝑻𝑶፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n👤 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘥𝘰 𝘱𝘰𝘳: ${pushname}\n`]
var taikin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
tst = await getBuffer(randKey.result)
let thumbInfo = `${taikin}`;
loli.sendMessage(from, {video: tst, caption: `${thumbInfo}`},{quoted: info})
}
break			       


case 'jujutsuedits': {
data = fs.readFileSync('./loli/mais/editsjujutsu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`₊˚.ೃೀ𝑬𝑫𝑰𝑻𝑺 𝐉𝐔𝐉𝐔𝐓𝐒𝐔፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n👤 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘥𝘰 𝘱𝘰𝘳: ${pushname}\nDeseja mais? Clica em próxima-edit`]
var taikin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
tst = await getBuffer(randKey.result)
let thumbInfo = `${taikin}`;
loli.sendMessage(from, {video: tst, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'itachiedits': {
data = fs.readFileSync('./loli/mais/edits.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`₊˚.ೃೀ𝑬𝑫𝑰𝑻𝑺፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n👤 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘥𝘰 𝘱𝘰𝘳: ${pushname}\nDeseja mais? Clica em próxima-edit`]
var taikin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
tst = await getBuffer(randKey.result)
let thumbInfo = `${taikin}`;
loli.sendMessage(from, {video: tst, caption: `${thumbInfo}`},{quoted: info})
}
break         

case 'imunes':
loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: `


𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙄𝙉𝙈𝙐𝙉𝙀S


Whatsapp Taggima v3 Database
Database :
http://www.mediafire.com/file/yk8juklr067pbcf/Database_Taggima-1.zip/file
GB Pro Inmune
Download:
https://www.mediafire.com/file/6d8ubkmzpucz9g8/GB_Pro_iMUNE.apk/file

WhatsApp 2.20.152 Inmune
Download :
https://www.mediafire.com/file/lutjayzytetgrxv/WhatsApp_2.20.152_sign.apk/file

WA Fsociety V1
Download :
https://www.mediafire.com/file/zk313rzp23atavu/WA%25E2%2580%25A2Fsociety_V1_IMUNE.apk/file

WA Fsociety V2
Download :
https://www.mediafire.com/file/lutjayzytetgrxv/WhatsApp_2.20.152_sign.apk/file

TAGGIMA V19
Download :
https://www.mediafire.com/file/lutjayzytetgrxv/WhatsApp_2.20.152_sign.apk/file

廴びՇӃ⼬_ᜠ❹↯🥀🔥 2.20.164
Download :
https://www.mediafire.com/file/e411qdku6onc5zv/%E5%BB%B4%E3%81%B3%D5%87%D3%83%E2%BC%AC_%E1%9C%A0%E2%9D%B9%E2%86%AF%F0%9F%A5%80%F0%9F%94%A5+2.20.164.apk/file

KAWhatsApp Inumne
Download :
https://drive.google.com/file/d/1h1jeIP6R-hN-P0LtgWz8pAFFG0i_ntg4/view

XO WhatsApp Inmune
Download :
https://www.mediafire.com/file/24587ex7gn7rx4g/XQ_WhatsApp.apk/file

✪ஓீ‌ム‌꙳ᰯ⃪✵⃪สࣼ𝖓𝖉𝖊ᷝࣼ𝖗ᷧ𝖘ᷟ𝖔𝖓‌✵ᰯ⃪꙳.whatsapp2017.apk
Download :
https://drive.google.com/file/d/1GXIH38yUJ1ilBHFpC9LwzhT3DrZtcVp6/view

⇝‌࿇ஓீ‌ム꧁ꉣꋫꏸ-ꁒꋫꁹ ⭐️●ᴘᷮᴀ‌ᴄ‌ᴍ‌ᴀ‌ɴᷠ⚖️ ●⚠️🚸꧂Whatspp antiban whatspp
Download :
https://drive.google.com/file/d/175TB6sUelm_0oYlW1T7N6TouT0pirohn/view

2.20.193 INFO MODS
Download :
https://www.mediafire.com/file/btt4jkipnjtffv2/AHMANET+INFOMODS.apk/file

✞ ֆ么亇么ᜰⷀՇ ៜℙ₳ⱲƝ ✞
Download :
https://www.mediafire.com/file/a7ssr0fdp4m23dp/%25E2%259C%259E_%25D6%2586%25E4%25B9%2588%25E4%25BA%2587%25E4%25B9%2588%25E1%259C%25B0%25E2%25B7%2580%25D5%2587_%25E1%259F%259C%25E2%2584%2599%25E2%2582%25B3%25E2%25B1%25B2%25C6%259D_%25E2%259C%259E.apk/file

MFC WhatsApp Imune V6_2.20.135 + Databases
Download :
http://www.mediafire.com/file/83xtf82q8m9mwrg/MFC_WhatsApp_Imune_V6_2.20.135.apk/file

`},{quoted: info})

break

case 'netflix':
const netflix = require('./loli/mais/netflix.json')
if (netflix.length === 0) {
    loli.sendMessage(from, 'Desculpe, não há mais contas disponíveis no momento.');
  } else {
    const randomIndex1 = Math.floor(Math.random() * netflix.length);
    const conet = netflix[randomIndex1];
    netflix.splice(randomIndex1, 1);
    fs.writeFileSync('./loli/mais/netflix.json', JSON.stringify(netflix, null, 2));
    loli.sendMessage(from, { image: { url: 'https://telegra.ph/file/ea66a4b0e47f3bcccebfd.jpg' }, caption: `
    > Lembre-se: teste a conta para ver se tem acesso ou não, algumas contas não têm mais acesso válido, mas você pode solicita proprietário para uma base de uma nova conta, boa sorte.

    
    > Estoque: ${netflix.length} contas restantes
    
    > Login: ${conet.login}
    
    > Senha: ${conet.senha}
    
    *CREDITOS*: Mamede Carlos
    `, mentions: [sender] }, { quoted: info });
  }
break

case 'puxarcase':
try{
if (!isCreator) return loli.sendMessage(from, {text: 'somente dono'})
reply('- Calma ae amigo(a), já estou enviando o comando / case para você..')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
msgSemQuoted(`${getCase(q)}`)
} catch(e) {
console.log("[GETCASE] - ❌️ Comando não encontrado! ❌")
reply('❌️ Comando não encontrado! ❌️')
}
break



case 'minerardima':
case 'minerardiamante':
const minerardima = `${Math.floor(Math.random() * 105)}`

loli.sendMessage(from, {image: fs.readFileSync('./loli/image/diamante.jpg'), caption: `

	*┏ 「️ ⛏️ MINERIOS ⛏️* 」  
	*│*
	*│▢ 💎 DIAMANTE* ${minerardima}
  *│*
	*┗ 「️⛏️ MINERIOS ⛏️*」  
	`},{quoted: info})


break




case 'pig':
case 'urso':
case 'seta':
case 'papel':
case 'grafit4':
case 'blackpinkepo':
case 'areia':
case 'balckpingv2':
case 'brotoluz':
case 'borracha':
case 'brilhante':
case 'diabo': 
case 'crack':
case 'vietnam':
case 'goldt':
case 'biscoito':
if(!q) return reply("Ei, Cadê o Texto?")
reply("Estou Gerando, Aguarde um Pouquinho...")
loli.sendMessage(from,
 {image: {url: `https://tohsaka.onrender.com/api/ephoto/${command}?nome=${q}&apikey=tohsaka`}}, 
{quoted: info})
break

case 'autoban':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if(isAdeusCara) return reply("Já está ativado.")
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./arquivos/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (Number(args[0]) === 0) {
if(!isAdeusCara) return reply("Já está Desativado.")  
var ind = dbids.indexOf(from)		
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./arquivos/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'pix'://by Daniel
if (args.length < 1) return reply(`Modo certo de se usar ${prefix}pix @ | valor`)
      
                    if (!q.includes('/')) return reply(`Você precisa colocar o valor que deseja transferir.\n\nExemplo:\n\n*${prefix}Pix @pessoa / 3000*`)
                const tujuan = q.substring(0, q.indexOf('/') - 1)
                const jumblah = q.substring(q.lastIndexOf('/') + 1)
                if(isNaN(jumblah)) return await reply('O valor precisa está em números...')
                if (jumblah < 50 ) return reply(`transfrência mínima e de 50 Coins`)
                if (checkATMuser(sender) < jumblah) return reply(`Você não tem Coins suficiente para fazer uma transferência, você precisa ter no minímo 1000 de Coins`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.00 *  jumblah //IMPOSTO CADA 1 DE DINHERO, ALMENTA E CAI NA SUA CONTA, TODA VEZ QUÊ ALGUÉM FAZER TRANSFERENCIA
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('558598603654@s.whatsapp.net', fee)
                
                pingaa = `*TRANSFERÊNCIA REALIZADA*

[🚹]> ORIGEM: *${sender.split("@")[0]}*
[🗽]> DESTINARIO: *${tujuan}*
[💵]> VALOR DA TRANSFERÊNCIA: *${jumblah}*
[🗒]> BANCO: *BANK*
[⚠]> TARIFA: *0,00*
`;
              
                loli.sendMessage(from, {text: pingaa}, {quoted: info})
break    

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./arquivos/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'botoff':
case 'boton':
case 'bot':
if (!isGroup) return reply(msg.grupo)
if (!isCreator) return reply("Só dono pode executar esta ação...")
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (botoff.includes(from)) return reply('Ja esta ativo')
botoff.push(from)
fs.writeFileSync('./arquivos/grupos/botoff.json', JSON.stringify(botoff))
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if (Number(args[0]) === 0) {
if (!botoff.includes(from)) return reply('Ja esta Desativado')
pesquisar = from
processo = botoff.indexOf(pesquisar)
while(processo >= 0){
botoff.splice(processo, 1)
processo = botoff.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/grupos/botoff.json', JSON.stringify(botoff))
reply(`Ativando todos os funcionamentos do bot novamente...`)
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'qrcode': case 'qr-qr-code': case 'qr-code':
if(!q) return reply(`Digite o a palavra que deseja transformar em qr code\nExemplo: ${prefix + command} ${botName}`)
reply(`enviando aguarde 15 segundos se nao ir a api caiu`)


loli.sendMessage(from, {image: {url: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${q}`}, gifPlayback: false, caption: 'AQUI ESTA SEU QR - CODE'
},{quoted: info})
break

case 'gerarpessoa':
gerarpessoa = await fetchJson(`http://nexus.vortexuscloud.com:4214/api/pessoa?apikey=keybx`)
monaco(`
\n🤠    ${pushname} AQUi ESTÁ 👍\n\n👥 ㅤ- NOME: ${gerarpessoa.Nome} 
🛜 ㅤ- CPF: ${gerarpessoa.CPF} 
🌐 ㅤ- RG: ${gerarpessoa.RG} 
👁️‍🗨️ ㅤ- DATA DE NASCIMENTO: ${gerarpessoa["Data de Nascimento"]} 
🔥 ㅤ- SEXO: ${gerarpessoa.Sexo} 
♈ ㅤ- SIGNO: ${gerarpessoa.Signo} 
➖   - FILIAÇÃO: ${gerarpessoa.Filiação} 
👾 ㅤ- MÃE: ${gerarpessoa.Mãe} 
🐂 ㅤ- PAI: ${gerarpessoa.Pai} 
🔆 ㅤ- ONLINE: ${gerarpessoa.Online} 
🔰 ㅤ- E-MAIL: ${gerarpessoa["E-Mail"]} 
⚜️ ㅤ- SENHA: ${gerarpessoa.Senha} 
➰ ㅤ- CEP: ${gerarpessoa.Endereço.CEP} 
➿ ㅤ- ENDEREÇO: ${gerarpessoa.Endereço.Endereço} 
🔢 ㅤ- NÚMERO: ${gerarpessoa.Endereço.Número} 
🆖 ㅤ- BAIRRO: ${gerarpessoa.Endereço.Bairro} 
〰️ ㅤ- CIDADE: ${gerarpessoa.Endereço.Cidade} 
♾️ ㅤ- ESTADO: ${gerarpessoa.Endereço.Estado} 
📞 ㅤ- TELEFONES: ${gerarpessoa.Telefones} 
🗿 ㅤ- ALTURA: ${gerarpessoa["Características Físicas"].Altura} 
😱 ㅤ- PESO: ${gerarpessoa["Características Físicas"].Peso} 
⭕ ㅤ- TIPO SANGUÍNEO: ${gerarpessoa["Características Físicas"]["Tipo Sanguíneo"]} 
🟥 ㅤ- COR FAVORITA: ${gerarpessoa["Cor Favorita"]} \n
`)
break;

case 'calendario':
case 'dados':
var getGroups = await loli.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
hora16 = moment.tz('America/Sao_Paulo').format('HH:mm')
date16 = moment.tz('America/Sao_Paulo').format('DD/MM')
reply(`
*${tempo.toUpperCase()}*
👤 ${pushname}

👥 *GRUPO:* ${isGroup ? groupName : "privado"}
📆 *DATA:* ${date16}
⏰ *HORA:* ${hora16}H
🤖 *BOT:* ${botName}
👑 *DONO:* ${donoName}


`)
break

case 'data': case 'Data':
reply(`Hoje e ${data} mn`)
break

case 'Hora': case 'hora':
reply(`agora são ${hora} mn`)
break



case 'gerarsenha':
const netflixx = ['A', 'B', 'CC', 'C', 'D', 'AD' , 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8', 'i9', 'j10', 'k11', 'l12', 'm13', 'n14', 'o15', 'p16', 'q17', 'r18', 's19', 't20', 'u21', 'v22', 'w23', 'x24', 'y25', 'z26', 'pB24', 'XC9P', 'T#;S', ';1H)', '0e7O', 'mGmE', 'v4g7k2q8', 'c1r9h3x6', 'n8u7z4m2', 'i8j9p4o2', 'k2r9q6d1', 'z4y5s2u7', 't3v1o2f4','n8x6w3c6', 'o2y1i8s5', 'g7q6z2m9', 'h3t4r9j8', 'f4s2u7o2', 'w3x6i8p4', 'y1z4n9l6', 'c6o2q8r9' , 'x7q2', 'f4s9', 'm2o8', 'y1t6', 'z4u7', 'j8i2', 'p4w3', 'c6n9','h3r1', 'k2l6', 's5g7', 'o2v9', 'q8x6', 'u7d1', 'w5f4', 'i8z2', 'r9y0', 't3m7','n1j9', '6a2s', 'dxb', 'ncw', 'DX', 'hp' ,'.E','3z','.m','xO','Xm','I3','Yd' ,'Nmm','3A@','z0y','MLs','E8o','0#r','Qo6','wY^' ,'4<','rD','MG',':d','6$','O4','H.','dc','9y','<A','q#','<Q' , ']','@','}','&','-', 'nc7','2NE','4nc','b55','u5l','bps' ]
gosto = body.slice(3)
const nettflx = netflixx[Math.floor(Math.random() * (netflixx.length))]
loli.sendMessage(from, {video: {url: `https://telegra.ph/file/42e6cbb931ba9e8307bad.mp4`}, gifPlayback: true, caption:`




CRIADOR DE SENHAS;


CODIGO GERADO:   ${nettflx}

`},{quoted: info})
break

case 'cartao':
case 'cartão':
if (!q) return reply(`╭━━━❀${botName}❀━━━╮\n│╭━━━──────────────━━━╮\n│╎\n││❯              〘 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋  〙\n│╎\n│╎Olá, LICHT SAN\n│╎Aqui Irei Lhe Ensinar\n│╎A Gerar Cartões\n│╎Você Deve Possuir um Bin\n│╎Bin Deve Conter 7 Números \n│╎\n│╎/Cartao 1234567\n│╎\n│╰━━────────────────━━╯\n╰━━━━━━━━━━━━━━━━━━━━━━╯`)
loli.sendMessage(from, { react: { text: `👨‍💻`, key: info.key }})
reply(`👨‍💻 Puxando Dados, Aguarde ${pushname}`)
try {
tohsakapuxadas = await fetchJson(`https://nyox.wtf/api/gerar-cc?query=${q}&apitoken=LICHTZIN`)
loli.sendMessage(from, {image: {url: `https://telegra.ph/file/433a224bc555edc4d55f1.jpg`}, caption: `${tohsakapuxadas.resultado}`}, {quoted: info})
} catch (error) {//By: Licht San
console.log(error)
}
break


case 'hack': reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 50));
break;



case 'gtasan':
loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: `

き⃟❗️MEDIAFIRE DOWNLOAD❗⃟ き

➱📁 Nome : GTA SAN
➱📊 Tamanho : 2 GB
➯🧧 Link : https://www.mediafire.com/file/ln6r3kx0ie77r9t/GTA_San_Andreas_2021.zip/file

_*Aguarde o processo de upload de mídia......*_

`},{quoted: info})

break

case '66':
if(!q) return reply(`nome da musica`)
data = await fetchJson(`http://sabapi.tech:8090/api/ytsrc/videos?q=${text}&apikey=MrRootsFree`)
ytbrt = `━「 PLAY AUDIO 」
⸺͟͞ꪶ${pushname}      ♪  
  
➤ۣۜۜ͜͡🏁 𝚃𝚒́𝚝𝚞𝚕𝚘: ${data.resultado[0].title}
➤ۣۜۜ͜͡🏁 Tempo⧽${data.resultado[0].timestamp}
➤ۣۜۜ͜͡🏁 Descrição⧽ ${data.resultado[0].description}

`
loli.sendMessage(from, { image: { url: `${data.resultado[0].image}` }, caption: ytbrt }, { quoted: info })
loli.sendMessage(from, { audio: { url: `http://sabapi.tech:8090/api/dl/ytaudio?url=${data.resultado[0].url}&apikey=MrRootsFree` }, mimetype: "audio/mpeg",
headerType: 4,
contextInfo: {
externalAdReply: {
title: `${botName}`,
body: `${data.resultado[0].title}`,
showAdAttribution: true,
thumbnail: await getBuffer(`${data.resultado[0].image}`),
mediaType: 2,
mediaUrl: `https://www.instagram.com/sandsx_krl?igsh=c2x4bGJtbTFqN2t5`,
sourceUrl: `http://Instagram.com/sandsx_krl`}}},{quoted: info}).catch(e => {
return reply(`erro`)
})
break

case 'espada':   case 'comprarespada':{
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `7000`
if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR UMA ESPADA*\n\n*PREÇO: ${quantidader}*`)
var [comprar] = q.split("")
if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
espada.push(`${sender}`)
fs.writeFileSync('./funcoes_rpg/espada/espada.json', JSON.stringify(espada))
addKoinUser(sender, - quantidader)
reply(`*ESPADA COMPRADA COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
}
break



case 'peshub':
if(!isPremium) return reply(msg.premium)
if (!q) return reply("Escreva o que quer pesquisar!")
reply (`Realizando Pesquisa Aguarde...`)
pornL = await fetchJson(`https://tohsaka.onrender.com/api/pesquisa/pornhubsrc?nome=${q}&apikey=tohsaka`)
srcL = `              『  P O R N  H U B  』\n\n        `
for (let L of pornL) {
srcL += `
Titulo: ${L.titulo}\n
Link: ${L.link}
Autor: ${L.autor}
Hype: ${L.hype}
Enviado: ${L.data_upload}\n\n━─━─━⊰᯽⊱━─━─━⊰᯽⊱━─━─━\n\n`}
loli.sendMessage(sender, {text: srcL, },{quoted: info})
break

case 'gerargp':
if(!q) return reply("Ei, Qual o Tipo de Grupo?")
reply("Aguarde, Estou Gerando os Grupos")
 if(!isPremium) return reply(enviar.msg.premium)   
    swp = await fetchJson(`https://tohsaka.onrender.com/api/pesquisa/gpwhatsapp?nome=${q}&apikey=tohsaka`)
    teks = `═══════❒『𝐀 𝐐 𝐔 𝐀  𝐁 𝐎 𝐓  𝐏 𝐄 𝐒 𝐐 𝐔 𝐈 𝐒 𝐀』❒\n\n`;
    for(let i of swp) {
        teks += " *❯ NOME:* " + i.nome+ "\n"
        teks += " *❯ DESCRIÇÃO:* " + i.descrição+ "\n"
        teks += " *❯ LINK:* " + i.link+ "\n\n"
    }
    teks += `═════════════════════`
    img = `${swp[0].img}`
    loli.sendImage(from, img, teks, info)
   reply(teks)
    break
    
case 'inativo':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix+command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
await LIMPARDOCNT_QUEMJASAIU()
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != numeroBot)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(a => a.id == i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem pessoas com ${q}  mensagens..`)
bli = `Usuários com ${q.trim()} mensagem(ns) pra baixo..\n\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `${ac +1} - _ Usuário: @${blue[ac].split("@")[0]}\n\n`
}
mention(bli)
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(msg.grupo)
if(!isGroupAdmins) return reply(msg.adm)
reagir(from, "🗒️")
await sleep(1000)
if(command == "anotar") {
var [q5, q10] = q.trim().split("/")
if(!q5 || !q10 || !q.includes("/")) return reply(`*_❕Digite o título da anotação e o texto que deseja anotar..._*\n*_🥶 Exemplo:_* ${prefix}anotar Gatos/Gatinhos são fofos...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`*_❕Esta anotação já está inclusa, utilize outro título..._*\n*_🥶 Ou você pode tirar com_* ${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./database/func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./database/func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./database/func/tabela/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(msg.grupo)
reagir(from, "📝")
await sleep(1000)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `*_🗒️ Aqui está todas as anotações registradas nesse grupo 🗒️_*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ *_📝 Anotação:_* ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
mentions(txtin)
}
break

case 'deletar': case 'delete': case 'del':  case 'd': case 'apagar':
if(!isGroupAdmins) return reply(msg.adm)
if(!menc_prt) return reply("❕Marque a mensagem do usuário que deseja apagar...")
loli.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
await sleep(1000)
reagir(from, "🧯")
break 

case 'mute': case 'm': case 'mutar':
if(!isGroup) return reply(msg.grupo)
if(!isGroupAdmins) return reply(msg.adm)
if(!isBotGroupAdmins) return reply(msg.botadm)
textin = args.join(" ")
if(!textin) return reply('*❕Marque o número que deseja mutar.*')
reagir(from, "🤐")
await sleep(1000)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(isMuted) {
var ind = GroupsMutedActived.indexOf(from)
for (let _ of mentioned) {
teks = `*_🔇 Usuário mutado:_* @${_.split('@')[0]}
*_👤 Ação do adm:_* [ ${pushname} ]`
muted[ind].numbers.push(_)
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2))
teks += '\n-\n*🤫 Caso você dar um piu, você vai ser banido do grupo.*'
mentions(teks, mentioned, true)
} else {
 const data = {
jid: from,
numbers: mentioned
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `*_🔇 Usuário mutado:_* @${_.split('@')[0]}
*_👤 Ação do adm:_* [ ${pushname} ]`
}
teks += '\n-\n*🤫 Caso você dar um piu, você vai ser banido do grupo.*'
mentions(teks, mentioned, true)
}
break

case 'desmute': case 'unmute': case 'desmutar':
if(!isGroup) return reply(msg.grupo)
if(!isGroupAdmins) return reply(msg.adm)
if(!isBotGroupAdmins) return reply(msg.botadm)
textin = args.join(" ")
if(!textin) return reply('*❕Marque o número que deseja desmutar.*')
reagir(from, "🤪")
await sleep(1000)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
var ind = GroupsMutedActived.indexOf(from)
if(isMuted) {
for(let _ of mentioned) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `*_🔊 Usuário desmutado:_* @${_.split('@')[0]}
*_👤 Ação do adm:_* [ ${pushname} ]`
}
teks += '\n-\n*🤪 agora você pode falar a vontade no grupo!*'
mentions(teks, mentioned, true)
} else {
const data = {
jid: from,
numbers: []
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `*_🔊 Usuário desmutado:_* @${_.split('@')[0]}
*_👤 Ação do adm:_* [ ${pushname} ]`
}
teks += '\n-\n*🤪 Agora você pode falar a vontade no grupo!*'
mentions(teks, mentioned, true)
}
break

case 'rankzueiros': case 'rankzueiro':
if (!isGroup) return reply(msg.grupo);
if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  

  reagir(from, "🤪");

  membrosZueiros = [];
  
  const zueiro1 = groupMembers;
  const zueiro2 = groupMembers;
  const zueiro3 = groupMembers;
  const zueiro4 = groupMembers;
  const zueiro5 = groupMembers;

  const zueiroMem1 = zueiro1[Math.floor(Math.random() * zueiro1.length)];
  const zueiroMem2 = zueiro2[Math.floor(Math.random() * zueiro2.length)];
  const zueiroMem3 = zueiro3[Math.floor(Math.random() * zueiro3.length)];
  const zueiroMem4 = zueiro4[Math.floor(Math.random() * zueiro4.length)];
  const zueiroMem5 = zueiro5[Math.floor(Math.random() * zueiro5.length)];

  const TMPZUEIRO = [
    "O rei da zoeira! 👑",
    "Mestre na arte do deboche. 😎",
    "Provocador nato. 🤣",
    "Conquistador de risadas. 🎉",
    "Doutor em piadas sem graça. 🎓",
    "Especialista em memes. 🚀",
    "Destruidor de momentos sérios. 💣",
    "Arquiteto da palhaçada. 🏰",
    "O zueiro mais querido do grupo. ❤️",
    "Sorriso contagiante, zueira constante. 😄",
    "O palhaço oficial. 🤡",
    "Mestre do sarcasmo. 😏",
    "Sabe tudo de trollagem. 😜",
    "Alegria em forma de zueira. 🎈",
    "Faz piada até com sombra. 🌚",
    "Riso garantido com esse zueiro. 😂",
    "O mestre das pegadinhas. 🤪",
    "Transforma qualquer situação em comédia. 🎭",
    "Pai da zoeira, filho do riso. 🤣",
    "Zueiro 24 horas por dia. ⏰",
  ];

  rankZueiroImg = "https://telegra.ph/file/8de9823d4d2af40b530df.jpg";
  rankZueiro = `*_Os Zueiros do Grupo estão prontos para zoar:_*
*╭────────────*
*│* 🤪 @${zueiroMem1.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem2.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem3.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem4.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem5.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*╰────────────*`;

  membrosZueiros.push(zueiroMem1.id);
  membrosZueiros.push(zueiroMem2.id);
  membrosZueiros.push(zueiroMem3.id);
  membrosZueiros.push(zueiroMem4.id);
  membrosZueiros.push(zueiroMem5.id);

  mencionarIMG(rankZueiro, rankZueiroImg);
  break;

  case 'chato':
  if (!isGroup) return reply(msg.grupo);
  reagir(from, "😒");
  setTimeout(async () => {
    const niveisDeChatice = [
      "um pouco chatinho...",
      "na média da chatice.",
      "chato, mas dá para aguentar.",
      "muito chato, cuidado!",
      "ultra chato, ninguém merece!",
    ];
    const mensagemChata = niveisDeChatice[Math.floor(Math.random() * niveisDeChatice.length)];
    textchato = `🙄 @${sender_ou_n.split("@")[0]} é ${mensagemChata}`
    mention(textchato)
  }, 2000);
  break;

  // MENU JOGOS // 

case 'jogo1':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Minecraft:* https://www.mediafire.com/file/4k6ajlxiht8kp4n/Minecraft_1.21.0_OFFICIAL.apk/file`)
break
case 'jogo2':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *DragonBall Z - Dokkan:* https://www.mediafire.com/file/015ibjiljfkv7uo/Dokkan_v4_12_1_MOD.apk/file`)
break
case 'jogo3':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *GTA SanAndreas:* https://www.mediafire.com/file/ln6r3kx0ie77r9t/GTA_San_Andreas_2021.zip/file`)
break
case 'jogo4':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *GTA SA - Legendado em Português:* http://www.mediafire.com/file/7op13aup1ll7m9y/GTA_SA_COM_TRADU%25C3%2587%25C3%2583O_PT-BR.zip/file`)
break
case 'jogo5':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *GTA SA com Mod Cleo:* http://www.mediafire.com/file/d8cfwzctx95x0dx/GTA_SA_v2.00_Mod_Cleo.zip/file`)
break
case 'jogo6':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *GTA SA Online:* https://www.mediafire.com/file/0xccd5m0zwqstag/GTA_SA_ONLINE_SAMP_ByHT.zip/file`)
break
case 'gpsamp':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu o grupo, espero que você goste!
-
🔥 *Grupo Ofc:* https://chat.whatsapp.com/JDEH0eU70z2LLU4FywshzY`)
break
case 'jogo7':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *GTA SuperLite + Mod Cleo:* http://www.mediafire.com/file/wdkg8pmndtihil3/GTA_SA_super_lite_mod_cleo_ByHT.zip/file`)
break
case 'jogo8':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *LastDay on Eart Survival:* https://www.mediafire.com/file/k4pr6awvr5eb1ak/Last%20Day%20on%20Earth%201.17.7-mod.apk/file `)
break
case 'jogo9':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Bomber Friends MOD:* https://www.mediafire.com/file/dir8pwrb1mpm57w/Bomber_Friends_v4.10_MOD.apk/file`)
break
case 'jogo10':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Arcade Hunter:* https://www.mediafire.com/file/ugcdaclnpodtxxs/Arcade_Hunter-Sword%252CGun%252C_and_Magic_1.11.0-mod.apk/file`)
break
case 'jogo11':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Defesa de Zombie Ocioso:* https://www.mediafire.com/file/8422sjofw1cdnka/Zombie+Idle+Defense+1.5.79.229MOD-t.apk/file`)
break
case 'jogo12':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Pac-Man:* https://www.mediafire.com/file/gxwy01ni99pcur2/PAC-MAN+9.2.7.10150MOD-t.apk/file`)
break
case 'jogo13':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Car Driving School Simulator - APK:* https://www.mediafire.com/file/r6aps8mn6wqoabj/Car+Driving+School+Simulator+3.1.0.283MOD-t.apk/file
🎳 _Obrigatório instalar o OBB:_
 https://www.mediafire.com/file/hcsb5tpr7byh8fg/com.boombitgames.DrivingSchoolParking.zip/file`)
break
case 'jogo14':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Cyber Fighters Premium:* https://www.mediafire.com/file/4tmv2cdahvqamlx/Cyber+Fighters+Premium+1.11.35.68MOD-t.apk/file`)
break
case 'jogo15':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Rag Racing:* https://www.mediafire.com/file/g88v399ks1fpnfq/drag-racing-mod_2.0.37.rar/file`)
break
case 'jogo16':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Mr. Brow:* https://www.mediafire.com/file/i0ii099sejk9fnk/Mr+Bow+4.15.75MOD-t.apk/file`)
break
case 'jogo17':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Airport City:* https://www.mediafire.com/file/vuupmpp3r03lso0/Airport+City+8.7.18.101418MOD-t.apk/file`)
break
case 'jogo18':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Crash Bandicoot:* https://www.mediafire.com/file/nyx8rjqn5m51o3r/Crash+Bandicoot+Mobile+v0.7.6242+Mod.apk/file `)
break
case 'jogo19':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Real Steel World Robot Boxing (APK+OBB):* https://www.mediafire.com/file/zcnsxb55mldn51e/Real+Steel+World+Robot+Boxing+v54.54.126+Mod.apk/file`)
break
case 'jogo20':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Anger of Sticker:* https://www.mediafire.com/file/zfmqmszkhbgoem2/anger-of-stick-5-mod_1.1.39.apk/file`)
break
case 'jogo21':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Angry Birds 2 (APK+OBB)*
https://www.mediafire.com/file/uwnurszwrdbv5ge/angrybirds2-2481.apk/file`)
break
case 'jogo22':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Especial Force Group 2 (CS):* https://www.mediafire.com/file/uwf5cq9u8tjg44x/specialforcesgroup2-421.apk/file`)
break
case 'jogo23':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Roblox:* https://apkadmin.com/k05ck2q6ioo1/ROBLOX_v2.459.415955_MOD_MENU.apk.html`)
break
case 'jogo24':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Critical Striker:* https://www.mediafire.com/file/7yqmk1gn4wrieri/CRITICAL_STRIKE.zip/file`)
break
case 'jogo25':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Dream League Soccer:* http://www.mediafire.com/file/yuw9n5d4phzz5wg/Dream_League_Soccer_2019_v6.13-mod.apk/file`)
break
case 'jogo26':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Clash of Clans:* http://www.mediafire.com/file/aoaem76tyg0hvfv/Clash_Of_Clans_v13.675.6_MOD.apk/file`)
break
case 'jogo27':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Criminal Case Paris:* http://www.mediafire.com/fil...e/i5pbv8d7yjbbtly/Criminal%20Case%20Paris%20v2.36.1-mod.apk/file`)
break 

case 'jogo28':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Drift Max World:* https://www.mediafire.com/file/hqui6asekutsocq/DRIFT+MAX+WORLD+DINHEIRO+INFINITO.zip/file`)
break

case 'jogo29':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Downhill Masters:* https://www.mediafire.com/file/9cdgreyc8amkto9/Downhill_Masters_v1.0.59_MOD.apk/file`)
break
case 'jogosamp':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
☕ IP DO SERVIDOR DO MEU CRIADOR: 23.88.73.88:11627
-
🎳 *SA-MP:* https://play.google.com/store/apps/details?id=ru.unisamp_mobile.launcher`)
break

case 'jogo30':
reagir(from, "🎮")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎳 *Monopoly:* https://www.mediafire.com/file/q5jfi61xwbqiu2x/Monopoly-v1-7-11-mod.zip/file`)
break 

// SÉRIES //

case 'serie1':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Arcane:* https://overflix.online/series/arcane/`)
break

case 'serie2':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Stranger Things:* https://overflix.online/series/stranger-things-gratis-hd/`)
break

case 'serie3':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Soldados ou Zumbis:* https://overflix.online/series/s-o-z-soldados-ou-zumbis/`)
break

case 'serie4':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Senhor dos Aneis:* https://overflix.online/series/o-senhor-dos-aneis-os-aneis-de-poder-online-hd-gratis/`)
break

case 'serie5':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Riverdale:* https://overflix.online/series/riverdale-online-gratis-hd-full/`)
break

case 'serie6':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *A casa do dragão:* https://overflix.online/series/a-casa-do-dragao-online-gratis-hd/`)
break

case 'serie7':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Sintonia:* https://overflix.online/series/sintonia-online-gratis/`)
break

case 'serie8':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Chucky:* https://overflix.online/series/chucky-a-serie/`)
break

case 'serie9':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Flash:* https://overflix.online/series/flash-hd-online-gratis/`)
break

case 'serie10':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Game of Thrones:* https://overflix.online/series/game-of-thrones-hd-online-gratis/`)
break

case 'serie11':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Legados:* https://overflix.online/series/legados-gratis-hd-online/`)
break

case 'serie12':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *The Good Doctor:* https://overflix.online/series/the-good-doctor-o-bom-doutor-hd-online/`)
break

case 'serie13':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *The Walking Dead:* https://overflix.online/series/the-walking-dead/`)
break

case 'serie14':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Peaky Blinders:* https://overflix.online/series/peaky-blinders-sangue-apostas-e-navalhas/`)
break

case 'serie15':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Diarios de um vampiro:* https://overflix.online/series/diarios-de-um-vampiro/`)
break

case 'serie16':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Gavião Arqueiro:* https://overflix.online/series/gaviao-arqueiro-full-online-gratis/`)
break 

case 'serie17':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Westworld:* https://overflix.online/series/westworld-hd-gratis-online/`)
break

case 'serie18':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Lúcifer:* https://overflix.online/series/lucifer-online-hd/`)
break

case 'serie19':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Lobo Adolecentes:* https://overflix.online/series/lobo-adolescente/`)
break

case 'serie20':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *La Casa de Papel:* https://overflix.online/series/la-casa-de-papel/`)
break

case 'serie21':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Cobra Kai:* https://overflix.online/series/cobra-kai-online-gratis-hd/`)
break

case 'serie22':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Love Victor:* https://overflix.online/series/love-victor-gratis-online-hd/`)
break

case 'serie23':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Vikings:* https://overflix.online/series/vikings-hd/`)
break

case 'serie24':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Cavaleiro da Lua:* https://overflix.online/series/cavaleiro-da-lua-online-gratis-hd-full/`)
break

case 'serie25':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Fear The Walking Dead:* https://overflix.online/series/fear-the-walking-dead/`)
break

case 'serie26':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Rick Morty:* https://overflix.online/series/rick-morty/`)
break

case 'serie27':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Round 6:* https://overflix.online/series/round-6-online-gratis-hd-full/`)
break

case 'serie28':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Carnival Row:* https://overflix.online/series/carnival-row-online-hd/`)
break

case 'serie29':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Dark:* https://overflix.online/series/dark/`)
break

case 'serie30':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Arqueiro:* https://overflix.online/series/arqueiro/`)
break 

case 'serie31':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Eu Nunca:* https://overflix.online/series/eu-nunca/`)
break

case 'serie32':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *The Last Kingdom:* https://overflix.online/series/the-last-kingdom/`)
break

case 'serie33':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *O livro de Boba Fett:* https://overflix.online/series/o-livro-de-boba-fett-hd-online-gratis-full/`)
break

case 'serie34':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Ragnarok:* https://overflix.online/series/ragnarok/`)
break 

case 'serie35':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *OS 100:* https://overflix.online/series/os-100/`)
break

case 'serie36':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *FBI:* https://overflix.online/series/fbi/`)
break

case 'serie37':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Extracurricular:* https://overflix.online/series/extracurricular/`)
break

case 'serie38':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Halo:* https://overflix.online/series/halo-online-gratis/`)
break

case 'serie39':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Warrior Nun:* https://overflix.online/series/warrior-nun-online-completo/`)
break

case 'serie40':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Anne With:* https://overflix.online/series/anne-with-an-e/`)
break

case 'serie41':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Patrulha do destino:* https://overflix.online/series/patrulha-do-destino-online/`)
break

case 'serie42':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Dinastia:* https://overflix.online/series/dinastia/`)
break

case 'serie43':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Watchmen:* https://overflix.online/series/watchmen/`)
break

case 'serie44':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_🥶 Olá , aqui está o seu pedido, espero que você goste!_*
-
🎥 *Lovecraft Country:* https://overflix.online/series/lovecraft-country-dublado-legendado-online-hd-gratis/`)
break
// CONTAS FREE //
case 'contas_netflix':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui ssta as contas da Netflix vazadas_*
-
🌐 https://pt.anotepad.com/note/read/ytgrkdgt`)
break
case 'contas_hbo':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui está algumas contas da hbo max_*
-
🌐 https://pt.anotepad.com/note/read/8yxaityw`)
break
case 'contas_star+':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta sua conta da star+_*
-
🌐 https://pt.anotepad.com/note/read/nssgyhhn`)
break
case 'contas_disney+':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta sua conta da disney+_*
-
🌐 https://pt.anotepad.com/note/read/xpgsi45r`)
break
case 'contas_paramount+':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta sua conta da Paramount+_*
-
🌐 https://pt.anotepad.com/note/read/fnt5ks2y`)
break
case 'contas_spotify':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta sua conta do spotify_*
-
🌐 https://pt.anotepad.com/note/read/qfddqeid`)
break
case 'crunchyroll':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta sua conta da crunchyroll_*
-
🌐 https://pt.anotepad.com/note/read/8dqxjewt`)
break
case 'contas_iptv':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta sua conta de iptv_*
-
🌐 https://pt.anotepad.com/note/read/q8r3hh85`)
break
case 'contas_myfamily':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta sua conta my family_*
-
🌐 https://pt.anotepad.com/note/read/n2d4k9q8`)
break
case 'contas_clarotv':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta sua conta da clarotv+_*
-
🌐 https://pt.anotepad.com/note/read/5cfjbs68`)
break
case 'contas_expressvpn':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta sua conta da express_*
-
🌐 https://pt.anotepad.com/note/read/7tge88jb`)
break
case 'contas_dazn':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta sua conta da dazn_*
-
🌐 https://pt.anotepad.com/note/read/hq5fn9ai`)
break
case 'contas_bins':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas bins para criar contas_*
-
🌐 https://pt.anotepad.com/note/read/ergtdncf`)
break
case 'contas_onlyfans':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas contas do onlyfans_*
-
🌐 https://pt.anotepad.com/note/read/7hqa96gi`)
break
case 'contas_facebook':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas contas do Facebook_*
-
🌐 https://pt.anotepad.com/note/read/gj3k5hen`)
break
case 'contas_nordvpn':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas contas do nordvpn_*
-
🌐 https://pt.anotepad.com/note/read/rs2h7mdh`)
break
case 'contas_hotmail':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta alguns Hotmail vazados*
-
🌐 https://pt.anotepad.com/note/read/stder3wm`)
break
case 'contas_outlook':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta emails vazados do Outlook _*
-
🌐 https://pt.anotepad.com/note/read/5knqawjf`)
break
case 'contas_xbox':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas contas do xbox_*
-
🌐 https://pt.anotepad.com/note/read/7mhaapfrf`)
break
case 'contas_nba':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas contas da NBA_*
-
🌐 https://pt.anotepad.com/note/read/i3q54wyw`)
break
case 'contas_primevideo':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas contas da primevideo_*
-
🌐 https://pt.anotepad.com/note/read/j4rgegxm`)
break
case 'contas_minecraft':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas comtas do Minecraft_*
-
🌐 https://pt.anotepad.com/note/read/swmbmbte`)
break
case 'contas_steam':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas contas da steam_*
-
🌐 https://pt.anotepad.com/note/read/bdnpenfp`)
break
case 'contas_terra':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas contas do blog terra_*
-
🌐 https://pt.anotepad.com/note/read/y298dt52`)
break
case 'contas_instagram':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas contas do Instagram_*
-
🌐 https://pt.anotepad.com/note/read/q8gcxsrf`)
break
case 'contas_hulu':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas contas do hulu_*
-
🌐 https://pt.anotepad.com/note/read/q8gcxsrf`)
break
case 'contas_duolingo':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas contas do duolingo_*
-
🌐 https://pt.anotepad.com/note/read/697r98pg`)
break
case 'contas_viki':
reagir(from, "👀")
await sleep(1000)
reply(`*_aqui esta algumas contas viki rukuten_*
-
🌐 https://pt.anotepad.com/note/read/swd4tx9j`)
break
case 'contas_cod':
reagir(from, "🎞️")
await sleep(1000)
reply(`*_aqui esta sua conta do cod_*
-
🌐 https://pt.anotepad.com/note/read/5jxtiamj`)
break
case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(msg.grupo)
if(!isGroupAdmins) return reply(msg.adm)
if(!isCreator) return reply(Res_SoDono)
if(!isBotGroupAdmins) return reply(msg.botadm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isWelkom) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply(msg.grupo)
if(!isGroupAdmins) return reply(msg.adm)
await LIMPARDOCNT_QUEMJASAIU()
bule = [];
bule2 = []
mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = 'Rank dos mais Ghosts do Grupo:\n\n'
if(bule.length == 0)boardi += 'Todos estão ativos'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `${i + 1}º : @${bule[i].id.split('@')[0]}\nMensagens: ${bule[i].messages}\nComandos dados: ${bule[i].cmd_messages}\nAparelho: ${bule[i].aparelho}\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'banativos':
if(!isCreator) return reply(mess.only.ownerB)
if(!isGroup) return reply(mess.only.group)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) { 
var indnum = numbersIds.indexOf(obj.jid)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.jid)) {
mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
} else {
loli.groupRemove(from, [obj.jid])
}
}
} else {
if(groupAdmins.includes(obj.jid)) {
mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
} else {
loli.groupRemove(from, [obj.jid])
}
}
}
}
break

case 'antifake':
try {
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(msg.adm)
if (args.length < 1) return reply(' 1 Para ativar/ 0 para desativar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./arquivos/antis/antifake.json', JSON.stringify(antifake))
reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
} else if (Number(args[0]) === 0) {
antifake.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antifake.json', JSON.stringify(antifake))
reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

default:
if(isCmd) {
reply(
`
╭━━❌ DEU ERRO ❌━━╮
┝ _➛Ola: ${pushname}
┝ _➛Data: ${data}
┝ _➛Hora: ${hora}
┝ _➛Cmd: ${prefix}${command}
┝ _➛isso não existe! use ${prefix}menu
╰━━❌ LADY BOT ❌━━╯
`)

if (budy.includes('prefixo') || (budy.includes('Prefixo'))){
reply(`𝘖𝘭𝘢́ "${pushname}" 𝘘𝘶𝘦 𝘓𝘦𝘨𝘢𝘭 𝘝𝘦𝘳 𝘕𝘰𝘷𝘢𝘴 𝘗𝘦𝘴𝘴𝘰𝘢𝘴 𝘗𝘰𝘳 𝘈𝘲𝘶𝘪\n𝘉𝘰𝘮 𝘔𝘦𝘶 𝘗𝘳𝘦𝘧𝘪𝘹𝘰 𝘦́ "${prefix}" 𝘋𝘪𝘨𝘪𝘵𝘦 𝘌𝘹𝘦𝘮𝘱𝘭𝘰 "${prefix}𝘮𝘦𝘯𝘶"`)
}

}
if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return loli.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: info})
await loli.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: info})
await loli.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
loli.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await loli.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:info})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ _Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ✅_`
loli.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await loli.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:info})
await sleep(5000);
await loli.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await loli.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:info})
}

if(fs.existsSync(`./Aqua-Functions/limite-c_${from}.json`)) {
var limitecaracteres_on = JSON.parse(fs.readFileSync(`./Aqua-Functions/limite-c_${from}.json`))
var limitefl = limitecaracteres_on.limite
} else {
var limitefl = limitefll.limitefl
}

if (body.loli >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood) {
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
} else {
if(isGroupAdmins) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!m.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
setTimeout( () => {
}, 0)
}
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return loli.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: info})
await loli.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: info})
await loli.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
loli.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await loli.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:info})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n??️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
loli.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await loli.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:info})
await sleep(5000);
await loli.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await loli.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:info})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return loli.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await loli.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contato ou vcard, caso for um engano, fale com algum adm.'}, {quoted: info})
await loli.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
loli.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await loli.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:info})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
loli.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await loli.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:info})
await sleep(5000);
await loli.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await loli.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:info})
}

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        
const isBot = info.key.fromMe ? true : false

        if (isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
          if (!isAntilinkgp) return
          if (!isUrl(body)) return
          if (body.includes("chat.whatsapp.com/")) {
            if (!budy2.includes("chat.whatsapp.com")) return
            if (isBot) return
            linkgpp = await loli.groupInviteCode(from)
            if (budy.match(`${linkgpp}`)) return reply('*Link do nosso grupo, não irei remover.. *')
            if (isGroupAdmins) return reply("*Link detectado, porém usuário é admin*")
            if (!JSON.stringify(groupMembers).includes(sender)) return
            loli.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } })
            loli.groupParticipantsUpdate(from, [sender], 'remove')
          }
        }

//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !isPremium){ 
reply(`[👤] _Ola ${pushname} nao estou autorizado a responder mensagem no privado, por tanto irei te bloquear`)
setTimeout(async () => {
loli.updateBlockStatus(sender, 'block')
}, 100)
return
}
//======================================\\

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return loli.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await loli.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: info})
await loli.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
loli.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await loli.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:info})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
loli.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await loli.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
await sleep(2000);
await loli.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:info})
await sleep(5000);
await loli.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await loli.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:info})
}

if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
loli.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
loli.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
loli.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
 
if(isAutoReact && isGroup && isCmd) {
if(!isAutoReact) return 
emojis = ["😀", "😃", "😁", "😆", "😂", "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🌌", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💤", "👺", "👹", "💨", "😸", "😹", "❤️", "⛅", "👁️", "☠️", "💀", "👀", "😻", "💋", "🌕", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲","🤔","🤫","😏","🍆","👺","🙊"]
reassao = emojis[Math.floor(Math.random() * emojis.length)]
sendMsg = await loli.sendMessage(from, {react: {text: reassao, key: m.key}})
}

if(isAutoReact && isGroup && !isCmd) {
if(!isAutoReact) return 
emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🇺🇦", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "🍇", "💤", "👺", "👹", "💨", "✨", "😹", "❤️", "🌀", "👁️", "☠️", "💀", "👀", "😻", "💋", "👃🏻", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌨️", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲","🤔","🤫","😏","🍆","👺","🙊"]
reassao = emojis[Math.floor(Math.random() * emojis.length)]
sendMsg = await loli.sendMessage(from, {react: {text: reassao, key: m.key}})
}

if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return loli.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await loli.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return loli.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await loli.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return loli.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
setTimeout(() => {
loli.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return  
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return loli.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await loli.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(isAntiNotas && body.toString().match(/(💳|🌨️|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(type == 'stickerMessage') return
let verificar = body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && body.length < 100) return  
await loli.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

loli.ev.on('group-participants-update', async (tdy) => {
if(antifake.includes(tdy.jid)) {
const mdata = await loli.groupMetadata(tdy.jid)  
if (tdy.action == 'add'){
num = tdy.participants[0]
if(!num.split('@')[0].startsWith(55)) {
loli.sendMessage(mdata.id, ' ⛹️⛹️numeros estrangeiros não sao Permitidos neste grupo, consulte um Administrador👋🏌️', MessageType.text)
setTimeout(async function () {
loli.groupRemove(mdata.id, [num])
}, 1000)
}
}
}
try {
const grupo = await loli.groupMetadata(tdy.jid)
if (tdy.action == 'add') {
const grupo = await loli.groupMetadata(tdy.jid)
if (!welkom.includes(tdy.jid)) return
num = tdy.participants[0]
try {
capa = await loli.getProfilePicture(num)
} catch {
capa = 'https://i.imgur.com/DUzsRhs.jpg'
}
exe1 = await getBuffer(capa)
exe2 = await imageToBase64(JSON.stringify(capa).replace(/\"/gi, ''))
fs.writeFileSync('exeFT.jpeg', exe2, 'base64')
var imgbb = require('imgbb-uploader')
data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'exeFT.jpeg')
buffu = await getBuffer(`https://api-exteam.herokuapp.com/api/welcome?titulo=NOVO MEMBRO&nome=${num.split('@')[0]}&perfil=${data.display_url}&fundo=${fundo1}&grupo=Você está no Grupo: ${encodeURIComponent(grupo.subject)}`)

loli.sendMessage(grupo.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `0@s.whatsapp.net`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": exe1, "mimetype": "application/octet-stream", "title": `*BEM VINDO(A)*`, "fileLength": "36", "pageCount": 0, "fileName": `_*BEM VINDO(A)*_` }}, "messageTimestamp": "1614069378", "status": "PENDENTE"}})
} else if (tdy.action == 'remove') {
if (!welkom.includes(tdy.jid)) return
const grupo = await loli.groupMetadata(tdy.jid)
num = tdy.participants[0]
try {
capa = await loli.getProfilePicture(num)
} catch {
capa = 'https://i.imgur.com/DUzsRhs.jpg'
}
let exe1 = await getBuffer(capa)
exe2 = await imageToBase64(JSON.stringify(capa).replace(/\"/gi, ''))
fs.writeFileSync('exeFT.jpeg', exe2, 'base64')
var imgbb = require('imgbb-uploader')
data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'exeFT.jpeg')
buffu = await getBuffer(`https://api-exteam.herokuapp.com/api/goodbye?titulo=ADEUS :(&nome=${num.split('@')[0]}&perfil=${data.display_url}&fundo=${fundo2}&grupo=Saiu de: ${encodeURIComponent(grupo.subject)}`)
loli.sendMessage(grupo.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}})
}
} catch (e) {
console.log('Erro : %s', color(e, 'red'))
}})

if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return loli.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await loli.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
loli.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}


if (
    budy.includes("Qual sua versão?") ||
    budy.includes("Qual é a sua versão?") ||
    budy.includes("Qual a sua versão?") ||
    budy.includes("qual sua versão?") ||
    budy.includes("sua versão?") ||
    budy.includes("Diga sua versão?")
) {
    // Envia a mensagem de texto com a versão
    await loli.sendMessage(from, { text: `Olá ${pushname}, a minha versão atualmente é a 4.1🐞` }, { quoted: info });
}
// Resposta para "mas bah tchê"
if (budy.includes("ridículo")) {
    const audio = fs.readFileSync('./assets/voz/ridiculo.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
if (budy.includes("não gosto") || (budy.includes("não gosto de você"))){
tujuh = fs.readFileSync('./assets/voz/eunaogosto.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("fofo") || (budy.includes("fofa"))){
tujuh = fs.readFileSync('./assets/voz/fofo.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("cala boca") || (budy.includes("bot bom"))){
tujuh = fs.readFileSync('./assets/voz/mebeija.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("como assim?") || (budy.includes("porra"))){
tujuh = fs.readFileSync('./assets/voz/.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("bot perfeito") || (budy.includes("bot foda"))){
tujuh = fs.readFileSync('./assets/voz/own.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("bot chato") || (budy.includes("bot do krlh"))){
tujuh = fs.readFileSync('./assets/voz/mim.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("mentira") || (budy.includes("mentiroso"))){
tujuh = fs.readFileSync('./assets/voz/blasfemia.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("puta") || (budy.includes("me exaltei"))){
tujuh = fs.readFileSync('./assets/voz/exaltei.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("não gosto") || (budy.includes("não gosto de você"))){
tujuh = fs.readFileSync('./assets/voz/.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
// Resposta para "mas bah tchê"
if (budy.includes("mas bah tchê")) {
    const audio = fs.readFileSync('./assets/voz/bah.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "au au au"
if (budy.includes("au au au")) {
    const audio = fs.readFileSync('./assets/voz/au_au.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "boa noite"
if (budy.includes("boa noite bot")) {
    const audio = fs.readFileSync('./assets/voz/boa_noite.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "boa tarde"
if (budy.includes("boa tarde bot")) {
    const audio = fs.readFileSync('./assets/voz/boa_tarde.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "bom dia"
if (budy.includes("bom dia bot")) {
    const audio = fs.readFileSync('./assets/voz/bom_dia.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "quem você está chamando de bugada?"
if (budy.includes("bugada")) {
    const audio = fs.readFileSync('./assets/voz/bugada.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "ownn que doguinho fofo, quem é o cute cute da mamãe"
if (budy.includes("ownn que doguinho fofo, quem é o cute cute da mamãe")) {
    const audio = fs.readFileSync('./assets/voz/cutecute.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "empate"
if (budy.includes("empate")) {
    const audio = fs.readFileSync('./assets/voz/empate.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "vitória"
if (budy.includes("vitória")) {
    const audio = fs.readFileSync('./assets/voz/vitoria.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "derrota"
if (budy.includes("derrota")) {
    const audio = fs.readFileSync('./assets/voz/derrota.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "esse comando não existe baka!"
if (budy.includes("esse comando não existe baka!")) {
    const audio = fs.readFileSync('./assets/voz/baka.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

if (budy.includes("Gay") || (budy.includes("gay"))){
tujuh = fs.readFileSync('./assets/voz/gay.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("free fire") || (budy.includes("ff"))){
tujuh = fs.readFileSync('./assets/voz/freefire.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("tentei") || (budy.includes("Tentei"))){
tujuh = fs.readFileSync('./assets/voz/eutentei.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Socorro") || (budy.includes("socorro"))){
tujuh = fs.readFileSync('./assets/voz/socorro.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Vou nada") || (budy.includes("vou nada"))){
tujuh = fs.readFileSync('./assets/voz/vou-nada.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("amostradinho") || (budy.includes("Amostradinho"))){
tujuh = fs.readFileSync('./assets/voz/amostradinho.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Fez dnv") || (budy.includes("fez dnv"))){
tujuh = fs.readFileSync('./assets/voz/gay.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Gripado") || (budy.includes("gripado"))){
tujuh = fs.readFileSync('./assets/voz/gripado.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Vai Neymar") || (budy.includes("vai Neymar"))){
tujuh = fs.readFileSync('./assets/voz/vaineymar.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Demais") || (budy.includes("demais"))){
tujuh = fs.readFileSync('./assets/voz/demais.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

// Resposta para "glub glub glub"
if (budy.includes("glub glub glub")) {
    const audio = fs.readFileSync('./assets/voz/glub.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "como ousa quebrar as regras? Eu, albedo..."
if (budy.includes("como ousa quebrar as regras?")) {
    const audio = fs.readFileSync('./assets/voz/golpe_misericordia.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "deveras interessante"
if (budy.includes("deveras interessante")) {
    const audio = fs.readFileSync('./assets/voz/interessante.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "lá lá lá"
if (budy.includes("lá lá lá")) {
    const audio = fs.readFileSync('./assets/voz/lalala.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "mas que por... O que significa isso?"
if (budy.includes("mas que por... O que significa isso?")) {
    const audio = fs.readFileSync('./assets/voz/porra.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

if (budy.includes("apanhar e ficar calado") || (budy.includes("apanhar e ficar calada"))){
tujuh = fs.readFileSync('./assets/voz/apanhar.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Finjo") || (budy.includes("finjo"))){
tujuh = fs.readFileSync('./assets/voz/finjo.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("e o pix?") || (budy.includes("E o pix?"))){
tujuh = fs.readFileSync('./assets/voz/gay.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Louça") || (budy.includes("louça"))){
tujuh = fs.readFileSync('./assets/voz/pia.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

// Resposta para "sigma"
if (budy.includes("sigma")) {
    const audio = fs.readFileSync('./assets/voz/sigma.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "paga uma coca"
if (budy.includes("paga uma coca")) {
    const audio = fs.readFileSync('./assets/voz/paga_coca.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "reclama da vida"
if (budy.includes("reclama da vida")) {
    const audio = fs.readFileSync('./assets/voz/reclama_vida.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
if (budy.includes("aiai") || (budy.includes("ai ai"))){
tujuh = fs.readFileSync('./assets/voz/aiai.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
// Resposta para "desculpa"
if (budy.includes("desculpa")) {
    const audio = fs.readFileSync('./assets/voz/desculpa.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "piscadinha"
if (budy.includes("piscadinha")) {
    const audio = fs.readFileSync('./assets/voz/piscadinha.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "ué?"
if (budy.includes("ué?")) {
    const audio = fs.readFileSync('./assets/voz/ue.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "uma pergunta"
if (budy.includes("uma pergunta")) {
    const audio = fs.readFileSync('./assets/voz/uma_pergunta.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "vendo memórias"
if (budy.includes("vendo memórias")) {
    const audio = fs.readFileSync('./assets/voz/vendo_memorias.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
// Resposta para "é hoje"
if (budy.includes("dom dom dom")) {
    const audio = fs.readFileSync('./assets/voz/domdom.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "vai tomar no..."
if (budy.includes("vai tomar no")) {
    const audio = fs.readFileSync('./assets/voz/vtnc.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
if (budy.includes("Relaxar") || (budy.includes("relaxar"))){
tujuh = fs.readFileSync('./assets/voz/relaxar.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("flamengo") || (budy.includes("Flamengo"))){
tujuh = fs.readFileSync('./assets/voz/relaxar.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Uii") || (budy.includes("uii"))){
tujuh = fs.readFileSync('./assets/voz/ui.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Cavalo") || (budy.includes("cavalo"))){
tujuh = fs.readFileSync('./assets/voz/cavalo.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("uepa") || (budy.includes("Uepa"))){
tujuh = fs.readFileSync('./assets/voz/uepa.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("e eu to liso?") || (budy.includes("E eu to liso?"))){
tujuh = fs.readFileSync('./assets/voz/e-eu-to-liso-e.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("tá fodidio") || (budy.includes("quando eu te pegar"))){
tujuh = fs.readFileSync('./assets/voz/voce_ta_fodido.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("poço") || (budy.includes("cavar um poço"))){
tujuh = fs.readFileSync('./assets/voz/.boa-tarde-neymar-queria-cavar-um-poco.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Mudo") || (budy.includes("mudo"))){
tujuh = fs.readFileSync('./assets/voz/como-se-dizia-o-mudo.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Bolsonaro") || (budy.includes("bolsonaro"))){
tujuh = fs.readFileSync('./assets/voz/bolsonaro.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Faz o L") || (budy.includes("faz o L"))){
tujuh = fs.readFileSync('./assets/voz/fazol.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("gado") || (budy.includes("Gado"))){
tujuh = fs.readFileSync('./assets/voz/gadomestre.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("cade o pix?") || (budy.includes("Cade o pix?"))){
tujuh = fs.readFileSync('./assets/voz/cadeopix.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("ele quer escolher") || (budy.includes("Ele quer escolher"))){
tujuh = fs.readFileSync('./assets/voz/uepa.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("geme meu nome") || (budy.includes("Geme meu nome"))){
tujuh = fs.readFileSync('./assets/voz/gememeunomemp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("tome") || (budy.includes("Tome"))){
tujuh = fs.readFileSync('./assets/voz/uepa.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("que isso meu filho") || (budy.includes("q isso meu filho"))){
tujuh = fs.readFileSync('./assets/voz/que-e-isso-meu-filho-calma.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

// Resposta para "me explica isso"
if (budy.includes("me explica isso")) {
    const audio = fs.readFileSync('./assets/voz/explica_isso.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

if (budy.includes("Uiii") || (budy.includes("uiii"))){
tujuh = fs.readFileSync('./assets/voz/uiii.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("errei") || (budy.includes("Errei"))){
tujuh = fs.readFileSync('./assets/voz/erreifuimlk.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Como é amigo?") || (budy.includes("como é amigo?"))){
tujuh = fs.readFileSync('./assets/voz/como_e_amigo.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("chega") || (budy.includes("Chega"))){
tujuh = fs.readFileSync('./assets/voz/chega.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

// Resposta para "manda áudio"
if (budy.includes("manda áudio")) {
    const audio = fs.readFileSync('./assets/voz/manda_audio.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "é hoje"
if (budy.includes("é hoje")) {
    const audio = fs.readFileSync('./assets/voz/e_hoje.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

if (budy.includes("calma calabreso") || (budy.includes("Calma calabreso"))){
tujuh = fs.readFileSync('./assets/voz/calma_calabreso.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Kwai") || (budy.includes("kwai"))){
tujuh = fs.readFileSync('./assets/voz/kwai.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("sera?") || (budy.includes("será?"))){
tujuh = fs.readFileSync('./assets/voz/sera-minha-tropinha-meme.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("ele ta colocando a champions no bolso") || (budy.includes("ele ta colocando a Champions no bolso"))){
tujuh = fs.readFileSync('./assets/voz/ele-ta-colocando-a-champions-no-boloso.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("pq não comi sua mãe") || (budy.includes("pq eu não comi sua mãe"))){
tujuh = fs.readFileSync('./assets/voz/issovcfalapqeunaocomisuamae.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Eita glória") || (budy.includes("eita glória"))){
tujuh = fs.readFileSync('./assets/voz/eitagloria.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("siuuu") || (budy.includes("Siuuu"))){
tujuh = fs.readFileSync('./assets/voz/siu.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("eu sou o mior") || (budy.includes("Eu sou o mior"))){
tujuh = fs.readFileSync('./assets/voz/eusouomior.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Cristiano ronaldo") || (budy.includes("cristiano ronaldo"))){
tujuh = fs.readFileSync('./assets/voz/cr7.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("ave maria doido") || (budy.includes("3 capa"))){
tujuh = fs.readFileSync('./assets/voz/avemaridoido.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("ele gosta") || (budy.includes("Ele gost"))){
tujuh = fs.readFileSync('./assets/voz/elegosta.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("matue") || (budy.includes("Matue"))){
tujuh = fs.readFileSync('./assets/voz/matue.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("pare") || (budy.includes("pare"))){
tujuh = fs.readFileSync('./assets/voz/pare.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("É brincadeira hein") || (budy.includes("é brincadeira hein"))){
tujuh = fs.readFileSync('./assets/voz/e-brincadeira-hein.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Poze") || (budy.includes("poze"))){
tujuh = fs.readFileSync('./assets/voz/mcpoze.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Odio") || (budy.includes("odio"))){
tujuh = fs.readFileSync('./assets/voz/odio.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Café") || (budy.includes("cafe"))){
tujuh = fs.readFileSync('./assets/voz/temcafe.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Ain") || (budy.includes("ain"))){
tujuh = fs.readFileSync('./assets/voz/ain.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
// Resposta para "é hoje"
if (budy.includes("minha xrc")) {
    const audio = fs.readFileSync('./assets/voz/ai_minha_xrc.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
if (budy.includes("Paola") || (budy.includes("paola"))){
tujuh = fs.readFileSync('./assets/voz/paola.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Nobru") || (budy.includes("nobru"))){
tujuh = fs.readFileSync('./assets/voz/nobru.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
// Resposta para "é hoje"
if (budy.includes("Bill")) {
    const audio = fs.readFileSync('./assets/voz/borabill.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
// Resposta para "é hoje"
if (budy.includes("fih do bill")) {
    const audio = fs.readFileSync('./assets/voz/fih_dobill.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
// Resposta para "é hoje"
if (budy.includes("mulher do bill")) {
    const audio = fs.readFileSync('./assets/voz/mulher_dobill.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
// Resposta para "é hoje"
if (budy.includes("nobru")) {
    const audio = fs.readFileSync('./assets/voz/Nobru.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
// Resposta para "é hoje"
if (budy.includes("vai tomar na xrc")) {
    const audio = fs.readFileSync('./assets/voz/vai_tomar_na_xrc.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
// Resposta para "é hoje"
if (budy.includes("cabelinho")) {
    const audio = fs.readFileSync('./assets/voz/cabelinho.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
// Resposta para "é hoje"
if (budy.includes("oi lindo")) {
    const audio = fs.readFileSync('./assets/voz/oi_lindo.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
// Resposta para "é hoje"
if (budy.includes("whatsapp")) {
    const audio = fs.readFileSync('./assets/voz/whatsapp.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
// Resposta para "é hoje"
if (budy.includes("lista gay")) {
    const audio = fs.readFileSync('./assets/voz/lista_gay.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
if (budy.includes("fabin") || (budy.includes("fabio"))){
tujuh = fs.readFileSync('./assets/voz/oifabio.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

// Resposta para "é hoje"
if (budy.includes("gozar")) {
    const audio = fs.readFileSync('./assets/voz/gozar.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}

// Resposta para "é hoje"
if (budy.includes("mãe do bill")) {
    const audio = fs.readFileSync('./assets/voz/mae_dobill.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
// Resposta para "aff"
if (budy.includes("aff")) {
    const audio = fs.readFileSync('./assets/voz/aff.mp3');
    loli.sendMessage(from, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
}
if (budy.includes('prefixo') || (budy.includes('Prefixo'))){
reply(`[${prefix}]`)
}

if (budy.includes("boa noite") || (budy.includes("Boa noite"))){
tujuh = fs.readFileSync('./loli/audio/boanoite.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}



if (budy.includes("bom dia") || (budy.includes("Bom dia"))){
tujuh = fs.readFileSync('./loli/audio/bomdia.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Os de vdd sei quem são") || budy.includes("os de vdd sei quem são") || budy.includes("traído")){
tujuh = fs.readFileSync('./loli/audio/osdevdd.mp3');
await loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy.includes("Oii") || (budy.includes("Oi"))){
tujuh = fs.readFileSync('./loli/audio/oi.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("vdd") || (budy.includes("verdade"))){
tujuh = fs.readFileSync('./loli/audio/verdade.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("tranquilo") || (budy.includes("suave"))){
tujuh = fs.readFileSync('./loli/audio/tranquilo.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("tchau") || (budy.includes("flw"))){
tujuh = fs.readFileSync('./loli/audio/tchau.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("talvez") || (budy.includes("Talvez"))){
tujuh = fs.readFileSync('./loli/audio/talvez.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Simples") || (budy.includes("simples"))){
tujuh = fs.readFileSync('./loli/audio/simples.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Siiim") || (budy.includes("siiiim"))){
tujuh = fs.readFileSync('./loli/audio/sim.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("shipo") || (budy.includes("Shipo"))){
tujuh = fs.readFileSync('./loli/audio/shipo.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("sair") || (budy.includes("Sair"))){
tujuh = fs.readFileSync('./loli/audio/sair.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("bot ruim") || (budy.includes("Bot ruim"))){
tujuh = fs.readFileSync('./loli/audio/ruim.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("problema seu") || (budy.includes("fds"))){
tujuh = fs.readFileSync('./loli/audio/prolema.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

if (budy.includes("Play") || (budy.includes("Como baixa música?"))){
tujuh = fs.readFileSync('./loli/audio/play.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("boa tarde") || (budy.includes("Boa tarde"))){
tujuh = fs.readFileSync('./loli/audio/boatarde.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("aniversário") || (budy.includes("Aniversário"))){
tujuh = fs.readFileSync('./loli/audio/feliz.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("gambare") || (budy.includes("Gambare"))){
tujuh = fs.readFileSync('./loli/audio/gambare.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("galera") || (budy.includes("rapaziada"))){
tujuh = fs.readFileSync('./loli/audio/fala.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("tlgd") || (budy.includes("entendi"))){
tujuh = fs.readFileSync('./loli/audio/entendo.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("doença") || (budy.includes("doente"))){
tujuh = fs.readFileSync('./loli/audio/doenca.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("chora") || (budy.includes("chorão"))){
tujuh = fs.readFileSync('./loli/audio/chora.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("casal") || (budy.includes("casada"))){
tujuh = fs.readFileSync('./loli/audio/casal.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("carro") || (budy.includes("bb"))){
tujuh = fs.readFileSync('./loli/audio/bb.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("babaca") || (budy.includes("fdp"))){
tujuh = fs.readFileSync('./loli/audio/babaca.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("demora") || (budy.includes("anos"))){
tujuh = fs.readFileSync('./loli/audio/anos.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}
if (budy.includes("Espera") || (budy.includes("espera"))){
tujuh = fs.readFileSync('./loli/audio/2minuto.mp3')
loli.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
}

//━━━━━━━❰･NOME SEM PREFIXO･❱━━━━━━━\\

if(budy.match("🏳️‍🌈")) {
bla = fs.readFileSync("./figurinhas/gay.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.match("😐")) {
bla = fs.readFileSync("./figurinhas/smoke.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.match("😏")) {
bla = fs.readFileSync("./figurinhas/halerquin.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.match("😋")) {
bla = fs.readFileSync("./figurinhas/coxinha.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.match("sexo") || (budy.match("Sexo"))) {
bla = fs.readFileSync("./figurinhas/168.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.match("Tedio") || (budy.match("tedio") || (budy.match("Tédio")))) {
bla = fs.readFileSync("./figurinhas/164.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.match("😢") || (budy.match("😪") || (budy.match("😭")))) {
bla = fs.readFileSync("./figurinhas/131.webp")
loli.sendMessage(from, {sticker: bla}, {quoted: info})
}

}} catch (erro) {
console.log(erro)
}})



loli.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(lastDisconnect === undefined) {

}

if(connection === 'close') {
var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut  
ligarbot()
}})}
ligarbot()

fs.watchFile('./menus/alugar.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O Menu foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./menus/menudono.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O Menu foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./menus/menu.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O Menu foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./start.sh', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O start.sh foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./dono.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./config.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A config foi editada, irei reiniciar...');
process.exit()
}
})
