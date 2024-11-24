'use strict' // basically all from ngn/k, (c) 2019-2021 ngn, GNU AGPLv3 - https://codeberg.org/ngn/k/raw/branch/master/LICENSE
const{min,max}=Math,{now}=Date,U8=x=>new Uint8Array(x),doc=document,
T1=new TextEncoder,t1=x=>T1.encode(x),z1=pako.deflate,
T0=new TextDecoder,t0=x=>T0.decode(x),z0=pako.inflate,
c1=x=>{let r='';for(let i=0;i<x.length;i++)r+=String.fromCharCode(x[i]);return r},
c0=x=>{const r=U8(x.length);for(let i=0;i<x.length;i++)r[i]=x.charCodeAt(i);return r},
p0=x=>{try{return x?t0(z0(c0(atob(x)))):''}catch(x){console.error(x);return''}},
p1=x=>x?btoa(c1(z1(t1(x)))):'',
kc=x=>x.which+1000*(x.ctrlKey+10*(x.shiftKey+10*x.altKey)),
hsh=x=>x.split``.reduce((x,y)=>0|(x<<5)-x+y.charCodeAt(0),0),
hx8=x=>('0000000'+x.toString(16)).slice(-8),
rdy=f=>['complete','interactive'].indexOf(doc.readyState)<0?doc.addEventListener('DOMContentLoaded',f):setTimeout(f,1),
thr=(f,d)=>{let i,l=0,g=_=>{i=0;l=now();f()};return()=>i=i||setTimeout(g,max(1,l+d-now()))},
lz=x=>{let i=7,n,c,r=[],S=-(1<<31),R=(x,a,n)=>{for(let j=0;j<n;j++)r.push(x[a+j]);return n},h=_=>x[i++]|x[i++]<<8,C=_=>{if(c===15)do c+=x[i];while(x[i++]==255)},
           d=n=>{while(i<n){let t=x[i++];c=t>>4;C();i+=R(x,i,c);if(i<n){c=t&15;let o=r.length-h();C();R(r,o,4+c)}}}
       while(n=h()|h()<<16){n&S?i+=R(x,i,n&~S):d(i+n)};return new Uint8Array(r)}

let app,heap,inp=''
const kw=fetch`k.wasm.lz4`.then(x=>x.arrayBuffer()),
M=(p,n)=>U8(app.memory.buffer).subarray(p,p+n),
g1=p=>new DataView(app.memory.buffer).getUint8(p),
gb=p=>{let q=p;while(g1(q))q++;return M(p,q-p)},
gs=p=>t0(gb(p)),
s4=(p,x)=>new DataView(app.memory.buffer).setUint32(p,x,1),
S4=(p,a)=>a.forEach((x,i)=>s4(p+4*i,x)),
ma=n=>{heap+=n;let m=app.memory,l=m.buffer.byteLength;heap>l&&m.grow((heap-l-1>>>16)+1);return heap-n},
msn=s=>{s=t1(s);let p=ma(s.length);M(p,s.length).set(s);return[p,s.length]},
ms=s=>msn(s)[0],
wa=_=>kw.then(x=>WebAssembly.instantiate(lz(new Uint8Array(x)),{env})),
env={sin:Math.sin,cos:Math.cos,log:Math.log,exp:Math.exp,
 js_in:(a,n)=>{const s=inp||prompt`stdin:\n`;inp='';return T1.encodeInto(s,M(a,n)).written},
 js_out:(a,n)=>(ap(t0(M(a,n))),n),
 js_log:a=>console.log(t0(gb(a))),
 js_time:(a,b)=>{const t=now();s4(a,t/1000);s4(b,t%1000*1000)},
 js_exit:x=>{throw Error(`exit(${x})`)},
 js_alloc:n=>{const p=4096,r=heap%p;r&&ma(p-r);return ma(n)},
 js_eval:(a,m,r,n)=>T1.encodeInto(''+eval(t0(M(a,m))),M(r,n)).written}

let ev,w=wa(),out='',
cpy=x=>{let c=navigator.clipboard;c&&c.writeText(out)},ap=s=>{out+=s},
kst=s=>s.replace(/[\0\t\n\r\"\\]/g,c=>'\\'+'0tnr"\\'['\0\t\n\r\"\\'.indexOf(c)])
rdy(_=>{
 out=''
 ev=s=>w.then(x=>{app=x.instance.exports;heap=app.__heap_base;txt();out=''
  const O_RDWR=2,O_CREAT=64/*512 on freebsd*/
  const f=app.open(ms('a.k\0'),O_RDWR|O_CREAT,438/*0666*/),[q,nq]=msn(s+'\n');app.write(f,q,nq);app.close(f)
  const h=heap,a=heap+=T1.encodeInto('k\0a.k\0',M(heap,8)).written;S4(a,[h,h+2,0,0]);heap+=16;
  let e;try{app.main(2,a)}catch(x){e=x}if(e&&e.message!=='exit(0)')throw e;w=wa()})
 ev``})

let cnv,g,iid,tid,aid,tickPeriod=50,
pi=Math.PI,tau=2*pi,K=s=>app.evs(ms(s+'\0')),
txt=_=>{if(!g)return;cnv.parentNode.removeChild(cnv);clearInterval(iid);clearTimeout(tid);cancelAnimationFrame(aid)
 cnv=g=iid=tid=aid=null},
E=s=>{ev(s).then(_=>console.log(out))}

fetch`b.k`.then(x=>x.text()).then(x=>ev(x.replace(/\r\n/g,'\n')))
