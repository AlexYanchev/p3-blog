// import { db } from '../../index.js';
// import { TablesType } from '../../common/databaseTypes.js';

// export const insertToDB = async (
//   tableName: keyof TablesType,
//   args: TablesType[typeof tableName]
// ): Promise<{
//   changes: number;
// }> => {
//   const keys = Object.keys(args) as Array<keyof typeof args>;
//   const values = keys.map((v) => args[v]);
//   const valuesPrepare = new Array(keys.length).fill('?');
//   return new Promise((resolve, reject) => {
//     db.run(
//       `INSERT INTO ${tableName} (${keys.join(
//         ', '
//       )}) VALUES (${valuesPrepare.join(', ')})`,
//       values,
//       function (err) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve({
//             changes: this.changes,
//           });
//         }
//       }
//     );
//   });
// };

// export const selectFromDB = async (
//   tableName: keyof TablesType,
//   fields: Array<keyof TablesType[typeof tableName]> | '*',
//   prop?: {
//     where?: Array<[keyof TablesType[typeof tableName], string] | 'AND' | 'OR'>;
//     extraOptions?: string;
//   }
// ): Promise<Array<Partial<TablesType[typeof tableName]>>> => {
//   const fieldsPrepare = fields === '*' ? '*' : `${fields.join(', ')}`;
//   let wherePrepare = '';
//   let sqlStr = '';
//   if (prop && prop.where) {
//     for (let item of prop.where) {
//       if (Array.isArray(item)) {
//         wherePrepare += item.join(' = ');
//       } else {
//         wherePrepare += ` ${item} `;
//       }
//     }
//   }
//   if (prop && prop.where) {
//     sqlStr = `SELECT ${fieldsPrepare} FROM ${tableName} WHERE ${wherePrepare} ${prop.extraOptions}`;
//   } else if (prop) {
//     sqlStr = `SELECT ${fieldsPrepare} FROM ${tableName} ${prop.extraOptions}`;
//   } else {
//     sqlStr = `SELECT ${fieldsPrepare} FROM ${tableName}`;
//   }
//   return new Promise((resolve, reject) => {
//     db.all(
//       sqlStr,
//       function (err, rows: Array<Partial<TablesType[typeof tableName]>>) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(rows);
//         }
//       }
//     );
//   });
// };
