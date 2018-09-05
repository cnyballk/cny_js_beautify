var style_html = require('./index').html;

var a = `
<button id="x" class="xx"></button>
<button id="x" ></button>
`;

const test = () => {
  var b = style_html(a, {
    indent_size: 2,
    wrap_attributes_count: 2,
    wrap_attributes: 'force-expand-multiline',
  });
  console.log('=1=');
  console.log(a);
  console.log('==');
  console.log(b);
};
var a2 = `
    <button ><button wx:for="{{a?1?1:2}}"></button><button >11</button><button ></button></button>
`;
const test2 = () => {
  var b = style_html(a2, {
    indent_size: 2,
    wrap_attributes_count: 4,
    wrap_attributes: 'force-expand-multiline',
  });
  console.log('=2=');
  console.log(a2);
  console.log('==');
  console.log(b);
  console.log('==');
};
test();
test2();
