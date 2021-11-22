import { Db } from 'mongodb'
import { nanoid } from 'nanoid'

interface Doc {
  createdBy: string
  folder: string
  name: string
  content?: any
}

export const getOneDoc = async (db: Db, id: string) => {
  return await db.collection('docs').findOne({ _id: id })
}

export const getDocsByFolder = async (db: Db, folderId: string) => {
  return await db.collection('docs').find({ folder: folderId }).toArray()
}

export const createDoc = async (db: Db, doc: Doc) => {
  const newDoc = await db.collection('docs').insertOne({
    _id: nanoid(),
    ...doc,
    createdAt: new Date().toDateString(),
  })
  return newDoc
}

export const updateOne = async (db: Db, id: string, updates: Partial<Doc>) => {
  await db.collection('docs').updateOne({ _id: id }, { $set: updates })
  const doc = await db.collection('docs').findOne({ _id: id })
  return doc
}
