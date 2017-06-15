let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Workspace/angular.dev/ng-af-pwa-seed
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +18 src/manifest.json
badd +17 .angular-cli.json
badd +18 src/styles.scss
badd +10 src/styles/styles.scss
badd +17 src/styles/mixins.scss
badd +18 src/styles/media.scss
badd +17 src/styles/loading.scss
badd +17 src/styles/index.scss
badd +120 README.md
badd +20 tsconfig.json
badd +19 package.json
badd +23 src/index.html
badd +26 src/assets/css/themes/bluegrey-deeporange.scss
badd +1 node_modules/@angular/material/core/theming/prebuilt/deeppurple-amber.scss
badd +1 node_modules/@angular/material/core/theming/prebuilt/deeppurple-amber.css
badd +1 node_modules/@angular/material/core/theming/prebuilt/deeppurple-amber.map
badd +1 src/assets/css/themes/deeppurple-amber.css.map
badd +1 src/assets/css/themes/deeppurple-amber.css
badd +14 src/assets/css/themes/deeppurple-amber.scss
badd +17 src/app/services/auth.service.ts
badd +136 src/app/auth/auth.service.ts
badd +19 src/app/logger.service.ts
badd +173 src/system/static-log.ts
badd +119 src/app/app.component.ts
badd +10 src/main.ts
badd +8 src/environments/environment.ts
badd +1 src/environments/environment.prod.ts
badd +30 src/app/auth/auth.module.ts
badd +27 src/app/app.module.ts
badd +1 src/app/app.routes.ts
badd +9 src/app/app.config.ts
badd +8 src/app/pages/index.ts
badd +18 src/app/layouts/header/header.component.html
badd +5 src/app/pages/home/home.component.html
badd +14 src/app/app.component.html
badd +1 src/app/app.component.scss
badd +1 src/app/pages/home/home.component.scss
badd +11 src/app/layouts/index.ts
badd +16 src/app/auth/auth.routes.ts
badd +2 src/app/auth/index.ts
badd +3 src/app/layouts/header/header.component.scss
badd +10 src/app/layouts/header/header.component.ts
badd +13 src/assets/css/mixins.scss
badd +1 src/app/layouts/sidenav/sidenav.component.scss
badd +10 src/app/layouts/sidenav/sidenav.component.html
badd +20 src/app/layouts/sidenav/sidenav.component.ts
badd +5 src/app/auth/offline/offline.component.ts
badd +1 src/assets/css/loading.scss
badd +4 src/assets/css/index.scss
badd +1 src/assets/css/media.scss
badd +47 src/app/auth/login/login.component.ts
badd +32 src/app/auth/email/email.component.ts
badd +17 src/app/auth/signup/signup.component.ts
badd +11 src/app/auth/profile/profile.component.ts
badd +12 src/app/auth/login/login.component.html
badd +28 src/app/auth/email/email.component.html
badd +17 src/app/auth/signup/signup.component.html
badd +3 src/app/auth/profile/profile.component.html
badd +5 src/app/auth/offline/offline.component.html
badd +17 src/app/pages/home/home.component.ts
badd +26 src/app/auth/login/login.component.scss
badd +0 src/app/auth/signup/signup.component.scss
badd +3 src/assets/css/deep.scss
badd +10 src/app/auth/email/email.component.spec.ts
badd +0 src/app/auth/email/email.component.scss
badd +10 src/app/layouts/header/header.component.spec.ts
badd +0 src/app/auth/user/user.component.scss
badd +6 src/app/auth/user/user.component.html
badd +9 src/app/auth/user/user.component.ts
badd +14 src/app/pipes/pipes.module.ts
badd +4 src/app/pipes/index.ts
badd +1 src/app/pipes/firstname/firstname.pipe.ts
badd +7 swconfig.js
argglobal
silent! argdel *
set stal=2
edit README.md
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 120 - ((14 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
120
normal! 0
lcd ~/Workspace/angular.dev/ng-af-pwa-seed
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/app.config.ts
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
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 132 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 25 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 45 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 9 - ((8 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
9
normal! 0
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/app.module.ts
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 32 - ((31 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
32
normal! 0
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/app.routes.ts
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 10 - ((9 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
10
normal! 03|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app
wincmd w
exe 'vert 1resize ' . ((&columns * 132 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 25 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 45 + 102) / 204)
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth/auth.module.ts
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
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 132 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 25 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 45 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 29 - ((13 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
29
normal! 020|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth/auth.routes.ts
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 18 - ((17 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
18
normal! 07|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth/auth.service.ts
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 32 - ((31 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
32
normal! 042|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth
wincmd w
exe 'vert 1resize ' . ((&columns * 132 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 25 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 45 + 102) / 204)
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/app.component.ts
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
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 71 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 25 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 106 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 107 - ((21 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
107
normal! 036|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/app.component.html
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 10 - ((9 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
10
normal! 028|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/app.component.scss
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 37 - ((15 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
37
normal! 05|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app
wincmd w
exe 'vert 1resize ' . ((&columns * 71 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 25 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 106 + 102) / 204)
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/styles.scss
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
4wincmd h
wincmd w
wincmd w
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 100 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 25 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 25 + 102) / 204)
exe 'vert 4resize ' . ((&columns * 25 + 102) / 204)
exe 'vert 5resize ' . ((&columns * 25 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 20 - ((19 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
20
normal! 037|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/assets/css/index.scss
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 21 - ((8 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
21
normal! 018|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/assets/css
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/assets/css/media.scss
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
2
normal! zo
15
normal! zo
27
normal! zo
40
normal! zo
53
normal! zo
72
normal! zo
86
normal! zo
let s:l = 82 - ((3 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
82
normal! 029|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/assets/css
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/assets/css/mixins.scss
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 17 - ((16 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
17
normal! 03|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/assets/css
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/assets/css/loading.scss
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 18 - ((17 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
18
normal! 010|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/assets/css
wincmd w
exe 'vert 1resize ' . ((&columns * 100 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 25 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 25 + 102) / 204)
exe 'vert 4resize ' . ((&columns * 25 + 102) / 204)
exe 'vert 5resize ' . ((&columns * 25 + 102) / 204)
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/sidenav/sidenav.component.ts
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
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 71 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 25 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 21 - ((20 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
21
normal! 030|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/sidenav
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/sidenav/sidenav.component.html
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 13 - ((12 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
13
normal! 015|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/sidenav
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/sidenav/sidenav.component.scss
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 16 - ((15 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
16
normal! 023|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/sidenav
wincmd w
exe 'vert 1resize ' . ((&columns * 71 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 25 + 102) / 204)
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/header/header.component.ts
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
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 132 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 45 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 25 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 10 - ((9 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
10
normal! 0
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/header
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/header/header.component.html
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 15 - ((14 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
15
normal! 07|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/header
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/header/header.component.scss
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 5 - ((4 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
5
normal! 0
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/header
wincmd w
exe 'vert 1resize ' . ((&columns * 132 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 45 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 25 + 102) / 204)
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth/login/login.component.ts
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 132 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 71 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 47 - ((31 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
47
normal! 012|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth/login
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth/login/login.component.scss
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
24
normal! zo
let s:l = 12 - ((11 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
12
normal! 0
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth/login
wincmd w
exe 'vert 1resize ' . ((&columns * 132 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 71 + 102) / 204)
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/pages/home/home.component.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 16 - ((15 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
16
normal! 0
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/pages/home
tabnext 5
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=21 winwidth=106 shortmess=filnxtToO
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
