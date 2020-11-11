/**
|
|	Fivem [4rn_videoloadscreen] 1.0
|
**/

/** Background setting **/

let

    // Add YouTube url's /random video/ (if you need add more or remove)
    youtubeurls = [
		"https://www.youtube.com/watch?v=pHr8gRWz9uo", // Video 1 
		"https://www.youtube.com/watch?v=lhjMfF5n1VU", // Video 2
		"https://www.youtube.com/watch?v=0-l-GBr5_R0" // Video 3
	],
    // on: mute youtube video audio
    youtubemute = "off"
    // on: loop youtube video
    youtubeloop = "on",

    youtubeurl = youtubeurls[Math.floor(Math.random() * youtubeurls.length)];

/**
TEXT CONFIG
secondary color: 	add <span> </span> tag
line feed: 			add <br> tag
example:			4rn_<span>ROLEPLAY</span><br>rp server<br>INTRO
**/

const

    slides = [
        "4rn_<span>ROLEPLAY</span><br>rp server<br>INTRO",
        "simple<br><span>lightweight </span><br>cool",
        "<span>GOOD</span><br>CHOICE"
    ],

    // Bottom comment text
    comments = "Server is loading! Wait a minute / or two :D /";
