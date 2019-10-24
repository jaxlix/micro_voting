<template>
    <div id="index">
        <votingList v-show="selected === 'index'"></votingList>
        <mine v-show="selected === 'mine'"></mine>
        <footer v-if="false" class="footer">
            <div @click="selected = 'index'" :class="selected == 'index' ? 'this' : ''">
                <p class="iconfont iconyemian"></p>
                <p>首页</p>
            </div>
            <div @click="selected = 'mine'" :class="selected == 'mine' ? 'this' : ''">
                <p class="iconfont iconicon-me"></p>
                <p>我的</p>
            </div>
        </footer>
    </div>
</template>
<script>
import votingList from './votingList'
import voting from '../voting/index'
import mine from '../mine/index'

export default {
    data(){
        return {
            selected: 'index'
        }
    },
    components: {
        votingList,
        voting,
        mine
    }
}
</script>
<style lang="less" scoped>
    #index{
        padding-bottom: 55px;
        .footer{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 48px;
            display: flex;
            background-color: #fff;
            color: #aaa;
            div{
                flex: 1;
                text-align: center;
                .iconfont{
                    font-size: 26px;
                }
            }
            .this{
                    color: #028ce5 !important;
                }
        }
    }
</style>


