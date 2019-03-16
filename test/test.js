describe("testCart", function() {
    it("changes word list array", function() {
        let tArray = ["testItem1","testItem2"];
        let result = testCart(tArray);
        assert.equal(result[0], tArray[0]);
        assert.equal(result[1], tArray[1]);
    });
});
describe("testCartSave", function() {
    it("saves new items in cart array", function() {
        let testItem1 = "testValue1";
        let testItem2 = "testValue2";
        let result = testCartSave(testItem1,testItem2);
        assert.equal(result[0], testItem1);
        assert.equal(result[1], testItem2);
    });
});
describe("testCartClearItem", function() {
    it("removes item in cart array", function() {
        let testArray = ["testItem1","testItem2","testItem3"];
        let result = testCartClearItem(testArray,testArray[1]);
        assert.equal(result[0], testArray[0]);
        assert.equal(result[1], testArray[2]);
        assert.equal(result.length,2);
    });
});