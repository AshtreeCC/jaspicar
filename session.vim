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
badd +14 src/styles.scss
badd +10 src/styles/styles.scss
badd +17 src/styles/mixins.scss
badd +18 src/styles/media.scss
badd +17 src/styles/loading.scss
badd +17 src/styles/index.scss
badd +1 README.md
badd +20 tsconfig.json
badd +19 package.json
badd +23 src/index.html
badd +41 src/assets/css/themes/bluegrey-deeporange.scss
badd +0 ./node_modules/@angular/material/core/theming/prebuilt/deeppurple-amber.scss
badd +0 ./node_modules/@angular/material/core/theming/prebuilt/deeppurple-amber.css
badd +0 ./node_modules/@angular/material/core/theming/prebuilt/deeppurple-amber.map
badd +0 src/assets/css/themes/deeppurple-amber.css.map
badd +0 src/assets/css/themes/deeppurple-amber.css
badd +14 src/assets/css/themes/deeppurple-amber.scss
badd +17 src/app/services/auth.service.ts
badd +13 src/app/auth/auth.service.ts
badd +19 src/app/logger.service.ts
badd +173 src/system/static-log.ts
badd +21 src/app/app.component.ts
badd +10 src/main.ts
badd +8 src/environments/environment.ts
badd +0 src/environments/environment.prod.ts
badd +30 src/app/auth/auth.module.ts
badd +21 src/app/app.module.ts
badd +1 src/app/app.routes.ts
badd +8 src/app/app.config.ts
badd +11 src/app/pages/index.ts
badd +14 src/app/layouts/header/header.component.html
badd +3 src/app/pages/home/home.component.html
badd +14 src/app/app.component.html
badd +0 src/app/app.component.scss
badd +10 src/app/pages/home/home.component.scss
badd +11 src/app/layouts/index.ts
badd +0 src/app/auth/auth.routes.ts
badd +0 src/app/auth/index.ts
badd +15 src/app/layouts/header/header.component.scss
badd +18 src/app/layouts/header/header.component.ts
badd +13 src/assets/css/mixins.scss
badd +0 src/app/layouts/sidenav/sidenav.component.scss
badd +0 src/app/layouts/sidenav/sidenav.component.html
badd +1 src/app/layouts/sidenav/sidenav.component.ts
badd +5 src/app/auth/offline/offline.component.ts
badd +0 src/assets/css/loading.scss
badd +0 src/assets/css/index.scss
badd +0 src/assets/css/media.scss
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
let s:l = 1 - ((0 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd ~/Workspace/angular.dev/ng-af-pwa-seed
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/app.module.ts
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 65 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 57 - ((31 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
57
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
normal! 02|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app
wincmd w
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 65 + 102) / 204)
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth/index.ts
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
exe 'vert 1resize ' . ((&columns * 86 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 10 + 102) / 204)
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
let s:l = 6 - ((5 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
6
normal! 016|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/pages/index.ts
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 8 - ((7 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
8
normal! 012|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/pages
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/index.ts
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 7 - ((6 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
7
normal! 018|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts
wincmd w
exe 'vert 1resize ' . ((&columns * 86 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 10 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 106 + 102) / 204)
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth/index.ts
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
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 54 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 10 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 12 - ((11 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
12
normal! 019|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth
wincmd w
argglobal
edit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth/auth.module.ts
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
normal! 02|
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
let s:l = 16 - ((15 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
16
normal! 0
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth
wincmd w
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 54 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 10 + 102) / 204)
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth/auth.service.ts
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
let s:l = 6 - ((5 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
6
normal! 015|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/auth
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
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 54 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 10 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 42 - ((14 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
42
normal! 041|
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
let s:l = 17 - ((16 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
17
normal! 021|
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
let s:l = 15 - ((14 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
15
normal! 02|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app
wincmd w
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 54 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 10 + 102) / 204)
tabedit ~/Workspace/angular.dev/ng-af-pwa-seed/src/assets/css/index.scss
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
3wincmd h
wincmd w
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 75 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 10 + 102) / 204)
exe 'vert 4resize ' . ((&columns * 10 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 4 - ((3 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
4
normal! 015|
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
7
normal! zo
29
normal! zo
42
normal! zo
55
normal! zo
67
normal! zo
86
normal! zo
let s:l = 68 - ((16 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
68
normal! 022|
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
normal! 0
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
let s:l = 15 - ((14 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
15
normal! 0
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/assets/css
wincmd w
exe 'vert 1resize ' . ((&columns * 75 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 10 + 102) / 204)
exe 'vert 4resize ' . ((&columns * 10 + 102) / 204)
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
exe 'vert 1resize ' . ((&columns * 86 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 10 + 102) / 204)
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
let s:l = 4 - ((3 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
4
normal! 0
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
let s:l = 1 - ((0 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/sidenav
wincmd w
exe 'vert 1resize ' . ((&columns * 86 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 10 + 102) / 204)
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
exe 'vert 1resize ' . ((&columns * 86 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 10 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 38 - ((19 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
38
normal! 05|
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
let s:l = 14 - ((13 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
14
normal! 0
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
let s:l = 18 - ((17 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
18
normal! 022|
lcd ~/Workspace/angular.dev/ng-af-pwa-seed/src/app/layouts/header
wincmd w
exe 'vert 1resize ' . ((&columns * 86 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 10 + 102) / 204)
tabnext 6
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=10 shortmess=filnxtToO
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
