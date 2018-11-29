class Events {
	constructor() {
		this.map = {
			aaa: "aaa"
		}
	}
	on(name, func) {
		if (this.map[name]) {
			this.map[name].push(func)
		} else {
			this.map[name] = [func]
		}
		return this
	}
	emit(name) {
		this.map[name].forEach(func => {
			func()
		})
		return this
	}
	off(name) {
		this.map[name] = null
		return this
	}
}

class MePlayer {
	constructor(selector = 'me-player-container', options = {}) {
		if (!options.source.length) {
			console.error('必须提供视频地址')
			return
		}
		this.events = new Events()
		this.selector = selector
		this.options = Object.assign({}, {
				source: [],
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