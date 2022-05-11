const router = require('express').Router()
const Roles = require('../controller/role')
const Auth = require('../tools/auth')
const User = require('../controller/user')
const District = require('../controller/district')
const Inquiry = require('../controller/inquiry')
const Stall = require('../controller/stall')
const Vendor = require('../controller/vendor')
const Invoice = require('../controller/invoice')
const ReportVendor = require('../controller/reportVendor')
const ReportInvoice = require('../controller/reportInvoice')
const ReportProduct = require('../controller/reportProduct')
const Product = require('../controller/product')
const Market = require ('../controller/market')
const AuthSecure = require('../tools/auth.secure')

//Begin Auth

router.post('/user-login', Auth.post.login)


//End Auth

// User Begin
router.post('/user', User.post.create)
router.put('/edit-password',User.put.editPassword)

//User End

//Begin Role

router.get('/roles',  Roles.get.roles)
router.get('/user-role/:user', Roles.get.roleByUsername)


//End Roles

//Begin District
router.get('/districts', District.get.districts)
//End District

//Begin Inquiry
router.get('/inquiry', Inquiry.get.Inquiries)
router.get('/totalinquiry', Inquiry.get.totalInquiry)
//End

//Begin Stall

router.get('/totalstall', Stall.get.totalStall)
router.post('/admin/stalls', Stall.get.stallByMarket)
//End 

//Begin Vendor

router.get('/totalvendor', Vendor.get.totalVendor)

//End 

//Begin Invoice - Vendor
//router.use('/vendor', AuthSecure)
router.get('/totalinvoice', Invoice.get.totalInvoice)
router.post('/vendor/totalexpense', Invoice.get.totalExpense)
router.post('/vendor/invoicestatus', Invoice.get.invoiceStatus)
router.post('/vendor/invoice-report', Invoice.get.invoiceReport)
router.get('/admin/invoices', Invoice.get.invoiceList)
router.get('/admin/invoice-pending', Invoice.get.invoicePending)
router.post('/admin/invoices-id' ,Invoice.get.viewInvoiceByNo)
router.post('/admin/create-invoice', Invoice.post.createInvoice)
//End

//Begin Vendor Reports
router.get('/vendor/expense-pdf', ReportVendor.get.getExpensePdf)
router.post('/vendor/create-expense-pdf', ReportVendor.post.expensePdf)
router.get('/vendor/invoice-pdf',ReportInvoice.get.getInvoicePdf)
router.post('/vendor/create-invoice-pdf', ReportInvoice.post.invoicePdf)
router.get('/vendor/product-pdf', ReportProduct.get.getStockPdf)
router.post('/vendor/create-product-pdf', ReportProduct.post.stockPdf)

//End

//Begin Product
router.post('/vendor/product-stock', Product.get.productStock)
// End

//Begin Market - Admin

router.get('/admin/markets', Market.get.markets)
//



module.exports=router