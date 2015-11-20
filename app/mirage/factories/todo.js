// More info: http://www.ember-cli-mirage.com/docs/v0.1.x/quickstart

import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title() { return `${faker.hacker.verb()} ${faker.internet.domainName()}`; },
  'is-completed': function() {
    return faker.random.boolean();
  }
});
