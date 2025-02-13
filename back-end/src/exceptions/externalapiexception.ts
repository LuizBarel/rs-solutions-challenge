import { InternalServerErrorException } from '@nestjs/common';

export class ExternalAPIException extends InternalServerErrorException {
    data: Array<object>;
    constructor(data: Array<object>) {
        super({
            status: 500,
            message: 'Ocorreu um erro interno na SeruAPI',
            data: data,
        });
    }
}
