import { Controller, Get } from '@nestjs/common';
import { SeruApiService } from './seru-api.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
/* eslint-disable */

@ApiTags('Seru-API Externa')
@Controller('seru-api')
export class SeruApiController {
    constructor(private readonly seruApiService: SeruApiService) {}

    @Get('populate')
    @ApiOperation({
        summary:
            'Rota para popular o banco de dados com alguns dados da SeruAPI',
    })
    @ApiResponse({ status: 200, description: 'Mensagem de sucesso' })
    async populate() {
        return this.seruApiService.populate();
    }
}
