export type Bookmark = {
  id: string;
  title: string;
  url: string;
  tags: string[];
};

export const getAllBookmarks = async (
  db: PouchDB.Database
): Promise<Bookmark[]> => {
  await db.createIndex({
    index: {
      fields: ["createdAt"]
    }
  });
  const data = (await db.find({
    selector: {},
    sort: [{ createdAt: "desc" }]
  })) as PouchDB.Find.FindResponse<Bookmark>;

  if (data.docs.length === 0) return [];
  return data.docs.map<Bookmark>(doc => {
    const { title, url, tags, _id } = doc!;
    return { title, url, tags, id: _id };
  });
};

export const getByTag = async (
  db: PouchDB.Database,
  tag: string
): Promise<Bookmark[]> => {
  await db.createIndex({
    index: {
      fields: ["tags", "createdAt"]
    }
  });
  const data = (await db.find({
    selector: {
      tags: { $elemMatch: tag },
      createdAt: {}
    },
    sort: [{ createdAt: "desc" }]
  })) as PouchDB.Find.FindResponse<Bookmark>;

  if (data.docs.length === 0) return [];
  return data.docs.map<Bookmark>(doc => {
    const { title, url, tags, _id } = doc!;
    return { title, url, tags, id: _id };
  });
};
