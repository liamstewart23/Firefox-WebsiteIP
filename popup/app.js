// Docs used https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/dns/resolve
browser.tabs.query({
    currentWindow: true,
    active: true
})
    .then((tabs) => {

        // Get Tab URL

        let parser = document.createElement('a');
        parser.href = tabs[0].url;

        // IPv4 Lookup

        let resolvingIPv4 = browser.dns.resolve(parser.hostname, [
            'disable_ipv6'
        ]);

        resolvingIPv4.then((record) => {
            let IPv4 = document.querySelector('#IPv4');
            IPv4.value = record.addresses[0];
            IPv4.addEventListener('click', () => {
                IPv4.select();
                document.execCommand('copy');
            }, false);

        });

        // IPv6 Lookup

        let resolvingIPv6 = browser.dns.resolve(parser.hostname, [
            'disable_ipv4'
        ]);

        resolvingIPv6.then((record) => {
            let IPv6 = document.querySelector('#IPv6');
            IPv6.value = record.addresses[0];
            IPv6.addEventListener('click', () => {
                IPv6.select();
                document.execCommand('copy');
            }, false);

        });

    });
