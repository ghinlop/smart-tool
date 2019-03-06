
$('[data-img-hover]').mouseenter((e) => {
    let target = e.currentTarget.querySelector('img')
    let target_height = target.clientHeight - 300;
    target.style.transform = 'translateY(-' + target_height + ');'
    $(target).attr('style', 'transform: translateY(-' + target_height + 'px);')
}).mouseleave((e) => {
    let target = e.currentTarget.querySelector('img')
    $(target).removeAttr('style')
});


// import Vue from 'vue';

// var app = new Vue({
//     data:{

//     }
// }).$mount('#filter')