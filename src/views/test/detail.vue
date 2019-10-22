<template>
    <div class="test-detail">
        <mt-header fixed title="考试测评">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <div class="title">
                {{data.title}}
            </div>
            <div class="num-time">
                <p>开始时间： {{data.startTime}}</p>
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
                    'type': '3',    // 1:公示投票  2：问卷调查  3：考试测评
                    'title': '10月份考试测评',
                    'startTime': '2019-10-30 09:00',
                    'endTime': '2019-10-30 12:00',
                    'list': [
                        {
                            'title': '在银行的资产负债表中，客户存款属于', 
                            'options': ['A.资产','B.权益','C.资金', 'D.负债']
                        },
                        {
                            'title': '下列艺术领域与专业术语对应有误的是', 
                            'options': ['A.摄影：噪点、景深', 'B.绘画：散点透视、写意', 'C.音乐：调式、声部', 'D.舞蹈：变位跳、变奏']
                        },
                        {
                            'title': '下列矿物与其用途对应错误的是',
                            'options': ['A.燧石——取火', 'B.石灰岩——生产水泥', 'C.石棉——促进燃烧', 'D.石英——制作半导体']
                        }
                    ]
                },
        }
    }
}
</script>

<style lang="less" scope>
    .test-detail{
        .content{
            padding-top: 40px;
            .title{
                padding: 15px;
                color: #666;
                font-size: 18px;
                border-bottom: 1px solid #d8d8d8;
            }
            .num-time{
                padding: 10px 15px 0 15px;
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