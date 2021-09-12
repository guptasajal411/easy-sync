function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}
$(".wrapper ul li").click(function(event){
    event.preventDefault();
    copyToClipboard($(this).text().trim());
});