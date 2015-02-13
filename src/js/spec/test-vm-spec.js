define(["app/vm/test-vm"],
    function (TestVM) { "use strict";
        describe("Test VM", function () {

            var parentViewElementId = "viewNode";

            it("Exists", function() {
                expect(TestVM).toBeDefined();
            });

            it("Can be instantiated", function() {
                var vm = new TestVM();
                expect(vm).toBeDefined();
            });

            it("Can load the view", function() {
                var vm = new TestVM();
                vm.loadView(parentViewElementId);
                expect(vm).toBeDefined();
            });
        });
    });
