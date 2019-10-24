<template>
    <div class="wj-detail">
        <mt-header fixed title="问卷调查">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <div class="title">
                {{data.title}}
            </div>
            <div class="num-time">
                <p>截止时间： {{data.endTime}}</p>
            </div>
            <div class="list">
                <div class="item" v-for="(d, i) in data.list" :key="i">
                    <div class="item-title">{{d.title}}</div>
                    <ul class="xuanxiang">
                        <li v-for="(data, index) in d.options" :key="index">
                            <span class="iconfont icongouxuanxuanzhongtai"></span>
                            <span class="name">{{data}}</span>
                        </li>
                    </ul>
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
                    'type': '2',    // 1:公示投票  2：问卷调查  3：考试测评
                    'title': '关于2.5天小长假问卷调查',
                    'endTime': '2019-12-20 12:00',
                    'list': [
                        {
                            'title': '您是否支持2.5天小长假', 
                            'options': ['A.赞同','B.不赞同','C.无所谓']
                        },
                        {
                            'title': '如果您想休假，原因是', 
                            'options': ['A.工作劳累', 'B.家庭需要', 'C.更多的休息可以提升平时工作效率']
                        },
                        {
                            'title': '如果您不想休假，原因是',
                            'options': ['A.热衷于工作', 'B.获得更多的经济报酬', 'C.职场发展的需要']
                        }
                    ]
                },
        }
    }
}
</script>

<style lang="less" scope>
    .wj-detail{
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
                    padding: 15px;
                    margin-top: 15px;
                    background-color: #fff;
                    .item-title{
                        padding: 5px 10px 10px 10px;
                        border-bottom: 1px solid #f5f5f5;
                    }
                    .xuanxiang{
                        padding-top: 10px;
                        li{
                            display: flex;
                            padding: 5px 10px;
                            .iconfont{
                                width: 40px;
                                font-size: 22px;
                                color: #f5f5f5;
                            }
                            .this{
                                color: #409EFF;
                            }
                        }
                    }
                }
            }
        }
    }
</style>