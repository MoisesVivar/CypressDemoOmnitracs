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

export {simpleForm, checkBox}
