AFRAME.registerComponent('video', {
    init: function() {

        const video = document.querySelector('#darthVader');
        video.play();
        const stormtroopers = document.querySelectorAll(".stormtrooper");

        console.log(stormtroopers[0].object3D.children);

        // const mixer = new THREE.AnimationMixer(model);
        // const action = mixer.clipAction(stormtroopers[0].children[0].animations[0]);
        // action.play();
    }
});