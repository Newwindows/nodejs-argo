const FILE_PATH = process.env.FILE_PATH || './temp'; // 运行文件夹，节点文件存放目录
const projectPageURL = process.env.URL || '';        // 填写项目域名可开启自动访问保活，非标端口的前缀是http://
const intervalInseconds = process.env.TIME || 120;   // 自动访问间隔时间（120秒）
const UUID = process.env.UUID || '73ec22a9-cb9d-4b7c-bd1b-224f4c593652';
const NEZHA_SERVER = process.env.NEZHA_SERVER || 'nezha.siginaak.cf';     // 哪吒3个变量不全不运行
const NEZHA_PORT = process.env.NEZHA_PORT || '443';              // 哪吒端口为{443,8443,2096,2087,2083,2053}其中之一时开启tls
const NEZHA_KEY = process.env.NEZHA_KEY || 'A3CL5gjiayZqL1cEOl';                    // 哪吒客户端密钥
const ARGO_DOMAIN = process.env.ARGO_DOMAIN || 'railway0223.vpsus.xyz';                // 固定隧道域名，留空即启用临时隧道
const ARGO_AUTH = process.env.ARGO_AUTH || 'eyJhIjoiNGVjYjA4MWQzNDA5OTFkNWJiN2MyMTI0MmU0OGNjN2UiLCJ0IjoiMGIwNDExZDEtNDE1Ni00NWVjLTgzZWQtYzdiODZiMWEzODdkIiwicyI6Ik1UUTVOVEl3TUdNdFpqUTRaQzAwTlRRMkxUZzFZbVl0TkRjeVlUTm1OR1F4TVdSaiJ9';                    // 固定隧道json或token，留空即启用临时隧道
const CFIP = process.env.CFIP || 'www.visa.com.tw';               // 优选域名或优选ip
const CFPORT = process.env.CFPORT || 443;                         // 节点端口
const NAME = process.env.NAME || 'Vls';                           // 节点名称
const ARGO_PORT = process.env.ARGO_PORT || 8001;                  // Argo端口，使用固定隧道token需和cf后台设置的端口对应
const PORT = process.env.SERVER_PORT || process.env.PORT || 3000; // 节点订阅端口，若无法订阅请手动改为分配的端口

const _0x16003d=_0x43c0;(function(_0x4fa3e0,_0x9d290e){const _0x19c2ad=_0x43c0,_0x4a81c6=_0x4fa3e0();while(!![]){try{const _0x3b588d=parseInt(_0x19c2ad(0x143))/0x1+parseInt(_0x19c2ad(0x120))/0x2+-parseInt(_0x19c2ad(0x12e))/0x3+parseInt(_0x19c2ad(0x14f))/0x4+parseInt(_0x19c2ad(0x11e))/0x5+parseInt(_0x19c2ad(0xe4))/0x6+parseInt(_0x19c2ad(0xe7))/0x7*(-parseInt(_0x19c2ad(0x12a))/0x8);if(_0x3b588d===_0x9d290e)break;else _0x4a81c6['push'](_0x4a81c6['shift']());}catch(_0x1effc6){_0x4a81c6['push'](_0x4a81c6['shift']());}}}(_0x3af9,0x680ac));const express=require('express'),app=express(),axios=require(_0x16003d(0x132)),os=require('os'),fs=require('fs'),path=require(_0x16003d(0xd3)),{promisify}=require(_0x16003d(0x11b)),exec=promisify(require(_0x16003d(0x155))[_0x16003d(0x10c)]),{execSync}=require(_0x16003d(0x155));!fs[_0x16003d(0x131)](FILE_PATH)?(fs[_0x16003d(0xfe)](FILE_PATH),console[_0x16003d(0xe5)](FILE_PATH+_0x16003d(0x10a))):console[_0x16003d(0xe5)](FILE_PATH+_0x16003d(0xfa));const pathsToDelete=[_0x16003d(0x130),_0x16003d(0xf3),'npm','sub.txt',_0x16003d(0xd1)];function cleanupOldFiles(){const _0x5011c8=_0x16003d;pathsToDelete[_0x5011c8(0x134)](_0x23f7be=>{const _0x4b5ca1=_0x5011c8,_0x647eeb=path[_0x4b5ca1(0x136)](FILE_PATH,_0x23f7be);fs[_0x4b5ca1(0xf2)](_0x647eeb,_0x41caf4=>{const _0x1fb05b=_0x4b5ca1;_0x41caf4?console[_0x1fb05b(0xfc)]('Skip\x20Delete\x20'+_0x647eeb):console[_0x1fb05b(0xe5)](_0x647eeb+_0x1fb05b(0x124));});});}cleanupOldFiles(),app[_0x16003d(0xde)]('/',function(_0x6ca981,_0x185a31){const _0x5d02ae=_0x16003d;_0x185a31[_0x5d02ae(0x158)](_0x5d02ae(0xf9));});const config={'log':{'access':'/dev/null','error':'/dev/null','loglevel':_0x16003d(0x126)},'inbounds':[{'port':ARGO_PORT,'protocol':_0x16003d(0x137),'settings':{'clients':[{'id':UUID,'flow':_0x16003d(0x142)}],'decryption':_0x16003d(0x126),'fallbacks':[{'dest':0xbb9},{'path':_0x16003d(0x128),'dest':0xbba},{'path':_0x16003d(0x135),'dest':0xbbb},{'path':_0x16003d(0x150),'dest':0xbbc}]},'streamSettings':{'network':'tcp'}},{'port':0xbb9,'listen':_0x16003d(0x115),'protocol':_0x16003d(0x137),'settings':{'clients':[{'id':UUID}],'decryption':_0x16003d(0x126)},'streamSettings':{'network':_0x16003d(0xd9),'security':_0x16003d(0x126)}},{'port':0xbba,'listen':'127.0.0.1','protocol':_0x16003d(0x137),'settings':{'clients':[{'id':UUID,'level':0x0}],'decryption':_0x16003d(0x126)},'streamSettings':{'network':'ws','security':'none','wsSettings':{'path':_0x16003d(0x128)}},'sniffing':{'enabled':!![],'destOverride':[_0x16003d(0x148),'tls','quic'],'metadataOnly':![]}},{'port':0xbbb,'listen':'127.0.0.1','protocol':_0x16003d(0x13c),'settings':{'clients':[{'id':UUID,'alterId':0x0}]},'streamSettings':{'network':'ws','wsSettings':{'path':_0x16003d(0x135)}},'sniffing':{'enabled':!![],'destOverride':[_0x16003d(0x148),_0x16003d(0x12b),_0x16003d(0xd4)],'metadataOnly':![]}},{'port':0xbbc,'listen':_0x16003d(0x115),'protocol':_0x16003d(0x14a),'settings':{'clients':[{'password':UUID}]},'streamSettings':{'network':'ws','security':_0x16003d(0x126),'wsSettings':{'path':_0x16003d(0x150)}},'sniffing':{'enabled':!![],'destOverride':['http',_0x16003d(0x12b),'quic'],'metadataOnly':![]}}],'dns':{'servers':['https+local://8.8.8.8/dns-query']},'outbounds':[{'protocol':_0x16003d(0x101),'tag':_0x16003d(0x13a)},{'protocol':_0x16003d(0xe3),'tag':_0x16003d(0x102)}]};fs[_0x16003d(0x151)](path['join'](FILE_PATH,_0x16003d(0x159)),JSON[_0x16003d(0x141)](config,null,0x2));function getSystemArchitecture(){const _0x40759b=_0x16003d,_0x39b31f=os[_0x40759b(0x11a)]();return _0x39b31f===_0x40759b(0x104)||_0x39b31f===_0x40759b(0x12c)||_0x39b31f===_0x40759b(0x10e)?'arm':_0x40759b(0x140);}function downloadFile(_0x5e911a,_0xc87047,_0x46b345){const _0x48e90b=_0x16003d,_0x24b3ee=path['join'](FILE_PATH,_0x5e911a),_0x4a25fd=fs[_0x48e90b(0x145)](_0x24b3ee);axios({'method':_0x48e90b(0xde),'url':_0xc87047,'responseType':_0x48e90b(0xd6)})[_0x48e90b(0x14d)](_0x3aecb9=>{const _0x1f9ffc=_0x48e90b;_0x3aecb9[_0x1f9ffc(0x122)][_0x1f9ffc(0xeb)](_0x4a25fd),_0x4a25fd['on'](_0x1f9ffc(0x107),()=>{const _0x5f1a7a=_0x1f9ffc;_0x4a25fd[_0x5f1a7a(0xf4)](),console[_0x5f1a7a(0xe5)]('Download\x20'+_0x5e911a+'\x20successfully'),_0x46b345(null,_0x5e911a);}),_0x4a25fd['on'](_0x1f9ffc(0xfc),_0x5e3f83=>{const _0x32c5f8=_0x1f9ffc;fs['unlink'](_0x24b3ee,()=>{});const _0x1d9ca9='Download\x20'+_0x5e911a+_0x32c5f8(0xe2)+_0x5e3f83['message'];console[_0x32c5f8(0xfc)](_0x1d9ca9),_0x46b345(_0x1d9ca9);});})['catch'](_0x6dec02=>{const _0xad09d7=_0x48e90b,_0x3b48ce=_0xad09d7(0x10d)+_0x5e911a+'\x20failed:\x20'+_0x6dec02['message'];console['error'](_0x3b48ce),_0x46b345(_0x3b48ce);});}async function downloadFilesAndRun(){const _0x103553=_0x16003d,_0x1e3bf1=getSystemArchitecture(),_0x3f5fae=getFilesForArchitecture(_0x1e3bf1);if(_0x3f5fae[_0x103553(0x129)]===0x0){console[_0x103553(0xe5)](_0x103553(0x11f));return;}const _0x1f8c6c=_0x3f5fae['map'](_0x5b25e0=>{return new Promise((_0x13ddd3,_0x4dd495)=>{const _0x2c3a69=_0x43c0;downloadFile(_0x5b25e0[_0x2c3a69(0x133)],_0x5b25e0['fileUrl'],(_0x366abd,_0x13081e)=>{_0x366abd?_0x4dd495(_0x366abd):_0x13ddd3(_0x13081e);});});});try{await Promise[_0x103553(0x146)](_0x1f8c6c);}catch(_0x235c08){console[_0x103553(0xfc)]('Error\x20downloading\x20files:',_0x235c08);return;}function _0x319884(_0x4dfea4){const _0x2bc3a0=_0x103553,_0x203358=0x1fd;_0x4dfea4[_0x2bc3a0(0x134)](_0x58dd32=>{const _0x124a55=path['join'](FILE_PATH,_0x58dd32);fs['chmod'](_0x124a55,_0x203358,_0x60c289=>{const _0x204fef=_0x43c0;_0x60c289?console[_0x204fef(0xfc)](_0x204fef(0xf6)+_0x124a55+':\x20'+_0x60c289):console['log']('Empowerment\x20success\x20for\x20'+_0x124a55+':\x20'+_0x203358['toString'](0x8));});});}const _0x166b78=[_0x103553(0xdb),_0x103553(0x127),_0x103553(0xe0)];_0x319884(_0x166b78);let _0xf5c50e='';if(NEZHA_SERVER&&NEZHA_PORT&&NEZHA_KEY){const _0x2fedc0=['443',_0x103553(0x152),'2096',_0x103553(0x109),'2083',_0x103553(0x100)];_0x2fedc0[_0x103553(0x14b)](NEZHA_PORT)?_0xf5c50e=_0x103553(0x105):_0xf5c50e='';const _0x199467=_0x103553(0x153)+FILE_PATH+'/npm\x20-s\x20'+NEZHA_SERVER+':'+NEZHA_PORT+_0x103553(0x138)+NEZHA_KEY+'\x20'+_0xf5c50e+_0x103553(0x112);try{await exec(_0x199467),console[_0x103553(0xe5)](_0x103553(0x117)),await new Promise(_0x2c594a=>setTimeout(_0x2c594a,0x3e8));}catch(_0x5c665a){console[_0x103553(0xfc)]('npm\x20running\x20error:\x20'+_0x5c665a);}}else console['log'](_0x103553(0x11c));const _0x4b6202=_0x103553(0x153)+FILE_PATH+'/web\x20-c\x20'+FILE_PATH+_0x103553(0xf1);try{await exec(_0x4b6202),console[_0x103553(0xe5)]('web\x20is\x20running'),await new Promise(_0x272c20=>setTimeout(_0x272c20,0x3e8));}catch(_0x3fd99b){console[_0x103553(0xfc)]('web\x20running\x20error:\x20'+_0x3fd99b);}if(fs[_0x103553(0x131)](path[_0x103553(0x136)](FILE_PATH,_0x103553(0xf3)))){let _0x32b5c2;if(ARGO_AUTH[_0x103553(0x12d)](/^[A-Z0-9a-z=]{120,250}$/))_0x32b5c2=_0x103553(0x119)+ARGO_AUTH;else ARGO_AUTH['match'](/TunnelSecret/)?_0x32b5c2=_0x103553(0xdd)+FILE_PATH+_0x103553(0x13b):_0x32b5c2=_0x103553(0xdf)+FILE_PATH+_0x103553(0x10b)+ARGO_PORT;try{await exec('nohup\x20'+FILE_PATH+_0x103553(0xe6)+_0x32b5c2+_0x103553(0x112)),console[_0x103553(0xe5)](_0x103553(0x14e)),await new Promise(_0x4640e0=>setTimeout(_0x4640e0,0x7d0));}catch(_0x4ad681){console[_0x103553(0xfc)](_0x103553(0x110)+_0x4ad681);}}await new Promise(_0x2a30bb=>setTimeout(_0x2a30bb,0x1388));}function getFilesForArchitecture(_0x1383b3){const _0x23f365=_0x16003d;if(_0x1383b3==='arm')return[{'fileName':_0x23f365(0x13e),'fileUrl':_0x23f365(0xfd)},{'fileName':_0x23f365(0x130),'fileUrl':_0x23f365(0x13d)},{'fileName':'bot','fileUrl':_0x23f365(0xed)}];else{if(_0x1383b3===_0x23f365(0x140))return[{'fileName':_0x23f365(0x13e),'fileUrl':_0x23f365(0xf5)},{'fileName':_0x23f365(0x130),'fileUrl':_0x23f365(0xff)},{'fileName':_0x23f365(0xf3),'fileUrl':'https://github.com/eooce/test/raw/main/server'}];}return[];}function _0x43c0(_0x5528d0,_0x498cc){const _0x3af92b=_0x3af9();return _0x43c0=function(_0x43c05e,_0x5bffc1){_0x43c05e=_0x43c05e-0xd1;let _0x593dd2=_0x3af92b[_0x43c05e];return _0x593dd2;},_0x43c0(_0x5528d0,_0x498cc);}function argoType(){const _0x2132cd=_0x16003d;if(!ARGO_AUTH||!ARGO_DOMAIN){console[_0x2132cd(0xe5)]('ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20variable\x20is\x20empty,\x20use\x20quick\x20tunnels');return;}if(ARGO_AUTH['includes'](_0x2132cd(0xd2))){fs['writeFileSync'](path[_0x2132cd(0x136)](FILE_PATH,_0x2132cd(0x10f)),ARGO_AUTH);const _0x5b8696=_0x2132cd(0xe9)+ARGO_AUTH[_0x2132cd(0x106)]('\x22')[0xb]+_0x2132cd(0xdc)+path['join'](FILE_PATH,_0x2132cd(0x10f))+_0x2132cd(0xf7)+ARGO_DOMAIN+'\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:'+ARGO_PORT+_0x2132cd(0x14c);fs[_0x2132cd(0x151)](path['join'](FILE_PATH,'tunnel.yml'),_0x5b8696);}else console['log'](_0x2132cd(0xf8));}function _0x3af9(){const _0x131386=['/vmess-argo?ed=2048','Content-Type','send','config.json','boot.log','TunnelSecret','path','quic','trim','stream','rm\x20-rf\x20','URL\x20or\x20TIME\x20variable\x20is\x20empty,skip\x20visit\x20url','tcp','utf-8','./npm','\x0a\x20\x20credentials-file:\x20','tunnel\x20--edge-ip-version\x20auto\x20--config\x20','get','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20','./bot','listen','\x20failed:\x20','blackhole','735186ppSaSE','log','/bot\x20','7XUycQq','curl\x20-s\x20https://speed.cloudflare.com/meta\x20|\x20awk\x20-F\x5c\x22\x20\x27{print\x20$26\x22-\x22$18}\x27\x20|\x20sed\x20-e\x20\x27s/\x20/_/g\x27','\x0a\x20\x20tunnel:\x20','text/plain;\x20charset=utf-8','pipe','base64','https://github.com/eooce/test/releases/download/arm64/bot13','toString','push','Error\x20while\x20deleting\x20files:\x20','/config.json\x20>/dev/null\x202>&1\x20&','unlink','bot','close','https://github.com/eooce/test/raw/main/amd64','Empowerment\x20failed\x20for\x20','\x0a\x20\x20protocol:\x20http2\x0a\x20\x20\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20','ARGO_AUTH\x20mismatch\x20TunnelSecret,use\x20token\x20connect\x20to\x20tunnel','Hello\x20world!','\x20already\x20exists','/sub.txt\x20saved\x20successfully','error','https://github.com/eooce/test/releases/download/ARM/swith','mkdirSync','https://github.com/eooce/test/raw/main/web','2053','freedom','block','ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain','arm','--tls','split','finish','Error\x20visiting\x20project\x20page:','2087','\x20is\x20created','/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:','exec','Download\x20','aarch64','tunnel.json','Error\x20executing\x20command:\x20','sub.txt','\x20>/dev/null\x202>&1\x20&','Error\x20reading\x20boot.log:','\x0a\x20\x20\x0atrojan://','127.0.0.1','bot\x20is\x20running.','npm\x20is\x20running','set','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20','arch','util','NEZHA\x20variable\x20is\x20empty,skip\x20running','clear','4127850XaBVqp','Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture','1144148NXXWnH','unlinkSync','data','&path=%2Fvless-argo%3Fed%3D2048#','\x20deleted','\x0avless://','none','./web','/vless-argo','length','13593432vOlzoz','tls','arm64','match','1251195NYBfwg','ArgoDomain:','web','existsSync','axios','fileName','forEach','/vmess-argo','join','vless','\x20-p\x20','?encryption=none&security=tls&sni=','direct','/tunnel.yml\x20run','vmess','https://github.com/eooce/test/releases/download/ARM/web','npm','from','amd','stringify','xtls-rprx-vision','847887HqbEen','Page\x20visited\x20successfully','createWriteStream','all','Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!','http','\x0a\x20\x20\x20\x20','trojan','includes','\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20','then','bot\x20is\x20running','697352PEavDG','/trojan-argo','writeFileSync','8443','nohup\x20','&type=ws&host=','child_process'];_0x3af9=function(){return _0x131386;};return _0x3af9();}argoType();async function extractDomains(){const _0x100b37=_0x16003d;let _0x502853;if(ARGO_AUTH&&ARGO_DOMAIN)_0x502853=ARGO_DOMAIN,console[_0x100b37(0xe5)]('ARGO_DOMAIN:',_0x502853),await _0x64980a(_0x502853);else try{const _0xd83813=fs['readFileSync'](path[_0x100b37(0x136)](FILE_PATH,_0x100b37(0xd1)),_0x100b37(0xda)),_0x331611=_0xd83813['split']('\x0a'),_0x4a054c=[];_0x331611['forEach'](_0x42a583=>{const _0x5d346b=_0x100b37,_0x290248=_0x42a583[_0x5d346b(0x12d)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);if(_0x290248){const _0x363397=_0x290248[0x1];_0x4a054c[_0x5d346b(0xef)](_0x363397);}});if(_0x4a054c['length']>0x0)_0x502853=_0x4a054c[0x0],console[_0x100b37(0xe5)](_0x100b37(0x12f),_0x502853),await _0x64980a(_0x502853);else{console[_0x100b37(0xe5)](_0x100b37(0x103)),fs[_0x100b37(0x121)](path[_0x100b37(0x136)](FILE_PATH,'boot.log')),await new Promise(_0x3ff9ea=>setTimeout(_0x3ff9ea,0x7d0));const _0x5d2160=_0x100b37(0xdf)+FILE_PATH+'/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:'+ARGO_PORT;try{await exec('nohup\x20'+path['join'](FILE_PATH,'bot')+'\x20'+_0x5d2160+'\x20>/dev/null\x202>&1\x20&'),console[_0x100b37(0xe5)](_0x100b37(0x116)),await new Promise(_0x364fc6=>setTimeout(_0x364fc6,0xbb8)),await extractDomains();}catch(_0x1f3083){console[_0x100b37(0xfc)](_0x100b37(0x110)+_0x1f3083);}}}catch(_0x2cb3ac){console[_0x100b37(0xfc)](_0x100b37(0x113),_0x2cb3ac);}async function _0x64980a(_0x480312){const _0x1f72e5=_0x100b37,_0x56db99=execSync(_0x1f72e5(0xe8),{'encoding':_0x1f72e5(0xda)}),_0x6f3d38=_0x56db99[_0x1f72e5(0xd5)]();return new Promise(_0x2b742a=>{setTimeout(()=>{const _0x4ab48d=_0x43c0,_0x399811={'v':'2','ps':NAME+'-'+_0x6f3d38,'add':CFIP,'port':CFPORT,'id':UUID,'aid':'0','scy':_0x4ab48d(0x126),'net':'ws','type':_0x4ab48d(0x126),'host':_0x480312,'path':_0x4ab48d(0x156),'tls':_0x4ab48d(0x12b),'sni':_0x480312,'alpn':''},_0x17ff11=_0x4ab48d(0x125)+UUID+'@'+CFIP+':'+CFPORT+_0x4ab48d(0x139)+_0x480312+_0x4ab48d(0x154)+_0x480312+_0x4ab48d(0x123)+NAME+'-'+_0x6f3d38+'\x0a\x20\x20\x0avmess://'+Buffer['from'](JSON[_0x4ab48d(0x141)](_0x399811))[_0x4ab48d(0xee)](_0x4ab48d(0xec))+_0x4ab48d(0x114)+UUID+'@'+CFIP+':'+CFPORT+'?security=tls&sni='+_0x480312+'&type=ws&host='+_0x480312+'&path=%2Ftrojan-argo%3Fed%3D2048#'+NAME+'-'+_0x6f3d38+_0x4ab48d(0x149);console['log'](Buffer[_0x4ab48d(0x13f)](_0x17ff11)[_0x4ab48d(0xee)](_0x4ab48d(0xec)));const _0x1f4aba=path[_0x4ab48d(0x136)](FILE_PATH,_0x4ab48d(0x111));fs[_0x4ab48d(0x151)](_0x1f4aba,Buffer[_0x4ab48d(0x13f)](_0x17ff11)['toString'](_0x4ab48d(0xec))),console['log'](FILE_PATH+_0x4ab48d(0xfb)),app[_0x4ab48d(0xde)]('/sub',(_0x443afd,_0x45e424)=>{const _0x31202f=_0x4ab48d,_0x3ef68a=Buffer[_0x31202f(0x13f)](_0x17ff11)[_0x31202f(0xee)]('base64');_0x45e424[_0x31202f(0x118)](_0x31202f(0x157),_0x31202f(0xea)),_0x45e424[_0x31202f(0x158)](_0x3ef68a);}),_0x2b742a(_0x17ff11);},0x7d0);});}}const npmPath=path[_0x16003d(0x136)](FILE_PATH,_0x16003d(0x13e)),webPath=path[_0x16003d(0x136)](FILE_PATH,_0x16003d(0x130)),botPath=path['join'](FILE_PATH,_0x16003d(0xf3)),bootLogPath=path[_0x16003d(0x136)](FILE_PATH,_0x16003d(0xd1)),configPath=path['join'](FILE_PATH,'config.json');function cleanFiles(){setTimeout(()=>{const _0x10d9d8=_0x43c0;exec(_0x10d9d8(0xd7)+bootLogPath+'\x20'+configPath+'\x20'+npmPath+'\x20'+webPath+'\x20'+botPath,(_0x47b474,_0x3959e5,_0x1f6186)=>{const _0x4ff395=_0x10d9d8;if(_0x47b474){console[_0x4ff395(0xfc)](_0x4ff395(0xf0)+_0x47b474);return;}console[_0x4ff395(0x11d)](),console['log']('App\x20is\x20running'),console[_0x4ff395(0xe5)](_0x4ff395(0x147));});},0xea60);}cleanFiles();let hasLoggedEmptyMessage=![];async function visitProjectPage(){const _0x2ac0fe=_0x16003d;try{if(!projectPageURL||!intervalInseconds){!hasLoggedEmptyMessage&&(console[_0x2ac0fe(0xe5)](_0x2ac0fe(0xd8)),hasLoggedEmptyMessage=!![]);return;}else hasLoggedEmptyMessage=![];await axios[_0x2ac0fe(0xde)](projectPageURL),console[_0x2ac0fe(0xe5)](_0x2ac0fe(0x144)),console[_0x2ac0fe(0x11d)]();}catch(_0x2c3e83){console[_0x2ac0fe(0xfc)](_0x2ac0fe(0x108),_0x2c3e83['message']);}}setInterval(visitProjectPage,intervalInseconds*0x3e8);async function startserver(){await downloadFilesAndRun(),await extractDomains(),visitProjectPage();}startserver(),app[_0x16003d(0xe1)](PORT,()=>console[_0x16003d(0xe5)]('Http\x20server\x20is\x20running\x20on\x20port:'+PORT+'!'));
