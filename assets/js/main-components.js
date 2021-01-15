// let direction = new THREE.Vector3();
// AFRAME.registerComponent('vrlink', {
//     schema: {
//         url: { type: 'string', default: 'index' }
//     },
//     init: function () {
//         this.el.addEventListener("click", (e) => {
//             window.location = './' + this.data.url + '.html';
//         });
//     },
//     update: function () { },
//     tick: function (time, timeDelta) { },
//     remove: function () { },
//     pause: function () { },
//     play: function () { }
// });


// AFRAME.registerComponent('collider-check', {
//     dependencies: ['raycaster'],
//     init: function() {
//         this.el.addEventListener('raycaster-intersection', function() {
//             console.log("player hit me!");
//         });

//         this.el.addEventListener('click', function() {
//             console.log("click pues!");
//         })
//     }
// })