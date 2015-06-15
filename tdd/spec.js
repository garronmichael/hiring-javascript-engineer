describe("Robot Scene", function() {
  
  describe("Robot Class", function() {
    it("should be a function", function(){
      expect(Robot).to.be.a('function');
    });

    it("should have a setPosition function", function() {
      expect(Robot.prototype.setPosition).to.be.a('function');
    });

  });

  describe("Rosie", function(){
    it("should be a function", function(){
      expect(Rosie).to.be.a('function');
    });
  });

  describe("Bender", function(){
    it("should be a function", function(){
      expect(Bender).to.be.a('function');
    });
  });
});
