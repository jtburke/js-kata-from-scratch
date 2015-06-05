define(['example', 'nested'], function (Example, Nested) {
    describe('ExampleTest', function () {
        it('should work', function () {
            var example = new Example();

            expect(example.works).toEqual(true);
        });

        it('should pull in nested dependencies properly', function () {
            var example = new Example();

            expect(example.nested).toEqual(new Nested());
        });
    });
});