"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_couchbase_plugin_1 = require("nativescript-couchbase-plugin");
var applicationSettings = require("tns-core-modules/application-settings");
var mainDB = "Main";
exports.database = new nativescript_couchbase_plugin_1.Couchbase(mainDB);
function getPersistDocumentId(key) {
    return applicationSettings.getString(key);
}
function setPersistDocumentId(key, id) {
    return applicationSettings.setString(key, id);
}
function readFromDocument(name) {
    var documentId = getPersistDocumentId(name);
    if (documentId) {
        return exports.database.getDocument(documentId);
    }
    return undefined;
}
exports.readFromDocument = readFromDocument;
function writeToDocument(name, data) {
    var documentId = getPersistDocumentId(name);
    if (documentId) {
        exports.database.updateDocument(documentId, data);
    }
    else {
        setPersistDocumentId(name, exports.database.createDocument(data));
    }
}
exports.writeToDocument = writeToDocument;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hiYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291Y2hiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0VBQXdEO0FBQ3hELDJFQUE2RTtBQUU3RSxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFFVCxRQUFBLFFBQVEsR0FBRyxJQUFJLHlDQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFOUMsU0FBUyxvQkFBb0IsQ0FBQyxHQUFXO0lBQ3JDLE9BQU8sbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFRCxTQUFTLG9CQUFvQixDQUFDLEdBQVcsRUFBRSxFQUFVO0lBQ2pELE9BQU8sbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBWTtJQUN6QyxJQUFNLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU5QyxJQUFJLFVBQVUsRUFBRTtRQUNaLE9BQU8sZ0JBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7S0FDMUM7SUFDRCxPQUFPLFNBQVMsQ0FBQTtBQUNwQixDQUFDO0FBUEQsNENBT0M7QUFFRCxTQUFnQixlQUFlLENBQUMsSUFBWSxFQUFFLElBQVM7SUFDbkQsSUFBTSxVQUFVLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFOUMsSUFBSSxVQUFVLEVBQUU7UUFDWixnQkFBUSxDQUFDLGNBQWMsQ0FDbkIsVUFBVSxFQUNWLElBQUksQ0FDUCxDQUFBO0tBQ0o7U0FBTTtRQUNILG9CQUFvQixDQUNoQixJQUFJLEVBQ0osZ0JBQVEsQ0FBQyxjQUFjLENBQ25CLElBQUksQ0FDUCxDQUNKLENBQUE7S0FDSjtBQUNMLENBQUM7QUFoQkQsMENBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb3VjaGJhc2V9IGZyb20gXCJuYXRpdmVzY3JpcHQtY291Y2hiYXNlLXBsdWdpblwiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5jb25zdCBtYWluREIgPSBcIk1haW5cIjtcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlID0gbmV3IENvdWNoYmFzZShtYWluREIpO1xuXG5mdW5jdGlvbiBnZXRQZXJzaXN0RG9jdW1lbnRJZChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiBhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhrZXkpO1xufVxuXG5mdW5jdGlvbiBzZXRQZXJzaXN0RG9jdW1lbnRJZChrZXk6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIHJldHVybiBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhrZXksIGlkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGcm9tRG9jdW1lbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZG9jdW1lbnRJZCA9IGdldFBlcnNpc3REb2N1bWVudElkKG5hbWUpO1xuXG4gICAgaWYgKGRvY3VtZW50SWQpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFiYXNlLmdldERvY3VtZW50KGRvY3VtZW50SWQpXG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlVG9Eb2N1bWVudChuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IGRvY3VtZW50SWQgPSBnZXRQZXJzaXN0RG9jdW1lbnRJZChuYW1lKTtcblxuICAgIGlmIChkb2N1bWVudElkKSB7XG4gICAgICAgIGRhdGFiYXNlLnVwZGF0ZURvY3VtZW50KFxuICAgICAgICAgICAgZG9jdW1lbnRJZCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQZXJzaXN0RG9jdW1lbnRJZChcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBkYXRhYmFzZS5jcmVhdGVEb2N1bWVudChcbiAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxufSJdfQ==