err = robi.Qrcode.CreateFile("https://yylives.cc/2022/08/07/agile-oa-tool-robi/", "./test.png");

if (err!=null) {
    log("get errors:");
    log(err);
    throw "exit";
}

log("QrCode created")