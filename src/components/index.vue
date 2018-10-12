<template>
    <div>
        <p>哈哈哈哈哈哈哈哈哈哈哈</p>
        <div>
            <button @click="reduce1" class="add">-</button>
            <input type="text" v-model="$store.state.nums"/>
            <button @click="add1" class="reduce">+</button>
            <h3>当前值：{{ $store.state.nums}}</h3>
            <br>
            
            <button @click="reduce" class="add">-</button>
            <input type="text" v-model="$store.state.count"/>
            <button @click="add" class="reduce">+</button>
            <p>使用getters包装数据</p>
            <h3>{{ $store.getters.optCount}}</h3>
        </div>

    </div>
</template>
<script>
    export default {
        methods: {
            add1(){
                this.$store.commit('increment')
            },
            reduce1(){
                this.$store.commit('subtract',1)
            },
            add(){
                //不是用这个方法
                // this.$store.state.count++
                this.$store.commit('increment')
            },
            reduce(){
                // this.$store.commit('subtract')

                // 注意 mutation的函数参数列表中最多支持两个参数，其中参数1：是state状态；
                // 参数2：通过commit提交过来的参数；
                this.$store.commit('subtract',1)
            }
        }
    }
</script>

