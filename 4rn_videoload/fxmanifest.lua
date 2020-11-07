----------------------------------------------
-- 4rn_videoload | MANIFEST (c)4rn_OLD 2020 --
----------------------------------------------
--
--	Created by Arnold Halics
--
--	This work is licensed under MIT.
--
--	If problem this script, please write e-mail: nemerdekel@sohivatal.hu
--

fx_version 'cerulean'

game 'gta5'

version '1.0'

description '4rn_videoloadscreen'

files {
    'index.html',
    'config.js',
    'css/*.*',
    'images/*.*',
    'js/*.*'
}

loadscreen 'index.html'
loadscreen_manual_shutdown 'yes'
client_script 'client.lua'
