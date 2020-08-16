const Vue = require('vue');
const server = require('express')();

const template = require('fs').readFileSync('./index.template.html', 'utf-8');

const renderer = require('vue-server-renderer').createRenderer({
  template,
});

const context = {
   title: 'fun fun fun',
};

server.get('*', (req, res) => {
   const app = new Vue({
      data: {
         url: req.url
      },
      template: require('fs').readFileSync('./index.html', 'utf-8'),
   })

   renderer.renderToString(app, context, (err, html) => {
      console.log(html);
      if (err) {
         res.status(500).end('Internal Server Error')
         return;
      }
      res.end(html);
   })
})

server.listen(8080)