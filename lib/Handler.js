"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class ConnectionConfig {
    constructor() {
        this.name = "";
        this.handler = "";
        this.driver = null;
        this.connectionLimit = 25;
        this.hostname = "";
        this.username = "";
        this.password = "";
        this.database = "";
    }
}
exports.ConnectionConfig = ConnectionConfig;
class ResultSet {
    constructor() {
        this.rowCount = 0;
        this.id = null;
        this.rows = null;
        this.error = null;
    }
}
exports.ResultSet = ResultSet;
class ColumnInfo {
    constructor() {
        this.field = "";
        this.type = "";
        this.nullable = false;
        this.primaryKey = false;
        this.default = "";
        this.extra = "";
    }
}
exports.ColumnInfo = ColumnInfo;
class Handler {
    getConnection() { return null; }
    getTableInfo(tableName) {
        return __awaiter(this, void 0, void 0, function* () { return null; });
    }
    run(query) {
        return __awaiter(this, void 0, void 0, function* () { return null; });
    }
    eq(val0, val1) { return val0 + " = " + val1; }
    neq(val0, val1) { return val0 + " != " + val1; }
    lt(val0, val1) { return val0 + " < " + val1; }
    gt(val0, val1) { return val0 + " > " + val1; }
    lteq(val0, val1) { return val0 + " <= " + val1; }
    gteq(val0, val1) { return val0 + " >= " + val1; }
    and(values) {
        let r = "(" + values[0];
        for (let i = 1; i < values.length; i++) {
            r = r + ") and (" + values[i];
        }
        r = r + ")";
        return r;
    }
    or(values) {
        let r = "(" + values[0];
        for (let i = 1; i < values.length; i++) {
            r = r + ") or (" + values[i];
        }
        r = r + ")";
        return r;
    }
    not(val0) { return " not " + val0; }
    in(val0, val1) { return val0 + " in (" + val1 + ")"; }
    between(values) { return values[0] + " between " + values[1] + " and " + values[2]; }
    like(val0, val1) { return val0 + " like " + val1; }
    isNull(val0) { return val0 + " is null"; }
    isNotNull(val0) { return val0 + " is not null"; }
    exists(val0) { return " exists (" + val0 + ")"; }
    limit(val0, val1) { return " limit " + val0 + (val1 ? "," + val1 : ""); }
    plus(val0, val1) { return val0 + " + " + val1; }
    minus(val0, val1) { return val0 + " - " + val1; }
    multiply(val0, val1) { return val0 + " * " + val1; }
    devide(val0, val1) { return val0 + " / " + val1; }
    asc(val0) { return val0 + " asc"; }
    desc(val0) { return val0 + " desc"; }
    sum(val0) { return "sum(" + val0 + ")"; }
    min(val0) { return "min(" + val0 + ")"; }
    max(val0) { return "max(" + val0 + ")"; }
    count(val0) { return "count(" + val0 + ")"; }
    average(val0) { return "avg(" + val0 + ")"; }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Handler;
