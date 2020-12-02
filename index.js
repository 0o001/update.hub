const github = require('octonode');
const express = require('express');
const app = express();

const client = github.client({

  username: '',
  password: ''

});


const ghrepo = client.repo('mustafauzun0/update.hub');

ghrepo.readme((redmeError, readmeData) => {

  ghrepo.updateContents(readmeData.path, 'Update', Math.random().toString(), readmeData.sha, 'main', (e) => { });

});

app.listen(process.env.PORT || 8080, () => {

  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);

});

app.get('/', (request, response) => {
  
  response.sendStatus(200);
  
});