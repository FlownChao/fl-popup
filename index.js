import './popup.css'
class popup {
    constructor() {
        this.id = 'fl-popup' + Date.parse(new Date());
    }
    toast(data) {
        //*******/
        //String或者object
        //data 内部字段
        // {
        //     title: '提示',
        //     content: '',
        //     button: '确定',
        //     callback: func
        // }
        let node = document.createElement('div');
        node.innerHTML = `<div class="fl-popup-toast">${data.content?data.content:data}</div>`
        node.setAttribute("id", this.id);
        node.setAttribute("class", 'fl-popup');
        document.body.insertBefore(node, document.body.lastElementChild);
        setInterval(() => {
            this.dismiss();
        }, data.time ? data.time : 3000)
    }
    alert(data) {
        //*******/
        //data 内部字段
        // {
        //     title: '提示',
        //     content: '',
        //     button: '确定',
        //     callback: func
        // }
        let node = document.createElement('div');
        node.innerHTML = `<div class="fl-popup-box">${data.title?'<div class="popup-title">'+data.title+'</div>':''}<div class="popup-content">${data.content}</div><div class="popup-bottom"><div class="popup-btn">${data.button}</div></div></div><div class="popup-mask"></div>`
        node.setAttribute("id", this.id);
        node.setAttribute("class", 'fl-popup');
        node.getElementsByClassName("popup-btn")[0].onclick = () => {
            this._handleCallback(data.callback)
        }
        document.body.insertBefore(node, document.body.lastElementChild);
    }
    comfirm(data) {
        //*******/
        //data 内部字段
        // {
        //     title: '提示',
        //     content: '',
        //     button: ['',''],
        //     callback: [func,func]
        // }
        let node = document.createElement('div');
        node.innerHTML = `<div class="fl-popup-box">${data.title?'<div class="popup-title">'+data.title+'</div>':''}<div class="popup-content">${data.content}</div><div class="popup-bottom"><div class="popup-btn" style="width:50%;border-right: 1px solid #DADADA;">${data.button[0]}</div><div class="popup-btn"  style="width:50%">${data.button[1]}</div></div></div><div class="popup-mask"></div>`
        node.setAttribute("id", this.id);
        node.setAttribute("class", 'fl-popup');
        node.getElementsByClassName("popup-btn")[0].onclick = () => {
            this._handleCallback(data.callback[0])
        }
        node.getElementsByClassName("popup-btn")[1].onclick = () => {
            this._handleCallback(data.callback[1])
        }
        document.body.insertBefore(node, document.body.lastElementChild);
    }
    _handleCallback(callback) {
        this.dismiss();
        callback && callback();

    }
    dismiss() {
        let nodes = document.getElementsByClassName('fl-popup');
        if (nodes.length > 0) {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].parentNode.removeChild(nodes[i]);
            }
        }
    }
}
export default popup
