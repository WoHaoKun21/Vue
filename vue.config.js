const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        open: true,
        host: "localhost",
    },
    // vue.config.js配置链接：https://www.jianshu.com/p/b358a91bdf2d
    configureWebpack: {// 用来配置文件路径的，可以简化一如路径
        resolve: {
            alias: {
                "styles": "@/assets/styles",
                "common": "@/common"
            }
        }
    }
});