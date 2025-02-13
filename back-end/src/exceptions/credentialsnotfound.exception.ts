import { NotFoundException } from "@nestjs/common";

export class CredentialsNotFoundException extends NotFoundException {
    constructor() {
        super({
            message: "Uma ou mais credenciais estão vazias"
        })
    }
}
