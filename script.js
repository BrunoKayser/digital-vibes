function GenerateQRCode() {
    var urlSite = "https://www.youtube.com/watch?v=WuMIkpUwksU";
    var urlQrCodeGoogleChartApi = "https://chart.googleapis.com/chart?cht=qr&chs=250x250&chld=Q&chl=";

    var content = urlQrCodeGoogleChartApi + urlSite;

    document.querySelector("#QRCodeImage").src = content;
    document.querySelector("#QRCodeImage").removeAttribute("hidden");
    document.querySelector("#CamTitle").removeAttribute("hidden");
    document.querySelector("#DeleteQRCodeImage").removeAttribute("hidden");
    document.querySelector("#GenerateQRCode").setAttribute("hidden", true);

}   

function DeleteQRCode() {

    var content = document.querySelector("#QRCodeImage").src;
    console.log("Passou aqui" + content);
    if(content != null) {
        document.querySelector("#DeleteQRCodeImage").setAttribute("hidden", true);

        document.querySelector("#QRCodeImage").setAttribute("hidden", true);
        document.querySelector("#CamTitle").setAttribute("hidden", true);
        document.querySelector("#GenerateQRCode").removeAttribute("hidden");
    }

}   