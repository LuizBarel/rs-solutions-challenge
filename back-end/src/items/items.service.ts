import { Injectable } from '@nestjs/common';
import { AdditionalsService } from 'src/additionals/additionals.service';
import { CancelAuthorizedByService } from 'src/cancel-authorized-by/cancel-authorized-by.service';
import { CanceledByService } from 'src/canceled-by/canceled-by.service';
import { CreatedByService } from 'src/created-by/created-by.service';
import { Item } from 'src/database/entities/item.entity';
import { TaxInfoService } from 'src/tax-info/tax-info.service';
import { QueryRunner } from 'typeorm';
// import { CreateItemDto } from './dto/create-item.dto';
// import { UpdateItemDto } from './dto/update-item.dto';
/* eslint-disable */

@Injectable()
export class ItemsService {
    constructor(
        private additionalsService: AdditionalsService,
        private taxInfoService: TaxInfoService,
        private createdByService: CreatedByService,
        private canceledByService: CanceledByService,
        private cancelAuthorizedByService: CancelAuthorizedByService,
    ) {}

    async create(item, orderId, queryRunner: QueryRunner, parentItemId?) {
        try {
            const itemExisting = await queryRunner.manager.findOneBy(Item, {
                stringItems: item.id,
            });
            if (itemExisting) return itemExisting.iditems;

            let taxInfo, createdBy, canceledBy, cancelAuthorizedBy;
            if (item.taxInfo)
                taxInfo = await this.taxInfoService.create(
                    item.taxInfo,
                    queryRunner,
                );
            if (item.createdBy)
                createdBy = await this.createdByService.create(
                    item.createdBy,
                    queryRunner,
                );
            if (item.canceledBy)
                canceledBy = await this.canceledByService.create(
                    item.canceledBy,
                    queryRunner,
                );
            if (item.cancelAuthorizedBy)
                cancelAuthorizedBy =
                    await this.cancelAuthorizedByService.create(
                        item.cancelAuthorizedBy,
                        queryRunner,
                    );

            const dataForItem = queryRunner.manager.create(Item, {
                stringItems: item.id,
                sku_items: item.sku,
                name_items: item.name,
                picture_items: item.picture,
                quantity_items: item.quantity,
                unitPrice_items: item.unitPrice,
                discount_items: item.discount,
                serviceCharge: item.serviceCharge,
                totalPrice_items: item.totalPrice,
                canceled: item.canceled,
                canceledAt: item.canceledAt,
                note_items: item.note,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt,
                sentTokdsAt: item.sentToKdsAt,
                comboType: item.comboType,
                taxInfo: taxInfo,
                createdBy: createdBy,
                canceledBy: canceledBy,
                cancelAuthorizedBy: cancelAuthorizedBy,
                order: orderId,
                parent: parentItemId,
            });

            const createdItem = await queryRunner.manager.save(
                Item,
                dataForItem,
            );

            for (const additional of item.additionals) {
                await this.additionalsService.create(
                    additional,
                    createdItem.iditems,
                    queryRunner,
                );
            }

            if (item.comboType) {
                for (const subitem of item.subitems) {
                    await this.create(
                        subitem,
                        orderId,
                        queryRunner,
                        createdItem.iditems,
                    );
                }
            }

            return createdItem;
        } catch (error) {
            console.log('Erro ao criar item: ' + error);
            throw error;
        }
    }
}
