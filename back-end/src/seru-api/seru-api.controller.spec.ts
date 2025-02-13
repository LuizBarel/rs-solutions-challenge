import { Test, TestingModule } from '@nestjs/testing';
import { SeruApiController } from './seru-api.controller';

describe('SeruApiController', () => {
    let controller: SeruApiController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SeruApiController],
        }).compile();

        controller = module.get<SeruApiController>(SeruApiController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
