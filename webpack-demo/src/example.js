import _ from 'lodash';

export default function testModule() {
   const element = document.createElement('div');
   element.innerHTML = _.join(['Hello', 'From', 'Code', 'splitting'], ' ');
   return element;
}