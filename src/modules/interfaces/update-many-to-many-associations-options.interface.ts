import { Transaction } from 'sequelize';
import { InstanceSpecificJoinTableField } from './instanceSpecificJoinTableCreateField.interface';
import { ModelCtor } from 'sequelize-typescript';
import { CreatedByEntity } from '../models/created-by.entity';
import { JoinTableEntity } from '../models/join-table.entity';
import { AttributesOf } from '../types';

export interface UpdateManyToManyAssociationsOptions<T extends JoinTableEntity | CreatedByEntity<T>> {
    parentInstanceId: number;
    joinTableModel: ModelCtor<T>;
    parentForeignKey: keyof AttributesOf<T>;
    childForeignKey: keyof AttributesOf<T>;
    newChildren: any[];
    updatingUserId: number;
    transaction?: Transaction;
    hasSortOrder?: boolean;
    instanceSpecificJoinTableCreateFields?: InstanceSpecificJoinTableField[];
    additionalJoinTableCreateFields?: any;
}
