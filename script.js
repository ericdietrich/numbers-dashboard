export default function initNumbersAnimate() {
    const numbers = document.querySelectorAll('.result');

    numbers.forEach((item) => {
        const totalUnchanged = item.innerText;
        const total = +item.innerText
            .split(',')
            .join('.')
            .split(' ')
            .join('')
            .split('')
            .filter(n => (Number(n) || n == 0 || n == '.')).join('');

        let start = 0;
        let increment = total / 100;

        const timer = setInterval(() => {
            start = start + increment;
            item.innerText = start.toFixed(2);
            if (start >= total) {
                clearInterval(timer);
                item.innerText = totalUnchanged;
            }
        }, 30 * Math.random());
    })
}

initNumbersAnimate();