import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";

let _db: PouchDB.Database | null;

const init = () => {
  try {
    PouchDB.plugin(PouchDBFind);
    PouchDB.sync("bookmarks", "http://localhost:5984/bookmarks", {
      live: true
    });
    console.log("db initialized");
    _db = new PouchDB("bookmarks");
    return _db;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getInstance = () => {
  if (_db) return _db;
  return init();
};

export const resetDb = async () => {
  if (!_db) return init();
  const docs = await _db.allDocs({ include_docs: true });
  docs.rows.filter(row => row.doc).map(row => _db!.remove(row.doc!));
};

export const subscribeToChanges = (
  db: PouchDB.Database,
  cbk: (value: PouchDB.Core.ChangesResponseChange<{}>) => any
): PouchDB.Core.Changes<any> => {
  const changesRef = db.changes({
    live: true,
    include_docs: false,
    since: "now"
  });
  return changesRef.on("change", cbk);
};
