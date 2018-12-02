const template = `
    <div class="mep__container">
        <div class="mep__video-box">
            <video class="mep__video">
                <source src="./video/note8.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="mep__controls">
            <button class="mep__button mep__play-button icon-play3"></button>
            <div class="mep__progress">
                <div class="mep__progress-bar"></div>
                <div class="mep__progress-mask"></div>
                <div class="mep__progress-indicator"></div>
            </div>
            <div class="mep__time-display">
                <span class="mep__time-current">00:00</span>
                <span class="mep__time-divider">/</span>
                <span class="mep__time-total">00:00</span>
            </div>
            <button class="mep__button mep__mute-button icon-volume-high">
                <span class="mep__volume-container">
                    <span class="mep__volume-num">100</span>
                    <span class="mep__volume">
                        <span class="mep__volume-mask"></span>
                        <span class="mep__volume-bar"></span>
                    </span>
                </span>
            </button>
            <button class="mep__button mep__fullscreen-button icon-fullscreen"></button>
        </div>
    </div>
`
