const audio = document.getElementById('audio')
const searchElement = document.querySelector('#search')
const appElement = document.querySelector('#app')
const searchSuggest = document.querySelector('.search-suggest')
const themes = document.querySelector('.themes')
const playerThumb = document.querySelector('.player-thumb')
const cdThumb = document.querySelector('.cd-thumb')
const cdThumbs = [...document.querySelectorAll('.cd-thumb')]
const musicControl = document.querySelector('.music-control')
const musicControlCurrentImage = document.querySelector('.music-control-info-image')
const togglePlayBtn = document.querySelector('.btn-toggle-play')
const togglePlayThumb = document.querySelector('.player-thumb-toggle-play')
const currentSongsName = [...document.querySelectorAll('.current-song-name')]
const player = document.querySelector('.player')
const currentPlayingImage = document.querySelector('.current-playing-body-image')
const musicInfoSingers = [...document.querySelectorAll('.music-info-singer')]
const listSongs = document.querySelector('.list-song-render')
const currentSongDuration = document.querySelector('.current-song-duration')
const progress = document.querySelector('.progress')
const nextButton = document.querySelector('.btn-next')
const prevButton = document.querySelector('.btn-prev')
const randomButton = document.querySelector('.btn-random')
const repeatButton = document.querySelector('.btn-repeat')
const headerOptionsItems = [...document.querySelectorAll('.header-options-item')]
const playListSuggests = document.querySelector('.player-list-suggest')
const pageItems = [...document.querySelectorAll('.page-item')]

// page-item

const personalPage = document.querySelector('.page-item.personal')
const discoverPage = document.querySelector('.page-item.discover')
const zingchartPage = document.querySelector('.page-item.zingchart')
const radioPage = document.querySelector('.page-item.radio')
const personalSliderContent = document.querySelector('.personal-content-center-slider')
const sliders = document.querySelector('.sliders')

// personal

const personalPlayList = document.querySelector('.personal-content-center-playlist')
const personalListOptions = [...document.querySelectorAll('.personal-option')]
const personalContentItems = [...document.querySelectorAll('.personal-content-item')]
const sidebarPageItems = [...document.querySelectorAll('.sidebar-main-item-page')]
const playlistItems = [...document.querySelectorAll('.playlist-container-item:not(.playlist-container-item-create)')]

// discover

const discoverSlideContainer = document.querySelector('.discover-sliders')
const discoverNextSlide = document.querySelector('.discover-next-slide')
const discoverPrevSlide = document.querySelector('.discover-prev-slide')
const discoverNewReleaseMusicBtn = document.querySelector('.discover-new-release-music')
const discoverNewReleaseAlbumBtn = document.querySelector('.discover-new-release-album')
const newReleaseMusicContainer = document.querySelector('.discover-new-release-content-item.music')
const newReleaseAlbumContainer = document.querySelector('.discover-new-release-content-item.album')

// animate cdthum rotate

const cdThumbAnimate = cdThumb.animate([{ transform: 'rotate(360deg)' }], {
    duration: 12000,
    iterations: Infinity,
})

const cdThumbInfoAnimate = musicControlCurrentImage.animate([{ transform: 'rotate(360deg)' }], {
    duration: 12000,
    iterations: Infinity,
})
cdThumbAnimate.pause()
cdThumbInfoAnimate.pause()

const app = {
    // defined default properties
    currentIndex: 0,
    defaultBackground: './background/backgroundThemes/11.jpg',
    defaultBackgroundModal: './background/modalThemes/modalTheme3/theme1.jpg',
    isPlaying: false,
    isRandom: false,
    isRepeat: false,

    songs: [
        {
            title: 'Chúng ta sau này',
            singer: 'T.R.I',
            pathSong: './songs/list-song/chungtasaunay.mp3',
            duration: '03:31',
            img: 'https://avatar-ex-swe.nixcdn.com/song/share/2021/01/27/f/1/e/c/1611738359456.jpg',
        },
        {
            title: 'CÓ CHƠI CÓ CHỊU',
            singer: 'KARIK x ONLY C',
            pathSong: './songs/list-song/cochoicochiu.mp3',
            duration: '04:46',
            img: 'https://newsmd2fr.keeng.net/tiin/archive/imageslead/2022/09/21/wx8ygsu0lfln100ur8vqajn45pa34ite.jpg',
        },

        {
            title: 'À Lôi',
            singer: 'Double2T x Masew',
            pathSong: 'https://res.cloudinary.com/phuockaito/video/upload/v1689439283/audio/qr3xh9afv5xmvmrurcs2.mp3',
            duration: '3:13',
            img: 'https://res.cloudinary.com/phuockaito/image/upload/v1689439283/image_music/vooas8x02r7rletmltw7.jpg',
        },

        {
            title: 'Để Anh Một Mình',
            singer: 'Rhyder',
            pathSong: 'https://res.cloudinary.com/phuockaito/video/upload/v1689087548/audio/izqfjaop3voeuqsu14fe.mp3',
            duration: '3:12',
            img: 'https://res.cloudinary.com/phuockaito/image/upload/v1689087547/image_music/jwtpgvwepyeai4fxf7di.jpg',
        },

        {
            title: 'Về Quê',
            singer: 'Mikelodic',
            pathSong: 'https://res.cloudinary.com/phuockaito/video/upload/v1689087412/audio/dqysm1dwkw5k2vvp6yif.mp3',
            duration: '2:55',
            img: 'https://res.cloudinary.com/phuockaito/image/upload/v1689087412/image_music/fs2gqny5zwasqdcu6hoy.jpg',
        },

        {
            title: 'Đất Và Lửa',
            singer: 'Long Nón Lá',
            pathSong: 'https://res.cloudinary.com/phuockaito/video/upload/v1689086599/audio/hzwekxyipcjhwva7jsaq.mp3',
            duration: '3:08',
            img: 'https://res.cloudinary.com/phuockaito/image/upload/v1689086598/image_music/ws6ajgilcsss34ihvn7z.jpg',
        },

        {
            title: 'gió',
            singer: 'Jank',
            pathSong: 'https://res.cloudinary.com/phuockaito/video/upload/v1687522042/audio/zldfzq29iwom8vdwsnuw.mp3',
            duration: '2:54',
            img: 'https://i.ytimg.com/vi/igoE062z76U/maxresdefault.jpg',
        },

        {
            img: 'https://baochauelec.com/cdn/images/tin-tuc/loi-bat-hat-waiting-for-you-ban-chuan.jpg',
            title: 'Waiting For You',
            singer: 'MONO',
            pathSong: './songs/vip/WaitingForYou.mp3',
            duration: '04:25',
        },

        {
            title: 'Cơn Mưa Băng Giá',
            singer: 'Noo Phước Thịnh',
            pathSong: './songs/list-song/cmbg.mp3',
            duration: '04:40',
            img: 'https://tse1.mm.bing.net/th?id=OIP.hSgGC0yJ6GeY8IE1GDTW6gHaFi&pid=Api&P=0',
        },
        {
            title: 'Em Là Con Thuyền Cô Đơn',
            singer: 'Thái Học',
            pathSong: './songs/list-song/elctcd.mp3',
            duration: '05:06',
            img: 'https://i.ytimg.com/vi/orFNbppc6_0/maxresdefault.jpg',
        },

        {
            img: './img/songs/0.webp',
            title: 'Anh Đã Lạc Vào',
            singer: 'Green, Đại Mèo Remix',
            pathSong: './songs/list-song/0.mp3',
            duration: '04:27',
        },
        {
            img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/c/6/d/e/c6def069a1a885c41fe479358fa7c506.jpg',
            title: 'Chạy Về Khóc Với Anh',
            singer: 'Erik, Duzme Remix',
            pathSong: './songs/list-song/1.mp3',
            duration: '03:26',
        },
        {
            img: './img/songs/2.jpeg',
            title: 'Sẵn Sàng Yêu Em Đi Thôi',
            singer: 'Woni, Minh Tú, Đại Mèo Remix',
            pathSong: './songs/list-song/2.mp3',
            duration: '05:29',
        },
        {
            title: 'Ngôi Sao Cô Đơn',
            singer: 'Jack - J97',
            pathSong: './songs/list-song/nscd.mp3',
            duration: '04:43',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/0/8/b/4/08b457f078f021dcbbb8eb76e8d23e43.jpg',
        },
        {
            title: 'Đom Đóm',
            singer: 'Jack - J97',
            pathSong: './songs/list-song/dd.mp3',
            duration: '06:21',
            img: ' https://i.ytimg.com/vi/4CCGI83vOVo/maxresdefault.jpg',
        },
        {
            img: './img/songs/3.webp',
            title: 'Gieo Quẻ',
            singer: 'Hoàng Thuỳ Linh, ĐEN, Orinn Remix',
            pathSong: './songs/list-song/3.mp3',
            duration: '04:00',
        },

        {
            img: './img/songs/5.webp',
            title: 'Lưu Số Em Đi',
            singer: 'Huỳnh Văn, V.P. Tiên, Đại Mèo Remix',
            pathSong: './songs/list-song/5.m4a',
            duration: '05:42',
        },
        {
            img: './img/songs/6.webp',
            title: 'Như Một Người Dưng',
            singer: 'Nguyễn Thạc Bảo Ngọc, Remix',
            pathSong: './songs/list-song/6.mp3',
            duration: '05:05',
        },
        {
            title: 'Lặng Yên',
            singer: 'Bùi Anh Tuấn ft. Ái Phương',
            pathSong: './songs/list-song/langyen.mp3',
            duration: '04:41',
            img: 'https://icdn.dantri.com.vn/2021/05/29/2-mua-lua-chin-1622224483750.jpg',
        },
        {
            title: 'Về Bên Anh',
            singer: 'Jack - J97',
            pathSong: './songs/list-song/vba.mp3',
            duration: '04:21',
            img: 'https://o.rada.vn/data/image/2022/05/16/Ve-ben-anh-700.jpg',
        },
        {
            img: './img/songs/7.webp',
            title: 'Ôm Nhiều Mộng Mơ',
            singer: 'Phát Huy T4, Đại Mèo Remix',
            pathSong: './songs/list-song/7.m4a',
            duration: '03:16',
        },
        {
            img: './img/songs/8.jpg',
            title: 'Tình Yêu Ngủ Quên',
            singer: 'Hoàng Tôn, LyHan, Orinn Remix',
            pathSong: './songs/list-song/8.mp3',
            duration: '04:27',
        },
        {
            img: './img/songs/9.webp',
            title: 'Không Bằng',
            singer: 'Na, RIN songs Remix',
            pathSong: './songs/list-song/9.m4a',
            duration: '03:23',
        },
        {
            img: './img/songs/10.webp',
            title: 'Ai Chung Tình Được Mãi',
            singer: 'Đinh Tùng Huy, ACV Remix',
            pathSong: './songs/list-song/10.m4a',
            duration: '03:55',
        },
        {
            img: './img/songs/11.webp',
            title: 'Cô Đơn Dành Cho Ai',
            singer: 'NAL, LEE KEN, Orinn Remix',
            pathSong: './songs/list-song/11.m4a',
            duration: '04:45',
        },
        {
            img: './img/songs/12.webp',
            title: 'Ánh mắt ta chạm nhau',
            singer: 'Ngô Lan Hương, Đại Mèo remix',
            pathSong: './songs/list-song/12.m4a',
            duration: '06:01',
        },
        {
            img: './img/songs/13.webp',
            title: '2 Phút Hơn',
            singer: 'Phao, KAIZ Remix',
            pathSong: './songs/list-song/13.m4a',
            duration: '05:02',
        },
        {
            img: './img/songs/14.webp',
            title: 'Là Ai Từ Bỏ Là Ai Vô Tình',
            singer: 'Hương Ly, Jombie (G5R), RIN songs Remix',
            pathSong: './songs/list-song/14.m4a',
            duration: '03:25',
        },
        {
            img: './img/songs/2.jpeg',
            title: 'Yêu Đừng Sợ Đau',
            singer: 'Ngô Lan Hương, Cukak Remix',
            pathSong: './songs/list-song/15.m4a',
            duration: '03:51',
            type: 'vip',
        },

        // =======================================

        {
            title: 'Lỡ Hẹn Với Dòng Lam',
            singer: 'Thái Học',
            pathSong: './songs/list-song/lhdsl.mp3',
            duration: '05:43',
            type: 'vip',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/4/2/a/5/42a564469b6a80f9d288866ba8751b2e.jpg',
        },

        {
            img: './img/discover/ctn2/3.jpg',
            title: 'Into Your Arms',
            singer: 'Witt Lowry ft. Ava Max',
            time: '3 ngày trước',
            pathSong: './songs/vip/Into Your Arms - Witt Lowry ft. Ava Max (Lyrics + Vietsub) - TikTok ♫.mp3',
            type: 'free',
            duration: '02:07',
        },

        {
            img: './img/discover/ctn2/4.webp',
            title: 'Thế Giới Trong Em',
            singer: 'Hương Ly,',
            time: 'LY.M',
            pathSong: './songs/vip/thegioitrongem.mp3',
            type: 'free',
            duration: '04:02',
        },
        {
            img: './img/discover/ctn2/5.webp',
            title: "Wavin' Flag",
            singer: "K'NAAN",
            time: '2 ngày trước',
            pathSong: "./songs/vip/K'NAAN - Wavin' Flag (Coca-Cola Celebration Mix).mp3",
            type: 'free',
            duration: '03:44',
        },
        {
            img: './img/discover/ctn2/6.webp',
            title: "I'm So Happy",
            singer: 'Jeremy Zucker,BENEE',
            time: '3 ngày trước',
            pathSong: './songs/vip/Into Your Arms - Witt Lowry ft. Ava Max (Lyrics + Vietsub) - TikTok ♫.mp3',
            type: 'free',
            duration: '06:03',
        },
        {
            img: './img/discover/ctn2/7.jpg',
            title: 'Để Rồi Tổn Thương',
            singer: 'Sara Luu,JayKii',
            time: '2 ngày trước',
            pathSong: './songs/vip/deroitonthuong.mp3',
            type: 'vip',
            duration: '05:17',
        },
        {
            img: './img/discover/ctn2/11.jpg',
            title: 'Em Lấy Chồng',
            singer: 'Khắc Việt,ACV',
            time: '6 ngày trước',
            pathSong: './songs/vip/Emlaychong.mp3',
            type: 'free',
            duration: '04:22',
        },

        // -------- play list   ------------
        {
            img: './img/playListSongs/tshk.jfif',
            title: 'Tây Sơn Hào Kiệt',
            singer: 'JOMBIE X PHAN ANN',
            time: '6 ngày trước',
            pathSong: './songs/list-song/TÂY SƠN HÀO KIỆT (Remix) - JOMBIE X PHAN ANN (MV Hoạt Hình).mp3',
            type: 'free',
            duration: '4:22',
        },
        {
            img: './img/playListSongs/hlpb.png',
            title: 'Hùng Long Phong Bá',
            singer: 'Jombie, Danhka, Bean, Sakhar',
            time: '6 ngày trước',
            pathSong: './songs/list-song/Hùng Long Phong Bá.mp3',
            type: 'free',
            duration: '4:22',
        },
        {
            img: './img/playListSongs/ll.jpg',
            title: 'Lưu Ly',
            singer: 'D.T',
            time: '6 ngày trước',
            pathSong: './songs/list-song/LƯU LY (Rap Việt Mùa 2) - D.T - Lyrics - Tú Tú ✔.mp3',
            type: 'free',
            duration: '4:22',
        },
        {
            img: './img/playListSongs/ds.jfif',
            title: 'Đất sóc',
            singer: 'JOMBIE',
            time: '6 ngày trước',
            pathSong: './songs/list-song/JOMBIE - ĐẤT SÓC - OFFICIAL MV.mp3',
            type: 'vip',
            duration: '4:22',
        },
        // ------------- us -------------------
        {
            img: 'https://i.ytimg.com/vi/shLUsd7kQCI/maxresdefault.jpg',
            title: 'Unstoppable',
            singer: 'Sia',
            time: '6 ngày trước',
            pathSong: './songs/us/Sia - Unstoppable (Lyrics).mp3',
            type: 'free',
            duration: '4:22',
        },
        {
            img: './img/playListSongs/hlpb.png',
            title: 'Sweet but Psycho',
            singer: 'Ava Max ',
            time: '6 ngày trước',
            pathSong: './songs/us/Ava Max - Sweet but Psycho (Lyrics).mp3',
            type: 'free',
            duration: '4:22',
        },
        {
            img: 'https://i.ytimg.com/vi/28yhlw1qH9Y/sddefault.jpg',
            title: 'The Box',
            singer: 'Roddy Ricch',
            time: '6 ngày trước',
            pathSong: './songs/us/Roddy Ricch - The Box [Official Audio].mp3',
            type: 'free',
            duration: '4:22',
        },
    ],

    listSinger: [
        {
            Singer: 'Jack',
            Folower: '1 triệu quan tâm',
            img: './img/listSinger/jack.png',
        },
        {
            Singer: 'Hương Ly',
            Folower: '190k quan tâm',
            img: './img/listSinger/huong-ly.png',
        },
        {
            Singer: 'Karik',
            Folower: '600k quan tâm',
            img: './img/listSinger/karik.png',
        },
        {
            Singer: 'Onlyc',
            Folower: '120k quan tâm',
            img: './img/listSinger/onlyc.png',
        },
        {
            Singer: 'Mr-siro',
            Folower: '1 triệu quan tâm',
            img: './img/listSinger/mr-siro.png',
        },
    ],

    render: function () {
        const htmls = this.songs.map((song, index) => {
            song['id'] = index
            return `
                <div class="current-playing-body ${this.currentIndex === index ? 'active' : ''}" data-index="${index}">
                    <div class="current-playing-body-info">
                        <div class="current-playing-body-image" style="background: url('${song.img}'); background-size: cover; background-repeat: no-repeat"></div>
                        <div class="current-playing-body-songs">
                            <p class="current-playing-body-name current-song-name">${song.title}</p>
                            <p class="current-playing-body-singer current-song-singer">${song.singer}</p>
                        </div>
                    </div>
                    <div class="current-playing-body-duration">
                        <p>${song.duration}</p>
                    </div>
                </div>
                `
        })

        return htmls
    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            },
        })
    },

    loadCurrentSong: function () {
        audio.setAttribute('src', this.currentSong.pathSong)
        currentSongsName.forEach((currentSongName) => {
            currentSongName.innerText = this.currentSong.title
        })
        musicInfoSingers.forEach((musicInfoSinger) => {
            musicInfoSinger.innerText = this.currentSong.singer
        })

        Object.assign(currentPlayingImage.style, {
            background: `url('${this.currentSong.img}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        })
        currentPlayingImage.style.background = `url('${this.currentSong.img}')`
        currentPlayingImage.style.backgroundSize = 'cover'
        cdThumbs.forEach((cdThumb) => {
            cdThumb.style.background = `url('${this.currentSong.img}')`
            cdThumb.style.backgroundSize = 'cover'
        })
        currentSongDuration.innerText = this.currentSong.duration

        listSongs.innerHTML = this.render().join('')

        personalPlayList.innerHTML = this.render().join('')
    },

    handleEvent: function () {
        const _this = this

        const avata = document.querySelector('.avatar')
        avata.onclick = function () {
            location.assign('https://www.facebook.com/HuanPG05')
        }

        togglePlayBtn.onclick = function () {
            _this.isPlaying ? audio.pause() : audio.play()
        }

        togglePlayThumb.onclick = function () {
            _this.isPlaying ? audio.pause() : audio.play()
        }

        audio.onplay = function () {
            togglePlayBtn.classList.add('playing')
            _this.isPlaying = true
            musicControl.classList.remove('hide')
            cdThumbAnimate.play()
            cdThumbInfoAnimate.play()
            togglePlayThumb.innerText = 'Tạm Dừng'
        }

        audio.onpause = function () {
            togglePlayBtn.classList.remove('playing')
            _this.isPlaying = false
            cdThumbAnimate.pause()
            cdThumbInfoAnimate.pause()
            togglePlayThumb.innerText = 'Tiếp Tục Phát'
        }

        audio.ontimeupdate = function () {
            const progressPercent = (audio.currentTime / audio.duration) * 100
            if (audio.duration) {
                progress.value = progressPercent
                function getSongDuration(song) {
                    let minutes = Math.floor(song.duration / 60)
                    let seconds = Math.floor(song.duration - minutes * 60)
                    if (seconds < 10) {
                        return minutes + ':0' + seconds
                    }
                    return minutes + ':' + seconds
                }
                document.querySelector('.duration-song').innerText = getSongDuration(audio)
            }

            function getCurrentTime(song) {
                let minutes = Math.floor(song.currentTime / 60)
                let seconds = Math.floor(song.currentTime - minutes * 60)

                if (seconds < 10) {
                    return minutes + ':0' + seconds
                }

                return minutes + ':' + seconds
            }
            document.querySelector('.current-time').innerText = getCurrentTime(audio)
        }

        progress.oninput = () => {
            const sweek = (audio.duration / 100) * progress.value
            audio.currentTime = sweek
        }

        nextButton.onclick = function () {
            if (_this.isRandom) {
                _this.randomSong()
            }
            _this.nextSong()
            _this.songActiveIntoView()
            audio.play()
        }

        prevButton.onclick = function () {
            if (_this.isRandom) {
                _this.randomSong()
            }
            _this.prevSong()
            _this.songActiveIntoView()
            audio.play()
        }

        randomButton.onclick = function () {
            _this.isRandom = !_this.isRandom
            if (_this.isRandom) {
                _this.isRepeat = false
                repeatButton.classList.remove('active')
            }

            randomButton.classList.toggle('active', _this.isRandom)
        }

        repeatButton.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            if (_this.isRepeat) {
                _this.isRandom = false
                randomButton.classList.remove('active')
            }

            repeatButton.classList.toggle('active', _this.isRepeat)
        }

        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play()
            } else if (_this.isRandom) {
                _this.randomSong()
                audio.play()
            } else {
                nextButton.click()
            }
        }

        playListSuggests.onclick = (e) => {
            const targetSuggest = e.target.closest('.current-playing-body:not(.active)')
            if (targetSuggest) {
                _this.currentIndex = Number(targetSuggest.getAttribute('data-index'))
                _this.loadCurrentSong()
                audio.play()
            }
        }

        personalPlayList.onclick = function (e) {
            const targetSuggest = e.target.closest('.current-playing-body:not(.active)')
            if (targetSuggest) {
                _this.currentIndex = Number(targetSuggest.getAttribute('data-index'))
                _this.loadCurrentSong()
                audio.play()
            }
        }

        // hide music control

        document.querySelector('.fa-caret-down').onclick = function () {
            musicControl.classList.add('hide')
        }
    },

    playList: [],

    // cá nhân
    personalHandle: function () {
        musicControl.classList.remove('hide')
        // xử lí khi chọn các page trong personal
        personalListOptions.forEach((personalListOption) => {
            personalListOption.onclick = function (e) {
                const personalListId = personalListOption.getAttribute('id')

                if (e.target.closest(`#${personalListId}:not(.active)`)) {
                    const personalItemActives = [...document.querySelectorAll('.personal-content-item.active')]

                    personalItemActives.forEach((personalItemActive) => {
                        personalItemActive.classList.remove('active')
                        // khi chon tat ca
                        if (e.target.getAttribute('id').includes('overview')) {
                            personalContentItems.forEach((personalContentItem) => {
                                personalContentItem.classList.add('active')
                            })
                        }

                        // khi chon playlist
                        else if (e.target.getAttribute('id').includes('playlist')) {
                            personalContentItems.forEach((personalContentItem) => {
                                personalContentItem.classList.remove('active')
                            })
                            document.querySelector(`.personal-content-item.${personalListId}`).classList.add('active')
                            document.querySelector(`.personal-content-item.mv`).classList.add('active')
                        } else {
                            document.querySelector(`.personal-content-item.${personalListId}`).classList.add('active')
                        }
                    })
                }
                document.querySelector('.personal-option.active').classList.remove('active')

                personalListOption.classList.add('active')
            }
        })

        // slider handle

        const htmls = this.songs.map((song, index) => {
            return `
                <div class="personal-slide ${index == 0 ? 'personal-slide-first' : index == 1 ? 'personal-slide-second' : index == 2 ? 'personal-slide-third' : index == 3 ? 'personal-slide-four' : 'personal-slide-five'}" style="background-image: url('${song.img}');"></div>
            `
        })

        personalSliderContent.innerHTML = htmls.join('')

        setInterval(() => {
            this.personalHandleSlide()
        }, 2000)

        // khi click vào nút phát tất cả
        document.querySelector('.personal-content-music-btn-playall').onclick = function () {
            audio.play()
        }

        // playlist handle

        playlistItems.forEach((playlistItem) => {
            playlistItem.onclick = function (e) {
                if (e.target.closest('.playlist-container-item')) {
                    // hide page acitve and show player
                    player.classList.remove('hide')
                    if (!player.classList.contains('hide')) {
                        document.querySelector('.page-item.active').classList.remove('active')
                    }

                    musicControl.classList.remove('hide')
                }
            }
        })

        // artist handle

        const singerItem = this.listSinger.map((singer) => {
            return `
                    <div class="artist-item">
                        <div class="artist-item-image">
                            <img src="${singer.img}" alt="" />
                            <div class="artist-item-options">
                                <i class="fa-solid fa-play"></i>
                            </div>
                        </div>
                        <div class="artist-item-content">
                            <div class="artist-item-info">
                                <h4>${singer.Singer}</h4>
                                <p>${singer.Folower}</p>
                            </div>
                            <button>
                                <span><i class="fa-solid fa-shuffle"></i> </span>Góc Nhạc
                            </button>
                        </div>
                    </div>
                `
        })

        document.querySelector('.artist-container').innerHTML = singerItem.join('')
    },

    personalHandleSlide: function () {
        const firsSlide = document.querySelector('.personal-slide-first')
        const secondSlide = document.querySelector('.personal-slide-second')
        const thirdSlide = document.querySelector('.personal-slide-third')
        const fourSlide = document.querySelector('.personal-slide-four')
        const fiveSlide = document.querySelectorAll('.personal-slide-five')

        firsSlide.style.opacity = 0
        firsSlide.classList.replace('personal-slide-first', 'personal-slide-five')

        secondSlide.classList.replace('personal-slide-second', 'personal-slide-first')

        thirdSlide.classList.replace('personal-slide-third', 'personal-slide-second')
        fourSlide.classList.replace('personal-slide-four', 'personal-slide-third')

        const randomIndex = Math.floor(Math.random() * fiveSlide.length)
        fiveSlide[randomIndex].classList.replace('personal-slide-five', 'personal-slide-four')
        fiveSlide[randomIndex].style.opacity = 1
    },

    //Khám phá

    discover1: [
        //
        { img: './img/discover/ctn1/0.jpg' },
        { img: './img/discover/ctn1/1.jpg' },
        { img: './img/discover/ctn1/2.jpg' },
        { img: './img/discover/ctn1/3.jpg' },
        { img: './img/discover/ctn1/4.jpg' },
        { img: './img/discover/ctn1/5.jpg' },
        { img: './img/discover/ctn1/6.jpg' },
        { img: './img/discover/ctn1/7.jpg' },
        { img: './img/discover/ctn1/8.jpg' },
    ],
    discover2: [
        {
            img: './img/discover/ctn3/1.webp',
            title: "Trang's Love Again Story",
            content: 'Cùng Trang nhìn lại những câu chuyện phía sau album',
        },
        {
            img: './img/discover/ctn3/2.webp',
            title: 'Sing Along US-UK',
            content: 'Cùng hát theo những ca khúc Âu Mỹ dễ nhớ dễ thuộc này',
        },
        {
            img: './img/discover/ctn3/3.webp',
            title: 'Love In The Way',
            content: 'Bleu,Nicki Minaj',
        },
        {
            img: './img/discover/ctn3/4.webp',
            title: 'Pop Ballad Việt Nổi Bật',
            content: "Hà Nhi và những bản Ballad Việt 'tốn nước mắt nhất'",
        },
    ],

    discover3: [
        {
            img: './img/discover/ctn4/1.webp',
            title: 'V-Pop Tháng 9/2022',
            content: 'Vương Anh Tú,Sơn Tùng MTP',
        },
        {
            img: './img/discover/ctn4/2.webp',
            title: 'US-UK Tháng 9/2022',
            content: 'Elton John,Britney Spears,Carly Rae Jepsen',
        },
        {
            img: './img/discover/ctn4/3.webp',
            title: 'K-Pop Tháng 9/2022',
            content: 'BLACKPINK,IVE,ONEUS',
        },
        {
            img: './img/discover/ctn4/4.webp',
            title: 'C-Pop Tháng 9/2022',
            content: 'Trần Lập Nông,周深 / Châu Thâm,Christopher Wu',
        },
    ],

    discover4: [
        //
        { img: './img/discover/ctn5/header/1.jpg' },
        { img: './img/discover/ctn5/header/2.jpg' },
        { img: './img/discover/ctn5/header/3.jpg' },
    ],

    discover5: [
        //
        { img: './img/discover/ctn5/body/0.png' },
        { img: './img/discover/ctn5/body/1.png' },
        { img: './img/discover/ctn5/body/2.png' },
        { img: './img/discover/ctn5/body/4.png' },
        { img: './img/discover/ctn5/body/5.png' },
    ],

    discoverHandle: function () {
        const _this = this
        const htmls = this.discover1.map((slide, index) => {
            return `
                    <img src="${slide.img}" alt="" class="discover-slide ${index == 0 ? 'discover-slide-first' : index == 1 ? 'discover-slide-second' : index == 2 ? 'discover-slide-third' : 'discover-slide-four'}" >
                `
        })
        discoverSlideContainer.innerHTML = htmls.join('')

        discoverNextSlide.onclick = function () {
            _this.handleNextSlide()
        }
        discoverPrevSlide.onclick = function () {
            _this.handleNextSlide()
        }
        setInterval(() => {
            _this.handleNextSlide()
        }, 2000)

        // khi click nút bài hát

        discoverNewReleaseMusicBtn.onclick = function () {
            Object.assign(discoverNewReleaseMusicBtn.style, {
                background: '#5a1eae',
                border: 'none',
            })

            Object.assign(discoverNewReleaseAlbumBtn.style, {
                background: 'transparent',
                border: '1px solid rgba(225, 225, 225, 0.5)',
            })
            newReleaseAlbumContainer.classList.remove('active')
            newReleaseMusicContainer.classList.add('active')
        }

        discoverNewReleaseAlbumBtn.onclick = function () {
            Object.assign(discoverNewReleaseAlbumBtn.style, {
                background: '#5a1eae',
                border: 'none',
            })

            Object.assign(discoverNewReleaseMusicBtn.style, {
                background: 'transparent',
                border: '1px solid rgba(225, 225, 225, 0.5)',
            })
            newReleaseMusicContainer.classList.remove('active')
            newReleaseAlbumContainer.classList.add('active')
        }

        const newReleaseMusic = this.songs.map((song, index) => {
            if (index > 22 && index <= 34) {
                return `
                    <div class="discover-new-release-content-music-item">
                        <div class="discover-new-release-content-music-item-image">
                            <img src="${song.img}" alt="" class="discover-new-release-content-music-item-image-img"/>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div class="discover-new-release-content-music-item-body">
                            <div class="discover-new-release-content-music-item-body-header">
                                <span class="song-name">${song.title}</span>
                                <img src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg" alt="" class="${song.type == 'vip' ? 'type-vip' : 'type-free'}" />
                            </div>
                            <div class="discover-new-release-content-music-item-body-singer">
                                <p>${song.singer}</p>
                            </div>
                        </div>
                        <div class="discover-new-release-content-music-item-options">
                            <i class="fa-thin fa-ellipsis-stroke"></i>
                        </div>
                    </div>
                `
            }
        })

        const newReleaseAlbum = this.songs.map((song, index) => {
            if (index > 23 && index <= 32) {
                return `
                    <div class="discover-new-release-content-album-item">
                        <div class="discover-new-release-content-album-item-image">
                            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png" alt="" class="cd-rotate" />
                            <img src="${song.img}" alt="" class="discover-new-release-content-album-item-image-img" />
                        </div>
                        <div class="discover-new-release-content-album-item-body">
                            <p>${song.title}</p>
                            <p>${song.singer}</p>
                        </div>
                        <div class="discover-new-release-content-album-item-options">
                            <i class="fa-thin fa-ellipsis-stroke"></i>
                        </div>
                    </div>
                `
            }
        })

        newReleaseAlbumContainer.innerHTML = newReleaseAlbum.join('')
        newReleaseMusicContainer.innerHTML = newReleaseMusic.join('')

        // thứ sáu đây rồi

        const firday = this.discover2.map((slide) => {
            return `
                <div class="discover-friday-cotainer-item">
                    <div class="discover-friday-cotainer-item-image">
                        <img src="${slide.img}" alt="" />
                        <div class="discover-friday-container-item-options">
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-play"></i>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    <div class="discover-friday-cotainer-item-info">
                        <p>${slide.title}</p>
                        <p>${slide.content}</p>
                    </div>
                </div>
            `
        })

        const newMusicEveryday = this.discover3.map((slide) => {
            return `
                <div class="discover-friday-cotainer-item">
                    <div class="discover-friday-cotainer-item-image">
                        <img src="${slide.img}" alt="" />
                        <div class="discover-friday-container-item-options">
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-play"></i>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    <div class="discover-friday-cotainer-item-info">
                        <p>${slide.title}</p>
                        <p>${slide.content}</p>
                    </div>
                </div>
            `
        })

        document.querySelector('.discover-new-music-everyday').innerHTML = newMusicEveryday.join('')
        document.querySelector('.discover-friday-container').innerHTML = firday.join('')

        const fridayItems = [...document.querySelectorAll('.discover-friday-cotainer-item-image')]

        fridayItems.forEach((fridayItem) => {
            fridayItem.onclick = function (e) {
                if (e.target.closest('.discover-friday-cotainer-item-image')) {
                    // hide page acitve and show player
                    player.classList.remove('hide')
                    if (!player.classList.contains('hide')) {
                        document.querySelector('.page-item.active').classList.remove('active')
                    }

                    musicControl.classList.remove('hide')
                }
            }
        })
        const discoverZingchartHeader = this.discover4.map((slide) => {
            return `
                <li>
                    <div class="discover-zingchart-header-item">
                        <img src="${slide.img}" alt="" />
                    </div>
                </li>
            `
        })

        const discoverZingchartBody = this.discover5.map((slide) => {
            return `
                <li>
                    <div class="discover-zingchart-body-item">
                        <img src="${slide.img}" alt="" />
                    </div>
                </li>
            `
        })

        document.querySelector('.discover-zingchart-body').innerHTML = discoverZingchartBody.join('')
        document.querySelector('.discover-zingchart-header').innerHTML = discoverZingchartHeader.join('')
    },

    zingchartHandle: function (obj, start, end) {
        const _this = this
        const top100 = this.songs.map((song, index) => {
            if (index <= 100) {
                return `
                <li class="zingchart-content-item" data-index="${index}">
                    <div class="zingchart-content-item-index">
                        <h1 class="${index == 0 ? 'number-one' : index == 1 ? 'number-two' : index == 2 ? 'number-three' : ''}">${(index += 1)}</h1>
                    </div>
                    <div class="zingchart-content-item-body">
                        <i class="fa-solid fa-minus"></i>
                        <div class="zingchart-content-item-body-image">
                            <img src="${song.img}" alt="" />
                        </div>
                        <div class="zingchart-content-item-body-music">
                            <p>${song.title}</p>
                            <p>${song.singer}</p>
                        </div>
                        <div class="zingchart-content-item-body-info">
                            <p>${song.title} (${song.singer})</p>
                        </div>
                        <div class="zingchart-content-item-body-duration">${song.duration}</div>
                    </div>
                </li>
            `
            }
        })
        document.querySelector('.zingchart-content').innerHTML = top100.join('')

        const zingchartContentItems = [...document.querySelectorAll('.zingchart-content-item')]

        function playClick(targetItem) {
            if (targetItem) {
                _this.currentIndex = Number(targetItem.getAttribute('data-index'))
                _this.loadCurrentSong()
                audio.play()
                musicControl.classList.remove('hide')
            }
        }

        zingchartContentItems.forEach((zingchartContentItem) => {
            zingchartContentItem.onclick = function (e) {
                const targetItem = e.target.closest('.zingchart-content-item')
                playClick(targetItem)
            }
        })

        const seemoreButton = document.querySelector('.see-more-btn')
        seemoreButton.onclick = function () {
            const zingchartContent = document.querySelector('.zingchart-content')
            const zingchartContentLimit = document.querySelector('.zingchart-content.zingchart-content-limit')
            if (zingchartContentLimit) {
                zingchartContentLimit.classList.remove('zingchart-content-limit')
                seemoreButton.innerText = 'Rút Gọn'
            } else {
                zingchartContent.classList.add('zingchart-content-limit')
                seemoreButton.innerText = 'Xem Thêm'
            }
        }

        let i = 1
        const topWeek = this.songs.map((song, index) => {
            if (index >= start && index <= end) {
                return `
                    <li class="zingchart-top-week-body-item" data-index="${index}">
                        <div class="zingchart-top-week-body-index">
                            <h1 class="${index == start ? 'number-one' : index == start + 1 ? 'number-two' : index == start + 2 ? 'number-three' : ''}">${i++}</h1>
                        </div>
                        <i class="fa-solid fa-minus"></i>
                        <div class="zingchart-top-week-body-img">
                            <img src="${song.img}" alt="" />
                        </div>
                        <div class="zingchart-top-week-body-music">
                            <p>${song.title}</p>
                            <p>${song.singer}</p>
                        </div>
                    </li>
                `
            }
        })

        obj.innerHTML = topWeek.join('')

        const topWeekItems = [...document.querySelectorAll('.zingchart-top-week-body-item')]

        topWeekItems.forEach((topWeekItem) => {
            topWeekItem.onclick = function (e) {
                const targetItem = e.target.closest('.zingchart-top-week-body-item')
                playClick(targetItem)
            }
        })
    },

    handleNextSlide: function () {
        const firsSlide = document.querySelector('.discover-slide-first')
        const secondSlide = document.querySelector('.discover-slide-second')
        const thirdSlide = document.querySelector('.discover-slide-third')
        const fourSlide = document.querySelectorAll('.discover-slide-four')

        firsSlide.style.opacity = 0
        firsSlide.classList.replace('discover-slide-first', 'discover-slide-four')

        secondSlide.classList.replace('discover-slide-second', 'discover-slide-first')

        thirdSlide.classList.replace('discover-slide-third', 'discover-slide-second')
        const randomIndex = Math.floor(Math.random() * fourSlide.length)
        fourSlide[randomIndex].classList.replace('discover-slide-four', 'discover-slide-third')
        fourSlide[randomIndex].style.opacity = 1
    },

    pageHandle: function () {
        sidebarPageItems.forEach((sidebarPageItem) => {
            sidebarPageItem.onclick = function (e) {
                musicControl.classList.add('hide')
                const pageId = sidebarPageItem.getAttribute('id')

                if (e.target.closest(`#${pageId}`)) {
                    if (pageId === 'follow') {
                        confirm('Page này chưa có ^^')
                    } else if (pageId === 'personal') {
                        musicControl.classList.remove('hide')
                        if (document.querySelector(`.page-item.active`)) {
                            document.querySelector(`.page-item.active`).classList.remove('active')
                        }
                        document.querySelector(`.page-item.${pageId}`).classList.add('active')
                    } else {
                        if (document.querySelector(`.page-item.active`)) {
                            document.querySelector(`.page-item.active`).classList.remove('active')
                        }
                        document.querySelector(`.page-item.${pageId}`).classList.add('active')
                    }
                }

                document.querySelector('.sidebar-main-item-page.active').classList.remove('active')
                player.classList.add('hide')
                sidebarPageItem.classList.add('active')
            }
        })
    },

    nextSong: function () {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }

        this.loadCurrentSong()
    },

    prevSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }

        this.loadCurrentSong()
    },

    songActiveIntoView: function () {
        setTimeout(() => {
            const songActive = document.querySelector('.current-playing-body.active')
            const songIndex = songActive.getAttribute('data-index')
            if (songIndex < 1) {
                songActive.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })
            } else {
                songActive.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                })
            }
        }, 200)
    },

    playerIndexes: [],

    randomSong: function () {
        let newIndex

        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (this.playerIndexes.includes(newIndex))

        this.playerIndexes.push(newIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    handleSearch: function () {
        const _this = this

        appElement.onclick = function (e) {
            const targetSearch = e.target.closest('.header-search')
            const tagetSuggest = e.target.closest('.search-suggest')
            // handle when focus input
            if (targetSearch || tagetSuggest) {
                searchElement.style.borderRadius = '20px 20px 0 0'
                searchSuggest.classList.remove('hide')
                searchElement.oninput = () => {
                    const filterSearch = _this.songs.filter((song) => {
                        return song.title.toLowerCase().includes(searchElement.value.trim().toLowerCase())
                    })

                    const suggestForYou = document.querySelector('.show-suggest-for-you')
                    const showSongsSuggest = document.querySelector('.show-songs-suggest')
                    if (searchElement.value.trim() !== '') {
                        suggestForYou.classList.add('hide')
                        showSongsSuggest.classList.remove('hide')

                        const suggestSongsBody = document.querySelector('.show-suggest-songs-body')

                        const suggestSongsHtmls = Array.from(filterSearch).map((song) => {
                            return `
                                    <li id="song-suggest" data-index="${song.id}">
                                        <div class="show-suggest-body-image">
                                            <img src="${song.img}" alt="" />
                                        </div>
                                        <div class="show-suggest-body-item">
                                            <h4>${song.title}</h4>
                                            <p>${song.singer}</p>
                                        </div>
                                    </li>
                                `
                        })

                        suggestSongsBody.innerHTML = suggestSongsHtmls.join('')

                        // handle when cick songItem and render HTML view
                        let listSongsSuggest = [...document.querySelectorAll('#song-suggest')]

                        listSongsSuggest.forEach((songItem) => {
                            songItem.onclick = function (e) {
                                if (audio.play()) {
                                    _this.isPlaying = false
                                }

                                player.classList.remove('hide')
                                if (!player.classList.contains('hide')) {
                                    pageItems.forEach((pageItem) => {
                                        if (pageItem.className.includes('active')) {
                                            document.querySelector('.page-item.active').classList.remove('active')
                                        }
                                    })
                                }

                                musicControl.classList.remove('hide')

                                cdThumbAnimate.cancel()
                                cdThumbInfoAnimate.cancel()
                                togglePlayBtn.classList.remove('playing')
                                const selectedSong = Array.from(filterSearch).find((songSelect) => {
                                    return songSelect.id === Number(songItem.dataset.index)
                                })

                                _this.currentIndex = selectedSong.id
                                _this.loadCurrentSong()

                                if (e.target.closest('.search-suggest')) {
                                    searchSuggest.classList.add('hide')
                                    player.classList.remove('hide')
                                } else {
                                    player.classList.add('hide')
                                }
                            }
                        })
                    } else {
                        suggestForYou.classList.remove('hide')
                        showSongsSuggest.classList.add('hide')
                    }
                }
                // focus ra ngoai => hide suggest
            } else {
                searchElement.style.background = '#e1e1e11a'
                searchElement.style.borderRadius = '20px '
                searchSuggest.classList.add('hide')
            }
        }
    },

    // THEMES

    dynamicThemes: [
        // {
        //     name: 'Default theme',
        //     img: './background/backroundThemes/11.jpg',
        //     modalTheme: './background/backroundThemes/11.jpg',
        //     backgroundModal: './background/modalThemes/modalTheme3/theme1.jpg',
        // },
        // {
        //     name: 'Lan Anh ',
        //     img: './background/backroundThemes/9.jpg',
        //     modalTheme: './background/backroundThemes/9.jpg',
        //     backgroundModal: './background/modalThemes/modalTheme3/theme8.jpg',
        // },
        // {
        //     name: 'Lan Anh 2',
        //     img: './img/background.jpg',
        //     modalTheme: './img/background.jpg',
        //     backgroundModal: './background/modalThemes/modalTheme3/theme2.jpg',
        // },

        // {
        //     name: 'Lan Anh 3',
        //     img: './background/backroundThemes/10.jpg',
        //     modalTheme: './background/backroundThemes/10.jpg',
        //     backgroundModal: './background/modalThemes/modalTheme3/theme8.jpg',
        // },
        {
            name: 'Tháp Eiffel',
            img: './background/backroundThemes/1.jpg',
            modalTheme: './background/modalThemes/modalTheme1/theme2.jpg',
            backgroundModal: './background/modalThemes/modalTheme3/theme1.jpg',
        },
        {
            name: 'Rosé',
            img: './img/rosebackground.jpg',
            modalTheme: './background/modalThemes/modalTheme2/theme1.jpg',
            backgroundModal: './background/modalThemes/modalTheme3/theme2.jpg',
        },
    ],

    handleThemes: function () {
        const _this = this

        appElement.addEventListener('click', (e) => {
            // xu li khi click vao themes options
            const targetThemesButton = e.target.closest('.header-options-theme')
            const targetThemes = e.target.closest('.themes')
            if (targetThemesButton || targetThemes) {
                themes.classList.remove('hide')
                const closeThemes = document.querySelector('.close-themes')
                closeThemes.onclick = function () {
                    themes.classList.add('hide')
                    appElement.style.filter = 'brightness(100%)'
                }
                appElement.style.filter = 'brightness(40%)'

                // render view dynamic theme
                const dynamic = _this.dynamicThemes.map((theme) => {
                    return `
                            <div class="themes-body-options-item themes-dynamic-options-item" >
                                <div class="themes-body-options-image">
                                    <img src="${theme.modalTheme}" alt="" theme="${theme.img}" backgroundmodal="${theme.backgroundModal}" id="theme-item" />
                                </div>
                                <p>${theme.name}</p>
                            </div>
                        `
                })

                document.querySelector('.themes-dynamic-options').innerHTML = dynamic.join('')
            } else {
                themes.classList.add('hide')
                appElement.style.filter = 'brightness(100%)'
            }
        })

        themes.addEventListener('click', (e) => {
            if (e.target.closest('.themes-dynamic-options-item')) {
                // handle when click dynamic theme item
                const background = document.querySelector('.background')
                const header = document.querySelector('#header')
                const headerSidebar = document.querySelector('.logo')
                const searchSuggest = document.querySelector('.search-suggest')

                if (e.target.closest('.themes-body-options-image')) {
                    _this.defaultBackgroundModal = e.target.getAttribute('backgroundmodal')
                    _this.defaultBackground = e.target.getAttribute('theme')

                    Object.assign(background.style, {
                        background: `url('${_this.defaultBackground}')`,
                        backgroundSize: 'cover',
                    })

                    Object.assign(header.style, {
                        background: `url('${_this.defaultBackground}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom left',
                    })

                    Object.assign(searchSuggest.style, {
                        background: `url('${_this.defaultBackgroundModal}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom left',
                    })

                    Object.assign(headerSidebar.style, {
                        background: `url('${_this.defaultBackgroundModal}')`,
                        backgroundSize: 'cover',
                    })
                    Object.assign(themes.style, {
                        background: `url('${_this.defaultBackgroundModal}')`,
                        backgroundSize: 'cover',
                    })

                    Object.assign(musicControl.style, {
                        background: `url('${_this.defaultBackgroundModal}')`,
                        backgroundSize: 'cover',
                    })

                    Object.assign(document.querySelector('.personal-content-music-btn-upload').style, {
                        background: `url('${_this.defaultBackgroundModal}')`,
                        backgroundSize: 'cover',
                    })

                    headerOptionsItems.forEach((headerOptionsItem) => {
                        Object.assign(headerOptionsItem.style, {
                            background: `url('${_this.defaultBackgroundModal}')`,
                            backgroundSize: 'cover',
                        })
                    })

                    themes.classList.add('hide')
                    appElement.style.filter = 'brightness(100%)'
                }
            }
        })
    },

    start: function () {
        // defined current song
        this.defineProperties()

        // load info / title ... song
        this.loadCurrentSong()

        // handle event in DOM
        this.handleEvent()

        // handle when to click personal option
        this.personalHandle()

        this.discoverHandle()

        // render top week
        this.zingchartHandle(document.querySelector('.zingchart-top-week-content-item-body'), 10, 14)
        this.zingchartHandle(document.querySelector('.zingchart-top-week-content-item-body.vietnam'), 10, 14)
        this.zingchartHandle(document.querySelector('.zingchart-top-week-content-item-body.us-uk'), 20, 24)
        this.zingchartHandle(document.querySelector('.zingchart-top-week-content-item-body.k-pop'), 30, 34)

        // handle when chose page
        this.pageHandle()

        // handle when search
        this.handleSearch()

        // handle when chose theme
        this.handleThemes()
    },
}
app.start()

function handleMarginContent() {
    // HANDLE MARGIN CONTENT
    const header = document.querySelector('#header')
    const headerHeight = header.offsetHeight
    const content = document.querySelector('#content')
    content.style.paddingTop = `${headerHeight}px`

    // SET HEIGHT BACKGROUND LOGO
    const logo = document.querySelector('.logo')
    logo.style.height = `${headerHeight}px`

    // MARGIN TOP THEMES BODY

    const themesHeader = document.querySelector('.themes-header')
    const themesBody = document.querySelector('.themes-body')

    themesBody.style.paddingTop = `${themesHeader.offsetHeight + 20}px`
}

handleMarginContent()
