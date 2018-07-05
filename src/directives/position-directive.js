export default {
    bind(element, binding) {
        console.log('position-directive');
        console.log({
            arg: binding.arg,
            modifiers: binding.modifiers
        });
        console.log('/position-directive');

        element.style.position = binding.arg;

        const pos = Object.keys(binding.modifiers)[0];
        element.style[pos] = '5px';
    }
};
