<template>
    <div class="tp-detail">
        <mt-header fixed title="公示投票">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <div class="title">
                {{data.title}}
            </div>
            <div class="num-time">
                <p>投票数量： {{data.num}}</p>
                <p>截止时间： {{data.endTime}}</p>
            </div>
            <div class="list">
                <div class="item" v-for="(d, i) in data.list" :key="i">
                    <span class="iconfont" :class="d.check ? 'icongouxuanxuanzhongtai' : ''"></span>
                    <span class="name">{{d.title}}</span>
                    <span class="piaoshu">{{d.num}}票</span>
                    <span class="baifenbi">{{d.bfb}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data: {
                    'type': '1',    // 1:公示投票  2：问卷调查  3：考试测评
                    'title': '团建活动投票',
                    'canyu': 62,
                    'piaoshu': 145,
                    'endTime': '2019-12-20 12:00',
                    'list': [
                        {'title': '吃饭', 'num': 2, 'bfb': '20.0%', 'check': true},
                        {'title': '唱歌', 'num': 3, 'bfb': '30.0%', 'check': false},
                        {'title': '看电影', 'num': 5, 'bfb': '50.0%', 'check': false}
                    ]
                },
        }
    }
}
</script>

<style lang="less" scope>
    .tp-detail{
        .content{
            padding-top: 40px;
            .title{
                padding: 15px;
                color: #666;
                font-size: 18px;
                border-bottom: 1px solid #d8d8d8;
            }
            .num-time{
                padding: 10px 15px;
                color: #999;
                font-size: 14px;
            }
            .list{
                .item{
                    display: flex;
                    padding: 15px;
                    margin-top: 15px;
                    background-color: #fff;
                    .iconfont{
                        width: 40px;
                        font-size: 22px;
                        color: #409EFF;
                    }
                    .name{
                        flex: 1;
                    }
                    .piaoshu{
                        width: 40px;
                    }
                    .baifenbi{
                        width: 40px;
                    }
                }
            }
        }
    }
</style>