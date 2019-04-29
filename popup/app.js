browser.tabs.query({
    currentWindow: true,
    active: true
  })
  .then((tabs) => {
    let url = tabs[0].url; //current url

    //hack to get just domain
    let parser = document.createElement('a');
    parser.href = url;
    let urlFetch = 'http://ip-api.com/json/' + parser.hostname; //url to fetch
    let copyField = document.querySelector('#copyField');

    function copyToClipboard() {
        copyField.select();
        document.execCommand("copy");
    }

    fetch(urlFetch)
      .then(res => res.json())
      .then((output) => {
        copyField.value = output.query;
        document.addEventListener('click',copyToClipboard,false);
      })
      .catch(err => {
        document.body.innerHTML = ':(';
      });
  })