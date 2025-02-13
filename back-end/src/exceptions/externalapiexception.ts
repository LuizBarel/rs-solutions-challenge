import { InternalServerErrorException } from "@nestjs/common";

export class ExternalAPIException extends InternalServerErrorException {
    data: any
    constructor(data: any) {
        super({
            status: 500,
            message: "Ocorreu um erro interno na SeruAPI",
            data: data,
        })
    }
}
