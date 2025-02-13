import { Test, TestingModule } from '@nestjs/testing';
import { SeruApiService } from './seru-api.service';

describe('SeruApiService', () => {
    let service: SeruApiService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SeruApiService],
        }).compile();

        service = module.get<SeruApiService>(SeruApiService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
