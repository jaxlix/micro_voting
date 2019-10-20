<template>
    <div id="bl">
        <div class="bg">
            微投票
        </div>
        <div class="list">
            <div class="item" v-for=" (d, i) in dataList" :key="i">
                <div class="type" :class="typeClass[d.type]">{{type[d.type]}}</div>
                <div class="content">
                    <div class="title">{{d.title}}</div>
                    <div class="num">
                        {{d.canyu}}人参与，已投{{d.piaoshu}}票
                    </div>
                    <div class="end">{{d.endTime}} 结束</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            type: {
                '1': '公示投票',
                '2': '问卷调查',
                '3': '考试测评'
            },
            typeClass: {
                '1': 'blue',
                '2': 'yellow',
                '3': 'red'
            },
            dataList: [
                {
                    'type': '1',    // 1:公示投票  2：问卷调查  3：考试测评
                    'title': '投票活动',
                    'canyu': 62,
                    'piaoshu': 145,
                    'endTime': '2019-12-20 12:00'
                },
                {
                    'type': '1',
                    'title': '投票活动2',
                    'canyu': 23,
                    'piaoshu': 88,
                    'endTime': '2019-12-21 12:00'
                },
                {
                    'type': '2',
                    'title': '问卷调查',
                    'canyu': 23,
                    'piaoshu': 88,
                    'endTime': '2019-12-21 12:00'
                },
                {
                    'type': '3',
                    'title': '测试',
                    'canyu': 23,
                    'piaoshu': 88,
                    'endTime': '2019-12-21 12:00'
                }
            ]
        }
    },
    methods: {
        toSearch(){
            this.$router.history.push('/search')
        }
    }
}
</script>

<style lang="less" scoped>
    #bl{
        .bg{
            position: relative;
            width: 100%;
            height: 200px;
            background-color: #fff;
            color: #fff;
            text-align: center;
            line-height: 200px;
            font-size: 2rem;
            font-weight: bold;
            background-color: #498BFF;
        }
        .list{
            .item{
                display: flex;
                margin-top: 10px;
                border-radius: 6px;
                background-color: #fff;
                .type{
                    width: 26px;
                    text-align: center;
                    color: #fff;
                }
                .content{
                    flex: 1;
                    margin-left: 10px;
                    .title{
                        font-size: 18px;
                        margin-bottom: 10px;
                    }
                    .num{
                        margin-bottom: 10px;
                    }
                    .end{
                        font-size: 14px;
                        color: #666;
                    }
                }
                .blue{
                    background-color: #409EFF;
                }
                .yellow{
                    background-color: #E6A23C;
                }
                .red{
                    background-color: #F56C6C;
                }
            }
        }
    }
</style>

