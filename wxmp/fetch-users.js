userlistData = robi.Wxmp.User.GetList({
    next_openid:[]
});
if (userlistData["errmsg"] != "" && userlistData["errmsg"] != null) {
    throw userlistData["errmsg"];
}

log(userlistData);