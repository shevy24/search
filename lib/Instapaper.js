{
  search: [
    {
      type:'link',
      query:'https://www.instapaper.com//search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.repolist-name a',
        expression:'element.textContent'
      },
      link:{
        selector:'.repolist-name a',
        expression:'"https://instapaper.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.description',
        expression:'element.textContent'
      }
    }
  ]
}
