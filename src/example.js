define(['nested'], function (Nested) {
    function Example() {
        this.works = true;
        this.nested = new Nested();
    }

    return Example;
});