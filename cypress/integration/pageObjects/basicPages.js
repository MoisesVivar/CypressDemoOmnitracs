class simpleForm{
    static enterMessage(){
        return cy.get("#user-message")
    }
    static showMessageButton(){
        return cy.get("#get-input > .btn")
    }
    static yourMessage(){
        return cy.get("#display")
    }
    static enterA(){
        return cy.get("#sum1")
    }
    static enterB(){
        return cy.get("#sum2")
    }
    static getTotal(){
        return cy.get("#gettotal > .btn")
    }
    static total_A_plus_B(){
        return cy.get("#displayvalue")
    }
}

class checkBox{
    static singleCheckBox(){
        return cy.get("#isAgeSelected")
    }
    static message(){
        return cy.get("#txtAge")
    }
    static fourCheckBoxes(){
        return cy.get(".cb1-element")
    }
    static checkUncheckButton(){
        return cy.get("#check1")
    }
}

class radioButton{
    static firstTwoRadioButtons(){
        return cy.get("input[name='optradio']")
    }
    static getCheckedValueButton(){
        return cy.get("#buttoncheck")
    }
    static message(){
        return cy.get(".radiobutton")
    }
    static sexRadioButtons(){
        return cy.get("input[name='gender']")
    }
    static ageGroupRadioButtons(){
        return cy.get("input[name='ageGroup']")
    }
    static getValuesButton(){
        return cy.get(".panel-body > .btn")
    }
    static sexAgeGroupMessage(){
        return cy.get(".groupradiobutton")
    }
}

class javaScriptAlerts{
    static handlingAlert(alertMessage){
        cy.get(":nth-child(4) > .panel-body > .btn").click()
        cy.on("window:alert",(str)=>{
            expect(str).to.equal(alertMessage)
        })
    }
    static handlingConfirm(confirmMessage){
        cy.get(":nth-child(5) > .panel-body > .btn").click()
        cy.on("window:confirm",(str)=>{
            expect(str).to.equal(confirmMessage)
        })
    }
    static handlingPrompt(promptMessage){
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns(promptMessage)
            cy.get(":nth-child(6) > .panel-body > .btn").click()
        })
        cy.get("#prompt-demo").should("have.text","You have entered " + "'" + promptMessage + "'" + " !")
    }
}

class bootstrapAlert{
    static verifiyingNormalMessages(messageTypes){
        cy.get("div[class=col-md-6] div").as("All_Messages")
        cy.get("div[class=col-md-4] button").each(function(button,index){
            
            if(index%2 !== 0){
                cy.wrap(button).click()
                cy.get("@All_Messages").eq(index).should("include.text",messageTypes[index].closing_type).and("include.text",messageTypes[index].message_type)
            }
        })
        cy.get(".close").each((closeButton)=>{
            cy.wrap(closeButton).click()
        })
    }
    static verifiyingAutocloseableMessages(messageTypes){
        cy.get("div[class=col-md-6] div").as("All_Messages")
        cy.get("div[class=col-md-4] button").as("All_Buttons")
        cy.get("div[class=col-md-4] button").each(function(button,index){
            
            if(index%2 === 0){
                cy.wrap(button).click()
                cy.get("@All_Messages").eq(index).should("include.text",messageTypes[index].closing_type).and("include.text",messageTypes[index].message_type)
            }
        })
        cy.wait(5000)
        cy.get("@All_Messages").each((message)=>{
            cy.wrap(message).should("not.be.visible")
        })
    }
}

class bootstrapModals{
    static verifyingSingleModalExample(){
        cy.get("a[href='#myModal0']").as("SingleModal")
        cy.get("@SingleModal").click()
        cy.get("#myModal0 > .modal-dialog > .modal-content > .modal-header > .modal-title").should("have.text", "Modal Title")
        cy.get("#myModal0 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss='modal']").click()
        cy.url().should("include",Cypress.env("url")+"bootstrap-modal-demo.html")
        cy.get("@SingleModal").click()
        cy.get("#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary").click()
        cy.url().should("include",Cypress.env("url")+"bootstrap-modal-demo.html")
    }
    static verifyingMultipleModal(){
        cy.get("[href='#myModal']").as("MultipleModal_1")
        cy.get("@MultipleModal_1").click()
        cy.get("#myModal > .modal-dialog > .modal-content > .modal-header > .modal-title").should("have.text","First Modal")
        cy.get(".modal-body > .btn").as("MultipleModal_2")
        cy.get("@MultipleModal_2").click()
        cy.get("#myModal2 > .modal-dialog > .modal-content > .modal-header > .modal-title").should("have.text", "Modal 2")
        cy.get("#myModal2 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss='modal']").click()//Second Close
        cy.get("#myModal > .modal-dialog > .modal-content > .modal-footer > [data-dismiss='modal']").click()//First Close
        cy.url().should("include",Cypress.env("url")+"bootstrap-modal-demo.html")
        cy.get("@MultipleModal_1").click()
        cy.get("@MultipleModal_2").click()
        cy.get("#myModal2 > .modal-dialog > .modal-content > .modal-footer > .btn-primary").click()
        cy.url().should("include",Cypress.env("url")+"bootstrap-modal-demo.html")
        cy.get("@MultipleModal_1").click()
        cy.get("#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary").click()
        cy.url().should("include",Cypress.env("url")+"bootstrap-modal-demo.html")
    }
}

export {simpleForm, checkBox, radioButton, javaScriptAlerts, bootstrapAlert, bootstrapModals}
