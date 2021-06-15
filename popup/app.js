// Docs used https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/dns/resolve
browser.tabs.query({
    currentWindow: true,
    active: true
})
    .then((tabs) => {
        let parser = document.createElement('a');
        parser.href = tabs[0].url;
        let resolving = browser.dns.resolve(parser.hostname);
        resolving.then((record) =>{
            let IPv4 = document.querySelector('#IPv4');
            let IPv6 = document.querySelector('#IPv6');
            IPv4.value = record.addresses[1];
            IPv6.value = record.addresses[0];
            IPv4.addEventListener('click',() => {
                IPv4.select();
                document.execCommand('copy');
            },false);
            IPv6.addEventListener('click',() => {
                IPv6.select();
                document.execCommand('copy');
            },false);

        });
    });
