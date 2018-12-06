class MePlayer {
    constructor(options = {}) {
        if (!options.container) {
            return
        }
        if (!options.videos.length) {
            return
        }
        this._options = Object.assign({}, {
                container: document.querySelector(options.container),
                videos: [],
                width: 720,
                height: 480,
                poster: '',
                color: '#00beff'
            },
            options
        )
        this.init()
    }

    get version() {
        return '0.1.0'
    }

    get volume() {}

    init() {
        this.render()
        this.bindEvent()
    }
    getExtension(filename) {
        return filename.slice(-3)
    }
    render() {
        const player = document.createElement('div')
        player.className = 'me-player'
        const video = document.createElement('video')
        video.className = 'mep__video'
        video.poster = this.options.poster
        video.autoplay = this.options.autoplay
        this.options.source.forEach(src => {
            const source = document.createElement('source')
            source.src = src
            source.type = `video/${this.getExtension(src)}`
            video.appendChild(source)
        })
        this.video = video
        this.player = player
        player.appendChild(video)
        document.querySelector(this.selector).appendChild(player)
    }
    bindEvent() {
        this.player.addEventListener('click', event => {
            const target = event.target
            if (target.classList.contains('mep__video')) {}
        })
    }
}

export default MePlayer
