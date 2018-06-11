# css-var
## 使用css 变量存储属性值，实现更快速，简洁的开发
1. 全局变量
    :root{
        --mian-bg-color: #f4f4f4;
        --main-txt-color: #333;
        --mian-line-height: 35px;
        --header-bg-color: orange;
        --header-txt-color:#fff;
        --container-width:90%;
    }
2. 局部变量
    .box{
        --box-bg-color:#ddd;
        --box-border-color:#06c;
        --box-padding: 5px 10px;
        --box-shadow-h-offset:10px;
        --box-shadow-v-offset:5px;
        --box-shadow-blur:5px;
    }