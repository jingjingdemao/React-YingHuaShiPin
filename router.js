import React, { Component } from 'react'
// 导入路由相关的组件
// Router: 就相当于 之前所学的  HashRouter
// Stack: 这是一个分组的容器，他不表示具体的路由，专门用来给路由分组的
// Scene：就表示一个具体的路由规则，好比之前学的 Route
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux'
import App from './App.js'
import BanMore from './src/components/BanMore.js';


class AppRouter extends Component {
    render() {
        return (
            <Router sceneStyle={{ backgroundColor: 'white' }}>
                <Stack key="root" hideNavBar>
                {/* hideNavBar */}
                    <Scene key="app" component={App} />
                    <Scene key="banmore" component={BanMore} />
                </Stack>
            </Router>);
    }
}

export default AppRouter;

