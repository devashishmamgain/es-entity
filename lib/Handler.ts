import * as Query from "./Query";

export class ConnectionConfig {
	name: string = "";
	handler: string = "";
	driver: any = null;
	connectionLimit = 25;
	hostname: string = "";  // Default Mysql
	username: string = "";
	password: string = "";
	database: string = "";
}

export class ResultSet {
	rowCount: number = 0;
	id: any = null;
	rows: Array<any> = null;
	error: string = null;

	constructor() {
	}
}

export class ColumnInfo {
	field: string = "";
	type: string = "";
	nullable: boolean = false;
	primaryKey: boolean = false;
	default: string = "";
	extra: string = "";
}

export default class Handler {
	public config: ConnectionConfig;

	getConnection(): any { return null; }
	async getTableInfo(tableName: string): Promise<Array<ColumnInfo>> { return null; }
	async run(query: string | Query.ISqlNode): Promise<ResultSet> { return null; }

		// Comparison Operators
	 eq(val0: string, val1: string): string { return val0 + " = " + val1; }
	 neq(val0: string, val1: string): string { return val0 + " != " + val1; }
	 lt(val0: string, val1: string): string { return val0 + " < " + val1; }
	 gt(val0: string, val1: string): string { return val0 + " > " + val1; }
	 lteq(val0: string, val1: string): string { return val0 + " <= " + val1; }
	 gteq(val0: string, val1: string): string { return val0 + " >= " + val1; }

	// Logical Operators
	 and(values: string[]): string {
		let r = "(" + values[0];
		for (let i = 1; i < values.length; i++) {
			r = r + ") and (" + values[i];
		}
		r = r + ")";
		return r;
	 }
	 or(values: string[]): string {
		let r = "(" + values[0];
		for (let i = 1; i < values.length; i++) {
			r = r + ") or (" + values[i];
		}
		r = r + ")";
		return r;
	 }
	 not(val0: string): string { return " not " + val0; }

	// Inclusion Funtions
	 in(val0: string, val1: string): string { return val0 + " in (" + val1 + ")"; }
	 between(values: string[]): string { return values[0] + " between " + values[1] + " and " + values[2]; }
	 like(val0: string, val1: string): string { return val0 + " like " + val1; }
	 isNull(val0: string): string { return val0 + " is null"; }
	 isNotNull(val0: string): string { return val0 + " is not null"; }
	 exists(val0: string): string { return " exists (" + val0 + ")"; }
	 limit(val0: string, val1: string): string { return " limit " + val0 + (val1 ? "," + val1 : ""); }

	// Arithmatic Operators
	 plus(val0: string, val1: string): string { return val0 + " + " + val1; }
	 minus(val0: string, val1: string): string { return val0 + " - " + val1; }
	 multiply(val0: string, val1: string): string { return val0 + " * " + val1; }
	 devide(val0: string, val1: string): string { return val0 + " / " + val1; }

	// Sorting Operators
	 asc(val0: string): string { return val0 + " asc"; }
	 desc(val0: string): string { return val0 + " desc"; }

	// Group Functions
	 sum(val0: string): string { return "sum(" + val0 + ")"; }
	 min(val0: string): string { return "min(" + val0 + ")"; }
	 max(val0: string): string { return "max(" + val0 + ")"; }
	 count(val0: string): string { return "count(" + val0 + ")"; }
	 average(val0: string): string { return "avg(" + val0 + ")"; }

}
