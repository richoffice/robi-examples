# Weixin MP

## 配置 Weixin 公众号访问信息

建一个 `conf/conf.json` 文件，内容为：

```json
{
    "wxmp":{
        "appid": "wx815a76d11897f698",
        "appkey": "a3bd92db20f54a872eec76734f57a419",
        "encodingkey": ""
    }
}
```

## create-channel-url.js

可以创建[生成带参数的二维码](https://developers.weixin.qq.com/doc/offiaccount/Account_Management/Generating_a_Parametric_QR_Code.html)。

执行`robi create-channel-url.js`。

## fetch-users.js

还可以通过 robi 获取用户列表，执行 `robi fetch-users.js`。

另外可以通过以下获取用户相信息：

```javascript
users = robi.Wxmp.User.BatchGetUserInfo({user_list: [
    {
        "openid": "otvxTs4dckWG7imySrJd6jSi0CWE", 
        "lang": "zh_CN"
    }
]});
```




