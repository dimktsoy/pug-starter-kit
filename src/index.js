import $ from 'jquery';
import './favicons/favicons';
import 'normalize.css';
import './scss/main.scss';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./components', true, /\.(scss|js)$/));
importAll(require.context('./pages', true, /\.(scss|js)$/));
importAll(require.context('./templates', true, /\.(scss|js)$/));
