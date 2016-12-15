/*(function checkMutations() {
    var target = document.querySelectorAll('.s-levels')[0];
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        console.log('-=--=-=====--===-==');
        console.log(mutation.type);
        if (mutation.type == 'subtree') {
					console.log(document.querySelectorAll('.s-levels')[0]);
        }
        console.log('--------------------------');
      });
    });
    var config = { attributes: true, childList: true, characterData: true, subtree:true };
    observer.observe(target, config);
})()*/







//hall_wrapper s-hall_wrapper
(function() {
// target elements with the "draggable" class
interact('#hallLayout')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      //restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;
})()