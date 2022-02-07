//前置语法知识
//bind,call,apply
//bind会返回一个函数,需要手动执行，参数是this和参数列表
//call和bind参数一样,但是会自己执行
//apply也是自己执行，但是参数是this和伪数组

//debounce,一段时间内多次执行,以最后一次为准 就是回城操作
function debounceLazy(fn, delay) {
    let timer = null
    return function() {
        clearTimeout(timer)
        const _this = this
        const arg = arguments
        timer = setTimeout(() => {
            fn.apply(_this, arg)
        }, delay)
        console.log('触发防抖')
    }
}

function debounceOnce(fn, delay) {
    let timer = null
    return function() {
        const _this = this
        const arg = arguments

        if (timer) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(_this, arg)
            }, delay)
            console.log('触发防抖')
        } else {
            //没有定时器,说明初次,立即执行一下
            fn.apply(_this, arg)
            timer = !timer

        }
    }
}

//节流 一段时间内以第一次为准 一段时间内只能触发一次
//版本一采用定时器，会在一段时间的末尾执行
function throttle(fn, time) {
    let timeout = null
    return function() {
        const _this = this
        const arg = arguments
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                fn.apply(_this, arg)
            }, time)
        } else {
            console.log("触发节流！")
        }
    }
}
//采用时间戳,会在一段时间的刚开始执行
function throttle_v2(fn, time) {
    let pre = 0
    return function() {
        const _this = this
        const arg = arguments
        const now = Date.now()
        if (now - pre > time) {
            fn.apply(_this, arg)
            pre = now
        } else {
            console.log("触发节流")
        }

    }
}