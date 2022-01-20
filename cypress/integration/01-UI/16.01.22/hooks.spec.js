describe('usind hooks for before and after test cases',()=>{
  before(function(){
      cy.log('hello im aksahy')
  })
  after(function(){
      cy.log('hello im pardeshi')
  })
  beforeEach(function(){
      cy.log('hello im user ')
  })
  afterEach(function(){
      cy.log('im tester')
  })
  it('testcase one ',()=>{
      cy.log('test case one running')
  })
  it('test case two',()=>{
      cy.log('test case two runnig')
  })
  it('test case three ',()=>{
      cy.log('test case three running')
  })
})