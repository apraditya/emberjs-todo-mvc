// More info: http://www.ember-cli-mirage.com/docs/v0.1.x/quickstart

import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title(i) { return `Do work ${i}`; },
  'is-completed': false
});
