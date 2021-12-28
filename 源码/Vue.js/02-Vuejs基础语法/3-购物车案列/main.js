const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
       {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },

  // 方法
  methods: {
    // 加操作
    increment(index) {
      this.books[index].count++
    },

    // 减操作
    decrement(index) {
      this.books[index].count--
    },

    // 移除操作
    removeHandle(index){
      this.books.splice(index,1)
    }
  },

  // 计算属性
  computed: {
    // 定义总价格函数
    totalPrice(){
      // 设置总价格为空
      let totalPrice = 0;
      // 方式 1遍历循环
      /*
      for(let i=0; i<this.books.length; i++){
        totalPrice += this.books[i].price * this.books[i].count;
      }
      */

      // 方式2 遍历循环
      /*
      for(let i in this.books){
        totalPrice += this.books[i].price * this.books[i].count;
      }
      */
      // 方式3 遍历循环
      /*
      for (let item of this.books){
        totalPrice += item.price * item.count;
      }*/

      // 返回总价格
      // return totalPrice;

      // 方式四 通过高阶函数实现
      return this.books.reduce(function (preValue,book){
        return preValue + book.price * book.count
      },0)


    }
  },

  // 过滤器
  filters: {
    showPrice(price){
      return '¥' + price.toFixed(2);
    }
  }
})