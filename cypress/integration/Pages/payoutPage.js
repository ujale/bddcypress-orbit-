let reference = ':nth-child(1) > :nth-child(1) > .form-group > .form-control'
let purpose = 'select[name="narration"]'



class payoutPage{
    static enterUserReference(userReference) {
        cy.get(reference).type('userReference')
    }

    static selectPurpose() {
        cy.get(purpose).select('<transactionNarration>')
    }

} export default payoutPage