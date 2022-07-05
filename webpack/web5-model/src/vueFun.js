export default {
    // template:  `<div>{{temp}}</div>`,
    render(h) {
        return h('div', {id: 'a'}, 'hello')
    },
    data() {
        return {
            temp: "测试"
        }
    }

}

const f = {
    tag: 'div',
    attrs: [{name: 'class', value: 'box'}],
    type: 1,
    children: [
        {
            tag: 'h3',
            attrs: [{name: 'class', value: 'title'}],
            type: 1,
            children: [
                {text: '我是一个标题', type: 3}
            ],
        },
        {
            tag: 'ul',
            attrs: [],
            type: 1,
            children: [
                {
                    tag: 'li',
                    type: 1,
                    for: 'arr',
                    key: 'index',
                    alias: 'item',
                    children: []
                }
            ]
        }
    ]
}