/**
 * 环境配置封装
 */

const env = import.meta.env.MODE || "prod";
const EnvConfig = {
    dev:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/2e07bd9bbc3b68fb3d8ca70615fbc67d/api'
    },
    test:{

    },
    prod:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/2e07bd9bbc3b68fb3d8ca70615fbc67d/api'
    }
}
export default {
    env,
    mock:true,
    ...EnvConfig[env],
}