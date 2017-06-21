
<template>

    <list class="list">
        <refresh></refresh>
        <cell v-for="(item,index) in listData.Hotels" @click="cellClick" :item="item">
            <div class="item">
                <div class="imgcontainer">
                    <image resize="cover" v-bind:src="item.Picture" style="width: 640px;height: 400px;;"></image>

                </div>

                <div class="textarea">

                    <text class="hotelname">{{item.Name}}</text>
                    <text class="hoteldes">{{item.Brief}}</text>

                </div>

            </div>

        </cell>

    </list>

</template>

<script>

    import dataCenter from './store/services'

    var modal = weex.requireModule('modal')

    export default {

        //getter & setter
        computed: {

        },

        methods: {

            fetchListData(){

                dataCenter.collection().then((response) => {

                    this.listData = response

                })
            },

            cellClick(e) {

                const item = e.Brief

                modal.toast({
                    message: item,
                    duration: 0.3
                })
            },

//            loadMoreData(){
//
//            }

        },

        // 属性
        data() {

            return {
                imageList: [
                    { src: 'http://p1.zmjiudian.com/116YLS711uz_theme'},
                    { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                    { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
                ],

                listData:{},
            }

        },

        //生命周期钩子

        beforeCreate(){},

        created(){

            //请求数据
            this.fetchListData()

//            console.log('will show toast')

        },

//        beforeMount(){},
//        mounted(){},
//        beforeUpdate(){},
//        updated(){},
//        activated(){},
//        deactivated(){},
//        beforeDestroy(){},
//        destroyed(){},


    }

</script>


<style>

    .imgcontainer {

    }
    .hotelname{

        font-size: medium;
        color: #666;

    }
    .hoteldes{
        font-size: smaller;
        color: #999;
    }
    .textarea{
        margin: 10px;
    }

    /*.image {*/
        /*width: 700px;*/
        /*height: 300px;*/
    /*}*/
    /*.slider {*/
        /*margin-top: 25px;*/
        /*margin-left: 25px;*/
        /*width: 700px;*/
        /*height: 300px;*/
        /*border-width: 2px;*/
        /*border-style: solid;*/
        /*border-color: #41B883;*/
    /*}*/
    /*.frame {*/
        /*width: 700px;*/
        /*height: 300px;*/
        /*position: relative;*/
    /*}*/

</style>