

channelData = robi.Wxmp.Account.CreateQRCode({
    action_name: "QR_LIMIT_STR_SCENE",
    action_info: {
        scene:{
            "scene_str": "yylives.cc"
        }
    }
});

log(channelData);
