//EventEmitter
class EventEmitter {
    constructor() {
            this.listeners = []
        }
        //type:订阅者收到的事件的种类,以及收到这一数据，不同订阅者进行的一系列操作
        //type:cb=1:N
    on(type, cb) {
            if (!this.listeners[type]) {
                this.listeners[type] = []
            }
            this.listeners[type].push(cb)
        }
        //发布者发布事件,并且携带参数,让订阅者的回调执行
    emit(type, ...args) {
            if (this.listeners[type]) {

                this.listeners[type].forEach(cb => { cb(...args) })

            }
        }
        //移除某一事件的订阅者
    off(type, cb) {
        if (this.listeners[type]) {
            const cbIndex = this.listeners.findIndex((item) => {
                return (item == cb)
            })
            if (cbIndex != -1) {
                this.listeners[type].splice(cbIndex, 1)
            } else return;
        }
    }
    offAll(type) {
        if (this.listeners[type]) {
            delete this.listeners[type];
        }
    }
}

//测试用例
const { log } = console
const bus = new EventEmitter(); //创建实例
const zjl = {
    say: function(arg) {
        log("我老婆笑了,嘿嘿" + arg)

    }
}
const others = {
    say: function(arg) {
        log("zjl老婆太好看了，太羡慕了，我是酸🐔" + arg)
    }
}
bus.on("张子枫笑了", others.say)
bus.on("张子枫笑了", zjl.say)

bus.emit("张子枫笑了", "张子枫是ZJL老婆！")