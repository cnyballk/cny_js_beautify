var style_html = require('./index').html;

var a = `
<button id="x" class="xx"></button>
<button id="x" ></button>
`;
var a2 = `
    <button ><button ></button><button >11</button><button ></button></button>
`;
const test = () => {
  var b = style_html(a, {
    indent_size: 2,
    wrap_attributes_count: 3,
    wrap_attributes: 'force-expand-multiline',
  });
  console.log('=1=');
  console.log(a);
  console.log('==');
  console.log(b);
  console.log('==');
};
const test2 = () => {
  var b = style_html(a2, {
    indent_size: 2,
    wrap_attributes_count: 4,
    wrap_attributes: 'force-expand-multiline',
  });
  console.log('=1=');
  console.log(a2);
  console.log('==');
  console.log(b);
  console.log('==');
};
test();
test2();
