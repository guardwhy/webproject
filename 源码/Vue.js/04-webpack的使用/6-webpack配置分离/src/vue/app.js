export default {
  template: `
    <div>
      <h3>{{message}}</h3>
      <button @click="btnClick">按钮</button>
      <h3>{{name}}</h3>
    </div>
  `,
  data(){
    return{
      message: 'hello world',
      name: 'GuardWhy'
    }
  },
  methods: {
    btnClick(){

    }
  }
}