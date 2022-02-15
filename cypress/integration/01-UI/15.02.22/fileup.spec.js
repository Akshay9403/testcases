//starting la file upload run karave lagel--npm install --save-dev cypress-file-upload
//cypress/support/commands--pase-import 'cypress-file-upload';
//then put one image file in fixture to upload 
//attachFile comming from plugging
describe('verify file upload function',()=>{
    it('verify single file upload ',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('asp.jpg');
        cy.get('#file-submit').click()
        cy.url().should('contain','upload')
        cy.get('#uploaded-files').should('contain','asp')
    })
    it('verify multiple file upload ',()=>{
        let path=['asp','asp2','asp3']
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(path);
        cy.get('#fileList').children().should('have.length',3)
        cy.get('#fileList').children().should('have.length',path.length)
    })
    it.only('verify chane file name to upload ',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({ filePath:'asp.jpg', fileName:'one.jpg' });
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').should('contain','one')
        cy.get('#uploaded-files').contains('one')
        cy.screenshot()
        cy.screenshot('akshay')
    })
})