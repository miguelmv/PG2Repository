cordova.define("com.mirasense.scanditsdk.plugin.MatrixScanSession", function(require, exports, module) { 
function MatrixScanSession(newlyTrackedCodes) {
	this.newlyTrackedCodes = newlyTrackedCodes;
	this.rejectedTrackedCodes = [];
}

MatrixScanSession.prototype.rejectTrackedCode = function(code) {
	this.rejectedTrackedCodes.push(code.uniqueId);
}

module.exports = MatrixScanSession;

});
