const audio = document.getElementById('audio')
const searchElement = document.querySelector('#search')
const appElement = document.querySelector('#app')
const searchSuggest = document.querySelector('.search-suggest')
const themes = document.querySelector('.themes')
const playerThumb = document.querySelector('.player-thumb')
const cdThumb = document.querySelector('.cd-thumb')
const cdThumbs = [...document.querySelectorAll('.cd-thumb')]
const musicControlCurrentImage = document.querySelector('.music-control-info-image')
const togglePlayBtn = document.querySelector('.btn-toggle-play')
const togglePlayThumb = document.querySelector('.player-thumb-toggle-play')
const currentSongsName = [...document.querySelectorAll('.current-song-name')]
const player = document.querySelector('.player')
const currentPlayingImage = document.querySelector('.current-playing-body-image')
const musicInfoSingers = [...document.querySelectorAll('.music-info-singer')]
const listSongs = document.querySelector('.list-song-render')
const currentSongDuration = document.querySelector('.current-song-duration')
const musicControl = document.querySelector('.music-control')
const progress = document.querySelector('.progress')
const nextButton = document.querySelector('.btn-next')
const prevButton = document.querySelector('.btn-prev')
const randomButton = document.querySelector('.btn-random')
const repeatButton = document.querySelector('.btn-repeat')
const headerOptionsItems = [...document.querySelectorAll('.header-options-item')]
const playListSuggests = document.querySelector('.player-list-suggest')

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
    // todo     1. Render Songs                         done
    // todo     3. Play / Pause / Sweek                 done
    // todo     4. CD Rotate                            done
    // todo     5. Next / Prev                          done
    // todo     6. Random                               done
    // todo     7. Next or Repeat when ended            done
    // todo     8. Active Song                          done
    // todo     9. Scroll active song into view         done
    // todo     10. Play song when to click             done

    songs: [
        {
            title: 'CÓ CHƠI CÓ CHỊU',
            singer: 'KARIK x ONLY C',
            pathSong: './songs/list-song/cochoicochiu.mp3',
            duration: '04:46',
            img: 'https://vtv1.mediacdn.vn/thumb_w/640/2022/9/21/poster-karik-only-c-16637279213761078057270.jpeg',
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
            img: 'https://i.ytimg.com/vi/EjrIz5UX4Io/maxresdefault.jpg',
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
            img: 'https://i.ytimg.com/vi/HELjXqg9Ht0/sddefault.jpg',
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
            type: 'free',
            duration: '4:22',
        },
        // ------------- us -------------------
        {
            img: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg',
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
            img: './img/playListSongs/ll.jpg',
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

    //

    // defined default properties
    currentIndex: 0,
    defaultBackground: './background/backgroundThemes/11.jpg',
    defaultBackgroundModal: './background/modalThemes/modalTheme3/theme1.jpg',
    isPlaying: false,
    isRandom: false,
    isRepeat: false,

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
        currentPlayingImage.style.background = `url('${this.currentSong.img}')`
        currentPlayingImage.style.backgroundSize = 'cover'
        cdThumbs.forEach((cdThumb) => {
            cdThumb.style.background = `url('${this.currentSong.img}')`
            cdThumb.style.backgroundSize = 'cover'
        })
        currentSongDuration.innerText = this.currentSong.duration

        listSongs.innerHTML = this.render().join('')
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

        audio.onplay = function () {
            togglePlayBtn.classList.add('playing')
            _this.isPlaying = true
            cdThumbAnimate.play()
            cdThumbInfoAnimate.play()
        }

        audio.onpause = function () {
            togglePlayBtn.classList.remove('playing')
            _this.isPlaying = false
            cdThumbAnimate.pause()
            cdThumbInfoAnimate.pause()
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

        _this.songActiveIntoView()
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
        {
            name: 'Lan Anh 2',
            img: './img/background.jpg',
            modalTheme: './img/background.jpg',
            backgroundModal: './background/modalThemes/modalTheme3/theme2.jpg',
        },
        {
            name: 'Lan Anh ',
            img: './background/backroundThemes/9.jpg',
            modalTheme: './background/backroundThemes/9.jpg',
            backgroundModal: './background/modalThemes/modalTheme3/theme8.jpg',
        },
        {
            name: 'Default theme',
            img: './background/backroundThemes/11.jpg',
            modalTheme: './background/backroundThemes/11.jpg',
            backgroundModal: './background/modalThemes/modalTheme3/theme1.jpg',
        },
        {
            name: 'Lan Anh 3',
            img: './background/backroundThemes/10.jpg',
            modalTheme: './background/backroundThemes/10.jpg',
            backgroundModal: './background/modalThemes/modalTheme3/theme8.jpg',
        },
        {
            name: 'Tháp Eiffel',
            img: './background/backroundThemes/1.jpg',
            modalTheme: './background/modalThemes/modalTheme1/theme2.jpg',
            backgroundModal: './background/modalThemes/modalTheme3/theme1.jpg',
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
