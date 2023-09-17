/* It's just a testing file which is used to test features. It's
not a part of a project.
TODO
1. Grid
1.5. Remove rmb paint
2. Page styling
3. Selection bug (when both spans click values are even)
*/

const colorFill = document.querySelector('.fill');
const choose = document.querySelector('.choose');
let counter = 2;

if (counter % 2 == 0) {
  colorFill.addEventListener('click', () => {
    choose.computedStyleMap.backgroundColor = 'red';
    counter += 1;
  });
}


