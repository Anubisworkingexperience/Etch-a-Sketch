/* It's just a testing file which is used to test features. It's
not a part of a project.
TODO
1. Grid
1.5. Remove rmb paint
2. Page styling
3. Selection bug (when both spans click values are even)
*/

const clear = document.querySelector('.clear');
let clickCount = 0;

clear.addEventListener('click', (e) => {
    clickCount += 1;
    console.log(clickCount);
    if (clickCount % 2 == 0) {
        e.target.style.backgroundColor = 'red';
    }
    else {
        e.target.style.backgroundColor = 'blue';
    }
});

