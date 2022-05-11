const db = require('../config/db')

const invoice ={

    get:{

        async totalInvoice(){
            let query = 'select * from totalinvoice_view'
            return await db(query,0, async data =>data)
        },

        async totalExpense(username){

            let query = 'call sp_totalExpense(?) '
            return await db(query,[username], async data=>data[0])

        },

        async statusInvoice(username){

            let query = 'call sp_invoicestatus(?)'
            return await db(query,[username], async data=>data[0])

        },

        async invocieReport(username){

            let query = 'call sp_InvoiceReport(?)'
            return await db(query,[username], async data=>data[0])

        },

        async invoiceList(){

            let query = ' select * from invoicepaid_view'
            return await db(query,0, async data =>data)

        },
         async invoicePending(){

            let query = ' select * from invoicepending_view'
            return await db(query,0, async data =>data)

         },

         async viewInvoiceByNo(invoice){

            let query = 'call sp_viewInvoiceByInvoiceNo(?)'
            return await db(query,[invoice], async data=>data[0])
         }

       
    },

    post:{
        async createInvoice($invoice){
            let query = 'call sp_createInvoice(?, ?, ?, ?, ?,?,?,?) '
            return await db(query,[$invoice.stall, $invoice.total, $invoice.dueData, $invoice.rent, $invoice.light, $invoice.water, $invoice.detail, $invoice.other])
        }
    },

    put:{


    }


}

module.exports = invoice 