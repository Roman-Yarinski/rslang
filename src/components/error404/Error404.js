import Component from '../Component';

import './error404.scss'

class Error404 extends Component {}

const error404 = new Error404({
  selector: 'main',
  template: '<div class="wrap"><h1 class="error-page text-center">Oops, something went wrong.</h1><h4 class="text-center">Here you won’t learn new words.</h4><h3 class="text-center">Better return to the main page and you will continue to study English with RsLang.</h3><a class="error-page-btn btn btn-primary" href="#">HOME</a></div>',
});

export default error404;
