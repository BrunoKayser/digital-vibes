function GerarQRCode() {
    var urlSite = "https://www.youtube.com/watch?v=WuMIkpUwksU";
    var urlQrCodeGoogleChartApi = "https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=";

    var content = urlQrCodeGoogleChartApi + urlSite;

    document.querySelector("#QRCodeImage").src = content;
    document.querySelector("#QRCodeImage").removeAttribute("hidden");
    document.querySelector("#Cam").removeAttribute("hidden");
    document.querySelector("#ApagarQRCodeImage").removeAttribute("hidden");
    document.querySelector("#GeraQRCode").setAttribute("hidden", true);

}   

function ApagarQRCode() {

    var content = document.querySelector("#QRCodeImage").src;
    console.log("Passou aqui" + content);
    if(content != null) {
        document.querySelector("#ApagarQRCodeImage").setAttribute("hidden", true);

        document.querySelector("#QRCodeImage").setAttribute("hidden", true);
        document.querySelector("#Cam").setAttribute("hidden", true);
        document.querySelector("#GeraQRCode").removeAttribute("hidden");
    }

}   