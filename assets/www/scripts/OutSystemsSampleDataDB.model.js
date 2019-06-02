define("OutSystemsSampleDataDB.model$Sample_TransactionTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_TransactionTypeRec = (function (_super) {
__extends(Sample_TransactionTypeRec, _super);
function Sample_TransactionTypeRec(defaults) {
_super.apply(this, arguments);
}
Sample_TransactionTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_TransactionTypeRec.init();
return Sample_TransactionTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_TransactionTypeRec = Sample_TransactionTypeRec;

});
define("OutSystemsSampleDataDB.model$Sample_AccountsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_AccountsRec = (function (_super) {
__extends(Sample_AccountsRec, _super);
function Sample_AccountsRec(defaults) {
_super.apply(this, arguments);
}
Sample_AccountsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Name", "nameAttr", "Name", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Balance", "balanceAttr", "Balance", false, false, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Overdraft", "overdraftAttr", "Overdraft", false, false, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Manager", "managerAttr", "Manager", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Owner", "ownerAttr", "Owner", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsPersonal", "isPersonalAttr", "IsPersonal", false, false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_AccountsRec.init();
return Sample_AccountsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_AccountsRec = Sample_AccountsRec;

});
define("OutSystemsSampleDataDB.model$Sample_ProductSalesRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_ProductSalesRec = (function (_super) {
__extends(Sample_ProductSalesRec, _super);
function Sample_ProductSalesRec(defaults) {
_super.apply(this, arguments);
}
Sample_ProductSalesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Date", "dateAttr", "Date", false, false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Cost", "costAttr", "Cost", false, false, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Quantity", "quantityAttr", "Quantity", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Product", "productAttr", "Product", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_ProductSalesRec.init();
return Sample_ProductSalesRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_ProductSalesRec = Sample_ProductSalesRec;

});
define("OutSystemsSampleDataDB.model$Sample_DepartmentRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_DepartmentRec = (function (_super) {
__extends(Sample_DepartmentRec, _super);
function Sample_DepartmentRec(defaults) {
_super.apply(this, arguments);
}
Sample_DepartmentRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Name", "nameAttr", "Name", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_DepartmentRec.init();
return Sample_DepartmentRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_DepartmentRec = Sample_DepartmentRec;

});
define("OutSystemsSampleDataDB.model$Sample_NotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_NotificationRec = (function (_super) {
__extends(Sample_NotificationRec, _super);
function Sample_NotificationRec(defaults) {
_super.apply(this, arguments);
}
Sample_NotificationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.Types.DateTime, function () {
return OS.BuiltinFunctions.currDateTime();
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_NotificationRec.init();
return Sample_NotificationRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_NotificationRec = Sample_NotificationRec;

});
define("OutSystemsSampleDataDB.model$Sample_PriorityRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_PriorityRec = (function (_super) {
__extends(Sample_PriorityRec, _super);
function Sample_PriorityRec(defaults) {
_super.apply(this, arguments);
}
Sample_PriorityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_PriorityRec.init();
return Sample_PriorityRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_PriorityRec = Sample_PriorityRec;

});
define("OutSystemsSampleDataDB.model$Sample_TransactionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_TransactionRec = (function (_super) {
__extends(Sample_TransactionRec, _super);
function Sample_TransactionRec(defaults) {
_super.apply(this, arguments);
}
Sample_TransactionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("SourceAccount", "sourceAccountAttr", "SourceAccount", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("DestinationAccount", "destinationAccountAttr", "DestinationAccount", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Date", "dateAttr", "Date", false, false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Amount", "amountAttr", "Amount", false, false, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Balance", "balanceAttr", "Balance", false, false, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Type", "typeAttr", "Type", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_TransactionRec.init();
return Sample_TransactionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_TransactionRec = Sample_TransactionRec;

});
define("OutSystemsSampleDataDB.model$Sample_OfficeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_OfficeRec = (function (_super) {
__extends(Sample_OfficeRec, _super);
function Sample_OfficeRec(defaults) {
_super.apply(this, arguments);
}
Sample_OfficeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Address", "addressAttr", "Address", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_OfficeRec.init();
return Sample_OfficeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_OfficeRec = Sample_OfficeRec;

});
define("OutSystemsSampleDataDB.model$Sample_BudgetRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_BudgetRec = (function (_super) {
__extends(Sample_BudgetRec, _super);
function Sample_BudgetRec(defaults) {
_super.apply(this, arguments);
}
Sample_BudgetRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Budget", "budgetAttr", "Budget", false, false, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("CurrentAmount", "currentAmountAttr", "CurrentAmount", false, false, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Account", "accountAttr", "Account", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Type", "typeAttr", "Type", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_BudgetRec.init();
return Sample_BudgetRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_BudgetRec = Sample_BudgetRec;

});
define("OutSystemsSampleDataDB.model$Sample_ProductRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_ProductRec = (function (_super) {
__extends(Sample_ProductRec, _super);
function Sample_ProductRec(defaults) {
_super.apply(this, arguments);
}
Sample_ProductRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Image", "imageAttr", "Image", false, false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("Filename", "filenameAttr", "Filename", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Price", "priceAttr", "Price", false, false, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Stock", "stockAttr", "Stock", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("MaxStock", "maxStockAttr", "MaxStock", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("StockThreshold", "stockThresholdAttr", "StockThreshold", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_ProductRec.init();
return Sample_ProductRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_ProductRec = Sample_ProductRec;

});
define("OutSystemsSampleDataDB.model$Sample_RequestStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_RequestStatusRec = (function (_super) {
__extends(Sample_RequestStatusRec, _super);
function Sample_RequestStatusRec(defaults) {
_super.apply(this, arguments);
}
Sample_RequestStatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_RequestStatusRec.init();
return Sample_RequestStatusRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_RequestStatusRec = Sample_RequestStatusRec;

});
define("OutSystemsSampleDataDB.model$Sample_RequestRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_RequestRec = (function (_super) {
__extends(Sample_RequestRec, _super);
function Sample_RequestRec(defaults) {
_super.apply(this, arguments);
}
Sample_RequestRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("RequestName", "requestNameAttr", "RequestName", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("DueDate", "dueDateAttr", "DueDate", false, false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("CompletedOn", "completedOnAttr", "CompletedOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Priority", "priorityAttr", "Priority", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("AssignedTo", "assignedToAttr", "AssignedTo", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ReviewedBy", "reviewedByAttr", "ReviewedBy", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Status", "statusAttr", "Status", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("RequestedBy", "requestedByAttr", "RequestedBy", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_RequestRec.init();
return Sample_RequestRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_RequestRec = Sample_RequestRec;

});
define("OutSystemsSampleDataDB.model$Sample_ProductInventoryRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_ProductInventoryRec = (function (_super) {
__extends(Sample_ProductInventoryRec, _super);
function Sample_ProductInventoryRec(defaults) {
_super.apply(this, arguments);
}
Sample_ProductInventoryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Inventory", "inventoryAttr", "Inventory", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Date", "dateAttr", "Date", false, false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Product", "productAttr", "Product", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("WarehouseLocation", "warehouseLocationAttr", "WarehouseLocation", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_ProductInventoryRec.init();
return Sample_ProductInventoryRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_ProductInventoryRec = Sample_ProductInventoryRec;

});
define("OutSystemsSampleDataDB.model$Sample_EmployeeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_EmployeeRec = (function (_super) {
__extends(Sample_EmployeeRec, _super);
function Sample_EmployeeRec(defaults) {
_super.apply(this, arguments);
}
Sample_EmployeeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("FirstName", "firstNameAttr", "FirstName", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("BirthDate", "birthDateAttr", "BirthDate", false, false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Email", "emailAttr", "Email", false, false, OS.Types.Email, function () {
return "";
}), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.Types.PhoneNumber, function () {
return "";
}), 
this.attr("Bio", "bioAttr", "Bio", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("HiringDate", "hiringDateAttr", "HiringDate", false, false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Office", "officeAttr", "Office", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Picture", "pictureAttr", "Picture", false, false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("Filename", "filenameAttr", "Filename", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("JobPosition", "jobPositionAttr", "JobPosition", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Department", "departmentAttr", "Department", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Manager", "managerAttr", "Manager", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Address", "addressAttr", "Address", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("City", "cityAttr", "City", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("ZipCode", "zipCodeAttr", "ZipCode", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_EmployeeRec.init();
return Sample_EmployeeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_EmployeeRec = Sample_EmployeeRec;

});
define("OutSystemsSampleDataDB.model$Sample_ProductCategoryRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_ProductCategoryRec = (function (_super) {
__extends(Sample_ProductCategoryRec, _super);
function Sample_ProductCategoryRec(defaults) {
_super.apply(this, arguments);
}
Sample_ProductCategoryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_ProductCategoryRec.init();
return Sample_ProductCategoryRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_ProductCategoryRec = Sample_ProductCategoryRec;

});
define("OutSystemsSampleDataDB.model$Sample_WarehouseLocationRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_WarehouseLocationRec = (function (_super) {
__extends(Sample_WarehouseLocationRec, _super);
function Sample_WarehouseLocationRec(defaults) {
_super.apply(this, arguments);
}
Sample_WarehouseLocationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Location", "locationAttr", "Location", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_WarehouseLocationRec.init();
return Sample_WarehouseLocationRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_WarehouseLocationRec = Sample_WarehouseLocationRec;

});
define("OutSystemsSampleDataDB.model$Sample_RequestFileRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model"], function (exports, OutSystems, OutSystemsSampleDataDBModel) {
var OS = OutSystems.Internal;
var Sample_RequestFileRec = (function (_super) {
__extends(Sample_RequestFileRec, _super);
function Sample_RequestFileRec(defaults) {
_super.apply(this, arguments);
}
Sample_RequestFileRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Sample_RequestId", "sample_RequestIdAttr", "Sample_RequestId", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("File", "fileAttr", "File", false, false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("Filename", "filenameAttr", "Filename", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Filetype", "filetypeAttr", "Filetype", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Sample_RequestFileRec.init();
return Sample_RequestFileRec;
})(OS.DataTypes.GenericRecord);
OutSystemsSampleDataDBModel.Sample_RequestFileRec = Sample_RequestFileRec;

});
define("OutSystemsSampleDataDB.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var OutSystemsSampleDataDBModel = exports;
});
