$(function () {
    console.log(chrome.storage.local['stacktraceResolving']);
    if (chrome.storage.local['stacktraceResolving']) {
        $("input[name='stacktrace'][value='on']").attr('checked', true);
        console.log('set true');
    } else {
        $("input[name='stacktrace'][value='off']").attr('checked', true);
        console.log('set false');
    }
    $("input[name='stacktrace']:radio").change(function () {
        ($("input[name='stacktrace'][value='on']").attr('checked'))
            ? setStacktraceResolving(true)
            : setStacktraceResolving(false);
    });
    $("input[name='stacktrace'][value='on']").click(function () {
        console.log('click');
    });
});
function setStacktraceResolving(allowance) {
    chrome.storage.local.set({'stacktraceResolving': allowance}, function () {
        console.log('StackTrace Resolving was set to ' + allowance);
    });
}
