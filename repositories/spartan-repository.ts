import {BaseRepository} from "./base/base-repository";
import {Spartan} from "../entities/spartan";

export class SpartanRepository extends BaseRepository<Spartan> {
    countOfSpartans(): Promise<number> {
        return this._collection.count({})
    }
}