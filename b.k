il:(("._12"!0N,!3)@)'7 7#"2222...2222_..222___.22___11.___111.._1111...1111"
vc:({()};-:;::)@\:(1 1;0 1;1 0)
gmv:{{$[#x;x;()]}((0=y.*|:)')#,/+{(vc x){(y;x+y)}\:y}[x]'+&x=y} 
rdb:{il{.[x;*y;:;il.*|y]}/{+(x;(-#x)?x)}@+&~^il}
mmv:{{.[;*|y;:;x.*y].[x;*y;:;x.*|y]}[x;$[#y;y;()]]}
spg:{{gmv[*x;*|x]}{(3-*x;mmv[*|x;*gmv[*x;*|x]])}/(1;rdb[])}
dpb:{19#'9_'(-6+!13){((3*x)#" "),y}'"     "/'(,/((0N,!3)!" .12")x)@.=+/!7 7}
rmm:{*{~gmv[1;x 1]}{(1+*x;mmv[x 1;*gmv[1;x 1]])}/(0;(x-1){((0N,!3)!0N 0 2 1)@|'|x}/y)}
gns:{{(gmv. x){(3-*y;mmv[y 1]x)}\:x}(x;y)}
gov:{gmv[y;z]@{x?|/x}@{&/{(-3+2**x)*rmm. x}'x({(-10|-#x)?x}@,/(gns.)')/,y}[x]'gns[y;z]}
/il:initial vc:vectors gmv:get-moves[p;b] rdb:random-board[] mmv:make-move[b;m] spg:sample-game[]->(p;b) dpb:display-board[b] rmm:remaining-moves[p;b](inaccurate) gns:game's-next-states[p;b] gov:generate-ok-move[ply;p;b](bad)
cw:512;hw:41.33;pi:3.14159265359;`js"window.c=window.g.getContext`2d`;c.strokeStyle='black'"
hl:((256;hw)+)''hw*{+/(1.5 0.86602540378;-1.5 0.86602540378)*7 7\x}''7 7#!49
csl:{`js"console.log(`",({,/@[x;&x="`";{"\\`"}]}@`k x),"`)"}
dhx:{`js"c.fillStyle='",x,"';c.beginPath();",({";"/({"c.lineTo(",(","/$x),")"}z+)'{x*(`cos y;-`sin y)}[x]'(!y)*2*pi%y}[hw;6;(y;z)]),";c.closePath();c.fill();c.stroke()"}
dcc:{`js"c.fillStyle='",x,"';c.beginPath();c.arc(",($y),",",($z),",",($hw*0.75),",0,6.28318530718);c.fill();c.stroke()"}
ab:il;sn:()
dbc:{{dhx[("moccasin";"green")@~^sn?x].hl. x;$[ab. x;dcc[(0;"red";"blue")ab. x].hl. x;0]}'+&~^il}
sel:{{(x;())@^il. x}{$[#x;x;()]}@,/&{csl x;x}{{y=x}[&/,/x]'x}@{%+/{x*x}(x;y)-z}[x;y]''hl}
slc:{csl sn;{$[(#sn)&~^(1_sn)?x;[ab::mmv[ab;(*sn;x)];sn::();dbc[];ab::mmv[ab;gov[2;2;ab]]];sn::$[x;{$[1=#x;();x]}(,x),(*|:)'({x~*y}[x]')#gmv[1;ab];x]]}sel[x;y];csl(rmm[1;ab];rmm[2;ab])}
`js"window.g.onclick=e=>{let r=window.g.getBoundingClientRect();K(`.[slc;(${e.clientX-r.left};${e.clientY-r.top});{csl x;sn::();csl\"sn reset\";dbc[]}];dbc[]`)}";dbc[]
/cw:canvas-width hw:hex-width pi hl:hex-locations csl:console-log[x] dhx:draw-hex[color;x;y] dcc:draw-circle[color;x;y] ab:active-board sn:selected-hex-&-neighbors dbc:draw-board-on-canvas[] sel:select-nearest-hex[x;y] slc:select-conditional[x;y]
