/// <reference types="Cypress" />
class tableSortAndSearch{
    static selectingNumberOfEntries(numberOfEntries){
        cy.get("select").select(numberOfEntries)
    }
    static verifiyingNumberOfButtons(numberOfButtons){
        cy.get("span a[class*='paginate_button ']").as("pageButtons")
        cy.get("@pageButtons").should("have.length", numberOfButtons)
        for (let index = 0; index < parseInt(numberOfButtons) ; index++) {
            let value = index + 1
            cy.get("@pageButtons").eq(index).should("have.text",value.toString())
        }
    }
    static clickingPageButton(pageNumber){
        let buttonIndex = parseInt(pageNumber) - 1
        cy.get("span a[class*='paginate_button ']").eq(buttonIndex).click()
    }
    static verifiyingMessageForEntries(message){
        cy.get(".dataTables_info").should("have.text",message)
    }
    static verifiyingNumberOfEntriesPerPage(numberOfEntries){
        cy.get("tbody tr").should("have.length", numberOfEntries)
    }
    static sorting_By(column, order){
        let columnLocator = "th[aria-label*='"+ column + "']"
        if(column === "Name"){
            if (order === "desc") {
                cy.get(columnLocator).click()
            }
        }else{
            if (order === "asc"){
                cy.get(columnLocator).click()
            }else{
                cy.get(columnLocator).click()
                cy.get(columnLocator).click()
            }
        }
    }
    static verifyingDataIsSorted(column, order, maximum_entries, originalTable){
        const tableSorted = this.sortingArray2D(column,order,originalTable)
        const numberOfButtons = this.calculatingNumberOfButtons(parseInt(maximum_entries))
        let row = 0
        let col = 0
        let offset = 0
        for (let index = 1; index <= numberOfButtons; index++) {
            cy.get("[data-dt-idx='"+index+"']").click() //Clicking an specific button
            cy.get("tbody tr td").each((field,i) => {
                row = Math.floor(i/6)
                col = i%6
                offset = (index-1)*parseInt(maximum_entries)
                cy.wrap(field).should("have.text", tableSorted[row+offset][col])
            }) 
        } 
    }
    static calculatingNumberOfButtons(maximum_entries){
        var numberOfButtons = Math.floor(32/maximum_entries)
        if (32%maximum_entries !== 0) {
            numberOfButtons++
        } 
        return numberOfButtons
    }
    static sortingArray2D(column, order, array){
        //Cloning the original array
        const data = []
        array.slice(1,array.length).forEach((row)=>{
            data.push([...row])
        })
        //Converting columns 3 and 5 into numbers
        data.forEach(function(row) {
            row[3]=parseInt(row[3])        
            row[5]=row[5].slice(1,row[5].length-2)
            row[5]=row[5].split("").reverse().join("")
            row[5]=row[5].replace(",",".")
            row[5]=row[5].replace(",","")
            row[5]=row[5].split("").reverse().join("")
            row[5]=parseFloat(row[5])

        })
        //Converting column 4 into dates
        data.forEach(function(row){
            row[4] = row[4].slice(4,row[4].length).replace("th","").replace("nd","").replace("rd","").replace("st","")
            row[4] = new Date(Date.parse(row[4]))
        })
        //Sorting
        let columnIndex = array[0].indexOf(column)
        if (order === "asc") {
            data.sort(function(a,b){
                if(a[columnIndex] < b[columnIndex]){
                    return -1
                }
                if(a[columnIndex] > b[columnIndex]){
                    return 1
                }
                return 0
            })
        } else {
            data.sort(function(a,b){
                if(a[columnIndex] > b[columnIndex]){
                    return -1
                }
                if(a[columnIndex] < b[columnIndex]){
                    return 1
                }
                return 0
            })        
        }
        //Returning data columns 3, 4 and 5 to their original format
        data.forEach((row) => {
            row[3]=row[3].toString()
            for (let index = 0; index < array.length; index++) {
                if(row[0] === array[index][0]){
                    row[5] = array[index][5]
                    row[4] = array[index][4]
                }
            }
        })
        return data
    }
}

export {tableSortAndSearch}