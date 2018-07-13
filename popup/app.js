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
    fetch(urlFetch)
      .then(res => res.json())
      .then((output) => {
        document.body.innerHTML = output.query;
      })
      .catch(err => {
        document.body.innerHTML = ':(';
      });
  })