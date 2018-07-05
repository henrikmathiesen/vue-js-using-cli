function applyStyle(element, binding) {
    const { type, pos, px } = binding.value;

    element.style.position = type;
    element.style[pos] = px + 'px';
}

export default {
    bind(element, binding) {
        // this life cycle hook gets fired when the directive is bound to the element -- gets fires only once
        // updating pinPadding in the parent component will NOT make this code run again

        console.log('position-too-directive');
        console.log(binding.value);
        console.log('/position-too-directive');

        applyStyle(element, binding);
    },
    update(element, binding) {
        // updating pinPadding in the parent component WILL however make this code run again
        applyStyle(element, binding);
    }

    // There are 3 more life cykle hooks -- but the 2 above are by far the most common
    // inserted, componentUpdated (fires when parent AND children are updated), unbind
}

// IMPORTANT
// There is a shorthand for a directive that hooks into both bind and update
// export default function (element, binding) { }
