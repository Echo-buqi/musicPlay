let play = $('#play'),
    pause = $('#pause'),
    prev = $('#prev'),
    next = $('#next'),
    musicName = $('#musicName'),
    musicImg = $('#musicImg');

let music = new Array();
music = ['环岛旅行 -- 熊宝贝', '林宥嘉 -- 马劲屿,罗之豪 (Cover 徐秉龙)', '起风了-- 买辣椒也用券(冯沁苑)', '有一种悲伤 -- 罗之豪(Cover A-lin)', '追光者 -- 罗之豪(Cover 岑宁儿)', '追光者Remix(我在你身后) -- 罗之豪Remix'];

let len = music.length,
    num = 0;

// 播放
play.onclick = function () {
    if (audio.paused) {
        audio.play();
    }
}

// 暂停
pause.onclick = function () {
    if (audio.played) {
        audio.pause();
    }
}

// 上一首
prev.onclick = function () {
    num = (num + len - 1) % len;
    audio.src = './music/' + music[num] + '.mp3';
    musicName.innerHTML = music[num];
    musicImg.src = './image/' + music[num] + '.jpg';
    audio.play();
}

// 下一首
next.onclick = function () {
    num = (num + 1) % len;
    audio.src = './music/' + music[num] + '.mp3';
    musicName.innerHTML = music[num];
    musicImg.src = './image/' + music[num] + '.jpg';
    audio.play();
}

// 自动切换下一首
audio.addEventListener('ended', function () {
    next.onclick();
}, false);
