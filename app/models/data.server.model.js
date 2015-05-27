var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new mongoose.Schema({
	created_by: { type: Schema.ObjectId, ref: 'User' },
	created_at: {type: Date, default: Date.now},
	UPC: String,
	Description: String,
	Unit_Size: String, 
	Unit_Measure: String,
	Case_Units: String,
	Unit_Price_FOB: String,
	Unit_Price_Delivered: String,
	Suggested_Retail_Price: String,
	Margin_FOB: String,
	Margin_Delivered: String,
	Shelf_Life_DOM_Days: String,
	Shelf-Life_First_REC_Days: String,
	Internal_Reference_Code: String,
	Internal_Item_Number: String,
	FOB_Case_Price: String,
	Delivered_Case_Price: String,
	Pallet_Ti_Hi: String,
	Case_Net_Wt_LBS: String,
	Case_UCC: String
});


mongoose.model('Item', itemSchema);
