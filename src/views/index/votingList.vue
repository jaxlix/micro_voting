<template>
    <div id="bl">
        <div class="bg">
            微投票
        </div>
        <div class="select" @click="popupVisible=true">
            <span>{{checkedName}}</span>
            <span class="iconfont icondown2"></span>
        </div>
        <div class="list">
            <div class="item" v-for=" (d, i) in dataList" :key="i" @click="toDetail(d.type)">
                <div class="type" :class="typeClass[d.type]">{{type[d.type]}}</div>
                <div class="content">
                    <div class="title">{{d.title}}</div>
                    <div class="num">
                        <span v-if="d.type == '1'">{{d.canyu}}人参与，已投{{d.piaoshu}}票</span>
                        <span v-if="d.type != '1'">{{d.status}}</span>
                    </div>
                    <div class="end">{{d.endTime}} 结束</div>
                </div>
            </div>
        </div>

        <mt-popup v-model="popupVisible" position="bottom" class="popup">
            <div class="item" v-for="(d, i) in selectData" :key="i" @click="check(d)">
                <span class="name">{{d.name}}</span>
                <span class="iconfont" :class="checked==d.value ? 'icongouxuanxuanzhongtai' : ''"></span>
            </div>
        </mt-popup>
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
            selectData: [
                {'value': 1, 'name': '全部'},
                {'value': 2, 'name': '公示投票(全部)'},
                {'value': 3, 'name': '公示投票(已投)'},
                {'value': 4, 'name': '公示投票(未投)'},
                {'value': 5, 'name': '问卷调查(全部)'},
                {'value': 6, 'name': '问卷调查(已答)'},
                {'value': 7, 'name': '问卷调查(未答)'},
                {'value': 8, 'name': '考试测评(全部)'},
                {'value': 9, 'name': '考试测评(已考)'},
                {'value': 10, 'name': '考试测评(未考)'}
            ],
            checked: '1',
            checkedName: '全部',
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
                    'status': '已投',
                    'endTime': '2019-12-21 12:00'
                },
                {
                    'type': '2',
                    'title': '问卷调查2',
                    'status': '未投',
                    'endTime': '2019-12-21 12:00'
                },
                {
                    'type': '3',
                    'title': '测试',
                    'status': '已答',
                    'endTime': '2019-12-21 12:00'
                },
                {
                    'type': '3',
                    'title': '测试2',
                    'status': '未答',
                    'endTime': '2019-12-21 12:00'
                }
            ],
            popupVisible: false
        }
    },
    methods: {
        toSearch(){
            this.$router.history.push('/search')
        },
        toDetail(type){
            // 1:公示投票  2：问卷调查  3：考试测评
            if(type == '1'){
                this.$router.push({path: '/votingDetail'})
            }else if(type == '2'){
                this.$router.push({path: '/questionnaireDetail'})
            }else if(type == '3'){
                this.$router.push({path: '/testDetail'})
            }
        },
        check(v){
            this.checked = v.value
            this.checkedName = v.name
            this.popupVisible = false
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
        .select{
            display: flex;
            justify-content: space-between;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 18px;
            background-color: #fff;
            span{
                padding-left: 20px;
                padding-right: 20px;
            }
        }
        .list{
            .item{
                display: flex;
                margin-top: 10px;
                border-radius: 6px;
                background-color: #fff;
                .type{
                    width: 26px;
                    padding-top: 10px;
                    text-align: center;
                    color: #fff;
                }
                .content{
                    flex: 1;
                    padding: 10px;
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
        .popup{
            width: 100%;
            background-color: #fff;
            .item{
                display: flex;
                padding: 15px;
                height: 20px;
                border-bottom: 1px solid #f5f5f5;
                .name{
                    flex: 1;
                }
                .iconfont{
                    width: 40px;
                    font-size: 22px;
                    color: #409EFF;
                }
            }
        }
        
    }
</style>

