let shareBtn = document.querySelector('.share');
let toolTip = document.querySelector('.tool-tip');


console.log(toolTip)
shareBtn.addEventListener('click', function() {
    toolTip.classList.toggle('show')
    this.classList.toggle('clicked')
    this.querySelector('span').classList.toggle('clicked')
})