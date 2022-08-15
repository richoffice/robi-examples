usersExcel = robi.File.LoadExcel("files/testdata.xlsx", "files/testdata.json");
users = usersExcel["users"];
log(users);

users.Apply(function(user){
    user["full-balance"] = user["balance"] * user["count"];
});

result = robi.File.WriteExcel(usersExcel, "files/testdata-out.xlsx", "files/testdata.json");
log(result);
