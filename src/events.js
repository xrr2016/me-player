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
