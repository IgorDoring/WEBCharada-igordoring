import { TestBed } from '@angular/core/testing';

import { TabuleiroService } from './tabuleiro.service';

describe('TabuleiroService', () => {
  let service: TabuleiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabuleiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
