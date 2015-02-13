define(["app/models/test-model"],
    function (TestModel) { "use strict";
        describe("Test Model", function () {
            it("Exists", function() {
                expect(TestModel).toBeDefined();
            });

            it("Can be instantiated", function() {
                var model = new TestModel();
                expect(model).toBeDefined();
            });
        });
    });
