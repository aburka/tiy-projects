import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  caption: DS.attr('string')
});
