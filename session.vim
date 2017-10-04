let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Workspace/angular.dev/jaspicar
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +32 .angular-cli.json
badd +0 src/service-worker.js
badd +19 swconfig.js
badd +15 src/app/app.component.ts
badd +0 src/app/pages/home/home.component.ts
badd +5 src/app/pages/home/home.component.html
badd +0 src/app/app.routes.ts
badd +35 src/app/app.module.ts
badd +1 README.md
badd +7 src/app/app.config.ts
badd +5 src/index.html
badd +11 src/app/pages/index.ts
badd +0 src/app/pages/income/income.component.html
badd +16 src/app/pages/income/income.component.ts
badd +0 src/app/layouts/sidenav/sidenav.component.ts
badd +0 src/app/layouts/sidenav/sidenav.component.html
badd +20 src/app/layouts/sidenav/sidenav.component.scss
badd +0 src/app/pages/income/income.component.scss
badd +1 src/app/models/income.ts
badd +10 src/app/pipes/pipes.module.ts
badd +10 src/app/pipes/index.ts
badd +10 src/app/pipes/reverse/reverse.pipe.ts
badd +13 src/app/pipes/firstname/firstname.pipe.ts
badd +11 src/app/layouts/index.ts
badd +0 src/app/layouts/row/row.component.ts
badd +2 src/app/layouts/row/row.component.html
badd +30 package.json
badd +26 package.144.json
badd +0 src/app/auth/auth.module.ts
badd +0 src/app/auth/email/email.component.ts
badd +0 src/app/auth/email/email.component.html
argglobal
silent! argdel *
set stal=2
edit README.md
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 11 - ((10 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
11
normal! 0
lcd ~/Workspace/angular.dev/jaspicar
tabedit ~/Workspace/angular.dev/jaspicar/src/app/app.module.ts
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 65 + 102) / 204)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 32 - ((31 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
32
normal! 05|
lcd ~/Workspace/angular.dev/jaspicar/src/app
wincmd w
argglobal
edit ~/Workspace/angular.dev/jaspicar/src/app/app.routes.ts
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 17 - ((16 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
17
normal! 026|
lcd ~/Workspace/angular.dev/jaspicar/src/app
wincmd w
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 65 + 102) / 204)
tabedit ~/Workspace/angular.dev/jaspicar/src/app/layouts/sidenav/sidenav.component.html
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 97 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
3,3fold
7,7fold
13,13fold
2,14fold
let s:l = 44 - ((27 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
44
normal! 048|
lcd ~/Workspace/angular.dev/jaspicar/src/app/layouts/sidenav
wincmd w
argglobal
edit ~/Workspace/angular.dev/jaspicar/src/app/layouts/sidenav/sidenav.component.ts
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 13 - ((0 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
13
normal! 0
lcd ~/Workspace/angular.dev/jaspicar/src/app/layouts/sidenav
wincmd w
exe 'vert 1resize ' . ((&columns * 97 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
tabedit ~/Workspace/angular.dev/jaspicar/src/app/pages/index.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 23 - ((22 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
23
normal! 0
lcd ~/Workspace/angular.dev/jaspicar/src/app/pages
tabedit ~/Workspace/angular.dev/jaspicar/src/app/pages/income/income.component.ts
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 86 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 10 + 102) / 204)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 3 - ((2 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
3
normal! 012|
lcd ~/Workspace/angular.dev/jaspicar/src/app/pages/income
wincmd w
argglobal
edit ~/Workspace/angular.dev/jaspicar/src/app/pages/income/income.component.html
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 15 - ((14 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
15
normal! 051|
lcd ~/Workspace/angular.dev/jaspicar/src/app/pages/income
wincmd w
argglobal
edit ~/Workspace/angular.dev/jaspicar/src/app/pages/income/income.component.scss
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 4 - ((3 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
4
normal! 0
lcd ~/Workspace/angular.dev/jaspicar/src/app/pages/income
wincmd w
exe 'vert 1resize ' . ((&columns * 86 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 10 + 102) / 204)
tabedit ~/Workspace/angular.dev/jaspicar/src/app/models/income.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 10 - ((9 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
10
normal! 029|
lcd ~/Workspace/angular.dev/jaspicar/src/app/models
tabedit ~/Workspace/angular.dev/jaspicar/src/app/layouts/row/row.component.html
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 65 + 102) / 204)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 2 - ((1 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
2
normal! 020|
lcd ~/Workspace/angular.dev/jaspicar/src/app/layouts/row
wincmd w
argglobal
edit ~/Workspace/angular.dev/jaspicar/src/app/layouts/row/row.component.ts
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 16 - ((15 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
16
normal! 04|
lcd ~/Workspace/angular.dev/jaspicar/src/app/layouts/row
wincmd w
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 65 + 102) / 204)
tabedit ~/Workspace/angular.dev/jaspicar/src/app/auth/email/email.component.html
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 10 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 54 + 102) / 204)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
12,16fold
11,16fold
21,25fold
20,25fold
29,30fold
29,31fold
10,33fold
3,34fold
3
normal! zo
10
normal! zo
11
normal! zo
20
normal! zo
let s:l = 17 - ((16 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
17
normal! 029|
lcd ~/Workspace/angular.dev/jaspicar/src/app/auth/email
wincmd w
argglobal
edit ~/Workspace/angular.dev/jaspicar/src/app/auth/email/email.component.ts
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 16 - ((15 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
16
normal! 03|
lcd ~/Workspace/angular.dev/jaspicar/src/app/auth/email
wincmd w
argglobal
edit ~/Workspace/angular.dev/jaspicar/src/app/auth/auth.module.ts
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
21,25fold
28,28fold
31,32fold
35,35fold
20,36fold
let s:l = 9 - ((8 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
9
normal! 0
lcd ~/Workspace/angular.dev/jaspicar/src/app/auth
wincmd w
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 10 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 54 + 102) / 204)
tabnext 8
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=10 winminheight=1 winminwidth=10 shortmess=filnxtToO
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
