import {Db, Collection, ObjectId} from 'mongodb';

import {IWrite} from "../interfaces/i-write";
import {IRead} from "../interfaces/i-read";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    public readonly _collection: Collection;

    constructor(db: Db, collectionName: string) {
        this._collection = db.collection(collectionName);
    }

    async create(item: T): Promise<boolean> {
        const result: { acknowledged: boolean, insertedId: ObjectId } = await this._collection.insertOne(item);

        return result.acknowledged;
    }

    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented');
    }

    find(item: T): Promise<T[]> {
        throw new Error('Method not implemented');
    }

    findOne(id: string): Promise<T> {
        throw new Error('Method not implemented');
    }

    update(id: string, item: T): Promise<boolean> {
        throw new Error('Method not implemented');
    }
}